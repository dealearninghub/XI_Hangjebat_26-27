// ===== Daftar "aplikasi" (dokumen) =====
const APPS = [
  { id: "biodata", t: "Biodata", cat: "Identitas", g: "linear-gradient(160deg,#c7c7cc,#8e8e93)", e: "👩‍🏫" },
  { id: "prota", t: "Program Tahunan", cat: "Program", cal: ["2026/27", "PROTA"], f: "Prota.xlsx" },
  { id: "prosem", t: "Program Semester", cat: "Program", g: "linear-gradient(160deg,#ffd60a,#ff9f0a)", e: "🗓️", tag: "PROSEM", f: "Prosem.xlsx" },
  { id: "cp", t: "Capaian Pembelajaran", cat: "Kurikulum", g: "linear-gradient(160deg,#64d2ff,#0a84ff)", e: "🎯", tag: "CP", f: "Analisis_CP_dan_ATP.docx" },
  { id: "analisis-cp", t: "Analisis CP", cat: "Kurikulum", g: "linear-gradient(160deg,#5e5ce6,#3a1d8a)", e: "🔍", tag: "ANALISIS", f: "Analisis_CP_dan_ATP.docx" },
  { id: "atp", t: "Alur Tujuan Pembelajaran", cat: "Kurikulum", g: "linear-gradient(160deg,#30d158,#0b8a3a)", e: "🧭", tag: "ATP", f: "Analisis_CP_dan_ATP.docx" },
  { id: "kktp", t: "KKTP", cat: "Kurikulum", g: "linear-gradient(160deg,#ff6482,#d70040)", e: "📊", tag: "KKTP", f: "KKTP.docx" },
  { id: "rpm-unit-1", t: "RPM Unit 1 · Are We Connected to Nature?", s: "Unit 1 · Nature", cat: "RPM", g: "linear-gradient(160deg,#a8e063,#2f9e44)", e: "🌿", tag: "UNIT 1", f: "RPM_Unit_1.docx" },
  { id: "rpm-unit-2", t: "RPM Unit 2 · Discovering Ourselves", s: "Unit 2 · Discovering Ourselves", cat: "RPM", g: "linear-gradient(160deg,#d6a2ff,#8e44ff)", e: "🦄", tag: "UNIT 2", f: "RPM_Unit_2.docx" },
  { id: "rpm-unit-3", t: "RPM Unit 3 · The Importance of Environmental Protection", s: "Unit 3 · Environment", cat: "RPM", g: "linear-gradient(160deg,#5ac8fa,#0060a8)", e: "🌍", tag: "UNIT 3", f: "RPM_Unit_3.docx" },
  { id: "rpm-unit-4", t: "RPM Unit 4 · Why Should We Live a Healthy Lifestyle?", s: "Unit 4 · Healthy Lifestyle", cat: "RPM", g: "linear-gradient(160deg,#ffb36b,#ff5e3a)", e: "🍎", tag: "UNIT 4", f: "RPM_Unit_4.docx" },
  { id: "lms", t: "Lab English (LMS Murid)", cat: "Murid", g: "linear-gradient(160deg,#ff9bd2,#ff2d8b)", e: "🎒", tag: "LMS", frame: "lms/" }
];
const CATS = ["Semua", "Identitas", "Program", "Kurikulum", "RPM", "Murid"];
const $ = s => document.querySelector(s);
const label = a => a.s || a.t;

function icon(a) {
  if (a.cal) return `<div class="ic cal"><small>${a.cal[0]}</small><b>${a.cal[1].slice(0, 2) === "PR" ? "📅" : ""}</b><span class="tag" style="color:#1d1d1f">${a.cal[1]}</span></div>`;
  return `<div class="ic" style="background:${a.g}"><em>${a.e}</em>${a.tag ? `<span class="tag">${a.tag}</span>` : ""}</div>`;
}
function mini(a) {
  const bg = a.cal ? "#fff" : a.g;
  return `<span class="mi" style="background:${bg}">${a.cal ? "📅" : a.e}</span>`;
}

// ===== Launchpad =====
let cat = "Semua";
function drawGrid() {
  const q = $("#q").value.toLowerCase();
  $("#chips").innerHTML = CATS.map(c => `<button class="${c === cat ? "on" : ""}" data-c="${c}">${c}</button>`).join("");
  const list = APPS.filter(a => (cat === "Semua" || a.cat === cat) && a.t.toLowerCase().includes(q));
  $("#grid").innerHTML = list.map((a, i) => `<a class="app" href="#${a.id}" style="animation-delay:${i * 25}ms">${icon(a)}<span>${label(a)}</span></a>`).join("")
    || `<p style="color:#fff;opacity:.7;grid-column:1/-1;text-align:center">Tidak ada dokumen yang cocok.</p>`;
}
$("#chips").onclick = e => { if (e.target.dataset.c) { cat = e.target.dataset.c; drawGrid(); } };
$("#q").oninput = drawGrid;
$("#q").onkeydown = e => { if (e.key === "Enter") { const a = $("#grid a"); if (a) location.hash = a.getAttribute("href"); } };

