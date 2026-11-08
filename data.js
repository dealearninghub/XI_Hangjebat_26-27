// ============================================================
//  DATA WEBSITE PEMBELAJARAN — cukup ubah file ini saja.
//  Sumber: Prota-Prosem & ATP Bahasa Inggris Tingkat Lanjut XI TP 2026/2027
//  - video: tempel link YouTube biasa, kosongkan "" jika tidak ada
//  - lampiran: [ ["Nama file", "link Google Drive"] ]
//  - tugas: { isi: "...", batas: "2026-11-30", link: "link Google Form/Classroom" } atau null
// ============================================================
const SITUS = {
  judul: "Kelas XI Hang Jebat",
  tahun: "2026/2027",
  guru: "Ms. Dea Arioktavia",
  mapel: "Bahasa Inggris Tingkat Lanjut",
  sambutan: "Welcome to our English class! Di sini kamu bisa mempelajari materi setiap bab, menonton video, mengerjakan kuis latihan, dan melihat tugas. Selamat belajar! 🌿",
  pengumuman: [
    { tanggal: "2026-11-08", isi: "Website kelas sudah aktif. Pelajari Bab 1 & Bab 2 untuk Semester 1, lalu coba kuisnya." }
  ],
  bab: [
    {
      id: "bab1",
      judul: "Bab 1: Are We Connected to Nature?",
      ringkas: "Narrative Text bertema lingkungan · Menyimak, berbicara, berdiskusi & debat. Semester 1 · 45 JP",
      tujuan: [
        "Mengidentifikasi informasi tersurat dan tersirat (alur cerita, fakta, gagasan pokok) dari teks lisan/multimodal.",
        "Membandingkan sudut pandang dan strategi argumen dari dua atau lebih teks lisan/multimodal.",
        "Menyampaikan dan mempertahankan pendapat secara lisan dengan struktur klaim–data–warrant.",
        "Mengevaluasi efektivitas argumen pembicara melalui critical response tertulis.",
        "Merancang dan menyajikan debat terstruktur dengan strategi rebuttal dan data pendukung."
      ],
      video: "",
      materi: `
        <h3>A. What is a Narrative Text?</h3>
        <p>A <b>narrative text</b> tells a story (real or imaginary) to <b>entertain</b> readers and often to deliver a <b>moral value</b>. In this unit, the stories are about nature and the environment.</p>
        <h3>B. Generic Structure</h3>
        <ul>
          <li><b>Orientation</b> – introduces the characters, time, and place.</li>
          <li><b>Complication</b> – a problem or conflict appears.</li>
          <li><b>Resolution</b> – the problem is solved (happily or sadly).</li>
          <li><b>Coda/Reorientation</b> (optional) – the moral lesson or ending comment.</li>
        </ul>
        <h3>C. Language Features</h3>
        <ul>
          <li>Simple past tense: <i>The villagers <b>cut</b> the trees.</i></li>
          <li>Action verbs: <i>ran, planted, destroyed</i></li>
          <li>Time connectives: <i>once upon a time, then, after that, finally</i></li>
          <li>Descriptive adjectives: <i>a <b>dense</b>, <b>green</b> forest</i></li>
        </ul>
        <h3>D. Explicit vs Implicit Information</h3>
        <p><b>Explicit</b> information is written directly in the text. <b>Implicit</b> information must be inferred from clues, for example the author's purpose or the moral value.</p>
        <h3>E. Expressing & Defending Opinions</h3>
        <ul>
          <li>Giving opinion: <i>In my opinion…, I believe…, From my point of view…</i></li>
          <li>Agreeing: <i>I totally agree…, That's a good point…</i></li>
          <li>Disagreeing: <i>I see your point, but…, I'm afraid I disagree…</i></li>
          <li>Argument structure (Toulmin): <b>Claim</b> (pendapat) → <b>Data</b> (bukti) → <b>Warrant</b> (alasan yang menghubungkan bukti dengan klaim).</li>
        </ul>
        <h3>F. Debate & Rebuttal</h3>
        <p>In a debate, the <b>affirmative</b> team supports the motion and the <b>negative</b> team opposes it. A <b>rebuttal</b> responds to the opponent's argument: <i>"My opponent said…, however, the data shows…"</i></p>
        <p><b>Key vocabulary:</b> ecosystem, habitat, deforestation, pollution, biodiversity, sustainable, extinction.</p>
      `,
      lampiran: [],
      kuis: [
        { soal: "What is the main purpose of a narrative text?", pilihan: ["To describe a thing in detail", "To entertain and give a moral lesson", "To persuade readers to do something", "To explain how something works"], benar: 1, bahas: "Narrative text bertujuan menghibur pembaca dan biasanya mengandung pesan moral." },
        { soal: "The part of a narrative that introduces the characters, time and place is called…", pilihan: ["Complication", "Resolution", "Orientation", "Coda"], benar: 2, bahas: "Orientation memperkenalkan tokoh, waktu, dan tempat." },
        { soal: "\"Suddenly, a big fire burned the forest and the animals lost their homes.\" This sentence is most likely part of the…", pilihan: ["Orientation", "Complication", "Resolution", "Reorientation"], benar: 1, bahas: "Munculnya masalah/konflik (kebakaran hutan) adalah bagian complication." },
        { soal: "Which tense is mostly used in a narrative text?", pilihan: ["Simple present tense", "Simple future tense", "Simple past tense", "Present continuous tense"], benar: 2, bahas: "Cerita terjadi di masa lampau, jadi menggunakan simple past tense." },
        { soal: "\"I see your point, but I don't think plastic bags should be banned completely.\" This expression is used to…", pilihan: ["Agree politely", "Disagree politely", "Ask for clarification", "Give a conclusion"], benar: 1, bahas: "\"I see your point, but…\" adalah ungkapan tidak setuju secara sopan." },
        { soal: "In the Toulmin model, the evidence that supports a claim is called…", pilihan: ["Warrant", "Rebuttal", "Data", "Motion"], benar: 2, bahas: "Claim = pendapat, Data = bukti, Warrant = alasan yang menghubungkan keduanya." }
      ],
      tugas: null
    },
    {
      id: "bab2",
      judul: "Bab 2: Self Discovery – Fairy Tales & Fantasy Stories",
      ringkas: "Membaca kritis teks narasi, eksposisi & diskusi · Annotated reading, text analysis, esai perbandingan. Semester 1 · 45 JP",
      tujuan: [
        "Mengidentifikasi informasi tersurat dan tersirat (makna implisit, tujuan penulis, sudut pandang) melalui graphic organizer atau annotated reading.",
        "Menganalisis hubungan struktur teks, pilihan bahasa, dan tujuan komunikatif dalam text analysis minimal 200 kata.",
        "Mengevaluasi keandalan sumber dan kredibilitas argumen (CRAAP test) dari dua teks multimodal.",
        "Membandingkan penyajian isu dalam teks tertulis dan multimodal dalam esai perbandingan minimal 250 kata.",
        "Menyusun critical reading portfolio berisi 3 teks pilihan dengan anotasi dan refleksi."
      ],
      video: "",
      materi: `
        <h3>A. Fairy Tales & Fantasy Stories</h3>
        <p>Fairy tales and fantasy stories are narratives with <b>magical elements</b>, imaginary worlds, and characters such as fairies, talking animals, or heroes. Behind the magic, they often carry messages about <b>identity, courage, and self-discovery</b>.</p>
        <h3>B. Annotated Reading</h3>
        <p>Annotating means writing notes while reading. Useful annotation marks:</p>
        <ul>
          <li><b>Underline</b> main ideas</li>
          <li><b>?</b> for confusing parts</li>
          <li><b>!</b> for surprising information</li>
          <li>Short comments in the margin: <i>"The author is criticizing…"</i></li>
        </ul>
        <h3>C. Graphic Organizers</h3>
        <ul><li><b>Story map</b> – characters, setting, problem, events, solution</li><li><b>T-chart</b> – compare two things (e.g., explicit vs implicit)</li><li><b>Fishbone</b> – causes and effects of a problem</li></ul>
        <h3>D. Author's Purpose & Point of View</h3>
        <p>Ask: <i>Why did the author write this? To entertain, inform, or persuade? From whose eyes is the story told?</i> (first person "I" or third person "he/she/they").</p>
        <h3>E. Evaluating Sources – The CRAAP Test</h3>
        <ul>
          <li><b>C</b>urrency – Is the information up to date?</li>
          <li><b>R</b>elevance – Is it related to your topic?</li>
          <li><b>A</b>uthority – Who is the author? Are they an expert?</li>
          <li><b>A</b>ccuracy – Is it supported by evidence?</li>
          <li><b>P</b>urpose – Is it written to inform, sell, or persuade? Is there bias?</li>
        </ul>
        <h3>F. Comparison Essay</h3>
        <p>Two ways to organize: <b>Block method</b> (discuss text A fully, then text B) or <b>Point-by-point</b> (compare A and B on each point). Useful language: <i>similarly, likewise, in contrast, whereas, on the other hand.</i></p>
      `,
      lampiran: [],
      kuis: [
        { soal: "Which element is typical of fantasy stories?", pilihan: ["Statistical data", "Magical or imaginary elements", "Step-by-step instructions", "Scientific explanation"], benar: 1, bahas: "Fantasy stories selalu mengandung unsur magis/imajinatif." },
        { soal: "A graphic organizer that shows characters, setting, problem, and solution is a…", pilihan: ["Fishbone diagram", "T-chart", "Story map", "Venn diagram"], benar: 2, bahas: "Story map memetakan unsur cerita: tokoh, latar, masalah, peristiwa, solusi." },
        { soal: "In the CRAAP test, \"Authority\" asks…", pilihan: ["Is the information new?", "Who wrote it and are they qualified?", "Is the text long enough?", "Is the topic interesting?"], benar: 1, bahas: "Authority = siapa penulis/sumbernya dan apakah kredibel." },
        { soal: "\"Text A describes the forest as magical, ____ Text B describes it as dangerous.\" The best connector is…", pilihan: ["whereas", "because", "therefore", "for example"], benar: 0, bahas: "\"Whereas\" menunjukkan kontras antara dua hal." },
        { soal: "Information that must be inferred from clues in the text is called…", pilihan: ["Explicit information", "Implicit information", "Main idea", "Orientation"], benar: 1, bahas: "Informasi tersirat (implicit) harus disimpulkan dari petunjuk dalam teks." }
      ],
      tugas: null
    },
    {
      id: "bab3",
      judul: "Bab 3: The Importance of Environmental Protection",
      ringkas: "Analytical Exposition · Menulis narasi, eksposisi & diskusi, peer review, writing portfolio. Semester 2 · 45 JP",
      tujuan: [
        "Menyusun teks narasi singkat (250–350 kata) dengan struktur orientasi–komplikasi–resolusi.",
        "Menulis teks eksposisi argumentatif (350–500 kata) dengan struktur tesis–argumen–restatement dan minimal 3 argumen.",
        "Menulis teks diskusi (400–500 kata) yang memuat argumen pro dan kontra secara seimbang.",
        "Mengevaluasi dan merevisi tulisan teman (peer review) dengan rubrik dan umpan balik konstruktif.",
        "Menyusun writing portfolio dan refleksi perkembangan diri sebagai penulis."
      ],
      video: "",
      materi: `
        <h3>A. What is an Analytical Exposition?</h3>
        <p>An <b>analytical exposition</b> is a text that presents the writer's <b>opinion</b> about an issue and supports it with <b>arguments</b>, to convince readers that the issue is important.</p>
        <h3>B. Generic Structure</h3>
        <ul>
          <li><b>Thesis</b> – the writer's position/opinion. <i>"Protecting the environment is essential for our future."</i></li>
          <li><b>Arguments</b> – at least three reasons with supporting data or facts.</li>
          <li><b>Reiteration (Restatement)</b> – restates the thesis in different words as a conclusion.</li>
        </ul>
        <h3>C. Language Features</h3>
        <ul>
          <li>Simple present tense: <i>Plastic waste <b>pollutes</b> the ocean.</i></li>
          <li>Thinking verbs: <i>believe, think, consider</i></li>
          <li>Connectives: <i>firstly, secondly, moreover, furthermore, in addition, therefore</i></li>
          <li>Emotive words: <i>alarming, crucial, devastating</i></li>
        </ul>
        <h3>D. Discussion Text</h3>
        <p>A discussion text presents <b>both sides</b> of an issue: <b>Issue → Arguments for (pro) → Arguments against (contra) → Conclusion/Recommendation</b>. Use objective language: <i>Some people argue that…, On the other hand, others believe…</i></p>
        <h3>E. Peer Review</h3>
        <p>When reviewing a friend's draft, check: <b>structure</b>, <b>cohesion</b> (connectives), <b>argument</b> (data & logic), and <b>language</b> (grammar & vocabulary). Give feedback that is specific and kind: <i>"Your second argument is strong; adding a statistic would make it more convincing."</i></p>
      `,
      lampiran: [],
      kuis: [
        { soal: "The social function of an analytical exposition is to…", pilihan: ["Tell an entertaining story", "Persuade readers that an issue is important", "Describe a particular place", "Report an event in order"], benar: 1, bahas: "Analytical exposition meyakinkan pembaca bahwa suatu isu itu penting." },
        { soal: "The generic structure of an analytical exposition is…", pilihan: ["Orientation – Complication – Resolution", "Thesis – Arguments – Reiteration", "Goal – Materials – Steps", "Identification – Description"], benar: 1, bahas: "Strukturnya: Thesis – Arguments – Reiteration." },
        { soal: "\"In conclusion, it is clear that we must protect our forests.\" This sentence belongs to the…", pilihan: ["Thesis", "Argument", "Reiteration", "Orientation"], benar: 2, bahas: "Kalimat penutup yang menegaskan kembali pendapat penulis adalah reiteration." },
        { soal: "Which connective is used to ADD another argument?", pilihan: ["However", "Moreover", "Although", "Whereas"], benar: 1, bahas: "\"Moreover\" menambahkan argumen. However/although/whereas menunjukkan pertentangan." },
        { soal: "A discussion text is different from an analytical exposition because it…", pilihan: ["Uses past tense", "Presents both pro and contra arguments", "Has no conclusion", "Tells a story"], benar: 1, bahas: "Discussion text menyajikan argumen pro dan kontra secara seimbang." }
      ],
      tugas: null
    },
    {
      id: "bab4",
      judul: "Bab 4: Healthy Lifestyle & Water",
      ringkas: "Hortatory Exposition (lintas mapel PJOK) · Teks persuasif & presentasi produk multimodal. Semester 2 · 45 JP",
      tujuan: [
        "Memahami fungsi, struktur, dan ciri kebahasaan hortatory exposition.",
        "Merancang dan mempresentasikan produk multimodal (poster digital, video pendek, atau slide) tentang kesehatan dan pentingnya air bersih dengan strategi persuasi.",
        "Mengintegrasikan keterampilan menyimak, berbicara, membaca, dan menulis dalam projek terpadu dan asesmen akhir."
      ],
      video: "",
      materi: `
        <h3>A. What is a Hortatory Exposition?</h3>
        <p>A <b>hortatory exposition</b> persuades readers that something <b>should or should not be done</b>. It goes one step further than an analytical exposition by giving a <b>recommendation</b>.</p>
        <h3>B. Generic Structure</h3>
        <ul>
          <li><b>Thesis</b> – states the issue/position. <i>"Drinking enough water is the key to a healthy life."</i></li>
          <li><b>Arguments</b> – reasons and evidence.</li>
          <li><b>Recommendation</b> – what readers should do. <i>"Therefore, we should drink at least 8 glasses of water a day."</i></li>
        </ul>
        <h3>C. Language Features</h3>
        <ul>
          <li>Modals: <i>should, must, ought to, need to</i></li>
          <li>Imperatives / persuasive phrases: <i>Let's…, It is important to…, We need to…</i></li>
          <li>Simple present tense and evaluative words: <i>essential, harmful, beneficial</i></li>
          <li>Connectives: <i>firstly, besides, consequently, therefore</i></li>
        </ul>
        <h3>D. Analytical vs Hortatory</h3>
        <ul>
          <li><b>Analytical</b>: Thesis → Arguments → <b>Reiteration</b> (\"…is important.\")</li>
          <li><b>Hortatory</b>: Thesis → Arguments → <b>Recommendation</b> (\"…we should…\")</li>
        </ul>
        <h3>E. Multimodal Project</h3>
        <p>Create a digital poster, short video, or slide presentation about healthy lifestyle and clean water. Combine <b>text, images, and data</b>, use a clear persuasive message, and end with a call to action.</p>
        <p><b>Key vocabulary:</b> hydration, dehydration, sanitation, nutrition, balanced diet, clean water, physical activity.</p>
      `,
      lampiran: [],
      kuis: [
        { soal: "The main difference between hortatory and analytical exposition is that hortatory exposition ends with a…", pilihan: ["Reiteration", "Recommendation", "Resolution", "Orientation"], benar: 1, bahas: "Hortatory exposition diakhiri recommendation (saran apa yang harus dilakukan)." },
        { soal: "\"Students ______ bring their own water bottles to reduce plastic waste.\"", pilihan: ["should", "did", "was", "are being"], benar: 0, bahas: "Modal \"should\" dipakai untuk memberi saran/rekomendasi." },
        { soal: "Which sentence is a recommendation?", pilihan: ["Water makes up about 60% of the human body.", "Many people do not drink enough water.", "Therefore, let's drink eight glasses of water every day.", "Dehydration causes headaches."], benar: 2, bahas: "Ajakan \"let's…\" / \"we should…\" adalah recommendation." },
        { soal: "What is the purpose of a hortatory exposition?", pilihan: ["To persuade readers that something should or should not be done", "To retell past events", "To describe a person", "To explain a natural process"], benar: 0, bahas: "Hortatory exposition membujuk pembaca agar melakukan/tidak melakukan sesuatu." },
        { soal: "A good multimodal poster about clean water should include…", pilihan: ["Only a long paragraph", "Text, images, data, and a call to action", "A story with characters", "A list of unrelated pictures"], benar: 1, bahas: "Produk multimodal menggabungkan teks, gambar, data, dan ajakan yang jelas." }
      ],
      tugas: null
    }
  ]
};
