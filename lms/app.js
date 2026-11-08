const L = LAB, $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = { get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch (e) { return d } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} } };
let best = store.get("lab-best", {});
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const ACT = {}; Object.values(L.units).forEach(u => u.aktivitas.forEach(a => ACT[a.id] = { ...a, unit: u }));

// ---------- page ----------
function render() {
  const units = Object.entries(L.units);
  $("#quick").innerHTML = L.semester.map(s => `<small>${s.nama}</small>` + s.units.map(k => `<a href="#${k}">${L.units[k].emoji} Unit ${+L.units[k].no}</a>`).join("")).join("");
  $("#hero").innerHTML = `<p class="k">Bahasa Inggris Tingkat Lanjut · Kelas XI Fase F</p>
    <h1>Selamat datang di Lab English<br>Ms. Dea 👋</h1><p class="tag">${L.tagline}</p>
    <div class="pills">${L.heroLinks.concat(L.driveLinks.filter(d => d.url !== "#")).map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.t}</a>`).join("")}</div>`;
  $("#sems").innerHTML = L.semester.map(s => `<section class="sem"><h2>${s.nama}</h2><p>${s.sub}</p>${s.units.map(k => unitCard(k, L.units[k])).join("")}</section>`).join("");
  $("#extra").innerHTML = `<h2>📚 Perpustakaan Digital</h2><p class="intro">Bacaan dan referensi bahasa Inggris gratis untuk memperkaya belajarmu.</p><div class="vids">${L.perpustakaan.map(p => `<a href="${p.url}" target="_blank" rel="noopener">${p.t} →</a>`).join("")}</div>`;
  $("#guru").innerHTML = `<div class="ava">DA</div><div><h2>${L.guru}</h2><p class="intro" style="margin:0">${L.jabatan}</p></div>`;
  $("#foot").innerHTML = `© 2026 Lab English XI Lanjut · SMAN 1 Batam · <a href="../">Perangkat Ajar Guru</a>`;
}
function unitCard(k, u) {
  return `<article class="unit" id="${k}" style="--c:${u.warna}">
    <div class="u-head"><div class="u-ic">${u.emoji}</div><div><div class="u-no">BAB ${u.no}</div><h3>${u.judul}</h3><div class="u-jenis">${u.jenis}</div></div></div>
    <p class="u-desk">${u.desk}</p><div class="tags">${u.tags.map(t => `<span>${t}</span>`).join("")}</div>
    <div class="acts">${u.aktivitas.map(a => `<button class="act" onclick="openAct('${a.id}')"><span class="i">${a.ic}</span><span><b>${a.t}</b><small>${a.note || ""}</small></span>${best[a.id] != null ? `<span class="best">⭐ ${best[a.id]}</span>` : ""}</button>`).join("")}</div>
    <div class="sub-h">🎬 Video Pembelajaran</div>
    <div class="vids">${u.video.concat(u.inspirasi || []).map(([t, url]) => `<a href="${url}" target="_blank" rel="noopener">▶ ${t}</a>`).join("")}</div>
    <div class="u-foot"><button class="main-btn" onclick="openMateri('${k}')">Ringkasan Materi →</button></div>
  </article>`;
}

// ---------- modal ----------
function openModal(title, html) { $("#mt").textContent = title; $("#mb").innerHTML = html; $("#modal").hidden = false; document.body.style.overflow = "hidden"; $("#mb").scrollTop = 0; }
function closeModal() { $("#modal").hidden = true; document.body.style.overflow = ""; render(); }
$("#mx").onclick = closeModal;
$("#modal").onclick = e => { if (e.target.id === "modal") closeModal(); };
addEventListener("keydown", e => { if (e.key === "Escape" && !$("#modal").hidden) closeModal(); });
window.openMateri = k => openModal(`📖 Ringkasan Materi · Unit ${+L.units[k].no}`, `<div class="mat">${L.units[k].materi}</div>`);

let cur;
window.openAct = id => { cur = ACT[id]; ({ quiz: Quiz, game: Game, sort: Sort, classify: Classify, fill: Fill })[cur.type].start(); };

function finish(score, extra = "") {
  const old = best[cur.id]; if (old == null || score > old) { best[cur.id] = score; store.set("lab-best", best); }
  const nama = store.get("lab-nama", "");
  const msg = score >= 90 ? "Excellent! 🏆" : score >= 75 ? "Great job! 🎉" : score >= 50 ? "Good effort! 💪" : "Keep practicing! 🌱";
  $("#mb").innerHTML = `<div class="result"><div class="big">${score}</div><p><b>${msg}</b></p>${extra}
    <div class="cert"><input class="name" id="nm" placeholder="Tulis nama & kelasmu (mis. Rina · XI HJ 7)" value="${esc(nama)}">
      <div>📌 <b>${esc(cur.t)}</b></div><div>Nilai: <b>${score}</b> · ${new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}</div>
      <small style="color:var(--muted)">Screenshot kartu ini untuk dikirim ke guru.</small></div>
    <div class="row" style="justify-content:center"><button class="btn" onclick="openAct('${cur.id}')">Ulangi</button><button class="btn alt" onclick="closeModal()">Selesai</button></div></div>`;
  $("#nm").oninput = e => store.set("lab-nama", e.target.value);
}

// ---------- quiz ----------
const Quiz = {
  start() { this.qs = shuffle(cur.soal); this.i = 0; this.ok = 0; this.show(); },
  show() {
    const [q, opts, ans] = this.qs[this.i];
    openModal(`${cur.ic} ${cur.t}`, `<div class="prog"><i style="width:${this.i / this.qs.length * 100}%"></i></div>
      <p class="intro">Soal ${this.i + 1} dari ${this.qs.length}</p><p class="q">${esc(q)}</p>
      ${opts.map((o, j) => `<button class="opt" data-j="${j}">${String.fromCharCode(65 + j)}. ${esc(o)}</button>`).join("")}<div class="fb" id="fb"></div><div class="row" id="nx"></div>`);
    document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const j = +b.dataset.j; document.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.j === ans) x.classList.add("right"); });
      if (j === ans) { this.ok++; $("#fb").innerHTML = "✅ Correct!"; } else { b.classList.add("wrong"); $("#fb").innerHTML = "❌ Not quite. Jawaban benar ditandai hijau."; }
      $("#nx").innerHTML = `<button class="btn">${this.i + 1 < this.qs.length ? "Lanjut →" : "Lihat nilai"}</button>`;
      $("#nx button").onclick = () => { this.i++; this.i < this.qs.length ? this.show() : finish(Math.round(this.ok / this.qs.length * 100), `<p>Benar ${this.ok} dari ${this.qs.length} soal</p>`); };
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
      <p class="intro">Pertanyaan ${this.i + 1} · hadiah <b>${PRIZE[this.i]}</b> poin</p><p class="q">${esc(q)}</p>
      ${opts.map((o, j) => `<button class="opt" data-j="${j}">${String.fromCharCode(65 + j)}. ${esc(o)}</button>`).join("")}
      <div class="row"><button class="lifeline" id="ff" ${this.ff ? "" : "disabled"}>50 : 50</button></div><div class="fb" id="fb"></div></div>
      <ol class="ladder">${PRIZE.slice(0, this.qs.length).map((p, k) => `<li class="${k === this.i ? "now" : k < this.i ? "done" : ""}">${k + 1}. ${p}</li>`).join("")}</ol></div>`);
    $("#ff").onclick = () => { this.ff = false; $("#ff").disabled = true; shuffle([0, 1, 2, 3].filter(j => j !== ans && j < opts.length)).slice(0, 2).forEach(j => document.querySelector(`.opt[data-j="${j}"]`).classList.add("gone")); };
    document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      document.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.j === ans) x.classList.add("right"); }); $("#ff").disabled = true;
      const win = +b.dataset.j === ans; if (!win) b.classList.add("wrong");
      setTimeout(() => {
        if (win && this.i + 1 < this.qs.length) { this.i++; this.show(); }
        else finish(Math.round((this.i + (win ? 1 : 0)) / this.qs.length * 100), win ? `<p>🏆 Kamu menjadi <b>English Master</b>!</p>` : `<p>Kamu berhenti di pertanyaan ${this.i + 1}. Coba lagi!</p>`);
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
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro} Gunakan tombol ▲▼ untuk memindahkan.</p>
      <ul class="sort">${this.order.map((v, i) => { const [lab, txt] = split(cur.items[v]);
        return `<li class="${checked ? (v === i ? "right" : "wrong") : ""}"><span>${checked && lab ? `<span class="lbl">${esc(lab)}</span>` : ""}${esc(txt)}</span>
        <span class="mv"><button data-u="${i}" ${checked ? "disabled" : ""}>▲</button><button data-d="${i}" ${checked ? "disabled" : ""}>▼</button></span></li>`; }).join("")}</ul>
      <div class="row">${checked ? "" : `<button class="btn" id="ck">Periksa</button>`}</div>`);
    document.querySelectorAll("[data-u]").forEach(b => b.onclick = () => { const i = +b.dataset.u; if (i > 0) { [this.order[i - 1], this.order[i]] = [this.order[i], this.order[i - 1]]; this.show(); } });
    document.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { const i = +b.dataset.d; if (i < this.order.length - 1) { [this.order[i + 1], this.order[i]] = [this.order[i], this.order[i + 1]]; this.show(); } });
    if (!checked) $("#ck").onclick = () => {
      this.show(true); const ok = this.order.filter((v, i) => v === i).length;
      $(".row").innerHTML = `<p class="fb">${ok === this.order.length ? "✅ Urutan sempurna!" : `Posisi benar: ${ok} dari ${this.order.length}. Lihat label untuk belajar.`}</p><button class="btn" id="sc">Lihat nilai</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / this.order.length * 100));
    };
  }
};

