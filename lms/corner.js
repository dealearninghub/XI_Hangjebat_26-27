// generated from lkpd.js (shared worksheet code) + corner-main.js
// =====================================================================
//  LKPD page: lkpd.html?u=1#p5  (u = unit 1-4, hash = tab or worksheet id)
// =====================================================================
const $ = s => document.querySelector(s);
const UNIT_BG = {
  u1: ["#1d7a46", "radial-gradient(60% 60% at 15% 15%,#7ee08a,transparent 60%),radial-gradient(50% 60% at 90% 30%,#1fb5a0,transparent 60%),radial-gradient(70% 60% at 60% 100%,#0f5f3a,transparent 65%),#1d7a46"],
  u2: ["#5a2bc4", "radial-gradient(60% 60% at 15% 15%,#c58bff,transparent 60%),radial-gradient(50% 60% at 90% 30%,#ff7ac6,transparent 60%),radial-gradient(70% 60% at 60% 100%,#3b1c8f,transparent 65%),#5a2bc4"],
  u3: ["#0d57c4", "radial-gradient(60% 60% at 15% 15%,#5ad1ff,transparent 60%),radial-gradient(50% 60% at 90% 30%,#3d6bff,transparent 60%),radial-gradient(70% 60% at 60% 100%,#0a2f7a,transparent 65%),#0d57c4"],
  u4: ["#d4481f", "radial-gradient(60% 60% at 15% 15%,#ffc46b,transparent 60%),radial-gradient(50% 60% at 90% 30%,#ff5f8f,transparent 60%),radial-gradient(70% 60% at 60% 100%,#a3261a,transparent 65%),#e2552c"]
};
const CP = {
  u1: "Pada akhir Fase F, murid memahami (C2) alur cerita dan struktur generik teks narasi tentang isu kesadaran lingkungan secara lisan, tulis, atau multimodal; menganalisis (C4) unsur kebahasaan teks; mengevaluasi (C5) dan merefleksi informasi tersurat maupun tersirat dengan mengaitkannya pada kondisi lingkungan nyata di sekitar sekolah; serta mencipta (C6) sebuah cerita pendek bergambar dengan struktur teks dan unsur kebahasaan yang tepat, jelas, dan detail, sesuai kompetensi CEFR Level B2.",
  u2: "Pada akhir Fase F, murid memahami (C2) struktur dan elemen cerita dari teks narasi (dongeng/fantasi) tentang isu konsep diri dan kesejahteraan (well-being); menganalisis (C4) unsur kebahasaan teks; mengevaluasi (C5) dan merefleksi informasi tersurat maupun tersirat dengan mengaitkannya pada pengalaman nyata pencarian jati diri remaja; serta mencipta (C6) sebuah produk cerita digital dengan struktur teks dan unsur kebahasaan yang tepat, jelas, dan detail, sesuai kompetensi CEFR Level B2.",
  u3: "Pada akhir Fase F, murid memahami (C2) gagasan utama dan struktur generik (thesis-arguments-reiteration) teks eksposisi analitis tentang perlindungan lingkungan; menganalisis (C4) unsur kebahasaan dan struktur argumen berdata; mengevaluasi (C5) efektivitas argumen dengan mengaitkannya pada data/isu lingkungan nyata di sekitar sekolah; serta mencipta (C6) teks eksposisi analitis tertulis dan produk video kampanye dengan argumen yang didukung data dan fakta, sesuai kompetensi CEFR Level B2.",
  u4: "Pada akhir Fase F, murid memahami (C2) gagasan utama dan struktur generik (thesis-arguments-recommendation) teks eksposisi hortatori tentang pentingnya menjalani gaya hidup sehat; menganalisis (C4) unsur kebahasaan dan strategi persuasi (logos-pathos-ethos); mengevaluasi (C5) kelayakan rekomendasi dengan mengaitkannya pada kebiasaan hidup nyata siswa; serta mencipta (C6) teks eksposisi hortatori dalam bentuk podcast berisi ajakan (rekomendasi) yang didukung data, sesuai kompetensi CEFR Level B2."
};
const EVAL = { u1: "Meeting 17-18", u2: "Meeting 33-34", u3: "Meeting 51-52", u4: "Meeting 69-70" };
const _OLD_TABS = [["theory", "<i>📘 </i>Theory"], ["steps", "<i>🧭 </i>Steps"], ["practice", "<i>🎮 </i>Practice"], ["ws", "<i>📝 </i>LKPD"], ["about", "<i>ℹ️ </i>About"]];

