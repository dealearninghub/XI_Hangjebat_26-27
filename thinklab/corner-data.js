// =====================================================================
//  CORNER DATA — one "lab" per unit (Theory, Steps, Simulation, LKPD, Developer)
//  Texts for the simulation come from TXT in lkpd-data.js.
//  quiz: { q, o: [4 options], a: index of the right option, why: explanation }
// =====================================================================
const CORNER = {
  // ================================================================ UNIT 1
  u1: {
    name: "Nature Corner", icon: "🌿", sub: "Narrative Text · Legend",
    crumb: ["Narrative Text", "Legend", "Are We Connected to Nature?"],
    head: `Getting to Know <em>Legends</em> & <em>Nature</em>`,
    cards: [
      { t: "Narrative text: legend", html: `<p>A <b>legend</b> is an old story about how a place or thing began. It often has <b>magic</b> and a <b>moral message</b>.</p>
        <ul><li><b>Orientation:</b> who, where, when.</li><li><b>Complication:</b> the problem starts.</li><li><b>Resolution:</b> the problem ends + the lesson.</li></ul>
        <p class="f">Features: magic · origin of a real place · real setting · moral message · "It is said that ..."</p>` },
      { t: "Language features", html: `<ul><li><b>Simple past:</b> regular verbs + <i>-ed</i> (lived, cried, begged). Irregular verbs change (go → went, take → took).</li>
        <li><b>Action verbs:</b> words for actions: cut, cried, planted, protected.</li>
        <li><b>Sequence words:</b> a long time ago, one day, then, soon, finally, since that day.</li></ul>
        <p class="f">Pattern: <code>One day, the villagers cut down the trees.</code></p>` }
    ],
    models: [
      { tag: "LEGEND", t: "The Weeping Lake", d: "Mai Rimba's tears became a lake after loggers cut the forest." },
      { tag: "LEGEND", t: "Telaga Lestari", d: "A storm taught greedy villagers to protect the forest and lake." },
      { tag: "BATAM", t: "Pulau Setokok", d: "Fishermen stopped using bombs and planted mangroves again." },
      { tag: "REAL ISSUE", t: "Mangroves in Batam", d: "Mangroves protect the coast from waves and give fish a home." },
      { tag: "REAL ISSUE", t: "Floods after logging", d: "Without trees, the soil cannot hold rain water." },
      { tag: "OUR SCHOOL", t: "Picture poster", d: "We tell a true nature problem at school as a picture story." }
    ],
    why: "Legends are old, but their message is new. They show what happens when people forget nature. When you can read and tell a story in the past tense, you can also tell your own story about the place you live in.",
    steps: [
      ["Read the title", "Guess the story: which place or thing will it explain?"],
      ["Find the orientation", "Who are the characters? Where and when is the story?"],
      ["Find the problem", "Look for words like <i>one day</i> or <i>suddenly</i>. What goes wrong?"],
      ["Find the resolution", "How does the problem end? What does the place become?"],
      ["Check the language", "Underline action verbs in the past and circle sequence words."],
      ["Find the message", "What should we learn about nature? Connect it to Batam or our school."]
    ],
    sim: { texts: [["The Legend of the Weeping Lake", "weeping", "OCR"], ["The Legend of Telaga Lestari", "telaga", "OCR"], ["The Legend of Pulau Setokok", "setokok", "OCR"]],
      parts: { O: "Orientation", C: "Complication", R: "Resolution" },
      feats: [
        { k: "Past action verbs", w: "lived took loved trusted came wanted begged laughed continued swept cried formed called protected watched believed became started damaged polluted forced ignored destroyed made harmed apologized worked practiced returned passed gave began disappeared gathered reminded stopped planted stood" },
        { k: "Sequence words", w: "a long time ago|long ago|one day|soon|since that day|since then|after the disaster|slowly|until|one season|over time|later|then|finally" },
        { k: "Nature words", w: "forest|ecosystem|habitat|deforestation|conservation|extinction|floods|flood|mangroves|coral reefs|wildlife|environment|nature|trees|lake|soil|animals|fish|birds|sea" }
      ] },
    groups: [["STRUCTURE & MEANING (1-10)", 0, 10], ["LANGUAGE (11-20)", 10, 20]],
    quiz: [
      { q: "What is the purpose of a legend?", o: ["To show how to make something", "To entertain and tell how a place or thing began", "To report today's news", "To ask readers to buy something"], a: 1, why: "A legend is a narrative. It entertains and often explains the origin of a real place." },
      { q: "\"A long time ago, in a small village surrounded by thick forest, there lived a kind old woman named Mai Rimba.\" This part is the ...", o: ["Orientation", "Complication", "Resolution", "Moral"], a: 0, why: "It tells who (Mai Rimba), where (a village) and when (a long time ago)." },
      { q: "In which part does the problem start?", o: ["Orientation", "Complication", "Resolution", "Title"], a: 1, why: "The complication is where the problem starts: the loggers come." },
      { q: "\"Her tears formed a wide, deep lake.\" This shows which legend feature?", o: ["A real place", "A moral message", "A magical element", "Oral tradition"], a: 2, why: "Tears cannot really make a lake. It is magic." },
      { q: "\"According to the legend, ...\" shows that the story is ...", o: ["a scientific report", "told from person to person (oral tradition)", "a news story", "a true diary"], a: 1, why: "Legends are passed down by people telling them: oral tradition." },
      { q: "What is the main idea of the complication in The Weeping Lake?", o: ["Mai Rimba loved animals.", "Greedy loggers cut the forest and laughed at Mai Rimba.", "The villagers named the lake.", "Rain is good for the village."], a: 1, why: "The complication paragraph is about the loggers cutting the forest." },
      { q: "\"Their deforestation damaged the forest.\" Deforestation means ...", o: ["planting new trees", "cutting down many trees", "cleaning a lake", "a big storm"], a: 1, why: "Deforestation = cutting down many trees." },
      { q: "A home for a plant or an animal is called a(n) ...", o: ["habitat", "settlement", "extinction", "legend"], a: 0, why: "Habitat = the natural home of a plant or animal." },
      { q: "What is the moral message of Telaga Lestari?", o: ["Storms are dangerous.", "Big houses are better.", "Humans must respect and protect nature.", "Lakes are hidden."], a: 2, why: "The last sentence says humans must respect and protect nature." },
      { q: "\"They practiced conservation by planting trees.\" Conservation means ...", o: ["taking care of nature", "selling wood", "building a village", "catching fish quickly"], a: 0, why: "Conservation = protecting and taking care of nature." },
      { q: "The simple past of \"take\" is ...", o: ["taked", "took", "taken", "takes"], a: 1, why: "Take is irregular: take → took." },
      { q: "Which verb is REGULAR?", o: ["became", "came", "destroyed", "made"], a: 2, why: "destroy + -ed = destroyed. The others change form." },
      { q: "\"The villagers ____ the guardian's warning.\"", o: ["ignore", "ignored", "ignores", "ignoring"], a: 1, why: "The story happened in the past, so we use ignored." },
      { q: "Which sentence is in the simple past?", o: ["The storm destroys their settlement.", "The storm is destroy their settlement.", "The storm destroyed their settlement.", "The storm destroying their settlement."], a: 2, why: "destroyed = simple past." },
      { q: "\"One day\", \"then\" and \"finally\" are ...", o: ["sequence words", "adjectives", "nouns", "modals"], a: 0, why: "They show the order of events." },
      { q: "Which words start the resolution best?", o: ["Once upon a time,", "One day,", "Finally,", "A long time ago,"], a: 2, why: "Finally shows the end of the story." },
      { q: "\"Mai Rimba begged them to stop.\" The action verb is ...", o: ["Mai", "begged", "them", "stop"], a: 1, why: "begged is the action she did (beg → begged, double g)." },
      { q: "The simple past of \"cry\" is ...", o: ["cryed", "cried", "crying", "cries"], a: 1, why: "Consonant + y → change y to i and add -ed: cried." },
      { q: "\"The fishermen began using explosives.\" The base form of began is ...", o: ["begin", "began", "begun", "beginning"], a: 0, why: "begin → began → begun." },
      { q: "Choose the correct sentence.", o: ["After the disaster, the villagers work together.", "After the disaster, the villagers worked together.", "After the disaster, the villagers works together.", "After the disaster, the villagers is work together."], a: 1, why: "A finished event in a story uses the simple past: worked." }
    ]
  },

  // ================================================================ UNIT 2
  u2: {
    name: "Self-Discovery Corner", icon: "🪞", sub: "Narrative Text · Fairy Tale / Fantasy",
    crumb: ["Narrative Text", "Fairy Tale / Fantasy", "Discovering Ourselves"],
    head: `Getting to Know <em>Fantasy Stories</em> & <em>Ourselves</em>`,
    cards: [
      { t: "Story structure and elements", html: `<ul><li><b>Orientation:</b> characters, place, time.</li><li><b>Complication:</b> the problem grows.</li><li><b>Resolution:</b> the problem is solved.</li><li><b>Coda:</b> the lesson or how the character changed.</li></ul>
        <p><b>Internal conflict</b> = a problem inside (fear, doubt). <b>External conflict</b> = a problem from outside (a person, an event, a test).</p>
        <p class="f">Tip: SHOW the change. <code>She smiled and opened her notebook.</code> not <code>She changed.</code></p>` },
      { t: "Language features", html: `<ul><li><b>Noun phrase:</b> the old wooden boat.</li><li><b>Adverb:</b> slowly, quietly, the next morning.</li>
        <li><b>Adjective clause:</b> Raka, <i>who was shy</i>, sang. Reduced: Raka, <i>shy</i>, sang.</li>
        <li><b>Reported speech:</b> "I am tired." → He said that he <i>was</i> tired.</li></ul>
        <p class="f">Command: <code>told + person + to + verb</code></p>` }
    ],
    models: [
      { tag: "FANTASY", t: "The Mirror of Selara", d: "Kirana passes three trials and learns to see herself honestly." },
      { tag: "FANTASY", t: "The Guardian of the Lake", d: "Shy Raka finds the courage to sing his own songs." },
      { tag: "INTERNAL", t: "Self-doubt", d: "\"Am I good enough?\" A fight inside the character." },
      { tag: "EXTERNAL", t: "A trial or a rule", d: "A test, a friend, a parent's wish: a problem from outside." },
      { tag: "CODA", t: "Show the change", d: "\"The next morning, he shared his notebook with his class.\"" },
      { tag: "PROJECT", t: "Motion comic", d: "Our own 2-3 minute digital comic with voices about self-discovery." }
    ],
    why: "Teenagers often ask, \"Who am I?\" Fantasy stories give a safe place to think about fear, hope and change. When you can map a story and use reported speech well, you can write your own story of discovery.",
    steps: [
      ["Meet the character", "Who is the main character? What does she or he want?"],
      ["Find the conflicts", "Internal: fear, doubt. External: a test, a person, an event."],
      ["Follow the turning point", "What does the character decide? How does the magic help?"],
      ["Read the Coda", "What did the character discover? Find the sentence that SHOWS it."],
      ["Check the language", "Find noun phrases, adjective clauses and reported speech."],
      ["Connect to you", "Which conflict is like yours? What would you do?"]
    ],
    sim: { texts: [["The Mirror of Selara", "selara", "OCRD"], ["The Guardian of the Lake", "guardian", "OCRD"]],
      parts: { O: "Orientation", C: "Complication", R: "Resolution", D: "Coda" },
      feats: [
        { k: "Direct speech", re: "\"[^\"]+\"" },
        { k: "Reporting verbs", w: "said that|answered that|told him to|told Kirana that|told him|asked why|asked|said|told" },
        { k: "Clause words", w: "who|which|where|whose|when|because|although|until|that" },
        { k: "Adverbs & time", w: "one evening|one foggy evening|for many weeks|every night|the next morning|from that day on|after that|first|then|finally|slowly|at first|at last|often|quietly" }
      ] },
    groups: [["STORY & MEANING (1-10)", 0, 10], ["LANGUAGE (11-20)", 10, 20]],
    quiz: [
      { q: "Who is the main character of The Mirror of Selara?", o: ["Selara", "Kirana", "Raka", "Sari"], a: 1, why: "The story follows Kirana from the start to the end." },
      { q: "What is Kirana's INTERNAL conflict?", o: ["She gets lost in the forest.", "She doubts herself and compares herself to others.", "The mirror is broken.", "Her classmates are loud."], a: 1, why: "Self-doubt is a problem inside her." },
      { q: "What is the EXTERNAL conflict?", o: ["Her fear", "The three trials", "Her quiet confidence", "Her kindness"], a: 1, why: "The trials come from outside (Selara and the mirror)." },
      { q: "The Coda tells us ...", o: ["who the characters are", "when the problem starts", "what the character learned or how she changed", "the title"], a: 2, why: "The Coda is the lesson / the change." },
      { q: "Selara is ...", o: ["a classmate", "a gentle spirit who guards the mirror", "Kirana's mother", "a firefly"], a: 1, why: "\"The mirror was guarded by a gentle spirit named Selara.\"" },
      { q: "\"The next morning, Kirana returned to her village with quiet confidence.\" This part is the ...", o: ["Orientation", "Complication", "Resolution", "Coda / Re-orientation"], a: 3, why: "It shows Kirana after the change." },
      { q: "What is the main message of The Mirror of Selara?", o: ["Mirrors are magic.", "Knowing who you are matters more than being like someone else.", "Forests are dangerous.", "Always be loud."], a: 1, why: "The last sentence gives the lesson." },
      { q: "In The Guardian of the Lake, what is Raka's problem?", o: ["He cannot swim.", "He is afraid people will laugh at his songs.", "He lost his boat.", "He hates the lake."], a: 1, why: "\"Raka was afraid that the villagers would laugh at him.\"" },
      { q: "The fantastic being in The Guardian of the Lake is ...", o: ["Raka's father", "Sari, the guardian of the lake", "the villagers", "a fisherman"], a: 1, why: "Sari appears above the water: a magical being." },
      { q: "Which sentence SHOWS the change?", o: ["Raka changed.", "Raka was different.", "Raka smiled and shared his notebook with his classmates.", "Raka learned a lesson."], a: 2, why: "It shows an action we can see, not just \"he changed\"." },
      { q: "Which one is a noun phrase?", o: ["sang slowly", "the old wooden boat", "because he was shy", "said that"], a: 1, why: "Determiner + adjectives + noun = noun phrase." },
      { q: "\"Raka, who was shy, sang.\" The adjective clause is ...", o: ["Raka", "who was shy", "sang", "Raka sang"], a: 1, why: "It starts with who and describes Raka." },
      { q: "Reduce: \"His notebook, which was full of lyrics, stayed under his shirt.\"", o: ["His notebook, full of lyrics, stayed under his shirt.", "His notebook, which full of lyrics, stayed under his shirt.", "His notebook was full of lyrics stayed under his shirt.", "His notebook, was full of lyrics, stayed under his shirt."], a: 0, why: "Remove which + was and keep the commas." },
      { q: "Which clause CANNOT be reduced?", o: ["Raka, who was a shy boy, sang.", "Sari, who was hiding behind the reeds, listened.", "Sari, whose voice was gentle, listened.", "The notebook, which was full of lyrics, was hidden."], a: 2, why: "Whose shows possession, so we cannot remove it." },
      { q: "Raka said, \"I am tired.\" → Raka said that he ...", o: ["is tired", "was tired", "am tired", "were tired"], a: 1, why: "Tense goes back: am → was." },
      { q: "Sari asked, \"Are you ready?\" → Sari asked ...", o: ["are you ready", "if he was ready", "if was he ready", "that he is ready"], a: 1, why: "Yes/no question → asked if + normal word order." },
      { q: "Sari told Raka, \"Close your eyes.\" → Sari told Raka ...", o: ["close his eyes", "to close his eyes", "that close his eyes", "closing his eyes"], a: 1, why: "Command → told + person + to + verb." },
      { q: "In reported speech, \"tomorrow\" becomes ...", o: ["today", "yesterday", "the next day", "tonight"], a: 2, why: "Time words change: tomorrow → the next day." },
      { q: "Choose the correct complex sentence.", o: ["Although it was cold Sari listened.", "Although it was cold, Sari listened.", "Although, it was cold Sari listened.", "Sari listened, although, it was cold."], a: 1, why: "An adverbial clause at the front takes a comma." },
      { q: "\"Slowly, Raka breathed in.\" The adverb is ...", o: ["Slowly", "Raka", "breathed", "in"], a: 0, why: "Slowly tells how he breathed." }
    ]
  },

  // ================================================================ UNIT 3
  u3: {
    name: "Green School Corner", icon: "🌍", sub: "Analytical Exposition",
    crumb: ["Exposition", "Analytical Exposition", "The Importance of Environmental Protection"],
    head: `Getting to Know <em>Analytical Exposition</em> & <em>Our Data</em>`,
    cards: [
      { t: "Analytical exposition", html: `<p>A text that shows an idea is <b>true</b>, using <b>arguments and data</b>. It does not give advice.</p>
        <ul><li><b>Thesis:</b> the writer's position (I believe ...).</li><li><b>Arguments:</b> First, Second, Third + data.</li><li><b>Reiteration:</b> the thesis again (In conclusion ...).</li></ul>
        <p class="f">Argument = <b>C</b>laim + <b>E</b>vidence + <b>R</b>easoning</p>` },
      { t: "Language features", html: `<ul><li><b>Simple present</b> for facts: <i>A dark roof absorbs heat.</i></li><li><b>Past</b> for our measurements: <i>At 1 p.m. it was 35°C.</i></li>
        <li><b>Cause-effect:</b> because + clause · because of / due to + noun · so · Therefore, · As a result,</li>
        <li><b>Careful words:</b> avoid <i>everyone knows, always, obviously</i>.</li></ul>
        <p class="f">Data sentence: <code>The temperature rose from 28.3°C to 35.0°C.</code></p>` }
    ],
    models: [
      { tag: "CLAIM", t: "The metal roof", d: "\"The roof is the main reason our classroom is hot.\"" },
      { tag: "EVIDENCE", t: "35°C vs 32°C", d: "At 1 p.m. the room under the metal roof was 3°C hotter." },
      { tag: "REASONING", t: "This shows that ...", d: "The roof takes in heat and sends it into the room." },
      { tag: "DATA", t: "Ventilation", d: "Opening windows on both sides: −2°C in 30 minutes." },
      { tag: "DATA", t: "Litter and bins", d: "Only 6 bins for 20 classes; 4 were full by 10 a.m." },
      { tag: "PROJECT", t: "Green Street Journalism", d: "Our own text and a campaign video based on our data." }
    ],
    why: "Many people argue with feelings. Analytical exposition teaches us to argue with facts. When you measure, compare and explain the data, your opinion becomes stronger and your school can see the real cause of a problem.",
    steps: [
      ["Find the thesis", "Look for I believe / I think. What is the writer's position?"],
      ["Find each argument", "Look for First, Second, Third. Underline the claim."],
      ["Check the evidence", "Is there data (numbers, units)? From where? How many days?"],
      ["Read the reasoning", "This shows that ... / Therefore, ... Why does the data matter?"],
      ["Check for bias", "Words like everyone, always, obviously, only make it weaker."],
      ["Read the reiteration", "In conclusion ... Does it repeat the thesis in new words?"]
    ],
    sim: { texts: [["Why Our Classrooms Are So Hot", "hot", "TAAAR"], ["Why There Is So Much Litter at Our School", "litter", "TAAAR"]],
      parts: { T: "Thesis", A: "Argument", R: "Reiteration" },
      feats: [
        { k: "Signal words", w: "i believe|i think|first|second|third|in conclusion|this shows that" },
        { k: "Cause & effect", w: "because of|because|therefore|as a result|due to|so|mainly" },
        { k: "Data", re: "\\d[\\d.,]*\\s?(°C|degrees|p\\.m\\.|a\\.m\\.|students|bins|classes|minutes)?|\\b(two|three|four|six|twenty|thirty)\\b" }
      ] },
    groups: [["STRUCTURE & THINKING (1-10)", 0, 10], ["LANGUAGE (11-20)", 10, 20]],
    quiz: [
      { q: "What is the purpose of an analytical exposition?", o: ["To tell a funny story", "To show that an idea is true with arguments", "To give steps to make something", "To describe a person"], a: 1, why: "It argues that an idea is true, with data." },
      { q: "The structure of an analytical exposition is ...", o: ["Orientation – Complication – Resolution", "Thesis – Arguments – Reiteration", "Goal – Materials – Steps", "Thesis – Arguments – Recommendation"], a: 1, why: "Analytical: thesis, arguments, reiteration." },
      { q: "\"I believe the main reason is the way the classrooms are built.\" This is the ...", o: ["Thesis", "Argument", "Reiteration", "Evidence"], a: 0, why: "I believe ... = the writer's position." },
      { q: "\"In conclusion, our classrooms are hot mainly because of their design.\" This is the ...", o: ["Thesis", "Argument", "Reiteration", "Title"], a: 2, why: "In conclusion + the thesis again = reiteration." },
      { q: "How is an analytical exposition different from an explanation text?", o: ["It has no paragraphs.", "It gives an opinion that people can argue with.", "It only uses the past tense.", "It tells a story."], a: 1, why: "An explanation text explains a process; it has no thesis." },
      { q: "Which sentence is the strongest evidence?", o: ["Everyone feels hot.", "My friend says it is hot.", "At 1 p.m. the room under the metal roof was 35°C, but the shaded room was 32°C.", "It is obviously hot."], a: 2, why: "It has measured numbers and a comparison." },
      { q: "Which phrase shows BIAS?", o: ["Our data suggests", "In two rooms", "Everyone knows", "At 10:00"], a: 2, why: "\"Everyone knows\" is too general and not proven." },
      { q: "Which source is the most reliable?", o: ["A post on social media", "One friend's story", "Measurements on three school days", "\"I felt hot one day.\""], a: 2, why: "More days and real measurements = more reliable." },
      { q: "To make a weak argument stronger, the writer should ...", o: ["use more \"always\"", "add measured data from more days and rooms", "write a longer title", "remove the thesis"], a: 1, why: "More and better data makes an argument stronger." },
      { q: "\"Ventilation\" means ...", o: ["the top cover of a building", "the way fresh air moves in and out of a room", "a cloth on a window", "light from the sun"], a: 1, why: "Ventilation = air moving in and out." },
      { q: "Which sentence is a GENERAL FACT (simple present)?", o: ["At 1 p.m. it was 35°C.", "White paint reflects sunlight.", "Last week we measured the room.", "On Monday it rose to 35°C."], a: 1, why: "A fact that is always true uses the simple present." },
      { q: "\"At 1 p.m. the temperature ____ 35°C.\" (our measurement)", o: ["is", "was", "be", "were"], a: 1, why: "Our measurement happened in the past: was." },
      { q: "\"The room is hot ____ the metal roof.\"", o: ["because", "because of", "so", "therefore"], a: 1, why: "\"the metal roof\" is a noun phrase → because of." },
      { q: "\"The roof absorbs heat. ____, the room gets hot.\"", o: ["Because", "Therefore", "Due to", "Although"], a: 1, why: "Therefore + comma starts a new sentence with a result." },
      { q: "\"Due to\" is followed by ...", o: ["a clause (subject + verb)", "a noun phrase", "a question", "nothing"], a: 1, why: "due to the full classroom (noun phrase)." },
      { q: "Choose the correct punctuation.", o: ["The fan is broken as a result the air does not move.", "The fan is broken. As a result, the air does not move.", "The fan is broken, as a result the air does not move.", "The fan is broken. As a result the air, does not move."], a: 1, why: "As a result starts a new sentence and takes a comma." },
      { q: "\"This shows that the roof takes in heat.\" In CER this is ...", o: ["Claim", "Evidence", "Reasoning", "Title"], a: 2, why: "This shows that ... explains why the data matters." },
      { q: "\"In Room 11-X the temperature rose from 28.3°C to 35.0°C.\" In CER this is ...", o: ["Claim", "Evidence", "Reasoning", "Reiteration"], a: 1, why: "Numbers with units = evidence." },
      { q: "\"Although the fan is on, the room is still hot.\" Although shows ...", o: ["a reason", "a result", "a surprise / contrast", "a time"], a: 2, why: "Although = something surprising happens." },
      { q: "\"The temperature ____ from 28°C to 35°C.\"", o: ["rose", "raised", "rises up", "rising"], a: 0, why: "Data in the past: the temperature rose." }
    ]
  },

  // ================================================================ UNIT 4
  u4: {
    name: "Healthy Life Corner", icon: "🥗", sub: "Hortatory Exposition",
    crumb: ["Exposition", "Hortatory Exposition", "Why Should We Live a Healthy Lifestyle?"],
    head: `Getting to Know <em>Hortatory Exposition</em> & <em>Healthy Habits</em>`,
    cards: [
      { t: "Hortatory exposition", html: `<p>A text that asks people to <b>do something</b>. It uses arguments and data, then gives a <b>recommendation</b>.</p>
        <ul><li><b>Thesis:</b> the issue + the position.</li><li><b>Arguments:</b> reasons with data.</li><li><b>Recommendation:</b> what should be done (who, what, when).</li></ul>
        <p class="f">Analytical ends with a reiteration. Hortatory ends with a recommendation.</p>` },
      { t: "Language features", html: `<ul><li><b>Modals:</b> must (a rule) · need to (necessary) · should / ought to (advice).</li>
        <li><b>Imperatives:</b> Drink water. Do not skip breakfast. Let's move more!</li>
        <li><b>It is recommended that</b> + subject + base verb.</li>
        <li><b>Persuasion:</b> logos (data) · pathos (feelings) · ethos (trust).</li></ul>
        <p class="f">Pattern: <code>Therefore, the canteen should sell fruit at a low price.</code></p>` }
    ],
    models: [
      { tag: "DATA", t: "24 g of sugar", d: "One sachet drink = 6 teaspoons = almost half of the 50 g daily limit." },
      { tag: "SURVEY", t: "20 of 30 students", d: "feel sleepy in class after a sweet drink and a fried snack." },
      { tag: "TRIAL", t: "2 → 6 of 10", d: "chose water after a sugar poster: +40 percentage points." },
      { tag: "LOGOS", t: "Logic and data", d: "\"One drink has 24 g of sugar.\"" },
      { tag: "PATHOS", t: "Feelings", d: "\"Imagine feeling sleepy in class every afternoon.\"" },
      { tag: "PROJECT", t: "Hortatory Podcast", d: "Our own 3-4 minute podcast to persuade a real audience." }
    ],
    why: "Healthy habits start with small choices: a drink, a snack, an hour of sleep. Hortatory exposition helps you turn your own data into a real recommendation, and persuade the canteen, the school or your friends to act.",
    steps: [
      ["Find the issue", "What is the problem? What is the writer's position?"],
      ["Read the arguments", "First, Second, Third: what reason and what data?"],
      ["Check the data", "Survey or trial? How many people? Change it into a percentage."],
      ["Find the persuasion", "Is it logos (data), pathos (feelings) or ethos (trust)?"],
      ["Read the recommendation", "Who should do what, and when? Find the modals."],
      ["Judge it", "Is it realistic, affordable and effective at our school?"]
    ],
    sim: { texts: [["Our Canteen Should Offer Healthier Choices", "canteen", "TAAAR"], ["Students Need More Sleep in Exam Week", "sleep", "TAAAR"]],
      parts: { T: "Thesis", A: "Argument", R: "Recommendation" },
      feats: [
        { k: "Modals", w: "should|must|ought to|need to|needs to|will" },
        { k: "Signal words", w: "i believe|i think|first|second|third|therefore|if we do this|also" },
        { k: "Data", re: "\\d[\\d.,]*\\s?(grams|g|students|hours|friends|p\\.m\\.|%)?|\\b(six|eight|ten|five|three|eighteen|thirty|half)\\b" }
      ] },
    groups: [["STRUCTURE & THINKING (1-10)", 0, 10], ["LANGUAGE (11-20)", 10, 20]],
    quiz: [
      { q: "What is the purpose of a hortatory exposition?", o: ["To tell a legend", "To persuade people to do something", "To describe a place", "To report an event"], a: 1, why: "Hortatory = asking people to act." },
      { q: "The structure of a hortatory exposition is ...", o: ["Thesis – Arguments – Reiteration", "Thesis – Arguments – Recommendation", "Orientation – Complication – Coda", "Goal – Steps"], a: 1, why: "It ends with a recommendation." },
      { q: "How is it different from an analytical exposition?", o: ["It has no data.", "It ends with a recommendation.", "It is always shorter.", "It has no thesis."], a: 1, why: "Analytical → reiteration; hortatory → recommendation." },
      { q: "\"Therefore, the canteen should sell water and fresh fruit at a low price.\" This is the ...", o: ["Thesis", "Argument", "Recommendation", "Title"], a: 2, why: "It says what should be done." },
      { q: "One drink has 24 g of sugar. The limit is 50 g a day. One drink is ... of the limit.", o: ["24%", "48%", "50%", "26%"], a: 1, why: "24 ÷ 50 × 100 = 48%." },
      { q: "Which recommendation is the most realistic?", o: ["Close the canteen forever.", "Stop selling all fried food from tomorrow.", "Sell fruit at a low price and put a sugar poster near the drinks.", "Every student must bring lunch from home."], a: 2, why: "It is cheap, easy to do and can change a habit." },
      { q: "\"Habit\" means ...", o: ["a sweet substance", "something you do regularly", "a small meal", "a piece of paper on a product"], a: 1, why: "Habit = something you do again and again." },
      { q: "Which survey question is the best?", o: ["What is your name and how many sweet drinks do you buy?", "How many sweet drinks do you buy in a week? (0 / 1-3 / 4+)", "Why are you so unhealthy?", "Do you like drinks?"], a: 1, why: "No names, clear options, not rude." },
      { q: "Before the poster 2 of 10 chose water. After the poster 6 of 10. The change is ...", o: ["+4 points", "+40 percentage points", "+60%", "+20%"], a: 1, why: "20% → 60% = +40 percentage points." },
      { q: "A good recommendation says ...", o: ["only \"be healthy\"", "who should do what, and when", "the title again", "a story"], a: 1, why: "Specific = who, what, when (and cost)." },
      { q: "Which modal is the strongest (a rule)?", o: ["should", "ought to", "must", "could"], a: 2, why: "must = very strong, a rule or a big risk." },
      { q: "\"You ____ not run in the laboratory. It is dangerous.\"", o: ["must", "should", "ought", "need"], a: 0, why: "It is a safety rule: must." },
      { q: "\"Students ____ drink more water. It is a good idea.\"", o: ["must", "should", "have", "are"], a: 1, why: "Advice (a good idea) = should." },
      { q: "Which sentence is an imperative?", o: ["Students drink water.", "Drink water every day.", "Water is healthy.", "We drank water."], a: 1, why: "An imperative has no subject: Drink ..." },
      { q: "\"We should not skip breakfast.\" As a poster imperative:", o: ["Don't skipping breakfast.", "Do not skip breakfast.", "Not skip breakfast.", "Skip not breakfast."], a: 1, why: "Negative imperative = Do not + verb." },
      { q: "\"It is recommended that the canteen ____ fruit.\"", o: ["sells", "sell", "selling", "to sell"], a: 1, why: "It is recommended that + subject + base verb (no -s)." },
      { q: "\"In our survey, 20 of 30 students feel sleepy after a sweet drink.\" This is ...", o: ["logos", "pathos", "ethos", "a modal"], a: 0, why: "Data and logic = logos." },
      { q: "\"Imagine feeling sleepy and sad in class every afternoon.\" This is ...", o: ["logos", "pathos", "ethos", "a thesis"], a: 1, why: "It touches our feelings = pathos." },
      { q: "\"As a doctor with 20 years of experience, I recommend more water.\" This is ...", o: ["logos", "pathos", "ethos", "an imperative"], a: 2, why: "We trust the speaker = ethos." },
      { q: "\"Students ought ____ read the label.\"", o: ["to", "for", "must", "should"], a: 0, why: "ought to + base verb." }
    ]
  }
};
