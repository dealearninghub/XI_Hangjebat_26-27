// =====================================================================
//  LKPD DATA (Lembar Kerja Peserta Didik) per pertemuan, Unit 1-4.
//  Sumber: Drive "TP 2026 2027 HANG JEBAT > RPPM riil Taksonomi bloom" (versi terbaru tiap TP).
//
//  Cara membaca:
//   O(soal)            = jawaban bebas (diperiksa guru)
//   F(soal, [kunci])   = isian, dicek otomatis (boleh beberapa kunci)
//   S(soal, [pilihan], kunci) = pilihan, dicek otomatis (kunci null = tidak dicek)
//   T([kolom], [[sel...]]) = tabel; sel "_" = kotak isian bebas
//   key: "..."         = kunci / contoh jawaban, muncul setelah murid menekan "Check"
// =====================================================================
const _ = null;
const O = (q, n = 2) => ({ k: "open", q, n });
const F = (q, a, why) => ({ k: "fill", q, a: [].concat(a), why });
const S = (q, o, a = null, why) => ({ k: "pick", q, o, a, why });
const T = (cols, rows) => ({ k: "table", cols, rows });
const R = (title, html) => ({ k: "read", title, html });
const B = html => ({ k: "box", html });
const C = (list, q) => ({ k: "check", q, list });
const P = html => ({ k: "p", html });
const YN = ["Yes", "No"];

// ---------- Reading texts ----------
const TXT = {
  weeping: `<p><b>Orientation.</b> A long time ago, in a small village surrounded by thick forest, there lived a kind old woman named Mai Rimba. She took care of the forest and its animals as if they were her own family. Every creature in the forest loved and trusted her.</p>
<p><b>Complication.</b> One day, a group of greedy loggers came to the village. They wanted to cut down the entire forest to sell the wood. Mai Rimba begged them to stop, warning that the forest protected the village from floods. The loggers laughed at her and continued cutting the trees.</p>
<p><b>Resolution.</b> Soon, heavy rain came, and without the trees to hold the soil, a terrible flood swept through the village. Mai Rimba cried for the lost forest and the suffering of her village. According to the legend, her tears were so many and so sincere that they formed a wide, deep lake at the edge of the forest. Since that day, the villagers have called it 'The Weeping Lake' and have protected the surrounding trees to prevent the tragedy from happening again.</p>`,
  telaga: `<p>Long ago, there was a hidden lake in Indonesia called Telaga Lestari. The lake was surrounded by a beautiful forest with a balanced ecosystem. It was the natural habitat of many animals, and the villagers believed that a mysterious forest guardian watched over the land and protected nature.</p>
<p>One day, the villagers became greedy and started cutting down many trees to build a larger settlement. Their deforestation damaged the forest, polluted the lake, and forced many animals to leave their homes. Some rare animals were even close to extinction. The villagers ignored the guardian's warning until a great storm came with strong winds and heavy rain. The storm destroyed their settlement and made them realize that their actions had harmed the balance of nature.</p>
<p>After the disaster, the villagers apologized and worked together to restore the forest and lake. They practiced conservation by planting trees, protecting wildlife, and keeping the environment clean. Slowly, the forest became healthy again, and the animals returned to their habitat. Since then, the lake has been called Telaga Lestari, meaning a place that remains preserved. The story of the forest guardian has been passed down from generation to generation as a reminder that humans must respect and protect nature.</p>`,
  setokok: `<p>A long time ago, near the coast of Batam, there was a small island where fishermen lived peacefully with the sea. The island's forest and mangroves protected the shore and gave shelter to many fish and birds.</p>
<p>One season, some fishermen began using explosives to catch fish quickly. This destroyed the coral reefs around the island. The fish disappeared, and the mangroves began to die because the reef could no longer protect them from strong waves.</p>
<p>The village elders gathered the fishermen and reminded them of their ancestors' promise to protect the sea. They stopped the harmful practice and planted new mangroves. Over time, the fish returned. The island, later called Pulau Setokok, became known as a place that stood firm ("setokok") in protecting its natural balance.</p>`,
  selara: `<p><b>Orientation.</b> In a quiet village at the edge of an old forest, there lived a girl named Kirana. She was clever and kind, but she often felt unsure of who she really was, especially when she compared herself to her louder, more confident classmates. The villagers spoke of an ancient, magical mirror hidden deep in the forest. It was said to show anyone who found it their truest reflection.</p>
<p><b>Complication.</b> One evening, curious and restless, Kirana followed a trail of glowing fireflies into the forest and found the mirror. The mirror was guarded by a gentle spirit named Selara. Then Selara told Kirana that to see her true reflection, she had to complete three trials: a trial of courage, a trial of honesty and a trial of kindness. Kirana doubted herself throughout each trial. She was certain she would fail, and twice she almost turned back, afraid that her true reflection would disappoint her.</p>
<p><b>Resolution.</b> With Selara's quiet encouragement, Kirana first faced her fear during the trial of courage. Then came the trial of honesty. Kirana had to face a truth she had been avoiding. It was difficult, but she finally stopped hiding her feelings and admitted the truth to herself for the first time. She understood that being honest did not make her weak. After that, Kirana faced the trial of kindness. She found a small creature that was lost and frightened. Instead of thinking about herself, Kirana stopped to help it. She guided the creature back to safety with patience and care. When she finally looked into the mirror, Kirana did not see someone perfect. She saw herself clearly and honestly, with both flaws and strengths. Selara smiled and said, "The mirror never changes what it shows. It only waits until you are ready to truly look."</p>
<p><b>Re-orientation / Coda.</b> The next morning, Kirana returned to her village with quiet confidence. From that day on, she no longer needed to compare herself to anyone else. She had finally learned that knowing who she truly was mattered more than being like someone else.</p>`,
  guardian: `<p><b>ORIENTATION.</b> Raka, who was a shy fisherman's son in a small village, dreamed of writing songs. Every night, he sat beside the quiet lake, where nobody could see him, and wrote lyrics in his notebook, which he kept hidden under his shirt. His father often said that a fisherman needed strong arms, not a singing voice. Raka was afraid that the villagers would laugh at him.</p>
<p><b>COMPLICATION.</b> For many weeks, Sari, the gentle guardian of the lake, listened to his humming from behind the reeds. One foggy evening, however, Raka came without his notebook and sat silently. Sari appeared above the water and asked, "Why didn't you bring your notebook tonight?" Raka answered that he had stopped writing songs. When she asked why, he said, "I have lost hope, because my father says a fisherman needs strong arms." Sari listened kindly, although the wind was getting colder.</p>
<p><b>RESOLUTION.</b> Sari told him to close his eyes and sing to the water. Slowly, Raka breathed in, and a soft melody came out. At first his voice trembled, but it grew stronger when he forgot about the villagers. At last, it rose until the whole lake glowed. Sari smiled and said that every song he had sung was safe in the water.</p>
<p><b>RE-ORIENTATION.</b> The next morning, Raka, now a confident songwriter, shared his notebook with his classmates. His father, who had listened from the doorway, told him to sing again. Raka finally understood that his voice was not weak. It was honest.</p>`,
  hot: `<p>(1) Many students at our school say the classrooms are too hot in the afternoon. I believe the main reason is the way the classrooms are built, not the weather outside.</p>
<p>(2) First, the roof is made of metal and it has no cover. At 1 p.m. the room under the metal roof was 35°C, but a room under a shaded roof was only 32°C. This shows that the roof takes in a lot of heat.</p>
<p>(3) Second, the air cannot move easily because most windows stay closed. When we opened the windows on both sides, the temperature went down by two degrees in thirty minutes. Therefore, poor ventilation keeps the heat inside.</p>
<p>(4) Third, the sun comes straight into rooms without curtains. As a result, those rooms were 2°C hotter than the rooms with curtains at noon.</p>
<p>(5) In conclusion, our classrooms are hot mainly because of their design: the roof, the windows and the air. The weather makes the problem worse, but it is not the main cause.</p>`,
  litter: `<p>(1) I think there is so much litter at our school mainly because there are not enough bins, not because students are careless.</p>
<p>(2) First, our school has only six bins for twenty classes. When we counted the bins on Monday, we found no bin near the library and no bin near the field. Students have to walk far to find one, so many of them leave their rubbish on the ground.</p>
<p>(3) Second, the bins are often full. At 10 a.m. four of the six bins were already full, and rubbish fell onto the floor. As a result, the school looks dirtier after break time.</p>
<p>(4) Third, in a short survey of 30 students, 24 said they would use a bin if it was close to them. This shows that most students want to keep the school clean.</p>
<p>(5) In conclusion, the number and the place of the bins are the main reasons for the litter. Student habits matter, but the problem starts with the way our school is organised.</p>`,
  canteen: `<p>(1) Many students at our school buy sweet sachet drinks and fried snacks every day. I believe our canteen should offer healthier choices.</p>
<p>(2) First, too much sugar is bad for our health. One sachet drink has about 24 grams of sugar, which is six teaspoons. The Ministry of Health says that we should not take more than 50 grams of sugar a day, so one drink is already almost half of the limit.</p>
<p>(3) Second, sugar and fried food make it hard to concentrate. In a survey of 30 students, 20 said they feel sleepy in class after a sweet drink and a fried snack at break time.</p>
<p>(4) Third, healthier choices can work. When our group put a sugar poster next to the drinks, 6 of 10 friends chose water. Before the poster, only 2 of 10 friends chose water.</p>
<p>(5) Therefore, the canteen should sell water and fresh fruit at a low price. Students should also read the sugar information on the label before they buy a drink. If we do this, we will feel more awake in class and we will be healthier.</p>`,
  sleep: `<p>(1) During exam week many students sleep less than six hours a night. I think students must protect their sleeping time.</p>
<p>(2) First, teenagers need eight to ten hours of sleep. When we sleep too little, our brain cannot remember new information well.</p>
<p>(3) Second, in a survey of 30 students, 22 slept less than six hours in exam week. Eighteen of them said they could not concentrate during the exam.</p>
<p>(4) Third, a good sleep schedule works. In a three-day test, five students went to bed at 10 p.m. and all of them said they felt calmer in the morning.</p>
<p>(5) Therefore, students should stop studying at 10 p.m. Parents ought to help by turning off the television at home. The school should also avoid giving big tasks during exam week.</p>`
};

const PARTS3 = ["Thesis", "Argument", "Reiteration"];
const PARTS4 = ["Thesis", "Argument", "Recommendation"];
const SELF = ["I understand", "I partly understand", "I need help"];

