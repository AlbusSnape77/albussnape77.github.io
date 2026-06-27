const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const { exec } = require("node:child_process");

const ROOT = __dirname;
const DIARY_FILE = path.join(ROOT, "diary.json");
const HOST = "127.0.0.1";
const START_PORT = 8787;
const WRITE_HEADER = "x-diary-editor";
const WRITE_HEADER_VALUE = "pphome-local";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon",
};

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

function formatDate(date) {
  return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
}

async function readDiaryFile(filePath = DIARY_FILE) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : Array.isArray(data.entries) ? data.entries : [];
  } catch (err) {
    if (err && err.code === "ENOENT") return [];
    throw err;
  }
}

async function writeDiaryFile(filePath, entries) {
  const dir = path.dirname(filePath);
  const tmp = path.join(dir, ".diary.tmp.json");
  await fs.writeFile(tmp, JSON.stringify(entries, null, 2) + "\n", "utf8");
  await fs.rename(tmp, filePath);
}

async function appendDiaryEntry(filePath, input, options = {}) {
  const text = String((input && input.text) || "").trim();
  if (!text) {
    const err = new Error("Diary text is required.");
    err.status = 400;
    throw err;
  }

  const now = options.now || new Date();
  const id = Number(options.id || Date.now());
  const entry = {
    id,
    date: formatDate(now),
    title: String((input && input.title) || "").trim().slice(0, 80),
    text: text.slice(0, 12000),
  };

  const entries = await readDiaryFile(filePath);
  const next = [entry].concat(entries.filter((item) => String(item.id) !== String(id)));
  await writeDiaryFile(filePath, next);
  return next;
}

function normalizeImportedEntry(input) {
  const text = String((input && input.text) || "").trim();
  if (!text) return null;
  const id = Number(input && input.id) || Date.now();
  return {
    id,
    date: String((input && input.date) || formatDate(new Date())).slice(0, 10),
    title: String((input && input.title) || "").trim().slice(0, 80),
    text: text.slice(0, 12000),
  };
}

async function importDiaryEntries(filePath, importedEntries) {
  const current = await readDiaryFile(filePath);
  const seen = new Set(current.map((item) => String(item.id)));
  const fresh = [];

  for (const item of Array.isArray(importedEntries) ? importedEntries : []) {
    const entry = normalizeImportedEntry(item);
    if (!entry || seen.has(String(entry.id))) continue;
    seen.add(String(entry.id));
    fresh.push(entry);
  }

  const next = fresh.concat(current).sort((a, b) => Number(b.id) - Number(a.id));
  await writeDiaryFile(filePath, next);
  return next;
}

async function removeDiaryEntry(filePath, id) {
  const entries = await readDiaryFile(filePath);
  const next = entries.filter((item) => String(item.id) !== String(id));
  await writeDiaryFile(filePath, next);
  return next;
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(data));
}

function sendText(res, status, text) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
  res.end(text);
}

function canWrite(req) {
  return req.headers[WRITE_HEADER] === WRITE_HEADER_VALUE;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(Object.assign(new Error("Request body is too large."), { status: 413 }));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function handleApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/diary") {
    sendJson(res, 200, await readDiaryFile(DIARY_FILE));
    return;
  }

  if (!canWrite(req)) {
    sendJson(res, 403, { error: "Local editor only." });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/diary") {
    const body = await readBody(req);
    const input = body ? JSON.parse(body) : {};
    sendJson(res, 200, await appendDiaryEntry(DIARY_FILE, input));
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/diary/import") {
    const body = await readBody(req);
    const input = body ? JSON.parse(body) : {};
    sendJson(res, 200, await importDiaryEntries(DIARY_FILE, input.entries));
    return;
  }

  const del = url.pathname.match(/^\/api\/diary\/([^/]+)$/);
  if (req.method === "DELETE" && del) {
    sendJson(res, 200, await removeDiaryEntry(DIARY_FILE, decodeURIComponent(del[1])));
    return;
  }

  sendJson(res, 404, { error: "Not found." });
}

async function serveStatic(req, res, url) {
  const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const safePath = path.normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.resolve(ROOT, "." + safePath);
  const rootWithSep = ROOT.endsWith(path.sep) ? ROOT : ROOT + path.sep;

  if (filePath !== ROOT && !filePath.startsWith(rootWithSep)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "content-type": MIME[ext] || "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(data);
  } catch (err) {
    if (err && err.code === "ENOENT") {
      const index = await fs.readFile(path.join(ROOT, "index.html"));
      res.writeHead(200, {
        "content-type": MIME[".html"],
        "cache-control": "no-store",
      });
      res.end(index);
      return;
    }
    throw err;
  }
}

function createServer() {
  return http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://" + req.headers.host);
      if (url.pathname.startsWith("/api/")) {
        await handleApi(req, res, url);
      } else {
        await serveStatic(req, res, url);
      }
    } catch (err) {
      sendJson(res, err.status || 500, { error: err.message || "Server error." });
    }
  });
}

function openBrowser(url) {
  const quoted = '"' + url.replace(/"/g, "") + '"';
  const command =
    process.platform === "win32"
      ? "start \"\" " + quoted
      : process.platform === "darwin"
        ? "open " + quoted
        : "xdg-open " + quoted;
  exec(command);
}

function listenWithFallback(port, openOnStart) {
  const server = createServer();
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE" && port < START_PORT + 10) {
      listenWithFallback(port + 1, openOnStart);
      return;
    }
    console.error(err.message);
    process.exitCode = 1;
  });
  server.listen(port, HOST, () => {
    const url = "http://" + HOST + ":" + port + "/#diary";
    console.log("Local site is running:");
    console.log(url);
    console.log("");
    console.log("Keep this window open while editing diary entries.");
    console.log("Press Ctrl+C to stop.");
    if (openOnStart) openBrowser(url);
  });
}

if (require.main === module) {
  listenWithFallback(START_PORT, process.argv.includes("--open"));
}

module.exports = {
  appendDiaryEntry,
  createServer,
  importDiaryEntries,
  readDiaryFile,
  removeDiaryEntry,
};