// ---------- classify ----------
const Classify = {
  start() {
    this.items = shuffle(cur.items); this.pick = {};
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro}</p>${this.items.map(([txt], i) => `<div class="cl" id="c${i}"><div>${esc(txt)}</div><div class="g">${cur.groups.map((g, j) => `<button data-i="${i}" data-j="${j}">${esc(g)}</button>`).join("")}</div></div>`).join("")}
      <div class="row"><button class="btn" id="ck">Periksa</button></div>`);
    document.querySelectorAll(".cl .g button").forEach(b => b.onclick = () => {
      const i = +b.dataset.i; this.pick[i] = +b.dataset.j;
      document.querySelectorAll(`button[data-i="${i}"]`).forEach(x => x.classList.toggle("pick", x === b));
    });
    $("#ck").onclick = () => {
      if (Object.keys(this.pick).length < this.items.length && !confirm("Masih ada yang belum dipilih. Periksa sekarang?")) return;
      let ok = 0;
      this.items.forEach(([, g], i) => { const r = this.pick[i] === g; if (r) ok++; const el = $("#c" + i); el.classList.add(r ? "right" : "wrong");
        if (!r) el.insertAdjacentHTML("beforeend", `<small>Jawaban: <b>${esc(cur.groups[g])}</b></small>`); el.querySelectorAll("button").forEach(x => x.disabled = true); });
      $(".row").innerHTML = `<p class="fb">Benar ${ok} dari ${this.items.length}</p><button class="btn" id="sc">Lihat nilai</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / this.items.length * 100));
    };
  }
};

// ---------- fill ----------
const Fill = {
  start() {
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro}</p>${cur.soal.map(([q], i) => { const [a, b] = q.split("___");
      return `<div class="fi" id="f${i}"><span>${i + 1}. ${esc(a)}</span><input id="in${i}" autocomplete="off" autocapitalize="off"><span>${esc(b || "")}</span></div>`; }).join("")}
      <div class="row"><button class="btn" id="ck">Periksa</button></div>`);
    $("#ck").onclick = () => {
      let ok = 0;
      cur.soal.forEach(([, ans], i) => { const v = $("#in" + i).value.trim().toLowerCase(); const r = v === ans; if (r) ok++;
        $("#f" + i).classList.add(r ? "right" : "wrong"); $("#in" + i).disabled = true; if (!r) $("#f" + i).insertAdjacentHTML("beforeend", `<small>→ <b>${ans}</b></small>`); });
      $(".row").innerHTML = `<p class="fb">Benar ${ok} dari ${cur.soal.length}</p><button class="btn" id="sc">Lihat nilai</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / cur.soal.length * 100));
    };
  }
};

render();
