const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function loadContent() {
  const file = path.join(__dirname, "..", "js", "content.js");
  const code = fs.readFileSync(file, "utf8");
  return vm.runInNewContext(code + "\nCONTENT;", {}, { filename: file });
}

test("software list includes the milk tea mini program", () => {
  const content = loadContent();
  const item = content.software.find((app) => app.name.en === "Sanpingfang Milk Tea Mini Program");

  assert.ok(item);
  assert.equal(item.name.zh, "三平方奶茶店小程序");
  assert.match(item.desc.en, /WeChat Mini Program/);
  assert.deepEqual(Array.from(item.tags), ["WeChat", "Mini Program", "Cloud", "ECharts"]);
  assert.equal(
    item.download,
    "https://github.com/AlbusSnape77/Sanpingfang-Milk-Tea-Miniprogram/archive/refs/tags/v1.0.0.zip"
  );
  assert.equal(item.source, "https://github.com/AlbusSnape77/Sanpingfang-Milk-Tea-Miniprogram");
});
