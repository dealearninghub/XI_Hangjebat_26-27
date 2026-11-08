// Ringkasan singkat CP, Analisis CP, ATP dan RPM (versi lengkap tetap ada di dokumen/ dan unduh/)
const UNITS = [
  { no: 1, e: "🌿", c: "#3fd47a", t: "Are We Connected to Nature?", jenis: "Narrative Text (Legenda)", minggu: "1–9", sem: "Ganjil", jp: 45, p: "1–18",
    teks: "The Legend of the Weeping Lake · Telaga Lestari · Pulau Setokok", produk: "Picture-Sequencing Poster", bahasa: "Action verbs · Simple past · Sequence words",
    tp: [
      { k: "1.1", b: "C1–C2", t: "Struktur, ciri legenda, kosakata & ide pokok", jp: 10, m: "Discovery", dpl: "Penalaran Kritis",
        p: [[1, "Story Detectives: struktur legenda"], [2, "Legend Hunters: ciri legenda"], [3, "Word Explorers: kosakata lingkungan"], [4, "Idea Hunters: ide pokok (note-taking)"]] },
      { k: "1.2", b: "C4", t: "Action verbs, simple past & sequence words", jp: 10, m: "Discovery", dpl: "Penalaran Kritis",
        p: [[5, "Recap ide pokok + grammar simple past"], [6, "Action verbs & simple past (Telaga Lestari, Setokok)"], [7, "Sequence words di legenda daerah"], [8, "Menulis ulang legenda daerah"]] },
      { k: "1.3", b: "C5", t: "Evaluasi teks & refleksi isu lingkungan", jp: 5, m: "Discovery", dpl: "Penalaran Kritis",
        p: [[9, "Menilai struktur & bahasa teks"], [10, "Text-to-world connection"]] },
      { k: "1.4", b: "C6", t: "Proyek: Picture-Sequencing Poster", jp: 15, m: "PjBL", dpl: "Kreativitas",
        p: [[11, "Bentuk kelompok & foto isu nyata"], [12, "Urutkan gambar sesuai struktur"], [13, "Tulis narasi poster"], [14, "Finalisasi & latihan presentasi"], [15, "Presentasi gelombang 1"], [16, "Presentasi gelombang 2 & refleksi"]] },
      { k: "UH", b: "Sumatif", t: "Ulangan harian & portofolio", jp: 5, m: "Asesmen", dpl: "Kemandirian",
        p: [[17, "Ulangan harian tertulis"], [18, "Pembahasan & kumpul portofolio poster"]] }
    ] },
  { no: 2, e: "🦄", c: "#b77bff", t: "Discovering Ourselves", jenis: "Narrative Text (Fantasi)", minggu: "10–17", sem: "Ganjil", jp: 40, p: "19–34",
    teks: "The Mirror of Selara", produk: "Motion Comic (komik digital bersuara)", bahasa: "Noun phrase · Adverbia · Reduksi klausa · Reported speech",
    tp: [
      { k: "2.1", b: "C1–C2", t: "Struktur & elemen cerita fantasi", jp: 5, m: "Discovery", dpl: "Penalaran Kritis",
        p: [[19, "Stimulus dongeng & cerita jati diri"], [20, "Elemen cerita, konflik, perubahan tokoh"]] },
      { k: "2.2", b: "C2–C4", t: "Kosakata & kebahasaan cerita", jp: 10, m: "Discovery", dpl: "Penalaran Kritis",
        p: [[21, "Kosakata fantastic beings & well-being"], [22, "Noun phrase & adverbia"], [23, "Klausa, reduksi klausa, reported speech"], [24, "Menulis cerita penemuan jati diri"]] },
      { k: "2.3", b: "C6 awal", t: "Perencanaan motion comic (minggu TKA)", jp: 10, m: "PjBL", dpl: "Kreativitas",
        p: [[25, "Pilih cerita & diskusi alur"], [26, "Story planner, naskah panel, bagi tugas"], [27, "Mandiri: mulai eksekusi digital"], [28, "Mandiri: cek bahasa & rencana rekam"]] },
      { k: "2.4", b: "C6", t: "Proyek: Motion Comic", jp: 10, m: "PjBL", dpl: "Kreativitas",
        p: [[29, "Finalisasi panel & rekam suara"], [30, "Editing video & umpan balik"], [31, "Pemutaran gelombang 1"], [32, "Pemutaran gelombang 2 & e-book kelas"]] },
      { k: "UH", b: "Sumatif", t: "Ulangan harian & rekap semester ganjil", jp: 5, m: "Asesmen", dpl: "Kemandirian",
        p: [[33, "Ulangan harian (paket A & B)"], [34, "Pembahasan & rekap nilai portofolio"]] }
    ] },
  { no: 3, e: "🌍", c: "#3fb7ff", t: "The Importance of Environmental Protection", jenis: "Analytical Exposition", minggu: "18–26", sem: "Genap", jp: 45, p: "35–52",
    teks: "Teks eksposisi analitis isu lingkungan sekolah", produk: "Green Street Journalism (teks + video kampanye)", bahasa: "Simple present · Causal conjunctions · Claim-Evidence-Reasoning",
    tp: [
      { k: "3.1", b: "C1–C2", t: "Struktur & kosakata akademik lingkungan", jp: 10, m: "Discovery", dpl: "Penalaran Kritis",
        p: [[35, "Stimulus isu & kosakata akademik"], [36, "Grammar: kalimat kompleks sederhana"], [37, "Thesis–Arguments–Reiteration"], [38, "Tandai struktur & verifikasi kelompok"]] },
      { k: "3.2", b: "C4", t: "Simple present, causal conjunctions & CER", jp: 10, m: "Discovery · PBL", dpl: "Penalaran Kritis",
        p: [[39, "Grammar: simple present"], [40, "Causal conjunctions"], [41, "Claim-Evidence-Reasoning dengan data"], [42, "Menyusun argumen berdata"]] },
      { k: "3.3", b: "C5", t: "Evaluasi argumen (bias & asumsi)", jp: 5, m: "PBL", dpl: "Penalaran Kritis",
        p: [[43, "Critical reading: bias & asumsi"], [44, "Menilai kuat-lemah argumen"]] },
      { k: "3.4", b: "C6", t: "Proyek: Green Street Journalism (Ramadan)", jp: 15, m: "PjBL", dpl: "Kreativitas",
        p: [[45, "Briefing, undian tema & rubrik"], ["46–49", "Penugasan mandiri: riset, teks, video"], [50, "Pengumpulan & pemutaran singkat"]] },
      { k: "Nilai", b: "Sumatif", t: "Penilaian produk (tanpa tes tertulis)", jp: 5, m: "Asesmen", dpl: "Kemandirian",
        p: [[51, "Rekap & cek kelengkapan tugas"], [52, "Umpan balik & revisi mandiri"]] }
    ] },
  { no: 4, e: "🍎", c: "#ff8a4c", t: "Why Should We Live a Healthy Lifestyle?", jenis: "Hortatory Exposition", minggu: "27–35", sem: "Genap", jp: 45, p: "53–70",
    teks: "Teks hortatori gaya hidup sehat remaja", produk: "Hortatory Podcast Station", bahasa: "Modal verbs · Imperative · Logos-Pathos-Ethos",
    tp: [
      { k: "4.1", b: "C1–C2", t: "Struktur & kosakata PJOK", jp: 10, m: "Discovery", dpl: "Penalaran Kritis",
        p: [[53, "Stimulus kampanye & kosakata PJOK"], [54, "Grammar: kata sifat & kata kerja kesehatan"], [55, "Thesis–Arguments–Recommendation"], [56, "Tandai struktur & refleksi kebiasaan"]] },
      { k: "4.2", b: "C4", t: "Modal verbs, imperative & logos-pathos-ethos", jp: 10, m: "Discovery · PBL", dpl: "Penalaran Kritis",
        p: [[57, "Grammar: modal verbs"], [58, "Modal verbs & imperative"], [59, "Strategi logos-pathos-ethos"], [60, "Menyusun kalimat ajakan"]] },
      { k: "4.3", b: "C5", t: "Evaluasi kelayakan rekomendasi", jp: 5, m: "PBL", dpl: "Penalaran Kritis",
        p: [[61, "Menilai kelayakan rekomendasi"], [62, "Refleksi hidup sehat siswa"]] },
      { k: "4.4", b: "C6", t: "Proyek: Hortatory Podcast Station", jp: 15, m: "PjBL", dpl: "Kreativitas",
        p: [[63, "Undian sub-topik & peran"], [64, "Menulis skrip podcast"], [65, "Finalisasi skrip & latihan vokal"], [66, "Rekaman podcast"], [67, "Listening Party 1"], [68, "Listening Party 2 & refleksi"]] },
      { k: "UH", b: "Sumatif", t: "Ulangan harian & rekap semester genap", jp: 5, m: "Asesmen", dpl: "Kemandirian",
        p: [[69, "Ulangan harian (paket A & B)"], [70, "Pembahasan & rekap nilai portofolio"]] }
    ] }
];

