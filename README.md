# Perangkat Ajar Bahasa Inggris Tingkat Lanjut XI · TP 2026/2027

Website perangkat ajar Dea Arioktavia, S.Pd (SMA Negeri 1 Batam), kelas XI Hang Jebat.

- `index.html` – portal perangkat ajar (Biodata, Prota, Prosem, CP, Analisis CP, ATP, KKTP, RPM Unit 1–4)
- `dokumen/` – isi tiap dokumen (hasil konversi dari file Word/Excel)
- `unduh/` – file asli yang bisa diunduh
- `lms/` – LMS untuk murid (materi, kuis, tugas). Isinya diatur di `lms/data.js`.

Sumber file: Google Drive › 05 WALI KELAS & GURU WALI › TP 2026 2027 HANG JEBAT › RPPM riil Taksonomi bloom › buat di upload

## Corner tiap unit (lab seperti "Lab Maya")
- `lms/corner.html?u=1` sampai `?u=4`: Nature Corner, Self-Discovery Corner, Green School Corner, Healthy Life Corner.
- Tab: Theory, Steps, Simulation (tandai struktur teks + sorot unsur kebahasaan), LKPD (20 soal unit + LKPD per pertemuan), Developer (CP/TP).
- Isi materi/simulasi/20 soal: `lms/corner-data.js`. LKPD per pertemuan: `lms/lkpd-data.js` (dari file LKPD terbaru di "RPPM riil Taksonomi bloom"). Jawaban murid tersimpan di perangkat murid.
- `lms/lkpd.html` lama otomatis diarahkan ke Corner.