// ===== Dock =====
$("#dock").innerHTML = `<a href="#" data-t="Launchpad"><div class="ic" style="background:linear-gradient(160deg,#636366,#2c2c2e)">🚀</div></a><span class="sep"></span>`
  + APPS.map(a => `<a href="#${a.id}" data-t="${label(a)}" data-id="${a.id}">${icon(a)}</a>`).join("");

// ===== Sidebar =====
function drawSide() {
  const q = $("#sq").value.toLowerCase(); let last = "";
  $("#list").innerHTML = APPS.filter(a => a.id !== "biodata" && a.t.toLowerCase().includes(q)).map(a => {
    const g = a.cat !== last ? `<div class="grp">${a.cat}</div>` : ""; last = a.cat;
    return `${g}<a href="#${a.id}" data-id="${a.id}">${mini(a)}<span>${label(a)}</span></a>`;
  }).join("");
}
$("#sq").oninput = () => { drawSide(); mark(); };

// ===== Window =====
const BIODATA = () => `
  <div class="card"><div class="ava">DA</div><div><h2>Dea Arioktavia, S.Pd</h2><p>Guru Bahasa Inggris Tingkat Lanjut · SMA Negeri 1 Batam</p></div></div>
  <div class="group">
    <div class="row"><span>Satuan Pendidikan</span><b>SMA Negeri 1 Batam</b></div>
    <div class="row"><span>Mata Pelajaran</span><b>Bahasa Inggris Tingkat Lanjut</b></div>
    <div class="row"><span>Kelas / Fase</span><b>XI Hang Jebat / Fase F</b></div>
    <div class="row"><span>Tahun Pelajaran</span><b>2026/2027</b></div>
    <div class="row"><span>Alokasi Waktu</span><b>5 JP/minggu · 4 Unit</b></div>
    <div class="row"><span>Kepala Sekolah</span><b>Bahtiar, M.Pd</b></div>
  </div>
  <h3>Dokumen</h3>
  <div class="shortcuts">${APPS.filter(a => a.id !== "biodata").map(a => `<a href="#${a.id}">${icon(a)}<span>${label(a)}</span></a>`).join("")}</div>`;

const cache = {};
const hid = () => location.hash.slice(1).split("/")[0];
function mark() {
  const id = hid();
  document.querySelectorAll("#list a,#dock a").forEach(a => {
    a.classList.toggle(a.closest("#dock") ? "run" : "on", a.dataset.id === id);
    if (a.closest("#dock") && a.dataset.id !== id) a.classList.remove("run");
  });
  $(".me").classList.toggle("on", id === "biodata");
}
async function route() {
  const id = hid(), full = location.hash.endsWith("/lengkap"), short = !full && RINGKAS[id];
  const a = APPS.find(x => x.id === id);
  const win = $("#win");
  if (!a) { win.hidden = true; document.body.classList.remove("has-win"); mark(); return; }
  win.hidden = false; win.classList.remove("sb"); document.body.classList.add("has-win");
  $("#wt").textContent = a.t; mark();
  const isi = $("#isi"); isi.classList.toggle("frame", !!a.frame); isi.scrollTop = 0;
  const sw = RINGKAS[id] ? (full ? `<a href="#${id}">✦ Ringkas</a>` : `<a href="#${id}/lengkap">📄<span class="vl"> Versi</span> lengkap</a>`) : "";
  $("#tba").innerHTML = a.f ? `${sw}${(id.startsWith("rpm") || id === "atp") ? `<button class="hide-m" onclick="document.querySelectorAll('details').forEach(d=>d.open=!d.open)">Buka/Tutup</button>` : ""}
      <button class="hide-m" onclick="print()">Cetak</button><a class="pri" href="unduh/${a.f}" download>Unduh</a>`
    : a.frame ? `<a class="pri" href="${a.frame}" target="_blank">Buka penuh ↗</a>` : "";
  if (id === "biodata") { isi.innerHTML = BIODATA(); return; }
  if (short) { isi.innerHTML = `<div class="sum">${RINGKAS[id]()}</div>`; return; }
  if (a.frame) { isi.innerHTML = `<iframe src="${a.frame}" title="${a.t}"></iframe>`; return; }
  isi.innerHTML = `<p style="color:var(--muted)">Memuat…</p>`;
  try {
    cache[id] ??= await fetch(`dokumen/${id}.html`).then(r => { if (!r.ok) throw 0; return r.text(); });
    if (hid() === id) isi.innerHTML = cache[id];
  } catch (e) { isi.innerHTML = `<p>Dokumen gagal dimuat. Coba muat ulang halaman.</p>`; }
}
document.querySelector(".lights").onclick = e => {
  const act = e.target.dataset.act;
  if (act === "close") location.hash = "";
  if (act === "max") $("#win").classList.toggle("max");
};
$("#sbt").onclick = () => $("#win").classList.toggle("sb");
$("#list").onclick = () => $("#win").classList.remove("sb");
addEventListener("keydown", e => { if (e.key === "Escape" && location.hash) location.hash = ""; });

// ===== Clock =====
function tick() {
  const d = new Date();
  $("#clock").textContent = d.toLocaleDateString("id-ID", { weekday: "short", day: "numeric", month: "short" }) + "  " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
}
tick(); setInterval(tick, 15000);

drawGrid(); drawSide();
addEventListener("hashchange", route); route();