const ELEMEN = [
  { e: "🎧", t: "Menyimak – Berbicara", d: "Memahami alur cerita & informasi teks narasi, eksposisi, diskusi; menyampaikan dan mempertahankan pendapat." },
  { e: "📖", t: "Membaca – Memirsa", d: "Mengevaluasi dan merefleksi informasi tersurat & tersirat dari teks isu nasional maupun global." },
  { e: "✍️", t: "Menulis – Mempresentasikan", d: "Menulis cerita dan pendapat berdata dengan struktur & bahasa yang tepat, lalu mempresentasikannya." }
];

const statRow = items => `<div class="stats">${items.map(([v, l]) => `<div><b>${v}</b><small>${l}</small></div>`).join("")}</div>`;
const uHead = u => `<span class="ub" style="--c:${u.c}">${u.e} Unit ${u.no}</span>`;

const RINGKAS = {
  cp: () => `
    <div class="lead"><span class="pill">Fase F · Tingkat Lanjut</span><h2>Capaian Pembelajaran</h2><p>Di akhir Fase F, murid berbahasa Inggris setara <b>CEFR B2</b> lewat teks narasi dan eksposisi.</p></div>
    <div class="cards3">${ELEMEN.map(x => `<div class="bub"><i>${x.e}</i><b>${x.t}</b><p>${x.d}</p></div>`).join("")}</div>
    <h3 class="sec">CP per unit</h3>
    <div class="ulist">${UNITS.map(u => `<div class="urow" style="--c:${u.c}">${uHead(u)}<div><b>${u.jenis}</b><p>Pahami struktur (C2) → analisis bahasa (C4) → evaluasi isi (C5) → cipta <b>${u.produk}</b> (C6).</p></div></div>`).join("")}</div>`,

  "analisis-cp": () => `
    <div class="lead"><span class="pill">16 TP · 4 Unit</span><h2>Analisis CP</h2><p>Apa yang dipelajari di tiap unit, dalam satu tabel.</p></div>
    <div class="tw"><table class="mini"><tr><th>Unit</th><th>Struktur teks</th><th>Unsur kebahasaan</th><th>Produk</th></tr>
    ${UNITS.map(u => `<tr><td>${uHead(u)}</td><td>${u.no < 3 ? "Orientation – Complication – Resolution" : u.no === 3 ? "Thesis – Arguments – Reiteration" : "Thesis – Arguments – Recommendation"}</td><td>${u.bahasa}</td><td>${u.produk}</td></tr>`).join("")}
    </table></div>
    <p class="note">Teks diskusi (pro-kontra) tidak di kelas XI, lanjut di kelas XII.</p>`,

  atp: () => `
    <div class="lead"><span class="pill">175 JP · 70 pertemuan · 35 minggu</span><h2>Alur Tujuan Pembelajaran</h2><p>Setiap unit: pahami → analisis → evaluasi → proyek.</p></div>
    ${["Ganjil", "Genap"].map(s => `<h3 class="sec">Semester ${s}</h3>
      ${UNITS.filter(u => u.sem === s).map(u => `<div class="flow" style="--c:${u.c}">
        <div class="fh">${uHead(u)}<b>${u.jenis}</b><small>Minggu ${u.minggu} · ${u.jp} JP</small></div>
        <div class="steps">${u.tp.map(t => `<div class="st${t.m === "Asesmen" ? " ev" : ""}"><span>${t.k}</span><b>${t.t}</b><small>${t.b} · ${t.jp} JP</small></div>`).join("")}</div>
      </div>`).join("")}`).join("")}`
};
