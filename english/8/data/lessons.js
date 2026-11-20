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
 }
}};
