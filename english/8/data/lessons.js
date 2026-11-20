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
      "q": "رتّب الكلمات: «رتّب الكلمات لتكوّن جملة صحيحة»",
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
      "q": "رتّب الكلمات: «رتّب الكلمات لتكوّن جملة صحيحة»",
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
      "q": "رتّب الكلمات: «رتّب الكلمات لتكوّن جملة صحيحة»",
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
      "q": "رتّب الكلمات: «رتّب الكلمات لتكوّن جملة صحيحة»",
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
 }
}};
