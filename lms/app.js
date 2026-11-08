const L = LAB, $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = { get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch (e) { return d } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} } };
let best = store.get("lab-best", {});
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const ACT = {}; Object.values(L.units).forEach(u => u.aktivitas.forEach(a => ACT[a.id] = { ...a, unit: u }));

// ---------- page (content layer) ----------
const CORNER_NAME = { u1: "🌿 Nature Corner", u2: "🪞 Self-Discovery Corner", u3: "🌍 Green School Corner", u4: "🥗 Healthy Life Corner" };
const UNIT_BG = {
  u1: "radial-gradient(60% 60% at 15% 15%,#7ee08a,transparent 60%),radial-gradient(50% 60% at 90% 30%,#1fb5a0,transparent 60%),radial-gradient(70% 60% at 60% 100%,#0f5f3a,transparent 65%),#1d7a46",
  u2: "radial-gradient(60% 60% at 15% 15%,#c58bff,transparent 60%),radial-gradient(50% 60% at 90% 30%,#ff7ac6,transparent 60%),radial-gradient(70% 60% at 60% 100%,#3b1c8f,transparent 65%),#5a2bc4",
  u3: "radial-gradient(60% 60% at 15% 15%,#5ad1ff,transparent 60%),radial-gradient(50% 60% at 90% 30%,#3d6bff,transparent 60%),radial-gradient(70% 60% at 60% 100%,#0a2f7a,transparent 65%),#0d57c4",
  u4: "radial-gradient(60% 60% at 15% 15%,#ffc46b,transparent 60%),radial-gradient(50% 60% at 90% 30%,#ff5f8f,transparent 60%),radial-gradient(70% 60% at 60% 100%,#a3261a,transparent 65%),#e2552c"
};
const MESH = c => `<div class="mesh">${c.map((x, i) => `<i style="background:${x};left:${[5, 55, 25][i]}%;top:${[5, 15, 55][i]}%"></i>`).join("")}</div>`;
const TABS = [["beranda", "🏠", "Home"], ["u1", "🌿", "Sem 1"], ["u3", "🌍", "Sem 2"], ["pustaka", "📚", "Library"], ["profil", "👩‍🏫", "Teacher"]];

function render() {
  $("#beranda").innerHTML = MESH(["#7b7cff", "#ff8cc6", "#ffc16b"]) + `
    <p class="eyebrow">Bahasa Inggris Tingkat Lanjut · Grade XI</p>
    <h1 class="display">Bahasa Inggris<br>TL Corner</h1>
    <p class="teacher-name">${L.guru}</p>
    <p class="lede">${L.tagline}</p>
    <div class="chips">${L.heroLinks.concat(L.driveLinks.filter(d => d.url !== "#")).map(l => `<a class="chip glass clear" href="${l.url}" target="_blank" rel="noopener">${l.t}</a>`).join("")}</div>`;
  $("#sems").innerHTML = L.semester.map((s, si) => s.units.map((k, i) => unitSection(k, L.units[k], i === 0 ? s : null, si)).join("")).join("");
  $("#pustaka").innerHTML = `<p class="eyebrow" style="color:var(--accent)">Extra</p><h2>Digital Library</h2><p class="sub">Free English books and websites to read more.</p>
    <div class="list">${L.perpustakaan.map(p => `<a href="${p.url}" target="_blank" rel="noopener">${p.t}<span>↗</span></a>`).join("")}</div>`;
  $("#profil").innerHTML = `<p class="eyebrow" style="color:var(--accent)">Your Teacher</p><div class="prof"><div class="ava">DA</div><div><h3>${L.guru}</h3><p>${L.jabatan}</p></div></div>
    <p class="foot">© 2026 Lab English XI Lanjut · SMAN 1 Batam · <a href="../">Teacher's Page</a></p>`;
  $("#seg").innerHTML = `<i class="blob" id="segBlob"></i>` + Object.entries(L.units).map(([k, u]) => `<a href="#${k}" data-k="${k}">${u.emoji} <span>Unit ${+u.no}</span></a>`).join("");
  $("#tabbar").innerHTML = `<i class="blob" id="tabBlob"></i>` + TABS.map(([k, e, t]) => `<a href="#${k}" data-k="${k}"><b>${e}</b><span>${t}</span></a>`).join("");
  wireGlass(); onScroll();
}
function unitSection(k, u, sem, si) {
  return `<section class="unit tone-dark" id="${k}" data-tab="${si ? "u3" : "u1"}" data-unit="${k}" style="--bg:${UNIT_BG[k]}">
    ${MESH(["rgba(255,255,255,.35)", "rgba(255,255,255,.18)", "rgba(0,0,0,.25)"])}
    ${sem ? `<div class="sem-label glass clear">${sem.nama} · ${sem.sub}</div>` : ""}
    <div class="u-top"><span class="u-emoji">${u.emoji}</span><span class="eyebrow" style="margin:0">Unit ${u.no} · ${u.jenis}</span></div>
    <h2 class="u-title">${u.judul}</h2>
    <p class="u-desk">${u.desk}</p>
    <div class="u-tags">${u.tags.map(t => `<span class="glass clear">${t}</span>`).join("")}</div>
    <div class="panel glass clear"><div class="acts">${u.aktivitas.map(a => `<button class="act" onclick="openAct('${a.id}', this)"><span class="i">${a.ic}</span><span><b>${a.t}</b><small>${a.note || ""}</small></span>${best[a.id] != null ? `<span class="best">⭐ ${best[a.id]}</span>` : ""}</button>`).join("")}</div></div>
    <div class="u-row"><button class="cta" onclick="openMateri('${k}', this)">Read the Summary →</button><a class="cta" href="corner.html?u=${+u.no}" style="text-decoration:none">${CORNER_NAME[k]} →</a></div>
    <div class="u-row"><span class="lbl">🎬 Video</span>${u.video.concat(u.inspirasi || []).map(([t, url]) => `<a class="chip glass clear" href="${url}" target="_blank" rel="noopener">▶ ${t}</a>`).join("")}</div>
  </section>`;
}

