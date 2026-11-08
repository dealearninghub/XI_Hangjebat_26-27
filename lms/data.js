// =====================================================================
//  LAB ENGLISH XI — DATA. Ubah isi di sini saja.
//  Jenis aktivitas: quiz, game (Who Wants to Be an English Master), sort (urutkan), classify (kelompokkan), fill (isian)
//  Link video/drive: ganti "url" dengan link Ibu sendiri kapan saja.
// =====================================================================
const yt = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);

const LAB = {
  guru: "Dea Arioktavia, S.Pd",
  jabatan: "Advanced English Teacher · SMAN 1 Batam",
  judul: "Lab English XI Lanjut",
  tagline: "Read stories, share your ideas, and play fun English games.",
  heroLinks: [
    { t: "🎬 Get Motivated", url: yt("motivational video for students learning english") },
    { t: "❓ Why Learn English?", url: yt("why learn english importance for students") },
    { t: "🎵 Learn With Songs", url: yt("english songs with lyrics for learning") },
    { t: "🗣️ Speaking Practice", url: yt("english speaking practice for high school students") }
  ],
  driveLinks: [
    { t: "📁 Semester 1 Files", url: "#" },
    { t: "📁 Semester 2 Files", url: "#" }
  ],
  perpustakaan: [
    { t: "📚 British Council LearnEnglish Teens", url: "https://learnenglishteens.britishcouncil.org/" },
    { t: "📖 StoryWeaver (free picture books)", url: "https://storyweaver.org.in/" },
    { t: "📜 Project Gutenberg (classic stories)", url: "https://www.gutenberg.org/" },
    { t: "🏛️ SIBI (school books)", url: "https://buku.kemdikbud.go.id/" }
  ],
  semester: [
    { nama: "Semester 1", sub: "Stories: legends and fairy tales", units: ["u1", "u2"] },
    { nama: "Semester 2", sub: "Opinion texts: analytical and hortatory exposition", units: ["u3", "u4"] }
  ],
  units: {
    // ------------------------------------------------------------- UNIT 1
    u1: {
      no: "01", judul: "Are We Connected to Nature?", jenis: "Narrative Text · Legend", warna: "#2f9e44", emoji: "🌿",
      desk: "Learn how a legend is built, nature words, the simple past, action verbs, and sequence words. Project: a picture story poster.",
      tags: ["Legend", "Simple Past", "Sequence Words", "Poster Project"],
      materi: `
        <h3>What is a Legend?</h3><p>A <b>legend</b> is a traditional narrative story about the origin of a place, often with magical elements and a moral value. Examples: <i>The Legend of the Weeping Lake</i>, <i>The Legend of Telaga Lestari</i>, <i>The Legend of Pulau Setokok (Batam)</i>.</p>
        <h3>Generic Structure</h3><ul><li><b>Orientation</b>: who, when, where</li><li><b>Complication</b>: the problem/conflict</li><li><b>Resolution</b>: how the problem ends</li><li><b>Re-orientation/Coda</b>: moral value or closing</li></ul>
        <h3>Characteristics of a Legend</h3><ul><li>Magical/supernatural elements</li><li>Explains the origin of a place (etiological function)</li><li>Real setting</li><li>Moral message</li><li>Passed down orally</li></ul>
        <h3>Language Features</h3><ul><li><b>Simple past tense</b>: lived, cried, became, went</li><li><b>Action verbs</b>: cut, ran, planted, destroyed</li><li><b>Sequence words</b>: once upon a time, one day, then, after that, finally</li></ul>
        <p><b>Vocabulary:</b> ecosystem, habitat, deforestation, pollution, flood, drought, biodiversity, sustainable.</p>`,
      aktivitas: [
        { id: "u1-asesmen", t: "Warm-up Quiz Unit 1", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["A story about the origin of a place, usually with magical elements, is called a…", ["Fable", "Legend", "Biography", "News item"], 1],
          ["Which word is the past form of \"go\"?", ["goed", "gone", "went", "going"], 2],
          ["\"Once upon a time\" is usually found in the…", ["Orientation", "Complication", "Resolution", "Coda"], 0],
          ["Cutting down forests on a large scale is called…", ["Pollution", "Deforestation", "Recycling", "Erosion"], 1],
          ["What do you usually find at the end of a legend?", ["A list of materials", "A moral value", "A thesis statement", "A recommendation"], 1],
          ["Choose the sequence word:", ["beautiful", "forest", "afterwards", "angry"], 2]
        ]},
        { id: "u1-sort", t: "Lab Story Structure", ic: "🧩", type: "sort", note: "Put the story in order", intro: "Put the parts of \"The Legend of Telaga Lestari\" in the right order.", items: [
          "Orientation — Long ago, a small village stood near a green forest. The villagers lived happily and took care of the trees.",
          "Complication — One day, greedy people came and cut down the trees. The river dried up and the animals lost their homes.",
          "Complication — A great drought hit the village. The people cried and prayed for water.",
          "Resolution — A kind girl planted seeds every day. Finally, rain fell and a clear lake appeared where she cried.",
          "Re-orientation — The people named it Telaga Lestari and promised to protect nature forever."
        ]},
        { id: "u1-fill", t: "Lab Past Tense Builder", ic: "🔨", type: "fill", note: "Type the past form", intro: "Write the past form of the verb in brackets.", soal: [
          ["The villagers (live) ___ near the forest.", "lived"], ["One day, a big storm (come) ___.", "came"], ["The old man (cut) ___ the tallest tree.", "cut"],
          ["The girl (cry) ___ all night.", "cried"], ["The water (become) ___ a lake.", "became"], ["They (plant) ___ new trees.", "planted"],
          ["The animals (run) ___ away from the fire.", "ran"], ["The king (find) ___ a magic stone.", "found"]
        ]},
        { id: "u1-classify", t: "Lab Word Explorers", ic: "🔤", type: "classify", note: "Sort the words", intro: "Put each word in the right group.", groups: ["Action Verb", "Sequence Word", "Environment Noun"], items: [
          ["planted", 0], ["destroyed", 0], ["ran", 0], ["first", 1], ["after that", 1], ["finally", 1], ["habitat", 2], ["drought", 2], ["ecosystem", 2]
        ]},
        { id: "u1-game", t: "English Master Game · Unit 1", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["Which part introduces the characters?", ["Orientation", "Complication", "Resolution", "Coda"], 0],
          ["The past form of \"see\" is…", ["seed", "saw", "seen", "sees"], 1],
          ["\"The river dried up and the fish died.\" This is part of the…", ["Orientation", "Complication", "Coda", "Title"], 1],
          ["A legend often explains…", ["how to cook food", "the origin of a place", "today's weather", "a scientific fact"], 1],
          ["Choose the correct sentence.", ["She cry yesterday.", "She cried yesterday.", "She crying yesterday.", "She cries yesterday."], 1],
          ["\"Finally\" is used to show…", ["the first event", "the last event", "a reason", "a contrast"], 1],
          ["The moral value of a legend about cutting trees is probably…", ["Trees are useless", "We must protect nature", "Rivers are dangerous", "Money is everything"], 1],
          ["Which is NOT a characteristic of a legend?", ["Magical elements", "Real setting", "Moral value", "Statistical data"], 3]
        ]},
        { id: "u1-latihan", t: "Practice Unit 1", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["\"Many years ago, there lived a poor fisherman in Batam.\" The sentence is the…", ["Orientation", "Complication", "Resolution", "Re-orientation"], 0],
          ["Which is an irregular verb?", ["walked", "planted", "took", "cleaned"], 2],
          ["\"After that, the village was flooded.\" The sequence word is…", ["village", "after that", "was", "flooded"], 1],
          ["Implicit information is…", ["written directly", "inferred from clues", "the title", "a vocabulary list"], 1],
          ["The purpose of a picture-sequencing poster is to…", ["list prices", "tell a story through ordered pictures", "describe a person", "explain a process scientifically"], 1]
        ]}
      ],
      video: [
        ["Narrative Text: Generic Structure", yt("narrative text generic structure legend")],
        ["Simple Past Tense (Regular & Irregular)", yt("simple past tense regular irregular verbs explanation")],
        ["Sequence Words in Stories", yt("sequence words in narrative text")],
        ["Indonesian Legends in English", yt("indonesian legend story in english")]
      ],
      inspirasi: [["🎬 Mangrove Forests in Batam", yt("hutan mangrove batam")]]
    },
    // ------------------------------------------------------------- UNIT 2
    u2: {
      no: "02", judul: "Discovering Ourselves", jenis: "Narrative Text · Fairy Tale & Fantasy", warna: "#8e44ff", emoji: "🦄",
      desk: "Learn story elements, inner and outer conflict, noun phrases, adverbs, and reported speech. Project: a motion comic.",
      tags: ["Fairy Tale", "Story Elements", "Reported Speech", "Motion Comic"],
      materi: `
        <h3>Fairy Tale & Fantasy</h3><p>Stories with magical worlds and characters. Behind the magic, they show how a character <b>changes and discovers who they are</b>.</p>
        <h3>Story Elements</h3><ul><li><b>Characters</b> (protagonist, antagonist)</li><li><b>Setting</b> (time & place)</li><li><b>Conflict</b>: <i>internal</i> (inside the character: fear, doubt) and <i>external</i> (with others, nature, society)</li><li><b>Resolution</b> & <b>Coda</b> (lesson learned)</li></ul>
        <h3>Language Features</h3><ul><li><b>Noun phrase</b>: a brave young princess</li><li><b>Adverbs</b>: quickly, bravely, suddenly</li><li><b>Reduced adjective clause</b>: the girl <i>(who was) sitting</i> by the window → the girl sitting by the window</li><li><b>Reported speech</b>: "I am lost," she said. → She said that she was lost.</li></ul>`,
      aktivitas: [
        { id: "u2-asesmen", t: "Warm-up Quiz Unit 2", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["A conflict that happens inside a character's mind is called…", ["External conflict", "Internal conflict", "Setting", "Orientation"], 1],
          ["\"A brave young princess\" is an example of a…", ["Verb phrase", "Noun phrase", "Adverb", "Conjunction"], 1],
          ["Which word is an adverb?", ["happy", "happiness", "happily", "happier"], 2],
          ["The part of a story that tells the lesson learned is the…", ["Coda", "Orientation", "Complication", "Title"], 0],
          ["Fairy tales usually contain…", ["statistics", "magical elements", "instructions", "news reports"], 1]
        ]},
        { id: "u2-classify", t: "Lab Conflict Detector", ic: "🧠", type: "classify", note: "Inner or outer?", intro: "Is the conflict internal or external?", groups: ["Internal Conflict", "External Conflict"], items: [
          ["Mira is afraid she is not good enough to join the team.", 0], ["Leo cannot decide whether to tell the truth.", 0], ["The prince doubts his own courage.", 0],
          ["A dragon attacks the village.", 1], ["Two friends argue about a secret.", 1], ["A storm destroys the girl's house.", 1]
        ]},
        { id: "u2-reported", t: "Lab Reported Speech", ic: "💬", type: "quiz", note: "Change what people said", soal: [
          ["\"I am happy,\" said Ana. → Ana said that she ___ happy.", ["is", "was", "were", "be"], 1],
          ["\"I can fly,\" said the fairy. → The fairy said that she ___ fly.", ["can", "could", "will", "may"], 1],
          ["\"I will help you,\" he told me. → He told me that he ___ help me.", ["will", "would", "shall", "can"], 1],
          ["\"I lost my way,\" said the boy. → The boy said that he ___ his way.", ["lost", "had lost", "loses", "has lost"], 1],
          ["\"We are in the forest,\" they said. → They said that they ___ in the forest.", ["are", "were", "was", "be"], 1]
        ]},
        { id: "u2-sort", t: "Lab Motion Comic Planner", ic: "🎞️", type: "sort", note: "Put the panels in order", intro: "Put the comic panels in the right order.", items: [
          "Orientation — Rina, a shy girl, loved drawing but never showed anyone her work.",
          "Complication — Her class held an art competition, but she was afraid her friends would laugh at her.",
          "Resolution — Encouraged by her teacher, Rina joined and her drawing won second place.",
          "Coda — Rina learned that believing in herself was the first step to growing up."
        ]},
        { id: "u2-game", t: "English Master Game · Unit 2", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["The main character of a story is called the…", ["antagonist", "protagonist", "narrator", "audience"], 1],
          ["\"Suddenly\" is a(n)…", ["noun", "adjective", "adverb", "verb"], 2],
          ["\"The boy wearing a red hat\" contains a…", ["reduced adjective clause", "question tag", "passive voice", "conditional"], 0],
          ["Where and when a story happens is the…", ["plot", "setting", "theme", "coda"], 1],
          ["A character fighting a monster is an example of…", ["internal conflict", "external conflict", "resolution", "orientation"], 1],
          ["\"I'm tired,\" she said. → She said that she ___ tired.", ["is", "was", "am", "be"], 1],
          ["A motion comic is…", ["a printed newspaper", "a digital comic with movement and sound", "a song", "a speech"], 1],
          ["Fairy tales often teach us about…", ["math formulas", "growing up and values", "weather reports", "recipes"], 1]
        ]},
        { id: "u2-latihan", t: "Practice Unit 2", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["Which is a noun phrase?", ["run quickly", "a beautiful golden castle", "very fast", "and then"], 1],
          ["\"The girl who was sitting alone\" can be reduced to…", ["The girl sat alone", "The girl sitting alone", "The girl sits alone", "The alone girl sitting"], 1],
          ["Character change means…", ["the character's name changes", "the character grows or learns something", "the setting moves", "the story ends"], 1],
          ["In which part does the main problem appear?", ["Orientation", "Complication", "Coda", "Title"], 1]
        ]}
      ],
      video: [
        ["Elements of a Story", yt("elements of a story characters setting conflict")],
        ["Internal vs External Conflict", yt("internal and external conflict explanation")],
        ["Reported Speech", yt("reported speech explanation examples")],
        ["How to Make a Motion Comic", yt("how to make a motion comic tutorial")]
      ],
      inspirasi: [["🎬 Short Animated Films", yt("short animated film self discovery")]]
    },
    // ------------------------------------------------------------- UNIT 3
    u3: {
      no: "03", judul: "The Importance of Environmental Protection", jenis: "Analytical Exposition", warna: "#0a84ff", emoji: "🌍",
      desk: "Learn to give an opinion with reasons and data, the simple present, and words like because and therefore. Project: Green Street Journalism.",
      tags: ["Thesis", "CER", "Causal Conjunctions", "Green Journalism"],
      materi: `
        <h3>Analytical Exposition</h3><p>A text that presents the writer's <b>opinion</b> about an issue and supports it with <b>arguments</b>, to convince readers that the issue is important.</p>
        <h3>Generic Structure</h3><ul><li><b>Thesis</b>: the writer's position</li><li><b>Arguments</b>: reasons supported by data</li><li><b>Reiteration</b>: restating the thesis</li></ul>
        <h3>Claim–Evidence–Reasoning (CER)</h3><ul><li><b>Claim</b>: Plastic waste harms marine life.</li><li><b>Evidence</b>: Millions of tons of plastic enter the ocean every year.</li><li><b>Reasoning</b>: Animals mistake plastic for food, so they get sick or die.</li></ul>
        <h3>Language Features</h3><ul><li>Simple present tense: Trees <b>absorb</b> carbon dioxide.</li><li>Causal conjunctions: <b>because, due to, therefore, thus, as a result</b></li><li>Academic vocabulary: biodiversity, sustainability, ecosystem, emission</li></ul>`,
      aktivitas: [
        { id: "u3-asesmen", t: "Warm-up Quiz Unit 3", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["An analytical exposition aims to…", ["entertain readers", "persuade readers that an issue is important", "retell events", "describe a place"], 1],
          ["The first part of an analytical exposition is the…", ["Thesis", "Reiteration", "Orientation", "Recommendation"], 0],
          ["Which tense is mostly used?", ["Simple past", "Simple present", "Past perfect", "Future"], 1],
          ["\"Therefore\" shows…", ["a result", "a time", "a place", "a comparison"], 0],
          ["Biodiversity means…", ["the variety of living things", "a type of pollution", "a big city", "a recycling machine"], 0]
        ]},
        { id: "u3-sort", t: "Lab Text Structure", ic: "🧩", type: "sort", note: "Build the text", intro: "Put the paragraphs in the right order.", items: [
          "Thesis — Protecting the environment around our school is very important for everyone.",
          "Argument 1 — Firstly, trees around the school reduce heat and make the air cleaner.",
          "Argument 2 — Moreover, a clean environment prevents diseases such as dengue fever.",
          "Argument 3 — Furthermore, a green school helps students feel calm and focus better.",
          "Reiteration — Therefore, it is clear that protecting our school environment is essential."
        ]},
        { id: "u3-cer", t: "Lab CER Builder", ic: "🔬", type: "classify", note: "Claim, evidence, or reason?", intro: "Is it a Claim, Evidence, or Reasoning?", groups: ["Claim", "Evidence", "Reasoning"], items: [
          ["Plastic bags should be reduced in our canteen.", 0], ["Mangrove forests must be protected.", 0],
          ["Our class survey found 200 plastic bags thrown away in one week.", 1], ["Data shows mangroves can store up to four times more carbon than other forests.", 1],
          ["Because plastic takes hundreds of years to decompose, it fills our land and sea.", 2], ["Since mangroves protect the coast from waves, losing them puts villages at risk.", 2]
        ]},
        { id: "u3-game", t: "English Master Game · Unit 3", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["The last part of an analytical exposition is the…", ["Thesis", "Argument", "Reiteration", "Resolution"], 2],
          ["Choose the causal conjunction.", ["however", "due to", "although", "whereas"], 1],
          ["\"Trees absorb carbon dioxide.\" The verb is in…", ["simple present", "simple past", "future", "past perfect"], 0],
          ["A credible source is usually…", ["an anonymous meme", "a scientific journal or official report", "a random comment", "a rumor"], 1],
          ["\"Moreover\" is used to…", ["add an argument", "show contrast", "end the text", "show time"], 0],
          ["Evidence in an argument should be…", ["data or facts", "only feelings", "jokes", "questions"], 0],
          ["Sustainability means…", ["using resources so they last for the future", "wasting energy", "building more factories", "cutting trees"], 0],
          ["Green Street Journalism produces…", ["a song", "a written text and a campaign video", "a poem", "a comic"], 1]
        ]},
        { id: "u3-latihan", t: "Practice Unit 3", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["\"In conclusion, we must keep our rivers clean.\" This is the…", ["Thesis", "Argument", "Reiteration", "Orientation"], 2],
          ["Which sentence shows cause and effect?", ["The river is long.", "The river is polluted due to factory waste.", "I like rivers.", "Rivers are in Batam."], 1],
          ["Which is the best evidence?", ["I think it is bad.", "Everyone knows it.", "A 2025 report shows air pollution rose by 20%.", "My friend said so."], 2],
          ["The thesis contains…", ["the writer's main opinion", "a list of references", "a story ending", "a dialogue"], 0]
        ]}
      ],
      video: [
        ["Analytical Exposition Text", yt("analytical exposition text explanation")],
        ["Claim Evidence Reasoning (CER)", yt("claim evidence reasoning CER explained")],
        ["Causal Conjunctions", yt("cause and effect conjunctions therefore thus due to")],
        ["Evaluating Sources", yt("how to evaluate credible sources for students")]
      ],
      inspirasi: [["🎬 Environmental Campaign Videos", yt("environmental campaign video students")]]
    },
    // ------------------------------------------------------------- UNIT 4
    u4: {
      no: "04", judul: "Why Should We Live a Healthy Lifestyle?", jenis: "Hortatory Exposition", warna: "#ff5e3a", emoji: "🍎",
      desk: "Learn to persuade people, health words, modals like should and must, and logos, pathos, ethos. Project: a podcast.",
      tags: ["Recommendation", "Modals", "Logos-Pathos-Ethos", "Podcast"],
      materi: `
        <h3>Hortatory Exposition</h3><p>A text that persuades readers that something <b>should or should not be done</b>.</p>
        <h3>Generic Structure</h3><ul><li><b>Thesis</b></li><li><b>Arguments</b></li><li><b>Recommendation</b>: what readers should do</li></ul>
        <h3>Persuasive Strategies</h3><ul><li><b>Logos</b> (logic & data): Studies show teenagers need 8–10 hours of sleep.</li><li><b>Pathos</b> (emotion): Imagine how your parents feel when you are sick.</li><li><b>Ethos</b> (credibility): According to the WHO / doctors…</li></ul>
        <h3>Language Features</h3><ul><li>Modals: <b>should, must, need to, ought to</b></li><li>Persuasive phrases: <b>Let's…, It is important to…</b></li><li>Health vocabulary: hydration, nutrition, balanced diet, exercise, sleep, stress</li></ul>`,
      aktivitas: [
        { id: "u4-asesmen", t: "Warm-up Quiz Unit 4", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["A hortatory exposition ends with a…", ["Reiteration", "Recommendation", "Resolution", "Coda"], 1],
          ["Choose the modal for advice.", ["should", "did", "was", "has"], 0],
          ["\"Drink 8 glasses of water a day\" is about…", ["hydration", "pollution", "transportation", "education"], 0],
          ["A hortatory text tries to…", ["persuade readers to do something", "tell a fairy tale", "describe a person", "report news"], 0],
          ["\"Let's exercise every morning!\" is a(n)…", ["recommendation", "orientation", "complication", "thesis"], 0]
        ]},
        { id: "u4-classify", t: "Lab Logos · Pathos · Ethos", ic: "🎯", type: "classify", note: "Spot the strategy", intro: "Which strategy does each sentence use?", groups: ["Logos (facts)", "Pathos (feelings)", "Ethos (trust)"], items: [
          ["Research shows that 30 minutes of exercise lowers stress by 25%.", 0], ["Teenagers who sleep 8 hours score higher on tests.", 0],
          ["Imagine how sad your family would be if you got sick.", 1], ["Don't let junk food steal your dreams!", 1],
          ["According to the World Health Organization, teens need daily physical activity.", 2], ["As a doctor with 20 years of experience, I recommend eating more vegetables.", 2]
        ]},
        { id: "u4-sort", t: "Lab Podcast Script", ic: "🎙️", type: "sort", note: "Put the script in order", intro: "Put the podcast script in the right order.", items: [
          "Thesis — Hi listeners! Today we believe that every student should drink enough water every day.",
          "Argument 1 — First, water keeps our brain focused. Studies show dehydration lowers concentration.",
          "Argument 2 — Second, water helps our body recover after sports and keeps our skin healthy.",
          "Recommendation — So, let's bring a water bottle to school and stop buying sugary drinks!"
        ]},
        { id: "u4-game", t: "English Master Game · Unit 4", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["Analytical vs hortatory: hortatory adds a…", ["recommendation", "complication", "orientation", "coda"], 0],
          ["\"You ___ eat more fruit.\"", ["should", "did", "were", "has"], 0],
          ["\"According to doctors…\" uses the strategy of…", ["Logos", "Pathos", "Ethos", "Coda"], 2],
          ["\"Imagine losing your health forever.\" uses…", ["Logos", "Pathos", "Ethos", "Thesis"], 1],
          ["A balanced diet includes…", ["only rice", "various nutrients in the right amounts", "only snacks", "no water"], 1],
          ["Which is a recommendation?", ["Sleep is important.", "Many students sleep late.", "We must sleep at least 8 hours.", "I slept late yesterday."], 2],
          ["A good recommendation should be…", ["realistic and relevant", "impossible", "unrelated", "very long"], 0],
          ["A podcast is…", ["an audio program", "a printed poster", "a short story", "a math test"], 0]
        ]},
        { id: "u4-latihan", t: "Practice Unit 4", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["Which modal shows strong obligation?", ["might", "could", "must", "may"], 2],
          ["\"Data shows 1 in 5 teenagers is overweight.\" This is…", ["Logos", "Pathos", "Ethos", "Coda"], 0],
          ["The purpose of the recommendation is to…", ["tell readers what to do", "introduce characters", "describe the setting", "give a title"], 0],
          ["\"Let's\" is followed by…", ["V1 (base verb)", "V2", "V-ing", "to + V1"], 0]
        ]}
      ],
      video: [
        ["Hortatory Exposition Text", yt("hortatory exposition text explanation")],
        ["Modal Verbs for Advice", yt("modal verbs should must advice english")],
        ["Logos Pathos Ethos", yt("logos pathos ethos explained for students")],
        ["How to Make a Podcast", yt("how to make a podcast for students")]
      ],
      inspirasi: [["🎬 Healthy Lifestyle for Teens", yt("healthy lifestyle tips for teenagers")]]
    }
  }
};
