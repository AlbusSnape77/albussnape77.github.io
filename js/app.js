(function () {
  "use strict";

  /* ---- Inline SVG icons (no external icon library needed) -------------- */
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
  };

  /* ---- Language ------------------------------------------------------- */
  let lang = localStorage.getItem("lang") || "en";
  // t(): pick the right language out of a { en, zh } object (or pass through plain values)
  const t = (v) =>
    v && typeof v === "object" && !Array.isArray(v) ? (v[lang] != null ? v[lang] : v.en) : v;
  // ui(): fixed interface strings that aren't in content.js
  const ui = (en, zh) => (lang === "zh" ? zh : en);

  /* ---- The three views ------------------------------------------------ */
  const VIEWS = [
    { id: "home", icon: "home", label: { en: "Home", zh: "主页" } },
    { id: "software", icon: "apps", label: { en: "Software", zh: "软件" } },
    { id: "about", icon: "user", label: { en: "About", zh: "关于" } },
  ];
  let current = "home";

  /* ---- Tiny helpers --------------------------------------------------- */
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

  /* ---- Navigation ----------------------------------------------------- */
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

  /* ---- Home / hero ---------------------------------------------------- */
  function renderHome() {
    const p = CONTENT.profile;
    const v = $("#view-home");
    v.innerHTML = "";
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
  }

  /* ---- Software cards ------------------------------------------------- */
  function renderIcon(icon) {
    if (!icon) return "📦";
    if (/\.(png|jpe?g|svg|gif|webp)$/i.test(icon) || icon.indexOf("/") !== -1)
      return '<img src="' + esc(icon) + '" alt="" />';
    return esc(icon); // emoji / text
  }
  function dlAttrs(url) {
    if (!url || url === "#") return "";
    if (/^https?:/i.test(url)) return ' target="_blank" rel="noopener"';
    return " download"; // local file in assets/
  }
  function renderSoftware() {
    const v = $("#view-software");
    const list = CONTENT.software || [];
    let cards = list
      .map((s) => {
        const tags = (s.tags || []).map((tg) => '<span class="tag">' + esc(tg) + "</span>").join("");
        // Web demos get a "Live demo" button; everything else gets "Download".
        const dl = s.live
          ? '<a class="btn btn-primary" href="' + esc(s.live) + '" target="_blank" rel="noopener">' +
            icons.play + "<span>" + ui("Live demo", "在线体验") + "</span></a>"
          : '<a class="btn btn-primary" href="' + esc(s.download || "#") + '"' + dlAttrs(s.download) + ">" +
            icons.download + "<span>" + ui("Download", "下载") + "</span></a>";
        const src = s.source
          ? '<a class="btn icon-only" href="' + esc(s.source) +
            '" target="_blank" rel="noopener" aria-label="Source code" title="' +
            ui("Source code", "源码") + '">' + icons.code + "</a>"
          : "";
        return (
          '<article class="card reveal">' +
          '<div class="card-icon">' + renderIcon(s.icon) + "</div>" +
          "<h3>" + esc(t(s.name)) + "</h3>" +
          '<p class="desc">' + esc(t(s.desc)) + "</p>" +
          '<div class="tags">' + tags + "</div>" +
          '<div class="card-actions">' + dl + src + "</div>" +
          "</article>"
        );
      })
      .join("");
    if (!list.length)
      cards =
        '<p style="grid-column:1/-1;text-align:center;color:var(--ink-soft)">' +
        ui("No software yet — add some in js/content.js", "还没有软件，去 js/content.js 里添加吧") +
        "</p>";
    v.innerHTML =
      '<div class="section-head"><h2>' + ui("Software", "软件作品") + "</h2><p>" +
      ui("Tools and apps I've built — free to download.", "我做的各种工具和软件，欢迎下载使用。") +
      "</p></div>" +
      '<div class="card-grid">' + cards + "</div>";
  }

  /* ---- About ---------------------------------------------------------- */
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

  /* ---- Footer --------------------------------------------------------- */
  function renderFooter() {
    const p = CONTENT.profile;
    $("#siteFooter").innerHTML =
      '<div class="foot-links reveal">' +
        '<a href="' + esc(p.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + icons.github + "</a>" +
        '<a href="mailto:' + esc(p.email) + '" aria-label="Email">' + icons.mail + "</a>" +
        (p.qq ? '<button type="button" data-copy="' + esc(p.qq) + '" aria-label="QQ ' + esc(p.qq) + '" title="QQ ' + esc(p.qq) + '">' + icons.qq + "</button>" : "") +
        (p.wechat ? '<button type="button" data-copy="' + esc(p.wechat) + '" aria-label="WeChat ' + esc(p.wechat) + '" title="' + ui("WeChat ", "微信 ") + esc(p.wechat) + '">' + icons.wechat + "</button>" : "") +
      "</div>" +
      "<div>© " + new Date().getFullYear() + " " + esc(t(p.name)) + " · " +
        ui("Made with", "用") + ' <span class="heart">♥</span></div>';
  }

  /* ---- Floating decorative words -------------------------------------- */
  function renderFloatingWords() {
    const box = $("#floatingWords");
    box.innerHTML = "";
    const words = CONTENT.floatingWords || [];
    const colors = ["#ef6c97", "#3aa9bd", "#b07fd0", "#ff8fb4", "#4ab8c9", "#c98fd6"];
    const rand = (a, b) => a + Math.random() * (b - a);
    const lanes = words.length;
    words.forEach((w, i) => {
      const span = el("span", "floating-word");
      const inner = el("span", "fw-inner"); // inner does the gentle vertical bob
      inner.textContent = w;
      inner.style.color = colors[i % colors.length];
      inner.style.setProperty("--bdur", (2.2 + Math.random() * 1.8).toFixed(1) + "s");
      inner.style.setProperty("--bdelay", (-rand(0, 3)).toFixed(1) + "s");
      span.appendChild(inner);
      // Each quote gets its OWN evenly-spaced lane, so two never share a row → no collisions.
      span.style.top = (lanes > 1 ? 9 + (82 * i) / (lanes - 1) : 50).toFixed(1) + "%";
      const dur = rand(8, 15); // seconds to cross the screen (smaller = faster)
      span.style.setProperty("--dur", dur.toFixed(1) + "s");
      span.style.setProperty("--delay", (-rand(0, dur)).toFixed(1) + "s");
      box.appendChild(span);
      requestAnimationFrame(() => {
        span.style.transition = "opacity 1.2s ease";
        span.style.opacity = (0.72 + Math.random() * 0.16).toFixed(2);
      });
    });
  }

  /* ---- Music notes & petals drifting gently upward -------------------- */
  function renderNotes() {
    const box = $("#notes");
    if (!box) return;
    box.innerHTML = "";
    const glyphs = ["♪", "♫", "♩", "♬", "✦", "❀"];
    const colors = ["#ff9ec4", "#7fd0df", "#c3b6ee", "#ff8fb4", "#9fe0ea", "#e7a6dd"];
    const rand = (a, b) => a + Math.random() * (b - a);
    for (let k = 0; k < 16; k++) {
      const s = el("span", "note");
      s.textContent = glyphs[k % glyphs.length];
      s.style.left = rand(1, 98).toFixed(1) + "%";
      s.style.color = colors[k % colors.length];
      s.style.fontSize = rand(0.9, 2).toFixed(2) + "rem";
      s.style.setProperty("--ndur", rand(12, 24).toFixed(1) + "s");
      s.style.setProperty("--ndelay", (-rand(0, 22)).toFixed(1) + "s");
      s.style.setProperty("--nsway", ((Math.random() < 0.5 ? -1 : 1) * rand(20, 60)).toFixed(0) + "px");
      s.style.setProperty("--nrot", ((Math.random() < 0.5 ? -1 : 1) * rand(15, 45)).toFixed(0) + "deg");
      s.style.setProperty("--nop", rand(0.35, 0.7).toFixed(2));
      box.appendChild(s);
    }
  }

  /* ---- Mascot: use a custom image if one is set in content.js --------- */
  function renderMascot() {
    const m = $("#mascot");
    if (!m) return;
    const img = CONTENT.site && CONTENT.site.mascotImage;
    if (img)
      m.innerHTML =
        '<span class="bk-bubble">ど、どうも…</span>' +
        '<img class="mascot-img" src="' + esc(img) + '" alt="mascot" />';
    // else: keep the built-in CSS chibi that's already in index.html
  }

  /* ---- Scroll reveal: animate elements in as they scroll into view ---- */
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

  /* ---- Copy QQ / WeChat to clipboard, with a tiny toast --------------- */
  function copyVal(text) {
    const done = () => toast((lang === "zh" ? "已复制：" : "Copied: ") + text);
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

  /* ---- View switching ------------------------------------------------- */
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
    $("#siteFooter").style.display = id === "home" ? "none" : "block";
    // Floating keywords belong to the hero only — keep content pages clean.
    $("#floatingWords").style.display = id === "home" ? "block" : "none";
    window.scrollTo({ top: 0, behavior: instant ? "auto" : "smooth" });
    requestAnimationFrame(observeReveals);
  }

  /* ---- Language toggle ------------------------------------------------ */
  function renderLangToggle() {
    $("#langToggle").innerHTML =
      '<span class="' + (lang === "en" ? "on" : "") + '">EN</span>' +
      '<span style="opacity:.4">/</span>' +
      '<span class="' + (lang === "zh" ? "on" : "") + '">中</span>';
  }
  function toggleLang() {
    lang = lang === "en" ? "zh" : "en";
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    renderAll();
  }

  /* ---- Theme shuffle (bottom-left button) ----------------------------- */
  function shuffleTheme() {
    // Reshuffle within Bocchi's pink ↔ cyan family (lavender hue 280 bridges them).
    const ph = 322 + Math.random() * 28; // pink/magenta 322–350
    const ch = 176 + Math.random() * 28; // cyan 176–204
    const r = document.documentElement.style;
    r.setProperty("--pink", "hsl(" + ph.toFixed(0) + " 100% 78%)");
    r.setProperty("--pink-deep", "hsl(" + ph.toFixed(0) + " 72% 66%)");
    r.setProperty("--cyan", "hsl(" + ch.toFixed(0) + " 62% 66%)");
    r.setProperty("--cyan-deep", "hsl(" + ch.toFixed(0) + " 52% 48%)");
    r.setProperty("--grad", "linear-gradient(120deg,hsl(" + ph.toFixed(0) + " 100% 80%),hsl(280 70% 84%),hsl(" + ch.toFixed(0) + " 70% 78%))");
    r.setProperty("--grad-soft", "linear-gradient(120deg,hsl(" + ph.toFixed(0) + " 100% 95%),hsl(280 70% 96%),hsl(" + ch.toFixed(0) + " 70% 95%))");
  }

  /* ---- Re-render everything (used on language change) ------------------ */
  function renderAll() {
    document.title = t(CONTENT.site.title);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(CONTENT.site.description));
    renderLangToggle();
    renderNav();
    renderHome();
    renderSoftware();
    renderAbout();
    renderFooter();
    switchView(current, true);
  }

  /* ---- Init ----------------------------------------------------------- */
  function init() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    $("#fabTop").innerHTML = icons.arrowUp;
    $("#langToggle").addEventListener("click", toggleLang);
    const mascot = $("#mascot");
    if (mascot) mascot.addEventListener("click", shuffleTheme);
    $("#fabTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.addEventListener("click", (e) => {
      const c = e.target.closest("[data-copy]");
      if (c) copyVal(c.getAttribute("data-copy"));
    });
    window.addEventListener("scroll", () =>
      $("#fabTop").classList.toggle("show", window.scrollY > 320)
    );
    window.addEventListener("resize", moveIndicator);
    window.addEventListener("hashchange", () => {
      const h = (location.hash || "").replace("#", "");
      if (VIEWS.some((v) => v.id === h) && h !== current) switchView(h, true);
    });

    renderNotes();
    renderMascot();
    renderFloatingWords();
    renderAll();
    const hash = (location.hash || "").replace("#", "");
    switchView(VIEWS.some((v) => v.id === hash) ? hash : "home", true);

    // Play the opening splash, then reveal the page (hero staggers in via body.entered).
    setTimeout(function () {
      document.body.classList.add("entered");
      const splash = $("#splash");
      if (splash) {
        splash.classList.add("hide");
        setTimeout(function () { splash.remove(); }, 800);
      }
    }, 900);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