// ---------- controls: adaptive tint, active blob, shrink on scroll ----------
function moveBlob(blob, el) { if (!blob || !el) return; blob.style.left = el.offsetLeft + "px"; blob.style.width = el.offsetWidth + "px"; }
function toneUnder(el) {
  const r = el.getBoundingClientRect(), y = r.top + r.height / 2;
  const hit = [...document.querySelectorAll("#content > section, #sems > section")].find(s => { const b = s.getBoundingClientRect(); return b.top <= y && b.bottom >= y; });
  el.classList.toggle("on-light", !!hit && hit.classList.contains("tone-light"));
  el.classList.toggle("on-dark", !hit || hit.classList.contains("tone-dark"));
}
let lastY = scrollY, ticking = false;
function onScroll() {
  const y = scrollY; document.body.classList.toggle("compact", y > lastY + 4 && y > 120); if (y < lastY - 4 || y < 120) document.body.classList.remove("compact"); lastY = y;
  toneUnder($("#topbar")); toneUnder($("#tabbar"));
  const mid = innerHeight * .4;
  const sec = [...document.querySelectorAll("#content > section, #sems > section")].find(s => { const b = s.getBoundingClientRect(); return b.top <= mid && b.bottom > mid; });
  if (sec) {
    const tab = document.querySelector(`#tabbar a[data-k="${sec.dataset.tab}"]`);
    document.querySelectorAll("#tabbar a").forEach(a => a.classList.toggle("on", a === tab)); moveBlob($("#tabBlob"), tab);
    const seg = document.querySelector(`#seg a[data-k="${sec.dataset.unit}"]`);
    $("#segBlob").style.opacity = seg ? 1 : 0; if (seg) moveBlob($("#segBlob"), seg);
  }
}
addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; } }, { passive: true });
addEventListener("resize", onScroll);
// specular highlight follows the pointer (and device tilt on phones)
function wireGlass() {
  document.querySelectorAll(".glass").forEach(g => g.onpointermove = e => { const r = g.getBoundingClientRect(); g.style.setProperty("--mx", (e.clientX - r.left) + "px"); g.style.setProperty("--my", (e.clientY - r.top) + "px"); });
}
addEventListener("deviceorientation", e => { if (e.gamma == null) return; document.documentElement.style.setProperty("--mx", (50 + e.gamma) + "%"); document.documentElement.style.setProperty("--my", Math.max(0, e.beta - 30) + "%"); });
if (/Chrome\//.test(navigator.userAgent) && !/Edg\/|OPR\//.test(navigator.userAgent) && matchMedia("(min-width:701px)").matches) document.documentElement.classList.add("lens");

// ---------- sheet: morphs out of the tapped control (FLIP + spring) ----------
let origin = null;
function openModal(title, html, from) {
  if (from) origin = from.getBoundingClientRect();
  const sh = $("#sheet"), first = sh.hidden;
  $("#mt").textContent = title; $("#mb").innerHTML = html; $("#mb").scrollTop = 0;
  sh.hidden = false; $("#scrim").hidden = false; document.body.style.overflow = "hidden"; wireGlass();
  if (first && origin) {
    const end = sh.getBoundingClientRect();
    const dx = origin.left + origin.width / 2 - (end.left + end.width / 2), dy = origin.top + origin.height / 2 - (end.top + end.height / 2);
    const base = getComputedStyle(sh).transform === "none" ? "" : getComputedStyle(sh).transform;
    sh.animate([{ transform: `${base} translate(${dx}px,${dy}px) scale(${origin.width / end.width},${origin.height / end.height})`, borderRadius: "999px", opacity: .4 },
                { transform: base || "none", borderRadius: "36px", opacity: 1 }], { duration: 620, easing: "cubic-bezier(.34,1.4,.64,1)" });
    $("#mb").animate([{ opacity: 0 }, { opacity: 0, offset: .35 }, { opacity: 1 }], { duration: 520 });
  }
}
function closeModal() {
  const sh = $("#sheet"); if (sh.hidden) return;
  const done = () => { sh.hidden = true; $("#scrim").hidden = true; document.body.style.overflow = ""; render(); };
  if (origin) {
    const end = sh.getBoundingClientRect(), base = getComputedStyle(sh).transform === "none" ? "" : getComputedStyle(sh).transform;
    const dx = origin.left + origin.width / 2 - (end.left + end.width / 2), dy = origin.top + origin.height / 2 - (end.top + end.height / 2);
    sh.animate([{ transform: base || "none", opacity: 1 }, { transform: `${base} translate(${dx}px,${dy}px) scale(${origin.width / end.width},${origin.height / end.height})`, borderRadius: "999px", opacity: 0 }],
      { duration: 340, easing: "cubic-bezier(.4,0,.2,1)" }).onfinish = done;
  } else done();
}
window.closeModal = closeModal;
$("#mx").onclick = closeModal; $("#scrim").onclick = closeModal;
addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
window.openMateri = (k, el) => openModal(`📖 Summary · Unit ${+L.units[k].no}`, `<div class="mat">${L.units[k].materi}</div>`, el);

let cur;
window.openAct = (id, el) => { if (el) origin = el.getBoundingClientRect(); cur = ACT[id]; ({ quiz: Quiz, game: Game, sort: Sort, classify: Classify, fill: Fill })[cur.type].start(); };

function finish(score, extra = "") {
  const old = best[cur.id]; if (old == null || score > old) { best[cur.id] = score; store.set("lab-best", best); }
  const nama = store.get("lab-nama", "");
  const msg = score >= 90 ? "Excellent! 🏆" : score >= 75 ? "Great job! 🎉" : score >= 50 ? "Good effort! 💪" : "Keep practicing! 🌱";
  $("#mb").innerHTML = `<div class="result"><div class="big">${score}</div><p><b>${msg}</b></p>${extra}
    <div class="cert"><input class="name" id="nm" placeholder="Your name & class (e.g. Rina · XI HJ 7)" value="${esc(nama)}">
      <div>📌 <b>${esc(cur.t)}</b></div><div>Score: <b>${score}</b> · ${new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}</div>
      <small style="color:var(--muted)">Take a screenshot and send it to your teacher.</small></div>
    <div class="row" style="justify-content:center"><button class="btn" onclick="openAct('${cur.id}')">Try again</button><button class="btn alt" onclick="closeModal()">Done</button></div></div>`;
  $("#nm").oninput = e => store.set("lab-nama", e.target.value);
}

// ---------- quiz ----------
const Quiz = {
  start() { this.qs = shuffle(cur.soal); this.i = 0; this.ok = 0; this.show(); },
  show() {
    const [q, opts, ans] = this.qs[this.i];
    openModal(`${cur.ic} ${cur.t}`, `<div class="prog"><i style="width:${this.i / this.qs.length * 100}%"></i></div>
      <p class="intro">Question ${this.i + 1} of ${this.qs.length}</p><p class="q">${esc(q)}</p>
      ${opts.map((o, j) => `<button class="opt" data-j="${j}">${String.fromCharCode(65 + j)}. ${esc(o)}</button>`).join("")}<div class="fb" id="fb"></div><div class="row" id="nx"></div>`);
    document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const j = +b.dataset.j; document.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.j === ans) x.classList.add("right"); });
      if (j === ans) { this.ok++; $("#fb").innerHTML = "✅ Correct!"; } else { b.classList.add("wrong"); $("#fb").innerHTML = "❌ Not quite. The right answer is in green."; }
      $("#nx").innerHTML = `<button class="btn">${this.i + 1 < this.qs.length ? "Next →" : "See my score"}</button>`;
      $("#nx button").onclick = () => { this.i++; this.i < this.qs.length ? this.show() : finish(Math.round(this.ok / this.qs.length * 100), `<p>${this.ok} of ${this.qs.length} correct</p>`); };
    });
  }
};

