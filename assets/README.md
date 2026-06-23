# assets 文件夹

把这些东西放这里，然后在 `js/content.js` 里用相对路径引用：

- **头像**：例如 `avatar.png` → 在 content.js 里写 `avatar: "assets/avatar.png"`
- **软件图标**：例如 `tool1.png` → 在某个软件的 `icon` 里写 `"assets/tool1.png"`
- **下载文件**：例如 `MyApp-v1.0.zip` → 在某个软件的 `download` 里写 `"assets/MyApp-v1.0.zip"`

> GitHub Pages 对单个文件大小有限制（建议 < 100MB）。更大的安装包推荐用 GitHub Releases 或网盘外链。
