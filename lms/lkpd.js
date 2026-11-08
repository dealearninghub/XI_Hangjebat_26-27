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
const TABS = [["theory", "<i>📘 </i>Theory"], ["steps", "<i>🧭 </i>Steps"], ["practice", "<i>🎮 </i>Practice"], ["ws", "<i>📝 </i>LKPD"], ["about", "<i>ℹ️ </i>About"]];

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

// ---------- hero, unit switcher, tabs ----------
$("#hero").style.setProperty("--bg", UBG);
$("#hero").innerHTML = `<div class="mesh">${["rgba(255,255,255,.35)", "rgba(255,255,255,.18)", "rgba(0,0,0,.25)"].map((x, i) => `<i style="background:${x};left:${[5, 55, 25][i]}%;top:${[5, 15, 55][i]}%"></i>`).join("")}</div>
  <div class="u-top"><span class="u-emoji">${U.emoji}</span><span class="eyebrow" style="margin:0">Unit ${U.no} · ${U.jenis}</span></div>
  <h1 class="u-title">${U.judul}</h1>
  <p class="lede">Worksheets (LKPD) for every meeting. Fill them in here, check your answers, then print or save as PDF.</p>`;
$("#backLink").href = "./#" + uk;
$("#seg").insertAdjacentHTML("beforeend", Object.keys(LKPD).map((k, i) => `<a href="?u=${i + 1}" data-k="${k}" class="${k === uk ? "on" : ""}">Unit ${i + 1}</a>`).join(""));
$("#tabs").insertAdjacentHTML("beforeend", TABS.map(([k, t]) => `<a href="#${k}" data-k="${k}">${t}</a>`).join(""));
function blob(b, el) { if (!b || !el) return; b.style.left = el.offsetLeft + "px"; b.style.width = el.offsetWidth + "px"; }

// ---------- views ----------
function route() {
  const h = decodeURIComponent(location.hash.slice(1)) || "ws";
  const sheet = D.sheets.find(s => s.id === h);
  const tab = sheet ? "ws" : (TABS.some(t => t[0] === h) ? h : "ws");
  document.querySelectorAll("#tabs a").forEach(a => a.classList.toggle("on", a.dataset.k === tab));
  blob($("#tabsBlob"), $(`#tabs a[data-k="${tab}"]`));
  blob($("#segBlob"), $(`#seg a[data-k="${uk}"]`));
  const v = $("#view");
  if (tab === "theory") v.innerHTML = `<h2>Theory</h2><p class="sub">A short summary of Unit ${U.no}.</p><div class="card materi">${U.materi}</div>`;
  if (tab === "steps") v.innerHTML = viewSteps();
  if (tab === "practice") v.innerHTML = viewPractice();
  if (tab === "about") v.innerHTML = viewAbout();
  if (tab === "ws") { const s = sheet || D.sheets.find(x => x.id === load("lkpd-last-" + uk, "")) || D.sheets[0]; v.innerHTML = viewSheet(s); wireSheet(s); }
}

function viewSteps() {
  return `<h2>Steps</h2><p class="sub">How to use the worksheets.</p>
  <div class="card"><ol class="steps">
    <li><span>Read the <b>Theory</b> first.</span></li>
    <li><span>Open the worksheet for <b>today's meeting</b>.</span></li>
    <li><span>Write your <b>name, number, class and date</b>.</span></li>
    <li><span>Read the text, then answer every part. Your answers are saved on this device.</span></li>
    <li><span>Press <b>Check my answers</b>. Green = correct, red = try again. Read the answer guide.</span></li>
    <li><span>Press <b>Print / Save PDF</b> and send it to your teacher.</span></li>
  </ol></div>
  <div class="card"><h3>Meetings in Unit ${U.no}</h3><div class="flow">
    ${D.sheets.map(s => `<a href="#${s.id}"><span class="n">${s.p}</span><span class="t"><b>${s.title}</b><small>TP ${s.tp} · ${s.mode}</small></span>›</a>`).join("")}
    <div class="flow ev"><span class="n">${EVAL[uk]}</span> Unit evaluation (test / product). Review with the games in Practice.</div>
  </div></div>`;
}
function viewPractice() {
  return `<h2>Practice</h2><p class="sub">Play the Unit ${U.no} games in Lab English.</p>
  <div class="grid2">${U.aktivitas.map(a => `<a class="tile" href="./#act=${a.id}"><span class="i">${a.ic}</span><span><b>${a.t}</b><small>${a.note || ""}</small></span></a>`).join("")}</div>
  <h2 style="margin-top:34px;font-size:1.6rem">Videos</h2>
  <div class="grid2">${U.video.concat(U.inspirasi || []).map(([t, url]) => `<a class="tile" href="${url}" target="_blank" rel="noopener"><span class="i">▶</span><span><b>${t}</b></span></a>`).join("")}</div>`;
}
function viewAbout() {
  return `<h2>About</h2><p class="sub">Learning goals for Unit ${U.no}.</p>
  <div class="card"><h3>Capaian Pembelajaran (CP)</h3><p>${CP[uk]}</p></div>
  <div class="card"><h3>Tujuan Pembelajaran (TP)</h3><table>${Object.entries(D.tp).map(([k, t]) => `<tr><td><b>TP ${k}</b></td><td>${t}</td></tr>`).join("")}</table></div>
  <div class="card"><h3>Source</h3><p>Based on the teacher's newest RPM and LKPD files (RPPM riil Taksonomi Bloom):<br><small>${esc(D.src)}</small></p>
  <p>Made by <b>${LAB.guru}</b> · ${LAB.jabatan}</p></div>`;
}

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
  return `<div class="pills">${D.sheets.map(x => `<a class="pill ${x.id === s.id ? "on" : ""}" href="#${x.id}"><b>${x.p}</b><small>${x.title}</small></a>`).join("")}</div>
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

// ---------- glass highlight + start ----------
document.querySelectorAll(".glass").forEach(g => g.onpointermove = e => { const r = g.getBoundingClientRect(); g.style.setProperty("--mx", (e.clientX - r.left) + "px"); g.style.setProperty("--my", (e.clientY - r.top) + "px"); });
addEventListener("hashchange", () => { route(); if (location.hash.length > 1) $(".lk-tabs-wrap").scrollIntoView({ behavior: "smooth" }); });
function tone() { const dark = $("#hero").getBoundingClientRect().bottom > 60; $("#topbar").classList.toggle("on-dark", dark); $("#topbar").classList.toggle("on-light", !dark); }
addEventListener("scroll", tone, { passive: true });
addEventListener("resize", () => { blob($("#tabsBlob"), $("#tabs a.on")); blob($("#segBlob"), $("#seg a.on")); });
route(); tone();
