/* ===========================================================================
 *  ★ 这是你唯一需要修改的文件 ★   (This is the ONLY file you need to edit)
 * ===========================================================================
 *
 *  改完保存，刷新网页就能看到效果。每一项都有中文说明。
 *  规则很简单：
 *    1. 只改冒号右边引号 " " 里的文字，不要动左边的英文字段名。
 *    2. 每一项结尾的逗号 , 不要删。
 *    3. 凡是写成  { en: "...", zh: "..." }  的，就是【英文 / 中文】两个版本，
 *       网站右上角切换语言时会自动显示对应的那个。
 *
 *  ┌── 想加一个软件？ ─────────────────────────────────────────────┐
 *  │  到最下面 software 列表里，复制一整个 { ... } 块，粘贴一份，    │
 *  │  改成你的内容即可。想删就把那一块整段删掉。                     │
 *  └───────────────────────────────────────────────────────────────┘
 * =========================================================================== */

const CONTENT = {

  /* ---- 网站基本信息（浏览器标签页标题等）------------------------------ */
  site: {
    title: { en: "Albus Snape", zh: "追风君子" },
    description: {
      en: "Albus Snape's homepage — about me, my GitHub, and the tools I build.",
      zh: "追风君子的主页 —— 关于我、我的 GitHub，以及我做的各种小工具。",
    },
    // 左下角小人：留空 "" 用内置 CSS 手绘版；填图片路径就用你自己的图。
    mascotImage: "pics/bocchi2.webp",
    // 首页右下角站着的大立绘：留空 "" 则不显示。
    heroImage: "",
  },

  /* ---- 个人信息 -------------------------------------------------------- */
  profile: {
    // 小标题 + 大号渐变名字（首页正中那行超大字）
    greeting: { en: "Hi, I'm", zh: "你好，我是" },
    name: { en: "Albus Snape", zh: "追风君子" },

    // 一句话标签（用 · 分隔几个词）—— 觉得不贴切就改成你喜欢的
    tagline: {
      en: "Developer · Indie Tool Maker · Gamer",
      zh: "开发者 · 独立工具作者 · 玩家",
    },

    // 首页大字下方的一句简介
    intro: {
      en: "I build small tools that scratch my own itch, and share them here. Take a look around! ✨",
      zh: "我喜欢做一些自己想用的小工具，顺手分享到这儿。随便逛逛吧～ ✨",
    },

    // 头像：留空 "" 就自动用名字首字母生成彩色头像；想用图片就填路径，如 "pics/me.png"
    avatar: "",

    // 联系方式
    github: "https://github.com/AlbusSnape77",
    githubUser: "AlbusSnape77",
    email: "AlbusSnape77@Gmail.com",
    qq: "2678649330",     // 关于页 + 页脚都会显示，点一下复制
    wechat: "ppzfjz",     // 同上

    // 在线状态小标签（显示在头像下方）
    status: { en: "Available", zh: "在线" },

    // 关于页的自我介绍（可以写多段，每段一对引号，用逗号隔开）—— 这两段我先帮你起了草稿，按自己情况改
    about: {
      en: [
        "Hi, I'm Albus Snape — I like turning the small, annoying problems I run into into little tools.",
        "Most of my projects start as 'I wish something could do X', then become a weekend build. Two of them are below.",
      ],
      zh: [
        "你好，我是追风君子 —— 喜欢把日常里遇到的、烦人的小问题做成趁手的小工具。",
        "我的项目大多始于「要是有个东西能干 X 就好了」，然后用业余时间把它做出来。下面这两个就是。",
      ],
    },

    // 技能标签（随便加几个，纯文字）
    skills: ["Python", "JavaScript", "Web", "OCR", "PyInstaller", "MediaPipe"],
  },

  /* ---- 满屏飘过的弹幕（後藤ひとり风格小台词，可中可日可英，随便加减）----
   *  每条会从右往左横穿整个屏幕，而且各占一条轨道、互不碰撞。 */
  floatingWords: [
    "ぼっち・ざ・ろっく！",
    "わ、わたし…ぼっちです",
    "ギター、だいすき 🎸",
    "結束バンド",
    "今日も練習しなきゃ…",
    "( //>ω<// )",
    "人見知り、発動中…",
    "ライブこわいよぉ…",
    "おうちが一番 ♪",
    "陰キャだって輝きたい",
    "ギターヒーロー",
    "なんとかなれ〜！",
  ],

  /* ---- 你的软件 / 作品（核心！）---------------------------------------
   *  每个 { } 是一张卡片。字段说明：
   *    name      软件名      { en, zh }
   *    desc      一句话介绍  { en, zh }
   *    icon      图标：可以直接填 emoji（如 "🎯"），也可填图片路径（"pics/xx.png"）
   *    tags      标签数组（平台 / 版本 / 语言等），纯文字
   *    download  下载链接（桌面软件填这个，按钮显示「下载」）
   *    live      在线体验链接（网页类作品填这个，按钮显示「在线体验」）；二选一即可
   *    source    源码/GitHub 链接（可留空 ""，留空就不显示这个按钮）
   * -------------------------------------------------------------------- */
  software: [
    {
      name: { en: "Delta Force Stats", zh: "三角洲战绩分析器" },
      desc: {
        en: "A Windows desktop tool that reads your Delta Force result screens with OCR and turns them into a clean dashboard of your match stats.",
        zh: "一个 Windows 桌面工具：用 OCR 自动识别《三角洲行动》的结算画面，把你的对局战绩整理成清爽的数据面板。",
      },
      icon: "🎯",
      tags: ["Windows", "v1.6", "OCR", "Free"],
      download: "https://github.com/AlbusSnape77/Delta-Force-Stats/releases/download/v1.6/DeltaForceStats-v1.6.zip",
      source: "https://github.com/AlbusSnape77/Delta-Force-Stats",
    },
    {
      name: { en: "Gesture Beauty Cam", zh: "美颜手势相机" },
      desc: {
        en: "A browser webcam toy: slim your face, enlarge your eyes and add soft filters in real time — all controlled with hand gestures.",
        zh: "一个网页摄像头小玩具：实时瘦脸、大眼、叠加柔光滤镜，而且全程用手势隔空控制。",
      },
      icon: "📷",
      tags: ["Web", "Webcam", "Gesture"],
      download: "https://github.com/AlbusSnape77/gesture-beauty-cam/archive/refs/heads/main.zip",
      source: "https://github.com/AlbusSnape77/gesture-beauty-cam",
    },
  ],
};

/* ===========================================================================
 *  怎么放「下载链接」？三种方式任选：
 *
 *  ① 推荐：用 GitHub Releases
 *     把你的安装包（.exe / .zip 等）上传到对应仓库的 Releases 页面，
 *     右键复制那个文件的下载地址，粘到上面的 download 里。
 *     （三角洲战绩分析器：dist/三角洲战绩分析器-v1.6 整个打个 zip 传上去就行）
 *
 *  ② 直接放进网站：把文件放到项目里，download 写相对路径，如 "files/你的文件.zip"
 *     （注意 GitHub Pages 单个文件建议别超过 ~100MB）
 *
 *  ③ 任意网盘/外链：把分享链接直接粘到 download 里也行。
 * =========================================================================== */
