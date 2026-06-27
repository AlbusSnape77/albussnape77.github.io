(function () {
  "use strict";

  const icons = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.2 12 3l9 7.2"/><path d="M5 9v11h5v-6h4v6h5V9"/></svg>',
    apps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.3v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    qq: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 2 6.6 4.4 6.6 7.4c0 .9-.3 1.7-.9 2.5-.8 1-1.2 1.9-1.2 3.1 0 .8.3 1.5.8 2-.4.9-.6 1.9-.4 2.7.1.5.7.6 1.1.3.5-.4 1-.8 1.4-1.3 1.4.9 3 1.3 4.6 1.3s3.2-.4 4.6-1.3c.4.5.9.9 1.4 1.3.4.3 1 .2 1.1-.3.2-.8 0-1.8-.4-2.7.5-.5.8-1.2.8-2 0-1.2-.4-2.1-1.2-3.1-.6-.8-.9-1.6-.9-2.5C17.4 4.4 15 2 12 2z"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4C5.4 4 2.5 6.4 2.5 9.4c0 1.7.9 3.2 2.4 4.2L4.2 16l2.3-1.2c.5.1 1 .2 1.6.3-.1-.4-.1-.7-.1-1.1 0-3 2.9-5.3 6.4-5.3h.4C14.5 6.1 12 4 9 4zM6.7 8.7a.9.9 0 110-1.8.9.9 0 010 1.8zm4.8 0a.9.9 0 110-1.8.9.9 0 010 1.8z"/><path d="M21.5 14.1c0-2.5-2.4-4.5-5.4-4.5s-5.4 2-5.4 4.5 2.4 4.5 5.4 4.5c.6 0 1.2-.1 1.7-.2l1.7.9-.5-1.5c1.2-.8 2.5-2 2.5-3.7zm-7-.7a.7.7 0 110-1.4.7.7 0 010 1.4zm3.4 0a.7.7 0 110-1.4.7.7 0 010 1.4z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/></svg>',
    arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V5"/><path d="m6 11 6-6 6 6"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c.5 3.6 1.9 5 5.5 5.5-3.6.5-5 1.9-5.5 5.5-.5-3.6-1.9-5-5.5-5.5C10.1 7 11.5 5.6 12 2z"/><path d="M19 13c.3 1.9 1 2.6 2.9 2.9-1.9.3-2.6 1-2.9 2.9-.3-1.9-1-2.6-2.9-2.9C18 15.6 18.7 14.9 19 13z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19"/></svg>',
    sakura: '<svg viewBox="0 0 24 24" fill="none"><g fill="#ff8fb4"><path d="M12 12C9 10 9 5 10.7 3.4 11.3 4.1 12.7 4.1 13.3 3.4 15 5 15 10 12 12Z"/><path d="M12 12C9 10 9 5 10.7 3.4 11.3 4.1 12.7 4.1 13.3 3.4 15 5 15 10 12 12Z" transform="rotate(72 12 12)"/><path d="M12 12C9 10 9 5 10.7 3.4 11.3 4.1 12.7 4.1 13.3 3.4 15 5 15 10 12 12Z" transform="rotate(144 12 12)"/><path d="M12 12C9 10 9 5 10.7 3.4 11.3 4.1 12.7 4.1 13.3 3.4 15 5 15 10 12 12Z" transform="rotate(216 12 12)"/><path d="M12 12C9 10 9 5 10.7 3.4 11.3 4.1 12.7 4.1 13.3 3.4 15 5 15 10 12 12Z" transform="rotate(288 12 12)"/></g><circle cx="12" cy="12" r="2.1" fill="#ef6c97"/></svg>',
  };

  const LANGS = ["en", "zh", "ja"];
  const LANG_LABEL = { en: "EN", zh: "中", ja: "日" };
  const LANG_HTML = { en: "en", zh: "zh-CN", ja: "ja" };
  let lang = localStorage.getItem("lang") || "en";
  if (!LANGS.includes(lang)) lang = "en";
  const t = (v) =>
    v && typeof v === "object" && !Array.isArray(v)
      ? (v[lang] != null && v[lang] !== "" ? v[lang] : v.en)
      : v;
  const ui = (en) => {
    const e = CONTENT.ui && CONTENT.ui[en];
    const val = e && e[lang];
    return val != null && val !== "" ? val : en;
  };

  const VIEWS = [
    { id: "home", icon: "home", label: { en: "Home", zh: "主页" } },
    { id: "software", icon: "apps", label: { en: "Software", zh: "软件" } },
    { id: "diary", icon: "book", label: { en: "Diary", zh: "日记" } },
    { id: "about", icon: "user", label: { en: "About", zh: "关于" } },
  ];
  let current = "home";

  const $ = (s) => document.querySelector(s);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );

  const ls = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

  let danmakuOn = ls("pp_danmaku", "1") === "1";
  let gardenOn = ls("pp_garden", "0") === "1";
  let darkOn = ls("pp_dark", "0") === "1";
  let toolOpen = false;
  let diaryPublished = [], diaryLegacy = [], diaryLoaded = false, diarySaving = false;
  const motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  const reduceMotion = () => motionQuery && motionQuery.matches;

  function renderNav() {
    const nav = $("#navPill");
    nav.innerHTML = "";
    VIEWS.forEach((v) => {
      const b = el("button", "nav-item" + (v.id === current ? " is-active" : ""));
      b.type = "button";
      b.dataset.view = v.id;
      b.innerHTML = esc(t(v.label));
      b.addEventListener("click", () => switchView(v.id));
      nav.appendChild(b);
    });
    nav.appendChild(el("span", "nav-indicator"));
    requestAnimationFrame(moveIndicator);
  }
  function moveIndicator() {
    const nav = $("#navPill");
    const active = nav.querySelector(".nav-item.is-active");
    const ind = nav.querySelector(".nav-indicator");
    if (!active || !ind) return;
    ind.style.width = active.offsetWidth + "px";
    ind.style.transform = "translateX(" + active.offsetLeft + "px)";
  }

  function renderHome() {
    const p = CONTENT.profile;
    const v = $("#view-home");
    v.innerHTML = "";
    const bigWord = CONTENT.site && CONTENT.site.welcome ? t(CONTENT.site.welcome) : "Welcome";
    const subText = CONTENT.site && CONTENT.site.welcomeSub ? t(CONTENT.site.welcomeSub) : "";
    const WCOLORS = ["#ff7eb3", "#6fd0df", "#c3a0f0", "#ffb347", "#ff9ec4", "#7cc6d6", "#b07fd0"];
    let letters = "";
    Array.from(bigWord).forEach(function (ch, i) {
      if (ch === " ") { letters += '<span class="wl wl-sp"></span>'; return; }
      letters += '<span class="wl" style="color:' + WCOLORS[i % WCOLORS.length] +
        ";animation-delay:" + (i * 0.09).toFixed(2) + 's">' + esc(ch) + "</span>";
    });
    const subHtml = subText
      ? '<p class="welcome-sub">' + esc(subText).replace("pphome", '<span class="wb-brand">pphome</span>') + "</p>"
      : "";
    const deco =
      '<span class="wdeco wd1">✦</span><span class="wdeco wd2">🌸</span>' +
      '<span class="wdeco wd3">✿</span><span class="wdeco wd4">✦</span><span class="wdeco wd5">🌸</span>';
    const intro = el("section", "welcome-screen");
    intro.innerHTML =
      '<div class="welcome-inner">' + deco +
        '<h1 class="welcome-big">' + letters + "</h1>" + subHtml +
      "</div>" +
      '<button class="scroll-cue" type="button" aria-label="' + ui("Scroll down") + '">' +
        '<span class="scroll-cue-text">' + ui("Scroll down") + "</span>" +
        '<span class="scroll-cue-arrow">⌄</span>' +
      "</button>";
    v.appendChild(intro);

    const hero = el("div", "hero");
    hero.innerHTML =
      '<p class="greeting">' + esc(t(p.greeting)) + "</p>" +
      '<h1 class="name">' + esc(t(p.name)) + "</h1>" +
      '<p class="tagline">' + esc(t(p.tagline)) + "</p>" +
      '<p class="intro">' + esc(t(p.intro)) + "</p>" +
      '<div class="cta-row">' +
        '<button class="btn btn-primary" data-go="software">' + icons.apps +
          "<span>" + ui("View my software", "看看我的软件") + "</span></button>" +
        '<a class="btn" href="' + esc(p.github) + '" target="_blank" rel="noopener">' +
          icons.github + "<span>GitHub</span></a>" +
      "</div>" +
      (CONTENT.site && CONTENT.site.heroImage
        ? '<img class="hero-bocchi" src="' + esc(CONTENT.site.heroImage) + '" alt="" aria-hidden="true" />'
        : "");
    v.appendChild(hero);
    hero.querySelector('[data-go="software"]').addEventListener("click", () => switchView("software"));
    const cue = intro.querySelector(".scroll-cue");
    if (cue) cue.addEventListener("click", () => hero.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function renderIcon(icon) {
    if (!icon) return "📦";
    if (/\.(png|jpe?g|svg|gif|webp)$/i.test(icon) || icon.indexOf("/") !== -1)
      return '<img src="' + esc(icon) + '" alt="" />';
    return esc(icon);
  }
  function dlAttrs(url) {
    if (!url || url === "#") return "";
    if (/^https?:/i.test(url)) return ' target="_blank" rel="noopener"';
    return " download";
  }
  function renderSoftware() {
    const v = $("#view-software");
    const list = CONTENT.software || [];
    let cards = list
      .map((s) => {
        const tags = (s.tags || []).map((tg) => '<span class="tag">' + esc(tg) + "</span>").join("");
        const primary = s.live
          ? '<a class="btn btn-primary" href="' + esc(s.live) + '" target="_blank" rel="noopener">' +
            icons.play + "<span>" + ui("Live demo", "在线体验") + "</span></a>"
          : s.download
            ? '<a class="btn btn-primary" href="' + esc(s.download) + '"' + dlAttrs(s.download) + ">" +
              icons.download + "<span>" + ui("Download", "下载") + "</span></a>"
            : s.source
              ? '<a class="btn btn-primary" href="' + esc(s.source) + '" target="_blank" rel="noopener">' +
                icons.code + "<span>" + ui("Source code", "源码") + "</span></a>"
              : "";
        const src = s.source && (s.live || s.download)
          ? '<a class="btn icon-only" href="' + esc(s.source) +
            '" target="_blank" rel="noopener" aria-label="Source code" title="' +
            ui("Source code", "源码") + '">' + icons.code + "</a>"
          : "";
        const actions = primary || src ? '<div class="card-actions">' + primary + src + "</div>" : "";
        return (
          '<article class="card reveal">' +
          '<div class="card-icon">' + renderIcon(s.icon) + "</div>" +
          "<h3>" + esc(t(s.name)) + "</h3>" +
          '<p class="desc">' + esc(t(s.desc)) + "</p>" +
          '<div class="tags">' + tags + "</div>" +
          actions +
          "</article>"
        );
      })
      .join("");
    if (!list.length)
      cards =
        '<p style="grid-column:1/-1;text-align:center;color:var(--ink-soft)">' +
        ui("Nothing here yet.", "暂时还没有内容。") +
        "</p>";
    v.innerHTML =
      '<div class="section-head"><h2>' + ui("Software", "软件作品") + "</h2><p>" +
      ui("Tools, apps, and experiments I've built.", "我做过的一些工具、应用和小项目。") +
      "</p></div>" +
      '<div class="card-grid">' + cards + "</div>";
  }

  function avatarInner(p) {
    if (p.avatar) return '<img src="' + esc(p.avatar) + '" alt="' + esc(t(p.name)) + '" />';
    const name = (t(p.name) || "Me").trim();
    const initials = name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    return esc(initials || "Me");
  }
  function renderAbout() {
    const p = CONTENT.profile;
    const v = $("#view-about");
    const paras = (t(p.about) || []).map((x) => "<p>" + esc(x) + "</p>").join("");
    const skills = (p.skills || []).map((s) => '<span class="skill">' + esc(s) + "</span>").join("");
    v.innerHTML =
      '<div class="section-head"><h2>' + ui("About me", "关于我") + "</h2></div>" +
      '<div class="about-wrap">' +
        '<aside class="profile-card reveal">' +
          '<div class="avatar">' + avatarInner(p) + "</div>" +
          '<p class="pname">' + esc(t(p.name)) + "</p>" +
          '<p class="prole">' + esc(t(p.tagline)) + "</p>" +
          '<span class="status"><span class="dot"></span>' + esc(t(p.status)) + "</span>" +
          '<div class="profile-links">' +
            '<a href="' + esc(p.github) + '" target="_blank" rel="noopener">' +
              icons.github + "<span>@" + esc(p.githubUser || "github") + "</span></a>" +
            '<a href="mailto:' + esc(p.email) + '">' + icons.mail + "<span>" + esc(p.email) + "</span></a>" +
            (p.qq ? '<button type="button" class="plink" data-copy="' + esc(p.qq) + '">' + icons.qq + "<span>QQ " + esc(p.qq) + "</span></button>" : "") +
            (p.wechat ? '<button type="button" class="plink" data-copy="' + esc(p.wechat) + '">' + icons.wechat + "<span>" + ui("WeChat ", "微信 ") + esc(p.wechat) + "</span></button>" : "") +
          "</div>" +
        "</aside>" +
        '<div class="about-body reveal">' +
          "<h3>" + ui("Who I am", "我是谁") + "</h3>" + paras +
          "<h3>" + ui("Skills", "技能") + "</h3>" +
          '<div class="skills">' + skills + "</div>" +
        "</div>" +
      "</div>";
  }

  function renderFooter() {
    const p = CONTENT.profile;
    $("#siteFooter").innerHTML =
      '<div class="foot-links reveal">' +
        '<a href="' + esc(p.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + icons.github + "</a>" +
        '<a href="mailto:' + esc(p.email) + '" aria-label="Email">' + icons.mail + "</a>" +
        (p.qq ? '<button type="button" data-copy="' + esc(p.qq) + '" aria-label="QQ ' + esc(p.qq) + '" title="QQ ' + esc(p.qq) + '">' + icons.qq + "</button>" : "") +
        (p.wechat ? '<button type="button" data-copy="' + esc(p.wechat) + '" aria-label="WeChat ' + esc(p.wechat) + '" title="' + ui("WeChat ", "微信 ") + esc(p.wechat) + '">' + icons.wechat + "</button>" : "") +
      "</div>" +
      "<div>© " + new Date().getFullYear() + " " + esc(t(CONTENT.site.title)) + " · " +
        ui("Made with", "用") + ' <span class="heart">♥</span></div>';
  }

  function renderBocchiBackdrop() {
    const sky = $(".bg-sky");
    if (!sky || sky.querySelector(".bocchi-backdrop")) return;
    const wrap = el("div", "bocchi-backdrop");
    wrap.innerHTML =
      '<span class="stage-spotlight spotlight-l"></span>' +
      '<span class="stage-spotlight spotlight-c"></span>' +
      '<span class="stage-spotlight spotlight-r"></span>' +
      '<img class="bocchi-sticker sticker-main" src="pics/bocchi3.webp" alt="" aria-hidden="true" />' +
      '<img class="bocchi-sticker sticker-side" src="pics/bocchi2.webp" alt="" aria-hidden="true" />' +
      '<span class="amp-grid"></span>' +
      '<span class="bocchi-cube cube-1"></span>' +
      '<span class="bocchi-cube is-yellow cube-2"></span>' +
      '<span class="bocchi-cube cube-3"></span>' +
      '<span class="bocchi-cube is-yellow cube-4"></span>';
    const rand = (a, b) => a + Math.random() * (b - a);
    const pickMap = [
      [7, 18], [18, 68], [31, 25], [44, 82], [58, 13],
      [67, 70], [77, 36], [86, 88], [24, 48], [53, 55],
    ];
    pickMap.forEach((pos, i) => {
      const pick = el("span", "bocchi-pick" + (i % 3 === 1 ? " is-cyan" : ""));
      pick.style.left = "calc(" + pos[1] + "% - 18px)";
      pick.style.top = "calc(" + pos[0] + "% - 18px)";
      pick.style.setProperty("--psize", rand(24, 44).toFixed(0) + "px");
      pick.style.setProperty("--prot", ((Math.random() < 0.5 ? -1 : 1) * rand(7, 28)).toFixed(1) + "deg");
      pick.style.setProperty("--pdur", rand(4.4, 8.2).toFixed(1) + "s");
      pick.style.setProperty("--pdelay", (-rand(0, 8)).toFixed(1) + "s");
      pick.style.setProperty("--pop", rand(0.42, 0.76).toFixed(2));
      wrap.appendChild(pick);
    });
    sky.insertBefore(wrap, sky.firstChild);
  }

  function renderFloatingWords() {
    const box = $("#floatingWords");
    box.innerHTML = "";
    const words = CONTENT.floatingWords || [];
    const colors = ["#ef6c97", "#3aa9bd", "#b07fd0", "#ff8fb4", "#4ab8c9", "#c98fd6"];
    const rand = (a, b) => a + Math.random() * (b - a);
    const lanes = words.length;
    words.forEach((w, i) => {
      const span = el("span", "floating-word");
      const inner = el("span", "fw-inner");
      inner.textContent = w;
      inner.style.color = colors[i % colors.length];
      inner.style.setProperty("--bdur", (2.2 + Math.random() * 1.8).toFixed(1) + "s");
      inner.style.setProperty("--bdelay", (-rand(0, 3)).toFixed(1) + "s");
      span.appendChild(inner);
      span.style.top = (lanes > 1 ? 9 + (82 * i) / (lanes - 1) : 50).toFixed(1) + "%";
      const dur = rand(8, 15);
      span.style.setProperty("--dur", dur.toFixed(1) + "s");
      span.style.setProperty("--delay", (-rand(0, dur)).toFixed(1) + "s");
      box.appendChild(span);
      requestAnimationFrame(() => {
        span.style.transition = "opacity 1.2s ease";
        span.style.opacity = (0.72 + Math.random() * 0.16).toFixed(2);
      });
    });
  }

  function renderNotes() {
    const box = $("#notes");
    if (!box) return;
    box.innerHTML = "";
    const glyphs = ["♪", "♫", "♩", "♬", "✦", "❀", "🎸"];
    const colors = ["#ff9ec4", "#7fd0df", "#c3b6ee", "#ff8fb4", "#9fe0ea", "#e7a6dd", "#ef6c97"];
    const rand = (a, b) => a + Math.random() * (b - a);
    for (let k = 0; k < 24; k++) {
      const s = el("span", "note " + (k % 3 === 0 ? "note-beat" : "note-soft"));
      s.textContent = glyphs[k % glyphs.length];
      s.style.left = rand(1, 98).toFixed(1) + "%";
      s.style.color = colors[k % colors.length];
      s.style.fontSize = rand(0.72, 1.85).toFixed(2) + "rem";
      s.style.setProperty("--ndur", rand(7, 15).toFixed(1) + "s");
      s.style.setProperty("--ndelay", (-rand(0, 15)).toFixed(1) + "s");
      s.style.setProperty("--nsway", ((Math.random() < 0.5 ? -1 : 1) * rand(44, 128)).toFixed(0) + "px");
      s.style.setProperty("--nrot", ((Math.random() < 0.5 ? -1 : 1) * rand(38, 108)).toFixed(0) + "deg");
      s.style.setProperty("--nop", rand(0.34, 0.76).toFixed(2));
      s.style.setProperty("--nscale", rand(0.86, 1.18).toFixed(2));
      box.appendChild(s);
    }
  }

  function renderMascot() {
    const m = $("#mascot");
    if (!m) return;
    const img = CONTENT.site && CONTENT.site.mascotImage;
    if (img)
      m.innerHTML =
        '<span class="bk-bubble">ど、どうも…</span>' +
        '<img class="mascot-img" src="' + esc(img) + '" alt="mascot" />';
  }

  let _io = null;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in"));
      return;
    }
    if (!_io)
      _io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add("in"); _io.unobserve(e.target); }
          }),
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
    document.querySelectorAll(".reveal:not(.in)").forEach((e) => _io.observe(e));
  }

  function copyVal(text) {
    const done = () => toast(ui("Copied: ") + text);
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(text).then(done, () => legacyCopy(text, done));
    else legacyCopy(text, done);
  }
  function legacyCopy(text, done) {
    const ta = el("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (err) {}
    document.body.removeChild(ta);
  }
  function toast(msg) {
    let t = document.getElementById("_toast");
    if (!t) { t = el("div", "toast"); t.id = "_toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._h);
    toast._h = setTimeout(() => t.classList.remove("show"), 1700);
  }

  // ===== 点击特效 & 点击互动反应 =====
  const FX_GLYPHS = ["♪", "♫", "♩", "♬", "🎵", "🎶", "🌸", "✿", "❀"];
  const FX_COLORS = ["#ffc0d6", "#ffb3cd", "#f7a8c4", "#ffd2e4", "#f4bcd8"];
  function spawnRipple(x, y) {
    const r = el("span", "fx-ripple");
    r.style.left = x + "px";
    r.style.top = y + "px";
    document.body.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  }
  function spawnFx(x, y, n) {
    n = n || 8;
    for (let i = 0; i < n; i++) {
      const s = el("span", "fx");
      s.textContent = FX_GLYPHS[(Math.random() * FX_GLYPHS.length) | 0];
      s.style.left = x + "px";
      s.style.top = y + "px";
      s.style.color = FX_COLORS[(Math.random() * FX_COLORS.length) | 0];
      s.style.fontSize = (14 + Math.random() * 22).toFixed(0) + "px";
      const ang = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 110;
      s.style.setProperty("--dx", (Math.cos(ang) * dist).toFixed(0) + "px");
      s.style.setProperty("--dy", (Math.sin(ang) * dist - (30 + Math.random() * 55)).toFixed(0) + "px");
      s.style.setProperty("--rot", ((Math.random() * 2 - 1) * 220).toFixed(0) + "deg");
      s.style.animationDuration = (0.8 + Math.random() * 0.7).toFixed(2) + "s";
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    }
  }
  function clickFx(x, y) {
    spawnRipple(x, y);
    spawnFx(x, y);
  }
  // 鼠标跟随：一条粉色丝带线跟着光标，线两侧洒落粉色樱花（canvas 绘制，更明显）
  function initTrail() {
    const cv = document.createElement("canvas");
    cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9996;";
    document.body.appendChild(cv);
    const ctx = cv.getContext("2d");
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = window.innerWidth * dpr;
      cv.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const N = 22, pts = [], petals = [];
    const PINK = ["#ffc2dd", "#ffd2e8", "#ffb8d8", "#ffcce0", "#ffaecf"];
    let mouse = null, running = false;

    function onMove(x, y) {
      const prev = mouse || { x: x, y: y };
      if (!mouse) { mouse = { x: x, y: y }; for (let i = 0; i < N; i++) pts.push({ x: x, y: y }); }
      mouse = { x: x, y: y };
      const dx = x - prev.x, dy = y - prev.y, len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len;                 // 线的垂直方向
      const count = Math.min(3, 1 + ((len / 16) | 0));
      for (let i = 0; i < count && petals.length < 260; i++) {
        const side = Math.random() < 0.5 ? 1 : -1;         // 两侧
        const spd = 0.5 + Math.random() * 1.1;             // 更轻柔
        petals.push({
          x: x, y: y,
          vx: nx * side * spd + (Math.random() - 0.5) * 0.4,
          vy: ny * side * spd * 0.5 + Math.random() * 0.4,
          rot: Math.random() * 6.28, vrot: (Math.random() - 0.5) * 0.2,
          size: 4 + Math.random() * 4.5, color: PINK[(Math.random() * PINK.length) | 0],
          life: 1, decay: 0.006 + Math.random() * 0.005,
        });
      }
      if (!running) { running = true; requestAnimationFrame(frame); }
    }
    document.addEventListener("mousemove", function (e) { onMove(e.clientX, e.clientY); });
    document.addEventListener("touchmove", function (e) {       // 手机：手指滑动也有
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    function petal(x, y, s, rot, a, color) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
      ctx.globalAlpha = a; ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.78, -s * 0.35, s * 0.55, s * 0.72, 0, s);
      ctx.bezierCurveTo(-s * 0.55, s * 0.72, -s * 0.78, -s * 0.35, 0, -s);
      ctx.fill(); ctx.restore();
    }

    function frame() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (mouse) {
        pts[0].x += (mouse.x - pts[0].x) * 0.42;
        pts[0].y += (mouse.y - pts[0].y) * 0.42;
        for (let i = 1; i < N; i++) {
          pts[i].x += (pts[i - 1].x - pts[i].x) * 0.42;
          pts[i].y += (pts[i - 1].y - pts[i].y) * 0.42;
        }
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowBlur = 7;
        ctx.shadowColor = "rgba(255, 186, 216, 0.5)";
        for (let i = 1; i < N; i++) {
          const t = i / N;
          ctx.beginPath();
          ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
          ctx.lineTo(pts[i].x, pts[i].y);
          ctx.lineWidth = 7 * (1 - t) + 1;
          ctx.strokeStyle = "hsla(" + (338 + t * 16).toFixed(0) + ", 88%, 80%, " + (0.5 * (1 - t)).toFixed(3) + ")";
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }
      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];
        p.vy += 0.03; p.x += p.vx; p.y += p.vy; p.rot += p.vrot; p.life -= p.decay;
        if (p.life <= 0) { petals.splice(i, 1); continue; }
        petal(p.x, p.y, p.size, p.rot, Math.max(0, p.life) * 0.82, p.color);
      }
      ctx.globalAlpha = 1;
      const busy = petals.length > 0 || (mouse && Math.hypot(pts[N - 1].x - mouse.x, pts[N - 1].y - mouse.y) > 0.6);
      if (busy) requestAnimationFrame(frame); else running = false;
    }
  }
  function randomLine() {
    const w = CONTENT.floatingWords || [];
    return w.length ? w[(Math.random() * w.length) | 0] : "♪";
  }
  function burstAround(node, n) {
    const r = node.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    spawnRipple(cx, cy);
    spawnFx(cx, cy, n || 10);
  }
  function reactAvatar(av) {
    av.classList.remove("react"); void av.offsetWidth; av.classList.add("react");
    let b = av.querySelector(".avatar-bubble");
    if (!b) { b = el("span", "avatar-bubble"); av.appendChild(b); }
    b.textContent = randomLine();
    b.classList.add("show");
    clearTimeout(reactAvatar._h);
    reactAvatar._h = setTimeout(() => b.classList.remove("show"), 2200);
    burstAround(av, 12);
  }
  function reactMascot(ms) {
    const img = ms.querySelector(".mascot-img") || ms;
    img.classList.remove("react"); void img.offsetWidth; img.classList.add("react");
    const bub = ms.querySelector(".bk-bubble");
    if (bub) {
      bub.textContent = randomLine();
      bub.classList.add("show");
      clearTimeout(reactMascot._h);
      reactMascot._h = setTimeout(() => bub.classList.remove("show"), 2200);
    }
    burstAround(ms, 12);
  }

  function switchView(id, instant) {
    if (!VIEWS.some((v) => v.id === id)) id = "home";
    current = id;
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
    const target = $("#view-" + id);
    if (target) target.classList.add("is-active");
    document.querySelectorAll(".nav-item").forEach((b) =>
      b.classList.toggle("is-active", b.dataset.view === id)
    );
    moveIndicator();
    if (!instant) history.replaceState(null, "", "#" + id);
    $("#siteFooter").style.display = "block";
    applyDanmaku(id);
    if (id === "home" && !instant) setTimeout(launchFireworks, 250);
    window.scrollTo({ top: 0, behavior: instant ? "auto" : "smooth" });
    requestAnimationFrame(observeReveals);
  }

  function renderLangToggle() {
    $("#langToggle").innerHTML = LANGS
      .map(function (l, i) {
        return (i ? '<span style="opacity:.4">/</span>' : "") +
          '<span class="' + (lang === l ? "on" : "") + '" data-lang="' + l + '">' +
          LANG_LABEL[l] + "</span>";
      })
      .join("");
  }
  function setLang(l) {
    if (!LANGS.includes(l)) l = "en";
    lang = l;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = LANG_HTML[lang];
    renderAll();
  }
  function toggleLang(e) {
    const seg = e && e.target && e.target.closest && e.target.closest("[data-lang]");
    if (seg) { setLang(seg.getAttribute("data-lang")); return; }
    setLang(LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]);
  }

  function shuffleTheme() {
    const ph = 322 + Math.random() * 28;
    const ch = 176 + Math.random() * 28;
    const r = document.documentElement.style;
    r.setProperty("--pink", "hsl(" + ph.toFixed(0) + " 100% 78%)");
    r.setProperty("--pink-deep", "hsl(" + ph.toFixed(0) + " 72% 66%)");
    r.setProperty("--cyan", "hsl(" + ch.toFixed(0) + " 62% 66%)");
    r.setProperty("--cyan-deep", "hsl(" + ch.toFixed(0) + " 52% 48%)");
    r.setProperty("--grad", "linear-gradient(120deg,hsl(" + ph.toFixed(0) + " 100% 80%),hsl(280 70% 84%),hsl(" + ch.toFixed(0) + " 70% 78%))");
    r.setProperty("--grad-soft", "linear-gradient(120deg,hsl(" + ph.toFixed(0) + " 100% 95%),hsl(280 70% 96%),hsl(" + ch.toFixed(0) + " 70% 95%))");
  }

  // 滚动时背景随之"平滑渐变"：滚动只更新目标色相，实际色相用缓动慢慢逼近，
  // 所以哪怕一下滑到底，背景也是顺滑地过渡而不是硬切。
  let _bgTarget = 0, _bgCur = 0, _bgRAF = 0, _scrollP = 0, _scrollWave = 0, _motionRAF = 0, _motionEls = null;
  function setBgHue(h) {
    if (document.body.classList.contains("dark")) {
      document.body.style.backgroundImage =
        "linear-gradient(180deg, #1b1626 0%, #241d2e 50%, #2b2030 100%)";
      return;
    }
    document.body.style.backgroundImage =
      "linear-gradient(180deg, hsl(" + (195 + h).toFixed(1) + " 70% 94%) 0%, hsl(" +
      (320 + h).toFixed(1) + " 78% 95%) 50%, hsl(" + (340 + h).toFixed(1) + " 85% 93%) 100%)";
  }
  function _bgLoop() {
    _bgCur += (_bgTarget - _bgCur) * 0.07;
    if (Math.abs(_bgTarget - _bgCur) < 0.1) _bgCur = _bgTarget;
    setBgHue(_bgCur);
    _bgRAF = _bgCur === _bgTarget ? 0 : requestAnimationFrame(_bgLoop);
  }
  function scrollBg(y) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const top = y == null ? window.scrollY : y;
    const p = max > 0 ? Math.min(1, Math.max(0, top / max)) : 0;
    const wave = Math.sin(p * Math.PI * 2);
    _scrollP = p;
    _scrollWave = wave;
    const root = document.documentElement;
    root.style.setProperty("--scroll-progress", p.toFixed(4));
    root.style.setProperty("--scroll-dot", (p * 100).toFixed(1) + "%");
    root.style.setProperty("--amp-glow", (0.18 + p * 0.16).toFixed(3));
    _bgTarget = p * 110;
    if (!_bgRAF) _bgRAF = requestAnimationFrame(_bgLoop);
  }

  function motionEls() {
    if (!_motionEls || !_motionEls.sky || !_motionEls.sky.isConnected) {
      _motionEls = {
        sky: $(".bg-sky"),
        backdrop: $(".bocchi-backdrop"),
        notes: $("#notes"),
        garden: $("#garden"),
        words: $("#floatingWords"),
      };
    }
    return _motionEls;
  }
  function applyBackdropMotion(now) {
    const els = motionEls();
    const t = now / 1000;
    const soft = reduceMotion() ? 0.82 : 1.25;
    const swayA = Math.sin(t * 0.9);
    const swayB = Math.cos(t * 0.66 + 0.7);
    const bounce = Math.sin(t * 1.55 + 0.3);
    const mix = _scrollWave * 0.18 + swayA * 0.9 + swayB * 0.46;
    const skyX = mix * 20 * soft;
    const skyY = -18 * _scrollP + swayB * 10 * soft;
    const notesX = -mix * 30 * soft;
    const notesY = -34 * _scrollP;
    const gardenX = mix * 25 * soft;
    const gardenY = 24 * _scrollP;
    const wordsX = -mix * 22 * soft;
    const wordsY = -22 * _scrollP;
    const drift = Math.sin(t * 0.42 + _scrollP * Math.PI) * 0.65 + mix * 0.35;
    const backdropX = drift * 18 * soft;
    const backdropY = bounce * 8 * soft;
    const backdropRot = mix * 1.8 * soft;
    if (els.sky) els.sky.style.transform = "translate3d(" + skyX.toFixed(2) + "px," + skyY.toFixed(2) + "px,0)";
    if (els.notes) els.notes.style.transform = "translate3d(" + notesX.toFixed(2) + "px," + notesY.toFixed(2) + "px,0)";
    if (els.garden) els.garden.style.transform = "translate3d(" + gardenX.toFixed(2) + "px," + gardenY.toFixed(2) + "px,0)";
    if (els.words) els.words.style.transform = "translate3d(" + wordsX.toFixed(2) + "px," + wordsY.toFixed(2) + "px,0)";
    if (els.backdrop) els.backdrop.style.transform = "translate3d(" + backdropX.toFixed(2) + "px," + backdropY.toFixed(2) + "px,0) rotate(" + backdropRot.toFixed(2) + "deg)";
  }
  function backdropMotionFrame(now) {
    applyBackdropMotion(now);
    _motionRAF = requestAnimationFrame(backdropMotionFrame);
  }
  function startBackdropMotion() {
    if (!_motionRAF) _motionRAF = requestAnimationFrame(backdropMotionFrame);
  }

  let _scrollLastY = null, _scrollSparkAt = 0, _scrollIdle = 0;
  function ensureScrollProgress() {
    if ($("#scrollProgress")) return;
    const bar = el("div", "scroll-progress");
    bar.id = "scrollProgress";
    bar.setAttribute("aria-hidden", "true");
    bar.innerHTML =
      '<span class="scroll-progress-track"><span class="scroll-progress-fill"></span></span>' +
      '<span class="scroll-progress-dot"></span>';
    document.body.appendChild(bar);
  }
  function spawnScrollSpark(dir) {
    if (reduceMotion()) return;
    const now = performance.now();
    if (now - _scrollSparkAt < 85) return;
    _scrollSparkAt = now;
    const glyphs = ["✦", "♡", "♪", "✿"];
    const colors = ["#ef6c97", "#3aa9bd", "#b07fd0", "#ff8fb4"];
    const count = 1 + ((Math.random() * 2) | 0);
    for (let i = 0; i < count; i++) {
      const s = el("span", "scroll-spark");
      s.textContent = glyphs[(Math.random() * glyphs.length) | 0];
      const side = Math.random() < 0.5 ? 1 : -1;
      const x = side > 0 ? window.innerWidth - (26 + Math.random() * 78) : 26 + Math.random() * 78;
      const y = dir > 0
        ? window.innerHeight * (0.62 + Math.random() * 0.28)
        : window.innerHeight * (0.12 + Math.random() * 0.26);
      const drift = (side > 0 ? -1 : 1) * (28 + Math.random() * 34);
      s.style.setProperty("--sx", x.toFixed(1) + "px");
      s.style.setProperty("--sy", y.toFixed(1) + "px");
      s.style.setProperty("--sdx", drift.toFixed(1) + "px");
      s.style.setProperty("--sdy", (dir > 0 ? -58 - Math.random() * 28 : 48 + Math.random() * 28).toFixed(1) + "px");
      s.style.setProperty("--srot", ((dir > 0 ? 1 : -1) * (70 + Math.random() * 90)).toFixed(1) + "deg");
      s.style.setProperty("--ssize", (0.82 + Math.random() * 0.52).toFixed(2) + "rem");
      s.style.setProperty("--scolor", colors[(Math.random() * colors.length) | 0]);
      s.style.setProperty("--sdur", (0.72 + Math.random() * 0.32).toFixed(2) + "s");
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove(), { once: true });
    }
  }
  function updateScrollPlay(y) {
    if (_scrollLastY == null) _scrollLastY = y;
    const dy = y - _scrollLastY;
    const dir = dy > 0 ? 1 : dy < 0 ? -1 : 0;
    if (dir) {
      document.body.classList.add("is-scrolling");
      document.body.classList.toggle("scrolling-down", dir > 0);
      document.body.classList.toggle("scrolling-up", dir < 0);
      document.documentElement.style.setProperty("--scroll-tilt", (Math.max(-12, Math.min(12, dy * 0.08))).toFixed(2) + "deg");
      if (Math.abs(dy) > 4) spawnScrollSpark(dir);
      clearTimeout(_scrollIdle);
      _scrollIdle = setTimeout(() => {
        document.body.classList.remove("is-scrolling", "scrolling-down", "scrolling-up");
        document.documentElement.style.setProperty("--scroll-tilt", "0deg");
      }, 150);
    }
    _scrollLastY = y;
  }
  function onScroll() {
    const y = window.scrollY;
    const top = $("#fabTop");
    if (top) top.classList.toggle("show", y > 320);
    scrollBg(y);
    updateScrollPlay(y);
  }

  let _smoothTargetY = 0, _smoothCurrentY = 0, _smoothRAF = 0, _smoothIdle = 0;
  function maxScrollY() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }
  function clampScroll(y) {
    return Math.max(0, Math.min(maxScrollY(), y));
  }
  function canScrollInside(target, deltaY) {
    let node = target;
    while (node && node !== document.body && node !== document.documentElement) {
      if (node.nodeType !== 1) { node = node.parentNode; continue; }
      const tag = (node.tagName || "").toLowerCase();
      if (tag === "textarea" || tag === "select" || node.isContentEditable) return true;
      const style = getComputedStyle(node);
      const canY = /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 1;
      if (canY) {
        const top = node.scrollTop;
        const max = node.scrollHeight - node.clientHeight;
        if ((deltaY < 0 && top > 0) || (deltaY > 0 && top < max)) return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  function smoothScrollFrame() {
    const dist = _smoothTargetY - _smoothCurrentY;
    const ease = Math.min(0.2, 0.09 + Math.abs(dist) / 5200);
    _smoothCurrentY += dist * ease;
    if (Math.abs(dist) < 0.55) _smoothCurrentY = _smoothTargetY;
    window.scrollTo(0, _smoothCurrentY);
    if (_smoothCurrentY !== _smoothTargetY) {
      _smoothRAF = requestAnimationFrame(smoothScrollFrame);
    } else {
      _smoothRAF = 0;
      clearTimeout(_smoothIdle);
      _smoothIdle = setTimeout(() => document.body.classList.remove("wheel-glide"), 80);
    }
  }
  function onWheel(e) {
    if (e.ctrlKey || e.metaKey || e.defaultPrevented || canScrollInside(e.target, e.deltaY)) return;
    const modeScale = e.deltaMode === 1 ? 42 : e.deltaMode === 2 ? window.innerHeight * 0.86 : 1;
    const delta = e.deltaY * modeScale;
    if (!delta) return;
    e.preventDefault();
    if (!_smoothRAF) _smoothCurrentY = window.scrollY;
    _smoothTargetY = clampScroll((_smoothRAF ? _smoothTargetY : window.scrollY) + delta * 0.78);
    document.body.classList.add("wheel-glide");
    clearTimeout(_smoothIdle);
    if (!_smoothRAF) _smoothRAF = requestAnimationFrame(smoothScrollFrame);
  }

  // ===== 右下角小功能：黑夜模式 / 飘浮花园 / 弹幕 / 烟花 =====
  const TOOLS = [
    { id: "dark", icon: "🌙", label: "Moonlight" },
    { id: "garden", icon: "🌸", label: "Sakura" },
    { id: "danmaku", icon: "💬", label: "Whispers" },
    { id: "fireworks", icon: "🎆", label: "Fireworks" },
  ];
  function isToolOn(id) {
    return id === "danmaku" ? danmakuOn : id === "garden" ? gardenOn : id === "dark" ? darkOn : false;
  }
  function renderToolMenu() {
    const m = $("#toolMenu");
    if (!m) return;
    m.innerHTML = "";
    TOOLS.forEach((tool, i) => {
      const b = el("button", "tool-item" + (isToolOn(tool.id) ? " on" : ""));
      b.type = "button";
      b.dataset.tool = tool.id;
      b.innerHTML =
        '<span class="tool-label">' + esc(ui(tool.label)) + "</span>" +
        '<span class="tool-ico">' + tool.icon + "</span>";
      b.style.transitionDelay = (0.04 * (TOOLS.length - 1 - i)).toFixed(2) + "s";
      m.appendChild(b);
    });
  }
  function toggleToolMenu(force) {
    toolOpen = force == null ? !toolOpen : !!force;
    const m = $("#toolMenu"), l = $("#toolLauncher");
    if (m) { m.classList.toggle("open", toolOpen); m.setAttribute("aria-hidden", toolOpen ? "false" : "true"); }
    if (l) { l.classList.toggle("open", toolOpen); l.setAttribute("aria-expanded", toolOpen ? "true" : "false"); }
  }
  function onToolClick(id) {
    if (id === "fireworks") {
      launchFireworks();
    } else if (id === "danmaku") {
      danmakuOn = !danmakuOn; lsSet("pp_danmaku", danmakuOn ? "1" : "0"); applyDanmaku();
    } else if (id === "garden") {
      gardenOn = !gardenOn; lsSet("pp_garden", gardenOn ? "1" : "0"); renderGarden();
    } else if (id === "dark") {
      darkOn = !darkOn; lsSet("pp_dark", darkOn ? "1" : "0");
      document.body.classList.toggle("dark", darkOn); setBgHue(_bgCur);
    }
    const btn = document.querySelector('#toolMenu [data-tool="' + id + '"]');
    if (btn) btn.classList.toggle("on", isToolOn(id));
  }
  function applyDanmaku(view) {
    const fw = $("#floatingWords");
    if (fw) fw.style.display = danmakuOn && (view || current) === "home" ? "block" : "none";
  }

  // 飘浮花园：开启时洒落花瓣
  function renderGarden() {
    const box = $("#garden");
    if (!box) return;
    if (!gardenOn) { box.innerHTML = ""; return; }
    if (box.childElementCount) return;
    const flowers = ["🌸"];
    const rand = (a, b) => a + Math.random() * (b - a);
    for (let i = 0; i < 18; i++) {
      const s = el("span", "petal-f");
      s.textContent = flowers[i % flowers.length];
      s.style.left = rand(0, 98).toFixed(1) + "%";
      s.style.fontSize = rand(0.9, 1.9).toFixed(2) + "rem";
      s.style.setProperty("--gdur", rand(11, 22).toFixed(1) + "s");
      s.style.setProperty("--gdelay", (-rand(0, 20)).toFixed(1) + "s");
      s.style.setProperty("--gsway", ((Math.random() < 0.5 ? -1 : 1) * rand(30, 80)).toFixed(0) + "px");
      s.style.setProperty("--grot", ((Math.random() < 0.5 ? -1 : 1) * rand(180, 540)).toFixed(0) + "deg");
      s.style.setProperty("--gop", rand(0.5, 0.85).toFixed(2));
      box.appendChild(s);
    }
  }

  // 放烟花：火箭升空 → 绽放，发光叠加 + 拖尾，更炫
  let fwCanvas = null, fwCtx = null, fwParticles = [], fwRockets = [], fwRAF = 0;
  function ensureFwCanvas() {
    if (fwCanvas) return;
    fwCanvas = document.createElement("canvas");
    fwCanvas.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9995;";
    document.body.appendChild(fwCanvas);
    fwCtx = fwCanvas.getContext("2d");
    fwResize();
    window.addEventListener("resize", fwResize);
  }
  function fwResize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    fwCanvas.width = window.innerWidth * dpr;
    fwCanvas.height = window.innerHeight * dpr;
    fwCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function fwSpawnRocket() {
    fwRockets.push({
      x: window.innerWidth * (0.15 + Math.random() * 0.7),
      y: window.innerHeight + 8,
      vy: -(16 + Math.random() * 5),
      targetY: window.innerHeight * (0.1 + Math.random() * 0.32),
      hue: Math.random() * 360,
      trail: [],
    });
    if (!fwRAF) fwRAF = requestAnimationFrame(fwFrame);
  }
  function fwBurst(x, y, hue) {
    const ring = Math.random() < 0.5;
    const n = 130 + ((Math.random() * 85) | 0);
    for (let i = 0; i < n; i++) {
      let ang, sp;
      if (ring) { ang = (i / n) * Math.PI * 2; sp = 4.8 + Math.random() * 1.8; }
      else { ang = Math.random() * Math.PI * 2; sp = 1.2 + Math.random() * 7.2; }
      fwParticles.push({
        x: x, y: y, px: x, py: y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
        life: 1, decay: 0.012 + Math.random() * 0.014,
        hue: hue + (Math.random() * 50 - 25), size: 1.9 + Math.random() * 2.4,
      });
    }
    // 二次闪烁的小星点
    for (let i = 0; i < 28; i++) {
      const ang = Math.random() * Math.PI * 2, sp = 0.6 + Math.random() * 2.8;
      fwParticles.push({
        x: x, y: y, px: x, py: y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
        life: 1, decay: 0.024 + Math.random() * 0.024, hue: hue, size: 3.4, twinkle: true,
      });
    }
  }
  function launchFireworks() {
    ensureFwCanvas();
    const shots = 7 + ((Math.random() * 4) | 0);
    for (let s = 0; s < shots; s++) setTimeout(fwSpawnRocket, s * 95);
  }
  function fwFrame() {
    fwCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    fwCtx.globalCompositeOperation = "lighter";
    fwCtx.lineCap = "round";
    // 火箭升空（带拖尾）
    for (let i = fwRockets.length - 1; i >= 0; i--) {
      const r = fwRockets[i];
      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 7) r.trail.shift();
      r.y += r.vy; r.vy += 0.2;
      if (r.vy >= -0.75 || r.y <= r.targetY) { fwBurst(r.x, r.y, r.hue); fwRockets.splice(i, 1); continue; }
      for (let tt = 1; tt < r.trail.length; tt++) {
        const a = tt / r.trail.length;
        fwCtx.globalAlpha = a * 0.9;
        fwCtx.strokeStyle = "hsl(" + (r.hue | 0) + ",90%,72%)";
        fwCtx.lineWidth = a * 2.4;
        fwCtx.beginPath();
        fwCtx.moveTo(r.trail[tt - 1].x, r.trail[tt - 1].y);
        fwCtx.lineTo(r.trail[tt].x, r.trail[tt].y);
        fwCtx.stroke();
      }
    }
    // 绽放粒子（短拖尾 + 重力）
    for (let i = fwParticles.length - 1; i >= 0; i--) {
      const p = fwParticles[i];
      p.px = p.x; p.py = p.y;
      p.vy += 0.045; p.vx *= 0.987; p.vy *= 0.987;
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if (p.life <= 0) { fwParticles.splice(i, 1); continue; }
      const lum = p.twinkle ? (55 + Math.random() * 35) : (58 + p.life * 14);
      fwCtx.globalAlpha = Math.max(0, p.life);
      fwCtx.strokeStyle = "hsl(" + (p.hue | 0) + ",100%," + (lum | 0) + "%)";
      fwCtx.lineWidth = p.size * Math.max(0.35, p.life);
      fwCtx.beginPath();
      fwCtx.moveTo(p.px, p.py);
      fwCtx.lineTo(p.x, p.y);
      fwCtx.stroke();
    }
    fwCtx.globalAlpha = 1;
    fwCtx.globalCompositeOperation = "source-over";
    fwRAF = (fwRockets.length || fwParticles.length) ? requestAnimationFrame(fwFrame) : 0;
  }

  // ===== 日记 =====
  const DIARY_KEY = "pp_diary_local";
  const DIARY_HEADERS = { "Content-Type": "application/json", "X-Diary-Editor": "pphome-local" };
  function isFilePreview() { return location.protocol === "file:"; }
  function isLocalDiaryEditor() {
    const h = location.hostname;
    return location.protocol === "http:" && (h === "localhost" || h === "127.0.0.1" || h === "::1" || h === "[::1]");
  }
  function normalizeDiaryList(d) {
    return Array.isArray(d) ? d : (d && d.entries) || [];
  }
  function readOldLocalDrafts() {
    try { return JSON.parse(ls(DIARY_KEY, "[]")) || []; } catch (e) { return []; }
  }
  function clearOldLocalDrafts() {
    try { localStorage.removeItem(DIARY_KEY); } catch (e) {}
  }
  function importOldLocalDrafts(list) {
    if (!isLocalDiaryEditor()) return Promise.resolve(list);
    const ids = {};
    list.forEach(function (e) { ids[String(e.id)] = true; });
    const drafts = readOldLocalDrafts().filter(function (e) {
      return e && e.text && !ids[String(e.id)];
    });
    if (!drafts.length) return Promise.resolve(list);
    return fetch("api/diary/import", {
      method: "POST",
      headers: DIARY_HEADERS,
      body: JSON.stringify({ entries: drafts }),
    })
      .then(function (r) { return r.ok ? r.json() : list; })
      .then(function (d) { clearOldLocalDrafts(); return normalizeDiaryList(d); })
      .catch(function () { return list; });
  }
  function loadDiary(cb) {
    diaryLegacy = isFilePreview() ? readOldLocalDrafts() : [];
    fetch(isLocalDiaryEditor() ? "api/diary" : "diary.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : []))
      .then(normalizeDiaryList)
      .then(importOldLocalDrafts)
      .then((d) => { diaryPublished = d; diaryLoaded = true; cb && cb(); })
      .catch(() => { diaryPublished = []; diaryLoaded = true; cb && cb(); });
  }
  function diaryAll() {
    const map = {};
    const editable = isLocalDiaryEditor();
    diaryPublished.forEach((e) => { map[e.id] = { id: e.id, date: e.date, title: e.title, text: e.text, _editable: editable }; });
    if (isFilePreview()) {
      diaryLegacy.forEach((e) => {
        if (!map[e.id]) map[e.id] = { id: e.id, date: e.date, title: e.title, text: e.text, _editable: false };
      });
    }
    return Object.keys(map).map((k) => map[k]).sort((a, b) => b.id - a.id);
  }
  function diaryEntryHtml(e) {
    const title = e.title ? '<div class="d-title">' + esc(e.title) + "</div>" : "";
    const del = e._editable
      ? '<button class="d-del" type="button" data-del="' + esc(e.id) + '">' + ui("Delete") + "</button>"
      : "";
    return (
      '<article class="diary-entry"><div class="d-meta"><span class="d-date">' + esc(e.date || "") + "</span>" +
      del + "</div>" + title + '<div class="d-text">' + esc(e.text || "") + "</div></article>"
    );
  }
  function diaryEditorHtml() {
    return (
      '<div class="diary-editor">' +
        '<input id="diaryTitle" type="text" maxlength="80" placeholder="' + ui("Title (optional)") + '" />' +
        '<textarea id="diaryText" placeholder="' + ui("Write something...") + '"></textarea>' +
        '<div class="diary-actions">' +
          '<button class="btn btn-primary" type="button" id="diarySave">' + ui("Save") + "</button>" +
        "</div>" +
      "</div>"
    );
  }
  function diaryPageHtml() {
    const canEdit = isLocalDiaryEditor();
    const list = diaryAll();
    const items = list.length
      ? list.map(diaryEntryHtml).join("")
      : '<p class="diary-empty">' + ui("No entries yet.") + "</p>";
    return (
      '<div class="section-head"><h2>' + ui("My diary") + "</h2><p>" +
      ui("Little notes and everyday feelings.") + "</p></div>" +
      '<div class="diary-page' + (canEdit ? "" : " is-readonly") + '">' +
        (canEdit ? '<section class="diary-write reveal in">' + diaryEditorHtml() + "</section>" : "") +
        '<section class="diary-reading reveal in">' +
          '<div class="diary-list">' + items + "</div>" +
        "</section>" +
      "</div>"
    );
  }
  function renderDiaryPage() {
    const view = $("#view-diary");
    if (!view) return;
    view.innerHTML = diaryPageHtml();
  }
  function renderDiary() {
    const panel = $("#diaryModal .diary-panel");
    if (!panel) return;
    const list = diaryAll();
    const items = list.length
      ? list.map(diaryEntryHtml).join("")
      : '<p class="diary-empty">' + ui("No entries yet.") + "</p>";
    panel.innerHTML =
      '<div class="diary-head"><h2>' + ui("My diary") + "</h2>" +
        '<button class="diary-x" type="button" data-diary-close aria-label="' + ui("Close") + '">✕</button></div>' +
      (isLocalDiaryEditor() ? diaryEditorHtml() : "") +
      '<div class="diary-list">' + items + "</div>";
  }
  function openDiary() {
    const m = $("#diaryModal");
    if (!m) return;
    if (!diaryLoaded) loadDiary(function () { renderDiary(); });
    renderDiary();
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeDiary() {
    const m = $("#diaryModal");
    if (!m || !m.classList.contains("open")) return;
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function diarySave() {
    if (!isLocalDiaryEditor() || diarySaving) return;
    const ta = $("#diaryText"), ti = $("#diaryTitle");
    if (!ta) return;
    const text = ta.value.trim();
    if (!text) { ta.focus(); return; }
    diarySaving = true;
    document.querySelectorAll("#diarySave").forEach(function (b) { b.disabled = true; });
    fetch("api/diary", {
      method: "POST",
      headers: DIARY_HEADERS,
      body: JSON.stringify({ title: (ti && ti.value.trim()) || "", text: text }),
    })
      .then(function (r) {
        if (r.ok) return r.json();
        return r.json().then(function (d) { throw new Error(d.error || "Save failed."); });
      })
      .then(function (d) {
        diaryPublished = normalizeDiaryList(d);
        diaryLoaded = true;
        if (ti) ti.value = "";
        ta.value = "";
        toast(ui("Saved to diary file"));
        renderDiary();
        renderDiaryPage();
      })
      .catch(function () { toast(ui("Could not save diary.")); })
      .finally(function () {
        diarySaving = false;
        document.querySelectorAll("#diarySave").forEach(function (b) { b.disabled = false; });
      });
  }
  function diaryDelete(id) {
    if (!isLocalDiaryEditor()) return;
    fetch("api/diary/" + encodeURIComponent(id), {
      method: "DELETE",
      headers: DIARY_HEADERS,
    })
      .then(function (r) {
        if (r.ok) return r.json();
        return r.json().then(function (d) { throw new Error(d.error || "Delete failed."); });
      })
      .then(function (d) {
        diaryPublished = normalizeDiaryList(d);
        diaryLoaded = true;
        toast(ui("Deleted from diary file"));
        renderDiary();
        renderDiaryPage();
      })
      .catch(function () { toast(ui("Could not delete diary.")); });
  }
  function onDiaryModalClick(e) {
    if (e.target.closest("[data-diary-close]") || e.target.classList.contains("diary-backdrop")) { closeDiary(); return; }
    if (e.target.closest("#diarySave")) { diarySave(); return; }
    const del = e.target.closest("[data-del]");
    if (del) diaryDelete(del.getAttribute("data-del"));
  }
  function onDiaryPageClick(e) {
    if (e.target.closest("#diarySave")) { diarySave(); return; }
    const del = e.target.closest("[data-del]");
    if (del) diaryDelete(del.getAttribute("data-del"));
  }
  function onDiaryPageKeydown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && e.target.closest("#view-diary")) {
      diarySave();
    }
  }

  function renderAll() {
    document.title = t(CONTENT.site.title);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(CONTENT.site.description));
    renderLangToggle();
    renderNav();
    renderHome();
    renderSoftware();
    renderAbout();
    renderDiaryPage();
    renderFooter();
    renderToolMenu();
    switchView(current, true);
  }

  function init() {
    document.documentElement.lang = LANG_HTML[lang];
    $("#fabTop").innerHTML = icons.arrowUp;
    $("#langToggle").addEventListener("click", toggleLang);
    const mascot = $("#mascot");
    if (mascot) mascot.addEventListener("click", shuffleTheme);
    ensureScrollProgress();
    $("#fabTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // 右下角功能坞
    $("#toolLauncher").innerHTML = icons.sakura;
    $("#toolLauncher").addEventListener("click", (e) => { e.stopPropagation(); toggleToolMenu(); });
    $("#toolMenu").addEventListener("click", (e) => {
      e.stopPropagation();
      const b = e.target.closest("[data-tool]");
      if (b) onToolClick(b.dataset.tool);
    });
    document.addEventListener("click", (e) => {
      if (toolOpen && !e.target.closest("#dockRight")) toggleToolMenu(false);
    });
    document.body.classList.toggle("dark", darkOn);

    $("#view-diary").addEventListener("click", onDiaryPageClick);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") toggleToolMenu(false);
    });
    document.addEventListener("keydown", onDiaryPageKeydown);
    loadDiary(function () { renderDiaryPage(); });
    document.addEventListener("click", (e) => {
      const c = e.target.closest("[data-copy]");
      if (c) copyVal(c.getAttribute("data-copy"));
      clickFx(e.clientX, e.clientY);
      const av = e.target.closest(".avatar");
      if (av) reactAvatar(av);
      const ms = e.target.closest("#mascot");
      if (ms) reactMascot(ms);
    });
    initTrail();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    window.addEventListener("resize", moveIndicator);
    window.addEventListener("hashchange", () => {
      const h = (location.hash || "").replace("#", "");
      if (VIEWS.some((v) => v.id === h) && h !== current) switchView(h, true);
    });

    renderBocchiBackdrop();
    startBackdropMotion();
    renderNotes();
    renderMascot();
    renderGarden();
    renderFloatingWords();
    renderAll();
    const hash = (location.hash || "").replace("#", "");
    switchView(VIEWS.some((v) => v.id === hash) ? hash : "home", true);

    setTimeout(function () {
      document.body.classList.add("entered");
      const splash = $("#splash");
      if (splash) {
        splash.classList.add("hide");
        setTimeout(function () { splash.remove(); }, 800);
      }
      setTimeout(function () { if (current === "home") launchFireworks(); }, 500);
    }, 900);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
