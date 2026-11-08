const MENU = [
  { grp: "Identitas" },
  { id: "biodata", t: "Biodata" },
  { grp: "Program" },
  { id: "prota", t: "Program Tahunan", f: "Prota.xlsx" },
  { id: "prosem", t: "Program Semester", f: "Prosem.xlsx" },
  { grp: "Kurikulum" },
  { id: "cp", t: "Capaian Pembelajaran", f: "Analisis_CP_dan_ATP.docx" },
  { id: "analisis-cp", t: "Analisis Capaian Pembelajaran", f: "Analisis_CP_dan_ATP.docx" },
  { id: "atp", t: "Alur Tujuan Pembelajaran", f: "Analisis_CP_dan_ATP.docx" },
  { id: "kktp", t: "KKTP", f: "KKTP.docx" },
  { grp: "Rencana Pembelajaran Mendalam" },
  { id: "rpm-unit-1", t: "RPM Unit 1 · Are We Connected to Nature?", f: "RPM_Unit_1.docx" },
  { id: "rpm-unit-2", t: "RPM Unit 2 · Discovering Ourselves", f: "RPM_Unit_2.docx" },
  { id: "rpm-unit-3", t: "RPM Unit 3 · The Importance of Environmental Protection", f: "RPM_Unit_3.docx" },
  { id: "rpm-unit-4", t: "RPM Unit 4 · Why Should We Live a Healthy Lifestyle?", f: "RPM_Unit_4.docx" },
  { grp: "Untuk Murid" },
  { id: "lms", t: "LMS Guru untuk Murid", href: "lms/" }
];
const items = MENU.filter(m => m.id);
const nav = document.getElementById("nav"), isi = document.getElementById("isi");
let n = 0;
nav.innerHTML = MENU.map(m => m.grp ? `<div class="grp">${m.grp}</div>`
  : `<a href="${m.href || "#" + m.id}" data-id="${m.id}"><span>${String(++n).padStart(2, "0")}</span>${m.t}</a>`).join("");

const BIODATA = `
  <h2>Biodata Guru</h2><p class="sub">Identitas penyusun perangkat ajar</p>
  <div class="bio"><div class="avatar">DA</div>
  <div class="tw"><table>
    <tr><td>Nama</td><td>Dea Arioktavia, S.Pd</td></tr>
    <tr><td>Satuan Pendidikan</td><td>SMA Negeri 1 Batam</td></tr>
    <tr><td>Mata Pelajaran</td><td>Bahasa Inggris Tingkat Lanjut</td></tr>
    <tr><td>Kelas / Fase</td><td>XI Hang Jebat / Fase F</td></tr>
    <tr><td>Tahun Pelajaran</td><td>2026/2027</td></tr>
    <tr><td>Alokasi Waktu</td><td>5 JP/minggu (3 JP + 2 JP) · 4 Unit</td></tr>
    <tr><td>Kepala Sekolah</td><td>Bahtiar, M.Pd</td></tr>
  </table></div></div>
  <div class="cards">
    ${items.filter(m => m.f).map(m => `<a href="#${m.id}"><b>${m.t}</b><small>Lihat dokumen →</small></a>`).join("")}
    <a href="lms/"><b>LMS untuk Murid</b><small>Materi, kuis & tugas siswa →</small></a>
  </div>`;

const cache = {};
async function show() {
  const id = location.hash.slice(1) || "biodata";
  const m = items.find(x => x.id === id) || items[0];
  nav.querySelectorAll("a").forEach(a => a.classList.toggle("on", a.dataset.id === m.id));
  document.body.classList.remove("open");
  if (m.id === "biodata") { isi.innerHTML = BIODATA; return scrollTo(0, 0); }
  isi.innerHTML = `<h2>${m.t}</h2><p class="sub">Memuat…</p>`;
  try {
    cache[m.id] ??= await fetch(`dokumen/${m.id}.html`).then(r => { if (!r.ok) throw 0; return r.text() });
    isi.innerHTML = `<h2>${m.t}</h2><p class="sub">Bahasa Inggris Tingkat Lanjut · Kelas XI · Fase F · TP 2026/2027</p>
      <div class="bar">
        <a class="btn" href="unduh/${m.f}" download>⬇ Unduh file asli</a>
        <button class="btn alt" onclick="window.print()">🖨 Cetak</button>
        ${m.id.startsWith("rpm") ? `<button class="btn alt" onclick="document.querySelectorAll('details').forEach(d=>d.open=!d.open)">↕ Buka/tutup semua</button>` : ""}
      </div>${cache[m.id]}`;
  } catch (e) { isi.innerHTML = `<h2>${m.t}</h2><p class="sub">Dokumen gagal dimuat. Coba muat ulang halaman.</p>`; }
  scrollTo(0, 0);
}
document.getElementById("menuBtn").onclick = () => document.body.classList.toggle("open");
document.getElementById("shade").onclick = () => document.body.classList.remove("open");
addEventListener("hashchange", show); show();
