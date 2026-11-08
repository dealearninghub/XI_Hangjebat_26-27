// ============================================================
//  DATA WEBSITE PEMBELAJARAN — cukup ubah file ini saja.
//  Tambah bab baru dengan menyalin satu blok { ... } di "bab".
// ============================================================
const SITUS = {
  judul: "Kelas XI Hang Jebat",
  tahun: "2026/2027",
  guru: "Bu Ida",
  mapel: "Mata Pelajaran",          // ganti, misal: "Biologi"
  sambutan: "Selamat datang di ruang belajar online kelas XI Hang Jebat. Pelajari materi, tonton video, kerjakan kuis, dan kumpulkan tugas di sini.",
  pengumuman: [
    { tanggal: "2026-11-08", isi: "Website pembelajaran kelas sudah aktif. Mulai dari Bab 1 ya!" }
  ],
  bab: [
    {
      id: "bab1",
      judul: "Bab 1: Contoh Judul Bab",
      ringkas: "Pengenalan konsep dasar bab pertama.",
      tujuan: [
        "Siswa dapat menjelaskan konsep dasar.",
        "Siswa dapat memberi contoh dalam kehidupan sehari-hari."
      ],
      // Link YouTube biasa boleh (https://www.youtube.com/watch?v=...). Kosongkan "" jika tidak ada.
      video: "",
      materi: `
        <p>Tulis isi materi di sini. Boleh memakai paragraf, daftar, dan gambar.</p>
        <h3>A. Pengertian</h3>
        <p>Penjelasan singkat tentang pengertian konsep.</p>
        <h3>B. Contoh</h3>
        <ul><li>Contoh pertama</li><li>Contoh kedua</li></ul>
      `,
      lampiran: [ ["Modul PDF (Google Drive)", "#"] ],
      kuis: [
        { soal: "Contoh soal nomor 1?", pilihan: ["Jawaban A", "Jawaban B", "Jawaban C", "Jawaban D"], benar: 0, bahas: "Penjelasan mengapa A benar." },
        { soal: "Contoh soal nomor 2?", pilihan: ["Jawaban A", "Jawaban B", "Jawaban C", "Jawaban D"], benar: 2, bahas: "Penjelasan mengapa C benar." }
      ],
      tugas: { isi: "Kerjakan latihan halaman 10 dan unggah fotonya.", batas: "2026-11-15", link: "#" }
    },
    {
      id: "bab2",
      judul: "Bab 2: Contoh Judul Bab",
      ringkas: "Lanjutan materi bab kedua.",
      tujuan: ["Siswa dapat menerapkan konsep pada soal."],
      video: "",
      materi: `<p>Isi materi Bab 2.</p>`,
      lampiran: [],
      kuis: [
        { soal: "Contoh soal Bab 2?", pilihan: ["Benar", "Salah"], benar: 0, bahas: "Penjelasan." }
      ],
      tugas: null
    }
  ]
};