const LKPD = {
  // ================================================================ UNIT 1
  u1: {
    src: "unit 1/LKPD UNIT 1 · LKPD 1-6 (PDF) · LKPD Pertemuan 3-4 · Worksheet 11 August (P5-6)",
    tp: {
      "1.1": "Identify the structure (orientation, complication, resolution) and features of an environmental legend, understand nature words, and find the main idea with note-taking.",
      "1.2": "Analyse action verbs, the simple past tense and sequence words in environmental narrative texts.",
      "1.3": "Evaluate how well a narrative text works and connect its message to real places around school and Batam.",
      "1.4": "Project: create and present a picture-sequencing poster about saving the environment."
    },
    sheets: [
      {
        id: "p1", p: "Meeting 1", tp: "1.1", title: "Listening Detectives", sub: "Mapping the Structure of an Environmental Legend", mode: "Individual work, then check with a partner",
        goal: "Students can identify the generic structure (orientation, complication, resolution) of a listened environmental legend accurately and independently, before verifying their findings with a partner.",
        parts: [
          { h: "Part A · Understand", time: "First listening", items: [
            B("Listen to <i>The Legend of the Weeping Lake</i> two times. The first time, only listen. Can't hear your teacher? Open the story below."),
            R("The Legend of the Weeping Lake", TXT.weeping),
            O("1. Who is the main character in the story, and what does she do for the forest?"),
            O("2. What problem happens in the village after the loggers arrive?"),
            O("3. What does Mai Rimba's crying create at the end of the story?")
          ], key: "1. Mai Rimba, a kind old woman. She takes care of the forest and its animals like her own family.<br>2. The loggers cut down the forest. Heavy rain comes, and a terrible flood sweeps through the village.<br>3. Her tears form a wide, deep lake: the Weeping Lake." },
          { h: "Part B · Apply", time: "Second listening", items: [
            P("Listen again, part by part. Write what happens in each part and the important words you hear. Work alone first."),
            T(["Structure part", "What happens (evidence from the story)", "Key vocabulary heard"], [["Orientation", _, _], ["Complication", _, _], ["Resolution", _, _]]),
            O("After you swap with a partner, write your final, agreed answers on the three parts.", 3)
          ], key: "<b>Orientation:</b> Mai Rimba lives in a village with a thick forest and cares for it (forest, animals, creature).<br><b>Complication:</b> Greedy loggers cut down the forest; Mai Rimba begs them to stop (loggers, cut down, flood).<br><b>Resolution:</b> A flood comes, her tears form a lake, the villagers protect the trees (tears, lake, protect)." },
          { h: "Part C · Reflect", items: [
            O("1. Which part of the story (orientation, complication or resolution) was easiest for you to find? Why?"),
            O("2. What listening strategy helped you the most?")
          ] }
        ]
      },
      {
        id: "p2", p: "Meeting 2", tp: "1.1", title: "Legend Features", sub: "What makes a story a legend?", mode: "Individual work",
        goal: "Determine the features of an environment-themed legend along with supporting evidence.",
        parts: [
          { h: "Part A · Read", items: [R("The Legend of the Weeping Lake", TXT.weeping)] },
          { h: "Part B · Features of a Legend", items: [
            P("Is each feature in the story? Choose Yes or No, then copy the evidence."),
            T(["Legend feature", "In the story?", "Evidence from the text"], [
              ["Magical / supernatural elements", S("", YN, "Yes"), _],
              ["Explains the origin of something real", S("", YN, "Yes"), _],
              ["Set in a real and specific place", S("", YN, null), _],
              ["Gives a moral message", S("", YN, "Yes"), _],
              ["Oral tradition (\"it is said that...\")", S("", YN, "Yes"), _]
            ])
          ], key: "Magic: <i>her tears ... formed a wide, deep lake</i>. Origin: <i>the villagers have called it 'The Weeping Lake'</i>. Place: a small village at the edge of a forest (a real lake in the legend). Moral: <i>have protected the surrounding trees to prevent the tragedy</i>. Oral tradition: <i>According to the legend, ...</i>" },
          { h: "Homework", items: [O("Write the name of a legend from your home region (for example, from Batam). What does it explain?", 2)] }
        ]
      },
      {
        id: "p3", p: "Meeting 3", tp: "1.1", title: "Word Explorers", sub: "Text Evidence Matching", mode: "Individual work",
        goal: "Students can identify environmental thematic vocabulary (ecosystem, habitat, deforestation) in a legend they read accurately, and determine the main idea of paragraphs using a note-taking technique.",
        parts: [
          { h: "Read", items: [R("The Legend of the Weeping Lake", TXT.weeping)] },
          { h: "Part A · Text Evidence", items: [
            P("Find one sentence from the story that proves each word's meaning. <i>Deforestation</i> is done for you."),
            T(["Word", "Meaning", "Text evidence (quote from the story)"], [
              ["Ecosystem", "Living things and their world", _],
              ["Habitat", "A home for a plant or animal", _],
              ["Deforestation", "Cutting down many trees", "<i>They wanted to cut down the entire forest to sell the wood.</i>"],
              ["Conservation", "Taking care of nature", _],
              ["Extinction", "Not written directly. Why might animals face extinction if this happened again and again?", _]
            ])
          ], key: "Ecosystem: <i>a small village surrounded by thick forest ... the forest protected the village from floods.</i><br>Habitat: <i>She took care of the forest and its animals.</i><br>Conservation: <i>the villagers ... have protected the surrounding trees.</i><br>Extinction: if forests are cut again and again, animals lose their homes and food, so they can die out." },
          { h: "Part B · Your Sentence", items: [O("Write one sentence using at least 2 new words.")] },
          { h: "Part C · Reflect", items: [O("1. Which word was the easiest for you? Why?"), O("2. What helped you find evidence for a word?")] }
        ]
      },
      {
        id: "p4", p: "Meeting 4", tp: "1.1", title: "Idea Hunters", sub: "Note-Taking and Main Idea", mode: "Group work (3-4 students)",
        goal: "Determine the main idea of each part of a legend using note-taking (Three Magic Questions).",
        parts: [
          { h: "Read", items: [R("The Legend of the Weeping Lake", TXT.weeping)] },
          { h: "Part A · Our Notes", items: [
            S("Which part did your group get?", ["Orientation", "Complication", "Resolution"]),
            B("<b>Three Magic Questions:</b> 1. WHO / WHAT is this paragraph about? 2. WHAT HAPPENED? 3. WHAT WAS THE RESULT?"),
            T(["Question", "Our answer"], [["1. Who / what is it about?", _], ["2. What happened?", _], ["3. What was the result?", _]]),
            O("Keywords and margin notes", 2),
            O("Our main idea (one sentence)", 2)
          ], key: "Orientation: Mai Rimba lovingly took care of the forest and its animals.<br>Complication: Greedy loggers cut down the forest and ignored Mai Rimba's warning.<br>Resolution: A flood came, Mai Rimba's tears formed the Weeping Lake, and the villagers began to protect the trees." },
          { h: "Part B · Main Ideas from Other Groups", items: [T(["Part", "Main idea"], [["Orientation", _], ["Complication", _], ["Resolution", _]])] },
          { h: "Part C · Reflect", items: [O("1. Was your main idea the same as the class answer? What did you change?"), O("2. What did you do to help your group today?")] }
        ]
      },
      {
        id: "p5", p: "Meeting 5", tp: "1.2", title: "Past Tense Builders", sub: "V1 → V2 (Simple Past Tense)", mode: "Individual work (quiet)",
        goal: "Students can identify the simple past tense form of regular and irregular action verbs and apply the rule correctly in sentences about a narrative text.",
        parts: [
          { h: "Grammar Wall", items: [B("<b>Regular verbs:</b> add -ed. live → lived, cry → cried, want → wanted, beg → begged.<br><b>Irregular verbs:</b> the word changes. Learn them by heart. go → went, see → saw, come → came, take → took.")] },
          { h: "Part A · Warm-up: V2", items: [
            T(["Verb 1", "Verb 2", "Verb 1", "Verb 2"], [
              ["live", F("", "lived"), "go", F("", "went")],
              ["cry", F("", "cried"), "see", F("", "saw")],
              ["want", F("", "wanted"), "come", F("", "came")],
              ["beg", F("", "begged"), "take", F("", "took")]
            ])
          ] },
          { h: "Part B · Your 10 Sentences", items: [
            P("Rewrite each sentence in the simple past tense."),
            F("1. The villagers live near a beautiful forest.", "The villagers lived near a beautiful forest."),
            F("2. A guardian watches over the land.", "A guardian watched over the land."),
            F("3. The villagers cut down many trees.", "The villagers cut down many trees.", "cut → cut (the same form in V1 and V2)."),
            F("4. The storm destroys their settlement.", "The storm destroyed their settlement."),
            F("5. They apologize and work together.", ["They apologized and worked together.", "They apologised and worked together."]),
            F("6. The animals leave their habitat.", "The animals left their habitat."),
            F("7. The forest becomes healthy again.", "The forest became healthy again."),
            F("8. The villagers plant new trees.", "The villagers planted new trees."),
            F("9. The lake stays clean and calm.", "The lake stayed clean and calm."),
            F("10. People tell this story to their children.", "People told this story to their children.")
          ] }
        ]
      },
      {
        id: "p6", p: "Meeting 6", tp: "1.2", title: "Verb Detectives", sub: "Action Verbs in Two Environmental Legends", mode: "Individual work, then check with a partner",
        goal: "Students can identify and classify action verbs (regular/irregular) in two environmental legends, and compare their use of the simple past tense.",
        parts: [
          { h: "Part A · Text 1: The Legend of Telaga Lestari", time: "15 minutes", items: [
            R("The Legend of Telaga Lestari", TXT.telaga),
            P("List the action verbs. Write the base form (V1) and choose Regular or Irregular."),
            T(["Action verb found", "Base form (V1)", "Regular / Irregular"], Array.from({ length: 8 }, () => [_, _, S("", ["Regular", "Irregular"])]))
          ], key: "Regular: watched, protected, started, damaged, polluted, forced, ignored, destroyed, realized, harmed, apologized, worked, practiced, returned, passed.<br>Irregular: became (become), came (come), made (make)." },
          { h: "Part B · Text 2: The Legend of Pulau Setokok", time: "15 minutes", items: [
            R("The Legend of Pulau Setokok", TXT.setokok),
            T(["Action verb found", "Base form (V1)", "Regular / Irregular"], Array.from({ length: 8 }, () => [_, _, S("", ["Regular", "Irregular"])]))
          ], key: "Regular: lived, protected, destroyed, disappeared, gathered, reminded, stopped, planted, returned.<br>Irregular: gave (give), began (begin), could (can), became (become), stood (stand)." },
          { h: "Part C · Reflect (with a partner)", time: "5 minutes", items: [
            O("1. Which text uses more irregular verbs? Give two examples."),
            O("2. What is similar between the two legends' use of action verbs?")
          ], key: "Text 2 (Pulau Setokok) has more irregular verbs for its length: gave, began, became, stood. Both texts use the simple past for finished events and many action verbs to move the story." }
        ]
      },
      {
        id: "p7", p: "Meeting 7", tp: "1.2", title: "Grammar in Legends", sub: "Past Tense, Action Verbs and Sequence Words", mode: "Individual work",
        goal: "Students can change present tense sentences into the simple past, classify action verbs, and write a summary with action verbs and sequence words.",
        parts: [
          { h: "Part A · Present to Past", time: "6 minutes", items: [
            F("1. The villagers live near a beautiful forest.", "The villagers lived near a beautiful forest."),
            F("2. A guardian watches over the land.", "A guardian watched over the land."),
            F("3. The villagers cut down many trees.", "The villagers cut down many trees."),
            F("4. The storm destroys their settlement.", "The storm destroyed their settlement."),
            F("5. They apologize and work together.", ["They apologized and worked together.", "They apologised and worked together."]),
            F("6. The forest becomes healthy again.", "The forest became healthy again.")
          ] },
          { h: "Part B · Action Verb Spotting", time: "6 minutes", items: [
            R("Complication · The Legend of Telaga Lestari", "<p>One day, the villagers became greedy and started cutting down many trees to build a larger settlement. Their deforestation damaged the forest, polluted the lake, and forced many animals to leave their homes. Some rare animals were even close to extinction. The villagers ignored the guardian's warning until a great storm came with strong winds and heavy rain. The storm destroyed their settlement and made them realize that their actions had harmed the balance of nature.</p>"),
            T(["Action verb", "Base form (V1)", "Regular / Irregular"], Array.from({ length: 6 }, () => [_, _, S("", ["Regular", "Irregular"])]))
          ], key: "became (become, irregular), started, damaged, polluted, forced, ignored, destroyed, harmed (regular), came (come, irregular), made (make, irregular)." },
          { h: "Part C · Storyteller's Choice", time: "25 minutes", items: [
            S("Choose ONE story from your LKS:", ["The Day the Sun Went Hiding (page 17)", "The Day the River Dried (page 18)"]),
            O("Write 2-3 sequence words you found in the text.", 1),
            O("Write a summary of your story (5-8 sentences).", 6),
            C(["I used at least 5 action verbs in the simple past.", "I used at least 3 sequence words.", "My summary has 5-8 sentences."], "Self-check")
          ] }
        ]
      },
      {
        id: "p8", p: "Meeting 8", tp: "1.2", title: "Sequence Words and Writing", sub: "Retell a legend from your home region", mode: "Individual work with teacher help",
        goal: "Use sequence words to show the order of events, and rewrite a short story with all three language features.",
        parts: [
          { h: "Part A · Sequence Words", items: [
            P("Retell a legend from your home region with these sequence words."),
            T(["Sequence word", "Event sentence"], [["First / At first, ...", _], ["Then / Next / After that, ...", _], ["Suddenly, ...", _], ["Finally / From that day on, ...", _]])
          ] },
          { h: "Part B · Integrated Writing", items: [
            O("Rewrite the legend (or a real environmental event) in one short paragraph of 4-6 sentences. Use action verbs, the simple past and sequence words.", 6),
            C(["I used action verbs.", "All verbs are in the simple past.", "I used sequence words.", "My paragraph has 4-6 sentences."], "Check my paragraph")
          ] }
        ]
      },
      {
        id: "p9", p: "Meeting 9", tp: "1.3", title: "Text Evaluators", sub: "How well does the text work?", mode: "Individual work",
        goal: "Evaluate the structure and language of a narrative text with criteria, and give a score with reasons and evidence.",
        parts: [
          { h: "Read", items: [R("The Legend of Telaga Lestari", TXT.telaga)] },
          { h: "Part A · Evaluate the Text", items: [
            P("Give a score of 1-4 for each criterion. Write your reason or evidence."),
            T(["Criteria", "Guiding question", "Score", "Reason / evidence"], [
              ["Clear structure", "Are the orientation, complication and resolution easy to find?", S("", ["1", "2", "3", "4"]), _],
              ["Correct language", "Are action verbs, past tense and sequence words used correctly?", S("", ["1", "2", "3", "4"]), _],
              ["Clear message", "Is the moral or environmental message clear?", S("", ["1", "2", "3", "4"]), _],
              ["Believable", "Are the characters' actions and the ending believable?", S("", ["1", "2", "3", "4"]), _]
            ])
          ] }
        ]
      },
      {
        id: "p10", p: "Meeting 10", tp: "1.3", title: "Reflective Thinkers", sub: "Text-to-World Connection", mode: "Small group (3-4 students)",
        goal: "Connect the story's message to real environmental conditions around school and Batam.",
        parts: [
          { h: "Part B · Text-to-World Connection", items: [
            P("Talk in your group, then write your own answer."),
            O("1. This part of the story reminds me of ... (name a real place, event or habit)"),
            O("2. In real life, this problem happens when ... (explain the real cause)"),
            O("3. If people in real life acted like the villagers in the resolution, then ... (explain the likely result)")
          ] }
        ]
      },
      {
        id: "p11", p: "Meeting 11-12", tp: "1.4", title: "Poster Planner 1", sub: "Picture Planning", mode: "Group project",
        goal: "Arrange a series of pictures about a real environmental issue into a four-stage narrative structure.",
        parts: [
          { h: "Our Group", items: [T(["Role", "Name"], [["Illustrator", _], ["Narration writer", _], ["Presenter", _], ["Member", _]])] },
          { h: "Part A · Picture Planning", items: [
            T(["Stage", "What it shows", "Our picture idea"], [
              ["1. Orientation", "The normal condition of the school environment.", _],
              ["2. Complication", "The environmental problem that appears.", _],
              ["3. Climax", "The biggest impact of the problem.", _],
              ["4. Resolution", "How the problem is solved + the moral lesson.", _]
            ])
          ] }
        ]
      },
      {
        id: "p13", p: "Meeting 13-14", tp: "1.4", title: "Poster Planner 2", sub: "Writing the Poster Narration", mode: "Group project",
        goal: "Write the narration for each stage with action verbs, the simple past and sequence words.",
        parts: [
          { h: "Part B · Narration", items: [
            T(["Stage", "Sentence starter", "Our narration"], [
              ["Orientation", "In our school, students usually ...", _],
              ["Complication", "One day, we noticed that ...", _],
              ["Climax", "The problem became worse when ...", _],
              ["Resolution", "Finally, we decided to ...", _],
              ["Moral lesson", "(use the simple present)", _]
            ]),
            C(["We used action verbs in the simple past.", "We used sequence words (one day, then, finally).", "The moral lesson is in the simple present."])
          ] }
        ]
      },
      {
        id: "p15", p: "Meeting 15-16", tp: "1.4", title: "Poster Presentation", sub: "Presentation Preparation", mode: "Group project",
        goal: "Present the illustrated story orally with confidence.",
        parts: [
          { h: "Part C · My Presentation Script", items: [
            T(["Part", "Sentence frame", "What I will say"], [
              ["Opening", "\"Good morning, everyone. Our story is about ...\"", _],
              ["Body", "\"First, ... Then, ... After that, ... Finally, ...\"", _],
              ["Closing", "\"The moral lesson of our story is ... Thank you for listening.\"", _]
            ]),
            C(["I speak loudly and clearly.", "I look at the audience.", "I point to the pictures.", "I finish in 3-5 minutes with my group."], "Practice check")
          ] }
        ]
      }
    ]
  },

  // ================================================================ UNIT 2
  u2: {
    src: "unit 2/FIXXXXX/versi bdr fix: TP 2.1 (19 Okt), FIX BGT TP 2.2 (28 Okt) + Kunci Jawaban, new_7nov TP 2.3 (7 Nov), FIX BGT TP 2.4 (28 Okt)",
    tp: {
      "2.1": "Identify the structure and understand the story elements (characters, setting, internal and external conflict, resolution) and the main character's change in a fairy tale, connected to teenagers' search for identity.",
      "2.2": "Understand fantastic beings / well-being words and analyse noun phrases, adverbs, clauses, reduced adjective clauses and reported speech.",
      "2.3": "Plan (C6, early stage) a four-part comic story with a Coda, a panel script and a fair task plan for a motion comic.",
      "2.4": "Create and present a motion comic (2-3 minutes) about self-discovery, with the simple past, correct dialogue and a clear Coda."
    },
    sheets: [
      {
        id: "p19", p: "Meeting 19-20", tp: "2.1", title: "Story Mapping", sub: "Structure, Elements and Conflict of The Mirror of Selara", mode: "Individual work",
        goal: "TP 2.1: Students can identify (C1) the generic structure and understand (C2) the story elements and the main character's change in a fairy tale/fantasy text, connecting them to real teenage experiences in the search for identity.",
        parts: [
          { h: "Read", items: [B("Four parts of a narrative: <b>Orientation</b> (who, where, when), <b>Complication</b> (the problem), <b>Resolution</b> (the problem is solved), <b>Coda</b> (the lesson or the character's change)."), R("The Mirror of Selara", TXT.selara)] },
          { h: "Part B1 · Map the Story", time: "20 minutes", items: [
            T(["Structure / element", "What we found", "Evidence (words from the text)"], [
              ["Orientation: character(s) and setting", _, _],
              ["Complication: internal conflict", _, _],
              ["Complication: external conflict", _, _],
              ["Resolution", _, _],
              ["Re-orientation / Coda (optional)", _, _]
            ])
          ], key: "Orientation: Kirana, clever and kind; a quiet village at the edge of an old forest (<i>there lived a girl named Kirana</i>).<br>Internal: self-doubt (<i>Kirana doubted herself throughout each trial</i>).<br>External: three trials from Selara (<i>she had to complete three trials</i>).<br>Resolution: she faces courage, honesty and kindness and sees herself clearly (<i>She saw herself clearly and honestly</i>).<br>Coda: <i>she no longer needed to compare herself to anyone else</i>." },
          { h: "Part B2 · Conflict and Change", time: "10 minutes", items: [
            P("Internal = a problem inside the character (fear, doubt). External = a problem from outside (a person, an event). Change = how is she different at the end?"),
            T(["Character", "Conflict / change", "Type", "Why?"], [
              ["Kirana", _, S("", ["Internal", "External", "Change"], "Internal"), _],
              ["Selara", _, S("", ["Internal", "External", "Change"], "External"), _],
              ["Kirana's self-doubt", _, S("", ["Internal", "External", "Change"], "Change"), _]
            ])
          ], key: "Kirana: she feels unsure of who she is and compares herself to others (internal).<br>Selara: she gives Kirana three trials, a challenge from outside (external).<br>Self-doubt → change: at the end Kirana returns with quiet confidence and stops comparing herself." },
          { h: "Part C · Reflect", time: "3 minutes", items: [O("Which conflict is more like yours, internal or external? Think of yourself, a friend, or a character from a film or a book. Why?", 3)] }
        ]
      },
      {
        id: "p21", p: "Meeting 21-24", tp: "2.2", title: "Language Detective", sub: "Narrative Text: The Guardian of the Lake (homework)", mode: "Individual work at home",
        goal: "Students can classify clauses, reduce adjective clauses, report speech, correct common mistakes, join sentences into complex sentences, evaluate language choices in a narrative text, and write a four-part narrative about self-discovery.",
        parts: [
          { h: "Memory Box", items: [B(`<b>Phrase vs clause:</b> a PHRASE has no subject + verb (the old wooden boat; slowly). A CLAUSE has a subject + verb (Raka sang).<br>
<b>Clause:</b> independent = can stand alone. Dependent = fails the "and then what?" test: adverbial (when, because, although, until, so that), adjective (who, which, that, whose, where), noun (that).<br>
<b>Complex sentence:</b> 1 independent + at least 1 dependent clause. Adverbial clause at the FRONT takes a comma. <i>Although it was cold, Sari listened.</i><br>
<b>Reduction:</b> only with who/which + be. <i>Raka, who was shy, sang. = Raka, shy, sang.</i> Whose, where, or no "be" = NO.<br>
<b>Reported speech:</b> tense goes back (am/is → was, can → could, will → would), pronouns change (I → he/she), time words change (tomorrow → the next day). Yes/no question: asked if. Wh- question: normal word order. Command: told + person + (not) to + verb.`), R("The Guardian of the Lake", TXT.guardian)] },
          { h: "Part A1 · Clauses", time: "Part A: 20 minutes", items: [
            P("Choose the type: IND (independent), ADJ (adjective clause), ADC (adverbial clause) or NOUN (noun clause). Write the connector and short evidence. <i>Example: ... which he kept hidden under his shirt ... = ADJ (which, describes \"notebook\").</i>"),
            T(["No.", "Item from the text", "Type", "Evidence"], [
              ["1", "... who was a shy fisherman's son in a small village ...", S("", ["IND", "ADJ", "ADC", "NOUN"], "ADJ", "who, describes \"Raka\" (a person)"), _],
              ["2", "... because my father says a fisherman needs strong arms ...", S("", ["IND", "ADJ", "ADC", "NOUN"], "ADC", "because, gives the reason"), _],
              ["3", "... where nobody could see him ...", S("", ["IND", "ADJ", "ADC", "NOUN"], "ADJ", "where, describes \"the lake\" (a place)"), _],
              ["4", "Sari appeared above the water.", S("", ["IND", "ADJ", "ADC", "NOUN"], "IND", "no connector; subject = Sari, verb = appeared"), _],
              ["5", "... although the wind was getting colder.", S("", ["IND", "ADJ", "ADC", "NOUN"], "ADC", "although, shows contrast"), _],
              ["6", "... until the whole lake glowed.", S("", ["IND", "ADJ", "ADC", "NOUN"], "ADC", "until, shows the time limit"), _],
              ["7", "... that his voice was not weak ...", S("", ["IND", "ADJ", "ADC", "NOUN"], "NOUN", "that, the object of \"understood\""), _],
              ["8", "... that a fisherman needed strong arms ...", S("", ["IND", "ADJ", "ADC", "NOUN"], "NOUN", "that, the object of \"said\""), _]
            ]),
            F("Think: in A1, which numbers are dependent clauses?", ["1, 2, 3, 5, 6, 7, 8", "1,2,3,5,6,7,8", "1 2 3 5 6 7 8"], "They fail the \"and then what?\" test: the reader waits for the main clause.")
          ] },
          { h: "Part A2 · Narrative Structure", items: [
            T(["Story part", "One sentence from the text (first 6 words)", "Signal word or phrase"], [["Orientation", _, _], ["Complication", _, _], ["Resolution", _, _], ["Re-orientation", _, _]])
          ], key: "Orientation: <i>Raka, who was a shy fisherman's son ...</i> (every night, often).<br>Complication: <i>One foggy evening, however, Raka came ...</i> (one foggy evening, however).<br>Resolution: <i>Sari told him to close his eyes ...</i> (slowly, at first, at last).<br>Re-orientation: <i>The next morning, Raka, now a confident ...</i> (the next morning, finally)." },
          { h: "Part B1 · Reducing Adjective Clauses", time: "Part B: 35 minutes", items: [
            P("Remove who/which + be and keep the commas. If it is not possible, write NO and the reason. <i>Example: Dimas, who was the leader of the team, spoke first. → Dimas, the leader of the team, spoke first.</i>"),
            F("1. Raka, who was a shy fisherman's son, dreamed of writing songs.", "Raka, a shy fisherman's son, dreamed of writing songs.", "who + was removed"),
            F("2. His notebook, which was full of lyrics, stayed under his shirt.", "His notebook, full of lyrics, stayed under his shirt.", "which + was removed"),
            F("3. He sat beside the quiet lake, where nobody could see him.", "/^no\\b/", "NO: \"where\" is not who/which + be."),
            F("4. Sari, whose voice was gentle, listened kindly.", "/^no\\b/", "NO: \"whose\" shows possession; it cannot be removed."),
            F("5. Sari, who was hiding behind the reeds, listened to his humming.", "Sari, hiding behind the reeds, listened to his humming.", "who + was removed, keep \"hiding\""),
            F("6. His father, who had listened from the doorway, smiled.", "/^no\\b/", "NO: there is no \"be\" (had listened).")
          ] },
          { h: "Part B2 · Reported Speech", items: [
            P("Check tense, pronouns and time words. Questions: normal word order, no question mark. <i>Example: Dimas asked, \"What should I say?\" → Dimas asked what he should say.</i>"),
            F("1. Raka said, \"I have lost hope.\"", "Raka said that he had lost hope."),
            F("2. Sari asked, \"Why didn't you bring your notebook tonight?\"", ["Sari asked why he had not brought his notebook that night.", "Sari asked why Raka had not brought his notebook that night."]),
            F("3. Sari told Raka, \"Close your eyes.\"", "Sari told Raka to close his eyes."),
            F("4. Raka said, \"I will sing tomorrow.\"", ["Raka said that he would sing the next day.", "Raka said that he would sing the following day."]),
            F("5. Sari asked, \"Are you ready?\"", ["Sari asked if he was ready.", "Sari asked whether he was ready.", "Sari asked if Raka was ready.", "Sari asked whether Raka was ready."]),
            F("6. His father said, \"A fisherman needs strong arms.\"", "His father said that a fisherman needed strong arms.")
          ] },
          { h: "Part B3 · Common Mistakes", items: [
            P("Each sentence has ONE mistake. Write the correct sentence. <i>Example: Tika told to Nadia open the book. → Tika told Nadia to open the book.</i>"),
            F("1. Sari said me that she was a guardian.", ["Sari told me that she was a guardian.", "Sari said to me that she was a guardian.", "Sari said that she was a guardian."], "tell + person; \"said me\" is wrong (say + that)."),
            F("2. Raka asked what was his name.", "Raka asked what his name was.", "Reported question: normal word order (subject + verb)."),
            F("3. Raka, who a shy boy, loved songs.", ["Raka, who was a shy boy, loved songs.", "Raka, a shy boy, loved songs."], "who needs a verb; or remove who + be."),
            F("4. Because he was afraid he stayed silent.", "Because he was afraid, he stayed silent.", "Comma after a front adverbial clause."),
            F("5. The light which glowing lit the lake.", ["The light which was glowing lit the lake.", "The light glowing lit the lake.", "The glowing light lit the lake."], "which + be + -ing; keep \"be\" or remove both.")
          ] },
          { h: "Part B4 · Complex Sentences", items: [
            P("Join the two sentences with the word in brackets. Number 2 starts with the connector (use a comma)."),
            F("1. Raka hid his notebook. He felt shy. (because)", ["Raka hid his notebook because he felt shy.", "Because he felt shy, Raka hid his notebook."]),
            F("2. The wind was getting colder. Sari listened kindly. (although)", "Although the wind was getting colder, Sari listened kindly."),
            F("3. Raka kept singing. The lake glowed. (until)", "Raka kept singing until the lake glowed."),
            F("4. Raka writes songs every day. He can improve his voice. (so that)", "Raka writes songs every day so that he can improve his voice.")
          ] },
          { h: "Part C · Critical Thinking", time: "35 minutes", items: [
            O("C1. Analyze. The writer uses direct speech for Sari's question but reported speech for Raka's first answer. Why? What would change if ALL the dialogue were reported?", 3),
            O("C2. Evaluate. Compare (a) \"Raka, who was a shy fisherman's son, dreamed of writing songs.\" and (b) \"Raka, a shy fisherman's son, dreamed of writing songs.\" Same meaning? Which is better in a story, and why? Name ONE sentence that cannot be reduced and explain the rule.", 3),
            O("C3. Find the error. Dina wrote: \"Sari told that Raka should close his eyes.\" Is it correct? Correct it and explain the rule.", 3),
            O("C4. Create. \"Raka finally understood that his voice was not weak. It was honest.\" Does the writer SHOW or TELL? Rewrite the ending in 2 sentences with one reported speech or one adverbial clause.", 3)
          ], key: "C1: Direct speech makes the moment real and shows emotion; reported speech summarizes and keeps the story moving. All reported = shorter but flatter.<br>C2: Same meaning; (b) is smoother, (a) is clearer. Cannot reduce: <i>... the quiet lake, where nobody could see him</i> (where) or <i>His father, who had listened ...</i> (no be).<br>C3: Not correct → <i>Sari told Raka to close his eyes.</i> Rule: tell + person + to + verb.<br>C4: It TELLS. Model: <i>Raka smiled, and his hands stopped shaking. He told Sari that he would write a new song the next day.</i>" },
          { h: "Part C5 · My Own Story", items: [
            P("Write 6-8 sentences in the simple past about a moment of self-discovery (you, someone else, or an invented character). The idea must be your own."),
            T(["Story part", "My sentences"], [["Orientation: who, where, when?", _], ["Complication: what was the problem?", _], ["Resolution: how was it solved?", _], ["Re-orientation: what did the character discover? SHOW it.", _]]),
            T(["Language feature", "My example sentence"], [["2 noun phrases", _], ["1 adverb or sequence word", _], ["1 adjective clause or reduced clause", _], ["1 adverbial clause", _], ["1 reported speech sentence (+ the direct speech)", _]])
          ] }
        ]
      },
      {
        id: "p25", p: "Meeting 25-28", tp: "2.3", title: "Story Planner", sub: "Discovery of Ourselves (motion comic plan)", mode: "Group work at home (5-6 students), Step 1 to Step 7",
        goal: "Students can create (C6, early stage) a four-part comic story planner with a main character, a magical element, a Coda, a handwritten panel script, and a fair task plan for the motion comic.",
        parts: [
          { h: "Our Group", items: [T(["Role", "Name"], [["Writer", _], ["Illustrator", _], ["Layout", _], ["Voice & video editor", _], ["2nd illustrator", _], ["2nd editor", _]])] },
          { h: "Step 1 · Choose the Story", items: [
            S("Story source", ["Option 1: a member's own story (the writer agrees)", "Option 2: a storyline card"]),
            O("Which story / card? Why did we choose it? What names or details will we change?"),
            O("Our message for the audience (what should people learn from our comic?)")
          ] },
          { h: "Step 2 · Make the Character", items: [
            P("Our comic is a fantasy story, so add ONE magical element. Tip: the magic only HELPS. The main character makes the final decision."),
            T(["Character profile", "Our character", "Example (Raka)"], [
              ["Name and age", _, "Raka, 16"], ["Personality", _, "Quiet, kind, loves making short films"],
              ["Struggle at the beginning", _, "Thinks his hobby is not important, fears disappointing his father"],
              ["What the character wants", _, "To feel proud of his hobby"], ["Magical element", _, "A spirit in his grandfather's old camera"],
              ["Helper", _, "The spirit in the old camera"], ["Problem (what stops the character)", _, "His fear of disappointing his father"]
            ])
          ] },
          { h: "Step 3 · Four-Part Story Planner", items: [
            P("Write 1-2 sentences for each part in the simple past. <i>Example Coda: The next Saturday, Raka and his father walked to Grandma's shop, each with a camera.</i>"),
            T(["Part", "Hint questions", "Our answer (simple past)", "Language tool"], [
              ["1. Orientation", "Who? Where? What is normal? What is the problem?", _, _],
              ["2. Complication", "What does the character try? Why does it fail? Where does the magic appear?", _, _],
              ["3. Resolution", "What is the turning point? How does the magic help? What does the character decide?", _, _],
              ["4. Coda", "What did the character discover? SHOW it, do not write \"she changed\".", _, _]
            ]),
            P("<small>Language tools: noun phrase, adverb or sequence word, adjective clause (or reduced), adverbial clause, reported speech.</small>")
          ] },
          { h: "Step 4 · Panel Script", items: [
            P("Cut the story into 6-10 panels. Narration = simple past. Dialogue = direct speech in quotation marks (at least 2 panels). Write the FULL script by hand on paper."),
            T(["Panel", "Part", "What we see (picture idea)", "Written by", "Recorded by"], Array.from({ length: 10 }, (_x, i) => [String(i + 1), _, _, _, _]))
          ] },
          { h: "Step 5 · Roles, Tasks and Plan", items: [
            T(["Task", "Person in charge", "Target date"], [["Writing the narration and dialogue", _, _], ["Creating pictures", _, _], ["Arranging the panels in Canva", _, _], ["Recording the voices", _, _], ["Combining and editing the video (2 minutes)", _, _]])
          ] },
          { h: "Step 6 · Pitch Sentence", items: [O("Our story is about [name], [noun phrase], who [problem].", 2)] },
          { h: "Step 7 · Check and Upload", items: [C([
            "The four parts are filled in and use the simple past.", "The magical element appears and the magic only helps.",
            "The main character makes the final decision.", "The Coda SHOWS what the character discovers.",
            "Every name appears in Written by and Recorded by.", "The full panel script is handwritten and the photos are clear."
          ])] }
        ]
      },
      {
        id: "p29", p: "Meeting 29-32", tp: "2.4", title: "Mini Cinema", sub: "Peer Assessment Sheet", mode: "Individual work, 2 class meetings",
        goal: "Give a fair score and a polite comment on a friend's motion comic, ask one relevant question, and write a Coda paragraph that shows how the character changed.",
        parts: [
          { h: "Part A · Prepare Your Question", time: "3 minutes", items: [
            O("I ask questions to Group ... (write the group number)", 1),
            B("Question frames: \"Where did your character fail, and how did he or she get better?\" / \"What did your character discover in the Coda?\" / \"Why did you choose ... as the helper?\""),
            O("My question:")
          ] },
          { h: "Part B · Watch and Score", items: [
            P("Score every group (1 = not clear yet, 2 = quite clear, 3 = clear, 4 = very clear). Then write one thing you like. <i>Example: I like your Coda because it shows how the character changed.</i>"),
            T(["Group", "Story is clear", "Voices are clear", "Answers questions well", "One thing I like"], Array.from({ length: 8 }, (_x, i) => [`Group ${i + 1}`, S("", ["1", "2", "3", "4"]), S("", ["1", "2", "3", "4"]), S("", ["1", "2", "3", "4"]), _]))
          ] },
          { h: "Part D · My Coda Paragraph", time: "15 minutes", items: [
            P("Write 3-4 sentences in the simple past about the main character in your group's video. By HAND in class. Do not write \"she changed\". SHOW the change. <i>Example: After that night, Dimas opened the form again and wrote 'Biology'.</i>"),
            O("My Coda:", 4),
            C(["simple past", "it SHOWS the change", "3-4 sentences", "my own words"], "Check my Coda")
          ] },
          { h: "Part C · Reflect", time: "5 minutes", items: [
            O("1. Which motion comic (not your group's) did you like the most? Why?"),
            O("2. What is one idea from another group that you want to use in your next project?"),
            O("3. Did you use AI? What did you do YOURSELF, and what did AI help with?")
          ] }
        ]
      }
    ]
  },

  // ================================================================ UNIT 3
  u3: {
    src: "unit 3_new/LKPD_TP3.1_Pertemuan35-38, LKPD_TP3.2_Pertemuan39-42, LKPD_TP3.3_Pertemuan43-44 · RPM_TP3.4_Pertemuan45-50",
    tp: {
      "3.1": "Identify the structure (thesis, arguments, reiteration) of an analytical exposition and understand words about school environmental problems, linked to the real question \"Why are our classrooms so hot?\" at SMA Negeri 1 Batam.",
      "3.2": "Analyse the simple present, data sentences, causal connectors (because of, due to, so, therefore, as a result) and Claim-Evidence-Reasoning, using temperature data we collected ourselves.",
      "3.3": "Evaluate how strong and accurate arguments are: is the data enough, are the sources reliable, is there bias?",
      "3.4": "Project (Green Street Journalism): create an analytical exposition text and a campaign video (Reels/TikTok) from our own data."
    },
    sheets: [
      {
        id: "p35", p: "Meeting 35", tp: "3.1", title: "Word Explorers", sub: "Words for a Hot Classroom", mode: "Individual work, then check with a partner",
        goal: "3.1.1 match ten words about a hot classroom with their meanings · 3.1.2 use the new words in sentences · 3.1.3 write a first guess about the cause of the heat.",
        parts: [
          { h: "Part A · Word Match", time: "10 minutes", items: [
            B("a. a place that the sun cannot reach · b. the reason why something happens · c. to take in heat, light or water · d. how hot or cold something is · e. to send heat or light back · f. the way fresh air moves in and out of a room · g. the energy or feeling that makes things hot · h. the top cover of a building · i. a piece of cloth that covers a window · j. light from the sun"),
            T(["Word", "Letter"], [["1. temperature", "d"], ["2. ventilation", "f"], ["3. absorb", "c"], ["4. reflect", "e"], ["5. shade", "a"], ["6. cause", "b"], ["7. heat", "g"], ["8. roof", "h"], ["9. curtain", "i"], ["10. sunlight", "j"]].map(([w, a]) => [w, S("", "abcdefghij".split(""), a)]))
          ] },
          { h: "Part B · Words in Our Classroom", time: "15 minutes", items: [
            B("temperature · ventilation · absorb · reflect · shade · cause · heat · roof · curtain · sunlight"),
            F("1. At 1 p.m. the ____ in our classroom is 35 degrees.", "temperature"),
            F("2. Poor ____ keeps the hot air inside the room.", "ventilation"),
            F("3. A dark metal roof can ____ a lot of heat.", "absorb"),
            F("4. White paint can ____ sunlight, so the room stays cooler.", "reflect"),
            F("5. The big tree gives ____ to the classrooms on the left.", "shade"),
            F("6. What is the main ____ of the heat in our room?", "cause"),
            F("7. The ____ of the afternoon makes many students sleepy.", "heat"),
            F("8. The ____ of our building is made of metal.", "roof"),
            F("9. A ____ can block the sun from the window.", "curtain"),
            F("10. ____ comes straight into the room at noon.", "sunlight")
          ] },
          { h: "Part C · My First Guess", time: "5 minutes", items: [
            S("How hot is your classroom now?", ["1 (cool)", "2", "3", "4", "5 (very hot)"]),
            O("What do you think is the main cause of the heat? Give one reason.")
          ] }
        ]
      },
      {
        id: "p36", p: "Meeting 36", tp: "3.1", title: "Sentence Builders", sub: "Because, So, Although", mode: "Individual (Part A), group (Part B)",
        goal: "3.1.4 join two sentences with because, so or although · 3.1.5 explain the difference between the three words · 3.1.6 plan how to measure the classroom temperature fairly.",
        parts: [
          { h: "Part A · Combine the Sentences", time: "15 minutes", items: [
            B("<b>because</b> = reason: A because B. · <b>so</b> = result: A, so B. · <b>although</b> = surprise: Although A, B."),
            F("1. The room is very hot. The roof gets a lot of sun. (because)", "The room is very hot because the roof gets a lot of sun."),
            F("2. The windows are closed. The air cannot move. (so)", "The windows are closed, so the air cannot move."),
            F("3. Students open the windows. The room stays hot. (although)", ["Although students open the windows, the room stays hot.", "The room stays hot although students open the windows."]),
            F("4. The classroom is hot. Many students feel sleepy. (so)", "The classroom is hot, so many students feel sleepy."),
            F("5. The room has curtains. It is still warm at noon. (although)", ["Although the room has curtains, it is still warm at noon.", "It is still warm at noon although the room has curtains."]),
            F("6. The air is heavy. The windows stay closed. (because)", "The air is heavy because the windows stay closed."),
            F("7. We measured the room three times. We have good data. (so)", "We measured the room three times, so we have good data."),
            F("8. The shaded room is cooler. The sun is strong. (although)", ["Although the sun is strong, the shaded room is cooler.", "The shaded room is cooler although the sun is strong."]),
            F("9. Students feel tired. The room is very hot. (because)", "Students feel tired because the room is very hot."),
            F("10. The fan is on. The room is still hot. (although)", ["Although the fan is on, the room is still hot.", "The room is still hot although the fan is on."])
          ] },
          { h: "Part B · Our Measuring Plan", time: "15 minutes", items: [
            P("Guess A: direct sun / no curtains · B: the roof · C: ventilation · D: position of the room · E: number of students."),
            T(["Item", "Our plan"], [["Our guess (A-E) and why", _], ["What we compare (two places or two rooms)", _], ["Tool (thermometer or phone) and who measures", _], ["Times 07:30, 10:00, 13:00 for 3 days. Where do we write the data?", _]])
          ] },
          { h: "Part C · Reflect", time: "5 minutes", items: [O("Which word was the hardest to use: because, so or although? Why?")] }
        ]
      },
      {
        id: "p37", p: "Meeting 37", tp: "3.1", title: "Structure Hunters", sub: "Thesis, Arguments, Reiteration", mode: "Individual work, then check with a partner",
        goal: "3.1.7 label the Thesis, Arguments and Reiteration · 3.1.8 find the signal words of each part · 3.1.9 explain how an analytical exposition differs from an explanation text.",
        parts: [
          { h: "Part A · Label the Text", time: "20 minutes", items: [
            R("Why Our Classrooms Are So Hot", TXT.hot),
            T(["Para.", "Part", "Signal words I found"], [["(1)", S("", PARTS3, "Thesis"), _], ["(2)", S("", PARTS3, "Argument"), _], ["(3)", S("", PARTS3, "Argument"), _], ["(4)", S("", PARTS3, "Argument"), _], ["(5)", S("", PARTS3, "Reiteration"), _]])
          ], key: "Signal words: (1) I believe · (2) First, This shows that · (3) Second, Therefore · (4) Third, As a result · (5) In conclusion" },
          { h: "Part B · Explanation or Analytical?", time: "10 minutes", items: [
            R("Explanation text: How a Classroom Becomes Hot", "<p>The sun heats the roof and the walls. The heat moves into the room. If the air cannot move, the heat stays inside. This is why the temperature rises during the day.</p>"),
            T(["Question", "Explanation text", "Text A (analytical)"], [
              ["Does the writer give an opinion?", S("", YN, "No"), S("", YN, "Yes")],
              ["Is there a thesis that people can argue with?", S("", YN, "No"), S("", YN, "Yes")],
              ["How does the text end?", _, _]
            ])
          ], key: "The explanation text ends by explaining the process (why the temperature rises). Text A ends with a reiteration: it says the thesis again (In conclusion ...)." },
          { h: "Part C · Reflect", time: "10 minutes", items: [O("Write the thesis of Text A in your own words. Do you agree with it? Why or why not?", 3)] }
        ]
      },
      {
        id: "p38", p: "Meeting 38", tp: "3.1", title: "Structure Hunters 2", sub: "A New Text", mode: "Individual work, then group check",
        goal: "3.1.10 label the structure of a new text independently · 3.1.11 find the data that supports each argument.",
        parts: [
          { h: "Part A · Label the Text", time: "20 minutes", items: [
            R("Why There Is So Much Litter at Our School", TXT.litter),
            T(["Para.", "Part", "First words that helped me"], [["(1)", S("", PARTS3, "Thesis"), _], ["(2)", S("", PARTS3, "Argument"), _], ["(3)", S("", PARTS3, "Argument"), _], ["(4)", S("", PARTS3, "Argument"), _], ["(5)", S("", PARTS3, "Reiteration"), _]])
          ], key: "(1) I think · (2) First · (3) Second · (4) Third · (5) In conclusion" },
          { h: "Part B · Find the Evidence", time: "15 minutes", items: [
            T(["Argument", "The data or fact in the text"], [["First (bins)", _], ["Second (full bins)", _], ["Third (survey)", _]])
          ], key: "First: only six bins for twenty classes; no bin near the library or the field.<br>Second: at 10 a.m. four of the six bins were already full.<br>Third: 24 of 30 students said they would use a bin if it was close." },
          { h: "Part C · Group Check and Our Data", time: "20 minutes", items: [
            O("Arguments and Reiteration are easy to confuse. How can you tell them apart?"),
            T(["Our group data (Day 3)", "07:30", "10:00", "13:00", "Place"], [["Temperature (°C)", _, _, _, _]])
          ] }
        ]
      },
      {
        id: "p39", p: "Meeting 39", tp: "3.2", title: "Data Describers", sub: "Simple Present and Past for Data", mode: "Individual work, then check with a partner",
        goal: "3.2.1 use the simple present for general facts and the past for measurements · 3.2.2 describe a data table · 3.2.3 write sentences about our own data.",
        parts: [
          { h: "Part A · Present or Past?", time: "10 minutes", items: [
            B("General fact (always true) = simple present: absorbs, reflects. Our measurement (one day) = past: was, rose, fell."),
            T(["Sentence", "Fact or data?"], [
              ["1. A dark roof absorbs a lot of heat.", "Present (fact)"], ["2. At 1 p.m. the temperature was 35°C.", "Past (data)"],
              ["3. Moving air takes heat out of a room.", "Present (fact)"], ["4. The room under the roof was 3°C hotter than the shaded room.", "Past (data)"],
              ["5. White paint reflects sunlight.", "Present (fact)"], ["6. On Monday the room rose from 28°C to 35°C.", "Past (data)"],
              ["7. Curtains block part of the sun's heat.", "Present (fact)"], ["8. Last week we measured the room three times a day.", "Past (data)"],
              ["9. Hot air rises.", "Present (fact)"], ["10. At 10:00 the average temperature was 31.3°C.", "Past (data)"]
            ].map(([s, a]) => [s, S("", ["Present (fact)", "Past (data)"], a)]))
          ] },
          { h: "Part B · Describe the Sample Data (Room 11-X)", time: "20 minutes", items: [
            T(["Time", "Day 1", "Day 2", "Day 3", "Average"], [["07:30", "28", "29", "28", "28.3"], ["10:00", "31", "32", "31", "31.3"], ["13:00", "35", "36", "34", "35.0"]]),
            P("Use the average column (°C)."),
            F("1. At 07:30 the average temperature was ____ °C.", "28.3"),
            F("2. At 10:00 the average temperature was ____ °C.", "31.3"),
            F("3. At 13:00 the average temperature was ____ °C.", ["35.0", "35"]),
            F("4. The temperature ____ from 28.3°C to 35.0°C.", ["rose", "increased", "went up"]),
            F("5. At 13:00 the room was ____ °C hotter than at 07:30.", "6.7", "35.0 − 28.3 = 6.7"),
            F("6. The highest temperature was ____ °C.", ["35.0", "35"]),
            F("7. The lowest temperature was ____ °C.", "28.3"),
            F("8. The highest temperature was at ____.", ["13:00", "13.00", "1 p.m.", "1 pm"]),
            F("9. From 07:30 to 10:00 the temperature rose by ____ °C.", ["3", "3.0"], "31.3 − 28.3 = 3.0"),
            F("10. ____, the room was 31.5°C (the mean of the three averages).", ["On average", "On average,"])
          ] },
          { h: "Part C · Our Own Data", time: "10 minutes", items: [O("Write two sentences about your group's data. Use \"rose from ... to ...\" or \"was higher than ...\".", 3)] }
        ]
      },
      {
        id: "p40", p: "Meeting 40", tp: "3.2", title: "Connector Builders", sub: "Cause and Effect", mode: "Individual work, then check with a partner",
        goal: "3.2.4 choose the correct cause-and-effect connector · 3.2.5 join facts with because of, due to, therefore or as a result · 3.2.6 use punctuation correctly.",
        parts: [
          { h: "Part A · Choose the Best Word", time: "10 minutes", items: [
            B("<b>because</b> + clause · <b>because of / due to</b> + noun phrase · <b>so</b> + clause (comma before) · <b>Therefore, / As a result,</b> + new sentence (comma after)"),
            S("1. The room is hot ____ the metal roof.", ["because", "because of"], "because of"),
            S("2. The windows are closed, ____ the air cannot move.", ["so", "because"], "so"),
            S("3. The roof absorbs heat. ____, the room gets hot.", ["Therefore", "Because"], "Therefore"),
            S("4. Hot air stays inside. ____, students feel sleepy.", ["As a result", "Because of"], "As a result"),
            S("5. The temperature rose ____ the direct sunlight.", ["due to", "so"], "due to"),
            S("6. Students feel tired ____ the room is very hot.", ["because", "therefore"], "because"),
            S("7. The temperature rises ____ the full classroom.", ["due to", "so"], "due to"),
            S("8. The room is very hot. ____, students feel sleepy.", ["As a result", "Because of"], "As a result"),
            S("9. The room is hot ____ the sun shines straight in.", ["because", "because of"], "because", "\"the sun shines\" is a clause → because"),
            S("10. The windows stay closed. ____ the air feels heavy.", ["Therefore,", "Because of"], "Therefore,")
          ] },
          { h: "Part B · Join the Facts", time: "25 minutes", items: [
            F("1. The room has no curtains. The sun comes straight in. (As a result)", "The room has no curtains. As a result, the sun comes straight in."),
            F("2. The roof is made of metal. The room is 3°C hotter. (because of)", ["The room is 3°C hotter because of the metal roof.", "The room is 3 degrees hotter because of the metal roof."]),
            F("3. The windows stay closed. The air feels heavy. (Therefore)", "The windows stay closed. Therefore, the air feels heavy."),
            F("4. The classroom is full. The temperature rises. (due to)", "The temperature rises due to the full classroom."),
            F("5. The roof absorbs heat. The room gets hot. (Therefore)", "The roof absorbs heat. Therefore, the room gets hot."),
            F("6. The sun is strong at noon. The temperature rises. (because)", ["The temperature rises because the sun is strong at noon.", "Because the sun is strong at noon, the temperature rises."]),
            F("7. The curtains are open. The room is bright and warm. (so)", "The curtains are open, so the room is bright and warm."),
            F("8. The fan is broken. The air does not move. (As a result)", "The fan is broken. As a result, the air does not move."),
            F("9. The big tree gives shade. The room is cooler. (because of)", ["The room is cooler because of the big tree.", "The room is cooler because of the shade of the big tree.", "The room is cooler because of the shade from the big tree.", "The room is cooler because of the big tree's shade."]),
            F("10. The windows are open. The temperature falls. (so)", "The windows are open, so the temperature falls.")
          ] },
          { h: "Part C · Generalization", time: "10 minutes", items: [
            O("Where do \"Therefore\" and \"As a result\" usually appear in a sentence? What punctuation comes after them?"),
            O("What is the difference between \"because\" and \"because of\"?")
          ], key: "Therefore / As a result start a new sentence and take a comma after them. Because + clause (subject + verb); because of + noun phrase." }
        ]
      },
      {
        id: "p41", p: "Meeting 41", tp: "3.2", title: "Argument Builders", sub: "Claim, Evidence, Reasoning", mode: "Individual work, then group discussion",
        goal: "3.2.7 sort sentences into Claim, Evidence and Reasoning · 3.2.8 build an argument from sample data · 3.2.9 write an argument from our own data.",
        parts: [
          { h: "Part A · Sort the Sentences", time: "10 minutes", items: [
            B("<b>Claim</b> = the point. <b>Evidence</b> = the data (numbers, unit). <b>Reasoning</b> = why the data matters (This shows that ... / Therefore, ...)."),
            T(["Sentence", "C / E / R"], [
              ["1. The metal roof is the main reason our classroom is hot.", "Claim"],
              ["2. At 1 p.m. the room under the roof was 35°C, but the shaded room was 32°C.", "Evidence"],
              ["3. This shows that the roof takes in heat and sends it into the room.", "Reasoning"],
              ["4. When we opened the windows, the temperature fell by two degrees.", "Evidence"],
              ["5. Therefore, moving air takes heat out of the room.", "Reasoning"],
              ["6. Our data suggests that ventilation is the main cause of the heat.", "Claim"],
              ["7. In Room 11-X the temperature rose from 28.3°C to 35.0°C.", "Evidence"],
              ["8. This shows that the sun makes the room hotter.", "Reasoning"],
              ["9. I believe curtains are the main reason for the heat at noon.", "Claim"],
              ["10. At 13:00 Room 11-X was 35.0°C and Room 11-Y was 33.0°C.", "Evidence"]
            ].map(([s, a]) => [s, S("", ["Claim", "Evidence", "Reasoning"], a)]))
          ] },
          { h: "Part B · Build an Argument from Sample Data", time: "10 minutes", items: [
            P("Room 11-X has no curtains (13:00 average: 35.0°C). Room 11-Y has curtains (13:00 average: 33.0°C)."),
            F("Claim: Rooms ____ curtains are hotter than rooms with curtains.", "without"),
            F("Claim: ... than rooms ____ curtains.", "with"),
            F("Evidence: At 13:00 the average temperature in Room 11-X was ____ °C ...", ["35.0", "35"]),
            F("Evidence: ... but in Room 11-Y it was ____ °C.", ["33.0", "33"]),
            F("Reasoning: This shows that curtains ____ the direct sunlight ...", ["block", "stop", "reduce"]),
            O("Reasoning: ... so ____ (finish the sentence)", 1)
          ] },
          { h: "Part C · Our Own Argument", time: "10 minutes", items: [T(["Part", "Our group's argument (our own data)"], [["Claim", _], ["Evidence", _], ["Reasoning", _]])] }
        ]
      },
      {
        id: "p42", p: "Meeting 42", tp: "3.2", title: "Argument Planner", sub: "From Data to Thesis", mode: "Group work (5 students) with an individual check",
        goal: "3.2.10 decide whether our data supports the first guess · 3.2.11 plan a thesis and three arguments · 3.2.12 check the plan with a checklist.",
        parts: [
          { h: "Part A · What Does Our Data Say?", time: "10 minutes", items: [
            S("Our first guess", ["A: direct sun / no curtains", "B: the roof", "C: ventilation", "D: position of the room", "E: number of students"]),
            S("Does our data support the guess?", ["Yes", "Partly", "No"]),
            O("Explain with numbers."), O("Our thesis now (an opinion people can argue with)")
          ] },
          { h: "Part B · Argument Planner", time: "25 minutes", items: [
            T(["Part", "Claim (point)", "Evidence (data)", "Reasoning (connector)"], [["Argument 1", _, _, _], ["Argument 2", _, _, _], ["Argument 3", _, _, _]]),
            O("Reiteration: We say again that ...")
          ] },
          { h: "Part C · Checklist", time: "10 minutes", items: [C(["The thesis is an opinion that people can argue with.", "Each argument has data from our own table.", "We use causal connectors (therefore, as a result, because of).", "There is no \"should\" (we do not give advice in this text)."])] }
        ]
      },
      {
        id: "p43", p: "Meeting 43", tp: "3.3", title: "Critical Readers", sub: "Is This Argument Strong?", mode: "Individual work with pair discussion",
        goal: "3.3.1 check whether the data and sources are enough · 3.3.2 find words that show bias and write more careful versions · 3.3.3 judge an argument with reasons.",
        parts: [
          { h: "Part A · Check the Source and the Data", time: "15 minutes", items: [
            R("Text C: Curtains Are the Problem", "<p>(1) Everyone knows that our classrooms are hot only because there are no curtains.</p><p>(2) Obviously, my friend told me that his room is hot without curtains. I also felt hot in my class one day, so I am sure curtains are the reason. A post on social media says that curtains always fix a hot room. Nobody can say I am wrong.</p><p>(3) So curtains are the only answer.</p>"),
            T(["Question", "Yes / No", "Evidence from the text"], [
              ["Does the writer give measured data (numbers)?", S("", YN, "No"), _],
              ["Are the sources reliable (not only a friend or a social media post)?", S("", YN, "No"), _],
              ["Are there enough observations (more than one day or one room)?", S("", YN, "No"), _],
              ["Does the writer think about other causes?", S("", YN, "No"), _]
            ])
          ], key: "No numbers at all · sources: \"my friend told me\", \"a post on social media\" · \"one day\", \"my class\" · \"only because\", \"the only answer\"." },
          { h: "Part B · Find the Biased Words", time: "15 minutes", items: [
            T(["No.", "Biased word or phrase", "A more careful version"], [["1", _, _], ["2", _, _], ["3", _, _]])
          ], key: "Everyone knows → Some students feel · only because → partly because · Obviously → It seems that · always fix → may help · Nobody can say I am wrong → I think · the only answer → one possible answer" },
          { h: "Part C · Our Judgement", time: "10 minutes", items: [
            S("Score the argument", ["1 very weak", "2 weak", "3 quite strong", "4 very strong"]),
            O("Give two reasons for your score. What should the writer add to make the argument stronger?", 3)
          ] }
        ]
      },
      {
        id: "p44", p: "Meeting 44", tp: "3.3", title: "Strong or Weak?", sub: "Evaluate Our Own Planner", mode: "Group work with peer review",
        goal: "3.3.4 judge our arguments with clear criteria · 3.3.5 give a peer review with \"2 Stars 1 Wish\" · 3.3.6 improve the thesis and arguments after feedback.",
        parts: [
          { h: "Part A · Evaluate Our Arguments", time: "25 minutes", items: [
            T(["Argument", "Data enough?", "Source clear?", "No biased word?", "What we will improve"], [1, 2, 3].map(n => [`Argument ${n}`, S("", YN), S("", YN), S("", YN), _]))
          ] },
          { h: "Part B · Peer Review: 2 Stars 1 Wish", time: "15 minutes", items: [T(["", ""], [["Group reviewed", _], ["⭐ Star 1", _], ["⭐ Star 2", _], ["🌠 Wish", _]])] },
          { h: "Part C · Our Final Thesis", time: "10 minutes", items: [O("Write your final thesis after the feedback. What did you change, and why?", 3)] }
        ]
      },
      {
        id: "p45", p: "Meeting 45-50", tp: "3.4", title: "Green Street Journalism", sub: "Final project: analytical text + campaign video", mode: "Individual draft, then group product",
        goal: "Challenge: \"Can we convince our school about the real cause of the problem, using our own evidence?\" Product: an analytical exposition text (200-250 words) and a campaign video (60-90 seconds) in English.",
        parts: [
          { h: "Meeting 45-46 · My Draft", items: [
            P("Use your group's argument planner (Meeting 42-44). Write alone."),
            T(["Part", "My draft"], [["Thesis", _], ["Argument 1 (claim + data + reasoning)", _], ["Argument 2", _], ["Argument 3", _], ["Reiteration", _]]),
            O("Design log 1: one decision I made and why.", 2)
          ] },
          { h: "Meeting 47 · Peer Test and Revision", items: [
            C(["The thesis is clear and arguable.", "Each argument has our own data (numbers + unit).", "Connectors are correct (because of, therefore, as a result).", "No biased words.", "200-250 words."], "My friend's check"),
            O("Design log 2: three changes I made and why.", 3)
          ] },
          { h: "Meeting 48-49 · Video Script", items: [
            T(["Part", "What we say", "What we show", "Who"], [["Hook (5-10 s)", _, _, _], ["Thesis + data", _, _, _], ["Arguments", _, _, _], ["Reiteration / closing", _, _, _]]),
            O("Link to our final text and video:", 1)
          ] },
          { h: "Meeting 50 · Gallery Walk", items: [O("One thing I learned from another group's video:"), O("One question I asked:")] }
        ]
      }
    ]
  },

  // ================================================================ UNIT 4
  u4: {
    src: "unit 4_new/LKPD_TP4.1_Pertemuan53-56, LKPD_TP4.2_Pertemuan57-60, LKPD_TP4.3_Pertemuan61-62 · RPM_TP4.4_Pertemuan63-68",
    tp: {
      "4.1": "Identify the structure (thesis, arguments, recommendation) of a hortatory exposition and understand words, adjectives and verbs about healthy habits, linked to real canteen habits at SMA Negeri 1 Batam.",
      "4.2": "Analyse modals (should, must, ought to, need to), imperatives, \"It is recommended that\" and persuasion (logos, pathos, ethos), and write advice from our own survey and trial data.",
      "4.3": "Evaluate how realistic, affordable and effective the recommendations are, linked to real conditions at school.",
      "4.4": "Project (Hortatory Podcast Station): create a hortatory exposition text and a 3-4 minute podcast with a recommendation based on our own data."
    },
    sheets: [
      {
        id: "p53", p: "Meeting 53", tp: "4.1", title: "Word Explorers", sub: "Words for Healthy Choices", mode: "Individual work, then check with a partner",
        goal: "4.1.1 match ten words about healthy choices with their meanings · 4.1.2 read a drink label and calculate the sugar in it.",
        parts: [
          { h: "Part A · Word Match", time: "10 minutes", items: [
            B("a. something you do regularly, almost without thinking · b. a piece of paper on a product that gives information · c. the thing you decide to buy or to do · d. a sweet substance in food and drinks · e. to give all your attention to one thing · f. the power that helps your body and brain to work · g. a small amount of food between meals · h. cooked in hot oil · i. new and natural, not old · j. feeling that you want to sleep"),
            T(["Word", "Letter"], [["1. sugar", "d"], ["2. habit", "a"], ["3. energy", "f"], ["4. concentrate", "e"], ["5. label", "b"], ["6. choice", "c"], ["7. snack", "g"], ["8. fried", "h"], ["9. fresh", "i"], ["10. sleepy", "j"]].map(([w, a]) => [w, S("", "abcdefghij".split(""), a)]))
          ] },
          { h: "Part B · Read the Label", time: "15 minutes", items: [
            B("<b>Sweet Tea Drink (sachet)</b> · Volume: 200 ml · Sugar: 24 g · Energy: 100 kcal<br>The Ministry of Health says: a person should not take more than 50 g of sugar a day. One teaspoon of sugar is about 4 g."),
            F("1. How many grams of sugar are in one drink?", ["24", "24 g", "24 grams"]),
            F("2. How many teaspoons of sugar are in one drink? (24 ÷ 4)", ["6", "six", "6 teaspoons"]),
            F("3. How many grams of sugar can you still take that day? (50 − 24)", ["26", "26 g", "26 grams"]),
            F("4. One drink is about ____ % of the daily limit. (24 ÷ 50 × 100)", ["48", "48%"])
          ] },
          { h: "Part C · My Own Habit", time: "5 minutes", items: [
            S("How many sweet drinks do you buy in a week?", ["0", "1-3", "4-6", "7+"]),
            O("Is this a healthy habit? Give one reason. Use the words habit, sugar or choice.")
          ] }
        ]
      },
      {
        id: "p54", p: "Meeting 54", tp: "4.1", title: "Word Builders", sub: "Adjectives, Verbs and Our Survey", mode: "Individual (Part A), group (Parts B and C)",
        goal: "4.1.4 sort health words into adjectives and verbs · 4.1.5 use an adjective and a verb in a sentence · plan a survey.",
        parts: [
          { h: "Part A · Adjective or Verb?", time: "15 minutes", items: [
            T(["Word", "Adjective or verb?"], [["healthy", "Adjective"], ["avoid", "Verb"], ["sugary", "Adjective"], ["choose", "Verb"], ["fresh", "Adjective"], ["exercise", "Verb"], ["unhealthy", "Adjective"], ["drink", "Verb"], ["sleepy", "Adjective"], ["skip", "Verb"]].map(([w, a]) => [w, S("", ["Adjective", "Verb"], a)])),
            O("My sentence about our canteen (one adjective + one verb):")
          ] },
          { h: "Part B · Our Survey", time: "15 minutes", items: [
            S("Our topic", ["sweet sachet drinks", "fried snacks", "moving too little", "sleeping too little"]),
            P("Write three questions with options. Do not ask for names."),
            T(["No.", "Question", "Answer options (A, B, C ...)"], [["1", _, _], ["2", _, _], ["3", _, _]])
          ] },
          { h: "Part C · Reflect", time: "5 minutes", items: [O("Which of your questions could make a friend feel uncomfortable? How can you change it?")] }
        ]
      },
      {
        id: "p55", p: "Meeting 55", tp: "4.1", title: "Structure Hunters", sub: "Thesis, Arguments, Recommendation", mode: "Individual work, then check with a partner",
        goal: "4.1.7 label the Thesis, Arguments and Recommendation · 4.1.8 find the signal words · 4.1.9 explain how a hortatory exposition differs from an analytical exposition.",
        parts: [
          { h: "Part A · Label the Text", time: "20 minutes", items: [
            R("Our Canteen Should Offer Healthier Choices", TXT.canteen),
            T(["Para.", "Part", "Signal words I found"], [["(1)", S("", PARTS4, "Thesis"), _], ["(2)", S("", PARTS4, "Argument"), _], ["(3)", S("", PARTS4, "Argument"), _], ["(4)", S("", PARTS4, "Argument"), _], ["(5)", S("", PARTS4, "Recommendation"), _]])
          ], key: "(1) I believe ... should · (2) First · (3) Second · (4) Third · (5) Therefore, should" },
          { h: "Part B · Analytical or Hortatory?", time: "10 minutes", items: [
            T(["Question", "Analytical (Unit 3)", "Hortatory (Unit 4)"], [
              ["Social purpose", S("", ["to show what is true", "to ask people to act"], "to show what is true"), S("", ["to show what is true", "to ask people to act"], "to ask people to act")],
              ["How does the text end?", S("", ["reiteration", "recommendation"], "reiteration"), S("", ["reiteration", "recommendation"], "recommendation")],
              ["Typical words", S("", ["therefore, as a result", "should, must"], "therefore, as a result"), S("", ["therefore, as a result", "should, must"], "should, must")]
            ])
          ] },
          { h: "Part C · Reflect", time: "10 minutes", items: [O("What does the writer want the canteen to do? Do you agree? Why or why not?", 3)] }
        ]
      },
      {
        id: "p56", p: "Meeting 56", tp: "4.1", title: "Structure Hunters 2", sub: "A New Text and Our Survey Data", mode: "Individual work, then group check",
        goal: "4.1.10 label the structure of a new text independently · 4.1.11 find the data behind each argument.",
        parts: [
          { h: "Part A · Label the Text", time: "20 minutes", items: [
            R("Students Need More Sleep in Exam Week", TXT.sleep),
            T(["Para.", "Part", "First words that helped me"], [["(1)", S("", PARTS4, "Thesis"), _], ["(2)", S("", PARTS4, "Argument"), _], ["(3)", S("", PARTS4, "Argument"), _], ["(4)", S("", PARTS4, "Argument"), _], ["(5)", S("", PARTS4, "Recommendation"), _]])
          ] },
          { h: "Part B · Find the Evidence", time: "10 minutes", items: [
            T(["Argument", "The data or fact in the text"], [["First (sleep needs)", _], ["Second (survey)", _], ["Third (sleep schedule)", _]])
          ], key: "First: teenagers need eight to ten hours of sleep.<br>Second: 22 of 30 students slept less than six hours; 18 could not concentrate.<br>Third: five students went to bed at 10 p.m. for three days and all felt calmer." },
          { h: "Part C · Our Survey Results", time: "20 minutes", items: [
            B("Percentage = (number of students ÷ all students) × 100. Example: 24 of 30 students = 80%."),
            O("Our survey question:", 1),
            T(["", "Option A", "Option B", "Option C"], [["Number of students", _, _, _], ["Percentage (%)", _, _, _]]),
            O("Arguments and Recommendation are easy to confuse. How can you tell them apart?")
          ] }
        ]
      },
      {
        id: "p57", p: "Meeting 57", tp: "4.2", title: "Advice Builders", sub: "Should, Must, Ought to, Need to", mode: "Individual work, then check with a partner",
        goal: "4.2.1 choose the correct modal for advice and rules · 4.2.2 turn facts into advice · 4.2.3 write advice for our group topic.",
        parts: [
          { h: "Part A · Choose the Best Modal", time: "10 minutes", items: [
            B("<b>must</b> = very strong (a rule or a big risk) · <b>need to</b> = it is necessary · <b>should / ought to</b> = advice (it is a good idea)"),
            S("1. Students ____ drink more water. It is a good idea.", ["should", "must"], "should"),
            S("2. You ____ wear a helmet. It is the rule and it is for your safety.", ["ought to", "must"], "must"),
            S("3. We ____ sleep eight hours, because our brain needs rest.", ["need to", "ought to"], "need to"),
            S("4. The canteen ____ sell fruit at a low price. It is our suggestion.", ["should", "must"], "should"),
            S("5. Students ____ not skip breakfast. (advice)", ["should", "must"], "should"),
            S("6. You ____ not run in the laboratory. It is dangerous.", ["must", "should"], "must"),
            S("7. Students ____ eat more fruit. It is a good idea.", ["should", "must"], "should"),
            S("8. We ____ wash our hands before eating. It is necessary.", ["need to", "ought to"], "need to"),
            S("9. The canteen ____ sell water. It is our suggestion.", ["should", "must"], "should"),
            S("10. Drivers ____ stop at a red light. It is the law.", ["must", "should"], "must")
          ] },
          { h: "Part B · Fact to Advice", time: "20 minutes", items: [
            O("1. Many students sleep too little in exam week. (should)", 1),
            O("2. Sachet drinks have a lot of sugar. (ought to)", 1),
            O("3. Fried food every day is bad for the heart. (need to)", 1),
            O("4. Students sit for more than six hours a day. (should)", 1)
          ], key: "1. Students should sleep more in exam week.<br>2. Students ought to drink fewer sachet drinks.<br>3. We need to eat less fried food.<br>4. Students should move or stretch during break." },
          { h: "Part C · Our Own Advice", time: "10 minutes", items: [O("Write two pieces of advice for your group topic with two different modals. Which one is stronger? Why?", 3)] }
        ]
      },
      {
        id: "p58", p: "Meeting 58", tp: "4.2", title: "Call to Action", sub: "Imperatives and \"It Is Recommended That\"", mode: "Individual work, then check with a partner",
        goal: "4.2.4 write imperative sentences for a poster · 4.2.5 rewrite advice with \"It is recommended that\" + base verb · 4.2.6 find modals and imperatives in a recommendation.",
        parts: [
          { h: "Part A · Imperatives for Posters", time: "10 minutes", items: [
            B("Imperative = a command without a subject. Positive: <i>Drink water.</i> Negative: <i>Do not skip breakfast.</i> Friendly: <i>Let's move more!</i>"),
            F("1. Students should read the sugar label.", "Read the sugar label."),
            F("2. We should not skip breakfast.", ["Do not skip breakfast.", "Don't skip breakfast."]),
            F("3. Everyone ought to walk during break time.", "Walk during break time."),
            F("4. We need to go to bed before 10 p.m.", ["Go to bed before 10 p.m.", "Go to bed before 10 pm."]),
            F("5. Students should drink water every day.", "Drink water every day."),
            F("6. We should not stay up late.", ["Do not stay up late.", "Don't stay up late."]),
            F("7. Everyone ought to choose fresh fruit.", "Choose fresh fruit."),
            F("8. We need to wash our hands before eating.", ["Wash your hands before eating.", "Wash our hands before eating."]),
            F("9. Students should not buy too many sweet drinks.", ["Do not buy too many sweet drinks.", "Don't buy too many sweet drinks."]),
            F("10. We should move five minutes every break.", "Move five minutes every break.")
          ] },
          { h: "Part B · It Is Recommended That", time: "20 minutes", items: [
            B("Pattern: <b>It is recommended that + subject + base verb</b> (no -s). Example: <i>It is recommended that students drink water.</i>"),
            F("1. The canteen should sell fruit.", "It is recommended that the canteen sell fruit."),
            F("2. Students should sleep eight hours.", "It is recommended that students sleep eight hours."),
            F("3. The school should add one active break.", "It is recommended that the school add one active break."),
            F("4. The canteen should put a sugar poster near the drinks.", "It is recommended that the canteen put a sugar poster near the drinks."),
            F("5. Students should drink water in the morning.", "It is recommended that students drink water in the morning."),
            F("6. The school should avoid big tasks in exam week.", "It is recommended that the school avoid big tasks in exam week."),
            F("7. Parents should turn off the television at night.", "It is recommended that parents turn off the television at night."),
            F("8. The canteen should sell water at a low price.", "It is recommended that the canteen sell water at a low price."),
            F("9. Teachers should lead the exercises.", "It is recommended that teachers lead the exercises."),
            F("10. Students should read the label before buying.", "It is recommended that students read the label before buying.")
          ] },
          { h: "Part C · Analyse the Recommendation", time: "10 minutes", items: [
            R("Recommendation paragraph", "<p>Therefore, the canteen should sell water and fresh fruit at a low price. Students should also read the sugar information on the label before they buy a drink. If we do this, we will feel more awake in class and we will be healthier.</p>"),
            F("How many modals are in the paragraph?", ["2", "two"], "should (×2). \"will\" is for the future result, not advice."),
            F("Which sentence gives the reason to act? Write it.", "If we do this, we will feel more awake in class and we will be healthier.")
          ] }
        ]
      },
      {
        id: "p59", p: "Meeting 59", tp: "4.2", title: "Persuasion Detectives", sub: "Logos, Pathos, Ethos and Our Mini Trial", mode: "Individual (Part A), group (Part B)",
        goal: "4.2.7 identify logos, pathos and ethos · 4.2.8 plan a small, safe and fair trial · 4.2.9 explain which kind of persuasion convinces us most.",
        parts: [
          { h: "Part A · Logos, Pathos or Ethos?", time: "15 minutes", items: [
            B("<b>Logos</b> = logic and data · <b>Pathos</b> = feelings · <b>Ethos</b> = trust in the speaker"),
            T(["Sentence", "Strategy"], [
              ["1. One sachet drink has 24 g of sugar, almost half of the daily limit.", "Logos"],
              ["2. Imagine feeling sleepy and sad in class every afternoon.", "Pathos"],
              ["3. As a school nurse, I see students with stomach aches from sweet drinks every week.", "Ethos"],
              ["4. In our survey, 20 of 30 students said they feel sleepy after a sweet drink.", "Logos"],
              ["5. We all love our school and want our friends to feel strong and happy.", "Pathos"],
              ["6. According to the Ministry of Health, teenagers need eight hours of sleep.", "Ethos"],
              ["7. In our trial, 6 of 10 friends chose water after the poster.", "Logos"],
              ["8. Think of your best friend falling asleep in a test because of too much sugar.", "Pathos"],
              ["9. As a doctor with 20 years of experience, I recommend more water.", "Ethos"],
              ["10. A poster costs almost nothing, so the canteen can use it every day.", "Logos"]
            ].map(([s, a]) => [s, S("", ["Logos", "Pathos", "Ethos"], a)]))
          ], key: "Number 6 uses a trusted source (the Ministry of Health), so it is ethos. It also has data, so some friends may say logos: explain your reason." },
          { h: "Part B · Our Mini Trial", time: "15 minutes", items: [
            T(["Item", "Our plan"], [
              ["Our aim: what do we want to test?", _], ["What do we change or show? (poster, menu card, active break, sleep plan)", _],
              ["How do we measure? (ask 10 friends before and after, count steps, rate energy 1-5)", _], ["Safe and fair? (no names, friends agree, no cost)", _]
            ])
          ] },
          { h: "Part C · Reflect", time: "5 minutes", items: [O("Which strategy convinces you most: logos, pathos or ethos? Why? Which one will your group use most?", 3)] }
        ]
      },
      {
        id: "p60", p: "Meeting 60", tp: "4.2", title: "Recommendation Builders", sub: "Using Our Survey and Trial Data", mode: "Group work with an individual check",
        goal: "4.2.10 turn trial results into percentages · 4.2.11 write reason, data and recommendation sentences · 4.2.12 choose the best thesis and recommendation.",
        parts: [
          { h: "Part A · Our Trial Results", time: "10 minutes", items: [
            B("Example: before the poster 2 of 10 friends chose water (20%). After the poster 6 of 10 chose water (60%). The change is +40 percentage points."),
            F("Practice: 3 of 10 friends before, 7 of 10 after. The change is + ____ percentage points.", ["40", "+40"]),
            T(["Our trial", "Before", "After", "Change"], [["Number of friends (out of ...)", _, _, _], ["Percentage (%)", _, _, _]])
          ] },
          { h: "Part B · Reason + Data + Recommendation", time: "20 minutes", items: [
            P("Frame: Reason: ... because ... · Data: In our survey / trial, ... · Recommendation: Therefore, the canteen (school / students) should ..."),
            T(["Argument", "Reason", "Data (our numbers)", "Recommendation (modal)"], [["1", _, _, _], ["2", _, _, _], ["3", _, _, _]])
          ] },
          { h: "Part C · Choose and Check", time: "15 minutes", items: [
            O("Our thesis (position + what should change):"), O("Our main recommendation (who, what, when):"),
            C(["Every argument uses our own numbers.", "We use should, must, ought to or need to correctly.", "The recommendation is specific (who, what, when)."])
          ] }
        ]
      },
      {
        id: "p61", p: "Meeting 61", tp: "4.3", title: "Is It Realistic?", sub: "Evaluate the Recommendation", mode: "Individual work with group discussion",
        goal: "4.3.1 judge a recommendation with three criteria · 4.3.2 explain why it is realistic or not · 4.3.3 improve an unrealistic recommendation.",
        parts: [
          { h: "Part A · Rate the Recommendations", time: "20 minutes", items: [
            B("<b>Realistic</b> = can we do it at our school? · <b>Affordable</b> = is the cost low? · <b>Effective</b> = will it change a habit?"),
            T(["Recommendation", "Realistic", "Affordable", "Effective", "Reason"], [
              "R1. The canteen should stop selling all fried food from tomorrow.",
              "R2. The canteen should sell fruit at a low price and put a sugar poster near the drinks.",
              "R3. Every student must bring a lunch box from home and the canteen should close.",
              "R4. Students should drink water in the morning and after PE."
            ].map(r => [r, S("", ["✓", "✗"]), S("", ["✓", "✗"]), S("", ["✓", "✗"]), _]))
          ], key: "R2 and R4 are realistic, affordable and effective. R1 is too sudden (the canteen loses income). R3 is not realistic and not fair (the canteen closes, some students cannot bring food)." },
          { h: "Part B · Improve One", time: "15 minutes", items: [O("Choose one recommendation that is not realistic. Rewrite it so that it is realistic, affordable and effective (use should).", 3)] },
          { h: "Part C · Discussion", time: "5 minutes", items: [O("Who must agree before a recommendation can work (students, canteen, teachers, parents)? Why?")] }
        ]
      },
      {
        id: "p62", p: "Meeting 62", tp: "4.3", title: "From Evidence to Plan", sub: "Our Recommendation Planner", mode: "Group work with individual reflection",
        goal: "4.3.4 decide on one realistic final recommendation · 4.3.5 plan a thesis, three arguments and a recommendation with data · 4.3.6 connect the issue to our own habit.",
        parts: [
          { h: "Part A · Our Final Recommendation", time: "10 minutes", items: [T(["Question", "Our answer"], [["Who should do it?", _], ["What exactly? When? How much does it cost?", _], ["Which criterion is the strongest? Why?", _]])] },
          { h: "Part B · Recommendation Planner", time: "30 minutes", items: [T(["Part", "Claim (point)", "Evidence (our data)", "Link to action (modal)"], [["Thesis", _, _, _], ["Argument 1", _, _, _], ["Argument 2", _, _, _], ["Argument 3", _, _, _], ["Recommendation", _, _, _]])] },
          { h: "Part C · My Own Habit (not graded)", time: "10 minutes", items: [O("Which healthy habit will I try this week? How will I measure it?", 3)] }
        ]
      },
      {
        id: "p63", p: "Meeting 63-68", tp: "4.4", title: "Hortatory Podcast Station", sub: "Final project: hortatory text + podcast", mode: "Individual text, group podcast",
        goal: "Challenge: \"Can we persuade our school to take action for a healthier school life, using our own evidence?\" Product: a hortatory exposition text (200-250 words, individual) and a 3-4 minute podcast in English (group).",
        parts: [
          { h: "Meeting 63 · Briefing", items: [
            S("Our audience (drawn by lot)", ["the principal", "the canteen manager", "classmates", "parents"]),
            T(["Role", "Name"], [["Data researcher", _], ["Script writer", _], ["Main speaker", _], ["Audio editor", _], ["Host", _]])
          ] },
          { h: "Meeting 63-64 · My Hortatory Text", items: [
            T(["Part", "My draft"], [["Thesis", _], ["Argument 1 (reason + our number)", _], ["Argument 2", _], ["Argument 3", _], ["Recommendation (who, what, when, cost)", _]]),
            C(["The thesis is clear.", "Three arguments use our own data.", "The recommendation is specific and realistic.", "Modals are correct (should, must, ought to, need to).", "200-250 words."], "Peer test")
          ] },
          { h: "Meeting 65 · Podcast Script", items: [
            B("Tips: short sentences · pause at punctuation · say numbers clearly (twenty-four grams) · stress the modal (the canteen SHOULD sell fruit)."),
            T(["Segment", "Time", "Our script"], [["Hook", "20 s", _], ["Thesis and issue", "30 s", _], ["Arguments", "90 s", _], ["Recommendation", "40 s", _], ["Closing", "10 s", _]]),
            P("<i>Example opening: \"Good morning, Principal and teachers. We are group five from XI. We measured what our friends choose at the canteen. Here is what we found.\"</i>")
          ] },
          { h: "Meeting 66 · Recording", items: [C(["Quiet room.", "Every member speaks.", "3-4 minutes.", "Numbers are clear.", "The recommendation is clear."])] },
          { h: "Meeting 67-68 · Listening Party", items: [O("The podcast I liked most and why:"), O("One recommendation I agree with:"), O("My reflection on this semester:", 3)] }
        ]
      }
    ]
  }
};