const uk = "u" + (Math.min(4, Math.max(1, +new URLSearchParams(location.search).get("u") || 1)));
const U = LAB.units[uk], D = LKPD[uk];
const [UC, UBG] = UNIT_BG[uk];
document.documentElement.style.setProperty("--u", UC);
document.title = `LKPD Unit ${U.no} · Lab English XI`;
$('meta[name="theme-color"]').content = UC;

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

// ---------- answer checking ----------
const norm = s => String(s || "").toLowerCase()
  .replace(/[’‘`´]/g, "'").replace(/[“”"]/g, "").replace(/can't/g, "cannot").replace(/n't\b/g, " not")
  .replace(/°\s*c\b/g, "°c").replace(/\s*,\s*/g, ", ").replace(/\s+/g, " ").replace(/[.!?\s]+$/, "").trim();
const strip = s => s.replace(/^(let's|let us|please),? /, "").replace(/\bthat /g, "");
function match(v, answers) {
  const n = norm(v); if (!n) return false;
  return answers.some(a => {
    if (a.startsWith("/")) { const i = a.lastIndexOf("/"); return new RegExp(a.slice(1, i), "i").test(n); }
    const m = norm(a); return n === m || strip(n) === strip(m);
  });
}
const showAns = a => a.startsWith("/") ? "NO + a reason" : a;

// ---------- worksheet ----------
let cnt = 0;
const fid = () => "f" + (cnt++);
function control(it, id) {
  if (it == null) return `<textarea class="in" rows="1" data-id="${id}"></textarea>`;
  if (it.k === "fill") return `<input class="in" data-id="${id}" data-auto="${esc(JSON.stringify(it.a))}" autocomplete="off" spellcheck="false">`;
  if (it.k === "pick") return `<select class="in" data-id="${id}" ${it.a != null ? `data-pick="${esc(it.a)}"` : ""}><option value="">—</option>${it.o.map(o => `<option>${esc(o)}</option>`).join("")}</select>`;
  return "";
}
function fb(it) { return it && (it.a != null) ? `<div class="fb" data-why="${esc(it.why || "")}"></div>` : ""; }
function renderItem(it) {
  if (it.k === "p") return `<p class="item">${it.html}</p>`;
  if (it.k === "box") return `<div class="box">${it.html}</div>`;
  if (it.k === "read") return `<details class="read" open><summary>${it.title}</summary><div class="txt">${it.html}</div></details>`;
  if (it.k === "open") { const id = fid(); return `<label class="item"><span class="q">${it.q}</span><textarea class="in" rows="${it.n}" data-id="${id}"></textarea></label>`; }
  if (it.k === "fill" || it.k === "pick") { const id = fid(); return `<div class="item"><label class="q" for="${id}">${it.q}</label>${control(it, id).replace("data-id", `id="${id}" data-id`)}${fb(it)}</div>`; }
  if (it.k === "check") return `<div class="item">${it.q ? `<span class="q">${it.q}</span>` : ""}<div class="chk">${it.list.map(l => `<label><input type="checkbox" data-id="${fid()}"> <span>${l}</span></label>`).join("")}</div></div>`;
  if (it.k === "table") return `<div class="tbl"><table><thead><tr>${it.cols.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${it.rows.map(r => `<tr>${r.map(c =>
    typeof c === "string" ? `<td class="static">${c}</td>` : `<td>${control(c, fid())}${fb(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  return "";
}
function viewSheet(s) {
  cnt = 0;
  return `${pillsHTML(s.id)}
  <article class="ws" id="ws">
    <div class="ws-head"><span class="tag u">LKPD · ${s.p}</span><span class="tag">TP ${s.tp}</span><span class="tag">${s.mode}</span></div>
    <h3>${s.title}</h3><p class="ws-sub">${s.sub}</p>
    <div class="ident">
      <label>Name<input class="in" data-g="name" autocomplete="name"></label>
      <label>No.<input class="in" data-g="no" inputmode="numeric"></label>
      <label>Class<input class="in" data-g="kelas" placeholder="XI Hang Jebat"></label>
      <label>Date<input class="in" type="date" data-id="date"></label>
    </div>
    <div class="goal"><b>Learning objective</b><p>${s.goal}</p></div>
    ${s.parts.map(p => `<section class="part"><div class="part-h"><h4>${p.h}</h4>${p.time ? `<span>⏱ ${p.time}</span>` : ""}</div>
      ${p.items.map(renderItem).join("")}${p.key ? `<div class="key"><b>Answer guide</b>${p.key}</div>` : ""}</section>`).join("")}
    <section class="part"><div class="part-h"><h4>Self-check</h4></div>
      <div class="self">${["I understand", "I partly understand", "I need help"].map(l => `<label><input type="radio" name="self" value="${l}" data-id="self-${l}"> ${l}</label>`).join("")}</div></section>
    <div class="actions">
      <button class="btn u" id="bCheck">✓ Check my answers</button>
      <button class="btn alt" id="bReset">↺ Try again</button>
      <button class="btn alt" id="bPrint">🖨 Print / Save PDF</button>
      <span class="saved" id="saved">Saved on this device</span>
    </div>
    <div class="score" id="score"></div>
  </article>`;
}

function wireSheet(s) {
  save("lkpd-last-" + uk, s.id);
  const key = `lkpd:${uk}:${s.id}`, st = load(key, {}), g = load("lkpd-id", {});
  const ws = $("#ws");
  const grow = t => { t.style.height = "auto"; t.style.height = t.scrollHeight + 2 + "px"; };
  ws.querySelectorAll("[data-g]").forEach(el => { el.value = g[el.dataset.g] || ""; el.oninput = () => { g[el.dataset.g] = el.value; save("lkpd-id", g); }; });
  ws.querySelectorAll("[data-id]").forEach(el => {
    const id = el.dataset.id;
    if (el.type === "checkbox" || el.type === "radio") el.checked = !!st[id]; else if (st[id] != null) el.value = st[id];
    if (el.tagName === "TEXTAREA") requestAnimationFrame(() => grow(el));
    const on = () => {
      if (el.type === "radio") ws.querySelectorAll(`input[name="${el.name}"]`).forEach(r => st[r.dataset.id] = r.checked);
      else st[el.dataset.id] = el.type === "checkbox" ? el.checked : el.value;
      if (el.tagName === "TEXTAREA") grow(el);
      el.classList.remove("ok", "bad"); save(key, st);
      $("#saved").textContent = "Saved ✓"; clearTimeout(on.t); on.t = setTimeout(() => $("#saved").textContent = "Saved on this device", 1200);
    };
    el.addEventListener(el.tagName === "SELECT" || el.type === "checkbox" || el.type === "radio" ? "change" : "input", on);
  });
  if (!st.date) { const d = ws.querySelector('[data-id="date"]'); d.value = new Date().toISOString().slice(0, 10); }

  $("#bCheck").onclick = () => {
    let ok = 0, all = 0;
    ws.querySelectorAll("[data-auto],[data-pick]").forEach(el => {
      all++;
      const good = el.dataset.auto ? match(el.value, JSON.parse(el.dataset.auto)) : el.value === el.dataset.pick;
      if (good) ok++;
      el.classList.toggle("ok", good); el.classList.toggle("bad", !good);
      const f = el.parentElement.querySelector(".fb");
      if (f) {
        const ans = el.dataset.auto ? showAns(JSON.parse(el.dataset.auto)[0]) : el.dataset.pick, why = f.dataset.why;
        const inTable = !!el.closest("td");
        f.className = "fb show " + (good ? "ok" : "bad");
        f.innerHTML = good ? (inTable ? "✓" : "✓ Correct!" + (why ? " " + esc(why) : "")) : (inTable ? "→ " + esc(ans) : `✗ Not yet. Answer: <b>${esc(ans)}</b>${why ? "<br>" + esc(why) : ""}`);
      }
    });
    ws.classList.add("checked");
    const sc = $("#score");
    if (all) {
      const n = Math.round(ok / all * 100), cat = n >= 92 ? "A · Very Good" : n >= 84 ? "B · Good" : n >= 75 ? "C · Fair" : "D · Needs Improvement";
      sc.innerHTML = `<span class="big">${n}</span><p><b>${ok} of ${all} correct</b> · ${cat}<br><small>Written answers are checked by your teacher. Read the answer guides above.</small></p>`;
      const best = load("lkpd-best", {}); best[`${uk}:${s.id}`] = Math.max(n, best[`${uk}:${s.id}`] || 0); save("lkpd-best", best);
    } else sc.innerHTML = `<span class="big">✓</span><p><b>All answers here are your own ideas.</b><br><small>Read the answer guides above. Your teacher checks this worksheet.</small></p>`;
    sc.classList.add("show"); sc.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  $("#bReset").onclick = () => {
    if (!confirm("Clear the auto-checked answers and try again?")) return;
    ws.querySelectorAll("[data-auto],[data-pick]").forEach(el => { el.value = ""; delete st[el.dataset.id]; el.classList.remove("ok", "bad"); });
    ws.querySelectorAll(".fb").forEach(f => f.className = "fb");
    ws.classList.remove("checked"); $("#score").classList.remove("show"); save(key, st);
    ws.querySelector("[data-auto],[data-pick]")?.focus();
  };
  $("#bPrint").onclick = () => print();
  const pill = $(".pill.on"); if (pill) pill.scrollIntoView({ inline: "center", block: "nearest" });
}
addEventListener("beforeprint", () => document.querySelectorAll("details.read").forEach(d => d.open = true));

// =====================================================================
//  CORNER page: corner.html?u=1#theory | #steps | #sim | #quiz | #p5 | #dev
// =====================================================================
const TABS = [["theory", "Theory"], ["steps", "Steps"], ["sim", "Simulation"], ["lkpd", "LKPD"], ["dev", "Developer"]];
const K = CORNER[uk];
document.title = `${K.name} · Lab English XI`;

// ---------- sound (Web Audio, no files) ----------
let soundOn = load("corner-sound", true), actx;
function beep(ok) {
  if (!soundOn) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = ok ? [660, 880] : [300, 220];
    notes.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + i * .11;
      o.type = ok ? "sine" : "triangle"; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.18, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + .2);
      o.connect(g).connect(actx.destination); o.start(t); o.stop(t + .22);
    });
  } catch {}
}

// ---------- shell ----------
$("#logo").textContent = K.icon;
$("#appTitle").innerHTML = `${K.name} <span>· ${U.judul}</span>`;
$("#backLink").href = "./#" + uk;
$("#units").innerHTML = Object.keys(CORNER).map((k, i) => `<a href="?u=${i + 1}" class="${k === uk ? "on" : ""}" title="${CORNER[k].name}">${CORNER[k].icon}</a>`).join("");
$("#tabs").innerHTML = TABS.map(([k, t]) => `<a href="#${k}" data-k="${k}">${t}</a>`).join("");

function route() {
  const h = decodeURIComponent(location.hash.slice(1)) || "theory";
  const sheet = D.sheets.find(s => s.id === h);
  const tab = sheet || h === "quiz" ? "lkpd" : (TABS.some(t => t[0] === h) ? h : "theory");
  document.querySelectorAll("#tabs a").forEach(a => a.classList.toggle("on", a.dataset.k === tab));
  const v = $("#view"); v.scrollTop = 0; v.className = "view v-" + tab;
  if (tab === "theory") v.innerHTML = viewTheory();
  if (tab === "steps") v.innerHTML = viewSteps();
  if (tab === "sim") { v.innerHTML = viewSim(); wireSim(); }
  if (tab === "dev") { v.innerHTML = viewDev(); wireDev(); }
  if (tab === "lkpd") {
    const last = load("lkpd-last-" + uk, "quiz");
    const id = sheet ? h : h === "quiz" ? "quiz" : (last === "quiz" || D.sheets.some(s => s.id === last) ? last : "quiz");
    if (id === "quiz") { v.innerHTML = pillsHTML("quiz") + viewQuiz(); wireQuiz(); save("lkpd-last-" + uk, "quiz"); }
    else { const s = D.sheets.find(x => x.id === id); v.innerHTML = viewSheet(s); wireSheet(s); }
  }
}
const crumb = () => `<div class="crumb">${K.crumb.join(" › ")}</div>`;

function viewTheory() {
  return `${crumb()}<h1 class="ttl">${K.head}</h1>
  <div class="two">
    <div class="col">${K.cards.map(c => `<div class="pane"><h5>${c.t}</h5>${c.html}</div>`).join("")}</div>
    <div class="col"><div class="pane"><h5>Real-life connections</h5>
      <div class="models">${K.models.map(m => `<div class="model"><small>${m.tag}</small><b>${m.t}</b><span>${m.d}</span></div>`).join("")}</div>
      <h5 style="margin-top:20px">Why does it matter?</h5><p>${K.why}</p></div></div>
  </div>`;
}
function viewSteps() {
  return `${crumb()}<h1 class="ttl">How to read a <em>${K.sub.split(" · ").pop()}</em> text</h1>
  <div class="stepgrid">${K.steps.map(([t, d], i) => `<div class="pane step"><span class="num">${i + 1}</span><h5>${t}</h5><p>${d}</p></div>`).join("")}</div>
  <div class="pane tipline">Try it now in <a href="#sim">Simulation</a>, then do the <a href="#quiz">LKPD</a>.</div>`;
}

// ---------- simulation ----------
const SIMST = { t: 0, mode: "structure", pick: {}, on: {} };
const paras = key => TXT[key].split("</p>").map(p => p.replace(/<b>.*?<\/b>/, "").replace(/<[^>]+>/g, "").replace(/^\s*\(\d\)\s*/, "").trim()).filter(Boolean);
function featRegex(f) {
  if (f.re) return f.re;
  return "\\b(?:" + f.w.split(f.w.includes("|") ? "|" : " ").sort((a, b) => b.length - a.length).map(w => w.replace(/[.*+?^${}()[\]\\]/g, "\\$&")).join("|") + ")\\b";
}
function highlight(text) {
  const act = K.sim.feats.map((f, i) => [f, i]).filter(([, i]) => SIMST.on[i]);
  if (!act.length) return esc(text);
  const re = new RegExp(act.map(([f, i]) => `(?<f${i}>${featRegex(f)})`).join("|"), "gi");
  let out = "", last = 0;
  for (const m of text.matchAll(re)) {
    if (!m[0]) continue;
    const i = Object.entries(m.groups).find(([, v]) => v !== undefined)[0].slice(1);
    out += esc(text.slice(last, m.index)) + `<mark class="m${i}">${esc(m[0])}</mark>`; last = m.index + m[0].length;
  }
  return out + esc(text.slice(last));
}
function count(text, f) { return (text.match(new RegExp(featRegex(f), "gi")) || []).filter(Boolean).length; }
function viewSim() {
  return `${crumb()}<div class="simgrid">
    <div class="pane ctrl">
      <h5>Scenario</h5>
      <select class="in" id="simText">${K.sim.texts.map(([t], i) => `<option value="${i}">${t}</option>`).join("")}</select>
      <h5 style="margin-top:18px">Mode</h5>
      <div class="toggle" id="simMode"><button data-m="structure">Structure</button><button data-m="language">Language</button></div>
      <div id="simCtrl"></div>
      <button class="btn alt reset" id="simReset">↺ Reset</button>
    </div>
    <div class="pane out">
      <div class="outhead"><div><small>ACTIVE TEXT</small><b id="simTitle"></b></div><div class="stats" id="simStats"></div></div>
      <div id="simOut" class="simout"></div>
    </div>
  </div>`;
}
function wireSim() {
  const sel = $("#simText"); sel.value = SIMST.t;
  sel.onchange = () => { SIMST.t = +sel.value; SIMST.pick = {}; drawSim(); };
  document.querySelectorAll("#simMode button").forEach(b => b.onclick = () => { SIMST.mode = b.dataset.m; drawSim(); });
  $("#simReset").onclick = () => { SIMST.pick = {}; SIMST.on = {}; drawSim(); };
  drawSim();
}
function drawSim() {
  const [title, key, parts] = K.sim.texts[SIMST.t], ps = paras(key), P = K.sim.parts;
  document.querySelectorAll("#simMode button").forEach(b => b.classList.toggle("on", b.dataset.m === SIMST.mode));
  $("#simTitle").textContent = title;
  const order = [...new Set(parts)];
  if (SIMST.mode === "structure") {
    $("#simCtrl").innerHTML = `<p class="hint">Which part is each paragraph? Tap a part for each one.</p>` +
      ps.map((p, i) => `<div class="prow"><span>¶${i + 1}</span>${order.map(c => `<button data-i="${i}" data-c="${c}" class="${SIMST.pick[i] === c ? "on" : ""}">${P[c]}</button>`).join("")}</div>`).join("");
    document.querySelectorAll(".prow button").forEach(b => b.onclick = () => {
      SIMST.pick[b.dataset.i] = b.dataset.c; beep(parts[b.dataset.i] === b.dataset.c); drawSim();
    });
    const done = ps.filter((_, i) => SIMST.pick[i]).length, good = ps.filter((_, i) => SIMST.pick[i] === parts[i]).length;
    $("#simStats").innerHTML = `<span>Labelled <b>${done}/${ps.length}</b></span><span class="${good === ps.length ? "ok" : ""}">Correct <b>${good}/${ps.length}</b></span>`;
    $("#simOut").innerHTML = ps.map((p, i) => {
      const c = SIMST.pick[i], ok = c && c === parts[i];
      return `<div class="para ${c ? (ok ? "ok" : "bad") : ""}" data-c="${c || ""}"><span class="lab">${c ? P[c] + (ok ? " ✓" : " ✗") : "¶" + (i + 1) + " · ?"}</span><p>${esc(p)}</p></div>`;
    }).join("") + (good === ps.length ? `<div class="win">🎉 Great! You found the structure: ${order.map(c => P[c]).join(" → ")}.</div>` : "");
  } else {
    $("#simCtrl").innerHTML = `<p class="hint">Switch on a feature to see it in the text.</p>` +
      K.sim.feats.map((f, i) => `<label class="feat"><input type="checkbox" data-i="${i}" ${SIMST.on[i] ? "checked" : ""}><i class="sw m${i}"></i><span>${f.k}</span><b>${ps.reduce((n, p) => n + count(p, f), 0)}</b></label>`).join("");
    document.querySelectorAll(".feat input").forEach(c => c.onchange = () => { SIMST.on[c.dataset.i] = c.checked; drawSim(); });
    $("#simStats").innerHTML = K.sim.feats.filter((_, i) => SIMST.on[i]).map(f => `<span>${f.k} <b>${ps.reduce((n, p) => n + count(p, f), 0)}</b></span>`).join("") || `<span>Choose a feature</span>`;
    $("#simOut").innerHTML = ps.map((p, i) => `<div class="para" data-c="${parts[i]}"><span class="lab">${P[parts[i]]}</span><p>${highlight(p)}</p></div>`).join("");
  }
}

// ---------- unit quiz (20 questions) ----------
function pillsHTML(cur) {
  return `<div class="pills"><a class="pill ${cur === "quiz" ? "on" : ""}" href="#quiz"><b>⚡ Unit LKPD</b><small>20 questions</small></a>${D.sheets.map(x => `<a class="pill ${x.id === cur ? "on" : ""}" href="#${x.id}"><b>${x.p}</b><small>${x.title}</small></a>`).join("")}</div>`;
}
const QK = "corner-quiz-" + uk;
function viewQuiz() {
  return `<div class="quiz">
    <div class="pane qside">
      <div class="ident q"><label>Student name<input class="in" data-g="name"></label><label>Class<input class="in" data-g="kelas" placeholder="XI Hang Jebat"></label><label>Date<input class="in" type="date" id="qDate"></label></div>
      <div class="qscore"><div><small>ANSWERED</small><b id="qDone">0/20</b></div><div><small>CORRECT</small><b id="qOk">0</b></div><div><small>SCORE</small><b id="qPts">0</b></div></div>
      ${K.groups.map(([g, a, b]) => `<h5>${g}</h5><div class="nums">${K.quiz.slice(a, b).map((_, j) => `<button data-n="${a + j}">${a + j + 1}</button>`).join("")}</div>`).join("")}
      <div class="legend"><span><i></i>Not yet</span><span><i class="ok"></i>Correct</span><span><i class="bad"></i>Wrong</span></div>
      <div class="qbtns"><button class="btn alt" id="qReset">↺ Try again</button><button class="btn alt" id="qPrint">🖨 Print</button></div>
    </div>
    <div class="pane qmain" id="qMain"></div>
  </div>`;
}
function wireQuiz() {
  const st = load(QK, { ans: {}, cur: 0, date: "" }), g = load("lkpd-id", {});
  document.querySelectorAll(".quiz [data-g]").forEach(el => { el.value = g[el.dataset.g] || ""; el.oninput = () => { g[el.dataset.g] = el.value; save("lkpd-id", g); }; });
  const d = $("#qDate"); d.value = st.date || new Date().toISOString().slice(0, 10); d.onchange = () => { st.date = d.value; save(QK, st); };
  const draw = () => {
    const q = K.quiz[st.cur], a = st.ans[st.cur];
    document.querySelectorAll(".nums button").forEach(b => { const n = +b.dataset.n, x = st.ans[n]; b.className = (x == null ? "" : x === K.quiz[n].a ? "ok" : "bad") + (n === st.cur ? " cur" : ""); b.onclick = () => { st.cur = n; save(QK, st); draw(); }; });
    const done = Object.keys(st.ans).length, ok = Object.entries(st.ans).filter(([n, x]) => K.quiz[n].a === x).length;
    $("#qDone").textContent = `${done}/20`; $("#qOk").textContent = ok; $("#qPts").textContent = ok * 5;
    $("#qMain").innerHTML = `<div class="qhead"><small>QUESTION ${st.cur + 1} OF 20</small><span class="tag2">${st.cur < 10 ? K.groups[0][0].replace(/ \(.*/, "") : K.groups[1][0].replace(/ \(.*/, "")}</span></div>
      <h2 class="qq">${esc(q.q)}</h2>
      <div class="opts">${q.o.map((o, i) => `<button data-i="${i}" class="${a == null ? "" : i === q.a ? "ok" : i === a ? "bad" : "dim"}" ${a != null ? "disabled" : ""}><span>${"ABCD"[i]}</span>${esc(o)}</button>`).join("")}</div>
      ${a != null ? `<div class="expl ${a === q.a ? "ok" : "bad"}"><b>${a === q.a ? "✓ Correct!" : "✗ Not quite. The answer is " + "ABCD"[q.a] + "."}</b><small>EXPLANATION</small><p>${esc(q.why)}</p></div>` : ""}
      <div class="qnav"><button class="btn alt" id="qPrev" ${st.cur === 0 ? "disabled" : ""}>‹ Back</button><button class="btn u" id="qNext">${st.cur === 19 ? "See my score" : "Next ›"}</button></div>
      ${done === 20 ? `<div class="final"><b>${ok * 5}</b><span>${ok} of 20 correct · ${ok * 5 >= 92 ? "A · Very Good" : ok * 5 >= 84 ? "B · Good" : ok * 5 >= 75 ? "C · Fair" : "D · Needs Improvement"}</span></div>` : ""}`;
    document.querySelectorAll(".opts button").forEach(b => b.onclick = () => { st.ans[st.cur] = +b.dataset.i; beep(+b.dataset.i === q.a); save(QK, st); draw(); });
    $("#qPrev").onclick = () => { st.cur--; save(QK, st); draw(); };
    $("#qNext").onclick = () => { if (st.cur < 19) st.cur++; else { const f = $(".final"); if (f) f.scrollIntoView({ behavior: "smooth" }); else { const n = [...Array(20).keys()].find(n => st.ans[n] == null); if (n != null) st.cur = n; } } save(QK, st); draw(); };
  };
  $("#qReset").onclick = () => { if (!confirm("Clear all 20 answers?")) return; st.ans = {}; st.cur = 0; save(QK, st); draw(); };
  $("#qPrint").onclick = () => printQuiz(st);
  draw();
}
function printQuiz(st) {
  const g = load("lkpd-id", {}), ok = Object.entries(st.ans).filter(([n, x]) => K.quiz[n].a === x).length;
  const w = window.open("", "_blank"); if (!w) return;
  w.document.write(`<title>${K.name} LKPD</title><body style="font-family:system-ui;padding:24px;max-width:760px;margin:auto"><h2>${K.name} · Unit LKPD</h2>
    <p>Name: <b>${esc(g.name || "")}</b> · Class: <b>${esc(g.kelas || "")}</b> · Date: <b>${esc(st.date || new Date().toISOString().slice(0, 10))}</b> · Score: <b>${ok * 5}</b> (${ok}/20)</p><ol>
    ${K.quiz.map((q, n) => `<li style="margin-bottom:8px">${esc(q.q)}<br>My answer: <b>${st.ans[n] != null ? esc(q.o[st.ans[n]]) : "-"}</b> ${st.ans[n] == null ? "" : st.ans[n] === q.a ? "✓" : "✗ (answer: " + esc(q.o[q.a]) + ")"}</li>`).join("")}</ol></body>`);
  w.document.close(); w.focus(); w.print();
}

// ---------- developer ----------
function viewDev() {
  return `${crumb()}<div class="two">
    <div class="col"><div class="pane prof2"><div class="ava2">DA</div><div><b>${LAB.guru}</b><small>ADVANCED ENGLISH TEACHER</small><span>SMA Negeri 1 Batam · Phase F module developer</span></div></div>
      <div class="pane"><h5>Module information</h5><table class="info">
        <tr><td>Module</td><td>${K.name}</td></tr><tr><td>Subject</td><td>Bahasa Inggris Tingkat Lanjut</td></tr>
        <tr><td>Unit</td><td>Unit ${U.no}: ${U.judul}</td></tr><tr><td>Text type</td><td>${K.sub}</td></tr>
        <tr><td>Phase / Grade</td><td>Fase F · Kelas XI · 2026/2027</td></tr><tr><td>Version</td><td>1.0.0</td></tr></table>
        <div class="chipsrow"><span>Vanilla JS</span><span>Web Audio API</span><span>Works offline after loading</span></div>
        <button class="btn alt" id="snd"></button></div></div>
    <div class="col"><div class="pane"><h5>Capaian Pembelajaran (CP)</h5><p>${CP[uk]}</p>
      <h5 style="margin-top:18px">Tujuan Pembelajaran (TP)</h5><table class="info">${Object.entries(D.tp).map(([k, t]) => `<tr><td>TP ${k}</td><td>${t}</td></tr>`).join("")}</table>
      <h5 style="margin-top:18px">Note</h5><p class="small">The worksheets follow the newest LKPD and RPM files (RPPM riil Taksonomi Bloom): ${esc(D.src)}. Answers are saved only on the student's device.</p></div></div>
  </div>`;
}
function wireDev() {
  const b = $("#snd"); const t = () => b.textContent = `🔊 Sound effects: ${soundOn ? "ON" : "OFF"} (tap to change)`; t();
  b.onclick = () => { soundOn = !soundOn; save("corner-sound", soundOn); t(); beep(true); };
}

addEventListener("hashchange", route);
route();
