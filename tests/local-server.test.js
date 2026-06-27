const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

const { appendDiaryEntry, importDiaryEntries, removeDiaryEntry } = require("../local-server");

async function makeDiaryFile(initialEntries) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "pphome-diary-"));
  const file = path.join(dir, "diary.json");
  await fs.writeFile(file, JSON.stringify(initialEntries, null, 2), "utf8");
  return file;
}

test("appendDiaryEntry writes a new diary entry to the json file", async () => {
  const file = await makeDiaryFile([
    { id: 1000, date: "2026-06-25", title: "old", text: "first" },
  ]);

  const entries = await appendDiaryEntry(
    file,
    { title: "  new title  ", text: "  hello diary  " },
    { now: new Date(2026, 5, 27, 9, 0, 0), id: 2000 }
  );

  assert.deepEqual(entries[0], {
    id: 2000,
    date: "2026-06-27",
    title: "new title",
    text: "hello diary",
  });
  assert.equal(entries.length, 2);

  const saved = JSON.parse(await fs.readFile(file, "utf8"));
  assert.deepEqual(saved, entries);
});

test("removeDiaryEntry deletes an entry from the json file", async () => {
  const file = await makeDiaryFile([
    { id: 2000, date: "2026-06-27", title: "new", text: "second" },
    { id: 1000, date: "2026-06-25", title: "old", text: "first" },
  ]);

  const entries = await removeDiaryEntry(file, 2000);

  assert.deepEqual(entries, [
    { id: 1000, date: "2026-06-25", title: "old", text: "first" },
  ]);

  const saved = JSON.parse(await fs.readFile(file, "utf8"));
  assert.deepEqual(saved, entries);
});

test("importDiaryEntries preserves old local draft ids and dates", async () => {
  const file = await makeDiaryFile([
    { id: 1000, date: "2026-06-25", title: "old", text: "first" },
  ]);

  const entries = await importDiaryEntries(file, [
    { id: 2000, date: "2026-06-26", title: "draft", text: "from browser" },
    { id: 1000, date: "2026-06-25", title: "old copy", text: "duplicate" },
  ]);

  assert.deepEqual(entries, [
    { id: 2000, date: "2026-06-26", title: "draft", text: "from browser" },
    { id: 1000, date: "2026-06-25", title: "old", text: "first" },
  ]);

  const saved = JSON.parse(await fs.readFile(file, "utf8"));
  assert.deepEqual(saved, entries);
});
