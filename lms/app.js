const S = SITUS, $ = s => document.querySelector(s);
const simpan = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} };
const ambil = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch (e) { return d } };
let prog = ambil("progres", {}); // { bab1: {baca:true, skor:80} }

function yt(url) {
  const m = (url || "").match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? `<div class="video"><iframe src="https://www.youtube.com/embed/${m[1]}" allowfullscreen></iframe></div>` : "";
}
const tgl = d => new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
function persen() {
  const n = S.bab.length * 2; let d = 0;
  S.bab.forEach(b => { const p = prog[b.id] || {}; if (p.baca) d++; if (p.skor != null) d++; });
  return Math.round(d / n * 100);
}

const HAL = {
  beranda() {
    const p = persen();
    return `<div class="card"><h2>Halo! 👋</h2><p>${S.sambutan}</p>
      <div class="muted">Progres belajarmu: <b>${p}%</b></div><div class="bar"><i style="width:${p}%"></i></div>
      <a class="btn" href="#materi">Mulai belajar</a></div>
      <div class="card"><h2>📢 Pengumuman</h2>${S.pengumuman.map(a => `<p><span class="tag">${tgl(a.tanggal)}</span>${a.isi}</p>`).join("")}</div>`;
  },
  materi() {
    return `<h2>📚 Daftar Materi</h2><div class="grid">${S.bab.map(b => {
      const p = prog[b.id] || {};
      return `<div class="card"><h3 style="margin-top:0">${b.judul}</h3><p class="muted sp">${b.ringkas}</p>
        <div style="margin-bottom:10px">${p.baca ? '<span class="tag ok">✓ Sudah dibaca</span>' : ""}${p.skor != null ? `<span class="tag ok">Kuis: ${p.skor}</span>` : ""}</div>
        <a class="btn" href="#bab/${b.id}">Buka materi</a></div>`}).join("")}</div>`;
  },
  bab(id) {
    const b = S.bab.find(x => x.id === id); if (!b) return HAL.materi();
    return `<a href="#materi">← Kembali</a>
      <div class="card"><h2>${b.judul}</h2>
        <h3>🎯 Tujuan Pembelajaran</h3><ul>${b.tujuan.map(t => `<li>${t}</li>`).join("")}</ul></div>
      ${b.video ? `<div class="card"><h3 style="margin-top:0">🎬 Video</h3>${yt(b.video)}</div>` : ""}
      <div class="card"><h3 style="margin-top:0">📖 Materi</h3>${b.materi}
        ${b.lampiran.length ? `<h3>📎 Lampiran</h3>${b.lampiran.map(([t, u]) => `<p><a href="${u}" target="_blank">${t}</a></p>`).join("")}` : ""}
        <div class="row" style="margin-top:14px"><button class="btn alt" onclick="tandaiBaca('${b.id}')">${(prog[b.id] || {}).baca ? "✓ Sudah dibaca" : "Tandai sudah dibaca"}</button>
        ${b.kuis.length ? `<a class="btn" href="#kuis/${b.id}">Kerjakan kuis →</a>` : ""}</div></div>
      ${b.tugas ? `<div class="card"><h3 style="margin-top:0">📝 Tugas</h3><p>${b.tugas.isi}</p><p class="muted">Batas: ${tgl(b.tugas.batas)}</p><a class="btn" href="${b.tugas.link}" target="_blank">Kumpulkan tugas</a></div>` : ""}`;
  },
  kuis(id) {
    if (!id) return `<h2>✏️ Kuis</h2><div class="grid">${S.bab.filter(b => b.kuis.length).map(b => {
      const s = (prog[b.id] || {}).skor;
      return `<div class="card"><h3 style="margin-top:0">${b.judul}</h3><p class="muted sp">${b.kuis.length} soal${s != null ? ` · nilai terakhir <b>${s}</b>` : ""}</p><a class="btn" href="#kuis/${b.id}">${s != null ? "Ulangi" : "Mulai"} kuis</a></div>`}).join("")}</div>`;
    const b = S.bab.find(x => x.id === id); if (!b) return HAL.kuis();
    window.jwb = {};
    return `<a href="#kuis">← Kembali</a><div class="card"><h2>Kuis ${b.judul}</h2>
      ${b.kuis.map((q, i) => `<div style="margin:18px 0"><b>${i + 1}. ${q.soal}</b>
        ${q.pilihan.map((p, j) => `<button class="opt" data-q="${i}" data-j="${j}" onclick="pilih(${i},${j})">${String.fromCharCode(65 + j)}. ${p}</button>`).join("")}
        <div class="bahas" id="bh${i}"></div></div>`).join("")}
      <div class="row"><button class="btn" id="kirim" onclick="nilai('${b.id}')">Kirim jawaban</button><span id="hasil"></span></div></div>`;
  },
  tugas() {
    const t = S.bab.filter(b => b.tugas);
    return `<h2>📝 Daftar Tugas</h2>${t.length ? t.map(b => `<div class="card"><span class="tag">${b.judul}</span><p>${b.tugas.isi}</p><p class="muted">Batas: ${tgl(b.tugas.batas)}</p><a class="btn" href="${b.tugas.link}" target="_blank">Kumpulkan tugas</a></div>`).join("") : '<p class="muted">Belum ada tugas.</p>'}`;
  }
};

window.tandaiBaca = id => { prog[id] = { ...prog[id], baca: true }; simpan("progres", prog); render(); };
window.pilih = (i, j) => {
  if ($("#kirim").disabled) return;
  jwb[i] = j;
  document.querySelectorAll(`.opt[data-q="${i}"]`).forEach(b => b.classList.toggle("pick", +b.dataset.j === j));
};
window.nilai = id => {
  const b = S.bab.find(x => x.id === id);
  if (Object.keys(jwb).length < b.kuis.length && !confirm("Masih ada soal yang belum dijawab. Kirim sekarang?")) return;
  let benar = 0;
  b.kuis.forEach((q, i) => {
    if (jwb[i] === q.benar) benar++;
    document.querySelectorAll(`.opt[data-q="${i}"]`).forEach(o => {
      const j = +o.dataset.j;
      if (j === q.benar) o.classList.add("right"); else if (j === jwb[i]) o.classList.add("wrong");
    });
    if (q.bahas) $("#bh" + i).textContent = "💡 " + q.bahas;
  });
  const skor = Math.round(benar / b.kuis.length * 100);
  prog[id] = { ...prog[id], skor }; simpan("progres", prog);
  $("#kirim").disabled = true;
  $("#hasil").innerHTML = `Benar <b>${benar}/${b.kuis.length}</b> · Nilai <b>${skor}</b> ${skor >= 75 ? "🎉" : "💪 Ayo coba lagi!"} <a href="#kuis/${id}" onclick="setTimeout(render)">Ulangi</a>`;
};

function render() {
  const [hal, arg] = (location.hash.slice(1) || "beranda").split("/");
  $("#isi").innerHTML = (HAL[hal] || HAL.beranda)(arg);
  const aktif = hal === "bab" ? "materi" : hal;
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + aktif));
  window.scrollTo(0, 0);
}
$("#judul").textContent = S.judul;
$("#sub").textContent = `${S.mapel} · Tahun Ajaran ${S.tahun} · ${S.guru}`;
$("#foot").textContent = `© ${S.tahun} ${S.guru} · ${S.judul}`;
document.title = `${S.judul} | Belajar Online`;
addEventListener("hashchange", render); render();
