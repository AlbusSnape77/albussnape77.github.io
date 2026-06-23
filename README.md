# 我的个人主页 ✨

一个清爽、明亮、带点活泼的个人主页：自我介绍 + GitHub + 我做的软件（含介绍和下载）。
纯静态网站（HTML / CSS / 原生 JS），**不需要任何构建步骤**，可以直接部署到公网，谁都能打开。

---

## 📁 文件结构

```
.
├── index.html        ← 网页骨架（一般不用动）
├── css/style.css     ← 所有样式（一般不用动）
├── js/
│   ├── content.js    ← ★ 你要改的就是这个文件（你的资料 + 软件） ★
│   └── app.js        ← 渲染逻辑（不用动）
├── assets/           ← 放头像、软件图标、下载文件的地方
├── .nojekyll         ← 给 GitHub Pages 用的（别删）
└── README.md         ← 你正在看的说明
```

---

## ✏️ 怎么改内容

**只改 `js/content.js` 这一个文件就够了。** 里面每一项都有中文注释。

- 改文字：只改冒号右边引号 `" "` 里的内容。
- 双语：写成 `{ en: "...", zh: "..." }` 的就是「英文 / 中文」两个版本，网站右上角切换语言时自动显示对应的。
- **加一个软件**：到 `content.js` 最下面的 `software` 列表，复制一整段 `{ ... }`，粘贴后改成你的内容。删除就把整段删掉。
- **换头像**：把图片放进 `assets/`（比如 `assets/avatar.png`），在 `content.js` 里把 `avatar` 改成 `"assets/avatar.png"`。留空就自动用名字首字母生成彩色头像。
- **软件图标**：可以直接填 emoji（如 `"⚡"`），也可以填图片路径。

### 下载链接放哪？

1. **推荐 · GitHub Releases**：把安装包传到对应仓库的 Releases，复制文件下载地址，填到 `download` 里。
2. **直接放进网站**：把文件丢进 `assets/`，`download` 写 `"assets/你的文件.zip"`（GitHub Pages 单文件建议 < 100MB）。
3. **任意网盘/外链**：分享链接直接粘进去也行。

---

## 👀 本地预览

两种方式任选：

- **最简单**：直接双击 `index.html` 用浏览器打开就能看（本网站不依赖服务器）。
- **更接近线上**：在本文件夹打开终端，运行 `python -m http.server 5500`，浏览器访问 `http://localhost:5500`。

---

## 🌍 发布到公网（GitHub Pages，免费）

让任何人都能通过网址访问。你已经装了 GitHub Desktop 和 Git，二选一即可。

### 方式一：网址做成 `你的用户名.github.io`（最短网址）

1. 在 GitHub 新建一个仓库，名字**必须**是 `你的用户名.github.io`（比如用户名是 `pai`，仓库名就是 `pai.github.io`）。
2. 把本文件夹所有文件传上去（GitHub Desktop：Add → 选这个文件夹 → Commit → Publish；或用命令行，见下）。
3. 仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，保存。
4. 等 1~2 分钟，访问 **https://你的用户名.github.io** 就能看到了 🎉

### 方式二：放进任意已有仓库

传上去后同样到 **Settings → Pages** 开启，网址会是 `https://你的用户名.github.io/仓库名/`。

### 命令行版本（在本文件夹里执行）

```bash
git init
git add .
git commit -m "我的个人主页"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

然后照上面第 3 步去 Settings → Pages 开启即可。

### 之后想改东西怎么办？（你最关心的「随手改」）

- **网页上直接改**：进 GitHub 仓库，打开 `js/content.js`，点右上角铅笔 ✏️ 改完点 Commit，**1 分钟左右自动更新上线**，完全不用碰电脑上的命令行。
- 或者在本地改完，GitHub Desktop 里 Commit → Push 即可。

---

## 💡 小贴士

- 默认显示英文，右上角 `EN / 中` 可切换中文，会记住你的选择。
- 左下角 ✨ 按钮：随机换一套主题配色，纯好玩。
- 想换风格、加博客/留言板、加深色模式等，告诉我即可。

---

> 想要自定义域名（比如 `yourname.com`）？买好域名后在 Settings → Pages 填进 Custom domain，再到域名商那边加一条 CNAME 记录指向 GitHub 即可。需要时我可以一步步带你做。