// ---------- game (millionaire style) ----------
const PRIZE = ["100", "200", "500", "1.000", "5.000", "10.000", "50.000", "1 JUTA ⭐"];
const Game = {
  start() { this.qs = shuffle(cur.soal).slice(0, 8); this.i = 0; this.ff = true; this.show(); },
  show() {
    const [q, opts, ans] = this.qs[this.i]; this.ans = ans;
    openModal(`${cur.ic} ${cur.t}`, `<div class="game"><div>
      <p class="intro">Question ${this.i + 1} · <b>${PRIZE[this.i]}</b> points</p><p class="q">${esc(q)}</p>
      ${opts.map((o, j) => `<button class="opt" data-j="${j}">${String.fromCharCode(65 + j)}. ${esc(o)}</button>`).join("")}
      <div class="row"><button class="lifeline" id="ff" ${this.ff ? "" : "disabled"}>50 : 50</button></div><div class="fb" id="fb"></div></div>
      <ol class="ladder">${PRIZE.slice(0, this.qs.length).map((p, k) => `<li class="${k === this.i ? "now" : k < this.i ? "done" : ""}">${k + 1}. ${p}</li>`).join("")}</ol></div>`);
    $("#ff").onclick = () => { this.ff = false; $("#ff").disabled = true; shuffle([0, 1, 2, 3].filter(j => j !== ans && j < opts.length)).slice(0, 2).forEach(j => document.querySelector(`.opt[data-j="${j}"]`).classList.add("gone")); };
    document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      document.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.j === ans) x.classList.add("right"); }); $("#ff").disabled = true;
      const win = +b.dataset.j === ans; if (!win) b.classList.add("wrong");
      setTimeout(() => {
        if (win && this.i + 1 < this.qs.length) { this.i++; this.show(); }
        else finish(Math.round((this.i + (win ? 1 : 0)) / this.qs.length * 100), win ? `<p>🏆 You are an <b>English Master</b>!</p>` : `<p>You stopped at question ${this.i + 1}. Try again!</p>`);
      }, 1100);
    });
  }
};

