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
    /* ================= الوحدة 1 ================= */
    1: {
      "title": "التواصل مع الآخرين",
      "titleEn": "Making contact",
      "lessons": [
        {
          "id": "1-1",
          "title": "Making contact",
          "titleAr": "التواصل مع الآخرين",
          "vocab": [
            {
              "en": "apartment",
              "ar": "شقّة",
              "em": "🏢",
              "ex": "There is an apartment for him near our house.",
              "exAr": "هناك شقّة له قرب بيتنا."
            },
            {
              "en": "attach",
              "ar": "يُرفِق",
              "em": "📎",
              "ex": "I'm attaching a photo to this email.",
              "exAr": "أُرفق صورةً بهذا البريد."
            },
            {
              "en": "cancel",
              "ar": "يُلغي",
              "em": "❌",
              "ex": "The flight was cancelled.",
              "exAr": "أُلغيت الرحلة."
            },
            {
              "en": "definite",
              "ar": "مؤكَّد / نهائي",
              "em": "✅",
              "ex": "Now the date is definite.",
              "exAr": "الموعد الآن مؤكَّد."
            },
            {
              "en": "depart",
              "ar": "يغادر",
              "em": "🛫",
              "ex": "The plane departs at 8:30.",
              "exAr": "تغادر الطائرة في الثامنة والنصف."
            },
            {
              "en": "district",
              "ar": "منطقة",
              "em": "🗺️",
              "ex": "We visited the Lake District.",
              "exAr": "زرنا منطقة البحيرات."
            },
            {
              "en": "junior",
              "ar": "للناشئين / الأصغر",
              "em": "🧒",
              "ex": "He plays for the junior team.",
              "exAr": "يلعب في فريق الناشئين."
            },
            {
              "en": "PS",
              "ar": "ملاحظة في آخر الرسالة",
              "em": "✉️",
              "ex": "PS Say hello to your brother.",
              "exAr": "ملاحظة: سلّم على أخيك."
            },
            {
              "en": "research",
              "ar": "بحث (علمي)",
              "em": "🔬",
              "ex": "He is joining a farm research project.",
              "exAr": "سينضمّ إلى مشروع بحث زراعي."
            },
            {
              "en": "reply",
              "ar": "يردّ",
              "em": "💬",
              "ex": "Thanks for replying so quickly!",
              "exAr": "شكراً لأنك رددت بسرعة!"
            },
            {
              "en": "settle in",
              "ar": "يستقرّ (في مكانٍ جديد)",
              "em": "🏡",
              "ex": "We'll help him settle in.",
              "exAr": "سنساعده على الاستقرار."
            },
            {
              "en": "show round",
              "ar": "يُري (شخصاً) المكان",
              "em": "🧭",
              "ex": "We'll show him round the city.",
              "exAr": "سنريه أرجاء المدينة."
            },
            {
              "en": "take out",
              "ar": "يصطحب (شخصاً) للنزهة",
              "em": "🍽️",
              "ex": "Let's take our guests out for dinner.",
              "exAr": "لنصطحب ضيوفنا إلى العشاء."
            },
            {
              "en": "in contact",
              "ar": "على تواصل",
              "em": "📞",
              "ex": "My dad is in contact with your father.",
              "exAr": "أبي على تواصل مع أبيك."
            },
            {
              "en": "put away",
              "ar": "يُعيد الشيء إلى مكانه",
              "em": "📦",
              "ex": "Put your toys away, please.",
              "exAr": "أعِد ألعابك إلى مكانها من فضلك."
            },
            {
              "en": "take off",
              "ar": "يخلع (ملابس)",
              "em": "🧥",
              "ex": "Take off your shoes, please.",
              "exAr": "اخلع حذاءك من فضلك."
            }
          ],
          "reading": {
            "title": "New Friends by Email",
            "paras": [
              {
                "en": "Jenny Scott, from Manchester, sent an email to Basim Maqdisi in Jericho. \"You don't know me,\" she wrote, \"but my dad is in contact with your father. He is joining your dad's farm research project next month. I'd love to learn about Palestine.\" She attached a photo of a boat race.",
                "ar": "أرسلت جيني سكوت من مانشستر بريداً إلى باسم المقدسي في أريحا. كتبت: «أنت لا تعرفني، لكنّ أبي على تواصل مع أبيك. سينضمّ إلى مشروع أبيك للبحث الزراعي الشهر القادم. أحبّ أن أتعرّف على فلسطين». وأرفقت صورة سباق قوارب."
              },
              {
                "en": "Basim replied the same day. \"Thanks for your surprise email! Are you the one in the lead in the boat race? I'm attaching a picture, too. Our junior football team played Nablus, and we won 3–1!\"",
                "ar": "ردّ باسم في اليوم نفسه: «شكراً على رسالتك المفاجئة! هل أنتِ التي في المقدّمة في سباق القوارب؟ أنا أيضاً أُرفق صورة. لعب فريق الناشئين عندنا ضدّ نابلس، وفزنا 3–1!»"
              },
              {
                "en": "Jenny wrote back: \"I'm the one nearest the camera. We go to the Lake District on a school trip every year. Dad is leaving soon, but his date was cancelled. Have you got any news?\" Basim answered, \"There's a special apartment for him near our house. We'll help him settle in, take him out and show him round.\"",
                "ar": "ردّت جيني: «أنا الأقرب إلى الكاميرا. نذهب في رحلة مدرسية إلى منطقة البحيرات كلّ عام. أبي سيغادر قريباً، لكنّ موعده أُلغي. هل عندك أخبار؟» فأجاب باسم: «هناك شقّة خاصّة له قرب بيتنا. سنساعده على الاستقرار، ونصطحبه في نزهات ونريه المكان»."
              },
              {
                "en": "Finally, Jenny sent the definite news: \"Dad's flight departs next Saturday at 08:30 our time and arrives at 15:15 Palestine time. We're going to miss him a lot, but he promises he'll call every day.\"",
                "ar": "وأخيراً أرسلت جيني الخبر المؤكَّد: «تغادر رحلة أبي السبت القادم في 08:30 بتوقيتنا وتصل في 15:15 بتوقيت فلسطين. سنشتاق إليه كثيراً، لكنه يَعِد أن يتّصل كلّ يوم»."
              }
            ],
            "questions": [
              {
                "q": "How does Jenny know about Basim?",
                "o": [
                  "Her dad is in contact with his father",
                  "They met at school",
                  "They met in a boat race"
                ],
                "a": 0
              },
              {
                "q": "What was in Basim's picture?",
                "o": [
                  "A boat race",
                  "His football team's match",
                  "His new house"
                ],
                "a": 1
              },
              {
                "q": "What was cancelled?",
                "o": [
                  "Jenny's school trip",
                  "Her dad's travel date",
                  "The football match"
                ],
                "a": 1
              },
              {
                "tf": true,
                "q": "Basim's family will help Jenny's dad settle in."
              },
              {
                "q": "How will Jenny's family feel when Dad goes?",
                "o": [
                  "They will miss him",
                  "They will be angry",
                  "They won't care"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "Present Tenses for the Future",
              "titleAr": "المضارع للتعبير عن المستقبل",
              "explain": "نستخدم <b>المضارع المستمر</b> للخطط الشخصية المرتّبة في المستقبل (He is joining…)، و<b>المضارع البسيط</b> للجداول والمواعيد الثابتة للجميع (The flight departs at 8:30). وغالباً تكون معهما كلمة تدلّ على المستقبل مثل <b>next</b> و<b>tomorrow</b> و<b>on Monday</b>.",
              "form": "خطة شخصية: am / is / are + V-ing    ·    جدول أو موعد ثابت: V1 / V(s)",
              "examples": [
                {
                  "en": "He **is joining** your dad's project next month.",
                  "ar": "خطة شخصية"
                },
                {
                  "en": "Dad **is flying** next Saturday.",
                  "ar": "خطة شخصية"
                },
                {
                  "en": "The holidays **start** on 23rd December.",
                  "ar": "موعد ثابت للجميع"
                },
                {
                  "en": "His flight **departs** at 8:30 am.",
                  "ar": "جدول ثابت"
                }
              ],
              "questions": [
                {
                  "q": "I ___ my grandparents tomorrow. It's all arranged.",
                  "o": [
                    "visit",
                    "am visiting",
                    "visited"
                  ],
                  "a": 1,
                  "why": "خطة شخصية: am visiting"
                },
                {
                  "q": "According to the timetable, the bus ___ at 7:00 tomorrow.",
                  "o": [
                    "leave",
                    "leaves",
                    "is leave"
                  ],
                  "a": 1,
                  "why": "جدول ثابت: المضارع البسيط"
                },
                {
                  "q": "School ___ on 1st September.",
                  "o": [
                    "start",
                    "starts",
                    "is start"
                  ],
                  "a": 1
                },
                {
                  "type": "type",
                  "q": "We ___ sailing next Sunday. It's our plan. (go)",
                  "a": [
                    "are going"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «تغادر الطائرة في الثامنة والنصف غداً»",
                  "words": [
                    "The",
                    "plane",
                    "departs",
                    "at",
                    "8:30",
                    "tomorrow."
                  ]
                }
              ]
            },
            {
              "title": "will and going to",
              "titleAr": "will و going to",
              "explain": "<b>going to</b> للخطط والنوايا (I'm going to interview him)، ولِما نراه سيحدث من <b>دليلٍ أمامنا</b> (Look at the clouds! It's going to rain). و<b>will</b> للتوقّعات والحقائق في المستقبل (غالباً مع sure / certain / expect)، وللقرار <b>في لحظته</b>، وللعرض والوعد.",
              "form": "going to + V: خطة أو دليل    ·    will + V: توقّع، قرار فوري، عرض، وعد",
              "examples": [
                {
                  "en": "I **am going to** interview him tomorrow.",
                  "ar": "خطة"
                },
                {
                  "en": "Look at those clouds! It**'s going to** rain.",
                  "ar": "دليل أمامنا"
                },
                {
                  "en": "I'm sure you **will** like Jericho.",
                  "ar": "توقّع"
                },
                {
                  "en": "The phone is ringing. I**'ll** answer it.",
                  "ar": "قرار في لحظته"
                },
                {
                  "en": "I**'ll** carry your bag if you like.",
                  "ar": "عرض"
                }
              ],
              "questions": [
                {
                  "q": "Look at the sky! It ___ rain.",
                  "o": [
                    "will",
                    "is going to",
                    "rains"
                  ],
                  "a": 1,
                  "why": "دليل أمامنا: going to"
                },
                {
                  "q": "\"I'm thirsty.\" \"I ___ get you some water.\"",
                  "o": [
                    "am going to",
                    "will",
                    "going"
                  ],
                  "a": 1,
                  "why": "قرار في لحظته: will"
                },
                {
                  "q": "We ___ visit Jerusalem next week. We've bought the tickets.",
                  "o": [
                    "will",
                    "are going to",
                    "go to"
                  ],
                  "a": 1
                },
                {
                  "q": "I'm sure you ___ pass the exam.",
                  "o": [
                    "will",
                    "are going",
                    "going to"
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "It's late. I promise I ___ call you tomorrow.",
                  "a": [
                    "will",
                    "'ll"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «سأدرس الطبّ»",
                  "words": [
                    "I",
                    "am",
                    "going",
                    "to",
                    "study",
                    "medicine."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"cancel\" means:",
              "o": [
                "يُلغي",
                "يُرسل",
                "يُرفق"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"depart\" means:",
              "o": [
                "يغادر",
                "يصل",
                "ينتظر"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "Jenny's dad will live in an apartment near Basim's house.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "attach",
                  "يُرفِق"
                ],
                [
                  "reply",
                  "يردّ"
                ],
                [
                  "junior",
                  "للناشئين"
                ],
                [
                  "definite",
                  "مؤكَّد"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "It's cold. Put ___ your coat.",
              "o": [
                "on",
                "off",
                "away"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "q": "Our English lesson ___ at 9:00 tomorrow. (timetable)",
              "o": [
                "starts",
                "will starting",
                "is start"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "Wait! That box is heavy. I ___ help you.",
              "a": [
                "will",
                "'ll"
              ],
              "lv": "hard"
            },
            {
              "q": "Choose the correct sentence.",
              "o": [
                "I'm meeting Sami at 5 pm tomorrow.",
                "I meeting Sami at 5 pm tomorrow.",
                "I am meet Sami at 5 pm tomorrow."
              ],
              "a": 0,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "It",
                "is",
                "going",
                "to",
                "be",
                "a",
                "busy",
                "day."
              ],
              "lv": "hard"
            },
            {
              "q": "Why did Jenny write to Basim?",
              "o": [
                "To get to know him and learn about Palestine",
                "To ask him for money",
                "To cancel a trip"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },
    /* ================= الوحدة 2 ================= */
    2: {
      "title": "من هنا إلى هناك",
      "titleEn": "From here to there",
      "lessons": [
        {
          "id": "2-1",
          "title": "From here to there",
          "titleAr": "من هنا إلى هناك",
          "vocab": [
            {
              "en": "exactly",
              "ar": "بالضبط (exact: دقيق)",
              "em": "🎯",
              "ex": "GPS shows exactly where you are.",
              "exAr": "يُظهر GPS مكانك بالضبط."
            },
            {
              "en": "GPS",
              "ar": "نظام تحديد المواقع",
              "em": "🛰️",
              "ex": "Their GPS showed they were near land.",
              "exAr": "أظهر جهاز GPS أنهم قرب اليابسة."
            },
            {
              "en": "kph",
              "ar": "كيلومتر في الساعة",
              "em": "🚗",
              "ex": "The wind reached 100 kph.",
              "exAr": "بلغت سرعة الريح 100 كم/س."
            },
            {
              "en": "life raft",
              "ar": "قارب نجاة",
              "em": "🛟",
              "ex": "They climbed into the life raft.",
              "exAr": "صعدوا إلى قارب النجاة."
            },
            {
              "en": "measure",
              "ar": "يقيس",
              "em": "📏",
              "ex": "Please measure the window.",
              "exAr": "قِس النافذة من فضلك."
            },
            {
              "en": "nearly",
              "ar": "تقريباً (near: قريب)",
              "em": "⏳",
              "ex": "They had nearly finished the journey.",
              "exAr": "كانوا قد أنهوا الرحلة تقريباً."
            },
            {
              "en": "orbit",
              "ar": "يدور في مدارٍ حول",
              "em": "🌍",
              "ex": "Satellites orbit the Earth.",
              "exAr": "تدور الأقمار الصناعية حول الأرض."
            },
            {
              "en": "point",
              "ar": "نقطة",
              "em": "📍",
              "ex": "You are at one of two points.",
              "exAr": "أنت عند إحدى نقطتين."
            },
            {
              "en": "position",
              "ar": "موقع",
              "em": "🧭",
              "ex": "Please give us your exact position.",
              "exAr": "أعطنا موقعك الدقيق من فضلك."
            },
            {
              "en": "row",
              "ar": "يجدّف",
              "em": "🚣",
              "ex": "They rowed across the Atlantic.",
              "exAr": "جدّفوا عبر المحيط الأطلسي."
            },
            {
              "en": "satellite",
              "ar": "قمر صناعي",
              "em": "📡",
              "ex": "GPS uses a network of satellites.",
              "exAr": "يستخدم GPS شبكة من الأقمار الصناعية."
            },
            {
              "en": "satellite phone",
              "ar": "هاتف يعمل عبر الأقمار الصناعية",
              "em": "📞",
              "ex": "They called for help on a satellite phone.",
              "exAr": "طلبوا النجدة بهاتفٍ يعمل عبر الأقمار الصناعية."
            },
            {
              "en": "satnav",
              "ar": "جهاز الملاحة في السيارة",
              "em": "🗺️",
              "ex": "The satnav showed us the way.",
              "exAr": "أرانا جهاز الملاحة الطريق."
            },
            {
              "en": "storm",
              "ar": "عاصفة",
              "em": "⛈️",
              "ex": "There was a terrible storm that night.",
              "exAr": "هبّت عاصفة رهيبة تلك الليلة."
            },
            {
              "en": "wave",
              "ar": "موجة",
              "em": "🌊",
              "ex": "A huge wave destroyed the boat.",
              "exAr": "حطّمت موجةٌ ضخمة القارب."
            },
            {
              "en": "set off",
              "ar": "ينطلق (في رحلة)",
              "em": "🏁",
              "ex": "The girls have just set off.",
              "exAr": "انطلقت الفتيات للتوّ."
            }
          ],
          "reading": {
            "title": "Finding the Way",
            "paras": [
              {
                "en": "In 2004, Mark Stubbs and his team wanted to be the fastest to row across the Atlantic, from Canada to Britain. After 40 days and 3,000 kilometres, they had nearly done it. Their GPS showed that they were only 450 kilometres from land.",
                "ar": "في عام 2004 أراد مارك ستَبز وفريقه أن يكونوا الأسرع في التجديف عبر الأطلسي من كندا إلى بريطانيا. وبعد 40 يوماً و3000 كيلومتر كادوا يحقّقون ذلك، فقد أظهر جهاز GPS أنهم على بعد 450 كيلومتراً فقط من اليابسة."
              },
              {
                "en": "But that night, there was a terrible storm. At 2:30 am, a huge wave destroyed their boat. Luckily, they saved a small life raft, a satellite phone and their GPS. They found their exact position and called for help. A ship rescued them at 6:30 am.",
                "ar": "لكن في تلك الليلة هبّت عاصفة رهيبة، وفي الثانية والنصف فجراً حطّمت موجة ضخمة قاربهم. ولحسن الحظّ أنقذوا قارب نجاة صغيراً وهاتفاً يعمل عبر الأقمار الصناعية وجهاز GPS. فحدّدوا موقعهم الدقيق وطلبوا النجدة، وأنقذتهم سفينة في السادسة والنصف صباحاً."
              },
              {
                "en": "How does GPS work? A network of satellites orbits the Earth. GPS equipment on the ground can always 'see' three or more of them. It measures its distance from each satellite, and from this it works out its exact position.",
                "ar": "كيف يعمل GPS؟ شبكة من الأقمار الصناعية تدور حول الأرض، والجهاز على الأرض «يرى» دائماً ثلاثة منها أو أكثر. فيقيس بعده عن كلّ قمر، ومن ذلك يحسب موقعه الدقيق."
              },
              {
                "en": "Car satnavs have become very popular in recent years. A satnav shows the car's position on a map and answers questions like \"How far have I travelled?\" and \"How long have I been on the road?\" GPS has saved many lives. It is modern technology at its best!",
                "ar": "صارت أجهزة الملاحة في السيارات شائعةً جداً في السنوات الأخيرة. فهي تُظهر موقع السيارة على الخريطة وتجيب عن أسئلة مثل «كم قطعتُ من مسافة؟» و«منذ متى وأنا على الطريق؟». لقد أنقذ GPS أرواحاً كثيرة، إنه التكنولوجيا الحديثة في أفضل صورها!"
              }
            ],
            "questions": [
              {
                "q": "Where were Mark's team rowing?",
                "o": [
                  "From Canada to Britain",
                  "From Britain to Canada",
                  "Across the Pacific"
                ],
                "a": 0
              },
              {
                "q": "What destroyed their boat?",
                "o": [
                  "A huge wave",
                  "A whale",
                  "Another ship"
                ],
                "a": 0
              },
              {
                "q": "Which three things saved their lives?",
                "o": [
                  "A life raft, a satellite phone and a GPS",
                  "A map, a radio and a boat",
                  "A plane, a car and a phone"
                ],
                "a": 0
              },
              {
                "tf": false,
                "q": "GPS equipment needs to \"see\" only one satellite.",
                "why": "It can always 'see' three or more."
              },
              {
                "q": "What does a satnav show?",
                "o": [
                  "The car's position on a map",
                  "The weather",
                  "The price of fuel"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "Present Perfect and Present Perfect Continuous",
              "titleAr": "المضارع التام والمضارع التام المستمر",
              "explain": "<b>المضارع التام</b> (have / has + V3) لحدثٍ في الماضي له <b>أثر في الحاضر</b>، ومعه غالباً <b>just</b> و<b>already</b> و<b>yet</b> و<b>so far</b> و<b>still … not</b>. و<b>المضارع التام المستمر</b> (have / has been + V-ing) لحدثٍ بدأ في الماضي و<b>ما زال مستمرّاً</b>، ويركّز على طول المدّة، ومعه <b>for</b> و<b>since</b>.",
              "form": "have / has + V3    ·    have / has been + V-ing + for / since",
              "examples": [
                {
                  "en": "The girls **have just set** off.",
                  "ar": "انطلقن للتوّ: أثره الآن"
                },
                {
                  "en": "We **haven't found** another clue so far.",
                  "ar": "ما زلنا نبحث"
                },
                {
                  "en": "We **have been running** for ages.",
                  "ar": "ما زلنا نركض منذ وقتٍ طويل"
                },
                {
                  "en": "Lana **has been playing** the piano since she was five.",
                  "ar": "since + بداية الحدث"
                }
              ],
              "questions": [
                {
                  "q": "They ___ just arrived.",
                  "o": [
                    "has",
                    "have",
                    "are"
                  ],
                  "a": 1
                },
                {
                  "q": "I haven't finished my homework ___.",
                  "o": [
                    "yet",
                    "already",
                    "just"
                  ],
                  "a": 0,
                  "why": "yet في النفي والسؤال."
                },
                {
                  "q": "She has been learning English ___ five years.",
                  "o": [
                    "since",
                    "for",
                    "ago"
                  ],
                  "a": 1,
                  "why": "for + مدّة"
                },
                {
                  "type": "type",
                  "q": "How long have you ___ waiting? (be)",
                  "a": [
                    "been"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «نحن نمشي منذ ساعتين»",
                  "words": [
                    "We",
                    "have",
                    "been",
                    "walking",
                    "for",
                    "two",
                    "hours."
                  ]
                }
              ]
            },
            {
              "title": "Present Perfect or Past Simple?",
              "titleAr": "المضارع التام أم الماضي البسيط؟",
              "explain": "<b>الماضي البسيط</b> لحدثٍ انتهى في <b>وقتٍ محدّد</b> في الماضي (at 6:30، yesterday، in 2004، ago). و<b>المضارع التام</b> لحدثٍ <b>يربط الماضي بالحاضر</b> دون وقتٍ محدّد (so far، recently، ever، in recent years).",
              "form": "Past simple: V2 + yesterday / ago / in 2004    ·    Present perfect: have / has + V3 + so far / recently / ever",
              "examples": [
                {
                  "en": "A ship **found** them at 6:30 am.",
                  "ar": "وقت محدّد: الماضي البسيط"
                },
                {
                  "en": "GPS **has saved** many lives.",
                  "ar": "أثره مستمرّ: المضارع التام"
                },
                {
                  "en": "Where **did** you **start**?",
                  "ar": "سؤال عن وقت أو مكان انتهى"
                },
                {
                  "en": "How far **have** you **travelled** so far?",
                  "ar": "حتى الآن"
                }
              ],
              "questions": [
                {
                  "q": "A ship ___ them at 6:30 am.",
                  "o": [
                    "has found",
                    "found",
                    "finds"
                  ],
                  "a": 1
                },
                {
                  "q": "Satnavs ___ very popular in recent years.",
                  "o": [
                    "became",
                    "have become",
                    "become"
                  ],
                  "a": 1
                },
                {
                  "q": "I ___ Hebron last summer.",
                  "o": [
                    "have visited",
                    "visited",
                    "visit"
                  ],
                  "a": 1,
                  "why": "last summer: وقت محدّد."
                },
                {
                  "type": "type",
                  "q": "Have you ___ been to Jerusalem?",
                  "a": [
                    "ever"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «غادروا كندا قبل 40 يوماً»",
                  "words": [
                    "They",
                    "left",
                    "Canada",
                    "40",
                    "days",
                    "ago."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"wave\" means:",
              "o": [
                "موجة",
                "رياح",
                "شاطئ"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"row\" (a boat) means:",
              "o": [
                "يجدّف",
                "يُبحر بمحرّك",
                "يغرق"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "A ship rescued Mark's team.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "storm",
                  "عاصفة"
                ],
                [
                  "position",
                  "موقع"
                ],
                [
                  "measure",
                  "يقيس"
                ],
                [
                  "satellite",
                  "قمر صناعي"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "I have lived here ___ 2015.",
              "o": [
                "for",
                "since",
                "ago"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "q": "Did you ___ the match yesterday?",
              "o": [
                "watch",
                "watched",
                "watching"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "GPS has ___ many lives. (save)",
              "a": [
                "saved"
              ],
              "lv": "hard"
            },
            {
              "q": "Choose the correct sentence.",
              "o": [
                "I have seen him yesterday.",
                "I saw him yesterday.",
                "I have see him yesterday."
              ],
              "a": 1,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن سؤالاً صحيحاً",
              "words": [
                "How",
                "long",
                "have",
                "you",
                "been",
                "learning",
                "English?"
              ],
              "lv": "hard"
            },
            {
              "q": "How does GPS find your exact position?",
              "o": [
                "It measures its distance from three or more satellites",
                "It asks other people",
                "It looks at a paper map"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },
    /* ================= الوحدة 3 ================= */
    3: {
      "title": "أنشطة وقت الفراغ",
      "titleEn": "Free-time activities",
      "lessons": [
        {
          "id": "3-1",
          "title": "Free-time activities",
          "titleAr": "أنشطة وقت الفراغ",
          "vocab": [
            {
              "en": "afford",
              "ar": "يستطيع تحمّل ثمنه",
              "em": "💰",
              "ex": "We can't afford a new car.",
              "exAr": "لا نستطيع تحمّل ثمن سيارة جديدة."
            },
            {
              "en": "business",
              "ar": "عمل تجاري",
              "em": "🏪",
              "ex": "His internet business is doing well.",
              "exAr": "تجارته على الإنترنت ناجحة."
            },
            {
              "en": "castle",
              "ar": "قلعة",
              "em": "🏰",
              "ex": "She made a cake in the shape of a castle.",
              "exAr": "صنعت كعكة على شكل قلعة."
            },
            {
              "en": "decorate",
              "ar": "يزيّن",
              "em": "🎨",
              "ex": "Ann decorates biscuits beautifully.",
              "exAr": "تزيّن آن البسكويت بشكلٍ جميل."
            },
            {
              "en": "frame",
              "ar": "هيكل / إطار",
              "em": "🚲",
              "ex": "The frame of the bike was damaged.",
              "exAr": "كان هيكل الدرّاجة متضرّراً."
            },
            {
              "en": "for free",
              "ar": "مجاناً",
              "em": "🆓",
              "ex": "He found an old bike for free.",
              "exAr": "وجد دراجة قديمة مجاناً."
            },
            {
              "en": "on my own",
              "ar": "وحدي (بلا مساعدة)",
              "em": "🙋",
              "ex": "I can't do it on my own.",
              "exAr": "لا أستطيع فعله وحدي."
            },
            {
              "en": "recycle",
              "ar": "يعيد التدوير",
              "em": "♻️",
              "ex": "We should recycle paper and plastic.",
              "exAr": "يجب أن نعيد تدوير الورق والبلاستيك."
            },
            {
              "en": "similar",
              "ar": "مشابه",
              "em": "👯",
              "ex": "He found a similar bike online.",
              "exAr": "وجد دراجةً مشابهة على الإنترنت."
            },
            {
              "en": "supply",
              "ar": "يزوّد",
              "em": "📦",
              "ex": "A cake shop asked her to supply them.",
              "exAr": "طلب منها محلّ حلويات أن تزوّده."
            },
            {
              "en": "think of",
              "ar": "يفكّر في / يخطر له",
              "em": "💭",
              "ex": "He had to think of something else.",
              "exAr": "كان عليه أن يفكّر في شيءٍ آخر."
            },
            {
              "en": "turn into",
              "ar": "يتحوّل إلى",
              "em": "🔄",
              "ex": "Your hobby can turn into a business.",
              "exAr": "قد تتحوّل هوايتك إلى عمل تجاري."
            },
            {
              "en": "accept",
              "ar": "يقبل (acceptable: مقبول)",
              "em": "🤝",
              "ex": "She didn't have to accept every order.",
              "exAr": "لم يكن عليها قبول كلّ طلب."
            },
            {
              "en": "colourful",
              "ar": "ملوّن (colour: لون)",
              "em": "🌈",
              "ex": "She makes colourful designs.",
              "exAr": "تصنع تصاميم ملوّنة."
            },
            {
              "en": "missing",
              "ar": "مفقود / ناقص (miss: يفقد)",
              "em": "🔍",
              "ex": "Several parts were missing.",
              "exAr": "كانت عدّة قطع مفقودة."
            }
          ],
          "reading": {
            "title": "Turning a Hobby into a Business",
            "paras": [
              {
                "en": "Joe loves bikes. At 14, he needed a bigger bike, but his dad had lost his job, so the family couldn't afford to buy one. Joe had to think of something else.",
                "ar": "جو يحبّ الدرّاجات. في الرابعة عشرة احتاج دراجةً أكبر، لكنّ أباه كان قد فقد عمله، فلم تستطع العائلة شراء واحدة. فكان على جو أن يفكّر في حلٍّ آخر."
              },
              {
                "en": "One day, a neighbour was throwing away an old bike with a damaged frame. \"Take it,\" he said. \"If you can repair or recycle it, I'll be happy.\" Then Joe found a similar old bike on the internet for free. That weekend, he was able to build a new bike, and he didn't have to pay anything! Since then, he has built cheap bikes for several friends.",
                "ar": "في يوم من الأيام كان أحد الجيران يرمي دراجة قديمة هيكلها متضرّر، فقال: «خذها، إن استطعت إصلاحها أو إعادة تدويرها فسأكون سعيداً». ثم وجد جو دراجة قديمة مشابهة على الإنترنت مجاناً. وفي نهاية ذلك الأسبوع استطاع أن يبني دراجة جديدة دون أن يدفع شيئاً! ومنذ ذلك الحين بنى دراجات رخيصة لعدد من أصدقائه."
              },
              {
                "en": "Ann started helping her mum make biscuits when she was five. She couldn't do everything on her own, but she was very good at decorating them with colourful designs. Later, she made her brother a birthday cake in the shape of a car, and everyone loved it.",
                "ar": "بدأت آن تساعد أمّها في صنع البسكويت حين كانت في الخامسة. لم تكن تستطيع فعل كلّ شيء وحدها، لكنها كانت ماهرةً جداً في تزيينه بتصاميم ملوّنة. ثم صنعت لأخيها كعكة عيد ميلاد على شكل سيارة، فأحبّها الجميع."
              },
              {
                "en": "Soon, more orders came, and then a cake shop asked her to supply them. Ann was worried about time, so the shop offered a special arrangement: she didn't have to accept all their orders, only the ones she could manage. This week, she is making a wedding cake for 100 people!",
                "ar": "وسرعان ما جاءت طلبات أكثر، ثم طلب منها محلّ حلويات أن تزوّده. كانت آن قلقة بشأن الوقت، فعرض عليها المحلّ ترتيباً خاصّاً: لا يجب عليها قبول كلّ الطلبات، بل ما تستطيع إنجازه فقط. وهذا الأسبوع تصنع كعكة زفاف لمئة شخص!"
              }
            ],
            "questions": [
              {
                "q": "Why did Joe have to build his own bike?",
                "o": [
                  "His family couldn't afford a new one",
                  "He didn't like shops",
                  "His bike was stolen"
                ],
                "a": 0
              },
              {
                "q": "Who gave Joe the first old bike?",
                "o": [
                  "His dad",
                  "A neighbour",
                  "A shop"
                ],
                "a": 1
              },
              {
                "tf": false,
                "q": "Joe paid a lot of money for the second bike.",
                "why": "He found it on the internet for free."
              },
              {
                "q": "What was Ann especially good at as a child?",
                "o": [
                  "Decorating biscuits",
                  "Repairing bikes",
                  "Playing football"
                ],
                "a": 0
              },
              {
                "q": "Why didn't Ann have to accept all the shop's orders?",
                "o": [
                  "The shop offered a special arrangement",
                  "She stopped baking",
                  "Her mum did them"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "Modals: Possibility, Ability, Requests and Offers",
              "titleAr": "الأفعال الناقصة: الاحتمال والقدرة والطلب والعرض",
              "explain": "<b>may / might</b> للاحتمال. <b>can</b> للقدرة أو الإذن، و<b>can't</b> لعدم القدرة. <b>Could you…?</b> للطلب المهذّب، و<b>I could…</b> للاقتراح. <b>Shall I…?</b> لعرض المساعدة.",
              "form": "may / might + V: احتمال  ·  can / can't + V: قدرة أو إذن  ·  Could you…?: طلب  ·  I could… / Shall I…?: اقتراح وعرض",
              "examples": [
                {
                  "en": "We **may** hurt ourselves.",
                  "ar": "احتمال"
                },
                {
                  "en": "You **can** carry the ball in rugby.",
                  "ar": "مسموح"
                },
                {
                  "en": "**Could** you send me some photos?",
                  "ar": "طلب مهذّب"
                },
                {
                  "en": "**Shall** I email you some photos?",
                  "ar": "عرض"
                }
              ],
              "questions": [
                {
                  "q": "I've forgotten my key, so I ___ open the door.",
                  "o": [
                    "can't",
                    "could",
                    "shall"
                  ],
                  "a": 0
                },
                {
                  "q": "Take an umbrella. It ___ rain later.",
                  "o": [
                    "might",
                    "shall",
                    "must"
                  ],
                  "a": 0,
                  "why": "احتمال: might"
                },
                {
                  "q": "___ I carry your bag for you?",
                  "o": [
                    "Shall",
                    "Must",
                    "Might"
                  ],
                  "a": 0,
                  "why": "عرض: Shall I…?"
                },
                {
                  "type": "type",
                  "q": "___ you help me, please? (Could / Shall)",
                  "a": [
                    "Could"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «هل يمكنك فتح النافذة من فضلك؟»",
                  "words": [
                    "Could",
                    "you",
                    "open",
                    "the",
                    "window,",
                    "please?"
                  ]
                }
              ]
            },
            {
              "title": "Necessity and Advice",
              "titleAr": "الضرورة والنصيحة",
              "explain": "<b>should / shouldn't</b> للنصيحة. <b>must</b> لضرورةٍ يشعر بها المتكلّم، و<b>have to</b> لضرورةٍ يفرضها غيره (قانون أو نظام). <b>mustn't</b> معناها ممنوع، أمّا <b>don't have to</b> و<b>don't need to</b> فمعناهما: ليس ضرورياً.",
              "form": "should + V: نصيحة  ·  must / have to + V: ضرورة  ·  mustn't: ممنوع  ·  don't have to / don't need to: غير ضروري",
              "examples": [
                {
                  "en": "You **should** see this film. It's great!",
                  "ar": "نصيحة"
                },
                {
                  "en": "We **have to** wear a uniform at school.",
                  "ar": "نظام المدرسة"
                },
                {
                  "en": "You **mustn't** use that path. It's dangerous.",
                  "ar": "ممنوع"
                },
                {
                  "en": "Tomorrow is a holiday, so I **don't have to** get up early.",
                  "ar": "غير ضروري"
                }
              ],
              "questions": [
                {
                  "q": "You ___ use that path. It's collapsing!",
                  "o": [
                    "mustn't",
                    "don't have to",
                    "should"
                  ],
                  "a": 0
                },
                {
                  "q": "It's a holiday tomorrow, so we ___ go to school.",
                  "o": [
                    "mustn't",
                    "don't have to",
                    "must"
                  ],
                  "a": 1,
                  "why": "غير ضروري، وليس ممنوعاً."
                },
                {
                  "q": "You look tired. You ___ go to bed early.",
                  "o": [
                    "should",
                    "mustn't",
                    "don't need to"
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "In our school, students ___ to wear a uniform. (have / has)",
                  "a": [
                    "have"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «يجب أن تشرب ماءً أكثر»",
                  "words": [
                    "You",
                    "should",
                    "drink",
                    "more",
                    "water."
                  ]
                }
              ]
            },
            {
              "title": "Past Ability and Necessity",
              "titleAr": "القدرة والضرورة في الماضي",
              "explain": "في الماضي نستخدم <b>could / couldn't</b> و<b>was / were able to</b> للقدرة، و<b>had to</b> للضرورة، و<b>didn't have to</b> لما لم يكن ضرورياً.",
              "form": "can → could / was able to    ·    have to → had to    ·    don't have to → didn't have to",
              "examples": [
                {
                  "en": "At five, Ann **could** make biscuits.",
                  "ar": "قدرة في الماضي"
                },
                {
                  "en": "That weekend, Joe **was able to** build his new bike.",
                  "ar": "قدرة في الماضي"
                },
                {
                  "en": "At 14, Joe **had to** build his own bike.",
                  "ar": "ضرورة في الماضي"
                },
                {
                  "en": "He **didn't have to** pay anything.",
                  "ar": "لم يكن ضرورياً"
                }
              ],
              "questions": [
                {
                  "q": "When I was six, I ___ swim.",
                  "o": [
                    "can",
                    "could",
                    "have to"
                  ],
                  "a": 1
                },
                {
                  "q": "I forgot my key, so I ___ climb through the window.",
                  "o": [
                    "had to",
                    "have to",
                    "must"
                  ],
                  "a": 0
                },
                {
                  "q": "It was free, so he ___ pay anything.",
                  "o": [
                    "didn't have to",
                    "mustn't",
                    "couldn't to"
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "Joe ___ able to build a new bike. (was / were)",
                  "a": [
                    "was"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «لم تستطع فعل كلّ شيء وحدها»",
                  "words": [
                    "She",
                    "could",
                    "not",
                    "do",
                    "everything",
                    "on",
                    "her",
                    "own."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"afford\" means:",
              "o": [
                "يستطيع تحمّل ثمنه",
                "يبيع",
                "يقترض"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"recycle\" means:",
              "o": [
                "يعيد التدوير",
                "يرمي",
                "يشتري"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "Ann made a cake in the shape of a car.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "castle",
                  "قلعة"
                ],
                [
                  "decorate",
                  "يزيّن"
                ],
                [
                  "similar",
                  "مشابه"
                ],
                [
                  "supply",
                  "يزوّد"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "You ___ smoke in the hospital.",
              "o": [
                "mustn't",
                "don't have to",
                "can"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "q": "Last year, we ___ walk to school because the bus was broken.",
              "o": [
                "had to",
                "have to",
                "must"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "Yesterday I ___ go out because I was ill. (couldn't / can't)",
              "a": [
                "couldn't"
              ],
              "lv": "hard"
            },
            {
              "q": "Choose the correct sentence.",
              "o": [
                "He musts study hard.",
                "He must study hard.",
                "He must to study hard."
              ],
              "a": 1,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "We",
                "do",
                "not",
                "have",
                "to",
                "pay",
                "for",
                "it."
              ],
              "lv": "hard"
            },
            {
              "q": "Who is nearer to having a real business?",
              "o": [
                "Ann, because she supplies a shop",
                "Joe, because he has a shop",
                "Neither of them"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },
    /* ================= الوحدة 4 ================= */
    4: {
      "title": "حالة طوارئ!",
      "titleEn": "Emergency!",
      "lessons": [
        {
          "id": "4-1",
          "title": "Emergency!",
          "titleAr": "حالة طوارئ!",
          "vocab": [
            {
              "en": "alive",
              "ar": "حيّ",
              "em": "💓",
              "ex": "I'm lucky to be alive.",
              "exAr": "أنا محظوظة لأنني ما زلت حيّة."
            },
            {
              "en": "ambulance",
              "ar": "سيارة إسعاف",
              "em": "🚑",
              "ex": "An ambulance arrived quickly.",
              "exAr": "وصلت سيارة إسعاف بسرعة."
            },
            {
              "en": "cheer",
              "ar": "يهتف فرحاً",
              "em": "🎉",
              "ex": "Everyone cheered when she was safe.",
              "exAr": "هتف الجميع فرحاً حين نجت."
            },
            {
              "en": "desperately",
              "ar": "بشدّة / بيأس",
              "em": "😰",
              "ex": "She desperately needed a way out.",
              "exAr": "احتاجت بشدّة إلى مخرج."
            },
            {
              "en": "examine",
              "ar": "يفحص",
              "em": "🩺",
              "ex": "The paramedics examined her.",
              "exAr": "فحصها المسعفون."
            },
            {
              "en": "floor",
              "ar": "طابق",
              "em": "🏢",
              "ex": "She lives on the tenth floor.",
              "exAr": "تسكن في الطابق العاشر."
            },
            {
              "en": "ladder",
              "ar": "سُلّم (متنقّل)",
              "em": "🪜",
              "ex": "The ladder was too short.",
              "exAr": "كان السلّم قصيراً جداً."
            },
            {
              "en": "lean",
              "ar": "يميل / ينحني",
              "em": "🧍",
              "ex": "Dave leaned out of the window.",
              "exAr": "مال ديف خارج النافذة."
            },
            {
              "en": "ledge",
              "ar": "حافّة ضيّقة",
              "em": "🧱",
              "ex": "She stood on a narrow ledge.",
              "exAr": "وقفت على حافّة ضيّقة."
            },
            {
              "en": "nowhere",
              "ar": "لا مكان",
              "em": "🚷",
              "ex": "There was nowhere else to go.",
              "exAr": "لم يكن هناك مكان آخر تذهب إليه."
            },
            {
              "en": "rush",
              "ar": "يُسرع / يندفع",
              "em": "🏃",
              "ex": "The firefighters rushed upstairs.",
              "exAr": "اندفع رجال الإطفاء إلى الأعلى."
            },
            {
              "en": "smash",
              "ar": "يحطّم",
              "em": "💥",
              "ex": "They smashed the door.",
              "exAr": "حطّموا الباب."
            },
            {
              "en": "explosion",
              "ar": "انفجار (explode: ينفجر)",
              "em": "💣",
              "ex": "An explosion smashed the window.",
              "exAr": "حطّم انفجارٌ النافذة."
            },
            {
              "en": "unhurt",
              "ar": "لم يُصَب بأذى",
              "em": "👍",
              "ex": "Luckily, she was unhurt.",
              "exAr": "لحسن الحظّ لم تُصَب بأذى."
            },
            {
              "en": "thanks to",
              "ar": "بفضل",
              "em": "🙏",
              "ex": "She's alive thanks to the firefighters.",
              "exAr": "هي حيّة بفضل رجال الإطفاء."
            }
          ],
          "reading": {
            "title": "A Lucky Escape",
            "paras": [
              {
                "en": "Late one night, Helen West, a 19-year-old nurse, smelt fire in her tenth-floor apartment. When she opened the kitchen door, everything was on fire. Thick, black smoke started coming under the door, and the only way out was through the kitchen.",
                "ar": "في وقتٍ متأخّر من إحدى الليالي شمّت هيلين ويست، الممرّضة ذات التسعة عشر عاماً، رائحة حريق في شقّتها في الطابق العاشر. وحين فتحت باب المطبخ كان كلّ شيء يحترق. وبدأ دخان أسود كثيف يتسرّب من تحت الباب، وكان المخرج الوحيد عبر المطبخ."
              },
              {
                "en": "Helen desperately needed another way out. She climbed out of the bedroom window onto a narrow ledge, 30 metres above the ground. \"I was really scared, but there was nowhere else to go,\" she said. Neighbours heard her shouts and called the fire service.",
                "ar": "احتاجت هيلين بشدّة إلى مخرجٍ آخر، فخرجت من نافذة غرفة النوم إلى حافّة ضيّقة على ارتفاع 30 متراً. قالت: «كنت خائفة حقاً، لكن لم يكن هناك مكان آخر أذهب إليه». وسمع الجيران صراخها فاتّصلوا بالدفاع المدني."
              },
              {
                "en": "A fire engine, the police and an ambulance arrived, but the ladder was ten metres too short! So two brave firefighters, Dave and Ken, rushed up to the tenth floor, smashed the door of the empty flat next to Helen's and ran to the window. Dave leaned out while Ken held him.",
                "ar": "وصلت سيارة إطفاء والشرطة وسيارة إسعاف، لكنّ السلّم كان أقصر بعشرة أمتار! فاندفع رجلا إطفاء شجاعان، ديف وكين، إلى الطابق العاشر، وحطّما باب الشقّة الفارغة المجاورة لشقّة هيلين، وركضا إلى النافذة. مال ديف إلى الخارج بينما أمسكه كين."
              },
              {
                "en": "\"Jump!\" Dave shouted, but Helen was too scared. Then an explosion smashed her window, and flames shot out. Finally, she jumped and Dave caught her arms. When they brought her down, everyone cheered. The paramedics examined her, but she was unhurt. \"I'm lucky to be alive,\" she said, \"thanks to Dave and Ken!\"",
                "ar": "صاح ديف: «اقفزي!» لكنّ هيلين كانت خائفة جداً. ثم حطّم انفجارٌ نافذتها واندفعت ألسنة اللهب. وأخيراً قفزت فأمسك ديف ذراعيها. وحين أنزلاها هتف الجميع فرحاً. فحصها المسعفون فلم تكن مصابة. وقالت: «أنا محظوظة لأنني حيّة، بفضل ديف وكين!»"
              }
            ],
            "questions": [
              {
                "q": "Why did Helen climb out of the window?",
                "o": [
                  "The only door was in the kitchen, which was on fire",
                  "She wanted fresh air",
                  "She saw her friends outside"
                ],
                "a": 0
              },
              {
                "q": "Why couldn't the firefighters use their ladder?",
                "o": [
                  "It was ten metres too short",
                  "It was broken",
                  "It was raining"
                ],
                "a": 0
              },
              {
                "q": "What did Dave and Ken do instead?",
                "o": [
                  "They went to the flat next to Helen's",
                  "They waited outside",
                  "They called a helicopter"
                ],
                "a": 0
              },
              {
                "tf": false,
                "q": "Helen jumped as soon as Dave shouted.",
                "why": "She was too scared at first."
              },
              {
                "q": "What finally made her jump?",
                "o": [
                  "An explosion smashed her window",
                  "The police told her to",
                  "Her neighbours cheered"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "Adjectives",
              "titleAr": "الصفات",
              "explain": "الصفة تصف <b>الاسم</b>: تأتي <b>قبله</b> (thick, black smoke)، أو <b>بعد</b> أفعال مثل be و feel و seem و look (We are dirty and exhausted). والصفة المنتهية بـ <b>-ing</b> تصف <b>الشيء</b> نفسه (an amazing job)، والمنتهية بـ <b>-ed</b> تصف <b>شعور الشخص</b> (I'm exhausted).",
              "form": "adjective + noun    ·    be / feel / seem / look + adjective    ·    -ing: الشيء    ·    -ed: الشعور",
              "examples": [
                {
                  "en": "We move into the **thick, black** smoke.",
                  "ar": "صفتان قبل الاسم"
                },
                {
                  "en": "We are **dirty and exhausted**.",
                  "ar": "صفتان بعد be مع and"
                },
                {
                  "en": "It was an **exciting** race.",
                  "ar": "-ing: السباق مثير"
                },
                {
                  "en": "I was **excited** about the race.",
                  "ar": "-ed: أنا متحمّس"
                }
              ],
              "questions": [
                {
                  "q": "The film was very ___. I nearly fell asleep.",
                  "o": [
                    "bored",
                    "boring",
                    "bore"
                  ],
                  "a": 1,
                  "why": "الفيلم نفسه مملّ: boring"
                },
                {
                  "q": "I'm ___ about my exam tomorrow.",
                  "o": [
                    "worried",
                    "worrying",
                    "worry"
                  ],
                  "a": 0,
                  "why": "شعوري: worried"
                },
                {
                  "q": "Choose the correct sentence.",
                  "o": [
                    "She has a car red new.",
                    "She has a new red car.",
                    "She has red a new car."
                  ],
                  "a": 1
                },
                {
                  "type": "type",
                  "q": "The news was ___. (amaze → -ing)",
                  "a": [
                    "amazing"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «تبدو سعيداً جداً اليوم»",
                  "words": [
                    "You",
                    "seem",
                    "very",
                    "happy",
                    "today."
                  ]
                }
              ]
            },
            {
              "title": "Adverbs",
              "titleAr": "الظروف",
              "explain": "الظرف يصف <b>الفعل</b>، ونصوغه غالباً بإضافة <b>-ly</b> إلى الصفة (quick ← quickly، lucky ← luckily). يأتي بعد الفعل أو بعد المفعول به، أو <b>قبل الفعل</b> للتوكيد، أو في <b>أوّل الجملة</b> مع فاصلة. وبعض الظروف شاذّة لا تأخذ -ly: <b>fast</b> و<b>hard</b> و<b>early</b>، و<b>good</b> يصبح <b>well</b>.",
              "form": "adjective + ly → adverb    ·    y → ily    ·    شاذّة: fast, hard, early, well",
              "examples": [
                {
                  "en": "She shut the door **quickly**.",
                  "ar": "بعد المفعول به"
                },
                {
                  "en": "Helen **desperately** needed another way out.",
                  "ar": "قبل الفعل للتوكيد"
                },
                {
                  "en": "**Luckily**, some neighbours heard her.",
                  "ar": "أوّل الجملة"
                },
                {
                  "en": "Smoke was coming in **fast**.",
                  "ar": "ظرف شاذّ"
                }
              ],
              "questions": [
                {
                  "q": "He drives very ___.",
                  "o": [
                    "careful",
                    "carefully",
                    "care"
                  ],
                  "a": 1
                },
                {
                  "q": "She speaks English very ___.",
                  "o": [
                    "good",
                    "well",
                    "goodly"
                  ],
                  "a": 1,
                  "why": "good يصبح well"
                },
                {
                  "q": "___, nobody was hurt.",
                  "o": [
                    "Lucky",
                    "Luckily",
                    "Luck"
                  ],
                  "a": 1
                },
                {
                  "type": "type",
                  "q": "The adverb of \"easy\" is ___.",
                  "a": [
                    "easily"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «راقب الجيران بصمت»",
                  "words": [
                    "The",
                    "neighbours",
                    "watched",
                    "silently."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"ladder\" means:",
              "o": [
                "سُلّم",
                "نافذة",
                "حبل"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"ambulance\" means:",
              "o": [
                "سيارة إسعاف",
                "سيارة إطفاء",
                "سيارة شرطة"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "Helen lived on the tenth floor.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "explosion",
                  "انفجار"
                ],
                [
                  "unhurt",
                  "لم يُصَب"
                ],
                [
                  "examine",
                  "يفحص"
                ],
                [
                  "cheer",
                  "يهتف"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "Max is a brilliant singer. He sings ___.",
              "o": [
                "good",
                "well",
                "goodly"
              ],
              "a": 1,
              "lv": "medium"
            },
            {
              "q": "It was a cold, wet day and the children were ___.",
              "o": [
                "bored",
                "boring",
                "bore"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "She plays the piano ___. (beautiful)",
              "a": [
                "beautifully"
              ],
              "lv": "hard"
            },
            {
              "q": "Choose the correct sentence.",
              "o": [
                "He quickly ran out of the building.",
                "He ran quick out of the building.",
                "He quickly runned out of the building."
              ],
              "a": 0,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "Helen",
                "felt",
                "scared",
                "and",
                "alone."
              ],
              "lv": "hard"
            },
            {
              "q": "Who saved Helen?",
              "o": [
                "Two firefighters",
                "Her neighbours",
                "The paramedics"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },
    /* ================= الوحدة 5 ================= */
    5: {
      "title": "طقسٌ خطِر",
      "titleEn": "Dangerous weather",
      "lessons": [
        {
          "id": "5-1",
          "title": "Dangerous weather",
          "titleAr": "طقسٌ خطِر",
          "vocab": [
            {
              "en": "hurricane",
              "ar": "إعصار",
              "em": "🌪️",
              "ex": "The hurricane destroyed many houses.",
              "exAr": "دمّر الإعصار بيوتاً كثيرة."
            },
            {
              "en": "accurate",
              "ar": "دقيق",
              "em": "🎯",
              "ex": "Weather forecasts are very accurate now.",
              "exAr": "صارت توقّعات الطقس دقيقة جداً."
            },
            {
              "en": "approach",
              "ar": "يقترب",
              "em": "🌀",
              "ex": "The storm approached the coast.",
              "exAr": "اقتربت العاصفة من الساحل."
            },
            {
              "en": "breathe",
              "ar": "يتنفّس",
              "em": "🌬️",
              "ex": "We need the air that we breathe.",
              "exAr": "نحتاج إلى الهواء الذي نتنفّسه."
            },
            {
              "en": "combine",
              "ar": "يجمع / يمتزج",
              "em": "🔗",
              "ex": "Wind and water combine to make storms.",
              "exAr": "تمتزج الريح والماء فتصنع العواصف."
            },
            {
              "en": "escape",
              "ar": "يهرب / ينجو",
              "em": "🏃",
              "ex": "Most people escaped by car.",
              "exAr": "نجا معظم الناس بالسيارات."
            },
            {
              "en": "force",
              "ar": "قوّة",
              "em": "💪",
              "ex": "Water is a great natural force.",
              "exAr": "الماء قوّة طبيعية عظيمة."
            },
            {
              "en": "heat",
              "ar": "حرارة",
              "em": "🔥",
              "ex": "We can't live without the sun's heat.",
              "exAr": "لا نستطيع العيش دون حرارة الشمس."
            },
            {
              "en": "hit",
              "ar": "يضرب",
              "em": "👊",
              "ex": "The hurricane hit Florida in 1992.",
              "exAr": "ضرب الإعصار فلوريدا عام 1992."
            },
            {
              "en": "moreover",
              "ar": "علاوةً على ذلك",
              "em": "➕",
              "ex": "It is cheap. Moreover, it is useful.",
              "exAr": "إنه رخيص، وعلاوةً على ذلك مفيد."
            },
            {
              "en": "poor",
              "ar": "فقير",
              "em": "🏚️",
              "ex": "Poor countries need more help.",
              "exAr": "الدول الفقيرة تحتاج مساعدةً أكبر."
            },
            {
              "en": "properly",
              "ar": "بشكلٍ صحيح",
              "em": "✔️",
              "ex": "They can't protect people properly.",
              "exAr": "لا يستطيعون حماية الناس بشكل صحيح."
            },
            {
              "en": "as a result",
              "ar": "نتيجةً لذلك",
              "em": "➡️",
              "ex": "There was no warning. As a result, many died.",
              "exAr": "لم يكن هناك إنذار، ونتيجةً لذلك مات كثيرون."
            },
            {
              "en": "storm surge",
              "ar": "ارتفاع مياه البحر بسبب العاصفة",
              "em": "🌊",
              "ex": "A 10-metre storm surge hit the coast.",
              "exAr": "ضرب الساحلَ ارتفاعٌ في مياه البحر بعشرة أمتار."
            },
            {
              "en": "destruction",
              "ar": "دمار (destroy: يدمّر)",
              "em": "🏚️",
              "ex": "The storm caused great destruction.",
              "exAr": "سبّبت العاصفة دماراً كبيراً."
            },
            {
              "en": "helplessly",
              "ar": "بلا حولٍ ولا قوّة",
              "em": "😟",
              "ex": "They could only wait helplessly.",
              "exAr": "لم يستطيعوا إلا الانتظار بلا حول ولا قوّة."
            }
          ],
          "reading": {
            "title": "Hurricane Watching",
            "paras": [
              {
                "en": "We cannot live without the sun's heat or the air that we breathe, but these can also become dangerous killers, especially when they are combined with water. The most destructive result is the hurricane. Its winds can be faster than 118 kph, and it can be 800 kilometres across.",
                "ar": "لا نستطيع العيش دون حرارة الشمس أو الهواء الذي نتنفّسه، لكنّهما قد يصبحان قاتلَين خطيرين، خصوصاً حين يمتزجان بالماء. وأشدّ النتائج دماراً هو الإعصار، فقد تزيد سرعة رياحه على 118 كم/س، وقد يبلغ عرضه 800 كيلومتر."
              },
              {
                "en": "Hurricanes are so dangerous that scientists work hard to find out their speed and direction. Information is collected from satellites, weather balloons and weather stations, so forecasts have become very accurate. Early warnings can save many lives.",
                "ar": "الأعاصير خطيرة جداً لدرجة أنّ العلماء يعملون بجدّ لمعرفة سرعتها واتّجاهها. وتُجمع المعلومات من الأقمار الصناعية ومناطيد الطقس ومحطّات الأرصاد، فصارت التوقّعات دقيقة جداً. والإنذار المبكر قد ينقذ أرواحاً كثيرة."
              },
              {
                "en": "When Hurricane Andrew hit Florida in 1992, it caused such enormous damage that it became the world's most expensive hurricane. However, only a few people died, because most had escaped by car.",
                "ar": "حين ضرب إعصار أندرو فلوريدا عام 1992 سبّب أضراراً هائلة لدرجة أنه صار أغلى إعصار في العالم. لكن لم يمت إلا قليلون، لأنّ معظم الناس كانوا قد هربوا بسياراتهم."
              },
              {
                "en": "In 1970, things were far worse in Bangladesh. There was almost no warning, the roads were bad, and people were too poor to escape. As a result, about 500,000 people died. Today we can deal with disasters better than before, but poor countries still need more help.",
                "ar": "وفي عام 1970 كانت الأمور أسوأ بكثير في بنغلادش: فلم يكن هناك إنذار تقريباً، والطرق سيئة، والناس أفقر من أن يهربوا. ونتيجةً لذلك مات نحو 500 ألف شخص. واليوم نستطيع التعامل مع الكوارث أفضل من قبل، لكنّ الدول الفقيرة ما زالت تحتاج إلى مساعدة أكبر."
              }
            ],
            "questions": [
              {
                "q": "When do the sun's heat and the air become more dangerous?",
                "o": [
                  "When they are combined with water",
                  "At night",
                  "In winter"
                ],
                "a": 0
              },
              {
                "q": "Why are forecasts accurate now?",
                "o": [
                  "Information comes from satellites, balloons and weather stations",
                  "People guess well",
                  "Hurricanes are smaller now"
                ],
                "a": 0
              },
              {
                "q": "Why did only a few people die in Hurricane Andrew?",
                "o": [
                  "Most had escaped by car",
                  "It was a small storm",
                  "It hit at night"
                ],
                "a": 0
              },
              {
                "tf": false,
                "q": "There was a good warning before the 1970 storm in Bangladesh.",
                "why": "There was almost no warning."
              },
              {
                "q": "What do poor countries still need?",
                "o": [
                  "More help from the world",
                  "More hurricanes",
                  "Fewer weather stations"
                ],
                "a": 0
              }
            ]
          },
          "rules": [
            {
              "title": "Comparatives and Superlatives",
              "titleAr": "المقارنة والتفضيل",
              "explain": "الصفات القصيرة نضيف إليها <b>-er</b> و<b>-est</b> (high ← higher ← the highest)، والطويلة نستخدم معها <b>more</b> و<b>most</b> (dangerous ← more dangerous ← the most dangerous). الظروف تقارَن بـ <b>more / most</b> (more quickly)، إلا القصيرة مثل <b>fast</b> و<b>hard</b>. والشاذّة: <b>good / well</b> ← better ← the best، و<b>bad</b> ← worse ← the worst.",
              "form": "short: -er than / the -est    ·    long: more … than / the most …    ·    good → better → best    ·    bad → worse → worst",
              "examples": [
                {
                  "en": "These are **the highest** mountains.",
                  "ar": "تفضيل لصفة قصيرة"
                },
                {
                  "en": "It has been **more exciting than** usual.",
                  "ar": "مقارنة لصفة طويلة"
                },
                {
                  "en": "The ice is melting **faster than** before.",
                  "ar": "ظرف قصير"
                },
                {
                  "en": "The systems are **better than** in the past.",
                  "ar": "شاذّة: good ← better"
                }
              ],
              "questions": [
                {
                  "q": "Bangladesh suffers some of the ___ disasters in the world.",
                  "o": [
                    "more dangerous",
                    "most dangerous",
                    "dangerousest"
                  ],
                  "a": 1
                },
                {
                  "q": "The floods are now ___ than they used to be.",
                  "o": [
                    "bad",
                    "worse",
                    "worst"
                  ],
                  "a": 1
                },
                {
                  "q": "Rivers move ___ when they are full of rocks.",
                  "o": [
                    "more slowly",
                    "slowlier",
                    "most slow"
                  ],
                  "a": 0
                },
                {
                  "type": "type",
                  "q": "This is the ___ storm in history. (bad)",
                  "a": [
                    "worst"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «اليوم أحرّ من الأمس»",
                  "words": [
                    "Today",
                    "is",
                    "hotter",
                    "than",
                    "yesterday."
                  ]
                }
              ]
            },
            {
              "title": "as … as  ·  so … that  ·  such … that",
              "titleAr": "as … as  و  so / such … that",
              "explain": "<b>as + صفة أو ظرف + as</b> للمساواة، و<b>not as … as</b> لعدمها (not as fast as = أقلّ سرعة). و<b>so + صفة + that</b> و<b>such + (a) + صفة + اسم + that</b> للتعبير عن السبب ونتيجته.",
              "form": "as + adj + as    ·    not as + adj + as    ·    so + adj + that …    ·    such (a) + adj + noun + that …",
              "examples": [
                {
                  "en": "Wind speeds are **as high as** 120 kph.",
                  "ar": "مساواة"
                },
                {
                  "en": "This storm is **not as violent as** others.",
                  "ar": "أقلّ عنفاً"
                },
                {
                  "en": "Hurricanes are **so dangerous that** scientists watch them closely.",
                  "ar": "so + صفة"
                },
                {
                  "en": "It was **such a disaster that** 500,000 people died.",
                  "ar": "such a + اسم"
                }
              ],
              "questions": [
                {
                  "q": "My brother is not ___ tall as me.",
                  "o": [
                    "as",
                    "so",
                    "such"
                  ],
                  "a": 0
                },
                {
                  "q": "It was ___ a hot day that we stayed inside.",
                  "o": [
                    "so",
                    "such",
                    "as"
                  ],
                  "a": 1,
                  "why": "such a + صفة + اسم"
                },
                {
                  "q": "The storm was ___ strong that it destroyed the bridge.",
                  "o": [
                    "such",
                    "so",
                    "as"
                  ],
                  "a": 1,
                  "why": "so + صفة وحدها"
                },
                {
                  "type": "type",
                  "q": "Ali runs as ___ as Omar. (fast)",
                  "a": [
                    "fast"
                  ]
                },
                {
                  "type": "order",
                  "q": "رتّب الكلمات: «كان الجوّ بارداً جداً فبقينا في البيت»",
                  "words": [
                    "It",
                    "was",
                    "so",
                    "cold",
                    "that",
                    "we",
                    "stayed",
                    "home."
                  ]
                }
              ]
            }
          ],
          "mastery": [
            {
              "q": "\"heat\" means:",
              "o": [
                "حرارة",
                "برد",
                "ريح"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "q": "\"escape\" means:",
              "o": [
                "يهرب / ينجو",
                "يبني",
                "ينام"
              ],
              "a": 0,
              "lv": "easy"
            },
            {
              "tf": true,
              "q": "Hurricane Andrew hit Florida in 1992.",
              "lv": "easy"
            },
            {
              "type": "match",
              "q": "صِل كلّ كلمة بمعناها",
              "pairs": [
                [
                  "breathe",
                  "يتنفّس"
                ],
                [
                  "approach",
                  "يقترب"
                ],
                [
                  "poor",
                  "فقير"
                ],
                [
                  "accurate",
                  "دقيق"
                ]
              ],
              "lv": "medium"
            },
            {
              "q": "The noun of \"destroy\" is:",
              "o": [
                "destruction",
                "destroyer",
                "destroying"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "q": "She is ___ student in the class.",
              "o": [
                "the best",
                "the better",
                "best than"
              ],
              "a": 0,
              "lv": "medium"
            },
            {
              "type": "type",
              "q": "Junk food is ___ healthy than fruit. (less / more)",
              "a": [
                "less"
              ],
              "lv": "hard"
            },
            {
              "q": "\"My brother is taller than me\" means:",
              "o": [
                "I am not as tall as my brother.",
                "My brother is not as tall as me.",
                "We are the same height."
              ],
              "a": 0,
              "lv": "hard"
            },
            {
              "type": "order",
              "q": "رتّب الكلمات لتكوّن جملة صحيحة",
              "words": [
                "It",
                "was",
                "such",
                "a",
                "strong",
                "storm",
                "that",
                "trees",
                "fell."
              ],
              "lv": "hard"
            },
            {
              "q": "Why did so many people die in Bangladesh in 1970?",
              "o": [
                "No warning, bad roads and poverty",
                "The storm was very small",
                "They lived far from the sea"
              ],
              "a": 0,
              "lv": "hard"
            }
          ]
        }
      ]
    },
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
