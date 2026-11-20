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
window.LEXORA_DATA = {"units": {
 "1": {
  "title": "مرحباً أيها العالم",
  "titleEn": "Hello World!",
  "lessons": [
   {
    "id": "1-1",
    "title": "Hello World!",
    "titleAr": "مرحباً أيها العالم",
    "vocab": [
     {
      "en": "at the moment",
      "ar": "في هذه اللحظة",
      "em": "⏱️",
      "ex": "Nadia's family are living in London at the moment.",
      "exAr": "تعيش عائلة نادية في لندن في هذه اللحظة."
     },
     {
      "en": "go online",
      "ar": "يدخل الإنترنت",
      "em": "💻",
      "ex": "Sami always goes online in the evening.",
      "exAr": "سامي يدخل الإنترنت دائماً في المساء."
     },
     {
      "en": "landline",
      "ar": "هاتف أرضي",
      "em": "☎️",
      "ex": "I tried your landline, but it was busy.",
      "exAr": "جرّبتُ هاتفك الأرضي لكنّه كان مشغولاً."
     },
     {
      "en": "on the phone",
      "ar": "على الهاتف",
      "em": "📞",
      "ex": "They talk on the phone every week.",
      "exAr": "يتحدّثان على الهاتف كلّ أسبوع."
     },
     {
      "en": "project",
      "ar": "مشروع",
      "em": "📁",
      "ex": "We need to plan our school project.",
      "exAr": "نحتاج إلى التخطيط لمشروعنا المدرسي."
     },
     {
      "en": "so",
      "ar": "لذلك / إذن",
      "em": "➡️",
      "ex": "So let's carry on with your mobile.",
      "exAr": "إذن لنواصل على هاتفك المحمول."
     },
     {
      "en": "busy",
      "ar": "مشغول",
      "em": "⏳",
      "ex": "I tried your landline, but it was busy.",
      "exAr": "جرّبتُ هاتفك الأرضي لكنّه كان مشغولاً."
     },
     {
      "en": "chat",
      "ar": "يدردش",
      "em": "💬",
      "ex": "He's chatting to his friends online.",
      "exAr": "إنّه يدردش مع أصدقائه عبر الإنترنت."
     },
     {
      "en": "carry on",
      "ar": "يواصل",
      "em": "▶️",
      "ex": "So let's carry on with your mobile.",
      "exAr": "إذن لنواصل على هاتفك المحمول."
     },
     {
      "en": "expensive",
      "ar": "غالٍ",
      "em": "💰",
      "ex": "Why are you calling my mobile? That's expensive.",
      "exAr": "لماذا تتّصلين بهاتفي المحمول؟ هذا غالٍ."
     },
     {
      "en": "cheap",
      "ar": "رخيص",
      "em": "🏷️",
      "ex": "Cheap watches are usually not very good.",
      "exAr": "الساعات الرخيصة ليست جيّدة عادةً."
     },
     {
      "en": "ancient",
      "ar": "قديم جدّاً",
      "em": "🏺",
      "ex": "We visited an ancient city last summer.",
      "exAr": "زرنا مدينة قديمة جدّاً في الصيف الماضي."
     },
     {
      "en": "young",
      "ar": "صغير السنّ",
      "em": "🧒",
      "ex": "Your little brother is only five. He's still very young.",
      "exAr": "أخوك الصغير في الخامسة فقط، وما زال صغيراً جدّاً."
     },
     {
      "en": "funny",
      "ar": "مضحك",
      "em": "😄",
      "ex": "Let's watch some cartoons. They'll be funny.",
      "exAr": "لنشاهد بعض الرسوم المتحرّكة، ستكون مضحكة."
     },
     {
      "en": "documentary",
      "ar": "فيلم وثائقي",
      "em": "🎬",
      "ex": "This documentary is good, but it's very boring.",
      "exAr": "هذا الفيلم الوثائقي جيّد لكنّه مملّ جدّاً."
     },
     {
      "en": "cartoon",
      "ar": "رسوم متحرّكة",
      "em": "📺",
      "ex": "Tom and Jerry is a cartoon.",
      "exAr": "«توم وجيري» رسوم متحرّكة."
     }
    ],
    "reading": {
     "title": "Hello World!",
     "paras": [
      {
       "en": "Nadia's family are from Palestine, but they are living in London at the moment. Tina is her friend. Nadia: Hello. Nadia speaking. Tina: Hi, Nadia. It's Tina. How are you? Nadia: Fine, thanks. And you? Tina: I'm fine, too. Listen, we need to plan our school project.",
       "ar": "عائلة نادية من فلسطين لكنّها تعيش في لندن في الوقت الحالي، وتينا صديقتها. نادية: مرحباً، نادية تتحدّث. تينا: أهلاً يا نادية، أنا تينا. كيف حالك؟ نادية: بخير، شكراً، وأنتِ؟ تينا: أنا بخير أيضاً. اسمعي، نحتاج إلى التخطيط لمشروعنا المدرسي."
      },
      {
       "en": "Nadia: Right. But why are you calling my mobile? That's expensive. Tina: I tried your landline, but it was busy. Nadia: Ah, yes. Mum's using the phone in the kitchen to call her mother. Grandma lives in Jenin, and they talk on the phone every week.",
       "ar": "نادية: حسناً، لكن لماذا تتّصلين بهاتفي المحمول؟ هذا غالٍ. تينا: جرّبتُ هاتفك الأرضي لكنّه كان مشغولاً. نادية: آه نعم، أمّي تستعمل الهاتف في المطبخ لتتّصل بأمّها. جدّتي تعيش في جنين، وهما تتحدّثان على الهاتف كلّ أسبوع."
      },
      {
       "en": "Tina: Well, let's email each other. Nadia: Sorry, but we can't at the moment. My brother Sami is using the computer. He's chatting to his friends online. Tina: Oh, no! Nadia: Sami always goes online in the evening.",
       "ar": "تينا: حسناً، لنتراسل بالبريد الإلكتروني. نادية: آسفة لكنّنا لا نستطيع في هذه اللحظة، فأخي سامي يستعمل الحاسوب وهو يدردش مع أصدقائه عبر الإنترنت. تينا: أوه، لا! نادية: سامي يدخل الإنترنت دائماً في المساء."
      },
      {
       "en": "Tina: So let's carry on with your mobile. Nadia: Yes, but not here. Dad's watching the sport on TV. Tina: Ah, so are you moving to the next room? Nadia: Yes … But guess what! Mum's finishing. Tina: So we can change to the landline. Great!",
       "ar": "تينا: إذن لنواصل على هاتفك المحمول. نادية: نعم، لكن ليس هنا، فأبي يشاهد الرياضة على التلفاز. تينا: آه، هل ستنتقلين إلى الغرفة المجاورة؟ نادية: نعم… لكن خمّني ماذا! أمّي تنهي مكالمتها. تينا: إذن يمكننا التحويل إلى الهاتف الأرضي. رائع!"
      }
     ],
     "questions": [
      {
       "q": "Where is Nadia's family from?",
       "o": [
        "London",
        "Jenin",
        "Palestine"
       ],
       "a": 2
      },
      {
       "q": "Why does Tina call Nadia's mobile?",
       "o": [
        "Because the mobile is cheaper",
        "Because the landline was busy",
        "Because Nadia's mum asked her"
       ],
       "a": 1
      },
      {
       "tf": true,
       "q": "Nadia's grandma lives in Jenin."
      },
      {
       "q": "Why can't Tina and Nadia email each other at the moment?",
       "o": [
        "The computer is broken",
        "Dad is using the computer",
        "Sami is using the computer"
       ],
       "a": 2
      },
      {
       "q": "Why can they change to the landline at the end?",
       "o": [
        "Dad turned off the TV",
        "Mum is finishing her call",
        "Sami went to bed"
       ],
       "a": 1
      }
     ]
    },
    "rules": [
     {
      "title": "Present Simple and Present Continuous",
      "titleAr": "المضارع البسيط والمضارع المستمر",
      "explain": "نستخدم <b>المضارع المستمر</b> للأفعال التي تحدث <b>الآن</b> أو في هذه الفترة (Mum is using the phone now)، و<b>المضارع البسيط</b> للأفعال التي تتكرّر مرّات كثيرة (They talk on the phone every week). وغالباً تأتي معهما كلمات مثل <b>at the moment / now</b> مع المستمر، و<b>always / every week / usually</b> مع البسيط.",
      "form": "الآن: am / is / are + V-ing    ·    عادة وتكرار: V1 / V(s)",
      "examples": [
       {
        "en": "Mum **is using** the phone in the kitchen now.",
        "ar": "يحدث الآن"
       },
       {
        "en": "Sami **is chatting** to his friends online at the moment.",
        "ar": "يحدث الآن"
       },
       {
        "en": "They **talk** on the phone every week.",
        "ar": "يتكرّر"
       },
       {
        "en": "Sami always **goes** online in the evening.",
        "ar": "يتكرّر"
       }
      ],
      "questions": [
       {
        "q": "Nadia's mum ___ to Grandma on the landline at the moment.",
        "o": [
         "speaks",
         "is speaking",
         "speak"
        ],
        "a": 1,
        "why": "at the moment: المضارع المستمر"
       },
       {
        "q": "Sami always ___ online in the evening.",
        "o": [
         "is going",
         "goes",
         "going"
        ],
        "a": 1,
        "why": "always: المضارع البسيط"
       },
       {
        "q": "They ___ on the phone every week.",
        "o": [
         "talk",
         "are talking",
         "talking"
        ],
        "a": 0,
        "why": "every week: تكرار"
       },
       {
        "type": "type",
        "q": "Listen! Someone ___ at the door. (knock)",
        "a": [
         "is knocking",
         "'s knocking"
        ],
        "why": "Listen! تدلّ على أنّ الفعل يحدث الآن"
       },
       {
        "type": "type",
        "q": "I usually ___ my friend at the weekend. (visit)",
        "a": [
         "visit"
        ],
        "why": "usually: المضارع البسيط"
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «سامي يدردش مع أصدقائه الآن»",
        "words": [
         "Sami",
         "is",
         "chatting",
         "to",
         "his",
         "friends",
         "now."
        ]
       }
      ]
     },
     {
      "title": "Things that stay the same · Stative verbs",
      "titleAr": "الأمور الثابتة والأفعال غير المستمرّة",
      "explain": "نستعمل <b>المضارع البسيط</b> للأمور التي تبقى ثابتة دائماً (Grandma lives in Jenin) ولأفعال الشعور والتفضيل مثل <b>love, like, hate</b> (Sami loves chatting). أمّا الأمر الذي يبقى ثابتاً <b>لفترة فقط</b> وليس دائماً فنستعمل له <b>المضارع المستمر</b> (They are living in London at the moment).",
      "form": "ثابت دائماً: V1 / V(s)    ·    ثابت لفترة فقط: am / is / are + V-ing",
      "examples": [
       {
        "en": "Grandma **lives** in Jenin.",
        "ar": "ثابت دائماً"
       },
       {
        "en": "Sami **loves** chatting to his friends online.",
        "ar": "فعل شعور"
       },
       {
        "en": "Nadia's family **are living** in London at the moment.",
        "ar": "مؤقّت"
       },
       {
        "en": "Parents **love** their children.",
        "ar": "فعل شعور"
       }
      ],
      "questions": [
       {
        "q": "Nadia's family ___ in London at the moment, but they are from Palestine.",
        "o": [
         "live",
         "are living",
         "lives"
        ],
        "a": 1,
        "why": "مؤقّت: المضارع المستمر"
       },
       {
        "q": "Grandma ___ in Jenin.",
        "o": [
         "is living",
         "are living",
         "lives"
        ],
        "a": 2,
        "why": "ثابت: المضارع البسيط"
       },
       {
        "q": "Sami ___ chatting to his friends online.",
        "o": [
         "loves",
         "is loving",
         "are loving"
        ],
        "a": 0,
        "why": "love فعل شعور"
       },
       {
        "q": "Nadia ___ texting to her sister.",
        "o": [
         "is loving",
         "loves",
         "love"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "Parents ___ their children. (love)",
        "a": [
         "love"
        ],
        "why": "فعل شعور: المضارع البسيط"
       },
       {
        "tf": false,
        "q": "The correct sentence is: Parents are loving their children.",
        "why": "الصحيح: Parents love their children."
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"landline\" means:",
      "o": [
       "هاتف أرضي",
       "هاتف محمول",
       "مشروع"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "q": "\"busy\" means:",
      "o": [
       "مشغول",
       "غالٍ",
       "قديم جدّاً"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Nadia's dad is watching the sport on TV.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "project",
        "مشروع"
       ],
       [
        "expensive",
        "غالٍ"
       ],
       [
        "ancient",
        "قديم جدّاً"
       ],
       [
        "young",
        "صغير السنّ"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "The opposite of 'cheap' is ___.",
      "o": [
       "funny",
       "young",
       "expensive"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "q": "The children ___ computer games right now.",
      "o": [
       "are playing",
       "play",
       "plays"
      ],
      "a": 0,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "Sami always ___ online in the evening. (go)",
      "a": [
       "goes"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "Mum is using the phone in the kitchen now.",
       "Mum use the phone in the kitchen now.",
       "Mum is use the phone in the kitchen now."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "They",
       "talk",
       "on",
       "the",
       "phone",
       "every",
       "week."
      ],
      "lv": "hard"
     },
     {
      "q": "Why did Tina call Nadia's mobile?",
      "o": [
       "She wanted to email Nadia",
       "The landline was busy",
       "Nadia's mobile is cheap"
      ],
      "a": 1,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "2": {
  "title": "نكهة من الثقافة الفلسطينية",
  "titleEn": "A taste of Palestinian culture",
  "lessons": [
   {
    "id": "2-1",
    "title": "A taste of Palestinian culture",
    "titleAr": "نكهة من الثقافة الفلسطينية",
    "vocab": [
     {
      "en": "age",
      "ar": "عمر",
      "em": "🎂",
      "ex": "I could play it quite well at the age of 18.",
      "exAr": "كنتُ أعزفه جيّداً في سنّ الثامنة عشرة."
     },
     {
      "en": "culture",
      "ar": "ثقافة",
      "em": "🏛️",
      "ex": "Mike and Tina are enjoying their first taste of Arab culture.",
      "exAr": "يستمتع مايك وتينا بأوّل تذوّق لهما للثقافة العربية."
     },
     {
      "en": "develop",
      "ar": "يتطوّر / ينشأ",
      "em": "🌱",
      "ex": "Modern guitars developed from the 'oud long ago.",
      "exAr": "تطوّرت الغيتارات الحديثة من العود منذ زمن بعيد."
     },
     {
      "en": "feel like",
      "ar": "يشعر برغبة في",
      "em": "💃",
      "ex": "I feel like dancing!",
      "exAr": "أشعر برغبة في الرقص!"
     },
     {
      "en": "guitar",
      "ar": "غيتار",
      "em": "🎸",
      "ex": "That 'oud sounds like a guitar.",
      "exAr": "هذا العود يبدو كالغيتار."
     },
     {
      "en": "quite",
      "ar": "إلى حدٍّ ما",
      "em": "👌",
      "ex": "I could play it quite well.",
      "exAr": "كنتُ أعزفه جيّداً إلى حدٍّ ما."
     },
     {
      "en": "seem",
      "ar": "يبدو",
      "em": "🤔",
      "ex": "You seem to know a lot about the 'oud.",
      "exAr": "يبدو أنّك تعرف الكثير عن العود."
     },
     {
      "en": "sound",
      "ar": "يبدو (صوتاً) / يُسمع",
      "em": "🔊",
      "ex": "That drum music sounds great.",
      "exAr": "موسيقى الطبل هذه تبدو رائعة."
     },
     {
      "en": "taste",
      "ar": "يتذوّق / طعمه",
      "em": "👅",
      "ex": "They taste delicious, too.",
      "exAr": "طعمها لذيذ أيضاً."
     },
     {
      "en": "tasty",
      "ar": "لذيذ الطعم",
      "em": "😋",
      "ex": "The kebabs are very tasty.",
      "exAr": "الكباب لذيذ جدّاً."
     },
     {
      "en": "instrument",
      "ar": "آلة موسيقية",
      "em": "🎻",
      "ex": "How many instruments does he play?",
      "exAr": "كم آلة موسيقية يعزف؟"
     },
     {
      "en": "folk song",
      "ar": "أغنية شعبية",
      "em": "🎶",
      "ex": "People used to sing folk songs about their simple lives.",
      "exAr": "كان الناس يغنّون أغاني شعبية عن حياتهم البسيطة."
     },
     {
      "en": "poem",
      "ar": "قصيدة",
      "em": "📜",
      "ex": "They also used to put their poems to music.",
      "exAr": "وكانوا يلحّنون قصائدهم أيضاً."
     },
     {
      "en": "rock music",
      "ar": "موسيقى الروك",
      "em": "🤘",
      "ex": "Rock music only developed in the 1950s.",
      "exAr": "لم تتطوّر موسيقى الروك إلا في خمسينيات القرن العشرين."
     },
     {
      "en": "musician",
      "ar": "موسيقي",
      "em": "🧑‍🎤",
      "ex": "He plays the 'oud and tablah, and he's a good musician, too.",
      "exAr": "يعزف العود والطبلة وهو موسيقيّ جيّد أيضاً."
     },
     {
      "en": "used to",
      "ar": "اعتاد أن (في الماضي)",
      "em": "⏪",
      "ex": "People used to sing folk songs.",
      "exAr": "كان الناس يغنّون الأغاني الشعبية."
     }
    ],
    "reading": {
     "title": "At an Arab restaurant",
     "paras": [
      {
       "en": "Tina and Mike are having dinner with the Kamal family at an Arab restaurant. Tina: This looks good. It looks like a pizza. Nadia: But it isn't. It's sfeeha. Sami: And here's the next thing – kebabs. Mike: They smell delicious. Mrs Kamal: They taste delicious, too. Everyone, please start.",
       "ar": "تتناول تينا ومايك العشاء مع عائلة كمال في مطعم عربي. تينا: يبدو هذا جيّداً، يشبه البيتزا. نادية: لكنّه ليس كذلك، إنّه صفيحة. سامي: وهذا الطبق التالي، الكباب. مايك: رائحته لذيذة. السيدة كمال: وطعمه لذيذ أيضاً. تفضّلوا بالبدء جميعاً."
      },
      {
       "en": "Tina: Can you cook Arab food, Nadia? Nadia: I can make things like kebabs, but I can't cook a big meal. Mike: Listen! That drum music sounds great. Is it Arab? Mr Kamal: Yes, that drum is a tablah. … And now you can hear an 'oud.",
       "ar": "تينا: هل تستطيعين طبخ الطعام العربي يا نادية؟ نادية: أستطيع تحضير أشياء مثل الكباب لكنّني لا أستطيع طبخ وجبة كبيرة. مايك: اسمعوا! موسيقى الطبل هذه رائعة، هل هي عربية؟ السيد كمال: نعم، هذا الطبل طبلة، والآن تسمعون عوداً."
      },
      {
       "en": "Mike: That 'oud sounds like a guitar, Mr Kamal. Is it? Mr Kamal: Well, modern guitars developed from the 'oud long ago. Tina: It's exciting music. I feel like dancing! Mrs Kamal: I'm not surprised. You see, it's a wedding dance.",
       "ar": "مايك: هذا العود يشبه الغيتار يا سيد كمال، أهو كذلك؟ السيد كمال: تطوّرت الغيتارات الحديثة من العود منذ زمن بعيد. تينا: إنّها موسيقى مثيرة، أشعر برغبة في الرقص! السيدة كمال: لا عجب، فهذه رقصة عرس."
      },
      {
       "en": "Mike: You seem to know a lot about the 'oud, Mr Kamal. Do you play it, too? Mr Kamal: I could play it quite well at the age of 18, but not now. Work got busy, so I couldn't find time to play. Sami: But Dad, you still play at parties, and you're the best! It is a happy evening, and Mike and Tina are enjoying their first taste of Arab culture.",
       "ar": "مايك: يبدو أنّك تعرف الكثير عن العود يا سيد كمال، هل تعزفه أنت أيضاً؟ السيد كمال: كنتُ أعزفه جيّداً في الثامنة عشرة لكن ليس الآن، فقد انشغلتُ بالعمل ولم أجد وقتاً للعزف. سامي: لكن يا أبي، ما زلتَ تعزف في الحفلات وأنت الأفضل! إنّها أمسية سعيدة، ويستمتع مايك وتينا بأوّل تذوّق للثقافة العربية."
      }
     ],
     "questions": [
      {
       "q": "Where are Tina and Mike having dinner?",
       "o": [
        "At an Arab restaurant",
        "At school",
        "At Tina's home"
       ],
       "a": 0
      },
      {
       "q": "What is sfeeha like at first sight for Tina?",
       "o": [
        "A kebab",
        "A pizza",
        "A cake"
       ],
       "a": 1
      },
      {
       "tf": true,
       "q": "Modern guitars developed from the 'oud."
      },
      {
       "q": "Why can't Mr Kamal play the 'oud now as well as before?",
       "o": [
        "He lost his 'oud",
        "He doesn't like music",
        "Work got busy and he couldn't find time"
       ],
       "a": 2
      },
      {
       "q": "What does Tina feel like doing when she hears the music?",
       "o": [
        "Sleeping",
        "Singing",
        "Dancing"
       ],
       "a": 2
      }
     ]
    },
    "rules": [
     {
      "title": "Verbs of the senses",
      "titleAr": "أفعال الحواس: look, smell, taste, sound, feel, seem",
      "explain": "بعد أفعال الحواس <b>look, smell, taste, sound, feel, seem</b> نضع <b>صفةً</b> وليس ظرفاً (The kebabs smell <b>delicious</b>). ونضيف <b>like</b> قبل الاسم للتشبيه (It looks <b>like</b> a pizza, That 'oud sounds <b>like</b> a guitar). وهي أفعال حالة لا نستعملها عادةً في المستمر.",
      "form": "look / smell / taste / sound / feel / seem + صفة    ·    + like + اسم",
      "examples": [
       {
        "en": "This sfeeha **looks** good.",
        "ar": "نظر"
       },
       {
        "en": "The kebabs **smell** delicious.",
        "ar": "شمّ"
       },
       {
        "en": "The kebabs **taste** delicious, too.",
        "ar": "طعم"
       },
       {
        "en": "That drum music **sounds** great.",
        "ar": "سمع"
       },
       {
        "en": "You **seem** to know about the 'oud.",
        "ar": "يبدو"
       }
      ],
      "questions": [
       {
        "q": "The kebabs ___ delicious.",
        "o": [
         "are smelling",
         "smelling",
         "smell"
        ],
        "a": 2,
        "why": "فعل حاسّة: المضارع البسيط + صفة"
       },
       {
        "q": "That drum music ___ great.",
        "o": [
         "sound",
         "is sounding",
         "sounds"
        ],
        "a": 2
       },
       {
        "q": "It ___ like a pizza.",
        "o": [
         "look",
         "looks",
         "looking"
        ],
        "a": 1
       },
       {
        "q": "Coffee ___ delicious.",
        "o": [
         "smells",
         "smell",
         "is smelling"
        ],
        "a": 0,
        "why": "حرف s مع المفرد"
       },
       {
        "type": "type",
        "q": "The sfeeha ___ good. (look)",
        "a": [
         "looks"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «هذه الكباب لذيذ الطعم»",
        "words": [
         "These",
         "kebabs",
         "taste",
         "delicious."
        ]
       }
      ]
     },
     {
      "title": "can, can't, could, couldn't",
      "titleAr": "القدرة: can وcould",
      "explain": "نستعمل <b>can / can't</b> للقدرة في <b>الحاضر</b> (I can make kebabs, but I can't cook a big meal)، و<b>could / couldn't</b> للقدرة في <b>الماضي</b> (I could play it quite well when I was young). بعدها نضع الفعل بصيغته الأولى بلا to.",
      "form": "can / can't + V1  (الحاضر)    ·    could / couldn't + V1  (الماضي)",
      "examples": [
       {
        "en": "I **can** make kebabs.",
        "ar": "قدرة حاضرة"
       },
       {
        "en": "I **can't** cook a big meal.",
        "ar": "عدم قدرة حاضرة"
       },
       {
        "en": "I **could** play it quite well when I was young.",
        "ar": "قدرة ماضية"
       },
       {
        "en": "I **couldn't** find time to play.",
        "ar": "عدم قدرة ماضية"
       }
      ],
      "questions": [
       {
        "q": "Nadia ___ make kebabs, but she can't cook a big meal.",
        "o": [
         "could",
         "cans",
         "can"
        ],
        "a": 2
       },
       {
        "q": "Mr Kamal ___ play the 'oud quite well at the age of 18.",
        "o": [
         "can",
         "is can",
         "could"
        ],
        "a": 2
       },
       {
        "q": "Work got busy last week, so I ___ find time to play.",
        "o": [
         "couldn't",
         "can't",
         "didn't can"
        ],
        "a": 0
       },
       {
        "q": "When I was four, I ___ run, but my little sister couldn't.",
        "o": [
         "can",
         "could",
         "can't"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "I ___ speak French two years ago. (negative past)",
        "a": [
         "couldn't",
         "could not"
        ]
       },
       {
        "type": "type",
        "q": "Mum ___ make a delicious Mansaf now. (present ability)",
        "a": [
         "can"
        ]
       }
      ]
     },
     {
      "title": "used to",
      "titleAr": "اعتاد أن (عادة في الماضي)",
      "explain": "نستعمل <b>used to + V1</b> للحديث عن <b>عادات أو حالات كانت في الماضي ولم تعد الآن</b> (People used to sing folk songs). وفي النفي والسؤال نستعمل <b>did / didn't + use to</b> بلا d (Did people use to sing rock songs? No, they did not use to do that).",
      "form": "used to + V1    ·    didn't use to + V1    ·    Did + S + use to + V1?",
      "examples": [
       {
        "en": "People **used to** sing folk songs about their simple lives.",
        "ar": "عادة ماضية"
       },
       {
        "en": "They also **used to** put their poems to music.",
        "ar": "عادة ماضية"
       },
       {
        "en": "They **did not use to** play rock music.",
        "ar": "نفي"
       },
       {
        "en": "**Did** people **use to** play the guitar thousands of years ago?",
        "ar": "سؤال"
       }
      ],
      "questions": [
       {
        "q": "In the past, people ___ sing folk songs about their simple lives.",
        "o": [
         "used to",
         "use to",
         "are used to"
        ],
        "a": 0
       },
       {
        "q": "Did people ___ play the guitar thousands of years ago?",
        "o": [
         "used to",
         "using to",
         "use to"
        ],
        "a": 2
       },
       {
        "q": "Rock music didn't ___ exist before the 1950s.",
        "o": [
         "use to",
         "used to",
         "used"
        ],
        "a": 0
       },
       {
        "q": "Ali often emails friends now, but he didn't ___ do that before.",
        "o": [
         "use to",
         "used to",
         "uses to"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "Mona didn't ___ eat fish before. (use to)",
        "a": [
         "use to"
        ],
        "why": "بعد didn't نكتب use to بلا d"
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «كان علي يرسل لهم رسائل نصية»",
        "words": [
         "He",
         "used",
         "to",
         "text",
         "them."
        ]
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"instrument\" means:",
      "o": [
       "آلة موسيقية",
       "قصيدة",
       "ثقافة"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "q": "\"folk song\" means:",
      "o": [
       "موسيقى الروك",
       "طبلة",
       "أغنية شعبية"
      ],
      "a": 2,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Rock music only developed in the 1950s.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "poem",
        "قصيدة"
       ],
       [
        "musician",
        "موسيقي"
       ],
       [
        "culture",
        "ثقافة"
       ],
       [
        "tasty",
        "لذيذ الطعم"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "The music is exciting. I ___ dancing.",
      "o": [
       "seem like",
       "taste like",
       "feel like"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "q": "Mum ___ make a delicious Mansaf, but my big sister can't.",
      "o": [
       "can",
       "could",
       "used to"
      ],
      "a": 0,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "Dad ___ to invite his friends to a restaurant before. (use to, negative: didn't)",
      "a": [
       "didn't use",
       "did not use"
      ],
      "why": "didn't use to",
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "The kebabs smell delicious.",
       "The kebabs are smelling delicious.",
       "The kebabs smells delicious."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "Modern",
       "guitars",
       "developed",
       "from",
       "the",
       "'oud."
      ],
      "lv": "hard"
     },
     {
      "q": "Why couldn't Mr Kamal find time to play the 'oud?",
      "o": [
       "Work got busy",
       "He was ill",
       "He lost his 'oud"
      ],
      "a": 0,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "3": {
  "title": "رحلة إلى متنزّه وطني",
  "titleEn": "Going to a National Park",
  "lessons": [
   {
    "id": "3-1",
    "title": "Going to a National Park",
    "titleAr": "رحلة إلى متنزّه وطني",
    "vocab": [
     {
      "en": "entrance",
      "ar": "مدخل",
      "em": "🚪",
      "ex": "They have just arrived at the entrance.",
      "exAr": "لقد وصلوا للتوّ إلى المدخل."
     },
     {
      "en": "far",
      "ar": "بعيد",
      "em": "🛣️",
      "ex": "Is it still very far?",
      "exAr": "هل ما زال بعيداً جدّاً؟"
     },
     {
      "en": "go camping",
      "ar": "يذهب للتخييم",
      "em": "⛺",
      "ex": "We could go camping in the mountains.",
      "exAr": "يمكننا أن نذهب للتخييم في الجبال."
     },
     {
      "en": "go hiking",
      "ar": "يذهب في نزهة جبلية",
      "em": "🥾",
      "ex": "And let's go hiking.",
      "exAr": "ولنذهب في نزهة جبلية."
     },
     {
      "en": "hear of",
      "ar": "يسمع بـ",
      "em": "👂",
      "ex": "I've never heard of Yosemite.",
      "exAr": "لم أسمع بيوسمايت من قبل."
     },
     {
      "en": "national",
      "ar": "وطني",
      "em": "🏞️",
      "ex": "Yosemite is a beautiful national park.",
      "exAr": "يوسمايت متنزّه وطني جميل."
     },
     {
      "en": "pass",
      "ar": "يمرّ بـ / يتجاوز",
      "em": "🚗",
      "ex": "We've already passed the sign for Yosemite.",
      "exAr": "لقد تجاوزنا بالفعل لافتة يوسمايت."
     },
     {
      "en": "so",
      "ar": "جدّاً",
      "em": "😮",
      "ex": "You're so slow, Adnan!",
      "exAr": "أنت بطيء جدّاً يا عدنان!"
     },
     {
      "en": "trip",
      "ar": "رحلة",
      "em": "🧳",
      "ex": "We went on a school trip last year.",
      "exAr": "ذهبنا في رحلة مدرسية العام الماضي."
     },
     {
      "en": "waterfall",
      "ar": "شلّال",
      "em": "💦",
      "ex": "There's a beautiful, high waterfall to see.",
      "exAr": "هناك شلّال عالٍ جميل يستحقّ المشاهدة."
     },
     {
      "en": "wildlife",
      "ar": "الحياة البرّية",
      "em": "🦌",
      "ex": "There is lots of wildlife in the woods.",
      "exAr": "هناك الكثير من الحياة البرّية في الغابات."
     },
     {
      "en": "volunteer",
      "ar": "متطوّع",
      "em": "🙋",
      "ex": "Thousands of young volunteers join together to give it help every summer.",
      "exAr": "ينضمّ آلاف المتطوّعين الشباب لمساعدته كلّ صيف."
     },
     {
      "en": "damage",
      "ar": "يُتلف / يضرّ",
      "em": "⚠️",
      "ex": "Millions of cars and heavy feet badly damage the Park.",
      "exAr": "ملايين السيارات والأقدام الثقيلة تضرّ المتنزّه ضرراً بالغاً."
     },
     {
      "en": "dangerous",
      "ar": "خطِر",
      "em": "☠️",
      "ex": "The opposite of 'dangerous' is 'safe'. This path is dangerous.",
      "exAr": "ضدّ «خطِر» هو «آمن». هذا الطريق خطِر."
     },
     {
      "en": "everyone",
      "ar": "الجميع",
      "em": "👥",
      "ex": "Everyone loves the Park.",
      "exAr": "الجميع يحبّون المتنزّه."
     },
     {
      "en": "indoors",
      "ar": "داخل المبنى",
      "em": "🏠",
      "ex": "It was very cold outdoors, so we stayed indoors.",
      "exAr": "كان الجوّ بارداً جدّاً في الخارج فبقينا في الداخل."
     }
    ],
    "reading": {
     "title": "Yosemite",
     "paras": [
      {
       "en": "Yosemite is an amazing place. It has mountains, valleys, lakes, rivers and the highest waterfalls in America. The wildlife is amazing, too – most of all the huge trees. Some are 90 metres tall.",
       "ar": "يوسمايت مكان مدهش، فيه جبال ووديان وبحيرات وأنهار وأعلى الشلّالات في أمريكا. والحياة البرّية مدهشة أيضاً، وأهمّها الأشجار الضخمة التي يبلغ ارتفاع بعضها 90 متراً."
      },
      {
       "en": "When people started cutting down the trees and damaging this beautiful place, the United States decided to make Yosemite a National Park back in 1890. This has protected Yosemite since then, but people have become a problem again.",
       "ar": "حين بدأ الناس يقطعون الأشجار ويُتلفون هذا المكان الجميل، قرّرت الولايات المتحدة جعل يوسمايت متنزّهاً وطنياً عام 1890. وقد حماه ذلك منذ ذلك الحين، لكنّ الناس أصبحوا مشكلة من جديد."
      },
      {
       "en": "For over a century, more and more visitors have arrived each year. They love the Park, but millions of cars and heavy feet badly damage it, too. So Yosemite still needs help, and thousands of young volunteers join together to give it every summer.",
       "ar": "منذ أكثر من قرن يصل كلّ عام زوّار أكثر فأكثر. إنّهم يحبّون المتنزّه لكنّ ملايين السيارات والأقدام الثقيلة تضرّه كثيراً. لذلك ما زال يوسمايت يحتاج إلى المساعدة، وينضمّ آلاف المتطوّعين الشباب لتقديمها كلّ صيف."
      },
      {
       "en": "Hi! I'm Tony Ross. I'm working for Young Friends of Yosemite, and my group have been here for three weeks now. We're staying at a campsite in the mountains, and we have several jobs. Visitors come and go every day, and we clean and tidy up before the next people arrive. We also work in the woods and keep the paths safe.",
       "ar": "مرحباً! أنا توني روس. أعمل لدى «أصدقاء يوسمايت الشباب» ومجموعتي هنا منذ ثلاثة أسابيع. نقيم في مخيّم في الجبال ولدينا عدّة أعمال. يأتي الزوّار ويذهبون كلّ يوم ونحن ننظّف ونرتّب قبل وصول الآخرين، ونعمل في الغابة ونُبقي الممرّات آمنة."
      },
      {
       "en": "Since our group started working together, we've become great friends. We work hard together, and we also have fun together. Last Saturday, we went white water rafting, and I've never enjoyed myself so much in all my life!",
       "ar": "منذ بدأت مجموعتنا العمل معاً أصبحنا أصدقاء مقرّبين. نعمل بجدّ معاً ونستمتع معاً أيضاً. السبت الماضي ذهبنا للتجديف في المياه البيضاء، ولم أستمتع بوقتي في حياتي كلّها كما استمتعت!"
      }
     ],
     "questions": [
      {
       "q": "When did the United States make Yosemite a National Park?",
       "o": [
        "In 1890",
        "In 1990",
        "In 1850"
       ],
       "a": 0
      },
      {
       "tf": false,
       "q": "The animals are the most amazing living things in Yosemite.",
       "why": "The huge trees are the most amazing."
      },
      {
       "tf": true,
       "q": "Millions of cars and heavy feet badly damage the Park."
      },
      {
       "q": "Who is Tony Ross?",
       "o": [
        "A visitor to Yosemite",
        "A volunteer for Young Friends of Yosemite",
        "A park guide"
       ],
       "a": 1
      },
      {
       "q": "What did Tony's group do last Saturday?",
       "o": [
        "They went white water rafting",
        "They went hiking",
        "They cleaned the campsite"
       ],
       "a": 0
      }
     ]
    },
    "rules": [
     {
      "title": "Present perfect: just, yet, already",
      "titleAr": "المضارع التام مع just وyet وalready",
      "explain": "نستعمل <b>المضارع التام</b> (have / has + V3) للأفعال التي حدثت حديثاً ولها أثر الآن. <b>just</b> = للتوّ، و<b>already</b> = بالفعل (قبل المتوقَّع)، و<b>yet</b> = بعدُ، وتأتي في آخر السؤال والنفي (Has everyone put their things in the car yet? / I haven't found my trainers yet).",
      "form": "have / has + just / already + V3    ·    haven't / hasn't + V3 + yet    ·    Have / Has + S + V3 + yet?",
      "examples": [
       {
        "en": "Omar **has arrived** in America.",
        "ar": "حدث حديثاً"
       },
       {
        "en": "I **have just put** my things in the car.",
        "ar": "للتوّ"
       },
       {
        "en": "We **have already eaten** them!",
        "ar": "بالفعل"
       },
       {
        "en": "I **haven't found** my trainers **yet**.",
        "ar": "نفي مع yet"
       },
       {
        "en": "**Has** everyone **put** their things in the car **yet**?",
        "ar": "سؤال مع yet"
       }
      ],
      "questions": [
       {
        "q": "I have ___ put my things in the car.",
        "o": [
         "yet",
         "just",
         "ever"
        ],
        "a": 1,
        "why": "just = للتوّ"
       },
       {
        "q": "I haven't found my trainers ___.",
        "o": [
         "yet",
         "already",
         "just"
        ],
        "a": 0,
        "why": "yet في النفي"
       },
       {
        "q": "You can eat the sandwiches. — We have ___ eaten them!",
        "o": [
         "already",
         "yet",
         "never"
        ],
        "a": 0
       },
       {
        "q": "Has everyone put their things in the car ___?",
        "o": [
         "already",
         "just",
         "yet"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "They ___ already passed the sign for Yosemite. (have)",
        "a": [
         "have",
         "'ve"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «هل أنهى محمد واجبه بعد؟»",
        "words": [
         "Has",
         "Mona",
         "done",
         "her",
         "homework",
         "yet?"
        ]
       }
      ]
     },
     {
      "title": "Present perfect: ever and never",
      "titleAr": "المضارع التام مع ever وnever",
      "explain": "نسأل عن <b>الخبرات في العمر</b> بـ <b>Have you ever + V3?</b> ونجيب Yes, I have / No, I haven't، أو نقول <b>I have never + V3</b> أي لم أفعل ذلك قطّ. ونقول <b>have been to</b> للذهاب إلى مكان والعودة منه (Have you ever been there?).",
      "form": "Have / Has + S + ever + V3?    ·    S + have / has + never + V3",
      "examples": [
       {
        "en": "**Have** you **ever seen** pictures of it?",
        "ar": "سؤال عن خبرة"
       },
       {
        "en": "No, I **haven't**.",
        "ar": "إجابة قصيرة"
       },
       {
        "en": "**Have** you **ever been** there?",
        "ar": "هل زرتَه؟"
       },
       {
        "en": "I've **never heard** of Yosemite.",
        "ar": "لم أسمع به قطّ"
       },
       {
        "en": "I've **never enjoyed** myself so much in all my life!",
        "ar": "لم أستمتع قطّ"
       }
      ],
      "questions": [
       {
        "q": "___ you ever seen pictures of it?",
        "o": [
         "Did",
         "Are",
         "Have"
        ],
        "a": 2
       },
       {
        "q": "I've ___ heard of Yosemite.",
        "o": [
         "yet",
         "just",
         "never"
        ],
        "a": 2
       },
       {
        "q": "Have you ever ___ there? — Yes, we have.",
        "o": [
         "be",
         "been",
         "being"
        ],
        "a": 1
       },
       {
        "q": "Omar: Have you ever been there? Yasmeen: ___, we have.",
        "o": [
         "No",
         "Never",
         "Yes"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "___ you ever been to Jenin? (have)",
        "a": [
         "Have"
        ]
       },
       {
        "type": "type",
        "q": "I have ___ been to Yosemite. (never)",
        "a": [
         "never"
        ]
       }
      ]
     },
     {
      "title": "Compound words",
      "titleAr": "الكلمات المركّبة",
      "explain": "نكوّن <b>كلمة مركّبة</b> بضمّ كلمتين معاً: <b>every + one = everyone</b>، <b>foot + ball = football</b>، <b>home + work = homework</b>، <b>in + doors = indoors</b>، <b>out + doors = outdoors</b>، <b>some + times = sometimes</b>، <b>water + fall = waterfall</b>، <b>wild + life = wildlife</b>.",
      "form": "كلمة + كلمة = كلمة مركّبة (every + one = everyone)",
      "examples": [
       {
        "en": "**everyone**",
        "ar": "every + one"
       },
       {
        "en": "**football**",
        "ar": "foot + ball"
       },
       {
        "en": "**homework**",
        "ar": "home + work"
       },
       {
        "en": "**indoors / outdoors**",
        "ar": "in / out + doors"
       },
       {
        "en": "**waterfall, wildlife**",
        "ar": "water + fall, wild + life"
       }
      ],
      "questions": [
       {
        "q": "every + one =",
        "o": [
         "everything",
         "everywhere",
         "everyone"
        ],
        "a": 2
       },
       {
        "q": "water + fall =",
        "o": [
         "waterfall",
         "waterbag",
         "fallwater"
        ],
        "a": 0
       },
       {
        "q": "It was cold ___ last night, so we stayed ___.",
        "o": [
         "indoors / outdoors",
         "outdoors / indoors",
         "football / homework"
        ],
        "a": 1
       },
       {
        "q": "Do we have to do any ___ this evening?",
        "o": [
         "wildlife",
         "homework",
         "waterfall"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "wild + life = ___",
        "a": [
         "wildlife"
        ]
       },
       {
        "type": "type",
        "q": "foot + ball = ___",
        "a": [
         "football"
        ]
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"entrance\" means:",
      "o": [
       "مدخل",
       "شلّال",
       "رحلة"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "q": "\"waterfall\" means:",
      "o": [
       "بحيرة",
       "شلّال",
       "جبل"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Yosemite became a National Park in 1890.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "trip",
        "رحلة"
       ],
       [
        "volunteer",
        "متطوّع"
       ],
       [
        "damage",
        "يُتلف"
       ],
       [
        "wildlife",
        "الحياة البرّية"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "The opposite of 'light' (a bag) is ___.",
      "o": [
       "short",
       "ugly",
       "heavy"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "q": "I have ___ finished my homework. (a moment ago)",
      "o": [
       "never",
       "yet",
       "just"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "They haven't arrived ___. (still not)",
      "a": [
       "yet"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "Have you ever been there?",
       "Did you ever been there?",
       "Have you ever be there?"
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "We've",
       "already",
       "passed",
       "the",
       "sign",
       "for",
       "Yosemite."
      ],
      "lv": "hard"
     },
     {
      "q": "Why does Yosemite still need help?",
      "o": [
       "Millions of cars and heavy feet damage it",
       "Nobody visits it",
       "There are no trees"
      ],
      "a": 0,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "4": {
  "title": "كيف تصبح صحّياً",
  "titleEn": "How to get healthy",
  "lessons": [
   {
    "id": "4-1",
    "title": "How to get healthy",
    "titleAr": "كيف تصبح صحّياً",
    "vocab": [
     {
      "en": "fit",
      "ar": "لائق بدنياً",
      "em": "💪",
      "ex": "If you want to be fit, keep training and sleep well.",
      "exAr": "إن أردتَ أن تكون لائقاً فواصل التدريب ونم جيّداً."
     },
     {
      "en": "get on",
      "ar": "يتدبّر أمره / يتقدّم",
      "em": "📈",
      "ex": "How have you been getting on since our talk last month?",
      "exAr": "كيف كانت أحوالك منذ حديثنا الشهر الماضي؟"
     },
     {
      "en": "had better",
      "ar": "من الأفضل أن",
      "em": "☝️",
      "ex": "You'd better read this book.",
      "exAr": "من الأفضل أن تقرأ هذا الكتاب."
     },
     {
      "en": "junk food",
      "ar": "وجبات سريعة غير صحّية",
      "em": "🍟",
      "ex": "Fries are junk food!",
      "exAr": "البطاطا المقلية طعام غير صحّي!"
     },
     {
      "en": "just",
      "ar": "فقط",
      "em": "☝️",
      "ex": "Just fries.",
      "exAr": "بطاطا مقلية فقط."
     },
     {
      "en": "miss",
      "ar": "يفوّته / يشتاق إلى",
      "em": "⏭️",
      "ex": "I mustn't lose my place in the team! I've been missing breakfast.",
      "exAr": "يجب ألّا أفقد مكاني في الفريق! لقد كنتُ أفوّت وجبة الفطور."
     },
     {
      "en": "real",
      "ar": "حقيقي",
      "em": "✅",
      "ex": "You need to start eating real food!",
      "exAr": "عليك أن تبدأ بأكل طعام حقيقي!"
     },
     {
      "en": "recently",
      "ar": "مؤخّراً",
      "em": "📅",
      "ex": "I haven't been playing well for my football team recently.",
      "exAr": "لم ألعب جيّداً مع فريقي مؤخّراً."
     },
     {
      "en": "wake up",
      "ar": "يستيقظ",
      "em": "⏰",
      "ex": "I've been waking up late.",
      "exAr": "كنتُ أستيقظ متأخّراً."
     },
     {
      "en": "feel sick",
      "ar": "يشعر بالمرض",
      "em": "🤒",
      "ex": "I've been feeling quite sick for several weeks.",
      "exAr": "أشعر بالمرض منذ عدّة أسابيع."
     },
     {
      "en": "tired",
      "ar": "متعب",
      "em": "😴",
      "ex": "I've been getting tired quickly.",
      "exAr": "أصبحتُ أتعب بسرعة."
     },
     {
      "en": "healthy",
      "ar": "صحّي",
      "em": "🥗",
      "ex": "I feel much healthier now.",
      "exAr": "أشعر أنّني أصحّ كثيراً الآن."
     },
     {
      "en": "medicine",
      "ar": "دواء",
      "em": "💊",
      "ex": "You'd better take this medicine.",
      "exAr": "من الأفضل أن تتناول هذا الدواء."
     },
     {
      "en": "doctor",
      "ar": "طبيب",
      "em": "👨‍⚕️",
      "ex": "Sami is at the doctor's.",
      "exAr": "سامي عند الطبيب."
     },
     {
      "en": "walk",
      "ar": "مشي / يمشي",
      "em": "🚶",
      "ex": "That was a beautiful walk, wasn't it?",
      "exAr": "كانت نزهة مشي جميلة، أليس كذلك؟"
     },
     {
      "en": "sleep",
      "ar": "نوم / ينام",
      "em": "🛌",
      "ex": "He always has a sleep in the afternoon.",
      "exAr": "هو يأخذ قيلولة دائماً بعد الظهر."
     }
    ],
    "reading": {
     "title": "At the doctor's",
     "paras": [
      {
       "en": "Sami is at the doctor's. Doctor: What's wrong, Sami? You don't look very well. Sami: You're right. I've been feeling quite sick for several weeks. And I've been getting tired quickly. Doctor: Have you been sleeping badly for a long time, too? Sami: Yes, I have. And I haven't been playing well for my football team recently.",
       "ar": "سامي عند الطبيب. الطبيب: ما بك يا سامي؟ لا تبدو بخير. سامي: معك حقّ، أشعر بالمرض منذ عدّة أسابيع وأتعب بسرعة. الطبيب: وهل تنام نوماً سيّئاً منذ فترة طويلة أيضاً؟ سامي: نعم، ولم ألعب جيّداً مع فريق كرة القدم مؤخّراً."
      },
      {
       "en": "Doctor: Have you been eating normally? Sami: Well, no. I've been waking up late, and missing breakfast. Doctor: So you've been going to school tired and hungry. And what have you been eating for lunch? Sami: Just fries. Doctor: Sami, fries are junk food! You need to start eating real food!",
       "ar": "الطبيب: هل كنتَ تأكل بشكل طبيعي؟ سامي: لا، كنتُ أستيقظ متأخّراً وأفوّت وجبة الفطور. الطبيب: إذن كنتَ تذهب إلى المدرسة متعباً وجائعاً. وماذا كنتَ تأكل في الغداء؟ سامي: بطاطا مقلية فقط. الطبيب: يا سامي، البطاطا المقلية طعام غير صحّي! عليك أن تبدأ بأكل طعام حقيقي!"
      },
      {
       "en": "Doctor: And that includes fruit and vegetables. Sami: Really? Doctor: Yes. And you'd better read this book – Get fit and healthy. Do what it says, and then come back next month. Sami: Thanks. I'll do that. I mustn't lose my place in the team!",
       "ar": "الطبيب: وهذا يشمل الفواكه والخضار. سامي: حقّاً؟ الطبيب: نعم. ومن الأفضل أن تقرأ هذا الكتاب «كن لائقاً وصحّياً»، نفّذ ما فيه ثمّ عُد إليّ الشهر القادم. سامي: شكراً، سأفعل ذلك، يجب ألّا أفقد مكاني في الفريق!"
      },
      {
       "en": "A month later … Doctor: How have you been getting on since our talk last month? Sami: Really well. I read the book, and I've been doing what it says since then. I've been sleeping much better. Doctor: I can see that. You don't look tired today. Have you been eating better, too? Sami: Yes, and I feel much healthier now. Thanks for all your help.",
       "ar": "بعد شهر… الطبيب: كيف كانت أحوالك منذ حديثنا الشهر الماضي؟ سامي: جيّدة جدّاً، قرأتُ الكتاب وأنفّذ ما فيه منذ ذلك الحين وأنام أفضل كثيراً. الطبيب: أرى ذلك، لا تبدو متعباً اليوم. وهل كنتَ تأكل أفضل أيضاً؟ سامي: نعم، وأشعر أنّني أصحّ كثيراً الآن. شكراً على كلّ مساعدتك."
      }
     ],
     "questions": [
      {
       "q": "How long has Sami been feeling sick?",
       "o": [
        "For one day",
        "Since yesterday",
        "For several weeks"
       ],
       "a": 2
      },
      {
       "q": "What has Sami been eating for lunch?",
       "o": [
        "Just fries",
        "Fruit and vegetables",
        "Sandwiches"
       ],
       "a": 0
      },
      {
       "tf": true,
       "q": "The doctor tells Sami to eat fruit and vegetables."
      },
      {
       "q": "What does the doctor ask Sami to read?",
       "o": [
        "A story book",
        "A sports magazine",
        "Get fit and healthy"
       ],
       "a": 2
      },
      {
       "q": "How does Sami feel a month later?",
       "o": [
        "Still sick",
        "Very hungry",
        "Much healthier"
       ],
       "a": 2
      }
     ]
    },
    "rules": [
     {
      "title": "Present perfect continuous",
      "titleAr": "المضارع التام المستمر",
      "explain": "نستعمل <b>have / has been + V-ing</b> للحديث عن فعل <b>بدأ في الماضي ولا يزال مستمرّاً</b> أو توقّف حديثاً وأثره ظاهر (I've been feeling sick for several weeks). والنفي <b>haven't / hasn't been + V-ing</b>، والسؤال <b>Have / Has + S + been + V-ing?</b>",
      "form": "have / has + been + V-ing    ·    haven't / hasn't + been + V-ing    ·    Have / Has + S + been + V-ing?",
      "examples": [
       {
        "en": "I **'ve been feeling** quite sick for several weeks.",
        "ar": "بدأ ولا يزال"
       },
       {
        "en": "I **haven't been playing** well recently.",
        "ar": "نفي"
       },
       {
        "en": "**Have** you **been sleeping** badly for a long time?",
        "ar": "سؤال"
       },
       {
        "en": "What **have** you **been eating** for lunch?",
        "ar": "سؤال بأداة"
       },
       {
        "en": "I **'ve been doing** what it says since then.",
        "ar": "منذ ذلك الحين"
       }
      ],
      "questions": [
       {
        "q": "I ___ feeling quite sick for several weeks.",
        "o": [
         "am",
         "have been",
         "was being"
        ],
        "a": 1
       },
       {
        "q": "Sami ___ playing well for his team recently.",
        "o": [
         "haven't been",
         "hasn't been",
         "isn't been"
        ],
        "a": 1
       },
       {
        "q": "___ you been eating normally?",
        "o": [
         "Did",
         "Are",
         "Have"
        ],
        "a": 2
       },
       {
        "q": "They ___ going to school not far from their new home. (since they moved)",
        "o": [
         "has been",
         "are been",
         "have been"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "I ___ waking up late. (have)",
        "a": [
         "have been",
         "'ve been"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «كنتُ أنام جيّداً»",
        "words": [
         "I've",
         "been",
         "sleeping",
         "much",
         "better."
        ]
       }
      ]
     },
     {
      "title": "since and for",
      "titleAr": "الفرق بين since وfor",
      "explain": "نستعمل <b>for</b> مع <b>مدّة الزمن</b> (for three weeks, for the past month)، ونستعمل <b>since</b> مع <b>نقطة بداية</b> في الزمن (since last Monday, since our last conversation, since I was young). ونسأل عن المدّة بـ <b>How long?</b>",
      "form": "for + مدّة (a week, ten years)    ·    since + نقطة بداية (yesterday, 2020, I was young)",
      "examples": [
       {
        "en": "I've been waking up early **for the past month**.",
        "ar": "مدّة"
       },
       {
        "en": "The team has been training **for a week**.",
        "ar": "مدّة"
       },
       {
        "en": "I've been doing what it says **since then**.",
        "ar": "نقطة بداية"
       },
       {
        "en": "I have been learning English **since I was young**.",
        "ar": "نقطة بداية"
       },
       {
        "en": "Samia has been sleeping **since yesterday**.",
        "ar": "نقطة بداية"
       }
      ],
      "questions": [
       {
        "q": "The team players have been training ___ a week now.",
        "o": [
         "since",
         "for",
         "from"
        ],
        "a": 1,
        "why": "a week: مدّة"
       },
       {
        "q": "I have been learning English ___ I was young.",
        "o": [
         "for",
         "since",
         "at"
        ],
        "a": 1
       },
       {
        "q": "Sally's family has been living here ___ ten years.",
        "o": [
         "since",
         "in",
         "for"
        ],
        "a": 2
       },
       {
        "q": "Samia has been sleeping ___ yesterday.",
        "o": [
         "since",
         "for",
         "during"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "The team have been training ___ three days. (since / for)",
        "a": [
         "for"
        ]
       },
       {
        "type": "type",
        "q": "Mum has been cooking ___ two o'clock. (since / for)",
        "a": [
         "since"
        ]
       }
      ]
     },
     {
      "title": "had better, could, What about …?",
      "titleAr": "النصح والاقتراح",
      "explain": "نقدّم <b>نصيحة قويّة</b> بـ <b>had better + V1</b> (You'd better read this book)، وللنهي <b>had better not + V1</b>. ونقدّم <b>اقتراحاً</b> بـ <b>could + V1</b> (You could start a new sport) أو <b>What about + V-ing?</b> (What about walking for an hour?).",
      "form": "had better (not) + V1    ·    could + V1    ·    What about + V-ing?",
      "examples": [
       {
        "en": "You **had better do** our quiz.",
        "ar": "نصيحة"
       },
       {
        "en": "You **had better not do** this.",
        "ar": "نهي"
       },
       {
        "en": "You **could start** a new sport.",
        "ar": "اقتراح"
       },
       {
        "en": "**What about walking** for an hour?",
        "ar": "اقتراح"
       }
      ],
      "questions": [
       {
        "q": "I feel really ill. — You ___ stay in bed.",
        "o": [
         "had better not",
         "used to",
         "had better"
        ],
        "a": 2
       },
       {
        "q": "You ___ go to school today. You are sick.",
        "o": [
         "had better",
         "had better not",
         "could better"
        ],
        "a": 1
       },
       {
        "q": "What about ___ for an hour?",
        "o": [
         "walk",
         "walking",
         "to walk"
        ],
        "a": 1
       },
       {
        "q": "You ___ start a new sport.",
        "o": [
         "had better to",
         "could",
         "what about"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "You'd ___ take this medicine. (better)",
        "a": [
         "better"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «من الأفضل ألّا تحاول فعل شيء اليوم»",
        "words": [
         "You",
         "had",
         "better",
         "not",
         "try",
         "to",
         "do",
         "anything",
         "today."
        ]
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"junk food\" means:",
      "o": [
       "طعام حقيقي",
       "طعام غير صحّي",
       "فاكهة"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "q": "\"recently\" means:",
      "o": [
       "دائماً",
       "مؤخّراً",
       "غداً"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Sami has been missing breakfast and waking up late.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "fit",
        "لائق بدنياً"
       ],
       [
        "wake up",
        "يستيقظ"
       ],
       [
        "real",
        "حقيقي"
       ],
       [
        "healthy",
        "صحّي"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "The team has been training ___ a week.",
      "o": [
       "for",
       "since",
       "at"
      ],
      "a": 0,
      "lv": "medium"
     },
     {
      "q": "I feel really ill. You ___ stay in bed.",
      "o": [
       "used to",
       "had better",
       "are going"
      ],
      "a": 1,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "I have been learning English ___ I was young. (for / since)",
      "a": [
       "since"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "He has been sleeping badly for a long time.",
       "He has been sleep badly for a long time.",
       "He is been sleeping badly for a long time."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "How",
       "have",
       "you",
       "been",
       "getting",
       "on",
       "since",
       "our",
       "talk",
       "last",
       "month?"
      ],
      "lv": "hard"
     },
     {
      "q": "Why did the doctor tell Sami to eat real food?",
      "o": [
       "Sami is too heavy",
       "Sami likes fruit",
       "Fries are junk food"
      ],
      "a": 2,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "5": {
  "title": "أشخاص وألعاب",
  "titleEn": "People and games",
  "lessons": [
   {
    "id": "5-1",
    "title": "People and games",
    "titleAr": "أشخاص وألعاب",
    "vocab": [
     {
      "en": "club",
      "ar": "نادٍ",
      "em": "🏟️",
      "ex": "Yes, I've got training at the club today.",
      "exAr": "نعم، لديّ تدريب في النادي اليوم."
     },
     {
      "en": "coach",
      "ar": "مدرّب",
      "em": "🧑‍🏫",
      "ex": "Our coach says we really mustn't miss it.",
      "exAr": "يقول مدرّبنا إنّ علينا ألّا نفوّته أبداً."
     },
     {
      "en": "either",
      "ar": "أيضاً (في النفي)",
      "em": "🙅",
      "ex": "I mustn't miss my training, either.",
      "exAr": "يجب ألّا أفوّت تدريبي أنا أيضاً."
     },
     {
      "en": "miss",
      "ar": "يفوّت / يشتاق إلى",
      "em": "💔",
      "ex": "I really miss football!",
      "exAr": "أشتاق إلى كرة القدم حقّاً!"
     },
     {
      "en": "practise",
      "ar": "يتمرّن",
      "em": "🔁",
      "ex": "We have to practise more.",
      "exAr": "علينا أن نتمرّن أكثر."
     },
     {
      "en": "soccer",
      "ar": "كرة القدم (بالأمريكية)",
      "em": "⚽",
      "ex": "It's soccer here in America, but everyone else calls it football.",
      "exAr": "هي «سوكر» هنا في أمريكا لكنّ بقيّة العالم يسمّونها «فوتبول»."
     },
     {
      "en": "sports bag",
      "ar": "حقيبة رياضية",
      "em": "🎒",
      "ex": "Whose is that sports bag, Adnan?",
      "exAr": "لمن هذه الحقيبة الرياضية يا عدنان؟"
     },
     {
      "en": "training",
      "ar": "تدريب",
      "em": "🏃",
      "ex": "I've got training at the club today.",
      "exAr": "لديّ تدريب في النادي اليوم."
     },
     {
      "en": "whose",
      "ar": "لمن",
      "em": "❓",
      "ex": "Whose is that sports bag?",
      "exAr": "لمن هذه الحقيبة الرياضية؟"
     },
     {
      "en": "match",
      "ar": "مباراة",
      "em": "🏆",
      "ex": "Our teams both have big matches tomorrow.",
      "exAr": "لدى فريقينا مباراتان كبيرتان غداً."
     },
     {
      "en": "favourite",
      "ar": "المفضّل",
      "em": "⭐",
      "ex": "It's a game for everyone, and it's my favourite.",
      "exAr": "هي لعبة للجميع وهي لعبتي المفضّلة."
     },
     {
      "en": "agree",
      "ar": "يوافق",
      "em": "🤝",
      "ex": "I don't agree.",
      "exAr": "لا أوافق."
     },
     {
      "en": "compete",
      "ar": "يتنافس",
      "em": "🥇",
      "ex": "People have always loved to compete their hardest.",
      "exAr": "أحبّ الناس دائماً أن يتنافسوا بأقصى جهدهم."
     },
     {
      "en": "everything",
      "ar": "كلّ شيء",
      "em": "🌐",
      "ex": "I'm very hungry; I need something to eat. Everything is ready.",
      "exAr": "أنا جائع جدّاً وأحتاج إلى شيء آكله. كلّ شيء جاهز."
     },
     {
      "en": "someone",
      "ar": "شخص ما",
      "em": "🕵️",
      "ex": "Listen! There's someone knocking at the door.",
      "exAr": "اسمع! هناك شخص يطرق الباب."
     },
     {
      "en": "birthday",
      "ar": "عيد ميلاد",
      "em": "🎂",
      "ex": "birth + day = birthday.",
      "exAr": "birth + day = birthday (عيد ميلاد)."
     }
    ],
    "reading": {
     "title": "Whose is that sports bag?",
     "paras": [
      {
       "en": "Omar has seen a big sports bag. It isn't his, so he asks Adnan. Omar: Whose is that sports bag, Adnan? Is it yours, or is it Yasmeen's? Adnan: It's hers. Mine is over there by the stairs. Yasmeen: (arrives) Yes, I've got training at the club today. Our coach says we really mustn't miss it. We have to practise more.",
       "ar": "رأى عمر حقيبة رياضية كبيرة وليست له، فسأل عدنان. عمر: لمن هذه الحقيبة الرياضية يا عدنان؟ هل هي لك أم لياسمين؟ عدنان: هي لها، أمّا حقيبتي فهناك بجانب الدرج. ياسمين: (تصل) نعم، لديّ تدريب في النادي اليوم. يقول مدرّبنا إنّ علينا ألّا نفوّته أبداً، ويجب أن نتمرّن أكثر."
      },
      {
       "en": "Adnan: I mustn't miss my training, either. You see, Omar, our teams both have big matches tomorrow. Omar: What kind of sport do you mean? Basketball? Volleyball? Yasmeen: No, soccer. Omar: Soccer? What's that? I've never heard of it. Adnan: Oh, yes, it's soccer here in America, but everyone else calls it football.",
       "ar": "عدنان: ويجب ألّا أفوّت تدريبي أنا أيضاً، فلدى فريقينا مباراتان كبيرتان غداً يا عمر. عمر: أيّ رياضة تقصدان؟ كرة السلّة؟ الكرة الطائرة؟ ياسمين: لا، السوكر. عمر: السوكر؟ ما هذا؟ لم أسمع به قطّ. عدنان: آه نعم، هو «سوكر» هنا في أمريكا لكنّ الجميع في بقيّة العالم يسمّونه كرة القدم."
      },
      {
       "en": "Omar: Ah, football! I love the game. Yasmeen: I do, too. Omar: But football isn't a game for girls, is it? Not like volleyball. Yasmeen: I don't agree. Adnan: I don't, either. Lots of girls play it here. Yasmeen: It's a game for everyone, and it's my favourite. Omar: Mine, too. I really miss football!",
       "ar": "عمر: آه، كرة القدم! أحبّ هذه اللعبة. ياسمين: وأنا أيضاً. عمر: لكنّ كرة القدم ليست لعبة للبنات، أليس كذلك؟ ليست مثل الكرة الطائرة. ياسمين: لا أوافقك. عدنان: ولا أنا. كثير من البنات يلعبنها هنا. ياسمين: هي لعبة للجميع وهي لعبتي المفضّلة. عمر: ولعبتي أنا أيضاً، أشتاق إلى كرة القدم كثيراً!"
      },
      {
       "en": "Adnan: What about training with me this evening? Omar: Fantastic! And can I come and watch your match tomorrow? Adnan: Yes, it'll be good. Our team are going to win! Yasmeen: Ha! You should come and watch our game, Omar. Ours will be much better than theirs!",
       "ar": "عدنان: ما رأيك أن تتدرّب معي هذا المساء؟ عمر: رائع! وهل يمكنني أن آتي لأشاهد مباراتك غداً؟ عدنان: نعم، سيكون ذلك جيّداً. فريقنا سيفوز! ياسمين: ها! يجب أن تأتي لتشاهد مباراتنا يا عمر، فمباراتنا ستكون أفضل بكثير من مباراتهم!"
      }
     ],
     "questions": [
      {
       "q": "Whose is the big sports bag?",
       "o": [
        "Yasmeen's",
        "Omar's",
        "Adnan's"
       ],
       "a": 0
      },
      {
       "q": "What do Americans call football?",
       "o": [
        "Rugby",
        "Volleyball",
        "Soccer"
       ],
       "a": 2
      },
      {
       "tf": false,
       "q": "Omar thinks football is only a game for boys.",
       "why": "Omar asks if it's a game for girls, but Yasmeen and Adnan disagree."
      },
      {
       "q": "Why mustn't Adnan and Yasmeen miss training?",
       "o": [
        "They want to buy bags",
        "They have big matches tomorrow",
        "It's their birthday"
       ],
       "a": 1
      },
      {
       "q": "What does Omar really miss?",
       "o": [
        "Volleyball",
        "Football",
        "His school"
       ],
       "a": 1
      }
     ]
    },
    "rules": [
     {
      "title": "Possessive adjectives and possessive pronouns",
      "titleAr": "صفات الملكية وضمائر الملكية",
      "explain": "<b>صفات الملكية</b> تأتي قبل الاسم: my, your, his, her, our, your, their (<b>my</b> favourite game). و<b>ضمائر الملكية</b> تقوم مقام الاسم فلا يأتي بعدها اسم: mine, yours, his, hers, ours, yours, theirs (It is <b>mine</b>, too / <b>Ours</b> will be much better than <b>theirs</b>).",
      "form": "my / your / his / her / our / your / their + اسم    ·    mine / yours / his / hers / ours / yours / theirs",
      "examples": [
       {
        "en": "It's **my** favourite game.",
        "ar": "صفة ملكية"
       },
       {
        "en": "Mine, too.",
        "ar": "ضمير ملكية"
       },
       {
        "en": "Is it **yours**, or is it Yasmeen's?",
        "ar": "ضمير ملكية"
       },
       {
        "en": "It's **hers**.",
        "ar": "ضمير ملكية"
       },
       {
        "en": "**Ours** will be much better than **theirs**.",
        "ar": "ضمائر ملكية"
       }
      ],
      "questions": [
       {
        "q": "Whose bag is it? Is it ___, or is it Yasmeen's?",
        "o": [
         "your",
         "you",
         "yours"
        ],
        "a": 2
       },
       {
        "q": "It's Yasmeen's bag. It's ___.",
        "o": [
         "her",
         "she",
         "hers"
        ],
        "a": 2
       },
       {
        "q": "Our team is much stronger than ___ team.",
        "o": [
         "their",
         "theirs",
         "they"
        ],
        "a": 0
       },
       {
        "q": "This is my bag, not ___.",
        "o": [
         "your",
         "yours",
         "you're"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "That is her book, not ___. (his / your)",
        "a": [
         "his"
        ]
       },
       {
        "type": "type",
        "q": "Our match will be better than ___. (they)",
        "a": [
         "theirs"
        ]
       }
      ]
     },
     {
      "title": "too and either",
      "titleAr": "too وeither للموافقة",
      "explain": "نوافق على كلام <b>مثبت</b> بـ <b>too</b> في آخر الجملة (I love the game. — I do, too / I love it, too). ونوافق على كلام <b>منفيّ</b> بـ <b>either</b> (I don't agree. — I don't, either). وفي الإجابة القصيرة نكرّر الفعل المساعد: has / can / will / don't.",
      "form": "كلام مثبت ← ... , too    ·    كلام منفيّ ← ... , either",
      "examples": [
       {
        "en": "A: I love the game. B: I do, **too**.",
        "ar": "موافقة في الإثبات"
       },
       {
        "en": "A: Yasmeen has got training. B: Adnan has, **too**.",
        "ar": "موافقة في الإثبات"
       },
       {
        "en": "A: I do not agree. B: I do not agree, **either**.",
        "ar": "موافقة في النفي"
       },
       {
        "en": "A: Adnan can't miss training. B: Yasmeen can't, **either**.",
        "ar": "موافقة في النفي"
       },
       {
        "en": "Mine, **too**.",
        "ar": "اختصار"
       }
      ],
      "questions": [
       {
        "q": "I love football. — I do, ___.",
        "o": [
         "either",
         "neither",
         "too"
        ],
        "a": 2
       },
       {
        "q": "I don't agree. — I don't, ___.",
        "o": [
         "too",
         "either",
         "also"
        ],
        "a": 1
       },
       {
        "q": "Adnan really wants to win tomorrow. — Yasmeen does, ___.",
        "o": [
         "either",
         "too",
         "but"
        ],
        "a": 1
       },
       {
        "q": "Adnan's team won't lose. — Yasmeen's team won't, ___.",
        "o": [
         "too",
         "so",
         "either"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "In Britain, we don't call it 'soccer'. — Palestinians don't, ___.",
        "a": [
         "either"
        ]
       },
       {
        "type": "type",
        "q": "I don't like junk food. Mum doesn't, ___.",
        "a": [
         "either"
        ]
       }
      ]
     },
     {
      "title": "something, someone, everything, everyone",
      "titleAr": "something وsomeone وeverything وeveryone",
      "explain": "<b>some-</b> (something, someone) لشيء أو شخص غير محدّد في الجملة المثبتة (There's someone knocking)، و<b>every-</b> (everything, everyone) للكلّ (Everyone should keep silent). ونعامل <b>everyone</b> و<b>everything</b> كمفرد مع فعل مفرد. ونكتب الأعوام كأعداد: 1967 = nineteen sixty-seven، و2020 = twenty twenty.",
      "form": "some- + thing / one    ·    every- + thing / one    ·    1967 = nineteen sixty-seven",
      "examples": [
       {
        "en": "I am very hungry; I need **something** to eat.",
        "ar": "شيء ما"
       },
       {
        "en": "Listen! There's **someone** knocking at the door.",
        "ar": "شخص ما"
       },
       {
        "en": "**Everyone** should keep silent.",
        "ar": "الجميع"
       },
       {
        "en": "Mum made **everything** ready.",
        "ar": "كلّ شيء"
       },
       {
        "en": "1711 = **seventeen eleven**",
        "ar": "تاريخ بالأعداد"
       }
      ],
      "questions": [
       {
        "q": "I am very hungry; I need ___ to eat.",
        "o": [
         "everyone",
         "something",
         "someone"
        ],
        "a": 1
       },
       {
        "q": "___ should keep silent, Grandpa is sleeping.",
        "o": [
         "Something",
         "Everything",
         "Everyone"
        ],
        "a": 2
       },
       {
        "q": "Listen! There's ___ knocking at the door.",
        "o": [
         "everything",
         "someone",
         "anything"
        ],
        "a": 1
       },
       {
        "q": "1967 is read:",
        "o": [
         "one nine six seven",
         "nineteen sixty seven hundred",
         "nineteen sixty-seven"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "2020 is read: twenty ___",
        "a": [
         "twenty"
        ]
       },
       {
        "type": "type",
        "q": "birth + day = ___",
        "a": [
         "birthday"
        ]
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"coach\" means:",
      "o": [
       "حارس",
       "مدرّب",
       "زميل"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "q": "\"whose\" means:",
      "o": [
       "متى",
       "كيف",
       "لمن"
      ],
      "a": 2,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "In America people call football 'soccer'.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "club",
        "نادٍ"
       ],
       [
        "match",
        "مباراة"
       ],
       [
        "training",
        "تدريب"
       ],
       [
        "favourite",
        "المفضّل"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "This bag is yours. That one is ___.",
      "o": [
       "mine",
       "my",
       "me"
      ],
      "a": 0,
      "lv": "medium"
     },
     {
      "q": "I love football. — I do, ___.",
      "o": [
       "either",
       "neither",
       "too"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "Our team is better than ___. (they)",
      "a": [
       "theirs"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "Mine is over there by the stairs.",
       "Mine bag is over there by the stairs.",
       "My is over there by the stairs."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "It's",
       "a",
       "game",
       "for",
       "everyone,",
       "and",
       "it's",
       "my",
       "favourite."
      ],
      "lv": "hard"
     },
     {
      "q": "Why does Omar say 'Mine, too'?",
      "o": [
       "He lost a bag",
       "His favourite sport is football",
       "He likes volleyball only"
      ],
      "a": 1,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "6": {
  "title": "الأصدقاء",
  "titleEn": "Friends",
  "lessons": [
   {
    "id": "6-1",
    "title": "Friends",
    "titleAr": "الأصدقاء",
    "vocab": [
     {
      "en": "alone",
      "ar": "وحده / وحيداً",
      "em": "🧍",
      "ex": "Leave me alone!",
      "exAr": "اتركني وحدي!"
     },
     {
      "en": "embarrassed",
      "ar": "محرَج",
      "em": "😳",
      "ex": "I always feel bad – and embarrassed, too.",
      "exAr": "أشعر دائماً بالسوء، وبالإحراج أيضاً."
     },
     {
      "en": "horrible",
      "ar": "فظيع / سيّئ",
      "em": "😖",
      "ex": "And I was horrible back to you!",
      "exAr": "وكنتُ فظّة معك!"
     },
     {
      "en": "in fact",
      "ar": "في الحقيقة",
      "em": "💡",
      "ex": "In fact, they shouldn't hide them.",
      "exAr": "في الحقيقة لا ينبغي أن يخفوها."
     },
     {
      "en": "natural",
      "ar": "طبيعي",
      "em": "🌿",
      "ex": "It was only natural, so don't worry.",
      "exAr": "كان ذلك طبيعياً فلا تقلقي."
     },
     {
      "en": "scared",
      "ar": "خائف",
      "em": "😨",
      "ex": "Yes, I was really scared.",
      "exAr": "نعم، كنتُ خائفة حقّاً."
     },
     {
      "en": "support",
      "ar": "يدعم",
      "em": "🤗",
      "ex": "You were just trying to support me like a good friend.",
      "exAr": "كنتِ تحاولين دعمي كصديقة جيّدة."
     },
     {
      "en": "worried",
      "ar": "قلِق",
      "em": "😟",
      "ex": "Rima was really worried when her father had to go to hospital.",
      "exAr": "كانت ريما قلِقة جدّاً حين اضطرّ والدها إلى دخول المستشفى."
     },
     {
      "en": "adult",
      "ar": "بالغ",
      "em": "🧑",
      "ex": "An adult can give you advice.",
      "exAr": "يمكن لشخص بالغ أن ينصحك."
     },
     {
      "en": "at first",
      "ar": "في البداية",
      "em": "1️⃣",
      "ex": "At first, I was scared.",
      "exAr": "في البداية كنتُ خائفاً."
     },
     {
      "en": "completely",
      "ar": "تماماً",
      "em": "💯",
      "ex": "I understood completely.",
      "exAr": "فهمتُ تماماً."
     },
     {
      "en": "danger",
      "ar": "خطر",
      "em": "⚠️",
      "ex": "There is danger on this road.",
      "exAr": "هناك خطر على هذا الطريق."
     },
     {
      "en": "immediately",
      "ar": "فوراً",
      "em": "⚡",
      "ex": "This letter asks for an immediate answer, so write back immediately.",
      "exAr": "تطلب هذه الرسالة جواباً فورياً، فاكتب الردّ فوراً."
     },
     {
      "en": "secret",
      "ar": "سرّ",
      "em": "🤫",
      "ex": "Sorry, I can't tell you what Fatima told me. It is a secret.",
      "exAr": "آسف، لا أستطيع إخبارك بما قالته فاطمة فهو سرّ."
     },
     {
      "en": "situation",
      "ar": "موقف / وضع",
      "em": "🧩",
      "ex": "A good friend helps in every situation.",
      "exAr": "الصديق الجيّد يساعد في كلّ موقف."
     },
     {
      "en": "trust",
      "ar": "يثق بـ",
      "em": "🔐",
      "ex": "You can trust a real friend.",
      "exAr": "يمكنك أن تثق بالصديق الحقيقي."
     }
    ],
    "reading": {
     "title": "Friends",
     "paras": [
      {
       "en": "Two days ago, Tina's younger brother fell from a tree and hurt himself badly. Nadia: Hi, Tina. What's the news from the hospital? How's Tim? Tina: He was much better when we visited him last night. Nadia: Great! And you look happier now. You were very upset yesterday morning. Tina: Yes, I was really scared. Nadia: Well, it's fantastic that you don't need to worry now.",
       "ar": "قبل يومين سقط أخو تينا الأصغر من شجرة وأصيب إصابة بالغة. نادية: مرحباً يا تينا، ما أخبار المستشفى؟ كيف حال تيم؟ تينا: كان أفضل بكثير حين زرناه ليلة أمس. نادية: رائع! وتبدين أسعد الآن، كنتِ منزعجة جدّاً صباح أمس. تينا: نعم، كنتُ خائفة حقّاً. نادية: حسناً، من الرائع ألّا تحتاجي إلى القلق الآن."
      },
      {
       "en": "Tina: Listen, Nadia, I want to say sorry for yesterday. Nadia: Oh, because you shouted, 'Leave me alone!' Tina: Yes. I know you were just trying to support me like a good friend. Nadia: Well, I always want to help when a friend is upset. Tina: And I was horrible back to you! I'm really sorry. Nadia: It was only natural, so don't worry. Really.",
       "ar": "تينا: اسمعي يا نادية، أريد أن أعتذر عن أمس. نادية: آه، لأنّك صرختِ «اتركيني وحدي!». تينا: نعم، وأعرف أنّكِ كنتِ تحاولين دعمي كصديقة جيّدة. نادية: أريد دائماً أن أساعد حين يكون الصديق منزعجاً. تينا: وأنا كنتُ فظّة معكِ! أنا آسفة جدّاً. نادية: كان ذلك طبيعياً فلا تقلقي، حقّاً."
      },
      {
       "en": "Tina: You see, I sometimes say the wrong thing when I get upset. And when I think about it later, I always feel bad – and embarrassed, too. Nadia: It's fine. I understood completely, and I wasn't angry.",
       "ar": "تينا: كما ترين، أقول أحياناً الكلام الخطأ حين أنزعج، وحين أفكّر فيه لاحقاً أشعر دائماً بالسوء وبالإحراج أيضاً. نادية: لا بأس، فهمتُ تماماً ولم أغضب."
      },
      {
       "en": "Nadia: You see, when people are friends, they don't have to hide their feelings. In fact, they shouldn't hide them. Tina: You really are a good friend, Nadia!",
       "ar": "نادية: كما ترين، حين يكون الناس أصدقاء لا يجب أن يخفوا مشاعرهم، بل في الحقيقة لا ينبغي أن يخفوها. تينا: أنتِ حقّاً صديقة رائعة يا نادية!"
      }
     ],
     "questions": [
      {
       "q": "Why was Tina upset yesterday?",
       "o": [
        "She lost a book",
        "Her brother fell from a tree",
        "She had a test"
       ],
       "a": 1
      },
      {
       "tf": true,
       "q": "Tim was much better when Tina visited him last night."
      },
      {
       "q": "What did Tina shout at Nadia?",
       "o": [
        "'Come here!'",
        "'Leave me alone!'",
        "'Help me!'"
       ],
       "a": 1
      },
      {
       "q": "Why does Tina feel embarrassed?",
       "o": [
        "She lost her phone",
        "She said the wrong thing when upset",
        "She was late"
       ],
       "a": 1
      },
      {
       "q": "What does Nadia say friends should do with their feelings?",
       "o": [
        "Hide them",
        "Not hide them",
        "Write them down"
       ],
       "a": 1
      }
     ]
    },
    "rules": [
     {
      "title": "When + present simple",
      "titleAr": "الجمل بـ when: الحقائق والعادات",
      "explain": "نستعمل <b>When + المضارع البسيط</b> في الجزأين للحديث عن أمر يحدث <b>في أيّ وقت</b> كلّما تحقّق الشرط (When people are embarrassed, they often go red). ويمكن أن يأتي جزء <b>when</b> أوّلاً أو ثانياً (I always want to help when a friend is upset).",
      "form": "When + S + V1 / V(s), S + V1 / V(s)    ·    S + V1, when + S + V1",
      "examples": [
       {
        "en": "**When** people are friends, they don't have to hide their feelings.",
        "ar": "حقيقة عامة"
       },
       {
        "en": "I always want to help **when** a friend is upset.",
        "ar": "جزء when ثانياً"
       },
       {
        "en": "**When** people are embarrassed, they often go red.",
        "ar": "عادة"
       },
       {
        "en": "**When** people are scared, they often go white.",
        "ar": "عادة"
       }
      ],
      "questions": [
       {
        "q": "When people are embarrassed, they often ___.",
        "o": [
         "goes red",
         "go red",
         "will go red"
        ],
        "a": 1
       },
       {
        "q": "When people are scared, they often ___.",
        "o": [
         "go white",
         "are going white",
         "went white"
        ],
        "a": 0
       },
       {
        "q": "When people are excited, they often ___ and jump up and down.",
        "o": [
         "shout",
         "shouted",
         "will shout"
        ],
        "a": 0
       },
       {
        "q": "I always go to sleep ___ it is 10 pm.",
        "o": [
         "if",
         "when",
         "so"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "I often go red ___ I am pleased. (when / if)",
        "a": [
         "when"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «حين يكون الناس سعداء فهم يبدون سعداء عادةً»",
        "words": [
         "When",
         "people",
         "are",
         "pleased,",
         "they",
         "usually",
         "look",
         "happy."
        ]
       }
      ]
     },
     {
      "title": "If + present simple, will + V1",
      "titleAr": "الشرط الممكن (If)",
      "explain": "نستعمل <b>If + المضارع البسيط</b> في الشرط و<b>will + V1</b> في النتيجة للحديث عن <b>أمر ممكن في المستقبل</b> (If I do that, I will lose my best friend). ويمكن عكس الترتيب (You will feel terrible if something bad happens).",
      "form": "If + S + V1 / V(s), S + will + V1    ·    S + will + V1 + if + S + V1",
      "examples": [
       {
        "en": "**If** I do that, I **will lose** my best friend.",
        "ar": "شرط ممكن"
       },
       {
        "en": "**If** he is a real friend, he **will understand**.",
        "ar": "شرط ممكن"
       },
       {
        "en": "You **will feel** terrible **if** something bad happens.",
        "ar": "عكس الترتيب"
       },
       {
        "en": "**If** it is windy tomorrow, I **will fly** my kite.",
        "ar": "مستقبل"
       }
      ],
      "questions": [
       {
        "q": "If he is a real friend, he ___ understand.",
        "o": [
         "will",
         "would",
         "is"
        ],
        "a": 0
       },
       {
        "q": "If I do that, I ___ my best friend.",
        "o": [
         "will lose",
         "lose",
         "would lose"
        ],
        "a": 0
       },
       {
        "q": "You will feel terrible ___ something bad happens.",
        "o": [
         "when are",
         "will",
         "if"
        ],
        "a": 2
       },
       {
        "q": "If it ___ tomorrow, we will stay at home.",
        "o": [
         "will rain",
         "rains",
         "rained"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "If it snows tomorrow, we ___ build a snowman. (will)",
        "a": [
         "will",
         "'ll"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «إذا فعلتُ ذلك فسأخسر صديقي»",
        "words": [
         "If",
         "I",
         "do",
         "that,",
         "I",
         "will",
         "lose",
         "my",
         "friend."
        ]
       }
      ]
     },
     {
      "title": "Adjectives, adverbs and What about …?",
      "titleAr": "الصفات والظروف واقتراح What about",
      "explain": "<b>الصفة</b> تصف الاسم (a <b>clear</b> answer)، و<b>الظرف</b> الذي ينتهي بـ <b>-ly</b> يصف الفعل (explain <b>clearly</b>): dangerous → dangerously، recent → recently، immediate → immediately، clear → clearly، complete → completely. ونقترح بـ <b>What about + V-ing?</b>",
      "form": "adjective + noun    ·    verb + adverb (-ly)    ·    What about + V-ing?",
      "examples": [
       {
        "en": "Othman has a **beautiful** voice.",
        "ar": "صفة"
       },
       {
        "en": "Othman sings **beautifully**.",
        "ar": "ظرف"
       },
       {
        "en": "This letter asks for an **immediate** answer.",
        "ar": "صفة"
       },
       {
        "en": "You'd better write back **immediately**.",
        "ar": "ظرف"
       },
       {
        "en": "**What about building** a snowman?",
        "ar": "اقتراح"
       }
      ],
      "questions": [
       {
        "q": "Please explain again more ___.",
        "o": [
         "clear",
         "more clear",
         "clearly"
        ],
        "a": 2
       },
       {
        "q": "Khalid always drives ___.",
        "o": [
         "dangerous",
         "dangerously",
         "danger"
        ],
        "a": 1
       },
       {
        "q": "I understood ___, and I wasn't angry.",
        "o": [
         "complete",
         "completes",
         "completely"
        ],
        "a": 2
       },
       {
        "q": "This letter asks for an ___ answer.",
        "o": [
         "immediate",
         "immediately",
         "immediacy"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "Fairuz always sings ___. (beautiful)",
        "a": [
         "beautifully"
        ]
       },
       {
        "q": "It's snowing! ___ building a snowman?",
        "o": [
         "What",
         "How about to",
         "What about"
        ],
        "a": 2
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"scared\" means:",
      "o": [
       "سعيد",
       "خائف",
       "غاضب"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "q": "\"secret\" means:",
      "o": [
       "سرّ",
       "موقف",
       "خطر"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Tina's younger brother fell from a tree.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "trust",
        "يثق بـ"
       ],
       [
        "support",
        "يدعم"
       ],
       [
        "embarrassed",
        "محرَج"
       ],
       [
        "immediately",
        "فوراً"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "When people are surprised, they may say ___.",
      "o": [
       "'Goodbye'",
       "'Really?'",
       "'Thank you'"
      ],
      "a": 1,
      "lv": "medium"
     },
     {
      "q": "If it ___ tomorrow, I will fly my kite.",
      "o": [
       "will be windy",
       "was windy",
       "is windy"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "Be careful! You're driving too ___. (fast)",
      "a": [
       "fast"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "If I do that, I will lose my best friend.",
       "If I will do that, I lose my best friend.",
       "If I do that, I lose will my best friend."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "When",
       "people",
       "are",
       "friends,",
       "they",
       "don't",
       "have",
       "to",
       "hide",
       "their",
       "feelings."
      ],
      "lv": "hard"
     },
     {
      "q": "Why does Tina say sorry to Nadia?",
      "o": [
       "She lost Nadia's book",
       "She was horrible to her when upset",
       "She was late"
      ],
      "a": 1,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "7": {
  "title": "أشخاص مختلفون وملابس مختلفة",
  "titleEn": "Different people, different clothes",
  "lessons": [
   {
    "id": "7-1",
    "title": "Different people, different clothes",
    "titleAr": "أشخاص مختلفون وملابس مختلفة",
    "vocab": [
     {
      "en": "assistant",
      "ar": "مساعد / بائع",
      "em": "🧑‍💼",
      "ex": "Let's ask the assistant. Excuse me.",
      "exAr": "لنسأل البائع. لو سمحت."
     },
     {
      "en": "centimetre",
      "ar": "سنتيمتر",
      "em": "📏",
      "ex": "I'm 165 centimetres, and he's almost as tall as me already.",
      "exAr": "طولي 165 سنتيمتراً وهو شبه بطولي الآن."
     },
     {
      "en": "crazy about",
      "ar": "مولع بـ",
      "em": "🤩",
      "ex": "Ahmad is crazy about basketball, isn't he?",
      "exAr": "أحمد مولع بكرة السلّة، أليس كذلك؟"
     },
     {
      "en": "dollar",
      "ar": "دولار",
      "em": "💵",
      "ex": "They're ninety-nine dollars ninety-nine.",
      "exAr": "سعرها 99.99 دولاراً."
     },
     {
      "en": "grade",
      "ar": "صفّ دراسي",
      "em": "🏫",
      "ex": "Everyone says he's the best player in Grade 6.",
      "exAr": "يقول الجميع إنّه أفضل لاعب في الصفّ السادس."
     },
     {
      "en": "just",
      "ar": "تماماً",
      "em": "🎯",
      "ex": "Ah, yes, these are just right.",
      "exAr": "آه نعم، هذه مناسبة تماماً."
     },
     {
      "en": "smart",
      "ar": "أنيق",
      "em": "👔",
      "ex": "These red ones look smart.",
      "exAr": "هذه الحمراء تبدو أنيقة."
     },
     {
      "en": "size",
      "ar": "مقاس",
      "em": "📐",
      "ex": "They're only size 32 and Ahmad is almost a 36.",
      "exAr": "مقاسها 32 فقط وأحمد تقريباً 36."
     },
     {
      "en": "coat",
      "ar": "معطف",
      "em": "🧥",
      "ex": "I hate wearing lots of things, so I never wear a coat.",
      "exAr": "أكره ارتداء أشياء كثيرة لذا لا أرتدي معطفاً أبداً."
     },
     {
      "en": "comfortably",
      "ar": "براحة",
      "em": "🛋️",
      "ex": "I can't work comfortably in these heavy boots.",
      "exAr": "لا أستطيع العمل براحة بهذه الأحذية الثقيلة."
     },
     {
      "en": "during",
      "ar": "خلال",
      "em": "⏳",
      "ex": "We wear safety clothes during work.",
      "exAr": "نرتدي ملابس الأمان خلال العمل."
     },
     {
      "en": "gloves",
      "ar": "قفّازات",
      "em": "🧤",
      "ex": "Workers wear gloves to keep their hands safe.",
      "exAr": "يرتدي العمّال القفّازات لحماية أيديهم."
     },
     {
      "en": "hard hat",
      "ar": "خوذة صلبة",
      "em": "⛑️",
      "ex": "A hard hat keeps the head safe.",
      "exAr": "الخوذة الصلبة تحمي الرأس."
     },
     {
      "en": "safety",
      "ar": "أمان / سلامة",
      "em": "🦺",
      "ex": "It's more important to be safe than comfortable.",
      "exAr": "السلامة أهمّ من الراحة."
     },
     {
      "en": "thick",
      "ar": "سميك",
      "em": "🧣",
      "ex": "Ahmed is dressing in his nice thick green jacket.",
      "exAr": "أحمد يرتدي سترته الخضراء السميكة الجميلة."
     },
     {
      "en": "uniform",
      "ar": "زيّ موحّد",
      "em": "👮",
      "ex": "Policemen should always look smart in their uniforms.",
      "exAr": "على رجال الشرطة أن يبدوا دائماً أنيقين في زيّهم الموحّد."
     }
    ],
    "reading": {
     "title": "Buying trainers",
     "paras": [
      {
       "en": "Mrs Haifawi is looking for a gift for Ahmad, Omar's younger brother. Mrs Haifawi: Omar, what would Ahmad like? Omar: A T-shirt perhaps. Mrs Haifawi: No, let's find something better than that. Something more exciting. Adnan: Ahmad is crazy about basketball, isn't he? Omar: Yes, everyone says he's the best player in Grade 6. Yasmeen: So what about some trainers?",
       "ar": "تبحث السيدة هيفاوي عن هديّة لأحمد أخي عمر الأصغر. السيدة هيفاوي: يا عمر، ماذا يحبّ أحمد؟ عمر: قميصاً ربّما. السيدة هيفاوي: لا، لنجد شيئاً أفضل من ذلك، شيئاً أكثر إثارة. عدنان: أحمد مولع بكرة السلّة، أليس كذلك؟ عمر: نعم، يقول الجميع إنّه أفضل لاعب في الصفّ السادس. ياسمين: ما رأيكم بحذاء رياضي إذن؟"
      },
      {
       "en": "Omar: He'd love that! He's growing fast, and his old ones are getting small. Mrs Haifawi: Let's go into this sports shop. Adnan: Look, here are the trainers. Yasmeen: These red ones look smart. Mrs Haifawi: But they don't seem as strong as these green ones.",
       "ar": "عمر: سيحبّ ذلك! إنّه ينمو بسرعة وحذاؤه القديم يضيق عليه. السيدة هيفاوي: لندخل هذا المتجر الرياضي. عدنان: انظروا، هنا الأحذية الرياضية. ياسمين: هذه الحمراء تبدو أنيقة. السيدة هيفاوي: لكنّها لا تبدو قويّة مثل هذه الخضراء."
      },
      {
       "en": "Omar: Yes, they're great, but they're only size 32 and Ahmad is almost a 36. Mrs Haifawi: Are his feet really as big as that? He's going to be very tall! Omar: You're right. I'm 165 centimetres, and he's almost as tall as me already.",
       "ar": "عمر: نعم، إنّها رائعة لكنّ مقاسها 32 فقط وأحمد تقريباً 36. السيدة هيفاوي: هل قدماه كبيرتان إلى هذا الحدّ فعلاً؟ سيكون طويلاً جدّاً! عمر: معك حقّ، طولي 165 سنتيمتراً وهو شبه بطولي الآن."
      },
      {
       "en": "Mrs Haifawi: Let's ask the assistant … Excuse me. Assistant: How can I help you? Mrs Haifawi: These are nice, but we need them in a larger size. Size 36. Assistant: Here you are. Omar: Ah, yes, these are just right. Mrs Haifawi: Good. How much are they, please? Assistant: They're ninety-nine dollars ninety-nine. Mrs Haifawi: Good. We'll take them.",
       "ar": "السيدة هيفاوي: لنسأل البائع… لو سمحت. البائع: كيف أساعدكم؟ السيدة هيفاوي: هذه جميلة لكنّنا نريدها بمقاس أكبر، مقاس 36. البائع: تفضّلوا. عمر: آه نعم، هذه مناسبة تماماً. السيدة هيفاوي: جيّد، بكم هي من فضلك؟ البائع: سعرها 99.99 دولاراً. السيدة هيفاوي: جيّد، سنأخذها."
      }
     ],
     "questions": [
      {
       "q": "What do they want to buy for Ahmad?",
       "o": [
        "Trainers",
        "A T-shirt",
        "A basketball"
       ],
       "a": 0
      },
      {
       "q": "What is Ahmad crazy about?",
       "o": [
        "Football",
        "Basketball",
        "Swimming"
       ],
       "a": 1
      },
      {
       "tf": false,
       "q": "The red trainers seem as strong as the green ones.",
       "why": "Mrs Haifawi says they don't seem as strong as the green ones."
      },
      {
       "q": "What size does Ahmad need?",
       "o": [
        "Size 36",
        "Size 32",
        "Size 44"
       ],
       "a": 0
      },
      {
       "q": "How much are the trainers?",
       "o": [
        "19.99 dollars",
        "99.99 dollars",
        "9.99 dollars"
       ],
       "a": 1
      }
     ]
    },
    "rules": [
     {
      "title": "Comparatives and superlatives",
      "titleAr": "المقارنة والتفضيل",
      "explain": "<b>المقارنة</b> بين شيئين: صفة قصيرة + <b>er than</b> (cheaper than) وصفة طويلة <b>more … than</b> (more expensive than). و<b>التفضيل</b> بين ثلاثة أو أكثر: <b>the …est</b> (the cheapest) أو <b>the most …</b> (the most expensive). وغير المنتظم: good → better → best، bad → worse → worst.",
      "form": "short adj + er + than · the + adj + est    ·    more + long adj + than · the most + long adj",
      "examples": [
       {
        "en": "The red ones are **more expensive than** the white ones.",
        "ar": "مقارنة"
       },
       {
        "en": "They are **cheaper than** the green ones.",
        "ar": "مقارنة"
       },
       {
        "en": "The white trainers are **the cheapest** of all.",
        "ar": "تفضيل"
       },
       {
        "en": "The green ones are **the most expensive** of them all.",
        "ar": "تفضيل"
       },
       {
        "en": "good → **better** → **best** · bad → **worse** → **worst**",
        "ar": "شاذّ"
       }
      ],
      "questions": [
       {
        "q": "The red ones are ___ the white ones. (expensive)",
        "o": [
         "expensiver than",
         "more expensive than",
         "most expensive than"
        ],
        "a": 1
       },
       {
        "q": "The white trainers are ___ of all the trainers. (cheap)",
        "o": [
         "cheaper",
         "the cheapest",
         "more cheap"
        ],
        "a": 1
       },
       {
        "q": "These green ones seem ___ than them. (good)",
        "o": [
         "gooder",
         "better",
         "best"
        ],
        "a": 1
       },
       {
        "q": "Ahmed is ___ student in the class. (good)",
        "o": [
         "the best",
         "the better",
         "the goodest"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "My school building is ___ than yours. (old)",
        "a": [
         "older"
        ]
       },
       {
        "type": "type",
        "q": "Wow, $200! It is ___ bag I have ever seen. (expensive)",
        "a": [
         "the most expensive"
        ]
       }
      ]
     },
     {
      "title": "as … as and not as … as",
      "titleAr": "المساواة: as … as",
      "explain": "نستعمل <b>as + صفة + as</b> لنقول إنّ شيئين <b>متساويان</b> (He is almost as tall as me)، و<b>not as + صفة + as</b> لنقول إنّ الأوّل <b>أقلّ</b> من الثاني (The red trainers do not seem as good as these green ones).",
      "form": "S + be + as + adj + as    ·    S + be + not as + adj + as",
      "examples": [
       {
        "en": "He is almost **as tall as** me.",
        "ar": "متساويان"
       },
       {
        "en": "Are his feet really **as big as** that?",
        "ar": "متساويان"
       },
       {
        "en": "The red trainers do **not** seem **as good as** the green ones.",
        "ar": "أقلّ"
       },
       {
        "en": "Ameera is **not as good** at English **as** Maha.",
        "ar": "أقلّ"
       }
      ],
      "questions": [
       {
        "q": "The red trainers and the green ones are smart. → The red trainers are ___ the green ones.",
        "o": [
         "smarter as",
         "as smart as",
         "as smart than"
        ],
        "a": 1
       },
       {
        "q": "Ahmad is taller than Omar. → Omar is ___ Ahmad.",
        "o": [
         "as tall as",
         "taller as",
         "not as tall as"
        ],
        "a": 2
       },
       {
        "q": "English is easy. Arabic is easy, too. → English is ___ Arabic.",
        "o": [
         "as easy as",
         "easy than",
         "more easy as"
        ],
        "a": 0
       },
       {
        "q": "Sami is smarter than Omar. → Omar is ___ Sami.",
        "o": [
         "not as smart as",
         "as smart as",
         "smarter than"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "He is almost as tall ___ me.",
        "a": [
         "as"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «هو شبه بطولي»",
        "words": [
         "He",
         "is",
         "almost",
         "as",
         "tall",
         "as",
         "me."
        ]
       }
      ]
     },
     {
      "title": "Adverbs from adjectives and adjective order",
      "titleAr": "من الصفة إلى الظرف وترتيب الصفات",
      "explain": "نكوّن الظرف عادةً بإضافة <b>ly</b> (proud → proudly)، وإذا انتهت الصفة بـ <b>y</b> نبدّلها <b>ily</b> (tidy → tidily)، وبـ <b>ble</b> نبدّلها <b>bly</b> (comfortable → comfortably)، وبعضها شاذّ: good → <b>well</b>، hard → <b>hard</b>، fast → <b>fast</b>، bad → <b>badly</b>. وعند وصف اسم بأكثر من صفة نبدأ بالرأي ثمّ الحجم/الكثافة ثمّ اللون (a nice thick green jacket).",
      "form": "adj + ly · y → ily · ble → bly · good → well    ·    رأي + حجم + لون + اسم",
      "examples": [
       {
        "en": "proud → **proudly**",
        "ar": "منتظم"
       },
       {
        "en": "tidy → **tidily**",
        "ar": "y → ily"
       },
       {
        "en": "comfortable → **comfortably**",
        "ar": "ble → bly"
       },
       {
        "en": "good → **well** · hard → **hard** · fast → **fast**",
        "ar": "شاذّ"
       },
       {
        "en": "a **nice thick green** jacket",
        "ar": "ترتيب الصفات"
       }
      ],
      "questions": [
       {
        "q": "I can't work ___ in these heavy boots.",
        "o": [
         "comfortably",
         "comfortable",
         "comfort"
        ],
        "a": 0
       },
       {
        "q": "Khalid paints very ___ and he's good at drawing, too.",
        "o": [
         "well",
         "good",
         "goodly"
        ],
        "a": 0
       },
       {
        "q": "After school, our teacher always puts everything away ___.",
        "o": [
         "tidy",
         "tidily",
         "tidyly"
        ],
        "a": 1
       },
       {
        "q": "I have a terrible backache and my shoulder hurts ___ too.",
        "o": [
         "bad",
         "badly",
         "badder"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "If we don't go ___, we'll miss the bus. (fast)",
        "a": [
         "fast"
        ]
       },
       {
        "q": "Ahmed is dressing in his (green – nice – thick) jacket → his ___ jacket.",
        "o": [
         "nice thick green",
         "green nice thick",
         "thick green nice"
        ],
        "a": 0
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"size\" means:",
      "o": [
       "سعر",
       "مقاس",
       "لون"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "q": "\"uniform\" means:",
      "o": [
       "قفّازات",
       "زيّ موحّد",
       "معطف"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Ahmad is crazy about basketball.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "gloves",
        "قفّازات"
       ],
       [
        "smart",
        "أنيق"
       ],
       [
        "thick",
        "سميك"
       ],
       [
        "safety",
        "أمان"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "The green jacket is ___ the grey one. (large)",
      "o": [
       "more large than",
       "larger than",
       "the largest"
      ],
      "a": 1,
      "lv": "medium"
     },
     {
      "q": "The opposite of 'cheap' is 'expensive'. The white trainers are the ___ of all.",
      "o": [
       "cheaper",
       "cheapest",
       "more cheap"
      ],
      "a": 1,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "Safety is more important than comfort: it's more important to be safe than ___. (comfortable)",
      "a": [
       "comfortable"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "Omar is not as tall as Ahmad.",
       "Omar is not as tall than Ahmad.",
       "Omar is not so taller as Ahmad."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "These",
       "red",
       "ones",
       "look",
       "smart."
      ],
      "lv": "hard"
     },
     {
      "q": "Why can't they buy the first green trainers?",
      "o": [
       "They are too cheap",
       "They are only size 32",
       "They are red"
      ],
      "a": 1,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "8": {
  "title": "عالم الطعام",
  "titleEn": "The world of food",
  "lessons": [
   {
    "id": "8-1",
    "title": "The world of food",
    "titleAr": "عالم الطعام",
    "vocab": [
     {
      "en": "can",
      "ar": "علبة معدنية",
      "em": "🥫",
      "ex": "So please get a large can – two litres.",
      "exAr": "لذا أحضر علبة كبيرة سعتها لتران."
     },
     {
      "en": "carton",
      "ar": "علبة كرتون",
      "em": "🧃",
      "ex": "So get a large carton.",
      "exAr": "إذن أحضر علبة كرتون كبيرة."
     },
     {
      "en": "each",
      "ar": "لكلّ واحد",
      "em": "☝️",
      "ex": "Buy yourselves an ice cream each.",
      "exAr": "اشتروا لأنفسكم بوظة لكلّ واحد."
     },
     {
      "en": "ground meat",
      "ar": "لحم مفروم",
      "em": "🥩",
      "ex": "We don't have any ground meat.",
      "exAr": "ليس لدينا لحم مفروم."
     },
     {
      "en": "jar",
      "ar": "برطمان",
      "em": "🫙",
      "ex": "Get a small jar of olives.",
      "exAr": "أحضر برطماناً صغيراً من الزيتون."
     },
     {
      "en": "list",
      "ar": "قائمة",
      "em": "📝",
      "ex": "Fine. I'll make a list.",
      "exAr": "حسناً، سأكتب قائمة."
     },
     {
      "en": "litre",
      "ar": "لتر",
      "em": "🧴",
      "ex": "Please get a large can – two litres.",
      "exAr": "أحضر علبة كبيرة، لتران."
     },
     {
      "en": "regular",
      "ar": "عاديّ",
      "em": "📦",
      "ex": "No, just the regular size, please.",
      "exAr": "لا، الحجم العادي فقط من فضلك."
     },
     {
      "en": "tomato paste",
      "ar": "معجون الطماطم",
      "em": "🍅",
      "ex": "Is there any tomato paste?",
      "exAr": "هل يوجد معجون طماطم؟"
     },
     {
      "en": "tub",
      "ar": "علبة بلاستيكية كبيرة",
      "em": "🍨",
      "ex": "Ice cream … one regular tub.",
      "exAr": "بوظة... علبة واحدة عادية."
     },
     {
      "en": "olive oil",
      "ar": "زيت الزيتون",
      "em": "🫒",
      "ex": "There isn't much olive oil.",
      "exAr": "لا يوجد الكثير من زيت الزيتون."
     },
     {
      "en": "ice cream",
      "ar": "بوظة / آيس كريم",
      "em": "🍦",
      "ex": "Let's get some ice cream for everyone.",
      "exAr": "لنشترِ بعض البوظة للجميع."
     },
     {
      "en": "wheat",
      "ar": "قمح",
      "em": "🌾",
      "ex": "People use wheat to make bread.",
      "exAr": "يستعمل الناس القمح لصنع الخبز."
     },
     {
      "en": "spaghetti",
      "ar": "سباغيتي",
      "em": "🍝",
      "ex": "We use wheat to make spaghetti.",
      "exAr": "نستعمل القمح لصنع السباغيتي."
     },
     {
      "en": "climate",
      "ar": "مناخ",
      "em": "🌤️",
      "ex": "The climate there is hot and dry.",
      "exAr": "المناخ هناك حارّ وجافّ."
     },
     {
      "en": "olive tree",
      "ar": "شجرة زيتون",
      "em": "🌳",
      "ex": "On our farm we grow thousands of olive trees.",
      "exAr": "نزرع في مزرعتنا آلاف أشجار الزيتون."
     }
    ],
    "reading": {
     "title": "Shopping for kebabs",
     "paras": [
      {
       "en": "Mrs Haifawi: Could you do some shopping for me? Adnan: Fine. I'll make a list. Mrs Haifawi: Right. I want to make some kebabs, but we don't have any ground meat. Yasmeen: How much should we get? Mrs Haifawi: A kilo, please. Adnan: Ground meat … one kilo.",
       "ar": "السيدة هيفاوي: هل يمكنكم القيام ببعض التسوّق من أجلي؟ عدنان: حسناً، سأكتب قائمة. السيدة هيفاوي: جيّد، أريد أن أصنع بعض الكباب لكنّه ليس لدينا لحم مفروم. ياسمين: كم يجب أن نشتري؟ السيدة هيفاوي: كيلو واحداً من فضلك. عدنان: لحم مفروم... كيلو واحد."
      },
      {
       "en": "Yasmeen: There aren't any tomatoes either. How many should we get? Mrs Haifawi: About two kilos. Yasmeen: And is there any tomato paste? Mrs Haifawi: No, there isn't. So get a large carton. Adnan: Tomatoes … two kilos … Tomato paste … a large carton.",
       "ar": "ياسمين: وليس هناك طماطم أيضاً، كم يجب أن نشتري؟ السيدة هيفاوي: حوالي كيلوين. ياسمين: وهل يوجد معجون طماطم؟ السيدة هيفاوي: لا، لا يوجد، فأحضروا علبة كرتون كبيرة. عدنان: طماطم... كيلوان... معجون طماطم... علبة كبيرة."
      },
      {
       "en": "Yasmeen: Are there any olives? Mrs Haifawi: There are some, but not many. Yasmeen: How many would you like? Mrs Haifawi: Get a small jar. Yasmeen: And there isn't much olive oil. Mrs Haifawi: So please get a large can – two litres. Adnan: Olives … one small jar … Olive oil … one two-litre can.",
       "ar": "ياسمين: هل يوجد زيتون؟ السيدة هيفاوي: يوجد بعضه لكن ليس كثيراً. ياسمين: كم تريدين؟ السيدة هيفاوي: أحضري برطماناً صغيراً. ياسمين: وليس هناك الكثير من زيت الزيتون. السيدة هيفاوي: إذن أحضروا علبة كبيرة سعتها لتران. عدنان: زيتون... برطمان صغير... زيت زيتون... علبة بلترين."
      },
      {
       "en": "Mrs Haifawi: And let's get some ice cream for everyone. Yasmeen: Oh, good! But how much? A large tub? Mrs Haifawi: No, just the regular size, please. Adnan: Right. Ice cream … one regular tub. Mrs Haifawi: Oh, and one more thing … Buy yourselves an ice cream each. Yasmeen: Thanks!",
       "ar": "السيدة هيفاوي: ولنشترِ بعض البوظة للجميع. ياسمين: رائع! لكن كم؟ علبة كبيرة؟ السيدة هيفاوي: لا، الحجم العادي فقط من فضلك. عدنان: حسناً، بوظة... علبة عادية واحدة. السيدة هيفاوي: وشيء آخر... اشتروا لأنفسكم بوظة لكلّ واحد. ياسمين: شكراً!"
      }
     ],
     "questions": [
      {
       "q": "What does Mrs Haifawi want to make?",
       "o": [
        "A cake",
        "Spaghetti",
        "Kebabs"
       ],
       "a": 2
      },
      {
       "q": "How much ground meat do they need?",
       "o": [
        "A kilo",
        "Two kilos",
        "Half a kilo"
       ],
       "a": 0
      },
      {
       "tf": true,
       "q": "There isn't any tomato paste at home."
      },
      {
       "q": "What size of olive oil should they buy?",
       "o": [
        "A small jar",
        "A large two-litre can",
        "A carton"
       ],
       "a": 1
      },
      {
       "q": "What does Mrs Haifawi say about the ice cream at the end?",
       "o": [
        "Don't buy any",
        "Buy yourselves an ice cream each",
        "Buy a large tub"
       ],
       "a": 1
      }
     ]
    },
    "rules": [
     {
      "title": "Countable and uncountable nouns · some and any",
      "titleAr": "الأسماء المعدودة وغير المعدودة · some وany",
      "explain": "<b>المعدود</b> يمكن عدّه ويأخذ جمعاً (apple → apples, kebab → kebabs)، و<b>غير المعدود</b> لا يُعدّ ولا يُجمع (apple juice, olive oil, milk, bread). ونستعمل <b>some</b> في الإثبات (There are some olives) و<b>any</b> في النفي والسؤال (There aren't any tomatoes / Are there any olives?). ونعدّ غير المعدود بالوحدات: a carton of, a jar of, a can of, a litre of.",
      "form": "معدود: a/an + اسم · اسم + s    ·    غير معدود: بلا a ولا جمع    ·    some (+) / any (− ؟)",
      "examples": [
       {
        "en": "There **are some** olives, but not many.",
        "ar": "معدود + إثبات"
       },
       {
        "en": "There **aren't any** tomatoes.",
        "ar": "معدود + نفي"
       },
       {
        "en": "**Is there any** tomato paste?",
        "ar": "غير معدود + سؤال"
       },
       {
        "en": "There **is some** tomato paste.",
        "ar": "غير معدود + إثبات"
       },
       {
        "en": "**a carton of** tomato paste · **a jar of** olives · **a can of** olive oil",
        "ar": "وحدات"
       }
      ],
      "questions": [
       {
        "q": "There aren't ___ tomatoes either.",
        "o": [
         "any",
         "some",
         "a"
        ],
        "a": 0
       },
       {
        "q": "There are ___ olives, but not many.",
        "o": [
         "some",
         "any",
         "an"
        ],
        "a": 0
       },
       {
        "q": "Is there ___ tomato paste?",
        "o": [
         "some",
         "any",
         "a"
        ],
        "a": 1
       },
       {
        "q": "Which noun is uncountable?",
        "o": [
         "olive",
         "kebab",
         "olive oil"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "Are there ___ cakes left? (some / any)",
        "a": [
         "any"
        ]
       },
       {
        "type": "type",
        "q": "There are ___ kebabs on the table. (some / any)",
        "a": [
         "some"
        ]
       }
      ]
     },
     {
      "title": "How much and How many",
      "titleAr": "How much وHow many",
      "explain": "نسأل بـ <b>How many</b> عن المعدود (How many olives are there?)، وبـ <b>How much</b> عن غير المعدود (How much olive oil is there?). وفي الإجابة ننفي بـ <b>not many</b> مع المعدود و<b>not much</b> مع غير المعدود (There aren't many. / There isn't much.).",
      "form": "How many + معدود جمع    ·    How much + غير معدود",
      "examples": [
       {
        "en": "**How many** olives are there?",
        "ar": "معدود"
       },
       {
        "en": "There **aren't many**.",
        "ar": "نفي المعدود"
       },
       {
        "en": "**How much** olive oil is there?",
        "ar": "غير معدود"
       },
       {
        "en": "There **isn't much**.",
        "ar": "نفي غير المعدود"
       },
       {
        "en": "**How many** tomatoes should we get?",
        "ar": "معدود"
       }
      ],
      "questions": [
       {
        "q": "___ tomatoes should we get? — About two kilos.",
        "o": [
         "How much",
         "How",
         "How many"
        ],
        "a": 2
       },
       {
        "q": "___ ground meat should we get? — A kilo, please.",
        "o": [
         "How much",
         "How many",
         "How long"
        ],
        "a": 0
       },
       {
        "q": "There isn't ___ olive oil.",
        "o": [
         "many",
         "much",
         "a"
        ],
        "a": 1
       },
       {
        "q": "There aren't ___ olives.",
        "o": [
         "many",
         "much",
         "a"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "___ money have you spent on your party? (much / many)",
        "a": [
         "How much"
        ]
       },
       {
        "type": "type",
        "q": "___ cans of cola do we still need? (much / many)",
        "a": [
         "How many"
        ]
       }
      ]
     },
     {
      "title": "Articles: a / an / the / no article",
      "titleAr": "أدوات التعريف والتنكير a / an / the",
      "explain": "نستعمل <b>a / an</b> مع المفرد المعدود غير المحدّد (a desert country)، و<b>the</b> مع الشيء المحدّد المعروف (The climate there is hot and dry / the Dead Sea / the Olive Tree)، و<b>بلا أداة (×)</b> مع أسماء أغلب الدول والمدن (Kuwait, Palestine) ومع غير المعدود عموماً (We make bread at home / People use wheat to make bread).",
      "form": "a / an + مفرد غير محدّد    ·    the + شيء محدّد    ·    × + دولة / غير معدود عامّ",
      "examples": [
       {
        "en": "**Kuwait** is **a** desert country.",
        "ar": "× + a"
       },
       {
        "en": "**The** climate there is hot and dry.",
        "ar": "the"
       },
       {
        "en": "People use wheat to make **×** bread.",
        "ar": "بلا أداة"
       },
       {
        "en": "Perhaps you had some bread.",
        "ar": "some"
       },
       {
        "en": "**The** Dead Sea is very salty.",
        "ar": "the"
       }
      ],
      "questions": [
       {
        "q": "Kuwait is ___ desert country.",
        "o": [
         "an",
         "a",
         "the"
        ],
        "a": 1
       },
       {
        "q": "___ climate there is hot and dry.",
        "o": [
         "The",
         "A",
         "×"
        ],
        "a": 0
       },
       {
        "q": "We make ___ bread at home.",
        "o": [
         "the",
         "×",
         "an"
        ],
        "a": 1
       },
       {
        "q": "I visited ___ Jerusalem last week.",
        "o": [
         "the",
         "an",
         "×"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "___ Dead Sea is very salty. (a / the)",
        "a": [
         "The"
        ]
       },
       {
        "q": "Pizza and spaghetti are ___ Italian food.",
        "o": [
         "the",
         "×",
         "an"
        ],
        "a": 1
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"carton\" means:",
      "o": [
       "برطمان",
       "علبة كرتون",
       "لتر"
      ],
      "a": 1,
      "lv": "easy"
     },
     {
      "q": "\"ground meat\" means:",
      "o": [
       "لحم مفروم",
       "لحم مشوي",
       "دجاج"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Wheat is used to make bread.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "jar",
        "برطمان"
       ],
       [
        "list",
        "قائمة"
       ],
       [
        "regular",
        "عاديّ"
       ],
       [
        "climate",
        "مناخ"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "tomato + paste =",
      "o": [
       "tomato paste",
       "paste tomato",
       "tomato pasta"
      ],
      "a": 0,
      "lv": "medium"
     },
     {
      "q": "How ___ olives are there?",
      "o": [
       "much",
       "long",
       "many"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "There isn't ___ olive oil. (much / many)",
      "a": [
       "much"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "Are there any tomatoes?",
       "Is there any tomatoes?",
       "Are there some tomatoes?"
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "We",
       "use",
       "ground",
       "meat",
       "to",
       "make",
       "burgers."
      ],
      "lv": "hard"
     },
     {
      "q": "Why does Mrs Haifawi ask for a large carton?",
      "o": [
       "She likes cartons",
       "There are many tomatoes",
       "There isn't any tomato paste"
      ],
      "a": 2,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "9": {
  "title": "العودة إلى الوطن فلسطين",
  "titleEn": "Back home in Palestine",
  "lessons": [
   {
    "id": "9-1",
    "title": "Back home in Palestine",
    "titleAr": "العودة إلى الوطن فلسطين",
    "vocab": [
     {
      "en": "backpack",
      "ar": "حقيبة ظهر",
      "em": "🎒",
      "ex": "And who's the boy with a backpack?",
      "exAr": "ومن هو الولد صاحب حقيبة الظهر؟"
     },
     {
      "en": "beard",
      "ar": "لحية",
      "em": "🧔",
      "ex": "And the brother with glasses and a beard?",
      "exAr": "وماذا عن الأخ صاحب النظّارات واللحية؟"
     },
     {
      "en": "centre",
      "ar": "وسط",
      "em": "📍",
      "ex": "She's the one in the centre.",
      "exAr": "هي التي في الوسط."
     },
     {
      "en": "curly",
      "ar": "مجعّد",
      "em": "🌀",
      "ex": "Sameer with short, curly hair.",
      "exAr": "سمير ذو الشعر القصير المجعّد."
     },
     {
      "en": "glasses",
      "ar": "نظّارات",
      "em": "👓",
      "ex": "The brother with glasses and a beard looks quite young.",
      "exAr": "الأخ صاحب النظّارات واللحية يبدو شابّاً."
     },
     {
      "en": "moustache",
      "ar": "شارب",
      "em": "👨",
      "ex": "You mean the one with a moustache.",
      "exAr": "تقصد صاحب الشارب."
     },
     {
      "en": "side",
      "ar": "جانب",
      "em": "↔️",
      "ex": "It's a picnic with my mum's side of the family.",
      "exAr": "إنّها رحلة مع عائلة أمّي."
     },
     {
      "en": "straight",
      "ar": "مستقيم / أملس",
      "em": "〰️",
      "ex": "Ali has long, straight hair.",
      "exAr": "عليّ ذو شعر طويل أملس."
     },
     {
      "en": "wife",
      "ar": "زوجة",
      "em": "👰",
      "ex": "His wife, Aunt Rania, is next to him.",
      "exAr": "زوجته العمّة رانيا بجانبه."
     },
     {
      "en": "picnic",
      "ar": "نزهة (طعام في الخلاء)",
      "em": "🧺",
      "ex": "It's a picnic near Jericho.",
      "exAr": "إنّها نزهة قرب أريحا."
     },
     {
      "en": "tourist",
      "ar": "سائح",
      "em": "🧳",
      "ex": "Thousands of tourists visit Bethlehem every year.",
      "exAr": "يزور آلاف السيّاح بيت لحم كلّ عام."
     },
     {
      "en": "farmer",
      "ar": "مزارع",
      "em": "👨‍🌾",
      "ex": "Palestinian farmers face many difficulties.",
      "exAr": "يواجه المزارعون الفلسطينيون صعوبات كثيرة."
     },
     {
      "en": "traveller",
      "ar": "مسافر",
      "em": "🚶",
      "ex": "Travellers were often away from home for months.",
      "exAr": "كان المسافرون يغيبون عن بيوتهم شهوراً."
     },
     {
      "en": "scientist",
      "ar": "عالِم",
      "em": "🔬",
      "ex": "Fareeda wants to train to be a scientist.",
      "exAr": "تريد فريدة أن تتدرّب لتصبح عالِمة."
     },
     {
      "en": "valley",
      "ar": "وادٍ",
      "em": "🏞️",
      "ex": "Jericho is a small city which stands in a deep valley.",
      "exAr": "أريحا مدينة صغيرة تقع في وادٍ عميق."
     },
     {
      "en": "pronoun",
      "ar": "ضمير",
      "em": "🔤",
      "ex": "We often use pronouns instead of nouns.",
      "exAr": "نستعمل الضمائر غالباً بدل الأسماء."
     }
    ],
    "reading": {
     "title": "A family photo",
     "paras": [
      {
       "en": "Omar: Look. My brother Ahmad has emailed me a family photo. Yasmeen: Oh, let's have a look! Omar: It's a picnic with my mum's side of the family. They're at a beautiful place near Jericho. Adnan: Ah! She's the one in the centre, and your dad's standing behind her. Omar: That's right.",
       "ar": "عمر: انظروا، أرسل لي أخي أحمد صورة عائلية بالبريد الإلكتروني. ياسمين: آه، لنلقِ نظرة! عمر: إنّها نزهة مع عائلة أمّي في مكان جميل قرب أريحا. عدنان: آه! هي التي في الوسط وأبوك واقف خلفها. عمر: صحيح."
      },
      {
       "en": "Yasmeen: Are those her brothers next to her? They look like brothers and sister. Omar: Yes, the one on the left is her older brother, our Uncle Nazmi. Adnan: You mean the one with a moustache. Omar: Right, and his wife, Aunt Rania, is the one next to him in a red jacket.",
       "ar": "ياسمين: هل هؤلاء إخوتها بجانبها؟ يبدون كإخوة وأخت. عمر: نعم، الذي على اليسار أخوها الأكبر خالنا نظمي. عدنان: تقصد صاحب الشارب. عمر: صحيح، وزوجته الخالة رانيا هي التي بجانبه بسترة حمراء."
      },
      {
       "en": "Yasmeen: And the brother with glasses and a beard? He looks quite young. Omar: Yes, Uncle Ameer is the youngest of the three. And his wife, Aunt Deema, is the one in a green dress. They haven't got any children yet. Adnan: So are the children all Uncle Nazmi's? Omar: That's right. Ali, Hazem and Sameer.",
       "ar": "ياسمين: وماذا عن الأخ صاحب النظّارات واللحية؟ يبدو شابّاً. عمر: نعم، الخال أمير أصغر الثلاثة، وزوجته الخالة ديمة هي التي بفستان أخضر. ليس لديهما أولاد بعد. عدنان: إذن الأولاد كلّهم أولاد الخال نظمي؟ عمر: صحيح، عليّ وحازم وسمير."
      },
      {
       "en": "Yasmeen: Who's the one with long, straight hair? Omar: That's Ali, and he's the oldest. He's finished school. Adnan: And who's the boy with a backpack? Omar: That's Hazem. Then there's Sameer with short, curly hair. Yasmeen: But where's your brother Ahmad with the big feet? Omar: He's the one behind the camera!",
       "ar": "ياسمين: من هو صاحب الشعر الطويل الأملس؟ عمر: هذا عليّ وهو الأكبر وقد أنهى المدرسة. عدنان: ومن هو الولد بحقيبة الظهر؟ عمر: هذا حازم، ثمّ سمير ذو الشعر القصير المجعّد. ياسمين: لكن أين أخوك أحمد صاحب القدمين الكبيرتين؟ عمر: هو الذي وراء الكاميرا!"
      }
     ],
     "questions": [
      {
       "q": "Where is the family picnic?",
       "o": [
        "In Jerusalem",
        "Near Jericho",
        "In America"
       ],
       "a": 1
      },
      {
       "q": "Who is the oldest of the three children?",
       "o": [
        "Hazem",
        "Ali",
        "Sameer"
       ],
       "a": 1
      },
      {
       "q": "Who has a moustache?",
       "o": [
        "Uncle Nazmi",
        "Uncle Ameer",
        "Hazem"
       ],
       "a": 0
      },
      {
       "tf": true,
       "q": "Uncle Ameer and Aunt Deema haven't got any children yet."
      },
      {
       "q": "Why isn't Ahmad in the photo?",
       "o": [
        "He is behind the camera",
        "He is at school",
        "He is ill"
       ],
       "a": 0
      }
     ]
    },
    "rules": [
     {
      "title": "who, which and that",
      "titleAr": "أدوات الوصل who وwhich وthat",
      "explain": "نربط جملتين بجملة وصل تعطي <b>معلومة مهمّة</b> عن الاسم: <b>who</b> للأشخاص (people who work in tourism)، و<b>which</b> للأشياء (a small city which stands in a deep valley)، و<b>that</b> للأشخاص والأشياء معاً (a salt lake that is 400 metres below sea level). وفي كلّ جزء فعل، فكلاهما <b>جملة</b> (clause).",
      "form": "noun (person) + who + verb    ·    noun (thing) + which + verb    ·    noun + that + verb",
      "examples": [
       {
        "en": "Jericho is a small city **which** stands in a deep valley.",
        "ar": "شيء + which"
       },
       {
        "en": "This is a famous salt lake **that** is 400 metres below sea level.",
        "ar": "شيء + that"
       },
       {
        "en": "There are a lot of people **who** work in tourism in Jericho.",
        "ar": "شخص + who"
       },
       {
        "en": "These were also the people **that** built the first city.",
        "ar": "شخص + that"
       }
      ],
      "questions": [
       {
        "q": "Tina was the girl ___ dressed the smartest in the school.",
        "o": [
         "which",
         "who",
         "what"
        ],
        "a": 1
       },
       {
        "q": "The Dead Sea is the lowest point ___ has the saltiest water.",
        "o": [
         "which",
         "who",
         "whose"
        ],
        "a": 0
       },
       {
        "q": "I am thinking of a person ___ could go shopping with me.",
        "o": [
         "who",
         "which",
         "whom"
        ],
        "a": 0
       },
       {
        "q": "Dad is thinking of something ___ keeps us away from mobile phones.",
        "o": [
         "who",
         "whose",
         "that"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "Mr Jamal is the teacher ___ taught me English. (who / which)",
        "a": [
         "who"
        ]
       },
       {
        "type": "type",
        "q": "The question ___ I failed to answer was very difficult. (which / who)",
        "a": [
         "which",
         "that"
        ]
       }
      ]
     },
     {
      "title": "Pronouns: subject, object, possessive, one / ones",
      "titleAr": "الضمائر وone وones",
      "explain": "نستعمل الضمائر بدل الأسماء حين يعرف المتكلّم والمستمع عمّن نتحدّث: <b>الفاعل</b> (She's talking), <b>المفعول</b> (You met her), <b>الملكية</b> (It's hers). و<b>one / ones</b> تحلّ محلّ اسم من مجموعة، وغالباً مع the (the one on the left, the ones on the right).",
      "form": "she / he / they · her / him / them · hers / his / theirs    ·    the one (مفرد) / the ones (جمع)",
      "examples": [
       {
        "en": "There's Fareeda. **She**'s talking to Sameera.",
        "ar": "ضمير فاعل"
       },
       {
        "en": "There's Fareeda. You met **her** at the party.",
        "ar": "ضمير مفعول"
       },
       {
        "en": "I know it's **hers** because it's red.",
        "ar": "ضمير ملكية"
       },
       {
        "en": "**The one** on the left is Mona.",
        "ar": "one"
       },
       {
        "en": "**The ones** on the right are Fatima and Rania.",
        "ar": "ones"
       }
      ],
      "questions": [
       {
        "q": "Look at the red car! ___ is mine.",
        "o": [
         "It",
         "Its",
         "Them"
        ],
        "a": 0
       },
       {
        "q": "Omar and Ali are friends, ___ are always together.",
        "o": [
         "them",
         "their",
         "they"
        ],
        "a": 2
       },
       {
        "q": "Leila is a good girl at school. ___ reads many books every year.",
        "o": [
         "Her",
         "She",
         "Hers"
        ],
        "a": 1
       },
       {
        "q": "The books on the shelf are mine. ___ are very expensive.",
        "o": [
         "Them",
         "It",
         "They"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "There's a green apple and a red apple. Have the red ___. (one)",
        "a": [
         "one"
        ]
       },
       {
        "q": "Do you see the group of girls? The ___ on the right are Fatima and Rania.",
        "o": [
         "one",
         "them",
         "ones"
        ],
        "a": 2
       }
      ]
     },
     {
      "title": "Noun (person), noun (thing) and noun (activity)",
      "titleAr": "اسم الشخص واسم الشيء واسم النشاط",
      "explain": "نشتقّ <b>اسم الشخص</b> من اسم الشيء أو الفعل بإضافة <b>-ist / -er / -or</b>: science → scientist، tour → tourist، art → artist، guitar → guitarist، travel → traveller، farm → farmer، camp → camper، work → worker. ونشتقّ <b>اسم النشاط</b> من الفعل بـ <b>-ing</b>: camp → camping، dance → dancing، sing → singing، swim → swimming، teach → teaching، train → training.",
      "form": "thing / verb + ist / er  = شخص    ·    verb + ing  = نشاط",
      "examples": [
       {
        "en": "science → **scientist**",
        "ar": "شخص"
       },
       {
        "en": "tour → **tourist** · art → **artist** · guitar → **guitarist**",
        "ar": "شخص"
       },
       {
        "en": "travel → **traveller** · farm → **farmer** · camp → **camper**",
        "ar": "شخص"
       },
       {
        "en": "camp → **camping** · dance → **dancing** · sing → **singing**",
        "ar": "نشاط"
       },
       {
        "en": "teach → **teaching** · train → **training**",
        "ar": "نشاط"
       }
      ],
      "questions": [
       {
        "q": "Ten thousands of ___ visit Bethlehem every year. (tour)",
        "o": [
         "tourists",
         "tours",
         "touring"
        ],
        "a": 0
       },
       {
        "q": "Palestinian ___ face many difficulties. (farm)",
        "o": [
         "farms",
         "farmers",
         "farmist"
        ],
        "a": 1
       },
       {
        "q": "My little brother dreams to be a ___ in the future. (guitar)",
        "o": [
         "guitarer",
         "guitarist",
         "guitaring"
        ],
        "a": 1
       },
       {
        "q": "Let's go ___ in the mountains next Friday. (camp)",
        "o": [
         "camper",
         "camping",
         "camps"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "science → ___ (person)",
        "a": [
         "scientist"
        ]
       },
       {
        "type": "type",
        "q": "teach → ___ (activity)",
        "a": [
         "teaching"
        ]
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"beard\" means:",
      "o": [
       "لحية",
       "شارب",
       "نظّارات"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "q": "\"valley\" means:",
      "o": [
       "وادٍ",
       "جبل",
       "نهر"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Ali is the oldest of Uncle Nazmi's children.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "backpack",
        "حقيبة ظهر"
       ],
       [
        "curly",
        "مجعّد"
       ],
       [
        "moustache",
        "شارب"
       ],
       [
        "wife",
        "زوجة"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "science → ___",
      "o": [
       "sciencer",
       "scienting",
       "scientist"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "q": "The Dead Sea is the lowest point ___ has the saltiest water.",
      "o": [
       "which",
       "who",
       "whose"
      ],
      "a": 0,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "Samia is very good at languages. ___ speaks French fluently. (She / Her)",
      "a": [
       "She"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "Who's the boy with a backpack?",
       "Who's the boy in a backpack on?",
       "Who the boy with backpack?"
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "Jericho",
       "is",
       "a",
       "small",
       "city",
       "which",
       "stands",
       "in",
       "a",
       "deep",
       "valley."
      ],
      "lv": "hard"
     },
     {
      "q": "Why does Omar say 'He's the one behind the camera!'?",
      "o": [
       "Ahmad took the photo",
       "Ahmad is hiding",
       "Ahmad is ill"
      ],
      "a": 0,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "10": {
  "title": "عرس فلسطيني",
  "titleEn": "A Palestinian wedding",
  "lessons": [
   {
    "id": "10-1",
    "title": "A Palestinian wedding",
    "titleAr": "عرس فلسطيني",
    "vocab": [
     {
      "en": "all right",
      "ar": "حسناً / موافق",
      "em": "👍",
      "ex": "Well, all right.",
      "exAr": "حسناً، موافق."
     },
     {
      "en": "bride",
      "ar": "عروس",
      "em": "👰",
      "ex": "The bride's following in a car.",
      "exAr": "العروس تتبعه في سيّارة."
     },
     {
      "en": "congratulations",
      "ar": "تهانينا",
      "em": "🎊",
      "ex": "He's riding round town to receive everyone's congratulations.",
      "exAr": "وهو يتجوّل في البلدة ليتلقّى تهاني الجميع."
     },
     {
      "en": "DVD",
      "ar": "قرص فيديو",
      "em": "📀",
      "ex": "Who'd like to watch our cousin's wedding DVD?",
      "exAr": "من يودّ مشاهدة قرص عرس ابن عمّنا؟"
     },
     {
      "en": "follow",
      "ar": "يتبع",
      "em": "🚗",
      "ex": "The bride's following in a car.",
      "exAr": "العروس تتبعه في سيّارة."
     },
     {
      "en": "full",
      "ar": "شبعان / ممتلئ",
      "em": "😌",
      "ex": "No, thanks, Mrs Kamal. I'm full!",
      "exAr": "لا، شكراً يا سيدة كمال، أنا شبعان!"
     },
     {
      "en": "groom",
      "ar": "عريس",
      "em": "🤵",
      "ex": "He's the groom, and he's riding round town.",
      "exAr": "هو العريس وهو يتجوّل في البلدة."
     },
     {
      "en": "guest",
      "ar": "ضيف",
      "em": "🧑‍🤝‍🧑",
      "ex": "There are hundreds of guests!",
      "exAr": "هناك مئات الضيوف!"
     },
     {
      "en": "celebrate",
      "ar": "يحتفل",
      "em": "🎉",
      "ex": "When do Muslims celebrate Eid al-Fitr?",
      "exAr": "متى يحتفل المسلمون بعيد الفطر؟"
     },
     {
      "en": "custom",
      "ar": "عادة / تقليد",
      "em": "📿",
      "ex": "A wedding custom is a traditional way of doing things.",
      "exAr": "عادة العرس طريقة تقليدية لفعل الأشياء."
     },
     {
      "en": "dough",
      "ar": "عجين",
      "em": "🥖",
      "ex": "A baker starts with a piece of soft, heavy dough.",
      "exAr": "يبدأ الخبّاز بقطعة عجين ناعمة ثقيلة."
     },
     {
      "en": "hold",
      "ar": "يرفع / يمسك",
      "em": "✋",
      "ex": "If I hold it up to the light, you can see it more clearly.",
      "exAr": "إذا رفعتُه نحو الضوء ترونه بوضوح أكبر."
     },
     {
      "en": "purpose",
      "ar": "هدف / غرض",
      "em": "🎯",
      "ex": "What is the purpose of the zaffa?",
      "exAr": "ما الغرض من الزفّة؟"
     },
     {
      "en": "ring",
      "ar": "خاتم",
      "em": "💍",
      "ex": "Please show us your beautiful wedding ring.",
      "exAr": "أرِنا من فضلك خاتم زواجك الجميل."
     },
     {
      "en": "Zaffa",
      "ar": "الزفّة",
      "em": "🐎",
      "ex": "We call this Zaffa.",
      "exAr": "نسمّي هذه الزفّة."
     },
     {
      "en": "Sahra",
      "ar": "سهرة قبل يوم العرس",
      "em": "🎶",
      "ex": "It's Sahra. It's a party before the wedding day.",
      "exAr": "هذه السهرة، حفلة قبل يوم العرس."
     }
    ],
    "reading": {
     "title": "A Palestinian wedding",
     "paras": [
      {
       "en": "Mike and Tina are visiting the Kamals. Mrs Kamal: Would you like another cake? Mike: Yes, please. I'd love another one! Tina: No, thanks, Mrs Kamal. I'm full! Nadia: Who'd like to watch our cousin's wedding DVD? It's just arrived. Tina: I'd love to. Mike: Hm. I'd prefer to play computer games. Sami: Come on, Mike! Say yes! Mike: Well, all right.",
       "ar": "يزور مايك وتينا عائلة كمال. السيدة كمال: هل تودّان قطعة كعك أخرى؟ مايك: نعم من فضلك، أحبّ واحدة أخرى! تينا: لا شكراً يا سيدة كمال، أنا شبعانة! نادية: من يودّ مشاهدة قرص عرس ابن عمّنا؟ لقد وصل للتوّ. تينا: أحبّ ذلك. مايك: همم، أفضّل لعب ألعاب الحاسوب. سامي: هيّا يا مايك، قل نعم! مايك: حسناً، موافق."
      },
      {
       "en": "Tina: Is this the wedding party? Mrs Kamal: No, it's Sahra. It's a party before the wedding day. The women are singing, and the men are dancing the traditional dabka. Tina: Everyone looks very happy!",
       "ar": "تينا: هل هذه حفلة العرس؟ السيدة كمال: لا، هذه السهرة وهي حفلة قبل يوم العرس، النساء يغنّين والرجال يرقصون الدبكة التقليدية. تينا: يبدو الجميع سعداء جدّاً!"
      },
      {
       "en": "Mike: What's happening now? Sami: We call this Zaffa. That's our cousin on the horse. He's the groom, and he's riding round town to receive everyone's congratulations. Nadia: The bride's following in a car. People are giving her their best wishes. Tina: She looks beautiful!",
       "ar": "مايك: ماذا يحدث الآن؟ سامي: نسمّي هذه الزفّة. هذا ابن عمّنا على الحصان وهو العريس، يتجوّل في البلدة ليتلقّى تهاني الجميع. نادية: والعروس تتبعه في سيّارة والناس يقدّمون لها أطيب أمنياتهم. تينا: تبدو جميلة!"
      },
      {
       "en": "Mrs Kamal: This is the wedding party. Look, the bride and groom are sitting in the centre. Tina: There are hundreds of guests! Sami: Yes, everyone goes to a Palestinian wedding! We love them! Nadia: It's so sad we couldn't go to this one. Sami: And that's the end. So would you like to play computer games now, Mike? Mike: Thanks, but I'd prefer to watch the DVD again. It was fantastic!",
       "ar": "السيدة كمال: وهذه حفلة العرس، انظروا العروسان جالسان في الوسط. تينا: هناك مئات الضيوف! سامي: نعم، الجميع يحضر العرس الفلسطيني! نحبّها كثيراً! نادية: يؤسفني أنّنا لم نستطع حضور هذا العرس. سامي: وهذه النهاية، هل تودّ لعب ألعاب الحاسوب الآن يا مايك؟ مايك: شكراً لكنّني أفضّل مشاهدة القرص مرّة أخرى، كان رائعاً!"
      }
     ],
     "questions": [
      {
       "q": "What are Mike and Tina going to watch?",
       "o": [
        "A wedding DVD",
        "A football match",
        "A cartoon"
       ],
       "a": 0
      },
      {
       "q": "What is Sahra?",
       "o": [
        "The wedding cake",
        "A kind of dress",
        "A party before the wedding day"
       ],
       "a": 2
      },
      {
       "q": "What do we call the groom's ride round the town?",
       "o": [
        "Sahra",
        "Dabka",
        "Zaffa"
       ],
       "a": 2
      },
      {
       "tf": false,
       "q": "Mike wants to play computer games at the end.",
       "why": "He prefers to watch the DVD again."
      },
      {
       "q": "How many guests are at the wedding party?",
       "o": [
        "Hundreds",
        "Ten",
        "Twenty"
       ],
       "a": 0
      }
     ]
    },
    "rules": [
     {
      "title": "would like, would love, would prefer",
      "titleAr": "العروض والردّ عليها",
      "explain": "نقدّم عرضاً بـ <b>Would you like …?</b> (Would you like a cake?) ونقبل بـ <b>Yes, please. I'd love …</b> أو <b>I'd love to + V1</b>، ونفضّل شيئاً آخر بـ <b>I'd prefer …</b> / <b>I'd prefer to + V1</b> (I'd prefer to play computer games). وبعدها فعل بصيغته المجرّدة مع to.",
      "form": "Would you like + اسم / to + V1?    ·    I'd love + اسم / to + V1    ·    I'd prefer + اسم / to + V1",
      "examples": [
       {
        "en": "**Would you like** another cake?",
        "ar": "عرض"
       },
       {
        "en": "I**'d love** another one!",
        "ar": "قبول"
       },
       {
        "en": "I**'d love to** watch the DVD.",
        "ar": "قبول"
       },
       {
        "en": "Thank you, but I**'d prefer to** play computer games.",
        "ar": "تفضيل"
       },
       {
        "en": "What about you, Mike? **Would** you **like** a sandwich or **prefer** a cake?",
        "ar": "سؤال بديل"
       }
      ],
      "questions": [
       {
        "q": "___ you like another cake?",
        "o": [
         "Do",
         "Are",
         "Would"
        ],
        "a": 2
       },
       {
        "q": "Yes, please. I ___ love another one!",
        "o": [
         "am",
         "do",
         "would"
        ],
        "a": 2
       },
       {
        "q": "Thank you, but I'd ___ to watch the DVD again.",
        "o": [
         "prefer",
         "would",
         "like prefer"
        ],
        "a": 0
       },
       {
        "q": "I'd love ___ the DVD.",
        "o": [
         "to watch",
         "watching",
         "watch"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "Would you ___ a cup of coffee, Fatema? (like)",
        "a": [
         "like"
        ]
       },
       {
        "type": "type",
        "q": "No, thanks. I'd ___ a glass of tea. (prefer)",
        "a": [
         "prefer"
        ]
       }
      ]
     },
     {
      "title": "Plural nouns: -s, -es, -ies and irregular",
      "titleAr": "جمع الأسماء",
      "explain": "القاعدة: نضيف <b>-s</b> (way → ways, toy → toys, boy → boys)، و<b>-es</b> بعد s / x / ch / sh (box → boxes, dress → dresses, glass → glasses, sandwich → sandwiches)، وتصبح <b>y ← ies</b> بعد حرف ساكن (country → countries, baby → babies, family → families, party → parties). والشاذّ: life → lives, wife → wives, knife → knives, half → halves, shelf → shelves, wolf → wolves, man → men, woman → women, child → children.",
      "form": "+ s  ·  + es  ·  consonant + y → ies  ·  f / fe → ves  ·  man → men",
      "examples": [
       {
        "en": "way → **ways** · day → **days** · boy → **boys**",
        "ar": "+ s"
       },
       {
        "en": "box → **boxes** · glass → **glasses** · sandwich → **sandwiches**",
        "ar": "+ es"
       },
       {
        "en": "country → **countries** · family → **families** · party → **parties**",
        "ar": "y → ies"
       },
       {
        "en": "life → **lives** · wife → **wives** · half → **halves** · knife → **knives**",
        "ar": "f / fe → ves"
       },
       {
        "en": "man → **men** · woman → **women** · child → **children**",
        "ar": "شاذّ"
       }
      ],
      "questions": [
       {
        "q": "Different types of ___ live in the jungle. (monkey)",
        "o": [
         "monkies",
         "monkeyes",
         "monkeys"
        ],
        "a": 2
       },
       {
        "q": "Mum cut the big melon into two ___. (half)",
        "o": [
         "halfs",
         "halfes",
         "halves"
        ],
        "a": 2
       },
       {
        "q": "I keep my old ___ in three big ___. (dress, box)",
        "o": [
         "dresss / boxs",
         "dresses / boxes",
         "dresses / boxs"
        ],
        "a": 1
       },
       {
        "q": "Several ___ and ___ work in this office. (man, woman)",
        "o": [
         "men / women",
         "mans / womans",
         "men / womens"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "family → ___",
        "a": [
         "families"
        ]
       },
       {
        "type": "type",
        "q": "wife → ___",
        "a": [
         "wives"
        ]
       }
      ]
     },
     {
      "title": "Punctuation: comma, full stop and apostrophe",
      "titleAr": "علامات الترقيم: الفاصلة والنقطة والفاصلة العليا",
      "explain": "نستعمل <b>الفاصلة (,)</b> في القوائم وبين صفتين وبعد أسماء المنادى والكلمات مثل Yes / Oh (I can see Ahmad, Ali and Fuad). ونستعمل <b>النقطة (.)</b> في نهاية الجملة الخبرية. ونستعمل <b>الفاصلة العليا (')</b> في الاختصارات (isn't, I've, it's, let's) وللملكية (Ahmed's family).",
      "form": "list: A, B and C    ·    full stop at the end    ·    apostrophe: isn't / I've / Ahmed's",
      "examples": [
       {
        "en": "I can see Ahmad**,** Ali and Fuad**.**",
        "ar": "فاصلة ونقطة"
       },
       {
        "en": "Fuad is the one with long**,** straight hair.",
        "ar": "فاصلة بين صفتين"
       },
       {
        "en": "There **isn't** any oil in the jar.",
        "ar": "اختصار"
       },
       {
        "en": "**Ahmed's** family is lovely**,** **isn't** it?",
        "ar": "ملكية واختصار"
       },
       {
        "en": "**Let's** go shopping, Dana.",
        "ar": "اختصار"
       }
      ],
      "questions": [
       {
        "q": "Choose the correct sentence.",
        "o": [
         "I can see Ahmad, Ali and Fuad.",
         "I can see Ahmad Ali, and Fuad",
         "I can see, Ahmad Ali and Fuad."
        ],
        "a": 0
       },
       {
        "q": "Choose the correct sentence.",
        "o": [
         "There isn't any oil in the jar.",
         "There isnt any oil in the jar.",
         "There is'nt any oil in the jar."
        ],
        "a": 0
       },
       {
        "q": "Choose the correct sentence.",
        "o": [
         "Ahmed's family is lovely, isn't it?",
         "Ahmeds family is lovely isnt it",
         "Ahmed's family is lovely isn't, it?"
        ],
        "a": 0
       },
       {
        "q": "Choose the correct sentence.",
        "o": [
         "Let's go shopping, Dana. I've got enough money.",
         "Lets go shopping Dana. Ive got enough money.",
         "Let's go shopping Dana, I've got, enough money."
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "Add the apostrophe: This book was great but its very expensive → This book was great but ___ very expensive.",
        "a": [
         "it's"
        ]
       },
       {
        "type": "type",
        "q": "Add the apostrophe: Ive got enough money → ___ got enough money.",
        "a": [
         "I've"
        ]
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"bride\" means:",
      "o": [
       "عروس",
       "عريس",
       "ضيف"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "q": "\"groom\" means:",
      "o": [
       "عروس",
       "ضيفة",
       "عريس"
      ],
      "a": 2,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Sahra is a party before the wedding day.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "guest",
        "ضيف"
       ],
       [
        "ring",
        "خاتم"
       ],
       [
        "celebrate",
        "يحتفل"
       ],
       [
        "custom",
        "عادة"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "Would you ___ a cup of coffee?",
      "o": [
       "to like",
       "like",
       "liking"
      ],
      "a": 1,
      "lv": "medium"
     },
     {
      "q": "one wife → two ___",
      "o": [
       "wifes",
       "wiveses",
       "wives"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "one child → two ___",
      "a": [
       "children"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "I'd prefer to watch the DVD.",
       "I'd prefer watch the DVD.",
       "I'd prefering to watch the DVD."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "The",
       "bride's",
       "following",
       "in",
       "a",
       "car."
      ],
      "lv": "hard"
     },
     {
      "q": "Why does Mike say 'Well, all right'?",
      "o": [
       "He agrees to watch the DVD",
       "He refuses",
       "He is angry"
      ],
      "a": 0,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "11": {
  "title": "نكتشف الأسماء",
  "titleEn": "Finding out about names",
  "lessons": [
   {
    "id": "11-1",
    "title": "Finding out about names",
    "titleAr": "نكتشف الأسماء",
    "vocab": [
     {
      "en": "check",
      "ar": "يتحقّق من",
      "em": "✅",
      "ex": "I need to check Yasmeen's details.",
      "exAr": "أحتاج إلى التحقّق من بيانات ياسمين."
     },
     {
      "en": "counsellor",
      "ar": "مرشد / مستشار",
      "em": "🧑‍🏫",
      "ex": "I'm Rose Hill, your daughter's new counsellor.",
      "exAr": "أنا روز هيل، المرشدة الجديدة لابنتك."
     },
     {
      "en": "date of birth",
      "ar": "تاريخ الميلاد",
      "em": "📅",
      "ex": "What is your date of birth?",
      "exAr": "ما تاريخ ميلادك؟"
     },
     {
      "en": "given name",
      "ar": "الاسم الأول",
      "em": "🏷️",
      "ex": "Could you spell your given name for me, please?",
      "exAr": "هل يمكنك تهجئة اسمك الأول من فضلك؟"
     },
     {
      "en": "personal details",
      "ar": "بيانات شخصية",
      "em": "🪪",
      "ex": "Some of our students' personal details are wrong.",
      "exAr": "بعض البيانات الشخصية لطلّابنا خاطئة."
     },
     {
      "en": "student",
      "ar": "طالب",
      "em": "🎓",
      "ex": "study → student.",
      "exAr": "study ← student (طالب)."
     },
     {
      "en": "wrong",
      "ar": "خاطئ",
      "em": "❌",
      "ex": "Some of our students' personal details are wrong.",
      "exAr": "بعض البيانات الشخصية لطلّابنا خاطئة."
     },
     {
      "en": "zero",
      "ar": "صفر",
      "em": "0️⃣",
      "ex": "My phone number starts with zero.",
      "exAr": "رقم هاتفي يبدأ بصفر."
     },
     {
      "en": "family name",
      "ar": "اسم العائلة",
      "em": "👪",
      "ex": "May I check your family name?",
      "exAr": "هل يمكنني التحقّق من اسم عائلتك؟"
     },
     {
      "en": "spell",
      "ar": "يهجّئ",
      "em": "🔡",
      "ex": "Could you spell your given name for me, please?",
      "exAr": "هل يمكنك تهجئة اسمك الأول من فضلك؟"
     },
     {
      "en": "ancestor",
      "ar": "جدّ أعلى / سلف",
      "em": "🌳",
      "ex": "How did our ancestors get their family names?",
      "exAr": "كيف حصل أجدادنا على أسماء عائلاتهم؟"
     },
     {
      "en": "ask",
      "ar": "يسأل",
      "em": "🙋",
      "ex": "He asks what his name means.",
      "exAr": "هو يسأل عمّا يعنيه اسمه."
     },
     {
      "en": "report",
      "ar": "ينقل كلام الآخرين",
      "em": "📣",
      "ex": "When we report, we often use a reporting verb like 'she says'.",
      "exAr": "حين ننقل الكلام غالباً نستعمل فعلاً ناقلاً مثل «she says»."
     },
     {
      "en": "formal letter",
      "ar": "رسالة رسمية",
      "em": "✉️",
      "ex": "Dr Cook's note is the start of a formal letter.",
      "exAr": "ملاحظة الدكتور كوك هي بداية رسالة رسمية."
     },
     {
      "en": "hold",
      "ar": "ينتظر على الخطّ",
      "em": "📞",
      "ex": "Could you hold, please?",
      "exAr": "هل يمكنك الانتظار على الخطّ من فضلك؟"
     },
     {
      "en": "mean",
      "ar": "يعني",
      "em": "💭",
      "ex": "What does it mean?",
      "exAr": "ماذا يعني؟"
     }
    ],
    "reading": {
     "title": "Did you know?",
     "paras": [
      {
       "en": "Alan Robson: Hello. I'm Alan Robson, and you're listening to Did you know? Today, we're discussing people's names. And to answer your questions we have Dr Julia Romano. Romano: Hello, everyone. Robson: Let's begin with a call from Emma Baker. Emma: How did our ancestors get their family names? Romano: Well, they were often place names. For example, mine shows that my ancestors were once from Rome.",
       "ar": "آلان روبسون: مرحباً، أنا آلان روبسون وأنتم تستمعون إلى برنامج «هل تعلم؟». نناقش اليوم أسماء الناس، وللإجابة عن أسئلتكم معنا الدكتورة جوليا رومانو. رومانو: مرحباً بالجميع. روبسون: لنبدأ بمكالمة من إيما بيكر. إيما: كيف حصل أجدادنا على أسماء عائلاتهم؟ رومانو: غالباً كانت أسماء أماكن، فمثلاً اسمي يدلّ على أنّ أجدادي كانوا من روما."
      },
      {
       "en": "Robson: Here's an email from Adnan Haifawi. He asks what his name means. Romano: It's like mine. It means his family were from Haifa long ago. Robson: Now we have a text message from Dan Schumacher. He asks where his family were from. Romano: From Germany. Dan's name is German for shoe and maker, so they made people's shoes. There are other 'work' names too, like Farmer and Fisher.",
       "ar": "روبسون: هذه رسالة إلكترونية من عدنان هيفاوي يسأل عمّا يعنيه اسمه. رومانو: مثل اسمي، يعني أنّ عائلته كانت من حيفا منذ زمن بعيد. روبسون: والآن رسالة نصّية من دان شوماخر يسأل من أين كانت عائلته. رومانو: من ألمانيا، فاسم دان بالألمانية يعني «حذاء» و«صانع» فكانوا يصنعون أحذية الناس. وهناك أسماء «مهن» أخرى مثل Farmer وFisher."
      },
      {
       "en": "Robson: This email is from Tina Johnson. She wants to know when people started using family names. Romano: Long ago. Perhaps 700 years ago, people started calling an ancestor of hers John's son – and that became Johnson.",
       "ar": "روبسون: هذه رسالة من تينا جونسون تريد أن تعرف متى بدأ الناس باستعمال أسماء العائلات. رومانو: منذ زمن بعيد، ربّما قبل 700 عام بدأ الناس يسمّون أحد أجدادها «ابن جون»، فصار الاسم Johnson."
      },
      {
       "en": "Robson: And finally, we have Lucy Paris on the line. Lucy: How do parents choose given names? Romano: In different ways. For example, parents often hope their children will be like their names. Yours means 'light', Lucy, so perhaps your parents hope you'll bring light into people's lives and make them happy.",
       "ar": "روبسون: وأخيراً معنا لوسي باريس على الخطّ. لوسي: كيف يختار الأهل الأسماء الأولى؟ رومانو: بطرق مختلفة، فمثلاً غالباً يأمل الأهل أن يشبه أبناؤهم أسماءهم. اسمك يعني «نور» يا لوسي، فربّما يأمل والداك أن تدخلي النور إلى حياة الناس وتُسعديهم."
      }
     ],
     "questions": [
      {
       "tf": false,
       "q": "Dr Romano comes from Rome.",
       "why": "Her name shows that her ancestors were once from Rome."
      },
      {
       "q": "What does Adnan Haifawi's name show?",
       "o": [
        "His family made shoes",
        "His family were farmers",
        "His family were from Haifa long ago"
       ],
       "a": 2
      },
      {
       "q": "What does Dan Schumacher's name mean in German?",
       "o": [
        "Farmer",
        "Fisher",
        "Shoe maker"
       ],
       "a": 2
      },
      {
       "q": "When did people perhaps start using family names?",
       "o": [
        "Last year",
        "100 years ago",
        "About 700 years ago"
       ],
       "a": 2
      },
      {
       "q": "What does the name Lucy mean?",
       "o": [
        "Light",
        "Flower",
        "Rose"
       ],
       "a": 0
      }
     ]
    },
    "rules": [
     {
      "title": "Reported statements",
      "titleAr": "نقل الجمل الخبرية",
      "explain": "عند نقل كلام شخص لآخر نستعمل <b>فعلاً ناقلاً</b> مثل <b>says</b> (She says …) غالباً بالمضارع البسيط، ونغيّر الضمائر: <b>I / we ← he / she / they</b> و<b>my ← his / her</b> و<b>you ← I / he / she</b>. وفي الجملة ذات الجزأين لا نكرّر الفعل الناقل دائماً.",
      "form": "S + says (that) + reported clause (غيّر الضمائر)",
      "examples": [
       {
        "en": "Rose: 'Some of our students' details are wrong.' → She says some of **their** students' details are wrong.",
        "ar": "نقل"
       },
       {
        "en": "Rose: 'I need to check Yasmeen's.' → She says she needs to check Yasmeen's.",
        "ar": "I ← she"
       },
       {
        "en": "Rose: 'I need to check yours.' → She says she needs to check **yours**.",
        "ar": "نقل"
       },
       {
        "en": "Omar: 'I'm trying to finish my work tonight.' → Omar says **he's** trying to finish his work tonight.",
        "ar": "I ← he"
       }
      ],
      "questions": [
       {
        "q": "Rose: 'I need to check your details.' → Rose says she ___ to check my details.",
        "o": [
         "needs",
         "need",
         "needing"
        ],
        "a": 0
       },
       {
        "q": "Sami: 'I'm tired.' → Sami says ___ tired.",
        "o": [
         "he is",
         "I am",
         "you are"
        ],
        "a": 0
       },
       {
        "q": "Mum: 'I'm sorry to call you late.' → Mum says ___ sorry to call me late.",
        "o": [
         "I am",
         "she is",
         "you are"
        ],
        "a": 1
       },
       {
        "q": "'Your phone number is incorrect, Ali.' → The teacher says ___ phone number is incorrect.",
        "o": [
         "his",
         "your",
         "my"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "'I'm Rose Hill and I want to ask you some questions, Amal.' → She says she ___ Rose Hill. (be)",
        "a": [
         "is",
         "'s"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «هي تقول إنّ بعض البيانات خاطئة»",
        "words": [
         "She",
         "says",
         "some",
         "of",
         "the",
         "details",
         "are",
         "wrong."
        ]
       }
      ]
     },
     {
      "title": "Reported questions",
      "titleAr": "نقل الأسئلة",
      "explain": "ننقل السؤال بعد فعل مثل <b>asks / wants to know / needs to check</b> ثمّ <b>أداة السؤال</b> (what / where / when / how) ثمّ <b>ترتيب الجملة الخبرية</b> (فاعل ثمّ فعل) بلا do / does / did ولا علامة استفهام: <b>What does my name mean?</b> ← He asks <b>what his name means</b>. ويتحوّل الزمن: did + V1 ← V2.",
      "form": "asks / wants to know + wh-word + S + V (ترتيب الجملة الخبرية)",
      "examples": [
       {
        "en": "'What does my name mean?' → He asks **what his name means**.",
        "ar": "نقل سؤال"
       },
       {
        "en": "'Where were my family from?' → He asks **where his family were from**.",
        "ar": "نقل سؤال"
       },
       {
        "en": "'When did people start using family names?' → Tina wants to know **when people started using family names**.",
        "ar": "did ← V2"
       },
       {
        "en": "'When will you have time to meet me?' → Rose wants to know **when she will have time to meet her**.",
        "ar": "will"
       }
      ],
      "questions": [
       {
        "q": "'Where does she live?' → He needs to check ___.",
        "o": [
         "where does she live",
         "where she lives",
         "where she live"
        ],
        "a": 1
       },
       {
        "q": "'What's her home telephone number?' → He also wants to know ___.",
        "o": [
         "what is her home telephone number",
         "what her home telephone number",
         "what her home telephone number is"
        ],
        "a": 2
       },
       {
        "q": "'How does Helen spell her family name?' → Dr Cook asks ___.",
        "o": [
         "how does Helen spell her family name",
         "how Helen spell her family name",
         "how Helen spells her family name"
        ],
        "a": 2
       },
       {
        "q": "'When did people start using money?' → The teacher asks ___.",
        "o": [
         "when did people start using money",
         "when people start using money",
         "when people started using money"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "'What does your name mean, Yasmeen?' → Rose asks what her name ___.",
        "a": [
         "means"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات: «هو يسأل عمّا يعنيه اسمه»",
        "words": [
         "He",
         "asks",
         "what",
         "his",
         "name",
         "means."
        ]
       }
      ]
     },
     {
      "title": "A formal letter",
      "titleAr": "الرسالة الرسمية",
      "explain": "الرسالة الرسمية فيها: <b>عنوان المرسِل</b> وتاريخ اليوم وعنوان المرسَل إليه، ثمّ التحيّة <b>Dear Mr and Mrs Jarrett</b>، وسطر الموضوع، ثمّ النصّ، وتنتهي بـ <b>Yours truly</b> والاسم والوظيفة. وتختلف عن رسالة صديق القلم في أنّ البداية والنهاية أكثر رسميّة. ونستعمل في النصّ الأسئلة المنقولة (He wants to know what time they will arrive).",
      "form": "Address · Date · Address · Dear … · Subject · text · Yours truly · name · job",
      "examples": [
       {
        "en": "**Dear** Mr and Mrs Jarrett",
        "ar": "التحيّة"
       },
       {
        "en": "**Allen's start at Fairfax High**",
        "ar": "سطر الموضوع"
       },
       {
        "en": "Dr Cook says he is **pleased that** they can visit the school.",
        "ar": "نقل"
       },
       {
        "en": "He wants to know **what time they will arrive**.",
        "ar": "سؤال منقول"
       },
       {
        "en": "**Yours truly**",
        "ar": "نهاية رسمية"
       }
      ],
      "questions": [
       {
        "q": "Which is the correct start of a formal letter to Mr and Mrs Jarrett?",
        "o": [
         "Hi Jarretts",
         "Hello friends",
         "Dear Mr and Mrs Jarrett"
        ],
        "a": 2
       },
       {
        "q": "Which is a formal ending?",
        "o": [
         "See you!",
         "Bye bye",
         "Yours truly"
        ],
        "a": 2
       },
       {
        "q": "'What time will you arrive?' → He wants to know ___.",
        "o": [
         "what time will they arrive",
         "what time they arrive will",
         "what time they will arrive"
        ],
        "a": 2
       },
       {
        "q": "'How long are you going to stay?' → He wants to know ___.",
        "o": [
         "how long are they going to stay",
         "how long they going to stay",
         "how long they are going to stay"
        ],
        "a": 2
       },
       {
        "type": "type",
        "q": "'Who would you like to meet?' → He wants to know who ___ like to meet. (they)",
        "a": [
         "they would"
        ]
       },
       {
        "q": "The subject line tells the reader ___.",
        "o": [
         "what the letter is about",
         "who the writer is",
         "the date"
        ],
        "a": 0
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"counsellor\" means:",
      "o": [
       "مرشد",
       "مدرّس",
       "مدير"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "q": "\"given name\" means:",
      "o": [
       "الاسم الأول",
       "اسم العائلة",
       "اسم الشارع"
      ],
      "a": 0,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "Yasmeen's name is the name of a flower.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "wrong",
        "خاطئ"
       ],
       [
        "check",
        "يتحقّق"
       ],
       [
        "zero",
        "صفر"
       ],
       [
        "ancestor",
        "جدّ أعلى"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "'I'm working late.' → She says she ___ working late.",
      "o": [
       "am",
       "are",
       "is"
      ],
      "a": 2,
      "lv": "medium"
     },
     {
      "q": "'Where were my family from?' → He asks ___.",
      "o": [
       "where his family were from",
       "where were his family from",
       "where his family was were"
      ],
      "a": 0,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "'What does my name mean?' → He asks what his name ___.",
      "a": [
       "means"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "Rose wants to know when she will have time to meet her.",
       "Rose wants to know when will she have time to meet her.",
       "Rose wants to know when does she have time?"
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "She",
       "wants",
       "to",
       "know",
       "when",
       "people",
       "started",
       "using",
       "family",
       "names."
      ],
      "lv": "hard"
     },
     {
      "q": "Why does Rose Hill call Mr Haifawi?",
      "o": [
       "To check Yasmeen's personal details",
       "To talk about football",
       "To sell something"
      ],
      "a": 0,
      "lv": "hard"
     }
    ]
   }
  ]
 },
 "12": {
  "title": "حين جاء الإسلام إلى إسبانيا",
  "titleEn": "When Islam came to Spain",
  "lessons": [
   {
    "id": "12-1",
    "title": "When Islam came to Spain",
    "titleAr": "حين جاء الإسلام إلى إسبانيا",
    "vocab": [
     {
      "en": "housework",
      "ar": "أعمال المنزل",
      "em": "🧹",
      "ex": "I have to get up early and help do the housework.",
      "exAr": "عليّ أن أستيقظ مبكّراً وأساعد في أعمال المنزل."
     },
     {
      "en": "hurry up",
      "ar": "يسرع",
      "em": "🏃",
      "ex": "I want to hurry up and finish today.",
      "exAr": "أريد أن أسرع وأنهي اليوم."
     },
     {
      "en": "look up",
      "ar": "يبحث عن (في كتاب)",
      "em": "🔍",
      "ex": "I'll look up my History of Islam here.",
      "exAr": "سأبحث في كتابي «تاريخ الإسلام» هنا."
     },
     {
      "en": "Muslim",
      "ar": "مسلم",
      "em": "🕌",
      "ex": "Muslims from North Africa took Spain.",
      "exAr": "فتح مسلمون من شمال أفريقيا إسبانيا."
     },
     {
      "en": "pick up",
      "ar": "يلتقط / يرفع",
      "em": "📲",
      "ex": "He puts down his pen and picks up his phone.",
      "exAr": "يضع قلمه ويلتقط هاتفه."
     },
     {
      "en": "put down",
      "ar": "يضع (من يده)",
      "em": "✏️",
      "ex": "He puts down his pen.",
      "exAr": "يضع قلمه."
     },
     {
      "en": "take over",
      "ar": "يستولي على / يتولّى",
      "em": "🏰",
      "ex": "They took over the country.",
      "exAr": "سيطروا على البلاد."
     },
     {
      "en": "turn off",
      "ar": "يُطفئ",
      "em": "🔌",
      "ex": "You should turn off your computer and stop.",
      "exAr": "عليك أن تُطفئ حاسوبك وتتوقّف."
     },
     {
      "en": "work on",
      "ar": "يعمل على",
      "em": "💻",
      "ex": "What are you working on now?",
      "exAr": "على ماذا تعمل الآن؟"
     },
     {
      "en": "architecture",
      "ar": "هندسة معمارية",
      "em": "🏛️",
      "ex": "Omar likes to design houses, so he plans to study architecture.",
      "exAr": "يحبّ عمر تصميم البيوت فيخطّط لدراسة الهندسة المعمارية."
     },
     {
      "en": "disease",
      "ar": "مرض",
      "em": "🦠",
      "ex": "In the past, diseases killed many people.",
      "exAr": "في الماضي كانت الأمراض تقتل كثيرين."
     },
     {
      "en": "medical",
      "ar": "طبّي",
      "em": "⚕️",
      "ex": "Al-Zahrawi worked out many new medical operations.",
      "exAr": "ابتكر الزهراوي عمليات طبّية جديدة كثيرة."
     },
     {
      "en": "operation",
      "ar": "عملية جراحية",
      "em": "🩺",
      "ex": "Al-Zahrawi worked out many new medical operations.",
      "exAr": "ابتكر الزهراوي عمليات طبّية جديدة كثيرة."
     },
     {
      "en": "capital",
      "ar": "عاصمة",
      "em": "🏙️",
      "ex": "The Muslims needed a capital, and they set it up in Cordoba.",
      "exAr": "احتاج المسلمون إلى عاصمة فأسّسوها في قرطبة."
     },
     {
      "en": "set up",
      "ar": "يؤسّس",
      "em": "🏗️",
      "ex": "They set it up in Cordoba.",
      "exAr": "أسّسوها في قرطبة."
     },
     {
      "en": "work out",
      "ar": "يكتشف / يبتكر",
      "em": "💡",
      "ex": "Al-Zahrawi worked out many new medical operations.",
      "exAr": "ابتكر الزهراوي عمليات طبّية جديدة كثيرة."
     }
    ],
    "reading": {
     "title": "The Muslims in Al-Andalus",
     "paras": [
      {
       "en": "People often say East is East and West is West, and the two can never meet. However, the history of Spain tells us something different. Here, East and West met for almost 800 years. They sometimes fought, but there was real contact between cultures.",
       "ar": "يقول الناس غالباً إنّ الشرق شرق والغرب غرب ولا يلتقيان أبداً، لكنّ تاريخ إسبانيا يخبرنا بغير ذلك. فهنا التقى الشرق والغرب قرابة 800 عام، وقد تقاتلوا أحياناً لكنّ تواصلاً حقيقياً قام بين الثقافات."
      },
      {
       "en": "When the Muslims arrived in 711, they took the country over very quickly. They came with new ideas, and they completely changed the land that they called Al-Andalus. With new crops and better ways of farming, Al-Andalus soon grew rich.",
       "ar": "حين وصل المسلمون عام 711 سيطروا على البلاد بسرعة كبيرة، وجاؤوا بأفكار جديدة وغيّروا الأرض التي سمّوها الأندلس تغييراً كاملاً. وبفضل المحاصيل الجديدة وطرق الزراعة الأفضل أصبحت الأندلس غنيّة سريعاً."
      },
      {
       "en": "The Muslims needed a capital, and they set it up in Cordoba. Here, they built beautiful mosques and palaces, and the city became as important as Baghdad. Al-Andalus became a centre of the Islamic World and the centre of civilisation in Europe.",
       "ar": "احتاج المسلمون إلى عاصمة فأسّسوها في قرطبة، وبنوا فيها مساجد وقصوراً جميلة وصارت المدينة بأهمّية بغداد. وأصبحت الأندلس مركزاً للعالم الإسلامي ومركز الحضارة في أوروبا."
      },
      {
       "en": "Its science, medicine, architecture, arts and crafts became famous. Here, Al-Khatib found out how people pass diseases on. Here, Al-Zahrawi worked out many new medical operations. Students in both East and West studied the work of people like these for centuries, and we still remember them today.",
       "ar": "اشتهر علمها وطبّها وهندستها وفنونها وحرفها. وهنا اكتشف ابن الخطيب كيف ينقل الناس الأمراض لبعضهم، وهنا ابتكر الزهراوي عمليات طبّية جديدة كثيرة. ودرس الطلّاب في الشرق والغرب أعمال أمثالهما قروناً ونحن لا نزال نذكرهم اليوم."
      },
      {
       "en": "Spain is now a busy, modern country. But walk the narrow streets of old Cordoba and visit Granada's amazing Alhambra Palace and gardens, and you will find a different Spain. Here, ancient Al-Andalus still lives.",
       "ar": "إسبانيا اليوم بلد حديث مزدحم، لكن امشِ في شوارع قرطبة القديمة الضيّقة وزر قصر الحمراء المدهش وحدائقه في غرناطة فتجد إسبانيا مختلفة، فهنا لا تزال الأندلس القديمة حيّة."
      }
     ],
     "questions": [
      {
       "tf": true,
       "q": "East and West met in Spain for almost 800 years."
      },
      {
       "q": "When did the Muslims arrive in Spain?",
       "o": [
        "In 711",
        "In 1492",
        "In 622"
       ],
       "a": 0
      },
      {
       "q": "Where did the Muslims set up their capital?",
       "o": [
        "Granada",
        "Cordoba",
        "Baghdad"
       ],
       "a": 1
      },
      {
       "q": "Who found out how people pass diseases on?",
       "o": [
        "Al-Zahrawi",
        "Tariq",
        "Al-Khatib"
       ],
       "a": 2
      },
      {
       "tf": false,
       "q": "The feeling of ancient Al-Andalus has completely gone from modern Spain.",
       "why": "In old Cordoba and Granada's Alhambra, ancient Al-Andalus still lives."
      }
     ]
    },
    "rules": [
     {
      "title": "Phrasal verbs",
      "titleAr": "الأفعال المركّبة",
      "explain": "<b>الفعل المركّب</b> فعل + حرف جرّ أو ظرف يعطيان معنى جديداً: <b>put down</b> (يضع)، <b>pick up</b> (يلتقط)، <b>hurry up</b> (يسرع)، <b>look up</b> (يبحث عن)، <b>take over</b> (يستولي)، <b>turn off</b> (يُطفئ)، <b>work on</b> (يعمل على)، <b>set up</b> (يؤسّس)، <b>work out</b> (يبتكر)، <b>get up</b> (ينهض)، <b>tidy up</b> (يرتّب)، <b>sweep up</b> (يكنس). ويجوز وضع المفعول بين الفعل والحرف (turn it off).",
      "form": "verb + particle (up / down / off / on / over / out)",
      "examples": [
       {
        "en": "He **puts down** his pen and **picks up** his phone.",
        "ar": "وضع والتقط"
       },
       {
        "en": "I want to **hurry up** and finish today.",
        "ar": "يسرع"
       },
       {
        "en": "I'll **look up** my History of Islam here.",
        "ar": "يبحث"
       },
       {
        "en": "You should **turn off** your computer.",
        "ar": "يُطفئ"
       },
       {
        "en": "They **took over** the country.",
        "ar": "استولوا"
       }
      ],
      "questions": [
       {
        "q": "He puts ___ his pen and picks up his phone.",
        "o": [
         "off",
         "down",
         "over"
        ],
        "a": 1
       },
       {
        "q": "You should turn ___ your computer and stop. It's late!",
        "o": [
         "up",
         "over",
         "off"
        ],
        "a": 2
       },
       {
        "q": "Could you help me ___ the year Muslims took over Spain?",
        "o": [
         "look after",
         "look on",
         "look up"
        ],
        "a": 2
       },
       {
        "q": "What are you ___ for your school project?",
        "o": [
         "working on",
         "working off",
         "working in"
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "They set ___ the capital in Cordoba. (up / down)",
        "a": [
         "up"
        ]
       },
       {
        "type": "type",
        "q": "The Muslims took ___ the country very quickly. (over / off)",
        "a": [
         "over"
        ]
       }
      ]
     },
     {
      "title": "Linking words",
      "titleAr": "أدوات الربط",
      "explain": "نربط الأفكار بأدوات ربط: <b>and</b> للإضافة، <b>but / however / although</b> للتضادّ، <b>so / therefore / and so</b> للنتيجة، <b>because</b> للسبب، <b>or</b> للاختيار، <b>in order to</b> للغرض (+V1)، <b>for example</b> للمثال. وبعد <b>Although</b> و<b>Because</b> نضع جملة كاملة.",
      "form": "because + سبب · so + نتيجة · but / however + تضادّ · in order to + V1 · for example",
      "examples": [
       {
        "en": "They knew a lot about farming, **so** they introduced their ideas.",
        "ar": "نتيجة"
       },
       {
        "en": "**Because** Muslim farmers came from dry climates, they knew how to use water well.",
        "ar": "سبب"
       },
       {
        "en": "**For example**, they built channels **in order to** carry river water.",
        "ar": "مثال وغرض"
       },
       {
        "en": "**However**, they were soon growing crops in large quantities.",
        "ar": "تضادّ"
       },
       {
        "en": "They introduced lemons, oranges, dates **and** rice.",
        "ar": "إضافة"
       }
      ],
      "questions": [
       {
        "q": "The team trained very hard, ___ they won the match.",
        "o": [
         "so",
         "or",
         "because"
        ],
        "a": 0
       },
       {
        "q": "___ the team trained very hard, they won the match.",
        "o": [
         "So",
         "Because",
         "Or"
        ],
        "a": 1
       },
       {
        "q": "Would you like the red ___ the green T-shirt?",
        "o": [
         "and",
         "or",
         "so"
        ],
        "a": 1
       },
       {
        "q": "They built channels ___ carry river water to dry land.",
        "o": [
         "because",
         "in order to",
         "however"
        ],
        "a": 1
       },
       {
        "type": "type",
        "q": "The Muslims knew a lot about farming, ___ they introduced their ideas. (so / but)",
        "a": [
         "so"
        ]
       },
       {
        "q": "The Muslims took over Spain in ___ six years.",
        "o": [
         "just",
         "soon",
         "so"
        ],
        "a": 0
       }
      ]
     },
     {
      "title": "Time expressions and topic sentences",
      "titleAr": "عبارات الزمن والجملة الرئيسية",
      "explain": "نرتّب أحداث الفقرة بعبارات زمن: <b>First, Then, Soon, In only three years, Just two years after that, After five more years, Next morning, Finally</b>. وتبدأ الفقرة بـ <b>جملة رئيسية</b> (topic sentence) تلخّص فكرتها (The Muslims took over most of Spain in just six years)، وبقية الجمل تدعمها.",
      "form": "topic sentence + First / Then / Soon / Finally …",
      "examples": [
       {
        "en": "**First**, Tariq Ibn Ziyad sailed over from North Africa with just 7,000 men in 711.",
        "ar": "ترتيب"
       },
       {
        "en": "**Just two years after that**, Musa Ibn Nusayr brought another 18,000.",
        "ar": "بعد زمن"
       },
       {
        "en": "**In only three years**, the Muslims were pushing north.",
        "ar": "مدّة"
       },
       {
        "en": "**Soon**, by 715, most of the south was in Muslim hands.",
        "ar": "بسرعة"
       },
       {
        "en": "**Then** the Muslims set up a capital in 717.",
        "ar": "ثمّ"
       }
      ],
      "questions": [
       {
        "q": "Which is the best topic sentence for the paragraph about Tariq Ibn Ziyad and Musa Ibn Nusayr?",
        "o": [
         "The Muslims remained for 800 years.",
         "The Muslims took over most of Spain in just six years.",
         "How the Muslims chose a capital."
        ],
        "a": 1
       },
       {
        "q": "Tariq Ibn Ziyad sailed over with just 7,000 men in 711. ___, Musa Ibn Nusayr brought 18,000 more.",
        "o": [
         "Just two years after that",
         "Finally",
         "However"
        ],
        "a": 0
       },
       {
        "q": "___ the Muslims were ready to set up a capital city, and in 717 they chose Cordoba.",
        "o": [
         "Because",
         "Or",
         "Then"
        ],
        "a": 2
       },
       {
        "q": "Which topic sentence fits the farming paragraph?",
        "o": [
         "Farmers made some of the most important changes in Al-Andalus.",
         "The capital was Cordoba.",
         "Al-Zahrawi was a doctor."
        ],
        "a": 0
       },
       {
        "type": "type",
        "q": "In only three ___ the Muslims were pushing north. (years / days)",
        "a": [
         "years"
        ]
       },
       {
        "type": "order",
        "q": "رتّب الكلمات لتكوّن جملة صحيحة",
        "words": [
         "The",
         "Muslims",
         "arrived",
         "in",
         "Spain",
         "in",
         "711."
        ]
       }
      ]
     }
    ],
    "mastery": [
     {
      "q": "\"capital\" means:",
      "o": [
       "قصر",
       "مسجد",
       "عاصمة"
      ],
      "a": 2,
      "lv": "easy"
     },
     {
      "q": "\"disease\" means:",
      "o": [
       "دواء",
       "طبيب",
       "مرض"
      ],
      "a": 2,
      "lv": "easy"
     },
     {
      "tf": true,
      "q": "The Muslims arrived in Spain in the year 711.",
      "lv": "easy"
     },
     {
      "type": "match",
      "q": "صِل كلّ كلمة بمعناها",
      "pairs": [
       [
        "turn off",
        "يُطفئ"
       ],
       [
        "look up",
        "يبحث عن"
       ],
       [
        "set up",
        "يؤسّس"
       ],
       [
        "take over",
        "يستولي"
       ]
      ],
      "lv": "medium"
     },
     {
      "q": "He puts ___ his pen and picks up his phone.",
      "o": [
       "off",
       "down",
       "out"
      ],
      "a": 1,
      "lv": "medium"
     },
     {
      "q": "The team trained hard, ___ they won.",
      "o": [
       "or",
       "so",
       "but"
      ],
      "a": 1,
      "lv": "medium"
     },
     {
      "type": "type",
      "q": "Sami: I'll ___ up my History of Islam here. (look)",
      "a": [
       "look"
      ],
      "lv": "hard"
     },
     {
      "q": "Choose the correct sentence.",
      "o": [
       "They set up a capital in Cordoba.",
       "They set a capital up in Cordoba on.",
       "They set capital out Cordoba."
      ],
      "a": 0,
      "lv": "hard"
     },
     {
      "type": "order",
      "q": "رتّب الكلمات لتكوّن جملة صحيحة",
      "words": [
       "The",
       "Muslims",
       "set",
       "up",
       "their",
       "capital",
       "in",
       "Cordoba."
      ],
      "lv": "hard"
     },
     {
      "q": "Why was Al-Andalus a centre of civilisation?",
      "o": [
       "It had no cities",
       "Its science, medicine, architecture and arts became famous",
       "It was very small"
      ],
      "a": 1,
      "lv": "hard"
     }
    ]
   }
  ]
 }
}};
