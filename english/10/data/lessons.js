/* محتوى دروس LEXORA.
   units: كلّ وحدةٍ { title, lessons:[درس…] } — تُملأ من الرزمة التعليمية.
   كلّ درس يمرّ بخمس محطات ثم الشهادة:
     1) اكتشف  ← vocab     (كلمات الدرس)
     2) تعلّم  ← reading   (فقرة الدرس كقصّة + أسئلة فهم)
     3) تدرّب  ← rules[0]  (القاعدة الأولى)
     4) تحدَّ نفسك ← rules[1..] (القاعدة الثانية والثالثة إن وُجدتا؛ وإلا تُتخطّى)
     5) أتقنتُ الدرس ← mastery (أسئلة متنوّعة: easy / medium / hard)
   السؤال: { q, o:[خيارات], a:رقم الصحيح, why:'شرح قصير' }  أو  { tf:true|false, q } لصح/خطأ.
   في الأمثلة: **كلمة** تُبرز الجزء المهمّ. */
window.LEXORA_DATA = {
  units: {
    1: { title: 'التواصل مع الآخرين', titleEn: 'Making contact' },
    2: { title: 'من هنا إلى هناك', titleEn: 'From here to there' },
    3: { title: 'أنشطة وقت الفراغ', titleEn: 'Free-time activities' },
    4: { title: 'حالة طوارئ!', titleEn: 'Emergency!' },
    5: { title: 'طقسٌ خطِر', titleEn: 'Dangerous weather' },
    /* ================= الوحدة 6 ================= */
    6: {
      "title": "العمل من أجل عالمٍ أفضل",
      "titleEn": "Working for a better world",
      "lessons": [
        {
          "id": "6-1",
          "title": "Working for a better world",
          "titleAr": "العمل من أجل عالمٍ أفضل",
          "vocab": [
            {
              "en": "refugee",
              "ar": "لاجئ",
              "em": "🏕️",
              "ex": "Many refugees live in camps.",
              "exAr": "يعيش كثير من اللاجئين في المخيّمات."
            },
            {
              "en": "settlement",
              "ar": "مستوطنة",
              "em": "🏘️",
              "ex": "A settlement was built on the village land.",
              "exAr": "بُنيت مستوطنة على أرض القرية."
            },
            {
              "en": "exile",
              "ar": "منفى",
              "em": "✈️",
              "ex": "He lived in exile for many years.",
              "exAr": "عاش في المنفى سنواتٍ طويلة."
            },
            {
              "en": "publish",
              "ar": "يَنشر",
              "em": "📖",
              "ex": "She published her first book in 2010.",
              "exAr": "نشرت كتابها الأول عام 2010."
            },
            {
              "en": "poetry",
              "ar": "الشِّعر",
              "em": "📜",
              "ex": "Darwish wrote poetry about Palestine.",
              "exAr": "كتب درويش شعراً عن فلسطين."
            },
            {
              "en": "poem",
              "ar": "قصيدة",
              "em": "✒️",
              "ex": "We learned a beautiful poem today.",
              "exAr": "تعلّمنا اليوم قصيدةً جميلة."
            },
            {
              "en": "editor",
              "ar": "محرِّر (صحفي)",
              "em": "📰",
              "ex": "The editor checks every article.",
              "exAr": "يراجع المحرّر كلّ مقال."
            },
            {
              "en": "abroad",
              "ar": "في الخارج",
              "em": "🌍",
              "ex": "My uncle works abroad.",
              "exAr": "عمّي يعمل في الخارج."
            },
            {
              "en": "delighted",
              "ar": "مسرورٌ جداً",
              "em": "😊",
              "ex": "We were delighted to see him again.",
              "exAr": "سُررنا كثيراً برؤيته من جديد."
            },
            {
              "en": "permit",
              "ar": "تصريح",
              "em": "🪪",
              "ex": "You need a permit to travel.",
              "exAr": "تحتاج إلى تصريح لتسافر."
            },
            {
              "en": "disappear",
              "ar": "يختفي",
              "em": "🌫️",
              "ex": "The village disappeared after the war.",
              "exAr": "اختفت القرية بعد الحرب."
            },
            {
              "en": "return",
              "ar": "يعود",
              "em": "🔙",
              "ex": "He returned home in 1996.",
              "exAr": "عاد إلى وطنه عام 1996."
            },
            {
              "en": "internationally",
              "ar": "عالمياً (international: عالمي)",
              "em": "🌐",
              "ex": "His poems became internationally known.",
              "exAr": "صارت قصائده معروفةً عالمياً."
            }
          ],
          "reading": {
            "title": "A Poet's Journey",
            "paras": [
              {
                "en": "Mahmoud Darwish was born in 1942 in Al-Birwa, a village near Acre. In 1948, when he was only six, his family had to leave their home. They became refugees in Lebanon.",
                "ar": "وُلد محمود درويش عام 1942 في البروة، وهي قرية قرب عكّا. وفي عام 1948، حين كان في السادسة فقط، اضطرّت عائلته إلى ترك بيتها، فصاروا لاجئين في لبنان."
              },
              {
                "en": "A year later, the family came back, but their village had disappeared. A new settlement stood in its place. So Darwish grew up as a refugee in his own land.",
                "ar": "بعد عام عادت العائلة، لكنّ قريتهم كانت قد اختفت، وقامت مكانها مستوطنة جديدة. فنشأ درويش لاجئاً في أرضه."
              },
              {
                "en": "In 1959, he started working for a newspaper in Haifa. A year later, he published his first book of poetry. Later, he became the newspaper's editor, and his poems about Palestine became famous all over the world.",
                "ar": "في عام 1959 بدأ العمل في صحيفة في حيفا، وبعد عام نشر أول ديوان شعر له. ثم صار محرّراً للصحيفة، واشتهرت قصائده عن فلسطين في العالم كلّه."
              },
              {
                "en": "In 1970, life became very difficult for him, so he left and lived in exile in Beirut, Cairo, London, Paris and Tunis. When he returned in 1996, thousands of people welcomed him. He was delighted that people had not forgotten him. He died in 2008.",
                "ar": "في عام 1970 صارت الحياة صعبة جداً عليه، فرحل وعاش في المنفى في بيروت والقاهرة ولندن وباريس وتونس. وحين عاد عام 1996 استقبله الآلاف، وسُرّ كثيراً لأنّ الناس لم ينسوه. وتوفّي عام 2008."
              }
            ],
            "questions": [
              {
                "q": "When was Darwish born?",
                "o": [
                  "In 1942",
                  "In 1948",
                  "In 1959"
                ],
                "a": 0
              },
              {
                "q": "Where did his family go in 1948?",
                "o": [
                  "To Egypt",
                  "To Lebanon",
                  "To Jordan"
                ],
                "a": 1
              },
              {
                "q": "What had happened to his village when the family returned?",
                "o": [
                  "It had become bigger",
                  "It had disappeared",
                  "It had become a city"
                ],
                "a": 1,
                "why": "Their village had disappeared."
              },
              {
                "tf": false,
                "q": "He published his first book before he worked for the newspaper.",
                "why": "He published it a year after he started at the newspaper."
              },
              {
                "q": "Why was Darwish delighted in 1996?",
                "o": [
                  "People had not forgotten him",
                  "He won a prize",
                  "He became an editor"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "Past Continuous and Past Simple",
              "titleAr": "الماضي المستمر والماضي البسيط",
              "explain": "نستخدم <b>الماضي المستمر</b> (was / were + V-ing) لحدثٍ <b>طويل</b> كان مستمرّاً في الماضي، و<b>الماضي البسيط</b> لحدثٍ <b>قصير</b> قطعه. بعد <b>while</b> يأتي غالباً الماضي المستمر، وبعد <b>when</b> يأتي غالباً الماضي البسيط.",
              "form": "While + S + was / were + V-ing, S + V2    ·    S + was / were + V-ing + when + S + V2",
              "examples": [
                {
                  "en": "While I **was walking** home, it **started** to rain.",
                  "ar": "بينما كنتُ أمشي إلى البيت، بدأ المطر."
                },
                {
                  "en": "They **were watching** TV when the lights **went** out.",
                  "ar": "كانوا يشاهدون التلفاز عندما انطفأت الأضواء."
                },
                {
                  "en": "My brother **was riding** his bike when he **had** an accident.",
                  "ar": "كان أخي يركب درّاجته عندما وقع له حادث."
                }
              ],
              "questions": [
                {
                  "q": "While I ___, it started raining.",
                  "o": [
                    "walk",
                    "walked",
                    "was walking"
                  ],
                  "a": 2,
                  "why": "الحدث الطويل بعد while: was walking"
                },
                {
                  "q": "They were watching TV when their house ___.",
                  "o": [
                    "collapse",
                    "collapsed",
                    "was collapsing"
                  ],
                  "a": 1,
                  "why": "الحدث القصير بعد when: الماضي البسيط."
                },
                {
                  "q": "While she ___ football, she broke her leg.",
                  "o": [
                    "played",
                    "was playing",
                    "plays"
                  ],
                  "a": 1
                },
                {
                  "type": "type",
                  "q": "My brother ___ his bike when he had an accident. (ride)",
                  "a": [
                    "was riding"
                  ],
                  "why": "was + riding"
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «كنّا نقرأ عندما دخل المعلّم»",
                  "words": [
                    "We",
                    "were",
                    "reading",
                    "when",
                    "the",
                    "teacher",
                    "came",
                    "in."
                  ]
                }
              ]
            },
            {
              "title": "Past Perfect",
              "titleAr": "الماضي التام",
              "explain": "نستخدمه لحدثٍ وقع <b>قبل</b> حدثٍ آخر في الماضي: <b>had + التصريف الثالث</b>. الحدث الأقدم بالماضي التام، والأحدث بالماضي البسيط. كلمات تساعدك: <b>by the time</b> و<b>before</b> و<b>after</b> و<b>when</b>.",
              "form": "S + had + V3   …   before / when / by the time + S + V2",
              "examples": [
                {
                  "en": "When they **returned**, their village **had disappeared**.",
                  "ar": "عندما عادوا، كانت قريتهم قد اختفت."
                },
                {
                  "en": "By the time he was 18, he **had written** many poems.",
                  "ar": "عندما بلغ الثامنة عشرة، كان قد كتب قصائد كثيرة."
                },
                {
                  "en": "The teacher left after the bell **had rung**.",
                  "ar": "غادر المعلّم بعد أن رنّ الجرس."
                },
                {
                  "en": "He was happy that people **had not forgotten** him.",
                  "ar": "كان سعيداً لأنّ الناس لم ينسوه."
                }
              ],
              "questions": [
                {
                  "q": "When they returned home, their car ___.",
                  "o": [
                    "disappear",
                    "disappeared",
                    "had disappeared"
                  ],
                  "a": 2,
                  "why": "اختفت السيارة قبل عودتهم: had + V3"
                },
                {
                  "q": "By 1960, Darwish ___ his first book.",
                  "o": [
                    "published",
                    "have published",
                    "had published"
                  ],
                  "a": 2
                },
                {
                  "q": "By the time Jamila ___ school, she had written many poems.",
                  "o": [
                    "leave",
                    "left",
                    "was leaving"
                  ],
                  "a": 1,
                  "why": "الحدث الأحدث بالماضي البسيط."
                },
                {
                  "type": "type",
                  "q": "Hassan found the key which he ___ two days before. (lose)",
                  "a": [
                    "had lost"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «كان الفيلم قد بدأ قبل أن نصل»",
                  "words": [
                    "The",
                    "film",
                    "had",
                    "started",
                    "before",
                    "we",
                    "arrived."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"refugee\" means:",
              "o": [
                "لاجئ",
                "مسافر",
                "سائح"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"abroad\" means:",
              "o": [
                "في الخارج",
                "في البيت",
                "في المدرسة"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "Darwish's poems became known all over the world.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "publish",
                  "ينشر"
                ],
                [
                  "editor",
                  "محرّر"
                ],
                [
                  "exile",
                  "منفى"
                ],
                [
                  "delighted",
                  "مسرور جداً"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "While we ___ dinner, the phone rang.",
              "o": [
                "had",
                "were having",
                "have"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "q": "Last year, I ___ my holiday in Jericho.",
              "o": [
                "spend",
                "spent",
                "have spent"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "The doctor realised that she ___ the illness before. (catch)",
              "a": [
                "had caught"
              ],
              "lv": "hard"
            },
            {
              "q": "Choose the correct sentence.",
              "o": [
                "When I arrived, the bus had already left.",
                "When I had arrived, the bus already left.",
                "When I arrive, the bus had already leave."
              ],
              "a": 0,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "He",
                "was",
                "sleeping",
                "when",
                "the",
                "storm",
                "started."
              ],
              "lv": "hard"
            },
            {
              "q": "Why did Darwish grow up \"as a refugee in his own land\"?",
              "o": [
                "His village had gone and he lived somewhere else",
                "He lived in Lebanon all his life",
                "He worked abroad"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },

    /* ================= الوحدة 7 ================= */
    7: { title: 'أخبار سارّة من الأطباء', titleEn: 'Good news from the doctors', lessons: [{
      id: '7-1', title: 'Good news from the doctors', titleAr: 'أخبار سارّة من الأطباء',
      vocab: [
        { en: 'basic', ar: 'أساسي', em: '🩺', ex: 'Everyone needs basic health care.', exAr: 'يحتاج الجميع إلى رعاية صحية أساسية.' },
        { en: 'bend', ar: 'يَنثني / يَثني', em: '🦾', ex: 'The new arm can bend like a real arm.', exAr: 'الذراع الجديدة تنثني مثل الذراع الحقيقية.' },
        { en: 'bionic', ar: 'بيونيّ (عضو صناعي ذكي)', em: '🤖', ex: 'He uses a bionic hand to hold a cup.', exAr: 'يستخدم يداً بيونيّة ليمسك الكوب.' },
        { en: 'brain', ar: 'الدماغ', em: '🧠', ex: 'The brain sends messages to the body.', exAr: 'يرسل الدماغ رسائل إلى الجسم.' },
        { en: 'care', ar: 'رعاية', em: '🤲', ex: 'My grandmother needs special care.', exAr: 'جدّتي تحتاج إلى رعاية خاصّة.' },
        { en: 'college', ar: 'كلّية', em: '🏛️', ex: 'My cousin studies at a medical college.', exAr: 'ابن عمّي يدرس في كلّية الطبّ.' },
        { en: 'connect', ar: 'يَربط / يتّصل', em: '🔌', ex: 'The bionic arm connects with the brain.', exAr: 'الذراع البيونيّة تتّصل بالدماغ.' },
        { en: 'high-tech', ar: 'عالي التقنية', em: '💻', ex: 'Hospitals use high-tech machines.', exAr: 'تستخدم المستشفيات أجهزة عالية التقنية.' },
        { en: 'point out', ar: 'يُشير إلى / يُنبّه إلى', em: '👉', ex: 'The doctor pointed out that health care is better now.', exAr: 'أشار الطبيب إلى أنّ الرعاية الصحية صارت أفضل.' },
        { en: 'ramp', ar: 'منحدر', em: '♿', ex: 'Our school built a ramp for wheelchairs.', exAr: 'بنت مدرستنا منحدراً للكراسي المتحرّكة.' },
        { en: 'wheelchair', ar: 'كرسي متحرّك', em: '🦽', ex: 'He moves around in a wheelchair.', exAr: 'يتنقّل على كرسيٍّ متحرّك.' },
        { en: 'whereas', ar: 'بينما (للمقارنة)', em: '⚖️', ex: 'My brother likes science, whereas I like art.', exAr: 'أخي يحبّ العلوم، بينما أحبّ أنا الفنّ.' },
        { en: 'development', ar: 'تطوّر (develop: يُطوّر)', em: '📈', ex: 'There is fast development in medicine.', exAr: 'هناك تطوّر سريع في الطبّ.' },
        { en: 'discovery', ar: 'اكتشاف (discover: يكتشف)', em: '🔬', ex: 'It was an important discovery.', exAr: 'كان اكتشافاً مهمّاً.' },
        { en: 'invention', ar: 'اختراع (invent: يخترع)', em: '💡', ex: 'The wheelchair was a great invention.', exAr: 'كان الكرسي المتحرّك اختراعاً عظيماً.' }
      ],
      reading: {
        title: 'The Wonders of Modern Medicine',
        paras: [
          { en: 'After Jenan Rashidi wrote about Waleed\'s operation, many readers asked her to write more about medicine. So she went to London to meet Dr Mark Way at a medical college.',
            ar: 'بعد أن كتبت جنان رشيدي عن عملية وليد، طلب منها كثير من القرّاء أن تكتب أكثر عن الطبّ. فذهبت إلى لندن لتقابل الدكتور مارك واي في كلّية طبّية.' },
          { en: 'Dr Way said that medicine was developing very fast. He explained that there were new operations, new medicines and new inventions every year. He also pointed out that basic health care was better around the world, so people were living longer and healthier lives.',
            ar: 'قال الدكتور واي إنّ الطبّ يتطوّر بسرعة كبيرة، وأوضح أنّ هناك عمليات وأدوية واختراعات جديدة كلّ عام. وأشار أيضاً إلى أنّ الرعاية الصحية الأساسية صارت أفضل في العالم، فصار الناس يعيشون حياةً أطول وأكثر صحّة.' },
          { en: 'Then they talked about disabled people. Dr Way said that in the past, they had to accept their problems, whereas now some of them could hear or see again. He added that many new buildings had ramps for people in wheelchairs.',
            ar: 'ثم تحدّثا عن ذوي الإعاقة. قال الدكتور واي إنّهم في الماضي كانوا مضطرّين لتقبّل مشكلاتهم، بينما صار بعضهم اليوم يسمع أو يرى من جديد. وأضاف أنّ كثيراً من المباني الجديدة فيها منحدرات للكراسي المتحرّكة.' },
          { en: 'Finally, Dr Way talked about bionic body parts. He said that if someone lost an arm, doctors could give them a bionic arm. It could bend and turn like a real arm because it connected with the brain. "In the past, disabled people couldn\'t live normal lives," he said, "whereas today more and more of them can."',
            ar: 'وأخيراً تحدّث الدكتور واي عن الأعضاء البيونيّة. قال إنّه إذا فقد شخصٌ ذراعه، يستطيع الأطباء أن يعطوه ذراعاً بيونيّة تنثني وتدور مثل الذراع الحقيقية لأنها تتّصل بالدماغ. وقال: «في الماضي لم يكن ذوو الإعاقة يعيشون حياة طبيعية، بينما اليوم يستطيع ذلك عددٌ متزايد منهم».' }
        ],
        questions: [
          { q: 'Why did Jenan meet Dr Way?', o: ['Because she was ill', 'Because readers wanted to read more about medicine', 'Because she wanted to study at the college'], a: 1, why: 'Many readers asked her to write more about medicine.' },
          { q: 'According to Dr Way, why are people living longer?', o: ['Because basic health care is better', 'Because they work less', 'Because they live in big cities'], a: 0, why: 'Basic health care was better around the world.' },
          { q: 'What do many new buildings have for people in wheelchairs?', o: ['Big windows', 'Ramps', 'Special doors'], a: 1 },
          { tf: true, q: 'A bionic arm can move because it connects with the brain.', why: 'It could bend and turn like a real arm because it connected with the brain.' },
          { q: 'In the passage, "whereas" is used to…', o: ['compare two ideas', 'give a reason', 'show time'], a: 0, why: 'whereas = بينما، للمقارنة بين فكرتين.' }
        ]
      },
      rules: [
        {
          title: 'Reported Speech: Statements', titleAr: 'الكلام المنقول: الجمل الخبرية',
          explain: 'عندما ننقل كلام شخصٍ بفعل نقلٍ في الماضي مثل <b>said / told / explained</b>، يرجع زمن الفعل <b>خطوة إلى الماضي</b>، وتتغيّر الضمائر حسب المعنى. نستخدم <b>said</b> بلا مفعول، و<b>told + شخص</b>. كلمة <b>that</b> يجوز حذفها.',
          form: 'is / are → was / were   ·   is / are + -ing → was / were + -ing   ·   V1 → V2   ·   V2 → had + V3   ·   have / has + V3 → had + V3   ·   will → would   ·   can → could',
          examples: [
            { en: '"Science **is** helping people," he said. → He said that science **was** helping people.', ar: 'is تصبح was' },
            { en: '"It **looks** like a real arm," he said. → He said that it **looked** like a real arm.', ar: 'المضارع البسيط يصبح ماضياً بسيطاً' },
            { en: '"They **accepted** their problems," he said. → He said that they **had accepted** their problems.', ar: 'الماضي البسيط يصبح ماضياً تامّاً' },
            { en: '"It **will** continue," he said. → He said that it **would** continue.', ar: 'will تصبح would' },
            { en: '"It **can** understand," he said. → He said that it **could** understand.', ar: 'can تصبح could' }
          ],
          questions: [
            { q: '"I write for a magazine," Jenan said. → Jenan said that she ___ for a magazine.', o: ['writes', 'wrote', 'has written'], a: 1, why: 'write تصبح wrote (المضارع يصبح ماضياً).' },
            { q: '"Doctors will find new medicines," he said. → He said that doctors ___ find new medicines.', o: ['will', 'would', 'can'], a: 1, why: 'will تصبح would' },
            { q: '"We have started a new project," they said. → They said that they ___ a new project.', o: ['have started', 'had started', 'started'], a: 1, why: 'have + V3 تصبح had + V3' },
            { q: '"I can walk again," Waleed said. → Waleed said that he ___ walk again.', o: ['can', 'could', 'would'], a: 1, why: 'can تصبح could' },
            { q: '"She is working at the hospital," he said. → He said that she ___ at the hospital.', o: ['is working', 'was working', 'works'], a: 1, why: 'is + -ing تصبح was + -ing' },
            { type: 'type', q: '"I can swim," Lina said. → Lina said that she ___ swim.', a: ['could'], why: 'can تصبح could' },
            { type: 'order', q: 'رتّب الكلمات: «قال إنّ الطبّ كان يتطوّر بسرعة»', words: ['He', 'said', 'that', 'medicine', 'was', 'developing', 'fast.'] }
          ]
        },
        {
          title: 'Reported Questions and Requests', titleAr: 'الأسئلة والطلبات المنقولة',
          explain: 'في <b>السؤال المنقول</b> تصير الجملة خبرية: <b>الفاعل ثم الفعل</b>، وتُحذف <b>do / does / did</b> وعلامة الاستفهام. في أسئلة نعم/لا نضيف <b>if</b> أو <b>whether</b>، وفي أسئلة <b>Wh</b> نُبقي أداة السؤال. وفي <b>الطلب المنقول</b> يختفي Can you / Could you، ونستخدم <b>ask / tell / want + شخص + to + الفعل</b>.',
          form: 'Yes/No: ask + if / whether + S + V   ·   Wh-: ask + wh-word + S + V   ·   Request: ask / tell + someone + to + V',
          examples: [
            { en: '"**Are you** free?" Samar asks me. → Samar asks **if I am** free.', ar: 'سؤال نعم/لا: if + فاعل + فعل' },
            { en: '"How **did it go**?" I ask. → I ask how **it went**.', ar: 'تُحذف did ويصير الفعل ماضياً' },
            { en: '"**Could you** look after Deema?" she asks me. → She asks me **to look** after Deema.', ar: 'الطلب: ask + شخص + to + فعل' },
            { en: '"When **does** the hospital **want** you?" → I wonder when the hospital **wants** them.', ar: 'تُحذف does وتعود s إلى الفعل' }
          ],
          questions: [
            { q: '"Are you ready?" Jenan asks. → Jenan asks ___ we are ready.', o: ['that', 'if', 'what'], a: 1, why: 'في سؤال نعم/لا نستخدم if أو whether.' },
            { q: '"Could you help me?" she asks him. → She asks him ___ her.', o: ['help', 'to help', 'helping'], a: 1, why: 'ask + شخص + to + فعل' },
            { q: '"Where do you live?" he asks. → He asks where ___.', o: ['do I live', 'I live', 'I do live'], a: 1, why: 'نحذف do وتصير الجملة خبرية.' },
            { q: '"What time is it?" she asked.', o: ['She asked what time was it.', 'She asked what time it was.', 'She asked what time it was?'], a: 1, why: 'فاعل ثم فعل، بلا علامة استفهام.' },
            { q: '"Please come immediately," the hospital tells Samar. → The hospital tells Samar ___ immediately.', o: ['come', 'to come', 'coming'], a: 1 },
            { type: 'type', q: '"Could you wait for me?" he asked me. → He asked me ___ wait for him.', a: ['to'], why: 'ask + شخص + to + فعل' },
            { type: 'order', q: 'رتّب الكلمات: «سألتني إن كنتُ متفرّغاً»', words: ['She', 'asked', 'me', 'if', 'I', 'was', 'free.'] }
          ]
        }
      ],
      mastery: [
        { lv: 'easy', q: '"wheelchair" means:', o: ['كرسي متحرّك', 'سرير المستشفى', 'منحدر'], a: 0 },
        { lv: 'easy', q: 'The noun of "discover" is:', o: ['discovery', 'discovered', 'discovering'], a: 0 },
        { lv: 'easy', tf: true, q: 'A ramp helps people in wheelchairs enter buildings.' },
        { lv: 'medium', q: 'My sister is good at maths, ___ I am good at languages.', o: ['whereas', 'because', 'so'], a: 0 },
        { lv: 'medium', q: '"I am tired," Ali said. → Ali said that he ___ tired.', o: ['is', 'was', 'were'], a: 1 },
        { lv: 'medium', q: 'She asked me ___ I could help her.', o: ['whether', 'that', 'what'], a: 0 },
        { lv: 'hard', q: '"We will visit the college," they said.', o: ['They said they will visit the college.', 'They said they would visit the college.', 'They said they would visited the college.'], a: 1 },
        { lv: 'hard', q: '"What did the doctor say?" Mum asked.', o: ['Mum asked what the doctor had said.', 'Mum asked what did the doctor say.', 'Mum asked what had the doctor said.'], a: 0, why: 'did تصبح had + V3، والجملة خبرية.' },
        { lv: 'hard', q: '"Can you open the window?" the teacher asked Sami.', o: ['The teacher asked Sami to open the window.', 'The teacher asked Sami can he open the window.', 'The teacher asked Sami opening the window.'], a: 0 },
        { lv: 'medium', type: 'match', q: 'صِل الكلام المباشر بزمنه في الكلام المنقول', pairs: [['is', 'was'], ['will', 'would'], ['can', 'could'], ['have started', 'had started']] },
        { lv: 'hard', type: 'type', q: '"We are visiting the college," they said. → They said that they ___ visiting the college.', a: ['were'] },
        { lv: 'hard', type: 'order', q: 'رتّب الكلمات لتكوّن سؤالاً منقولاً صحيحاً', words: ['Mum', 'asked', 'where', 'I', 'had', 'been.'] },
        { lv: 'hard', q: 'Why can a bionic arm move like a real arm?', o: ['It gets messages from the brain.', 'It has a big battery only.', 'The doctor moves it.'], a: 0 }
      ]
    }] },

    /* ================= الوحدة 8 ================= */
    8: {
      "title": "أيّ طريقٍ في السادسة عشرة؟",
      "titleEn": "Which way at 16?",
      "lessons": [
        {
          "id": "8-1",
          "title": "Which way at 16?",
          "titleAr": "أيّ طريقٍ في السادسة عشرة؟",
          "vocab": [
            {
              "en": "academic",
              "ar": "أكاديمي",
              "em": "🎓",
              "ex": "Ali wants to take the academic route.",
              "exAr": "يريد علي أن يسلك المسار الأكاديمي."
            },
            {
              "en": "vocational",
              "ar": "مِهني",
              "em": "🔧",
              "ex": "The vocational route teaches practical skills.",
              "exAr": "المسار المهني يعلّم مهارات عملية."
            },
            {
              "en": "apply",
              "ar": "يتقدّم بطلب",
              "em": "📝",
              "ex": "She applied to university.",
              "exAr": "تقدّمت بطلبٍ إلى الجامعة."
            },
            {
              "en": "career",
              "ar": "مِهنة / مسيرة مهنية",
              "em": "💼",
              "ex": "He wants a career in medicine.",
              "exAr": "يريد مهنةً في الطبّ."
            },
            {
              "en": "carpenter",
              "ar": "نجّار",
              "em": "🪚",
              "ex": "The carpenter made a wooden table.",
              "exAr": "صنع النجّار طاولةً خشبية."
            },
            {
              "en": "determined",
              "ar": "مُصمِّم / عازم",
              "em": "💪",
              "ex": "She is determined to succeed.",
              "exAr": "هي مصمّمة على النجاح."
            },
            {
              "en": "literary",
              "ar": "أدبي",
              "em": "📚",
              "ex": "Mona will join the literary stream.",
              "exAr": "ستلتحق منى بالفرع الأدبي."
            },
            {
              "en": "practical",
              "ar": "عملي",
              "em": "🛠️",
              "ex": "He likes practical work.",
              "exAr": "يحبّ العمل العملي."
            },
            {
              "en": "qualification",
              "ar": "مؤهِّل",
              "em": "📜",
              "ex": "You need good qualifications for this job.",
              "exAr": "تحتاج مؤهّلات جيدة لهذه الوظيفة."
            },
            {
              "en": "stream",
              "ar": "فرع (علمي / أدبي)",
              "em": "🔀",
              "ex": "Which stream will you choose in Grade 11?",
              "exAr": "أيّ فرع ستختار في الصف الحادي عشر؟"
            },
            {
              "en": "technical",
              "ar": "تقني",
              "em": "⚙️",
              "ex": "These technical instructions are difficult.",
              "exAr": "هذه التعليمات التقنية صعبة."
            },
            {
              "en": "whatever",
              "ar": "أيّاً كان",
              "em": "❓",
              "ex": "Do your best, whatever your job is.",
              "exAr": "ابذل جهدك أيّاً كانت وظيفتك."
            },
            {
              "en": "ability",
              "ar": "قُدرة (able: قادر)",
              "em": "🌟",
              "ex": "He has the ability to be a great athlete.",
              "exAr": "لديه القدرة ليكون رياضياً عظيماً."
            },
            {
              "en": "competitive",
              "ar": "تنافسي (compete: يتنافس)",
              "em": "🏆",
              "ex": "Today's world is very competitive.",
              "exAr": "عالم اليوم تنافسي جداً."
            },
            {
              "en": "specialize",
              "ar": "يتخصّص",
              "em": "🎯",
              "ex": "She wants to specialize in chemistry.",
              "exAr": "تريد أن تتخصّص في الكيمياء."
            }
          ],
          "reading": {
            "title": "Which Way Now?",
            "paras": [
              {
                "en": "Grade 10 is a year of hard work and big choices. Should you take the academic route, or the vocational route and become a carpenter or a nurse? If you lived in Germany or France, things would be different: you would study most of your subjects until you graduated.",
                "ar": "الصف العاشر سنة عملٍ جادّ وخيارات كبيرة. هل تسلك المسار الأكاديمي، أم المسار المهني لتصبح نجّاراً أو ممرّضاً؟ لو كنت تعيش في ألمانيا أو فرنسا لكانت الأمور مختلفة: كنت ستدرس معظم موادّك حتى تتخرّج."
              },
              {
                "en": "In Palestine, you can choose, and your choice must match your interests and abilities. If you choose the right subjects, they will lead you to the right career. If you chose badly, you might become bored, leave school with weak qualifications and end up in a 'dead-end' job.",
                "ar": "في فلسطين تستطيع أن تختار، ويجب أن يناسب اختيارك اهتماماتك وقدراتك. إذا اخترت الموادّ الصحيحة فستقودك إلى المهنة الصحيحة. ولو اخترت اختياراً سيئاً فقد تشعر بالملل، وتترك المدرسة بمؤهّلات ضعيفة، وتنتهي في وظيفة «بلا مستقبل»."
              },
              {
                "en": "Some people say that doctors and engineers have the only 'good' jobs. Don't listen! A job is good only if it is right for you, and people are respected when they do their work well, whatever their jobs are.",
                "ar": "يقول بعض الناس إنّ الأطباء والمهندسين وحدهم لهم وظائف «جيدة». لا تستمع إليهم! الوظيفة جيدة فقط إذا كانت مناسبة لك، والناس يُحترمون حين يتقنون عملهم، أيّاً كانت وظائفهم."
              },
              {
                "en": "If you like maths and sciences, you might choose the scientific stream. If you prefer history, Arabic and English, the literary stream may suit you. If you enjoy practical work, a vocational college can help you specialize. Whatever you choose, be determined, because today's world is very competitive!",
                "ar": "إذا كنت تحبّ الرياضيات والعلوم فقد تختار الفرع العلمي. وإذا كنت تفضّل التاريخ والعربية والإنجليزية فقد يناسبك الفرع الأدبي. وإذا كنت تستمتع بالعمل العملي، فالكلية المهنية تساعدك على التخصّص. وأيّاً كان اختيارك كن مصمّماً، فعالم اليوم تنافسي جداً!"
              }
            ],
            "questions": [
              {
                "q": "How is school in Germany and France different?",
                "o": [
                  "Students study most subjects until they graduate",
                  "Students choose a stream in Grade 5",
                  "There are no exams"
                ],
                "a": 0
              },
              {
                "q": "What can happen if you choose badly?",
                "o": [
                  "You may become bored and get weak qualifications",
                  "You will become a doctor",
                  "You will finish school early"
                ],
                "a": 0
              },
              {
                "q": "According to the writer, when is a job \"good\"?",
                "o": [
                  "When it pays a lot",
                  "When it is right for you",
                  "When it is a doctor's job"
                ],
                "a": 1
              },
              {
                "tf": false,
                "q": "In the literary stream, you mostly study maths and sciences.",
                "why": "The literary stream is history, Arabic and English."
              },
              {
                "q": "Which route suits someone who likes working with their hands?",
                "o": [
                  "The academic route",
                  "The vocational route",
                  "The literary stream"
                ],
                "a": 1
              }
            ]
          },
          "rules": [
            {
              "title": "Conditional Type 2",
              "titleAr": "الجملة الشرطية: النوع الثاني",
              "explain": "نستخدمه لموقفٍ <b>غير حقيقي أو غير محتمل</b> في الحاضر أو المستقبل: <b>If + الماضي البسيط</b>، ثم <b>would + الفعل</b>. مع فعل be نستطيع استخدام <b>were</b> مع كلّ الضمائر. (للتذكير: النوع الأول للأمور المحتملة: If + مضارع، ثم will + فعل.)",
              "form": "If + S + V2,  S + would / could / might + V",
              "examples": [
                {
                  "en": "If you **lived** in Germany, things **would be** different.",
                  "ar": "لو كنتَ تعيش في ألمانيا، لكانت الأمور مختلفة."
                },
                {
                  "en": "If I **were** you, I **would choose** the scientific stream.",
                  "ar": "لو كنتُ مكانك، لاخترتُ الفرع العلمي."
                },
                {
                  "en": "If she **had** more time, she **could learn** to play the oud.",
                  "ar": "لو كان لديها وقت أكثر، لاستطاعت تعلّم العزف على العود."
                },
                {
                  "en": "Type 1: If you **choose** well, you **will find** the right career.",
                  "ar": "النوع الأول (محتمل): إذا أحسنت الاختيار، ستجد المهنة المناسبة."
                }
              ],
              "questions": [
                {
                  "q": "If I ___ a lot of money, I would build a school.",
                  "o": [
                    "have",
                    "had",
                    "will have"
                  ],
                  "a": 1,
                  "why": "النوع الثاني: If + الماضي البسيط."
                },
                {
                  "q": "If he studied harder, he ___ better marks.",
                  "o": [
                    "will get",
                    "would get",
                    "gets"
                  ],
                  "a": 1
                },
                {
                  "q": "If I ___ you, I would apply to that college.",
                  "o": [
                    "am",
                    "were",
                    "be"
                  ],
                  "a": 1,
                  "why": "If I were you: للنصيحة."
                },
                {
                  "type": "type",
                  "q": "If we lived near the sea, we ___ swim every day. (would / will)",
                  "a": [
                    "would"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «لو كنتُ نجّاراً لصنعتُ طاولات»",
                  "words": [
                    "If",
                    "I",
                    "were",
                    "a",
                    "carpenter,",
                    "I",
                    "would",
                    "make",
                    "tables."
                  ]
                }
              ]
            },
            {
              "title": "Conditional Type 3",
              "titleAr": "الجملة الشرطية: النوع الثالث",
              "explain": "نستخدمه لحدثٍ <b>في الماضي لم يحدث</b>، فنتخيّل نتيجةً مختلفة: <b>If + had + V3</b>، ثم <b>would have + V3</b>. ويمكن أن تأتي جملة would have وحدها إذا كان الشرط مفهوماً من السؤال أو السياق.",
              "form": "If + S + had + V3,  S + would have + V3",
              "examples": [
                {
                  "en": "If you **had been** born in 1700, you **would not have had** any education.",
                  "ar": "لو وُلدتَ عام 1700، لما حصلتَ على أيّ تعليم."
                },
                {
                  "en": "If she **had studied**, she **would have passed** the exam.",
                  "ar": "لو درست، لنجحت في الامتحان."
                },
                {
                  "en": "What if you had lived 300 years ago? You **would have worked** very long hours.",
                  "ar": "ماذا لو عشتَ قبل 300 سنة؟ لكنتَ عملتَ ساعاتٍ طويلة جداً."
                }
              ],
              "questions": [
                {
                  "q": "If I had known about the party, I ___.",
                  "o": [
                    "would come",
                    "would have come",
                    "will come"
                  ],
                  "a": 1
                },
                {
                  "q": "If they ___ earlier, they would have caught the bus.",
                  "o": [
                    "left",
                    "had left",
                    "have left"
                  ],
                  "a": 1,
                  "why": "If + had + V3"
                },
                {
                  "q": "If he had been born in 1700, he ___ to school.",
                  "o": [
                    "wouldn't have gone",
                    "won't go",
                    "didn't go"
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "If you had asked me, I would ___ helped you.",
                  "a": [
                    "have"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «لو تقدّمت بطلب لحصلت على الوظيفة»",
                  "words": [
                    "If",
                    "she",
                    "had",
                    "applied,",
                    "she",
                    "would",
                    "have",
                    "got",
                    "the",
                    "job."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"carpenter\" means:",
              "o": [
                "نجّار",
                "حدّاد",
                "مزارع"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "The adjective of \"compete\" is:",
              "o": [
                "competitive",
                "competition",
                "competing"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "The vocational route can lead to jobs like carpenter or nurse.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "academic",
                  "أكاديمي"
                ],
                [
                  "vocational",
                  "مهني"
                ],
                [
                  "qualification",
                  "مؤهّل"
                ],
                [
                  "determined",
                  "مصمّم"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "If I ___ a bird, I would fly over Jerusalem.",
              "o": [
                "am",
                "were",
                "will be"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "q": "She has a natural ___ in music.",
              "o": [
                "able",
                "ability",
                "ably"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "If they had saved money, they ___ have bought a car.",
              "a": [
                "would"
              ],
              "lv": "hard"
            },
            {
              "q": "Choose the correct sentence.",
              "o": [
                "If I had seen him, I would have told him.",
                "If I saw him, I would have told him.",
                "If I had seen him, I will tell him."
              ],
              "a": 0,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "If",
                "you",
                "chose",
                "badly,",
                "you",
                "would",
                "be",
                "bored."
              ],
              "lv": "hard"
            },
            {
              "q": "Why should you be determined, according to the passage?",
              "o": [
                "Because the world is competitive",
                "Because school is easy",
                "Because jobs are boring"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },
    /* ================= الوحدة 9 ================= */
    9: {
      "title": "غذاء صحي، جسم صحي",
      "titleEn": "Healthy eating – healthy body",
      "lessons": [
        {
          "id": "9-1",
          "title": "Healthy eating – healthy body",
          "titleAr": "غذاء صحي، جسم صحي",
          "vocab": [
            {
              "en": "balanced",
              "ar": "متوازن",
              "em": "⚖️",
              "ex": "Eat a balanced diet every day.",
              "exAr": "تناول غذاءً متوازناً كلّ يوم."
            },
            {
              "en": "calorie",
              "ar": "سُعرة حرارية",
              "em": "🔥",
              "ex": "This pie has a lot of calories.",
              "exAr": "هذه الفطيرة فيها سعرات حرارية كثيرة."
            },
            {
              "en": "contain",
              "ar": "يحتوي",
              "em": "🥫",
              "ex": "Fruit contains vitamins.",
              "exAr": "الفاكهة تحتوي على فيتامينات."
            },
            {
              "en": "diet",
              "ar": "نظام غذائي",
              "em": "🥗",
              "ex": "My diet has lots of vegetables.",
              "exAr": "نظامي الغذائي فيه خضار كثيرة."
            },
            {
              "en": "fuel",
              "ar": "وقود",
              "em": "⛽",
              "ex": "Cars need fuel, and we need food.",
              "exAr": "السيارات تحتاج وقوداً، ونحن نحتاج طعاماً."
            },
            {
              "en": "likely",
              "ar": "مُرجَّح / من المحتمل",
              "em": "🎲",
              "ex": "You are likely to feel tired without breakfast.",
              "exAr": "من المرجّح أن تشعر بالتعب دون فطور."
            },
            {
              "en": "make up for",
              "ar": "يعوّض عن",
              "em": "🔁",
              "ex": "He made up for the lost time.",
              "exAr": "عوّض الوقت الضائع."
            },
            {
              "en": "nutrient",
              "ar": "عنصر غذائي",
              "em": "🥦",
              "ex": "Vegetables give us important nutrients.",
              "exAr": "الخضار تعطينا عناصر غذائية مهمّة."
            },
            {
              "en": "on the other hand",
              "ar": "من ناحيةٍ أخرى",
              "em": "🤚",
              "ex": "Junk food is tasty. On the other hand, it is unhealthy.",
              "exAr": "الوجبات السريعة لذيذة، ومن ناحية أخرى هي غير صحية."
            },
            {
              "en": "overweight",
              "ar": "زائد الوزن",
              "em": "📏",
              "ex": "Too much junk food can make you overweight.",
              "exAr": "الإكثار من الوجبات السريعة قد يزيد وزنك."
            },
            {
              "en": "pie",
              "ar": "فطيرة",
              "em": "🥧",
              "ex": "Mum made a spinach pie.",
              "exAr": "صنعت أمّي فطيرة سبانخ."
            },
            {
              "en": "portion",
              "ar": "حِصّة (كمية من الطعام)",
              "em": "🍽️",
              "ex": "Eat smaller portions of meat.",
              "exAr": "تناول حصصاً أصغر من اللحم."
            },
            {
              "en": "teenager",
              "ar": "مراهق",
              "em": "🧑",
              "ex": "Teenagers need a healthy breakfast.",
              "exAr": "يحتاج المراهقون فطوراً صحياً."
            },
            {
              "en": "daily",
              "ar": "يومي (day: يوم)",
              "em": "📅",
              "ex": "Exercise is part of my daily routine.",
              "exAr": "الرياضة جزء من روتيني اليومي."
            },
            {
              "en": "surprisingly",
              "ar": "على نحوٍ مفاجئ (surprised: متفاجئ)",
              "em": "😮",
              "ex": "Not surprisingly, he felt tired.",
              "exAr": "ليس مفاجئاً أنه شعر بالتعب."
            }
          ],
          "reading": {
            "title": "How to Be Healthier",
            "paras": [
              {
                "en": "Many American teenagers look healthy, but in fact many of them are not. Fewer of them do sports, and more and more of them eat badly. A big part of the problem is junk food.",
                "ar": "كثير من المراهقين الأمريكيين يبدون أصحّاء، لكنّ كثيراً منهم ليسوا كذلك في الحقيقة. عدد من يمارسون الرياضة منهم يقلّ، ويزداد من يأكلون طعاماً سيئاً. وجزء كبير من المشكلة هو الوجبات السريعة."
              },
              {
                "en": "Another problem is that many teens don't eat at the right times. Carrie is 15, and she hasn't eaten breakfast since she was in third grade. \"I don't have time,\" she says, \"and I'm not hungry in the morning.\" About 20% of American teenagers are like Carrie.",
                "ar": "ومشكلة أخرى أنّ كثيراً من المراهقين لا يأكلون في الأوقات الصحيحة. كاري عمرها 15 سنة، ولم تتناول الفطور منذ كانت في الصف الثالث. تقول: «ليس لديّ وقت، ولا أشعر بالجوع في الصباح». ونحو 20% من المراهقين الأمريكيين مثل كاري."
              },
              {
                "en": "Your body is like a car: a car needs fuel, and your body needs food. By the morning, your body has used most of yesterday's food. People who miss breakfast often have headaches and low energy. On the other hand, people who eat a good breakfast learn and behave better.",
                "ar": "جسمك مثل السيارة: السيارة تحتاج وقوداً، وجسمك يحتاج طعاماً. وعند الصباح يكون جسمك قد استهلك معظم طعام الأمس. ومن يتركون الفطور يُصابون غالباً بالصداع وتقلّ طاقتهم. ومن ناحية أخرى، من يتناولون فطوراً جيداً يتعلّمون ويتصرّفون بشكل أفضل."
              },
              {
                "en": "Moreover, people who miss breakfast are likely to make up for it later with big portions of food that contain lots of fat and calories, like burgers, pies and fries. Not surprisingly, 17% of American teens are now very overweight. The answer is a healthy breakfast, a balanced daily diet and more exercise.",
                "ar": "وفوق ذلك، من يتركون الفطور يُرجَّح أن يعوّضوه لاحقاً بحصصٍ كبيرة من طعامٍ فيه دهون وسعرات كثيرة، مثل البرغر والفطائر والبطاطا المقلية. وليس مفاجئاً أنّ 17% من المراهقين الأمريكيين صاروا يعانون زيادةً كبيرة في الوزن. والحلّ فطور صحي، وغذاء يومي متوازن، ورياضة أكثر."
              }
            ],
            "questions": [
              {
                "q": "What is a big part of the problem for American teens?",
                "o": [
                  "Junk food",
                  "Too much sport",
                  "Too much sleep"
                ],
                "a": 0
              },
              {
                "q": "Why doesn't Carrie eat breakfast?",
                "o": [
                  "She has no time and isn't hungry",
                  "She doesn't like eggs",
                  "Her mother doesn't cook"
                ],
                "a": 0
              },
              {
                "q": "What percentage of US teenagers don't eat breakfast?",
                "o": [
                  "17%",
                  "20%",
                  "50%"
                ],
                "a": 1,
                "why": "About 20% of American teenagers are like Carrie."
              },
              {
                "tf": true,
                "q": "People who eat a good breakfast learn better."
              },
              {
                "q": "Why does the writer compare the body to a car?",
                "o": [
                  "Both need fuel to work",
                  "Both are fast",
                  "Both need water"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "Articles: a / an / some / the",
              "titleAr": "أدوات التنكير والتعريف",
              "explain": "نستخدم <b>a / an</b> مع الاسم المعدود المفرد عند ذكره <b>أوّل مرّة</b> (an قبل صوت متحرّك)، و<b>some</b> مع الجمع وغير المعدود مثل water و milk و food. وعندما نتحدّث عن الشيء <b>مرّةً ثانية</b> أو يكون معروفاً نستخدم <b>the</b>. وفي الكلام العام عن نوعٍ من الأشياء <b>لا نستخدم أداة</b>: Cars need fuel.",
              "form": "أوّل ذكر: a / an + مفرد  ·  some + جمع أو غير معدود    ·    ذكر ثانٍ: the    ·    كلام عام: بلا أداة",
              "examples": [
                {
                  "en": "I'd like **a** burger and **some** fries.",
                  "ar": "أريد برغر وبعض البطاطا المقلية."
                },
                {
                  "en": "I bought **a** melon. **The** melon was sweet.",
                  "ar": "اشتريت شمّامة. وكانت الشمّامة حلوة (ذكر ثانٍ)."
                },
                {
                  "en": "**Cars** need fuel, and **food** gives nutrients.",
                  "ar": "كلام عام بلا أداة."
                },
                {
                  "en": "Can I have **some** water, please?",
                  "ar": "water غير معدود: some"
                }
              ],
              "questions": [
                {
                  "q": "I'd like ___ apple, please.",
                  "o": [
                    "a",
                    "an",
                    "some"
                  ],
                  "a": 1,
                  "why": "apple تبدأ بصوت متحرّك: an"
                },
                {
                  "q": "Can I have ___ milk?",
                  "o": [
                    "a",
                    "an",
                    "some"
                  ],
                  "a": 2,
                  "why": "milk غير معدود."
                },
                {
                  "q": "I bought a pie. ___ pie was delicious.",
                  "o": [
                    "A",
                    "The",
                    "Some"
                  ],
                  "a": 1,
                  "why": "ذكرٌ ثانٍ: the"
                },
                {
                  "q": "Choose the general statement.",
                  "o": [
                    "Vegetables are good for you.",
                    "The vegetables are good for you.",
                    "A vegetables are good for you."
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "Tim is going to buy ___ melon and some butter.",
                  "a": [
                    "a"
                  ]
                }
              ]
            },
            {
              "title": "Defining Relative Clauses",
              "titleAr": "جمل الوصل المحدِّدة",
              "explain": "تضيف معلومة <b>ضرورية</b> عن الاسم. نستخدم <b>who / that</b> للأشخاص، و<b>which / that</b> للأشياء. تأتي جملة الوصل بعد الاسم مباشرةً، في <b>آخر</b> الجملة أو في <b>وسطها</b>.",
              "form": "person + who / that …    ·    thing + which / that …",
              "examples": [
                {
                  "en": "Carrie is a girl **who** doesn't eat breakfast.",
                  "ar": "كاري فتاة لا تتناول الفطور."
                },
                {
                  "en": "Junk food is food **which** contains lots of fat.",
                  "ar": "الوجبات السريعة طعام يحتوي على دهون كثيرة."
                },
                {
                  "en": "People **who** miss breakfast often feel tired.",
                  "ar": "جملة الوصل في وسط الجملة."
                },
                {
                  "en": "The pie **that** I ate was delicious.",
                  "ar": "that تصلح للأشخاص والأشياء."
                }
              ],
              "questions": [
                {
                  "q": "A teenager is a person ___ is between 13 and 19.",
                  "o": [
                    "who",
                    "which",
                    "where"
                  ],
                  "a": 0,
                  "why": "للأشخاص: who"
                },
                {
                  "q": "A pie is a food ___ has pastry.",
                  "o": [
                    "who",
                    "which",
                    "whose"
                  ],
                  "a": 1,
                  "why": "للأشياء: which"
                },
                {
                  "q": "People ___ eat a good breakfast learn better.",
                  "o": [
                    "which",
                    "who",
                    "what"
                  ],
                  "a": 1
                },
                {
                  "type": "type",
                  "q": "The book ___ I bought is about healthy food. (which / who)",
                  "a": [
                    "which",
                    "that"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «الوقود شيء تحتاجه السيارات»",
                  "words": [
                    "Fuel",
                    "is",
                    "something",
                    "which",
                    "cars",
                    "need."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"portion\" means:",
              "o": [
                "حصّة",
                "وصفة",
                "مطبخ"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"diet\" means:",
              "o": [
                "نظام غذائي",
                "رياضة",
                "مرض"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "17% of American teenagers are very overweight.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "contain",
                  "يحتوي"
                ],
                [
                  "nutrient",
                  "عنصر غذائي"
                ],
                [
                  "balanced",
                  "متوازن"
                ],
                [
                  "teenager",
                  "مراهق"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "She ate ___ egg and some bread.",
              "o": [
                "a",
                "an",
                "the"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "q": "A chef is a person ___ cooks food.",
              "o": [
                "who",
                "which",
                "when"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "If you miss breakfast, you are ___ to feel hungry later. (likely / like)",
              "a": [
                "likely"
              ],
              "lv": "hard"
            },
            {
              "q": "Choose the correct sentence.",
              "o": [
                "Cars need the fuel.",
                "Cars need fuel.",
                "A cars need fuel."
              ],
              "a": 1,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "People",
                "who",
                "miss",
                "breakfast",
                "often",
                "have",
                "headaches."
              ],
              "lv": "hard"
            },
            {
              "q": "According to the passage, what is \"the answer\"?",
              "o": [
                "A healthy breakfast, a balanced diet and exercise",
                "More burgers and fries",
                "Sleeping longer"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },
    /* ================= الوحدة 10 ================= */
    10: {
      "title": "الحديث عن عالم الغد",
      "titleEn": "Talking about tomorrow's world",
      "lessons": [
        {
          "id": "10-1",
          "title": "Talking about tomorrow's world",
          "titleAr": "الحديث عن عالم الغد",
          "vocab": [
            {
              "en": "disastrous",
              "ar": "كارثي (disaster: كارثة)",
              "em": "🌪️",
              "ex": "The flood was disastrous.",
              "exAr": "كان الفيضان كارثياً."
            },
            {
              "en": "cruel",
              "ar": "قاسٍ",
              "em": "😠",
              "ex": "Why are some people so cruel?",
              "exAr": "لماذا بعض الناس قساة جداً؟"
            },
            {
              "en": "oppress",
              "ar": "يضطهد / يظلم",
              "em": "⛓️",
              "ex": "No one should oppress other people.",
              "exAr": "لا يجوز لأحد أن يظلم الآخرين."
            },
            {
              "en": "all over",
              "ar": "في كلّ مكان",
              "em": "🌍",
              "ex": "People speak English all over the world.",
              "exAr": "يتحدّث الناس الإنجليزية في كلّ مكان في العالم."
            },
            {
              "en": "peacefully",
              "ar": "بسلام (peace: سلام)",
              "em": "🕊️",
              "ex": "We want to live peacefully.",
              "exAr": "نريد أن نعيش بسلام."
            },
            {
              "en": "avoid",
              "ar": "يتجنّب",
              "em": "🚫",
              "ex": "Avoid junk food.",
              "exAr": "تجنّب الوجبات السريعة."
            },
            {
              "en": "prevent",
              "ar": "يمنع (prevention: الوقاية)",
              "em": "🛡️",
              "ex": "Washing hands prevents disease.",
              "exAr": "غسل اليدين يمنع المرض."
            },
            {
              "en": "improve",
              "ar": "يُحسّن / يتحسّن",
              "em": "📈",
              "ex": "Medical care is improving.",
              "exAr": "الرعاية الطبية تتحسّن."
            },
            {
              "en": "survive",
              "ar": "ينجو / يبقى على قيد الحياة",
              "em": "🆘",
              "ex": "More people are surviving than before.",
              "exAr": "صار عدد أكبر من الناس ينجو من قبل."
            },
            {
              "en": "starve",
              "ar": "يتضوّر جوعاً",
              "em": "🍞",
              "ex": "Nobody should starve.",
              "exAr": "لا يجب أن يجوع أحد."
            },
            {
              "en": "fail",
              "ar": "يفشل",
              "em": "❌",
              "ex": "The crops failed because of the heat.",
              "exAr": "فشلت المحاصيل بسبب الحرّ."
            },
            {
              "en": "increase",
              "ar": "يزداد",
              "em": "⬆️",
              "ex": "The population is increasing.",
              "exAr": "عدد السكّان يزداد."
            },
            {
              "en": "decrease",
              "ar": "يتناقص",
              "em": "⬇️",
              "ex": "Food production is decreasing.",
              "exAr": "إنتاج الغذاء يتناقص."
            },
            {
              "en": "force",
              "ar": "يُجبِر (force: قوّة)",
              "em": "💥",
              "ex": "The war forced them to leave.",
              "exAr": "أجبرتهم الحرب على الرحيل."
            },
            {
              "en": "particularly",
              "ar": "خصوصاً",
              "em": "⭐",
              "ex": "It is hot, particularly in summer.",
              "exAr": "الجوّ حارّ، خصوصاً في الصيف."
            }
          ],
          "reading": {
            "title": "Future Good or Future Terrible?",
            "paras": [
              {
                "en": "Rosa (Sydney): I think the future looks disastrous. Why are people so cruel? There are wars all over the world, and people oppress other people. We have a wonderful world, but we cannot learn to live in it peacefully.",
                "ar": "روزا (سيدني): أرى أنّ المستقبل يبدو كارثياً. لماذا الناس قساة إلى هذا الحدّ؟ هناك حروب في كلّ مكان في العالم، والناس يظلمون غيرهم. لدينا عالم رائع، لكنّنا لا نتعلّم أن نعيش فيه بسلام."
              },
              {
                "en": "Liam (Dublin): That's true, wars are terrible. But since the United Nations was set up in 1945, another world war has been avoided. Maybe smaller wars will be prevented one day, too. But many people, particularly children, still die of disease every day.",
                "ar": "ليام (دبلن): هذا صحيح، فالحروب فظيعة. لكن منذ تأسيس الأمم المتحدة عام 1945 تمّ تجنّب حرب عالمية أخرى. وربما تُمنع الحروب الأصغر أيضاً يوماً ما. لكنّ كثيراً من الناس، خصوصاً الأطفال، ما زالوا يموتون من الأمراض كلّ يوم."
              },
              {
                "en": "Hisako (Tokyo): Yes, but it isn't all bad. Medical care and disease prevention are improving, so more people are surviving than ever before. But with more and more people, how will everyone be fed? Will people who are saved today starve tomorrow?",
                "ar": "هيساكو (طوكيو): نعم، لكنّ الأمر ليس سيئاً كلّه. الرعاية الطبية والوقاية من الأمراض تتحسّنان، فصار عدد الناجين أكبر من أيّ وقت مضى. لكن مع ازدياد الناس، كيف سيُطعَم الجميع؟ هل سيجوع غداً من يُنقَذون اليوم؟"
              },
              {
                "en": "Simu (Nairobi): Our climate is going wrong. Parts of Africa are getting hotter and drier, and crops often fail. Our population is increasing while food is decreasing, so millions may be forced to leave their land. Basim (Jericho): New crops are being developed for hard conditions, so something is being done. But will it be enough?",
                "ar": "سيمو (نيروبي): مناخنا يسوء. أجزاء من أفريقيا تزداد حرارةً وجفافاً، والمحاصيل تفشل كثيراً. عدد سكّاننا يزداد بينما الغذاء يتناقص، فقد يُجبَر الملايين على ترك أرضهم. باسم (أريحا): تُطوَّر محاصيل جديدة تتحمّل الظروف الصعبة، فهناك شيء يُفعل. لكن هل سيكون كافياً؟"
              }
            ],
            "questions": [
              {
                "q": "How does Rosa see the future?",
                "o": [
                  "Disastrous",
                  "Wonderful",
                  "Easy"
                ],
                "a": 0
              },
              {
                "q": "What positive point does Liam make?",
                "o": [
                  "Another world war has been avoided since 1945",
                  "There are no wars now",
                  "Diseases have disappeared"
                ],
                "a": 0
              },
              {
                "q": "What worries Hisako?",
                "o": [
                  "How everyone will be fed",
                  "The weather in Tokyo",
                  "Her exams"
                ],
                "a": 0
              },
              {
                "tf": false,
                "q": "In parts of Africa, food production is increasing.",
                "why": "Food is decreasing."
              },
              {
                "q": "What is being done, according to Basim?",
                "o": [
                  "New crops are being developed",
                  "Factories are being closed",
                  "People are leaving the cities"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "The Passive: Present and Past",
              "titleAr": "المبني للمجهول: المضارع والماضي",
              "explain": "نستخدم المبني للمجهول عندما يهمّنا <b>الحدث</b> أكثر من فاعله: <b>be + التصريف الثالث</b>. يصير المفعول به فاعلاً، ويمكن ذكر الفاعل بعد <b>by</b>. المضارع: <b>am / is / are + V3</b>، والمضارع المستمر: <b>is / are being + V3</b>، والماضي: <b>was / were + V3</b>.",
              "form": "is / are + V3    ·    is / are being + V3    ·    was / were + V3    (+ by …)",
              "examples": [
                {
                  "en": "Scientists **are developing** crops. → Crops **are being developed**.",
                  "ar": "المضارع المستمر: are being + V3"
                },
                {
                  "en": "People **set up** the UN in 1945. → The UN **was set up** in 1945.",
                  "ar": "الماضي: was + V3"
                },
                {
                  "en": "They **grow** olives in Palestine. → Olives **are grown** in Palestine.",
                  "ar": "المضارع: are + V3"
                }
              ],
              "questions": [
                {
                  "q": "English ___ all over the world.",
                  "o": [
                    "speaks",
                    "is spoken",
                    "is speaking"
                  ],
                  "a": 1,
                  "why": "اللغة لا تتكلّم بنفسها: is spoken"
                },
                {
                  "q": "The UN ___ in 1945.",
                  "o": [
                    "set up",
                    "was set up",
                    "is set up"
                  ],
                  "a": 1
                },
                {
                  "q": "New crops ___ now.",
                  "o": [
                    "are being developed",
                    "are developing",
                    "were develop"
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "This bridge ___ built in 1990. (was / is)",
                  "a": [
                    "was"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «كُتبت الرسالة بيد أحمد»",
                  "words": [
                    "The",
                    "letter",
                    "was",
                    "written",
                    "by",
                    "Ahmad."
                  ]
                }
              ]
            },
            {
              "title": "The Passive: Perfect and Future",
              "titleAr": "المبني للمجهول: التام والمستقبل",
              "explain": "في الأزمنة التامّة نستخدم <b>have / has been + V3</b> (و<b>had been + V3</b> في الماضي التام). وفي المستقبل نستخدم <b>will be + V3</b> أو <b>am / is / are going to be + V3</b>.",
              "form": "have / has been + V3    ·    will be + V3    ·    is / are going to be + V3",
              "examples": [
                {
                  "en": "They **have avoided** another world war. → Another world war **has been avoided**.",
                  "ar": "التام: has been + V3"
                },
                {
                  "en": "It **will force** millions to leave. → Millions **will be forced** to leave.",
                  "ar": "المستقبل: will be + V3"
                },
                {
                  "en": "What are people **going to do**? → What **is going to be done**?",
                  "ar": "going to be + V3"
                }
              ],
              "questions": [
                {
                  "q": "A new school ___ next year.",
                  "o": [
                    "will be built",
                    "will build",
                    "is build"
                  ],
                  "a": 0
                },
                {
                  "q": "Many trees ___ cut down recently.",
                  "o": [
                    "has been",
                    "have been",
                    "are being"
                  ],
                  "a": 1,
                  "why": "trees جمع: have been"
                },
                {
                  "q": "What ___ done about climate change?",
                  "o": [
                    "is going to be",
                    "is going to",
                    "going to be"
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "The homework has ___ finished. (be)",
                  "a": [
                    "been"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «سيُجبَر الملايين على الرحيل»",
                  "words": [
                    "Millions",
                    "will",
                    "be",
                    "forced",
                    "to",
                    "leave."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"survive\" means:",
              "o": [
                "ينجو",
                "يغرق",
                "يسافر"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"decrease\" is the opposite of:",
              "o": [
                "increase",
                "improve",
                "prevent"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "The United Nations was set up in 1945.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "cruel",
                  "قاسٍ"
                ],
                [
                  "avoid",
                  "يتجنّب"
                ],
                [
                  "prevent",
                  "يمنع"
                ],
                [
                  "starve",
                  "يتضوّر جوعاً"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "The adjective of \"disaster\" is:",
              "o": [
                "disastrous",
                "disasterful",
                "disastering"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "q": "Arabic ___ in many countries.",
              "o": [
                "speaks",
                "is spoken",
                "has spoke"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "Hundreds of cities ___ been destroyed before the war ended. (had / has)",
              "a": [
                "had"
              ],
              "lv": "hard"
            },
            {
              "q": "\"They will open a new hospital.\" The passive is:",
              "o": [
                "A new hospital will be opened.",
                "A new hospital will opened.",
                "A new hospital is open."
              ],
              "a": 0,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "Something",
                "is",
                "being",
                "done",
                "about",
                "it."
              ],
              "lv": "hard"
            },
            {
              "q": "Why may millions be forced to leave their land?",
              "o": [
                "Crops fail and food is decreasing",
                "Cities are too cold",
                "They want new jobs"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    }
  },

  /* درس تجريبي لعرض طريقة العمل — يُفتح من الرابط index.html#lesson=demo ولا يظهر في الوحدات */
  demo: {
    id: 'demo', unit: 0, title: 'A Day in the Life of Sami', titleAr: 'يومٌ في حياة سامي',
    vocab: [
      { en: 'wake up', ar: 'يستيقظ', em: '⏰', ex: 'I wake up at six o\'clock.', exAr: 'أستيقظ في الساعة السادسة.' },
      { en: 'breakfast', ar: 'الفطور', em: '🍳', ex: 'We have breakfast together.', exAr: 'نتناول الفطور معاً.' },
      { en: 'usually', ar: 'عادةً', em: '🚶', ex: 'He usually walks to school.', exAr: 'هو عادةً يمشي إلى المدرسة.' },
      { en: 'homework', ar: 'الواجب المنزلي', em: '📝', ex: 'She does her homework after lunch.', exAr: 'تحلّ واجبها بعد الغداء.' },
      { en: 'library', ar: 'المكتبة', em: '📚', ex: 'I borrow books from the library.', exAr: 'أستعير الكتب من المكتبة.' },
      { en: 'practise', ar: 'يتمرّن', em: '💪', ex: 'They practise English every day.', exAr: 'يتمرّنون على الإنجليزية كلّ يوم.' },
      { en: 'tired', ar: 'متعب', em: '😴', ex: 'He is tired in the evening.', exAr: 'هو متعب في المساء.' },
      { en: 'routine', ar: 'روتين', em: '🔁', ex: 'My daily routine is simple.', exAr: 'روتيني اليومي بسيط.' }
    ],
    reading: {
      title: 'Sami\'s Day',
      paras: [
        { en: 'Sami is a student in the tenth grade. He lives with his family in a small house near the sea. Every morning, he wakes up at six o\'clock.',
          ar: 'سامي طالبٌ في الصف العاشر. يعيش مع عائلته في بيتٍ صغير قرب البحر. كلّ صباح يستيقظ في الساعة السادسة.' },
        { en: 'First, he prays and helps his mother make breakfast. Then he usually walks to school with his friend Omar. School starts at seven thirty.',
          ar: 'أولاً يصلّي ويساعد أمّه في تحضير الفطور. ثم يمشي عادةً إلى المدرسة مع صديقه عمر. تبدأ المدرسة في السابعة والنصف.' },
        { en: 'After school, Sami eats lunch and does his homework. On Mondays and Wednesdays, he goes to the library to read and practise English.',
          ar: 'بعد المدرسة يتناول سامي الغداء ويحلّ واجبه. وفي يومَي الإثنين والأربعاء يذهب إلى المكتبة ليقرأ ويتمرّن على الإنجليزية.' },
        { en: 'In the evening, Sami is tired, but he always reads for twenty minutes before bed. He says, "A good routine makes every day better."',
          ar: 'في المساء يكون سامي متعباً، لكنه يقرأ دائماً عشرين دقيقة قبل النوم. ويقول: «الروتين الجيد يجعل كلّ يومٍ أفضل».' }
      ],
      questions: [
        { q: 'What time does Sami wake up?', o: ['At five o\'clock', 'At six o\'clock', 'At seven thirty'], a: 1, why: 'Every morning, he wakes up at six o\'clock.' },
        { q: 'Who does Sami walk to school with?', o: ['His brother', 'His father', 'His friend Omar'], a: 2, why: 'He usually walks to school with his friend Omar.' },
        { q: 'When does Sami go to the library?', o: ['Every day', 'On Mondays and Wednesdays', 'On Fridays'], a: 1, why: 'On Mondays and Wednesdays, he goes to the library.' },
        { tf: false, q: 'Sami never reads before bed.', why: 'He always reads for twenty minutes before bed.' }
      ]
    },
    rules: [
      {
        title: 'Present Simple', titleAr: 'المضارع البسيط',
        explain: 'نستخدمه للتعبير عن <b>العادات</b> والأفعال <b>المتكرّرة</b> والحقائق. مع <b>he / she / it</b> نضيف <b>s</b> أو <b>es</b> إلى الفعل، وفي النفي نستخدم <b>don\'t / doesn\'t</b>.',
        form: 'I / You / We / They + V    ·    He / She / It + V(s / es)',
        examples: [
          { en: 'He **wakes** up at six o\'clock.', ar: 'هو يستيقظ في السادسة.' },
          { en: 'They **practise** English every day.', ar: 'يتمرّنون على الإنجليزية كلّ يوم.' },
          { en: 'She **does** her homework after lunch.', ar: 'تحلّ واجبها بعد الغداء. (do تصبح does)' },
          { en: 'Sami **doesn\'t** go to school on Friday.', ar: 'سامي لا يذهب إلى المدرسة يوم الجمعة.' }
        ],
        questions: [
          { q: 'Sami ___ to school every day.', o: ['walk', 'walks', 'walking'], a: 1, why: 'Sami مثل he، فنضيف s: walks' },
          { q: 'We ___ breakfast together.', o: ['have', 'has', 'having'], a: 0, why: 'مع we يبقى الفعل بلا s.' },
          { q: 'She ___ her homework after lunch.', o: ['do', 'does', 'doing'], a: 1, why: 'do مع she تصير does.' },
          { q: 'He ___ like coffee.', o: ['don\'t', 'doesn\'t', 'isn\'t'], a: 1, why: 'النفي مع he: doesn\'t + الفعل بلا s.' }
        ]
      },
      {
        title: 'Adverbs of Frequency', titleAr: 'ظروف التكرار',
        explain: 'تبيّن <b>كم مرّة</b> يحدث الفعل: <b>always</b> (دائماً) · <b>usually</b> (عادةً) · <b>often</b> (غالباً) · <b>sometimes</b> (أحياناً) · <b>never</b> (أبداً). تأتي <b>قبل الفعل الأساسي</b>، و<b>بعد فعل be</b>.',
        form: 'Subject + always / usually / never + V    ·    Subject + be + always / never',
        examples: [
          { en: 'He **always** reads before bed.', ar: 'هو يقرأ دائماً قبل النوم.' },
          { en: 'Sami **usually** walks to school.', ar: 'سامي عادةً يمشي إلى المدرسة.' },
          { en: 'He is **never** late.', ar: 'هو لا يتأخّر أبداً. (بعد is)' }
        ],
        questions: [
          { q: 'Choose the correct sentence.', o: ['He walks usually to school.', 'He usually walks to school.', 'Usually he walks school to.'], a: 1, why: 'الظرف قبل الفعل الأساسي walks.' },
          { q: '"never" means:', o: ['دائماً', 'أحياناً', 'أبداً'], a: 2 },
          { q: 'Choose the correct sentence.', o: ['She is often tired.', 'She often is tired.', 'Often she tired is.'], a: 0, why: 'الظرف بعد فعل be.' },
          { q: 'I ___ eat fast food. (0%)', o: ['always', 'never', 'usually'], a: 1, why: '0% تعني never' }
        ]
      }
    ],
    mastery: [
      { lv: 'easy', q: '"breakfast" means:', o: ['الغداء', 'الفطور', 'العشاء'], a: 1 },
      { lv: 'easy', q: 'They ___ English every day.', o: ['practise', 'practises', 'practising'], a: 0 },
      { lv: 'easy', tf: true, q: 'Sami lives near the sea.' },
      { lv: 'medium', q: 'My father ___ coffee every morning.', o: ['drink', 'drinks', 'drinking'], a: 1 },
      { lv: 'medium', q: 'Choose the correct sentence.', o: ['She never is late.', 'She is never late.', 'Never she is late.'], a: 1 },
      { lv: 'medium', q: 'Why does Sami go to the library?', o: ['To play football', 'To read and practise English', 'To eat lunch'], a: 1 },
      { lv: 'hard', q: 'Which sentence is correct?', o: ['Omar doesn\'t walks to school.', 'Omar don\'t walk to school.', 'Omar doesn\'t walk to school.'], a: 2, why: 'بعد doesn\'t يأتي الفعل بلا s.' },
      { lv: 'hard', q: 'He studies hard, so he is ___ ready for exams.', o: ['never', 'always', 'not sometimes'], a: 1 },
      { lv: 'hard', q: 'A good routine makes every day ___.', o: ['bad', 'better', 'tired'], a: 1 }
    ]
  }
};