// ---------- sort ----------
const split = s => { const i = s.indexOf(" — "); return i > 0 ? [s.slice(0, i), s.slice(i + 3)] : ["", s]; };
const Sort = {
  start() {
    this.order = shuffle(cur.items.map((_, i) => i)); if (this.order.every((v, i) => v === i)) this.order.reverse();
    this.show();
  },
  show(checked) {
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro} Use ▲▼ to move them.</p>
      <ul class="sort">${this.order.map((v, i) => { const [lab, txt] = split(cur.items[v]);
        return `<li class="${checked ? (v === i ? "right" : "wrong") : ""}"><span class="t">${checked && lab ? `<span class="tag">${esc(lab)}</span>` : ""}${esc(txt)}</span>
        <span class="mv"><button data-u="${i}" ${checked ? "disabled" : ""}>▲</button><button data-d="${i}" ${checked ? "disabled" : ""}>▼</button></span></li>`; }).join("")}</ul>
      <div class="row">${checked ? "" : `<button class="btn" id="ck">Check</button>`}</div>`);
    document.querySelectorAll("[data-u]").forEach(b => b.onclick = () => { const i = +b.dataset.u; if (i > 0) { [this.order[i - 1], this.order[i]] = [this.order[i], this.order[i - 1]]; this.show(); } });
    document.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { const i = +b.dataset.d; if (i < this.order.length - 1) { [this.order[i + 1], this.order[i]] = [this.order[i], this.order[i + 1]]; this.show(); } });
    if (!checked) $("#ck").onclick = () => {
      this.show(true); const ok = this.order.filter((v, i) => v === i).length;
      $(".row").innerHTML = `<p class="fb">${ok === this.order.length ? "✅ Perfect order!" : `${ok} of ${this.order.length} in the right place. Check the labels.`}</p><button class="btn" id="sc">See my score</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / this.order.length * 100));
    };
  }
};

// ---------- classify ----------
const Classify = {
  start() {
    this.items = shuffle(cur.items); this.pick = {};
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro}</p>${this.items.map(([txt], i) => `<div class="cl" id="c${i}"><div>${esc(txt)}</div><div class="g">${cur.groups.map((g, j) => `<button data-i="${i}" data-j="${j}">${esc(g)}</button>`).join("")}</div></div>`).join("")}
      <div class="row"><button class="btn" id="ck">Check</button></div>`);
    document.querySelectorAll(".cl .g button").forEach(b => b.onclick = () => {
      const i = +b.dataset.i; this.pick[i] = +b.dataset.j;
      document.querySelectorAll(`button[data-i="${i}"]`).forEach(x => x.classList.toggle("pick", x === b));
    });
    $("#ck").onclick = () => {
      if (Object.keys(this.pick).length < this.items.length && !confirm("Some items are not done yet. Check anyway?")) return;
      let ok = 0;
      this.items.forEach(([, g], i) => { const r = this.pick[i] === g; if (r) ok++; const el = $("#c" + i); el.classList.add(r ? "right" : "wrong");
        if (!r) el.insertAdjacentHTML("beforeend", `<small>Answer: <b>${esc(cur.groups[g])}</b></small>`); el.querySelectorAll("button").forEach(x => x.disabled = true); });
      $(".row").innerHTML = `<p class="fb">${ok} of ${this.items.length} correct</p><button class="btn" id="sc">See my score</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / this.items.length * 100));
    };
  }
};

// ---------- fill ----------
const Fill = {
  start() {
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro}</p>${cur.soal.map(([q], i) => { const [a, b] = q.split("___");
      return `<div class="fi" id="f${i}"><span>${i + 1}. ${esc(a)}</span><input id="in${i}" autocomplete="off" autocapitalize="off"><span>${esc(b || "")}</span></div>`; }).join("")}
      <div class="row"><button class="btn" id="ck">Check</button></div>`);
    $("#ck").onclick = () => {
      let ok = 0;
      cur.soal.forEach(([, ans], i) => { const v = $("#in" + i).value.trim().toLowerCase(); const r = v === ans; if (r) ok++;
        $("#f" + i).classList.add(r ? "right" : "wrong"); $("#in" + i).disabled = true; if (!r) $("#f" + i).insertAdjacentHTML("beforeend", `<small>→ <b>${ans}</b></small>`); });
      $(".row").innerHTML = `<p class="fb">${ok} of ${cur.soal.length} correct</p><button class="btn" id="sc">See my score</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / cur.soal.length * 100));
    };
  }
};

render();
["#tabbar", "#topbar"].forEach(s => $(s).addEventListener("transitionend", () => { moveBlob($("#tabBlob"), $("#tabbar a.on")); }));
setTimeout(onScroll, 400);
// open a game from a link like lms/#act=u1-quiz (used by the LKPD Practice tab)
if (location.hash.startsWith("#act=")) { const id = location.hash.slice(5); if (ACT[id]) setTimeout(() => { const u = document.getElementById(ACT[id].unit === L.units.u1 ? "u1" : Object.keys(L.units).find(k => L.units[k] === ACT[id].unit)); if (u) u.scrollIntoView(); openAct(id); }, 450); }
