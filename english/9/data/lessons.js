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
 "units": {
  "1": {
   "title": "الوصول إلى فلسطين",
   "titleEn": "Getting to Palestine",
   "lessons": [
    {
     "id": "1-1",
     "title": "Getting to Palestine",
     "titleAr": "الوصول إلى فلسطين",
     "vocab": [
      {
       "en": "airport",
       "ar": "مطار",
       "em": "✈️",
       "ex": "Rami's family are waiting at Gaza Airport.",
       "exAr": "تنتظر عائلة رامي في مطار غزة."
      },
      {
       "en": "attendant",
       "ar": "مضيف / مضيفة طيران",
       "em": "🧑‍✈️",
       "ex": "Call the attendant, and she'll bring you something to drink.",
       "exAr": "نادِ المضيفة وستحضر لك شيئاً تشربه."
      },
      {
       "en": "captain",
       "ar": "قائد الطائرة",
       "em": "👨‍✈️",
       "ex": "Soon after that, they hear the captain.",
       "exAr": "وبعد ذلك بقليل سمعوا صوت القبطان."
      },
      {
       "en": "landing card",
       "ar": "بطاقة هبوط (وصول)",
       "em": "🪪",
       "ex": "You need to complete a visitor landing card.",
       "exAr": "عليك أن تملأ بطاقة وصول للزائر."
      },
      {
       "en": "passport",
       "ar": "جواز سفر",
       "em": "🛂",
       "ex": "They'll take it when you show them your passport.",
       "exAr": "سيأخذونها حين تُريهم جواز سفرك."
      },
      {
       "en": "complete",
       "ar": "يملأ / يُكمل",
       "em": "✍️",
       "ex": "So you each need to complete a landing card.",
       "exAr": "لذلك على كلٍّ منكما أن يملأ بطاقة الوصول."
      },
      {
       "en": "land",
       "ar": "تهبط (الطائرة)",
       "em": "🛬",
       "ex": "They're landing right now. That's their plane!",
       "exAr": "إنها تهبط الآن. تلك طائرتهم!"
      },
      {
       "en": "take off",
       "ar": "تُقلع (الطائرة)",
       "em": "🛫",
       "ex": "They are taking off on a long flight.",
       "exAr": "إنهما يقلعان في رحلة طويلة."
      },
      {
       "en": "right now",
       "ar": "في هذه اللحظة بالضبط",
       "em": "⏱️",
       "ex": "No, they're landing right now.",
       "exAr": "لا، إنهم يهبطون الآن."
      },
      {
       "en": "flight",
       "ar": "رحلة جوّية",
       "em": "🌍",
       "ex": "Flight PF124 is flying to Gaza.",
       "exAr": "الرحلة PF124 متّجهة إلى غزة."
      },
      {
       "en": "guide",
       "ar": "مرشد سياحي",
       "em": "🧭",
       "ex": "There will be a guide to show us round.",
       "exAr": "سيكون هناك مرشد ليريَنا المكان."
      },
      {
       "en": "schedule",
       "ar": "جدول زمني",
       "em": "📅",
       "ex": "We've got a busy schedule, but we can go for an hour.",
       "exAr": "جدولنا مزدحم لكن يمكننا الذهاب لساعة."
      },
      {
       "en": "mini-bus",
       "ar": "حافلة صغيرة",
       "em": "🚐",
       "ex": "We travel by mini-bus to the Damascus Gate.",
       "exAr": "نسافر بحافلة صغيرة إلى باب العامود."
      },
      {
       "en": "museum",
       "ar": "متحف",
       "em": "🏛️",
       "ex": "Let's visit the museum and see the things they found.",
       "exAr": "لنزر المتحف ونرى ما وجدوه."
      },
      {
       "en": "religious",
       "ar": "ديني / متديّن",
       "em": "🕌",
       "ex": "I'm looking for a religious site. Is there one near here?",
       "exAr": "أبحث عن موقع ديني. هل يوجد واحد قريب؟"
      }
     ],
     "reading": {
      "title": "Getting to Palestine",
      "paras": [
       {
        "en": "The Yafawi family usually have their summer holidays in America, but this year Hadeel and Nidal are having a summer holiday with a very big difference. It is 10:30 in the morning on Saturday, July 10th, and they are taking off on a long flight – Flight PF124 to Gaza. Soon after that, they hear the captain. Captain: We're now flying at 11,500 metres, and the weather ahead is excellent. Nidal: This is exciting! Hadeel: Palestine, here we come!",
        "ar": "تقضي عائلة يافاوي عطلتها الصيفية عادةً في أمريكا، لكنّ هديل ونضال يقضيان هذا العام عطلة صيفية مختلفة جدّاً. الساعة العاشرة والنصف صباح السبت العاشر من تموز، وهما يُقلعان في رحلة طويلة: الرحلة PF124 إلى غزة. وبعد قليل سمعا القبطان. القبطان: نحن نطير الآن على ارتفاع ١١٥٠٠ متر، والطقس أمامنا ممتاز. نضال: هذا مثير! هديل: فلسطين، ها نحن قادمون!"
       },
       {
        "en": "Later, during the long flight: Attendant: Are you from Palestine? Hadeel: Well, we're Palestinian-American. We're staying with our cousin's family when we get there. We're staying with them for four weeks. Nidal: We're going home in early August.",
        "ar": "وفي وقتٍ لاحق خلال الرحلة الطويلة: المضيفة: هل أنتما من فلسطين؟ هديل: نحن فلسطينيان أمريكيان. سنقيم عند عائلة ابن عمّنا حين نصل، وسنبقى معهم أربعة أسابيع. نضال: وسنعود إلى البيت في أوائل آب."
       },
       {
        "en": "Attendant: So you each need to complete a visitor landing card. They'll take it after you arrive, when you show them your passport. Here you are.",
        "ar": "المضيفة: إذن على كلٍّ منكما أن يملأ بطاقة وصول للزائر. سيأخذونها بعد وصولكما حين تُريانهم جواز السفر. تفضّلا."
       },
       {
        "en": "At Gaza Airport next morning: Rami: I can't wait to see them again. Uncle Basim: Well, they're arriving at 9:30. Aunt Nada: And it's almost 9:30 now, so they're coming very soon. Rami: No, they're landing right now. That's their plane!",
        "ar": "في مطار غزة صباح اليوم التالي: رامي: لا أطيق الانتظار لأراهما من جديد. العمّ باسم: حسناً، سيصلان في التاسعة والنصف. العمّة ندى: والساعة تقارب التاسعة والنصف الآن، لذلك سيصلان قريباً جدّاً. رامي: لا، إنهما يهبطان في هذه اللحظة. تلك طائرتهما!"
       },
       {
        "en": "Finally, 45 minutes later: Rami: Nidal! Hadeel! Hi! Nidal: Hi, Rami! Hadeel: It's great to see you again! Uncle Basim: Hello, Hadeel. Hello, Nidal. Welcome home to Palestine. Aunt Nada: It's lovely to have you here. Hadeel: Thank you, Uncle Basim, Aunt Nada. It's lovely to be here.",
        "ar": "وأخيراً، بعد خمس وأربعين دقيقة: رامي: نضال! هديل! أهلاً! نضال: أهلاً يا رامي! هديل: من الرائع أن أراك من جديد! العمّ باسم: أهلاً يا هديل، أهلاً يا نضال، مرحباً بكما في وطنكما فلسطين. العمّة ندى: من اللطيف أن تكونا عندنا. هديل: شكراً يا عمّ باسم ويا عمّة ندى، من اللطيف أن أكون هنا."
       }
      ],
      "questions": [
       {
        "q": "Where are Hadeel and Nidal flying to?",
        "o": [
         "Gaza",
         "London",
         "Los Angeles"
        ],
        "a": 0
       },
       {
        "q": "How long are they staying with their cousin's family?",
        "o": [
         "Two weeks",
         "Four weeks",
         "Four days"
        ],
        "a": 1
       },
       {
        "tf": true,
        "q": "The captain says the weather ahead is excellent."
       },
       {
        "q": "What do Hadeel and Nidal need to complete on the plane?",
        "o": [
         "A school project",
         "A flight schedule",
         "A visitor landing card"
        ],
        "a": 2
       },
       {
        "q": "What does Rami say when he sees the plane?",
        "o": [
         "They're landing right now.",
         "They're taking off right now.",
         "They're leaving soon."
        ],
        "a": 0
       },
       {
        "tf": false,
        "q": "Hadeel and Nidal are going home in early September.",
        "why": "They are going home in early August."
       }
      ]
     },
     "rules": [
      {
       "title": "Present continuous: now and future plans",
       "titleAr": "المضارع المستمر: الآن والخطط المستقبلية",
       "explain": "نستعمل <b>المضارع المستمر</b> (am / is / are + V-ing) لأمرين: ١) ما يحدث <b>الآن أو في هذه الفترة</b> (We are now flying at 11,500 metres)، ٢) <b>خطّة قريبة مرتَّب لها</b> مع وقتٍ في المستقبل (They are arriving very soon / We are staying with them next week).",
       "form": "am / is / are + V-ing    ·    الآن أو خطّة قريبة",
       "examples": [
        {
         "en": "We are now **flying** at 11,500 metres.",
         "ar": "يحدث الآن"
        },
        {
         "en": "This year Hadeel and Nidal **are doing** something different.",
         "ar": "في هذه الفترة"
        },
        {
         "en": "They **are arriving** very soon.",
         "ar": "خطّة قريبة"
        },
        {
         "en": "We **are staying** with our cousin's family when we get there.",
         "ar": "خطّة مرتَّبة"
        }
       ],
       "questions": [
        {
         "q": "It's now 10:30 and Nidal and Hadeel ___ off.",
         "o": [
          "are taking",
          "take",
          "takes"
         ],
         "a": 0,
         "why": "الآن: المضارع المستمر"
        },
        {
         "q": "Their plane ___ at 11,500 metres at the moment.",
         "o": [
          "flies",
          "is flying",
          "fly"
         ],
         "a": 1,
         "why": "at the moment: المضارع المستمر"
        },
        {
         "q": "Hadeel and Nidal ___ in Gaza tomorrow morning.",
         "o": [
          "arrives",
          "arrive",
          "are arriving"
         ],
         "a": 2,
         "why": "خطّة مستقبلية مع tomorrow"
        },
        {
         "type": "type",
         "q": "Their uncle ___ everyone home after that. (drive)",
         "a": [
          "is driving",
          "'s driving"
         ],
         "why": "خطّة قريبة"
        },
        {
         "type": "type",
         "q": "They ___ a tour of Palestine next week. (do)",
         "a": [
          "are doing",
          "'re doing"
         ],
         "why": "خطّة مرتَّبة"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «ماذا تفعل هذا المساء؟»",
         "words": [
          "What",
          "are",
          "you",
          "doing",
          "this",
          "evening?"
         ]
        }
       ]
      },
      {
       "title": "Present simple: regular actions and schedules",
       "titleAr": "المضارع البسيط: العادات والجداول الثابتة",
       "explain": "نستعمل <b>المضارع البسيط</b> (V1 / V(s)) للأفعال التي <b>تتكرّر</b> (These tours start from Jerusalem every week)، وللأمور التي <b>تبقى ثابتة</b> وأفعال الشعور والحالة مثل <b>love, like, prefer, need</b>، وكذلك <b>للجداول المستقبلية الثابتة</b> كمواعيد الرحلات (The flight leaves at 8:10 tomorrow).",
       "form": "V1 / V(s) / doesn't + V1    ·    عادة · حالة ثابتة · جدول مستقبلي ثابت",
       "examples": [
        {
         "en": "These tours **start** from Jerusalem every week.",
         "ar": "يتكرّر"
        },
        {
         "en": "He **loves** flying, and he **spends** many hours in the air every week.",
         "ar": "حالة وتكرار"
        },
        {
         "en": "He **doesn't like** staying away from his family at night.",
         "ar": "فعل شعور منفيّ"
        },
        {
         "en": "We **begin** our walking tour at 10:00 tomorrow.",
         "ar": "جدول مستقبلي ثابت"
        }
       ],
       "questions": [
        {
         "q": "Captain Hassan ___ in Palestine, but he usually travels a lot.",
         "o": [
          "lives",
          "is living",
          "live"
         ],
         "a": 0,
         "why": "حالة ثابتة"
        },
        {
         "q": "He ___ the shorter flights to Europe.",
         "o": [
          "is preferring",
          "prefers",
          "prefer"
         ],
         "a": 1,
         "why": "prefer فعل تفضيل"
        },
        {
         "q": "At 8:10 tomorrow morning, the plane ___ for London.",
         "o": [
          "is taking off now",
          "taking off",
          "takes off"
         ],
         "a": 2,
         "why": "جدول رحلات ثابت"
        },
        {
         "type": "type",
         "q": "The flight ___ at 7:05 in the evening. (arrive)",
         "a": [
          "arrives"
         ],
         "why": "جدول مستقبلي: المضارع البسيط"
        },
        {
         "type": "type",
         "q": "He ___ staying away from his family at night. (not like)",
         "a": [
          "doesn't like",
          "does not like"
         ],
         "why": "نفي المضارع البسيط"
        },
        {
         "tf": false,
         "q": "The correct sentence is: He is loving flying.",
         "why": "الصحيح: He loves flying."
        }
       ]
      },
      {
       "title": "Prepositions of time and place",
       "titleAr": "حروف الجرّ للزمان والمكان",
       "explain": "للزمان: <b>in</b> مع الشهور والسنوات (in July)، <b>on</b> مع الأيام والتواريخ (on Saturday)، <b>at</b> مع الساعات (at 9:30)، <b>during</b> أثناء مدّة، <b>for</b> لمدّة (for four weeks)، <b>from … to</b> من … إلى. وللمكان: <b>at</b> (at the airport)، <b>in</b> (in the picture)، <b>on</b> (on the grass)، <b>near</b> قرب، <b>next to</b> بجانب، <b>outside</b> خارج.",
       "form": "in July · on Saturday · at 9:30 · during the flight · for four weeks · from … to …",
       "examples": [
        {
         "en": "Rami's family invited them to visit **in** July.",
         "ar": "in مع الشهر"
        },
        {
         "en": "They are staying **for** four weeks, **from** July 10th **to** August 7th.",
         "ar": "مدّة وبداية ونهاية"
        },
        {
         "en": "They watched some films **during** the long flight.",
         "ar": "أثناء"
        },
        {
         "en": "They are sitting **next to** each other **at** the back of the plane.",
         "ar": "مكان"
        }
       ],
       "questions": [
        {
         "q": "Rami's family invited them to visit ___ July.",
         "o": [
          "in",
          "on",
          "at"
         ],
         "a": 0,
         "why": "in مع الشهور"
        },
        {
         "q": "They finally arrived ___ 9:30 on the 11th.",
         "o": [
          "in",
          "at",
          "during"
         ],
         "a": 1,
         "why": "at مع الساعة"
        },
        {
         "q": "They watched some films ___ the very long flight.",
         "o": [
          "for",
          "at",
          "during"
         ],
         "a": 2,
         "why": "during + حدث"
        },
        {
         "q": "They are staying ___ four weeks.",
         "o": [
          "for",
          "during",
          "on"
         ],
         "a": 0,
         "why": "for + مدّة"
        },
        {
         "type": "type",
         "q": "Rami and his family are waiting ___ Gaza Airport. (at / on)",
         "a": [
          "at"
         ],
         "why": "at مع المطار"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «يجلسان بجانب بعضهما في مؤخّرة الطائرة»",
         "words": [
          "They",
          "are",
          "sitting",
          "next",
          "to",
          "each",
          "other",
          "at",
          "the",
          "back",
          "of",
          "the",
          "plane."
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"passport\" means:",
       "o": [
        "جواز سفر",
        "بطاقة هبوط",
        "مطار"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"captain\" means:",
       "o": [
        "مضيف الطيران",
        "قائد الطائرة",
        "مرشد سياحي"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Hadeel and Nidal usually have their summer holidays in America.",
       "lv": "easy"
      },
      {
       "q": "\"take off\" means:",
       "o": [
        "تهبط",
        "تملأ",
        "تُقلع"
       ],
       "a": 2,
       "lv": "easy"
      },
      {
       "tf": false,
       "q": "Flight PF124 is going to Los Angeles.",
       "why": "It is going to Gaza.",
       "lv": "easy"
      },
      {
       "q": "\"schedule\" means:",
       "o": [
        "جدول زمني",
        "متحف",
        "قرية"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"museum\" means:",
       "o": [
        "بوابة",
        "متحف",
        "حافلة صغيرة"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "airport",
         "مطار"
        ],
        [
         "attendant",
         "مضيف طيران"
        ],
        [
         "guide",
         "مرشد سياحي"
        ],
        [
         "religious",
         "ديني"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "Nidal and Hadeel ___ in their places on the plane now.",
       "o": [
        "sit",
        "sits",
        "are sitting"
       ],
       "a": 2,
       "lv": "medium"
      },
      {
       "q": "The plane ___ at 11,500 metres at the moment.",
       "o": [
        "is flying",
        "flies",
        "fly"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "They ___ in Gaza tomorrow morning.",
       "o": [
        "arrived",
        "are arriving",
        "arrive now"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "Complete: We stay ___ four weeks.",
       "o": [
        "during",
        "in",
        "for"
       ],
       "a": 2,
       "lv": "medium"
      },
      {
       "q": "Complete: The flight leaves ___ 10:30 in the morning.",
       "o": [
        "at",
        "on",
        "in"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "The captain ___ many hours in the air every week. (spend)",
       "a": [
        "spends"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "Their uncle ___ everyone home after they land. (drive)",
       "a": [
        "is driving",
        "'s driving"
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "He isn't liking staying away from his family.",
        "He doesn't like staying away from his family.",
        "He doesn't likes staying away from his family."
       ],
       "a": 1,
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "They",
        "are",
        "arriving",
        "very",
        "soon."
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "The",
        "flight",
        "leaves",
        "Gaza",
        "at",
        "8:10",
        "tomorrow",
        "morning."
       ],
       "lv": "hard"
      },
      {
       "q": "What does Hadeel need to show with her landing card?",
       "o": [
        "Her museum ticket",
        "Her schedule",
        "Her passport"
       ],
       "a": 2,
       "lv": "hard"
      },
      {
       "q": "Why does Nidal say 'This is exciting!'?",
       "o": [
        "They are flying to Palestine.",
        "The plane is late.",
        "The weather is bad."
       ],
       "a": 0,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "2": {
   "title": "أشعر وكأنني في بيتي",
   "titleEn": "I feel at home already!",
   "lessons": [
    {
     "id": "2-1",
     "title": "I feel at home already!",
     "titleAr": "أشعر وكأنني في بيتي",
     "vocab": [
      {
       "en": "carpet",
       "ar": "سجّادة (موكيت)",
       "em": "🟫",
       "ex": "First, we need to choose a new carpet.",
       "exAr": "أوّلاً نحتاج إلى اختيار سجّادة جديدة."
      },
      {
       "en": "curtain",
       "ar": "ستارة",
       "em": "🪟",
       "ex": "We haven't put up the curtains yet!",
       "exAr": "لم نركّب الستائر بعد!"
      },
      {
       "en": "dining room",
       "ar": "غرفة الطعام",
       "em": "🍽️",
       "ex": "Get another chair for the dining room.",
       "exAr": "أحضِروا كرسيّاً آخر لغرفة الطعام."
      },
      {
       "en": "hall",
       "ar": "ردهة / مدخل البيت",
       "em": "🚪",
       "ex": "The others have already arrived. They're in the hall.",
       "exAr": "وصل الآخرون بالفعل، وهم في الردهة."
      },
      {
       "en": "in time",
       "ar": "في الوقت المناسب",
       "em": "⏰",
       "ex": "We've finished just in time.",
       "exAr": "أنهينا العمل في الوقت المناسب تماماً."
      },
      {
       "en": "put up",
       "ar": "يعلّق / يركّب",
       "em": "🖼️",
       "ex": "Where would you like me to put up this picture?",
       "exAr": "أين تريدني أن أعلّق هذه الصورة؟"
      },
      {
       "en": "wardrobe",
       "ar": "خزانة ملابس",
       "em": "🗄️",
       "ex": "And buy a new wardrobe.",
       "exAr": "واشترِ خزانة ملابس جديدة."
      },
      {
       "en": "relax",
       "ar": "يسترخي",
       "em": "🛋️",
       "ex": "We want a place to relax with family and friends.",
       "exAr": "نريد مكاناً نسترخي فيه مع العائلة والأصدقاء."
      },
      {
       "en": "continue",
       "ar": "يستمرّ / يواصل",
       "em": "➡️",
       "ex": "Some Masai have continued living in communities like this.",
       "exAr": "واصل بعض المَسَاي العيش في مجتمعات كهذه."
      },
      {
       "en": "special",
       "ar": "مميّز / خاصّ",
       "em": "⭐",
       "ex": "We always remember that special place.",
       "exAr": "نتذكّر دائماً ذلك المكان المميّز."
      },
      {
       "en": "dry",
       "ar": "جافّ / يجفّ",
       "em": "☀️",
       "ex": "In the hot, dry Middle East, the walls were thick and white.",
       "exAr": "في الشرق الأوسط الحارّ الجافّ كانت الجدران سميكة وبيضاء."
      },
      {
       "en": "wet",
       "ar": "رطب / ممطر",
       "em": "🌧️",
       "ex": "I hate all this wet weather, with rain all day.",
       "exAr": "أكره هذا الطقس الممطر والمطر طوال اليوم."
      },
      {
       "en": "wall",
       "ar": "جدار",
       "em": "🧱",
       "ex": "Let's climb over the wall and find out.",
       "exAr": "لنتسلّق الجدار ونكتشف."
      },
      {
       "en": "keep out",
       "ar": "ممنوع الدخول / يُبعد",
       "em": "⛔",
       "ex": "The sign says, 'Keep out!'",
       "exAr": "اللافتة تقول: «ممنوع الدخول!»"
      },
      {
       "en": "saying",
       "ar": "قول مأثور",
       "em": "💬",
       "ex": "'East or west, home is best' is an old saying.",
       "exAr": "«شرقاً أو غرباً، البيت أفضل» قول مأثور قديم."
      }
     ],
     "reading": {
      "title": "I feel at home already!",
      "paras": [
       {
        "en": "The Qadiri family have lived in London for over a year. Now Grandma is going to visit them. Mrs Qadiri: Grandma is arriving in a week, and we haven't prepared the guest bedroom yet. Mr Qadiri: Yes, we've been talking about it for ages, but we still haven't done anything.",
        "ar": "تعيش عائلة قادري في لندن منذ أكثر من سنة، والآن ستزورهم الجدّة. السيدة قادري: ستصل الجدّة بعد أسبوع ولم نجهّز غرفة الضيوف بعد. السيّد قادري: نعم، نتحدّث عن ذلك منذ زمن طويل لكنّنا لم نفعل شيئاً حتى الآن."
       },
       {
        "en": "Waleed: So there's a lot to do by next Saturday! Let's make a list. Mrs Qadiri: Good idea. First, we need to choose a new carpet. Lana: And buy a new wardrobe. Waleed: Choose a new carpet … Buy a new wardrobe. Mr Qadiri: I've already seen a nice wardrobe. I can get it today. Now, what else?",
        "ar": "وليد: إذن لدينا الكثير لنفعله قبل السبت القادم! لنكتب قائمة. السيدة قادري: فكرة جيّدة. أوّلاً نحتاج إلى اختيار سجّادة جديدة. لانا: ونشتري خزانة ملابس جديدة. وليد: اختيار سجّادة جديدة … شراء خزانة ملابس. السيّد قادري: لقد رأيت بالفعل خزانة جميلة، يمكنني شراءها اليوم. والآن ماذا أيضاً؟"
       },
       {
        "en": "The Qadiri family have been working hard for the past week, but they still haven't finished. They have chosen the carpet, bought the wardrobe, put up some pictures and got another chair for the dining room. They have made some new curtains and Grandma's bed, but they haven't put up the curtains or put flowers by the bed. Mrs Qadiri: Grandma's arriving soon, and we haven't put up the curtains yet! Mr Qadiri: You and Waleed do that, while Lana and I go to the airport.",
        "ar": "عملت عائلة قادري بجدّ طوال الأسبوع الماضي لكنّها لم تنتهِ بعد. اختاروا السجّادة واشتروا خزانة الملابس وعلّقوا بعض الصور وأحضروا كرسيّاً آخر لغرفة الطعام، وصنعوا بعض الستائر وجهّزوا سرير الجدّة، لكنّهم لم يركّبوا الستائر ولم يضعوا الزهور قرب السرير. السيدة قادري: ستصل الجدّة قريباً ولم نركّب الستائر بعد! السيّد قادري: افعلا ذلك أنتِ ووليد بينما أذهب أنا ولانا إلى المطار."
       },
       {
        "en": "Two hours later: Mrs Qadiri: Fantastic! The curtains are up. Waleed: We've finished just in time. The others have already arrived. They're in the hall. Mrs Qadiri: But we still haven't done the flowers. Quick!",
        "ar": "بعد ساعتين: السيدة قادري: رائع! الستائر رُكّبت. وليد: أنهينا العمل في الوقت المناسب تماماً، فقد وصل الآخرون بالفعل وهم في الردهة. السيدة قادري: لكنّنا لم نضع الزهور بعد. بسرعة!"
       },
       {
        "en": "Twenty minutes later: Mrs Qadiri: And here's your room, Mother. Grandma: It's wonderful! And I love the flowers. They're my favourites. I feel at home already!",
        "ar": "بعد عشرين دقيقة: السيدة قادري: وهذه غرفتك يا أمّي. الجدّة: إنها رائعة! وأحبّ الزهور، فهي المفضّلة عندي. أشعر وكأنني في بيتي منذ الآن!"
       }
      ],
      "questions": [
       {
        "q": "How long have the Qadiri family lived in London?",
        "o": [
         "For a week",
         "For over a year",
         "For ten years"
        ],
        "a": 1
       },
       {
        "q": "Who is coming to visit the family?",
        "o": [
         "Aunt Nada",
         "A friend of Lana",
         "Grandma"
        ],
        "a": 2
       },
       {
        "tf": false,
        "q": "The family have already finished everything on Waleed's list.",
        "why": "They still haven't put up the curtains and put the flowers by the bed."
       },
       {
        "q": "Who has already seen a nice wardrobe?",
        "o": [
         "Mr Qadiri",
         "Mrs Qadiri",
         "Lana"
        ],
        "a": 0
       },
       {
        "q": "What do Waleed and Mrs Qadiri do while the others go to the airport?",
        "o": [
         "They make the bed.",
         "They put up the curtains.",
         "They choose a carpet."
        ],
        "a": 1
       },
       {
        "q": "What does Grandma like most in her room?",
        "o": [
         "The carpet",
         "The wardrobe",
         "The flowers"
        ],
        "a": 2
       }
      ]
     },
     "rules": [
      {
       "title": "Present perfect with already, still and yet",
       "titleAr": "المضارع التام مع already وstill وyet",
       "explain": "نصوغ <b>المضارع التام</b> بـ <b>have / has + V3</b> للحديث عن فعلٍ تمّ ويرتبط بالحاضر. نستعمل <b>already</b> في الإثبات لنقول إنّ الفعل تمّ <b>أبكر مما يُتوقّع</b> (I have already seen a nice wardrobe)، و<b>still … not</b> في النفي لنقول إنّه <b>لم يتمّ بعد رغم مرور الوقت</b> (We still haven't done the flowers)، و<b>yet</b> في الأسئلة والنفي (Have they made the curtains yet?).",
       "form": "have / has + V3    ·    already (إثبات) · still … not / not … yet (نفي) · yet (سؤال)",
       "examples": [
        {
         "en": "I **have already seen** a nice wardrobe.",
         "ar": "already: تمّ مبكراً"
        },
        {
         "en": "Mum and Lana **haven't made** any curtains yet.",
         "ar": "لم يتمّ بعد"
        },
        {
         "en": "We **still haven't done** the flowers.",
         "ar": "still: لم يتمّ رغم الانتظار"
        },
        {
         "en": "**Has** Mr Qadiri **bought** the wardrobe yet?",
         "ar": "سؤال مع yet"
        }
       ],
       "questions": [
        {
         "q": "Mrs Qadiri ___ a new carpet. She chose it last Saturday.",
         "o": [
          "has still chosen",
          "has already chosen",
          "already chose yet"
         ],
         "a": 1,
         "why": "already في الإثبات"
        },
        {
         "q": "We ___ the curtains yet!",
         "o": [
          "have put up",
          "didn't put up",
          "haven't put up"
         ],
         "a": 2,
         "why": "yet في النفي"
        },
        {
         "q": "The family ___ finished. They are still working.",
         "o": [
          "still haven't",
          "already have",
          "have yet"
         ],
         "a": 0,
         "why": "still … not"
        },
        {
         "type": "type",
         "q": "Mum ___ made Grandma's bed. (already)",
         "a": [
          "has already",
          "'s already"
         ],
         "why": "already + have / has"
        },
        {
         "type": "type",
         "q": "They ___ the flowers yet. (not do)",
         "a": [
          "haven't done",
          "have not done"
         ],
         "why": "yet في النفي"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «لقد رأيت بالفعل خزانة جميلة»",
         "words": [
          "I",
          "have",
          "already",
          "seen",
          "a",
          "nice",
          "wardrobe."
         ]
        }
       ]
      },
      {
       "title": "Present perfect continuous",
       "titleAr": "المضارع التام المستمر",
       "explain": "نصوغ <b>المضارع التام المستمر</b> بـ <b>have / has + been + V-ing</b> للتأكيد على أنّ فعلاً <b>استمرّ مدّة طويلة حتى الآن</b>، وغالباً مع <b>for</b> (for ages / for a week) أو <b>since</b> (since Monday). يوحي أحياناً بأنّ الفعل <b>ما زال مستمرّاً</b> أو توقّف لتوّه (We have been talking about it for ages).",
       "form": "have / has + been + V-ing    ·    for + مدّة · since + نقطة بداية",
       "examples": [
        {
         "en": "We **have been talking** about it for ages.",
         "ar": "استمرّ طويلاً حتى الآن"
        },
        {
         "en": "The family **have been working** hard for the past week.",
         "ar": "for + مدّة"
        },
        {
         "en": "Waleed **has been painting** that room for ages, but he still hasn't finished it.",
         "ar": "مع still … not"
        },
        {
         "en": "He's only **been walking** for a week.",
         "ar": "تعجّب من قِصَر المدّة"
        }
       ],
       "questions": [
        {
         "q": "We ___ about it for ages.",
         "o": [
          "are talking",
          "have been talking",
          "talked"
         ],
         "a": 1,
         "why": "for ages: التام المستمر"
        },
        {
         "q": "Lana ___ her room for hours, but she still hasn't finished.",
         "o": [
          "tidies",
          "is tidying up now",
          "has been tidying"
         ],
         "a": 2,
         "why": "for hours"
        },
        {
         "q": "Mr Qadiri ___ at new laptops for weeks.",
         "o": [
          "has been looking",
          "have been looking",
          "looks"
         ],
         "a": 0,
         "why": "he + has been"
        },
        {
         "type": "type",
         "q": "Mrs Qadiri ___ for a new carpet for days. (look)",
         "a": [
          "has been looking"
         ],
         "why": "التام المستمر"
        },
        {
         "type": "type",
         "q": "They have been working hard ___ the past week. (for / since)",
         "a": [
          "for"
         ],
         "why": "for + مدّة"
        },
        {
         "tf": false,
         "q": "The correct sentence is: We are talking about it for ages.",
         "why": "الصحيح: We have been talking about it for ages."
        }
       ]
      },
      {
       "title": "Present perfect and past simple",
       "titleAr": "المضارع التام والماضي البسيط",
       "explain": "<b>الماضي البسيط</b> لفعلٍ <b>انتهى تماماً في الماضي</b> مع كلمات مثل <b>ago, yesterday, last week, long ago</b> (The Masai began building houses long ago). <b>المضارع التام</b> لفعلٍ <b>يربط الماضي بالحاضر</b> (Most people have moved to modern buildings) وغالباً مع <b>for, since, already, just, yet</b>. قارن: arrived … <b>ago</b> / have lived … <b>for</b>.",
       "form": "ماضٍ منتهٍ: V2 + ago / yesterday    ·    يمتدّ للحاضر: have / has + V3 + for / since",
       "examples": [
        {
         "en": "The family **arrived** in London fifteen months **ago**.",
         "ar": "ماضٍ منتهٍ"
        },
        {
         "en": "The family **have lived** in London **for** fifteen months.",
         "ar": "ما زال مستمرّاً"
        },
        {
         "en": "Long ago, the Masai **began** building their houses in circles.",
         "ar": "ماضٍ منتهٍ"
        },
        {
         "en": "One thing **has not changed**.",
         "ar": "يربط الماضي بالحاضر"
        }
       ],
       "questions": [
        {
         "q": "The Qadiri family ___ in London for fifteen months.",
         "o": [
          "lived",
          "have lived",
          "are living"
         ],
         "a": 1,
         "why": "for + مدّة حتى الآن"
        },
        {
         "q": "They ___ in London fifteen months ago.",
         "o": [
          "have arrived",
          "arrive",
          "arrived"
         ],
         "a": 2,
         "why": "ago: ماضٍ بسيط"
        },
        {
         "q": "Long ago, the Masai ___ building their houses in circles.",
         "o": [
          "began",
          "have begun",
          "begin"
         ],
         "a": 0,
         "why": "long ago: ماضٍ بسيط"
        },
        {
         "q": "Most people ___ to modern buildings, and they still live there.",
         "o": [
          "moved long ago",
          "have moved",
          "move"
         ],
         "a": 1,
         "why": "يربط الماضي بالحاضر"
        },
        {
         "type": "type",
         "q": "Mr Qadiri ___ a wardrobe yesterday. (buy)",
         "a": [
          "bought"
         ],
         "why": "yesterday: ماضٍ بسيط"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «عاشت العائلة في لندن منذ خمسة عشر شهراً»",
         "words": [
          "The",
          "family",
          "have",
          "lived",
          "in",
          "London",
          "for",
          "fifteen",
          "months."
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"curtain\" means:",
       "o": [
        "جدار",
        "ستارة",
        "سجّادة"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "q": "\"wardrobe\" means:",
       "o": [
        "غرفة الطعام",
        "ردهة",
        "خزانة ملابس"
       ],
       "a": 2,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Grandma is arriving in a week.",
       "lv": "easy"
      },
      {
       "q": "\"wall\" means:",
       "o": [
        "جدار",
        "ستارة",
        "قول مأثور"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "tf": false,
       "q": "Grandma doesn't like the flowers in her room.",
       "why": "She loves them; they are her favourites.",
       "lv": "easy"
      },
      {
       "q": "\"relax\" means:",
       "o": [
        "يواصل",
        "يسترخي",
        "يعلّق"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "q": "\"special\" means:",
       "o": [
        "جافّ",
        "رطب",
        "مميّز"
       ],
       "a": 2,
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "carpet",
         "سجّادة"
        ],
        [
         "hall",
         "ردهة"
        ],
        [
         "put up",
         "يعلّق / يركّب"
        ],
        [
         "keep out",
         "ممنوع الدخول"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "Waleed ___ that room for ages, but he still hasn't finished it.",
       "o": [
        "has been painting",
        "is painting",
        "paints"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "We haven't put up the curtains ___.",
       "o": [
        "already",
        "yet",
        "ago"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "Mr Qadiri ___ a nice wardrobe, so he can buy it today.",
       "o": [
        "still hasn't seen",
        "saw yet",
        "has already seen"
       ],
       "a": 2,
       "lv": "medium"
      },
      {
       "q": "The opposite of 'wet' is ___.",
       "o": [
        "dry",
        "special",
        "hot"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "The family arrived in London fifteen months ___.",
       "o": [
        "for",
        "ago",
        "since"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "The Qadiri family have lived in London ___ over a year.",
       "o": [
        "ago",
        "yet",
        "for"
       ],
       "a": 2,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "Lana ___ her room for hours. (tidy up)",
       "a": [
        "has been tidying up",
        "has been tidying"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "They still ___ the flowers. (not do)",
       "a": [
        "haven't done",
        "have not done"
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "We have been talking about it for ages.",
        "We are talking about it for ages.",
        "We have been talk about it for ages."
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "We",
        "still",
        "haven't",
        "done",
        "the",
        "flowers."
       ],
       "lv": "hard"
      },
      {
       "q": "Why are the Qadiri family preparing the guest bedroom?",
       "o": [
        "They are moving house.",
        "Grandma is coming to visit.",
        "They are selling the bed."
       ],
       "a": 1,
       "lv": "hard"
      },
      {
       "q": "Complete the saying: 'East or west, ___ is best.'",
       "o": [
        "school",
        "work",
        "home"
       ],
       "a": 2,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "3": {
   "title": "كن لائقاً ولكن كن آمناً",
   "titleEn": "Be fit, but be safe",
   "lessons": [
    {
     "id": "3-1",
     "title": "Be fit, but be safe",
     "titleAr": "كن لائقاً ولكن كن آمناً",
     "vocab": [
      {
       "en": "calm down",
       "ar": "يهدأ",
       "em": "😌",
       "ex": "OK, Waleed, calm down.",
       "exAr": "حسناً يا وليد، اهدأ."
      },
      {
       "en": "collapse",
       "ar": "ينهار / يسقط مغشياً عليه",
       "em": "🤕",
       "ex": "Coach! Jamie has collapsed!",
       "exAr": "يا مدرّب! جيمي انهار!"
      },
      {
       "en": "cover",
       "ar": "يغطّي",
       "em": "🧣",
       "ex": "Let's cover him to keep him warm.",
       "exAr": "لنغطِّه ليبقى دافئاً."
      },
      {
       "en": "first aid kit",
       "ar": "حقيبة الإسعافات الأولية",
       "em": "🧰",
       "ex": "Run and get the thermal blanket and the first aid kit.",
       "exAr": "اركض وأحضر البطانية الحرارية وحقيبة الإسعافات الأولية."
      },
      {
       "en": "ground",
       "ar": "الأرض",
       "em": "🌱",
       "ex": "He falls to the ground and lies there, not moving.",
       "exAr": "يسقط على الأرض ويبقى مستلقياً دون حراك."
      },
      {
       "en": "lie",
       "ar": "يستلقي",
       "em": "🛌",
       "ex": "Let her lie here quietly at the moment.",
       "exAr": "دعها تستلقي هنا بهدوء الآن."
      },
      {
       "en": "pulse",
       "ar": "النبض",
       "em": "💓",
       "ex": "Now let's check his pulse.",
       "exAr": "الآن لنفحص نبضه."
      },
      {
       "en": "sweat",
       "ar": "يتعرّق",
       "em": "💦",
       "ex": "He's cold, too, and he's sweating.",
       "exAr": "إنه بارد أيضاً ويتعرّق."
      },
      {
       "en": "heart",
       "ar": "القلب",
       "em": "❤",
       "ex": "A healthy heart is a very important thing.",
       "exAr": "القلب السليم شيء مهمّ جدّاً."
      },
      {
       "en": "injury",
       "ar": "إصابة",
       "em": "🩹",
       "ex": "Warming up helps to stop sports injuries.",
       "exAr": "الإحماء يساعد على منع الإصابات الرياضية."
      },
      {
       "en": "out of breath",
       "ar": "منقطع النَّفَس",
       "em": "😤",
       "ex": "I started well, but then I got out of breath.",
       "exAr": "بدأتُ جيّداً لكنّ نَفَسي انقطع بعد ذلك."
      },
      {
       "en": "rate",
       "ar": "معدّل",
       "em": "📊",
       "ex": "They say my heart rate was 190 beats a minute!",
       "exAr": "يقولون إنّ معدّل نبض قلبي كان 190 نبضة في الدقيقة!"
      },
      {
       "en": "sensible",
       "ar": "عاقل / حكيم",
       "em": "🧠",
       "ex": "The rule is this: be sensible, and don't push yourself too hard.",
       "exAr": "القاعدة هي: كن حكيماً ولا ترهق نفسك أكثر من اللازم."
      },
      {
       "en": "warm up",
       "ar": "يسخّن الجسم (يحمّي)",
       "em": "🔥",
       "ex": "With all sports, always remember to warm up first.",
       "exAr": "مع كلّ الرياضات تذكّر دائماً أن تسخّن جسمك أوّلاً."
      },
      {
       "en": "gentle",
       "ar": "لطيف / خفيف",
       "em": "🍃",
       "ex": "Do gentle exercises for the various parts of your body.",
       "exAr": "قم بتمارين خفيفة لمختلف أجزاء جسمك."
      },
      {
       "en": "fever",
       "ar": "حمّى",
       "em": "🌡",
       "ex": "Majed has a fever of 40°C.",
       "exAr": "ماجد مصاب بحمّى درجتها 40 مئوية."
      }
     ],
     "reading": {
      "title": "Ask Dr Blake",
      "paras": [
       {
        "en": "Dr Blake is at Waleed's school, and he has been using charts to talk about health, sport and getting fit. Now he is answering questions.",
        "ar": "الدكتور بليك في مدرسة وليد، وقد استعمل مخطّطات ليتحدّث عن الصحّة والرياضة واللياقة. والآن يجيب عن الأسئلة."
       },
       {
        "en": "Hello. I'm Julie Nixon. I started rock climbing last year, but I fell and broke my leg. Since then, I haven't been active enough, but I want to try something safer! What's your advice?",
        "ar": "مرحباً. أنا جولي نيكسون. بدأتُ تسلّق الصخور العام الماضي لكنّني سقطتُ وكسرتُ ساقي. ومنذ ذلك الحين لم أكن نشيطة بما يكفي، لكنّني أريد أن أجرّب شيئاً أكثر أماناً! ما نصيحتك؟"
       },
       {
        "en": "You feel that rock climbing is too dangerous for you, and yes, it is more dangerous than most sports. The safest activity is swimming, and that's also good for old injuries like yours. But with all sports, always remember to warm up first. Do gentle exercises for the various parts of your body. This helps stop injuries.",
        "ar": "تشعرين أنّ تسلّق الصخور خطِر جدّاً عليك، وهو فعلاً أخطر من معظم الرياضات. أكثر الأنشطة أماناً هو السباحة، وهي مفيدة أيضاً للإصابات القديمة مثل إصابتك. لكن مع كلّ الرياضات تذكّري دائماً أن تسخّني جسمك أوّلاً. قومي بتمارين خفيفة لمختلف أجزاء جسمك، فهذا يساعد على منع الإصابات."
       },
       {
        "en": "I'm Jamie Smith, and I recently went football training after a week in bed with flu. I started well enough, but then I got out of breath. I began sweating badly, and my heart started beating very fast. Then I collapsed. They say my heart rate was 190 beats a minute! But I was all right after ten minutes, and I wanted to start again. The problem was that our coach sent me home! He said I wasn't fit enough to train. Was he wrong?",
        "ar": "أنا جيمي سميث، وقد ذهبتُ مؤخّراً إلى تدريب كرة القدم بعد أسبوع في الفراش بسبب الإنفلونزا. بدأتُ جيّداً بما يكفي لكنّ نَفَسي انقطع بعد ذلك. وبدأتُ أتعرّق بشدّة وصار قلبي ينبض بسرعة كبيرة، ثمّ انهرتُ. يقولون إنّ معدّل نبض قلبي كان 190 نبضة في الدقيقة! لكنّني تحسّنتُ بعد عشر دقائق وأردتُ أن أبدأ من جديد. المشكلة أنّ مدرّبنا أرسلني إلى البيت! قال إنّني لستُ لائقاً بما يكفي للتدريب. هل أخطأ؟"
       },
       {
        "en": "No, he was right – and you were wrong. Hard training after you've been sick is dangerous, Jamie. Your body was still too weak to do sports, and you didn't wait long enough to get well again. The rule is this: be sensible, and don't push yourself too hard or too soon. Take things slowly, and remember the old saying: 'Better safe than sorry'.",
        "ar": "لا، لقد كان محقّاً وأنتَ المخطئ. التدريب الشاقّ بعد المرض خطِر يا جيمي. كان جسمك ما زال أضعف من أن يمارس الرياضة، ولم تنتظر وقتاً كافياً لتتعافى. القاعدة هي: كن حكيماً ولا ترهق نفسك أكثر من اللازم ولا مبكّراً جدّاً. خذ الأمور ببطء وتذكّر المثل القديم: «السلامة خير من الندم»."
       }
      ],
      "questions": [
       {
        "q": "What did Julie do last year?",
        "o": [
         "She started rock climbing",
         "She started swimming",
         "She started football training"
        ],
        "a": 0
       },
       {
        "tf": true,
        "q": "Dr Blake says swimming is the safest activity."
       },
       {
        "q": "What happened to Jamie when he trained after the flu?",
        "o": [
         "He collapsed",
         "He won the match",
         "He fell asleep"
        ],
        "a": 0
       },
       {
        "tf": false,
        "q": "Dr Blake thinks the coach was wrong to send Jamie home.",
        "why": "He says the coach was right and Jamie was wrong."
       },
       {
        "q": "What does 'Better safe than sorry' mean?",
        "o": [
         "It is better to be careful than to regret later",
         "It is better to be fast than slow",
         "It is better to be sorry than safe"
        ],
        "a": 0
       }
      ]
     },
     "rules": [
      {
       "title": "Comparatives, superlatives and (not) as … as",
       "titleAr": "المقارنة والتفضيل و(not) as … as",
       "explain": "نقارن <b>الصفات القصيرة</b> بـ <b>-er / -est</b> (fit → fitter → the fittest) و<b>الصفات الطويلة</b> بـ <b>more / most</b> (important → more important → the most important). ونقارن <b>الأفعال</b> بأحوال الحال: <b>more quickly / the most quickly</b>، أمّا الأحوال التي بلا -ly (fast, hard, early, late, well) فتتصرّف كالصفات: faster, the fastest. وأشكال <b>better / best</b> للصفة good وللحال well. ونقول <b>(not) as … as</b> للمساواة أو عدمها (She didn't run as fast as Sameera).",
       "form": "short adj + er / est  ·  more / most + long adj or adverb  ·  (not) as + adj / adv + as",
       "examples": [
        {
         "en": "He's usually **the fittest** boy in the team.",
         "ar": "التفضيل مع صفة قصيرة"
        },
        {
         "en": "The **most important** match of the year is on Saturday.",
         "ar": "التفضيل مع صفة طويلة"
        },
        {
         "en": "You should take things **more slowly**.",
         "ar": "مقارنة مع حال"
        },
        {
         "en": "I am **much better** than I was.",
         "ar": "الصيغة الشاذّة better"
        },
        {
         "en": "You are **not as strong as** you think you are.",
         "ar": "عدم المساواة"
        }
       ],
       "questions": [
        {
         "q": "Jamie is ___ boy in the team.",
         "o": [
          "the fit",
          "the fittest",
          "more fit"
         ],
         "a": 1
        },
        {
         "q": "You should take things ___.",
         "o": [
          "more slowly",
          "slowlier",
          "most slowly"
         ],
         "a": 0
        },
        {
         "q": "Fuad doesn't feel ___ sick as Yasser.",
         "o": [
          "more",
          "as",
          "than"
         ],
         "a": 1,
         "why": "(not) as … as"
        },
        {
         "q": "Lana ran even ___ than Sameera.",
         "o": [
          "fast",
          "faster",
          "fastest"
         ],
         "a": 1
        },
        {
         "type": "type",
         "q": "I'm ___ than I was last week. (good)",
         "a": [
          "better"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «لستَ قويّاً كما تظنّ»",
         "words": [
          "You",
          "are",
          "not",
          "as",
          "strong",
          "as",
          "you",
          "think."
         ]
        }
       ]
      },
      {
       "title": "too and (not) enough",
       "titleAr": "too و(not) enough",
       "explain": "نستعمل <b>too + صفة / حال</b> حين يكون الشيء <b>أكثر</b> من المطلوب (too dangerous = خطِر أكثر من اللازم)، و<b>not + صفة / حال + enough</b> حين يكون <b>أقلّ</b> من المطلوب (not fit enough = غير لائق بما يكفي). ويمكن أن نضيف <b>for + اسم / ضمير</b> أو <b>to + فعل</b>: too weak <b>to do</b> sports.",
       "form": "too + adj / adv  ·  not + adj / adv + enough  ·  … (for someone) (to + V1)",
       "examples": [
        {
         "en": "Climbing is **too dangerous** for you.",
         "ar": "أكثر من اللازم"
        },
        {
         "en": "Your body was **too weak to do** sports.",
         "ar": "أضعف من أن يمارس"
        },
        {
         "en": "I have **not been active enough**.",
         "ar": "أقلّ من المطلوب"
        },
        {
         "en": "I was **not fit enough to train**.",
         "ar": "غير لائق بما يكفي"
        },
        {
         "en": "Her shoes are **too large**. They aren't **small enough**.",
         "ar": "too مقابل not enough"
        }
       ],
       "questions": [
        {
         "q": "Don't push yourself ___ hard.",
         "o": [
          "too",
          "enough",
          "very much"
         ],
         "a": 0
        },
        {
         "q": "I was not fit ___ to train.",
         "o": [
          "too",
          "enough",
          "so"
         ],
         "a": 1
        },
        {
         "q": "The ball is ___ fast for her to stop.",
         "o": [
          "enough",
          "too",
          "as"
         ],
         "a": 1
        },
        {
         "q": "He isn't good ___ to jump that high.",
         "o": [
          "too",
          "enough",
          "as"
         ],
         "a": 1
        },
        {
         "type": "type",
         "q": "My bag is ___ heavy to carry. (too)",
         "a": [
          "too"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «لم تنتظر وقتاً كافياً»",
         "words": [
          "You",
          "did",
          "not",
          "wait",
          "long",
          "enough."
         ]
        }
       ]
      },
      {
       "title": "Word formation: nouns and adjectives",
       "titleAr": "تكوين الكلمات: الأسماء والصفات",
       "explain": "من كلمةٍ واحدة نكوّن كلماتٍ من أنواعٍ أخرى: <b>safe</b> (صفة) ← <b>safety</b> (اسم)، و<b>danger</b> (اسم) ← <b>dangerous</b> (صفة)، و<b>health</b> (اسم) ← <b>healthy</b> (صفة)، و<b>act</b> (فعل / اسم) ← <b>active</b> (صفة) ← <b>activity</b> (اسم). نضع <b>الصفة</b> قبل الاسم أو بعد الفعل to be، و<b>الاسم</b> بعد the / a أو بعد for.",
       "form": "safe → safety  ·  danger → dangerous  ·  health → healthy  ·  act → active → activity",
       "examples": [
        {
         "en": "Swimming is the **safest** activity.",
         "ar": "صفة"
        },
        {
         "en": "For good **health** you need to eat real food.",
         "ar": "اسم"
        },
        {
         "en": "Rock climbing is more **dangerous** than a lot of other sports.",
         "ar": "صفة"
        },
        {
         "en": "There is always some **danger**.",
         "ar": "اسم"
        },
        {
         "en": "Choose from various **activities**.",
         "ar": "اسم جمع"
        }
       ],
       "questions": [
        {
         "q": "It isn't ___ to eat just junk food.",
         "o": [
          "health",
          "healthy",
          "heal"
         ],
         "a": 1
        },
        {
         "q": "There is always some ___ in rock climbing.",
         "o": [
          "danger",
          "dangerous",
          "dangerously"
         ],
         "a": 0
        },
        {
         "q": "Dr Blake gave some important ___ rules.",
         "o": [
          "safe",
          "safety",
          "safely"
         ],
         "a": 1
        },
        {
         "q": "It is important to be ___ every day.",
         "o": [
          "activity",
          "act",
          "active"
         ],
         "a": 2
        },
        {
         "type": "type",
         "q": "health → (adjective) ___",
         "a": [
          "healthy"
         ]
        },
        {
         "type": "type",
         "q": "danger → (adjective) ___",
         "a": [
          "dangerous"
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"pulse\" means:",
       "o": [
        "النبض",
        "الأرض",
        "القلب"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"injury\" means:",
       "o": [
        "حمّى",
        "إصابة",
        "حكيم"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Swimming is the safest activity, according to Dr Blake.",
       "lv": "easy"
      },
      {
       "q": "\"sensible\" means:",
       "o": [
        "عاقل / حكيم",
        "خفيف",
        "منقطع النَّفَس"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "tf": false,
       "q": "Jamie's coach was wrong to send him home.",
       "why": "The coach was right.",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "sweat",
         "يتعرّق"
        ],
        [
         "cover",
         "يغطّي"
        ],
        [
         "gentle",
         "لطيف / خفيف"
        ],
        [
         "fever",
         "حمّى"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "Jamie is the ___ boy in the team.",
       "o": [
        "fit",
        "fitter",
        "fittest"
       ],
       "a": 2,
       "lv": "medium"
      },
      {
       "q": "Climbing is ___ dangerous for you.",
       "o": [
        "enough",
        "too",
        "as"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "The opposite of 'dangerous' is ___.",
       "o": [
        "safe",
        "heavy",
        "weak"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "She didn't run as fast ___ Sameera.",
       "a": [
        "as"
       ],
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "I'm not fit ___ to play. (not enough)",
       "a": [
        "enough"
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "He ran the fastest of all.",
        "He ran the most fast of all.",
        "He ran fastest than all."
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "Your",
        "body",
        "was",
        "too",
        "weak",
        "to",
        "do",
        "sports."
       ],
       "lv": "hard"
      },
      {
       "q": "Why did Jamie collapse?",
       "o": [
        "He trained too hard after the flu",
        "He ate too much",
        "He was too cold"
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "For good ___ you need real food. (health / healthy)",
       "a": [
        "health"
       ],
       "lv": "hard"
      },
      {
       "q": "Which is the best advice?",
       "o": [
        "Be sensible and don't push yourself too hard",
        "Always push yourself harder",
        "Never warm up"
       ],
       "a": 0,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "4": {
   "title": "قائد عظيم",
   "titleEn": "A great leader",
   "lessons": [
    {
     "id": "4-1",
     "title": "A great leader",
     "titleAr": "قائد عظيم",
     "vocab": [
      {
       "en": "anyway",
       "ar": "على أيّ حال",
       "em": "🔁",
       "ex": "Anyway, the book reminded me of a TV documentary.",
       "exAr": "على أيّ حال، فقد ذكّرني الكتاب بفيلم وثائقي."
      },
      {
       "en": "as well as",
       "ar": "بالإضافة إلى",
       "em": "➕",
       "ex": "You have to think about personal qualities, as well as things that people did.",
       "exAr": "عليك أن تفكّر في الصفات الشخصية بالإضافة إلى ما فعله الناس."
      },
      {
       "en": "behave",
       "ar": "يتصرّف / يسلك",
       "em": "🙂",
       "ex": "He tried to behave better than that.",
       "exAr": "حاول أن يتصرّف أفضل من ذلك."
      },
      {
       "en": "certainly",
       "ar": "بالتأكيد",
       "em": "✅",
       "ex": "He was certainly a great leader.",
       "exAr": "لقد كان بالتأكيد قائداً عظيماً."
      },
      {
       "en": "enemy",
       "ar": "عدوّ",
       "em": "⚔",
       "ex": "He tried to be fair and generous to everyone, even his enemies.",
       "exAr": "حاول أن يكون عادلاً وكريماً مع الجميع حتى أعدائه."
      },
      {
       "en": "fair",
       "ar": "عادل",
       "em": "⚖",
       "ex": "Let's be fair and give everyone the same number of biscuits.",
       "exAr": "لنكن عادلين ونعطِ كلّ واحدٍ العدد نفسه من البسكويت."
      },
      {
       "en": "get on (a bus)",
       "ar": "يركب (الحافلة)",
       "em": "🚌",
       "ex": "Then Waleed got on, too.",
       "exAr": "ثمّ ركب وليد أيضاً."
      },
      {
       "en": "leader",
       "ar": "قائد",
       "em": "👑",
       "ex": "Salah Al-Din: a leader ahead of his time.",
       "exAr": "صلاح الدين: قائد سبق زمانه."
      },
      {
       "en": "remind",
       "ar": "يذكّر",
       "em": "💡",
       "ex": "The book reminded me: I saw a TV documentary about him.",
       "exAr": "ذكّرني الكتاب بأنّني شاهدتُ فيلماً وثائقياً عنه."
      },
      {
       "en": "ruler",
       "ar": "حاكم",
       "em": "🏰",
       "ex": "Alexander the Great became the ruler of large parts of Asia.",
       "exAr": "أصبح الإسكندر الأكبر حاكماً لأجزاء كبيرة من آسيا."
      },
      {
       "en": "battle",
       "ar": "معركة",
       "em": "🛡",
       "ex": "He defeated them at the Battle of Hittin.",
       "exAr": "هزمهم في معركة حطّين."
      },
      {
       "en": "defeat",
       "ar": "يهزم",
       "em": "🏆",
       "ex": "The Muslims defeated the crusaders.",
       "exAr": "هزم المسلمون الصليبيين."
      },
      {
       "en": "peace",
       "ar": "سلام",
       "em": "🕊",
       "ex": "They made peace in 1192.",
       "exAr": "عقدا السلام عام 1192."
      },
      {
       "en": "prophet",
       "ar": "نبيّ",
       "em": "🌙",
       "ex": "He believed in God and the Prophet.",
       "exAr": "كان يؤمن بالله والنبيّ."
      },
      {
       "en": "respect",
       "ar": "يحترم",
       "em": "🤝",
       "ex": "They respected each other greatly.",
       "exAr": "كانا يحترم كلٌّ منهما الآخر كثيراً."
      },
      {
       "en": "free",
       "ar": "يحرّر",
       "em": "🔓",
       "ex": "He started preparing to free Jerusalem from them.",
       "exAr": "بدأ يستعدّ لتحرير القدس منهم."
      }
     ],
     "reading": {
      "title": "Salah Al-Din (1138 – 1193): a leader ahead of his time",
      "paras": [
       {
        "en": "After Salah Al-Din had brought together large parts of the Muslim World, he turned to Jerusalem. The city had been in crusader hands all his life, and from 1182 he started preparing to free it from them. As a strong believer in God and the Prophet (pbuh), he believed that he must do this.",
        "ar": "بعد أن وحّد صلاح الدين أجزاء كبيرة من العالم الإسلامي اتّجه إلى القدس. كانت المدينة في أيدي الصليبيين طوال حياته، ومنذ عام 1182 بدأ يستعدّ لتحريرها منهم. وبوصفه مؤمناً قويّ الإيمان بالله والنبيّ (صلّى الله عليه وسلّم) كان يؤمن بأنّ عليه أن يفعل ذلك."
       },
       {
        "en": "He prepared well, and in summer 1187, he defeated them at the Battle of Hittin. Weeks later, Jerusalem fell. For Muslims everywhere, this was a great moment. It was the opposite in Europe, and a new crusade began in 1189. But things went badly for the crusaders: by summer 1192, most had died or left Palestine.",
        "ar": "أحسن الاستعداد، وفي صيف 1187 هزمهم في معركة حطّين. وبعد أسابيع سقطت القدس. كانت تلك لحظة عظيمة للمسلمين في كلّ مكان، أمّا في أوروبا فكان الأمر على العكس، وبدأت حملة صليبية جديدة عام 1189. لكنّ الأمور سارت بشكل سيّئ للصليبيين: فبحلول صيف 1192 كان معظمهم قد ماتوا أو غادروا فلسطين."
       },
       {
        "en": "Only 2,000 men under King Richard of England turned east from the Mediterranean to attack Jerusalem. Then Richard became sick, and this has given us a famous story. Salah Al-Din did not attack, and instead, he sent Richard fruit, snow to make cool water, and even his personal doctor.",
        "ar": "لم يتّجه شرقاً من البحر المتوسّط لمهاجمة القدس سوى ألفي رجل بقيادة الملك ريتشارد ملك إنجلترا. ثمّ مرض ريتشارد، وقد أعطانا هذا قصة مشهورة. لم يهاجم صلاح الدين، بل أرسل إلى ريتشارد فاكهة وثلجاً لتبريد الماء بل وطبيبه الخاصّ."
       },
       {
        "en": "Stories like this show a leader who behaved fairly and generously, as well as one who was brave and intelligent. They show us a leader who was ahead of his time. Salah Al-Din and Richard never met, but they respected each other greatly, and they made peace in 1192. Jerusalem remained in Muslim hands, but people of both religions could travel there freely. This was almost Salah Al-Din's last important act. He died in Damascus in 1193.",
        "ar": "تُظهر قصص كهذه قائداً تصرّف بعدل وكرم، وكان شجاعاً وذكياً أيضاً. وتُظهر لنا قائداً سبق زمانه. لم يلتقِ صلاح الدين وريتشارد قطّ لكنّهما احترم كلٌّ منهما الآخر كثيراً وعقدا السلام عام 1192. بقيت القدس في أيدي المسلمين، لكنّ أتباع الديانتين استطاعوا السفر إليها بحرّية. كان هذا من آخر أعمال صلاح الدين المهمّة تقريباً. وتوفّي في دمشق عام 1193."
       },
       {
        "en": "Today, in another dangerous age, we must hope that there will soon be peace again, and that Jerusalem will again be open to all.",
        "ar": "واليوم، في عصر خطِر آخر، يجب أن نأمل أن يعمّ السلام قريباً من جديد وأن تكون القدس مفتوحة للجميع مرّة أخرى."
       }
      ],
      "questions": [
       {
        "q": "When did Salah Al-Din defeat the crusaders at the Battle of Hittin?",
        "o": [
         "In summer 1187",
         "In 1138",
         "In 1193"
        ],
        "a": 0
       },
       {
        "tf": true,
        "q": "Jerusalem had been in crusader hands all his life."
       },
       {
        "q": "What did Salah Al-Din send to King Richard when he was sick?",
        "o": [
         "Fruit, snow and his doctor",
         "An army",
         "Gold and swords"
        ],
        "a": 0
       },
       {
        "tf": false,
        "q": "Salah Al-Din and Richard met many times.",
        "why": "They never met."
       },
       {
        "q": "Where did Salah Al-Din die?",
        "o": [
         "In Damascus",
         "In Cairo",
         "In London"
        ],
        "a": 0
       }
      ]
     },
     "rules": [
      {
       "title": "Past continuous and past simple",
       "titleAr": "الماضي المستمرّ والماضي البسيط",
       "explain": "نستعمل <b>الماضي المستمرّ</b> (was / were + V-ing) للحدث <b>الطويل</b> الذي كان مستمرّاً في الماضي، و<b>الماضي البسيط</b> للحدث <b>القصير</b> الذي وقع في أثنائه. نربطهما بـ <b>while</b> (مع المستمرّ) أو <b>when</b>: <b>While</b> I was looking at some books, I <b>noticed</b> one about Saladin. وإذا بدأنا بالجملة الفرعية وضعنا <b>فاصلة</b>.",
       "form": "was / were + V-ing   ·   While + past continuous, past simple   ·   past simple + while + past continuous",
       "examples": [
        {
         "en": "Jamie **was taking** the bus to school.",
         "ar": "حدث مستمرّ في الماضي"
        },
        {
         "en": "At that time, Jamie **was getting** some books.",
         "ar": "في وقتٍ محدّد في الماضي"
        },
        {
         "en": "While I **was looking** at some books, I **noticed** one.",
         "ar": "طويل ثمّ قصير"
        },
        {
         "en": "Waleed **tried** to call while Jamie **was getting** some books.",
         "ar": "قصير ثمّ طويل"
        },
        {
         "en": "In those days, people **were killing** each other all the time.",
         "ar": "عادة مستمرّة في الماضي"
        }
       ],
       "questions": [
        {
         "q": "Yesterday morning, Jamie ___ the bus to school.",
         "o": [
          "was taking",
          "took",
          "is taking"
         ],
         "a": 0
        },
        {
         "q": "While I ___ at some books, I noticed one about Saladin.",
         "o": [
          "looked",
          "was looking",
          "am looking"
         ],
         "a": 1
        },
        {
         "q": "Waleed called at 7:00. At that time, Jamie ___ some books.",
         "o": [
          "got",
          "was getting",
          "has got"
         ],
         "a": 1
        },
        {
         "q": "Waleed tried to call ___ Jamie was getting some books.",
         "o": [
          "while",
          "after",
          "until"
         ],
         "a": 0
        },
        {
         "type": "type",
         "q": "What ___ you doing at eight o'clock last night? (were)",
         "a": [
          "were"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «بينما كنتُ أنظر إلى الكتب لاحظتُ كتاباً»",
         "words": [
          "While",
          "I",
          "was",
          "looking",
          "at",
          "books,",
          "I",
          "noticed",
          "one."
         ]
        }
       ]
      },
      {
       "title": "Past perfect",
       "titleAr": "الماضي التامّ",
       "explain": "نستعمل <b>الماضي التامّ</b> (<b>had + V3</b>) لنؤكّد أنّ حدثاً وقع <b>قبل</b> وقتٍ أو حدثٍ آخر في الماضي. نربط بـ <b>after</b> و<b>before</b> و<b>as soon as</b> و<b>until</b>: <b>After</b> Salah Al-Din <b>had brought together</b> large parts of the Muslim World, he <b>turned</b> to Jerusalem. الحدث الأسبق بالماضي التامّ والأحدث بالماضي البسيط، ونضع فاصلة إذا بدأنا بالحدث الأسبق.",
       "form": "had (not) + V3   ·   After + past perfect, past simple   ·   By + time, past perfect",
       "examples": [
        {
         "en": "By summer 1192, most **had died** or left Palestine.",
         "ar": "قبل وقتٍ محدّد"
        },
        {
         "en": "After Salah Al-Din **had brought together** large parts of the Muslim World, he **turned** to Jerusalem.",
         "ar": "أسبق ثمّ أحدث"
        },
        {
         "en": "Jerusalem fell after he **had defeated** them.",
         "ar": "الأحدث أولاً في الجملة"
        },
        {
         "en": "I looked for my passport, but I **had left** it at home.",
         "ar": "سبب الحدث"
        },
        {
         "en": "Someone **had brought** it back ten minutes earlier.",
         "ar": "قبل عشر دقائق"
        }
       ],
       "questions": [
        {
         "q": "By summer 1192, most crusaders ___ died or left.",
         "o": [
          "had",
          "have",
          "were"
         ],
         "a": 0
        },
        {
         "q": "After he ___ the battle, he took Jerusalem.",
         "o": [
          "won",
          "had won",
          "was winning"
         ],
         "a": 1
        },
        {
         "q": "I looked for my passport, but I ___ it at home.",
         "o": [
          "left",
          "had left",
          "was leaving"
         ],
         "a": 1
        },
        {
         "q": "Jamie didn't remember the book until he ___ the park.",
         "o": [
          "had left",
          "has left",
          "leaves"
         ],
         "a": 0
        },
        {
         "type": "type",
         "q": "The book ___ gone. (had)",
         "a": [
          "had"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «كان قد أحضرها شخص ما قبل عشر دقائق»",
         "words": [
          "Someone",
          "had",
          "brought",
          "it",
          "back",
          "ten",
          "minutes",
          "earlier."
         ]
        }
       ]
      },
      {
       "title": "Word formation",
       "titleAr": "تكوين الكلمات",
       "explain": "من الفعل نكوّن الاسم الذي يدلّ على الشخص بإضافة <b>-er</b>: <b>believe → believer</b> (مؤمن)، <b>crusade → crusader</b> (صليبي). ومن الصفة نكوّن الحال بإضافة <b>-ly</b>: <b>free → freely</b>. ونستعمل <b>free</b> فعلاً بمعنى يحرّر، وصفةً بمعنى حرّ.",
       "form": "believe → believer  ·  crusade → crusader  ·  free (v / adj) → freely (adv)",
       "examples": [
        {
         "en": "As a strong **believer** in God, he did this.",
         "ar": "اسم الشخص"
        },
        {
         "en": "The **crusaders** wanted to take Jerusalem.",
         "ar": "الصليبيون"
        },
        {
         "en": "People of both religions could travel there **freely**.",
         "ar": "حال"
        },
        {
         "en": "He wanted to **free** Jerusalem.",
         "ar": "فعل"
        },
        {
         "en": "He behaved **fairly** and **generously**.",
         "ar": "حال من صفة"
        }
       ],
       "questions": [
        {
         "q": "A person who believes in God is a ___.",
         "o": [
          "believer",
          "believe",
          "belief"
         ],
         "a": 0
        },
        {
         "q": "The ___ wanted to take Jerusalem from the Muslims.",
         "o": [
          "crusaders",
          "crusade",
          "crusading"
         ],
         "a": 0
        },
        {
         "q": "People could travel there ___.",
         "o": [
          "free",
          "freely",
          "freedom"
         ],
         "a": 1
        },
        {
         "q": "He behaved ___ to everyone. (fair)",
         "o": [
          "fair",
          "fairly",
          "fairness"
         ],
         "a": 1
        },
        {
         "type": "type",
         "q": "crusade → (person) ___",
         "a": [
          "crusader"
         ]
        },
        {
         "type": "type",
         "q": "free → (adverb) ___",
         "a": [
          "freely"
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"enemy\" means:",
       "o": [
        "عدوّ",
        "قائد",
        "سلام"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"peace\" means:",
       "o": [
        "معركة",
        "سلام",
        "نبيّ"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Salah Al-Din died in Damascus in 1193.",
       "lv": "easy"
      },
      {
       "q": "\"defeat\" means:",
       "o": [
        "يهزم",
        "يذكّر",
        "يحترم"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "tf": false,
       "q": "Salah Al-Din and King Richard became good friends who met often.",
       "why": "They never met.",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "fair",
         "عادل"
        ],
        [
         "ruler",
         "حاكم"
        ],
        [
         "remind",
         "يذكّر"
        ],
        [
         "battle",
         "معركة"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "While I ___ some books, I noticed one about Saladin.",
       "o": [
        "looked at",
        "was looking at",
        "had looked at"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "By summer 1192, most crusaders ___ the land.",
       "o": [
        "had left",
        "was leaving",
        "leave"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "The opposite of 'friend' is ___.",
       "o": [
        "enemy",
        "leader",
        "prophet"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "People of both religions could travel there ___. (free)",
       "a": [
        "freely"
       ],
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "After he ___ won the battle, he took Jerusalem. (had)",
       "a": [
        "had"
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "Jerusalem fell after he had defeated them.",
        "Jerusalem fell after he has defeated them.",
        "Jerusalem fell after he was defeat them."
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "He",
        "had",
        "left",
        "it",
        "at",
        "home."
       ],
       "lv": "hard"
      },
      {
       "q": "Why did Salah Al-Din send his doctor to Richard?",
       "o": [
        "Richard had become sick",
        "Richard asked for gold",
        "Richard was his brother"
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "Waleed tried to call ___ Jamie was getting some books. (while)",
       "a": [
        "while"
       ],
       "lv": "hard"
      },
      {
       "q": "What does 'a leader ahead of his time' mean?",
       "o": [
        "He behaved better than most people of his age",
        "He was always late",
        "He lived a long life"
       ],
       "a": 0,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "5": {
   "title": "يوم في إسطنبول",
   "titleEn": "A day in Istanbul",
   "lessons": [
    {
     "id": "5-1",
     "title": "A day in Istanbul",
     "titleAr": "يوم في إسطنبول",
     "vocab": [
      {
       "en": "a few",
       "ar": "بضعة / قليل من",
       "em": "🔢",
       "ex": "We only have time for a few cakes.",
       "exAr": "لدينا وقت لبضع قطع من الكعك فقط."
      },
      {
       "en": "across",
       "ar": "عبر / إلى الجهة الأخرى من",
       "em": "↔️",
       "ex": "Go across the road and turn right.",
       "exAr": "اعبر الطريق ثم انعطف يميناً."
      },
      {
       "en": "coin",
       "ar": "قطعة نقدية معدنية",
       "em": "🪙",
       "ex": "I only have a few coins.",
       "exAr": "ليس معي إلا بضع قطع نقدية."
      },
      {
       "en": "crossroads",
       "ar": "مفترق طرق",
       "em": "🚦",
       "ex": "Then turn left at the crossroads.",
       "exAr": "ثم انعطف يساراً عند مفترق الطرق."
      },
      {
       "en": "customer",
       "ar": "زبون",
       "em": "🧑‍💼",
       "ex": "There aren't many customers, so it'll be quick.",
       "exAr": "لا يوجد زبائن كثيرون، لذلك سيكون الأمر سريعاً."
      },
      {
       "en": "purse",
       "ar": "محفظة نقود",
       "em": "👛",
       "ex": "Hadeel took out her purse to pay the bill.",
       "exAr": "أخرجت هديل محفظتها لتدفع الحساب."
      },
      {
       "en": "take out",
       "ar": "يُخرج",
       "em": "📤",
       "ex": "Hadeel has taken out some money.",
       "exAr": "أخرجت هديل بعض النقود."
      },
      {
       "en": "change",
       "ar": "الباقي / الفكّة",
       "em": "💱",
       "ex": "And here's your change. Fifteen lira.",
       "exAr": "وهذا هو الباقي: خمس عشرة ليرة."
      },
      {
       "en": "continent",
       "ar": "قارّة",
       "em": "🌍",
       "ex": "Istanbul is a city on two continents.",
       "exAr": "إسطنبول مدينة تقع على قارّتين."
      },
      {
       "en": "empire",
       "ar": "إمبراطورية",
       "em": "🏰",
       "ex": "The Ottoman Empire reached across three continents.",
       "exAr": "امتدّت الإمبراطورية العثمانية عبر ثلاث قارّات."
      },
      {
       "en": "government",
       "ar": "حكومة",
       "em": "🏛",
       "ex": "The Topkapi Palace was the centre of its government.",
       "exAr": "كان قصر توبكابي مركز حكومتها."
      },
      {
       "en": "jewellery",
       "ar": "مجوهرات",
       "em": "💍",
       "ex": "The museum has beautiful jewellery.",
       "exAr": "في المتحف مجوهرات جميلة."
      },
      {
       "en": "powerful",
       "ar": "قويّ / ذو نفوذ",
       "em": "💪",
       "ex": "Byzantium grew rich and powerful.",
       "exAr": "أصبحت بيزنطة غنيّة وقويّة."
      },
      {
       "en": "reach",
       "ar": "يصل إلى / يمتدّ إلى",
       "em": "🎯",
       "ex": "The empire reached across large parts of Europe, Asia and North Africa.",
       "exAr": "امتدّت الإمبراطورية عبر أجزاء كبيرة من أوروبا وآسيا وشمال أفريقيا."
      },
      {
       "en": "sultan",
       "ar": "سلطان",
       "em": "👑",
       "ex": "The sultans lived in the Topkapi Palace.",
       "exAr": "كان السلاطين يعيشون في قصر توبكابي."
      },
      {
       "en": "trade",
       "ar": "تجارة",
       "em": "🛒",
       "ex": "East-West trade routes passed through the city.",
       "exAr": "مرّت طرق التجارة بين الشرق والغرب عبر المدينة."
      }
     ],
     "reading": {
      "title": "Istanbul",
      "paras": [
       {
        "en": "Istanbul is a city on two continents, with one foot in Asia and the other in Europe. It is not a capital city now: the capital of modern Turkey is Ankara. However, it used to be the capital of empires and is still a great world city today.",
        "ar": "إسطنبول مدينة على قارّتين، قدمٌ في آسيا وأخرى في أوروبا. وهي ليست عاصمة الآن، فعاصمة تركيا الحديثة هي أنقرة. غير أنّها كانت عاصمة لإمبراطوريات، وما زالت مدينة عالمية عظيمة اليوم."
       },
       {
        "en": "Its name was Byzantium for 1,000 years, and it grew rich and powerful because East-West trade routes passed through the city – along and across the Bosphorus. Then the Romans made it the capital of their eastern empire, and for the next 1,000 years people called it Constantinople. Then Constantinople fell to the Muslim Ottomans. This time, the city's name changed to Istanbul, and it became the heart of a huge empire that reached across large parts of Europe, Asia and North Africa.",
        "ar": "كان اسمها بيزنطة ألف سنة، وأصبحت غنيّة وقويّة لأنّ طرق التجارة بين الشرق والغرب كانت تمرّ بالمدينة، على طول البوسفور وعبره. ثم جعلها الرومان عاصمة إمبراطوريتهم الشرقية، وسمّاها الناس القسطنطينية ألف سنة أخرى. ثم سقطت القسطنطينية بيد العثمانيين المسلمين، وتغيّر اسم المدينة هذه المرّة إلى إسطنبول، وصارت قلب إمبراطورية ضخمة امتدّت عبر أجزاء كبيرة من أوروبا وآسيا وشمال أفريقيا."
       },
       {
        "en": "The Topkapi Palace was the centre of its government. Here, the sultans lived and thousands more worked to rule the Ottoman Empire. Today, it is a huge museum with beautiful gardens and hundreds of rooms. These are full of fantastic collections of pictures, maps, jewellery and many other fascinating things.",
        "ar": "كان قصر توبكابي مركز حكومتها. هنا عاش السلاطين، وعمل آلاف آخرون لحكم الإمبراطورية العثمانية. واليوم هو متحف ضخم فيه حدائق جميلة ومئات الغرف، وهي مليئة بمجموعات رائعة من الصور والخرائط والمجوهرات وأشياء أخرى كثيرة مدهشة."
       },
       {
        "en": "When you visit Topkapi, you must also see its famous ancient neighbours – the Blue Mosque and Aya Sofya. But there is much, much more to do: this is an exciting modern city of 14 million people. East and West meet in its busy streets, markets and shops. And its 12 million visitors a year never forget their time here. Istanbul is a very special place.",
        "ar": "عندما تزور توبكابي يجب أن ترى أيضاً جيرانه القدماء المشهورين: الجامع الأزرق وآيا صوفيا. لكنّ هناك أشياء أكثر بكثير يمكن فعلها، فهذه مدينة حديثة مثيرة يسكنها ١٤ مليون شخص. يلتقي الشرق والغرب في شوارعها وأسواقها ومحلّاتها المزدحمة. ويبلغ عدد زوّارها ١٢ مليون زائر في السنة، لا ينسون وقتهم فيها أبداً. إسطنبول مكان مميّز جدّاً."
       }
      ],
      "questions": [
       {
        "q": "What is the capital of modern Turkey?",
        "o": [
         "Istanbul",
         "Ankara",
         "Constantinople"
        ],
        "a": 1
       },
       {
        "q": "Why did Byzantium grow rich and powerful?",
        "o": [
         "Because East-West trade routes passed through it",
         "Because the Ottomans lived there",
         "Because it was the capital of Turkey"
        ],
        "a": 0
       },
       {
        "tf": true,
        "q": "The Ottoman Empire reached across three continents."
       },
       {
        "tf": false,
        "q": "The Topkapi Palace was just the home of the sultans.",
        "why": "It was the centre of the government, and thousands of people worked there."
       },
       {
        "q": "What is the Topkapi Palace today?",
        "o": [
         "A coffee shop",
         "A huge museum",
         "A government office"
        ],
        "a": 1
       }
      ]
     },
     "rules": [
      {
       "title": "a lot of, much, many, a little, a few",
       "titleAr": "التعبير عن الكمّيّة: a lot of وmuch وmany وa little وa few",
       "explain": "نستخدم <b>a lot of</b> و<b>lots of</b> في الجمل المثبتة مع الأسماء <b>المعدودة</b> و<b>غير المعدودة</b> معاً. وفي النفي والسؤال نستخدم <b>many</b> مع المعدود (cakes, customers) و<b>much</b> مع غير المعدود (money, juice). وبدل not many نقول <b>(only) a few</b> مع المعدود، وبدل not much نقول <b>(only) a little</b> مع غير المعدود.",
       "form": "معدود: many / a few / a lot of    ·    غير معدود: much / a little / a lot of",
       "examples": [
        {
         "en": "Let's order **a lot of** cakes!",
         "ar": "معدود: كثير"
        },
        {
         "en": "There are only **a few** customers.",
         "ar": "معدود: قليل"
        },
        {
         "en": "I do not have **much** money.",
         "ar": "غير معدود: نفي"
        },
        {
         "en": "I only have **a little** money.",
         "ar": "غير معدود: قليل"
        }
       ],
       "questions": [
        {
         "q": "There aren't ___ customers in the coffee shop.",
         "o": [
          "much",
          "many",
          "a little"
         ],
         "a": 1,
         "why": "customers اسم معدود: many"
        },
        {
         "q": "How ___ money do you have?",
         "o": [
          "many",
          "a few",
          "much"
         ],
         "a": 2,
         "why": "money غير معدود: much"
        },
        {
         "q": "I only have ___ coins.",
         "o": [
          "a few",
          "a little",
          "much"
         ],
         "a": 0,
         "why": "coins معدود: a few"
        },
        {
         "type": "type",
         "q": "I only have ___ apple juice. (a few / a little)",
         "a": [
          "a little"
         ],
         "why": "juice غير معدود: a little"
        },
        {
         "type": "type",
         "q": "How ___ cakes do they want? (much / many)",
         "a": [
          "many"
         ],
         "why": "cakes معدود: many"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «هديل لديها نقود كثيرة»",
         "words": [
          "Hadeel",
          "has",
          "a",
          "lot",
          "of",
          "money."
         ]
        }
       ]
      },
      {
       "title": "a / an and the",
       "titleAr": "أداتا النكرة والمعرفة: a / an وthe",
       "explain": "نستخدم <b>a / an</b> (أو <b>some</b> مع الجمع) عندما نبدأ الحديث عن شيء <b>جديد</b>. وعندما نشير إلى الشيء نفسه مرّة أخرى نستخدم <b>the</b>. ونستخدم <b>the</b> أيضاً عندما يوجد <b>شيء واحد فقط</b> من النوع (the sun, the moon) وفي كثير من أسماء الأماكن (the Blue Mosque, the Topkapi Palace).",
       "form": "شيء جديد: a / an / some    ·    شيء معروف أو وحيد: the",
       "examples": [
        {
         "en": "Istanbul is **a** city on two continents.",
         "ar": "شيء جديد"
        },
        {
         "en": "**The** Topkapi Palace was the centre of **the** government.",
         "ar": "شيء معروف / وحيد"
        },
        {
         "en": "I'd like **a** hat. I'd like **the** large one, please.",
         "ar": "جديد ثم معروف"
        },
        {
         "en": "We saw **the** Blue Mosque.",
         "ar": "اسم مكان"
        }
       ],
       "questions": [
        {
         "q": "We stopped at ___ coffee shop. ___ coffee shop was cool and nice.",
         "o": [
          "a / The",
          "the / A",
          "a / A"
         ],
         "a": 0,
         "why": "أول مرّة a، ثم the"
        },
        {
         "q": "___ sun rises in the east.",
         "o": [
          "A",
          "The",
          "An"
         ],
         "a": 1,
         "why": "شيء واحد فقط: the"
        },
        {
         "q": "I'd like ___ apple juice, please.",
         "o": [
          "a",
          "the",
          "an"
         ],
         "a": 2,
         "why": "apple تبدأ بحرف علّة: an"
        },
        {
         "type": "type",
         "q": "We visited ___ Blue Mosque. (a / the)",
         "a": [
          "the"
         ],
         "why": "اسم مكان وحيد: the"
        },
        {
         "type": "type",
         "q": "Istanbul is ___ exciting city. (a / an)",
         "a": [
          "an"
         ],
         "why": "exciting تبدأ بحرف علّة: an"
        },
        {
         "tf": false,
         "q": "We say: I visited a Topkapi Palace.",
         "why": "الصحيح: the Topkapi Palace (اسم مكان وحيد)"
        }
       ]
      },
      {
       "title": "Prepositions of direction",
       "titleAr": "حروف الجرّ لوصف الاتجاهات",
       "explain": "نستخدم حروف الجرّ لوصف الطريق: <b>across</b> (إلى الجهة الأخرى)، <b>along</b> (على امتداد)، <b>past</b> (متجاوزاً)، <b>through</b> (من خلال)، <b>over</b> (فوق/عبر)، <b>round</b> (حول)، <b>into</b> (إلى داخل)، <b>out of</b> (إلى خارج)، <b>to</b> (إلى). ونقول <b>go straight ahead</b> أي: امشِ إلى الأمام، و<b>turn left / right</b> أي: انعطف يساراً أو يميناً.",
       "form": "Go / Walk + across / along / past / through / over / round + المكان",
       "examples": [
        {
         "en": "**Go across** the road and **turn right**.",
         "ar": "اعبر الطريق"
        },
        {
         "en": "**Go past** the information centre.",
         "ar": "مرّ بجانب"
        },
        {
         "en": "**Walk through** the market.",
         "ar": "من خلال"
        },
        {
         "en": "**Go along** East Road.",
         "ar": "على امتداد"
        }
       ],
       "questions": [
        {
         "q": "Go ___ the road and turn right.",
         "o": [
          "through",
          "across",
          "into"
         ],
         "a": 1,
         "why": "across: إلى الجهة الأخرى"
        },
        {
         "q": "Go ___ the museum on your right.",
         "o": [
          "past",
          "into",
          "over"
         ],
         "a": 0,
         "why": "past: متجاوزاً"
        },
        {
         "q": "Walk ___ the market and you'll come out at the other end.",
         "o": [
          "along",
          "through",
          "across"
         ],
         "a": 1,
         "why": "through: من خلال"
        },
        {
         "type": "type",
         "q": "Go ___ East Road until you come to a roundabout. (along / past)",
         "a": [
          "along"
         ],
         "why": "along: على امتداد الشارع"
        },
        {
         "type": "type",
         "q": "Turn ___ at the crossroads. (left / ahead)",
         "a": [
          "left"
         ],
         "why": "نقول turn left / right"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «مرّ بجانب مركز المعلومات»",
         "words": [
          "Go",
          "past",
          "the",
          "information",
          "centre."
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"crossroads\" means:",
       "o": [
        "مفترق طرق",
        "محفظة نقود",
        "قارّة"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"sultan\" means:",
       "o": [
        "زبون",
        "تجارة",
        "سلطان"
       ],
       "a": 2,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Hadeel paid for the drinks and cakes.",
       "lv": "easy"
      },
      {
       "tf": false,
       "q": "Istanbul is the capital of modern Turkey.",
       "why": "عاصمة تركيا الحديثة هي أنقرة.",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "coin",
         "قطعة نقدية"
        ],
        [
         "customer",
         "زبون"
        ],
        [
         "empire",
         "إمبراطورية"
        ],
        [
         "jewellery",
         "مجوهرات"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "I only have ___ coins in my purse.",
       "o": [
        "a little",
        "a few",
        "much"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "How ___ juice do you want?",
       "o": [
        "many",
        "few",
        "much"
       ],
       "a": 2,
       "lv": "medium"
      },
      {
       "q": "Byzantium grew ___ because trade routes passed through it.",
       "o": [
        "powerful",
        "cheap",
        "empty"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "There are not ___ customers in the shop. (much / many)",
       "a": [
        "many"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "Istanbul is ___ city on two continents. (a / the)",
       "a": [
        "a"
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "Go",
        "across",
        "the",
        "road",
        "and",
        "turn",
        "right."
       ],
       "lv": "hard"
      },
      {
       "q": "Why did the city's name change to Istanbul?",
       "o": [
        "The Romans made it their capital",
        "The Muslim Ottomans took Constantinople",
        "The city moved to Asia"
       ],
       "a": 1,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "6": {
   "title": "قصص نجاح فلسطينية",
   "titleEn": "Palestinian success stories",
   "lessons": [
    {
     "id": "6-1",
     "title": "Palestinian success stories",
     "titleAr": "قصص نجاح فلسطينية",
     "vocab": [
      {
       "en": "expert",
       "ar": "خبير",
       "em": "🧑‍🏫",
       "ex": "A lot of teachers and other experts work together.",
       "exAr": "يعمل كثير من المعلّمين والخبراء الآخرين معاً."
      },
      {
       "en": "geography",
       "ar": "الجغرافيا",
       "em": "🗺",
       "ex": "This one is for geography, I guess.",
       "exAr": "أظنّ أنّ هذا كتاب الجغرافيا."
      },
      {
       "en": "identity",
       "ar": "هويّة",
       "em": "🪪",
       "ex": "School books are an important sign of our national identity.",
       "exAr": "الكتب المدرسية علامة مهمّة على هويّتنا الوطنية."
      },
      {
       "en": "independent",
       "ar": "مستقلّ",
       "em": "🕊",
       "ex": "They point towards our future as a free and independent country.",
       "exAr": "تشير نحو مستقبلنا بلداً حرّاً مستقلّاً."
      },
      {
       "en": "title",
       "ar": "عنوان",
       "em": "🏷",
       "ex": "I can't read the Arabic titles.",
       "exAr": "لا أستطيع قراءة العناوين العربية."
      },
      {
       "en": "towards",
       "ar": "نحو / باتجاه",
       "em": "➡️",
       "ex": "We're driving straight towards a big hole in the road.",
       "exAr": "نقود مباشرة نحو حفرة كبيرة في الطريق."
      },
      {
       "en": "whole",
       "ar": "كامل / كلّ",
       "em": "🌐",
       "ex": "Our books are produced for the whole country.",
       "exAr": "تُنتَج كتبنا للبلد كلّه."
      },
      {
       "en": "advantage",
       "ar": "ميزة",
       "em": "⭐",
       "ex": "Palestinian marble has several advantages.",
       "exAr": "للرخام الفلسطيني مزايا عدّة."
      },
      {
       "en": "by hand",
       "ar": "يدويّاً",
       "em": "✋",
       "ex": "In ancient times, everything was done by hand.",
       "exAr": "في العصور القديمة كان كلّ شيء يُنجَز يدويّاً."
      },
      {
       "en": "efficiently",
       "ar": "بكفاءة",
       "em": "⚙️",
       "ex": "Finished stone is produced very efficiently.",
       "exAr": "يُنتَج الحجر المصقول بكفاءة عالية."
      },
      {
       "en": "factory",
       "ar": "مصنع",
       "em": "🏭",
       "ex": "The stone is cut and finished in a factory.",
       "exAr": "يُقطَع الحجر ويُجهَّز في مصنع."
      },
      {
       "en": "industry",
       "ar": "صناعة",
       "em": "🏗",
       "ex": "The stone industry is very important to Palestine.",
       "exAr": "صناعة الحجر مهمّة جدّاً لفلسطين."
      },
      {
       "en": "marble",
       "ar": "رخام",
       "em": "🪨",
       "ex": "Palestine is also famous for its marble.",
       "exAr": "فلسطين مشهورة أيضاً برخامها."
      },
      {
       "en": "per cent",
       "ar": "بالمئة",
       "em": "💯",
       "ex": "Palestine produces 4.5 per cent of the world's building stone.",
       "exAr": "تنتج فلسطين ٤٫٥ بالمئة من حجر البناء في العالم."
      },
      {
       "en": "provide",
       "ar": "يوفّر",
       "em": "🤝",
       "ex": "The stone industry provides over 22,000 jobs.",
       "exAr": "توفّر صناعة الحجر أكثر من ٢٢٬٠٠٠ وظيفة."
      },
      {
       "en": "quarry",
       "ar": "محجر",
       "em": "⛏",
       "ex": "Over 60% of the quarries are near Hebron and Bethlehem.",
       "exAr": "أكثر من ٦٠٪ من المحاجر قرب الخليل وبيت لحم."
      }
     ],
     "reading": {
      "title": "Stone: an ancient industry with a great future",
      "paras": [
       {
        "en": "Some of the world's oldest cities were built in Palestine, and they were constructed with excellent stone. This building stone and also marble were cut by our ancestors from the Holy Land itself. Today, the stone industry remains very important: with its beautiful colours and excellent quality, Palestinian stone is often preferred by architects round the world.",
        "ar": "بُنيت بعض أقدم مدن العالم في فلسطين، وشُيّدت بحجر ممتاز. وقد قطع أجدادنا حجر البناء هذا والرخام أيضاً من أرض الأرض المقدّسة نفسها. واليوم ما زالت صناعة الحجر مهمّة جدّاً، فبفضل ألوانه الجميلة وجودته الممتازة كثيراً ما يفضّل المهندسون المعماريون في أنحاء العالم الحجر الفلسطيني."
       },
       {
        "en": "Stone was not always produced as efficiently as it is now. In ancient times, it was very difficult to cut stone. Everything was done by hand, and it was slow, hard work. Now, however, technology has come to the rescue, and finished stone is produced very efficiently.",
        "ar": "لم يكن الحجر يُنتَج دائماً بالكفاءة التي يُنتَج بها الآن. ففي العصور القديمة كان قطع الحجر صعباً جدّاً، وكان كلّ شيء يُنجَز يدويّاً، وكان العمل بطيئاً وشاقّاً. أمّا الآن فقد جاءت التكنولوجيا لتنقذ الموقف، وصار الحجر المصقول يُنتَج بكفاءة عالية."
       },
       {
        "en": "Over 60% (sixty per cent) of the 262 quarries are near Hebron and Bethlehem. The stone is then cut and finished by 15,000 workers in 618 factories, and many of these are also in the same area. However, quarries are found in other places, too, and there are factories everywhere. Together, they produce 4.5% (four point five per cent) of the world's building stone. They also make 450 million dollars a year for Palestine, and they provide over 22,000 jobs.",
        "ar": "أكثر من ٦٠٪ (ستين بالمئة) من المحاجر البالغ عددها ٢٦٢ محجراً تقع قرب الخليل وبيت لحم. ثم يُقطَع الحجر ويُجهَّز على يد ١٥٬٠٠٠ عامل في ٦١٨ مصنعاً، وكثير منها في المنطقة نفسها. ومع ذلك توجد المحاجر في أماكن أخرى أيضاً، والمصانع في كلّ مكان. وهي معاً تنتج ٤٫٥٪ (أربع فاصلة خمسة بالمئة) من حجر البناء في العالم، وتحقّق لفلسطين ٤٥٠ مليون دولار في السنة، وتوفّر أكثر من ٢٢٬٠٠٠ وظيفة."
       },
       {
        "en": "The world stone industry is growing at 9% a year. And with our natural advantages, we can raise Palestinian production even faster. But to do this, we need to learn more about different needs round the world. The industry is therefore studying world markets carefully. If it can continue to grow, it will bring Palestine a lot more jobs and money.",
        "ar": "تنمو صناعة الحجر في العالم بنسبة ٩٪ في السنة. ومع مزايانا الطبيعية نستطيع رفع الإنتاج الفلسطيني بسرعة أكبر. لكن لتحقيق ذلك علينا أن نعرف أكثر عن الاحتياجات المختلفة حول العالم، ولذلك تدرس الصناعة الأسواق العالمية بعناية. وإن استمرّت في النموّ فستجلب لفلسطين وظائف وأموالاً أكثر بكثير."
       }
      ],
      "questions": [
       {
        "q": "How were the oldest Palestinian cities built?",
        "o": [
         "With excellent stone",
         "With wood",
         "With glass"
        ],
        "a": 0
       },
       {
        "q": "How was stone cut in ancient times?",
        "o": [
         "By machines",
         "By hand",
         "By computers"
        ],
        "a": 1
       },
       {
        "tf": true,
        "q": "Most of the 262 quarries are near Hebron and Bethlehem."
       },
       {
        "q": "How many jobs does the stone industry provide?",
        "o": [
         "15,000",
         "618",
         "Over 22,000"
        ],
        "a": 2
       },
       {
        "tf": false,
        "q": "The world stone industry is not growing at the moment.",
        "why": "It is growing at 9% a year."
       }
      ]
     },
     "rules": [
      {
       "title": "The present simple passive",
       "titleAr": "المبني للمجهول في المضارع البسيط",
       "explain": "في الجملة <b>المعلومة (active)</b> نذكر من يقوم بالفعل أوّلاً: <i>Experts write books.</i> وفي <b>المبني للمجهول (passive)</b> يصبح ما يقع عليه الفعل هو المبتدأ: <i>Books are written.</i> نكوّن المضارع المبني للمجهول من <b>am / is / are + اسم المفعول (past participle)</b>. نستعمله حين لا يهمّنا الفاعل أو لا نعرفه، ولأوصاف العادات والإجراءات.",
       "form": "Subject (ما يقع عليه الفعل) + am / is / are + past participle",
       "examples": [
        {
         "en": "Experts write books. → Books **are written**.",
         "ar": "من active إلى passive"
        },
        {
         "en": "Teachers teach Spanish. → Spanish **is taught** at my school.",
         "ar": "مفرد: is"
        },
        {
         "en": "We send all children to school. → All children **are sent** to school.",
         "ar": "جمع: are"
        },
        {
         "en": "The design **is decided** by them.",
         "ar": "يقع عليه الفعل"
        }
       ],
       "questions": [
        {
         "q": "Books ___ for every grade.",
         "o": [
          "write",
          "are written",
          "is written"
         ],
         "a": 1,
         "why": "الجمع: are + past participle"
        },
        {
         "q": "Spanish ___ at my school.",
         "o": [
          "is taught",
          "are taught",
          "teaches"
         ],
         "a": 0,
         "why": "مفرد: is + past participle"
        },
        {
         "q": "All children ___ to school at the age of six.",
         "o": [
          "is sent",
          "are sent",
          "send"
         ],
         "a": 1,
         "why": "children جمع: are sent"
        },
        {
         "type": "type",
         "q": "Enough books ___ for every child. (produce)",
         "a": [
          "are produced"
         ],
         "why": "المضارع المبني للمجهول: are produced"
        },
        {
         "type": "type",
         "q": "Schools ___ in every town and village. (provide)",
         "a": [
          "are provided"
         ],
         "why": "are + provided"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «تُكتَب الكتب لكلّ صفّ»",
         "words": [
          "Books",
          "are",
          "written",
          "for",
          "every",
          "grade."
         ]
        }
       ]
      },
      {
       "title": "The past simple passive",
       "titleAr": "المبني للمجهول في الماضي البسيط",
       "explain": "نكوّن الماضي المبني للمجهول من <b>was / were + اسم المفعول (past participle)</b>: <b>was</b> مع المفرد و<b>were</b> مع الجمع. مثال: <i>People built the cities.</i> ← <i>The cities <b>were built</b> by people.</i> ونستعمله للحديث عن أحداث الماضي حين يهمّنا ما حدث أكثر من الفاعل.",
       "form": "Subject + was / were + past participle",
       "examples": [
        {
         "en": "The cities **were built** with stone.",
         "ar": "جمع: were"
        },
        {
         "en": "This stone **was cut** by our ancestors.",
         "ar": "مفرد: was"
        },
        {
         "en": "The book **was planned** five years ago.",
         "ar": "مفرد: was"
        },
        {
         "en": "Good stone **was found** in many parts of Palestine.",
         "ar": "غير معدود: was"
        }
       ],
       "questions": [
        {
         "q": "The cities ___ with stone.",
         "o": [
          "was built",
          "were built",
          "built"
         ],
         "a": 1,
         "why": "cities جمع: were built"
        },
        {
         "q": "This stone ___ by our ancestors.",
         "o": [
          "was cut",
          "were cut",
          "is cut"
         ],
         "a": 0,
         "why": "مفرد في الماضي: was cut"
        },
        {
         "q": "The new school ___ last year.",
         "o": [
          "was built",
          "were built",
          "is built"
         ],
         "a": 0,
         "why": "school مفرد: was built"
        },
        {
         "type": "type",
         "q": "The book ___ five years ago. (plan)",
         "a": [
          "was planned"
         ],
         "why": "was + planned"
        },
        {
         "type": "type",
         "q": "Two quarries ___ in that area. (start)",
         "a": [
          "were started"
         ],
         "why": "جمع: were started"
        },
        {
         "tf": false,
         "q": "The correct passive of «They found good stone» is «Good stone were found».",
         "why": "stone غير معدود، فنقول: Good stone was found."
        }
       ]
      },
      {
       "title": "by + agent",
       "titleAr": "by + الفاعل ومعاني by",
       "explain": "في المبني للمجهول نحتفظ بالفاعل باستعمال <b>by + agent</b> فقط حين يكون <b>معلومة مفيدة</b> (This stone was cut <b>by our ancestors</b>). وإذا كان الفاعل غير مهمّ أو معروفاً (people, they, someone) <b>نحذفه</b>: <i>Stone was needed to build towns.</i> وللكلمة <b>by</b> معانٍ أخرى: <b>by hand</b> (بالطريقة)، <b>by 3:00</b> (قبل موعد)، <b>by the window</b> (بجانب).",
       "form": "Passive  +  (by + agent)  ← فقط إن كان الفاعل مفيداً",
       "examples": [
        {
         "en": "This stone was cut **by our ancestors**.",
         "ar": "نذكر الفاعل: معلومة مفيدة"
        },
        {
         "en": "Stone was needed to build towns.",
         "ar": "نحذف الفاعل: people غير مهمّ"
        },
        {
         "en": "They cut the stone **by hand**.",
         "ar": "by = بالطريقة"
        },
        {
         "en": "We must finish the job **by 3:00**.",
         "ar": "by = قبل"
        }
       ],
       "questions": [
        {
         "q": "Palestinian stone is preferred ___ architects.",
         "o": [
          "by",
          "at",
          "to"
         ],
         "a": 0,
         "why": "by + agent: المهندسون هم الفاعل"
        },
        {
         "q": "In ancient times, stone was cut ___ hand.",
         "o": [
          "with",
          "by",
          "in"
         ],
         "a": 1,
         "why": "by hand = يدويّاً"
        },
        {
         "q": "We must finish the job ___ 3:00. (before 3:00)",
         "o": [
          "at",
          "on",
          "by"
         ],
         "a": 2,
         "why": "by = قبل موعد معيّن"
        },
        {
         "type": "type",
         "q": "A new school was built ___ the local community. (by / with)",
         "a": [
          "by"
         ],
         "why": "by + agent"
        },
        {
         "tf": false,
         "q": "In «Stone was needed to build towns», we must add «by people».",
         "why": "people غير مفيدة، لذلك نحذفها."
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «قُطع هذا الحجر على يد أجدادنا»",
         "words": [
          "This",
          "stone",
          "was",
          "cut",
          "by",
          "our",
          "ancestors."
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"quarry\" means:",
       "o": [
        "محجر",
        "مصنع",
        "رخام"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"advantage\" means:",
       "o": [
        "صناعة",
        "ميزة",
        "هويّة"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Palestinian stone is often preferred by architects round the world.",
       "lv": "easy"
      },
      {
       "tf": false,
       "q": "In ancient times, stone was cut by machines.",
       "why": "كان يُقطَع يدويّاً (by hand).",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "expert",
         "خبير"
        ],
        [
         "identity",
         "هويّة"
        ],
        [
         "factory",
         "مصنع"
        ],
        [
         "marble",
         "رخام"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "Books ___ for every grade in Palestine.",
       "o": [
        "are written",
        "is written",
        "write"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "The stone ___ by our ancestors.",
       "o": [
        "were cut",
        "was cut",
        "cut"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "The Palestinian stone industry provides over 22,000 ___.",
       "o": [
        "jobs",
        "quarries",
        "titles"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "Spanish ___ at my school. (teach)",
       "a": [
        "is taught"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "The cities ___ with excellent stone. (build)",
       "a": [
        "were built"
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "All",
        "children",
        "are",
        "sent",
        "to",
        "school",
        "at",
        "six."
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct passive: «Someone opens the park gates at 8:00 every morning.»",
       "o": [
        "The park gates is opened at 8:00 every morning.",
        "The park gates are opened at 8:00 every morning.",
        "The park gates were opened at 8:00 every morning."
       ],
       "a": 1,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "7": {
   "title": "ماذا لو؟",
   "titleEn": "What if?",
   "lessons": [
    {
     "id": "7-1",
     "title": "What if?",
     "titleAr": "ماذا لو؟",
     "vocab": [
      {
       "en": "grow up",
       "ar": "يكبر / ينشأ",
       "em": "🌱",
       "ex": "We did everything together while we were growing up.",
       "exAr": "فعلنا كلّ شيء معاً ونحن نكبر."
      },
      {
       "en": "in trouble",
       "ar": "في مأزق / في ورطة",
       "em": "🆘",
       "ex": "Those people on the mountain are in trouble.",
       "exAr": "أولئك الناس على الجبل في مأزق."
      },
      {
       "en": "look after",
       "ar": "يعتني بـ",
       "em": "🤲",
       "ex": "I sometimes look after Grandma when Mum has to go shopping.",
       "exAr": "أعتني أحياناً بجدّتي حين تضطرّ أمّي إلى التسوّق."
      },
      {
       "en": "duty",
       "ar": "واجب",
       "em": "🎖",
       "ex": "It's my duty to go and find them.",
       "exAr": "من واجبي أن أذهب وأجدهم."
      },
      {
       "en": "fridge",
       "ar": "ثلّاجة",
       "em": "🧊",
       "ex": "There are some chicken pieces in the fridge.",
       "exAr": "هناك بعض قطع الدجاج في الثلّاجة."
      },
      {
       "en": "piece",
       "ar": "قطعة",
       "em": "🧩",
       "ex": "I'd like a piece of cheese to put on my bread.",
       "exAr": "أريد قطعة جبن لأضعها على خبزي."
      },
      {
       "en": "simple",
       "ar": "بسيط / سهل",
       "em": "✅",
       "ex": "I'll teach you some simple dishes.",
       "exAr": "سأعلّمك بعض الأطباق البسيطة."
      },
      {
       "en": "though",
       "ar": "مع ذلك / رغم ذلك",
       "em": "↔",
       "ex": "I don't know much about cooking. I should though.",
       "exAr": "لا أعرف الكثير عن الطبخ، وينبغي أن أعرف مع ذلك."
      },
      {
       "en": "a bit",
       "ar": "قليلاً",
       "em": "🤏",
       "ex": "When I'm at home, I sometimes help a bit.",
       "exAr": "حين أكون في البيت أساعد قليلاً أحياناً."
      },
      {
       "en": "imagine",
       "ar": "يتخيّل",
       "em": "💭",
       "ex": "Imagine that your parents have gone out.",
       "exAr": "تخيّل أنّ والديك خرجا."
      },
      {
       "en": "pour",
       "ar": "يسكب",
       "em": "🫗",
       "ex": "Should I pour the soup into the bowls now?",
       "exAr": "هل أسكب الحساء في الأوعية الآن؟"
      },
      {
       "en": "stain",
       "ar": "بقعة / يلطّخ",
       "em": "🍅",
       "ex": "You've stained your new sweater.",
       "exAr": "لقد لطّخت سترتك الجديدة."
      },
      {
       "en": "get rid of",
       "ar": "يتخلّص من",
       "em": "🧽",
       "ex": "Try to get rid of the stain with soap and water.",
       "exAr": "حاول أن تتخلّص من البقعة بالماء والصابون."
      },
      {
       "en": "chemical",
       "ar": "مادّة كيميائية",
       "em": "🧪",
       "ex": "A gentle chemical cleaner may help.",
       "exAr": "قد تفيد مادّة تنظيف كيميائية لطيفة."
      },
      {
       "en": "burn",
       "ar": "يحرق / يحترق",
       "em": "🔥",
       "ex": "Don't burn yourself!",
       "exAr": "لا تحرق نفسك!"
      },
      {
       "en": "necessary",
       "ar": "ضروري",
       "em": "❗",
       "ex": "It isn't usually necessary to use powerful chemicals.",
       "exAr": "ليس من الضروري عادةً استعمال مواد قويّة."
      }
     ],
     "reading": {
      "title": "What if?",
      "paras": [
       {
        "en": "Hadeel and Aunt Nada were talking in the kitchen. Aunt Nada: Tell me, do you ever cook back home? Hadeel: When I'm at home, I sometimes help a bit. But I'm often out because I do various sports and other activities after school. So I don't know very much about cooking. I should though.",
        "ar": "كانت هديل وعمّتها نادية تتحدّثان في المطبخ. العمّة نادية: أخبريني، هل تطبخين في بيتكم؟ هديل: حين أكون في البيت أساعد قليلاً أحياناً، لكنّني كثيراً ما أكون خارجه لأنّني أمارس رياضات وأنشطة متنوّعة بعد المدرسة، فلا أعرف الكثير عن الطبخ، وينبغي أن أتعلّم مع ذلك."
       },
       {
        "en": "Aunt Nada: Yes, if you learn to cook, it'll be very useful later, when you grow up. Hadeel: You're right. I need to learn. Nidal knows much more than me! And if I don't learn, it won't be easy to live away from home in future. Aunt Nada: I'll teach you some simple dishes if you like. Hadeel: Great! Aunt Nada: Let's make lunch for our neighbours, the Masri family. Mrs Masri is sick.",
        "ar": "العمّة نادية: نعم، إن تعلّمتِ الطبخ فسيكون مفيداً جدّاً لاحقاً حين تكبرين. هديل: معك حقّ، أحتاج إلى أن أتعلّم. نضال يعرف أكثر منّي بكثير! وإن لم أتعلّم فلن يكون سهلاً أن أعيش بعيدة عن البيت مستقبلاً. العمّة نادية: سأعلّمك بعض الأطباق البسيطة إن أحببتِ. هديل: رائع! العمّة نادية: لنُعدّ غداءً لجيراننا عائلة المصري، فالسيدة المصري مريضة."
       },
       {
        "en": "Hadeel: Are they the family opposite? Aunt Nada: Yes. How did you guess? Hadeel: The daughter always looks busy. She goes shopping every day, and I often think maybe her mum isn't well. Aunt Nada: You're right. Her father is in hospital, too, so poor young Sameera is looking after them and the four little ones, too. She's only fourteen, like you. Hadeel: That's very hard. How does she do everything? Aunt Nada: Well, the friends and neighbours are helping, and today it's my turn.",
        "ar": "هديل: هل هم العائلة المقابلة لنا؟ العمّة نادية: نعم، كيف خمّنتِ؟ هديل: الابنة تبدو مشغولة دائماً، وتذهب إلى التسوّق كلّ يوم، وكثيراً ما أظنّ أنّ أمّها ربّما ليست بخير. العمّة نادية: معك حقّ. أبوها في المستشفى أيضاً، فالمسكينة الصغيرة سميرة تعتني بهما وبالصغار الأربعة أيضاً، وهي في الرابعة عشرة فقط مثلك. هديل: هذا صعب جدّاً، كيف تفعل كلّ شيء؟ العمّة نادية: الأصدقاء والجيران يساعدون، واليوم جاء دوري."
       },
       {
        "en": "Hadeel: If something like that happens back home, neighbours don't usually help as much. You seem to have a closer community here. Aunt Nada: Perhaps you're right. If someone is in trouble here, we always feel it's our duty to help. Now, … there are some chicken pieces in the fridge. Let's cook them and make some salad.",
        "ar": "هديل: إن حدث شيء كهذا في بلدنا فالجيران لا يساعدون عادةً بهذا القدر. يبدو أنّ لديكم مجتمعاً أكثر تقارباً هنا. العمّة نادية: ربّما معك حقّ. إن وقع أحدهم في مأزق هنا فإنّنا نشعر دائماً أنّ من واجبنا أن نساعد. والآن… هناك بعض قطع الدجاج في الثلّاجة، لنطبخها ونُعدّ بعض السلطة."
       }
      ],
      "questions": [
       {
        "q": "What does Hadeel do when she is at home?",
        "o": [
         "She cooks every meal",
         "She sometimes helps a bit",
         "She never helps"
        ],
        "a": 1
       },
       {
        "q": "Why is Hadeel often out?",
        "o": [
         "She does sports and other activities after school",
         "She works in a shop",
         "She visits her aunt"
        ],
        "a": 0
       },
       {
        "tf": false,
        "q": "Mr Masri is at home with his family.",
        "why": "He is in hospital."
       },
       {
        "q": "How old is Sameera?",
        "o": [
         "Twelve",
         "Fourteen",
         "Sixteen"
        ],
        "a": 1
       },
       {
        "q": "What does Hadeel think about the community here?",
        "o": [
         "It is closer than back home",
         "It is the same as back home",
         "It is not friendly"
        ],
        "a": 0
       }
      ]
     },
     "rules": [
      {
       "title": "Type 0 and Type 1 conditionals",
       "titleAr": "الشرط من النوع الصفري والنوع الأول",
       "explain": "نستعمل <b>النوع الصفري (Type 0)</b> لأمور صحيحة دائماً أو قد تحدث في أيّ وقت: <b>If + مضارع بسيط، مضارع بسيط</b> (If someone is in trouble here, we always feel it's our duty to help). ونستعمل <b>النوع الأول (Type 1)</b> لأمور قد تحدث أو لا تحدث في المستقبل: <b>If + مضارع بسيط، will + فعل</b> (If you learn to cook, it will be very useful later). فجملة if لا تأخذ will أبداً.",
       "form": "Type 0: If + present simple, present simple    ·    Type 1: If + present simple, will + V1",
       "examples": [
        {
         "en": "If someone is in trouble here, we always **feel** it's our duty to help.",
         "ar": "النوع الصفري"
        },
        {
         "en": "If something like that happens back home, neighbours **don't** usually help as much.",
         "ar": "النوع الصفري"
        },
        {
         "en": "If you learn to cook, it **will be** very useful later.",
         "ar": "النوع الأول"
        },
        {
         "en": "If I don't learn, it **won't be** easy to live away from home.",
         "ar": "النوع الأول (نفي)"
        }
       ],
       "questions": [
        {
         "q": "If it is a summer camp day, she always ___ them all there.",
         "o": [
          "will take",
          "takes",
          "is taking"
         ],
         "a": 1,
         "why": "Type 0: مضارع بسيط في الجزأين"
        },
        {
         "q": "If she needs more medicine today, I ___ to go to the doctor's.",
         "o": [
          "have",
          "will have",
          "had"
         ],
         "a": 1,
         "why": "Type 1: will + V1"
        },
        {
         "q": "If the children's rooms are untidy, she ___ everything away tidily.",
         "o": [
          "puts",
          "would put",
          "will putting"
         ],
         "a": 0,
         "why": "Type 0"
        },
        {
         "type": "type",
         "q": "If we ___ more fruit, I'll go to the market. (need)",
         "a": [
          "need"
         ],
         "why": "جملة if بالمضارع البسيط"
        },
        {
         "type": "type",
         "q": "If she doesn't need more medicine, I ___ to the doctor's. (not / go)",
         "a": [
          "won't go",
          "will not go"
         ],
         "why": "Type 1 منفي"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «إن تعلّمتِ الطبخ فسيكون ذلك مفيداً»",
         "words": [
          "If",
          "you",
          "learn",
          "to",
          "cook,",
          "it",
          "will",
          "be",
          "useful."
         ]
        }
       ]
      },
      {
       "title": "Type 2 conditionals",
       "titleAr": "الشرط من النوع الثاني",
       "explain": "نستعمل <b>النوع الثاني (Type 2)</b> للمواقف <b>غير الواقعية</b> التي نتخيّلها الآن أو في المستقبل: <b>If + ماضٍ بسيط، would / could / might + فعل</b> (If the oil started burning, I would turn off the cooker). الفعل في جملة if يكون ماضياً بسيطاً لكنّه لا يدلّ على الماضي هنا، ويمكن أن تأتي جملة if في أوّل الجملة أو في آخرها، وقد يكون الجزءان مثبتين أو منفيّين.",
       "form": "If + past simple, would / could / might + V1",
       "examples": [
        {
         "en": "If the oil **started** burning, I **would turn off** the cooker.",
         "ar": "موقف متخيَّل"
        },
        {
         "en": "If you **used** a powerful chemical cleaner, this **would remove** the stain.",
         "ar": "موقف متخيَّل"
        },
        {
         "en": "If that **did not work**, you **could use** a gentle cleaner.",
         "ar": "جملة if منفيّة"
        },
        {
         "en": "You **might not remove** the stain completely if you did that.",
         "ar": "جملة if في آخر الجملة"
        }
       ],
       "questions": [
        {
         "q": "If I burned my hand, I ___ it under cold running water.",
         "o": [
          "will hold",
          "would hold",
          "hold"
         ],
         "a": 1,
         "why": "Type 2: would + V1"
        },
        {
         "q": "If you lost your purse in town, you ___ go back and look for it.",
         "o": [
          "could",
          "can",
          "are"
         ],
         "a": 0,
         "why": "could + V1 في Type 2"
        },
        {
         "q": "If those were my children, I ___ let them play with knives.",
         "o": [
          "won't",
          "wouldn't",
          "don't"
         ],
         "a": 1,
         "why": "Type 2 منفي: wouldn't"
        },
        {
         "type": "type",
         "q": "If a neighbour ___ sick, I would call a doctor. (become)",
         "a": [
          "became"
         ],
         "why": "ماضٍ بسيط في جملة if"
        },
        {
         "type": "type",
         "q": "If I saw a small child on a busy road, I ___ him. (help)",
         "a": [
          "would help",
          "'d help"
         ],
         "why": "would + V1"
        },
        {
         "tf": false,
         "q": "The sentence «If I will see a fire, I would call the fire brigade» is correct.",
         "why": "الصحيح: If I saw a fire, I would call the fire brigade."
        }
       ]
      },
      {
       "title": "Forms of look",
       "titleAr": "استعمالات الفعل look",
       "explain": "يتغيّر معنى الفعل <b>look</b> بتغيّر الكلمة التي بعده: <b>look</b> (يبدو)، <b>look at</b> (ينظر إلى)، <b>look for</b> (يبحث عن)، <b>look after</b> (يعتني بـ)، <b>look up</b> (يبحث عن معلومة في كتاب أو قائمة أو الإنترنت)، <b>look like</b> (يشبه). وتأتي <b>Look!</b> وحدها لنلفت انتباه أحدهم.",
       "form": "look + (at / for / after / up / like)",
       "examples": [
        {
         "en": "You **look** smart in that shirt.",
         "ar": "يبدو"
        },
        {
         "en": "Why are you **looking at** that person?",
         "ar": "ينظر إلى"
        },
        {
         "en": "I've been **looking for** my phone all day.",
         "ar": "يبحث عن"
        },
        {
         "en": "You should **look after** your things more carefully.",
         "ar": "يعتني بـ"
        },
        {
         "en": "I'll **look up** the name on the guest list.",
         "ar": "يبحث عن معلومة"
        },
        {
         "en": "He **looks like** an old friend.",
         "ar": "يشبه"
        }
       ],
       "questions": [
        {
         "q": "I can't find my keys. I'm ___ them.",
         "o": [
          "looking for",
          "looking after",
          "looking like"
         ],
         "a": 0,
         "why": "look for = يبحث عن"
        },
        {
         "q": "Sameera ___ her little brothers and sisters.",
         "o": [
          "looks up",
          "looks after",
          "looks at"
         ],
         "a": 1,
         "why": "look after = يعتني بـ"
        },
        {
         "q": "He ___ an old friend of mine.",
         "o": [
          "looks like",
          "looks for",
          "looks up"
         ],
         "a": 0,
         "why": "look like = يشبه"
        },
        {
         "type": "type",
         "q": "I don't know the word. I'll ___ it ___ on the internet. (look)",
         "a": [
          "look up"
         ],
         "why": "look up = يبحث عن معلومة"
        },
        {
         "q": "___! It's over there by the TV.",
         "o": [
          "Look",
          "Looks",
          "Looking"
         ],
         "a": 0,
         "why": "Look! لفت الانتباه"
        },
        {
         "tf": false,
         "q": "«Look after» means «try to find».",
         "why": "look after = يعتني بـ، أمّا try to find فهي look for."
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"duty\" means:",
       "o": [
        "واجب",
        "ثلّاجة",
        "قطعة"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"fridge\" means:",
       "o": [
        "ثلّاجة",
        "موقد",
        "بقعة"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Sameera is fourteen years old.",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "pour",
         "يسكب"
        ],
        [
         "stain",
         "بقعة"
        ],
        [
         "necessary",
         "ضروري"
        ],
        [
         "burn",
         "يحرق"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "If it ___ cold tomorrow, we will eat something hot.",
       "o": [
        "is",
        "will be",
        "was"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "If I burned my hand, I ___ it under cold water.",
       "o": [
        "would hold",
        "will hold",
        "hold"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "If she needs more bread, she ___ to the baker's. (go)",
       "a": [
        "will go",
        "'ll go"
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "If I had a million dollars, I would travel the world.",
        "If I would have a million dollars, I will travel the world.",
        "If I have a million dollars, I would travelled the world."
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "I",
        "would",
        "turn",
        "off",
        "the",
        "cooker",
        "if",
        "the",
        "oil",
        "started",
        "burning."
       ],
       "lv": "hard"
      },
      {
       "q": "Why does Hadeel need to learn to cook?",
       "o": [
        "It won't be easy to live away from home if she doesn't learn",
        "Nidal asked her to cook",
        "Her mum is sick"
       ],
       "a": 0,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "8": {
   "title": "أيادٍ تساعد: كسب الأصدقاء",
   "titleEn": "Helping hands: making friends",
   "lessons": [
    {
     "id": "8-1",
     "title": "Helping hands: making friends",
     "titleAr": "أيادٍ تساعد: كسب الأصدقاء",
     "vocab": [
      {
       "en": "chance",
       "ar": "فرصة",
       "em": "🍀",
       "ex": "Hadeel wanted a chance to meet Sameera.",
       "exAr": "أرادت هديل فرصة للقاء سميرة."
      },
      {
       "en": "get to know",
       "ar": "يتعرّف إلى",
       "em": "🤝",
       "ex": "Aunt Nada wanted the girls to get to know each other.",
       "exAr": "أرادت العمّة نادية أن تتعرّف الفتاتان إلى بعضهما."
      },
      {
       "en": "knock",
       "ar": "يطرق (الباب)",
       "em": "🚪",
       "ex": "She knocked and the door opened.",
       "exAr": "طرقت الباب فانفتح."
      },
      {
       "en": "tray",
       "ar": "صينيّة",
       "em": "🍽",
       "ex": "I'll bring everything on a tray.",
       "exAr": "سأحضر كلّ شيء على صينيّة."
      },
      {
       "en": "expect",
       "ar": "يتوقّع",
       "em": "🤔",
       "ex": "I don't expect you get much free time!",
       "exAr": "لا أتوقّع أن يكون لديك وقت فراغ كثير!"
      },
      {
       "en": "midday",
       "ar": "منتصف النهار / الظهر",
       "em": "🕛",
       "ex": "At midday I have to fetch the children from camp.",
       "exAr": "عند الظهيرة عليّ أن أجلب الأطفال من المخيّم."
      },
      {
       "en": "fetch",
       "ar": "يجلب / يذهب ويحضر",
       "em": "🏃",
       "ex": "I have to fetch the children from their summer camp.",
       "exAr": "عليّ أن أجلب الأطفال من مخيّمهم الصيفي."
      },
      {
       "en": "pity",
       "ar": "شيء مؤسف",
       "em": "😔",
       "ex": "It's a pity because I'm enjoying our chat.",
       "exAr": "هذا مؤسف لأنّني أستمتع بحديثنا."
      },
      {
       "en": "suggest",
       "ar": "يقترح",
       "em": "💡",
       "ex": "I suggest we go together.",
       "exAr": "أقترح أن نذهب معاً."
      },
      {
       "en": "belong",
       "ar": "ينتمي / يكون عضواً",
       "em": "🏷",
       "ex": "I belong to an international organization.",
       "exAr": "أنتمي إلى منظّمة دولية."
      },
      {
       "en": "organization",
       "ar": "منظّمة",
       "em": "🏢",
       "ex": "It's a big organization that helps people in trouble.",
       "exAr": "إنّها منظّمة كبيرة تساعد الناس في المحن."
      },
      {
       "en": "volunteer",
       "ar": "متطوّع / يتطوّع",
       "em": "🙋",
       "ex": "Older students all do voluntary work.",
       "exAr": "طلّاب الصفوف الكبيرة كلّهم يعملون عملاً تطوّعياً."
      },
      {
       "en": "disabled",
       "ar": "من ذوي الإعاقة",
       "em": "♿",
       "ex": "I take books to the homes of disabled people.",
       "exAr": "آخذ الكتب إلى بيوت ذوي الإعاقة."
      },
      {
       "en": "disaster",
       "ar": "كارثة",
       "em": "🌪",
       "ex": "There's always a big natural disaster somewhere in the world.",
       "exAr": "هناك دائماً كارثة طبيعية كبيرة في مكان ما من العالم."
      },
      {
       "en": "earthquake",
       "ar": "زلزال",
       "em": "🌍",
       "ex": "Thousands of buildings collapsed in that big earthquake.",
       "exAr": "انهار آلاف المباني في ذلك الزلزال الكبير."
      },
      {
       "en": "flood",
       "ar": "فيضان",
       "em": "🌊",
       "ex": "There was a flood in China after weeks of heavy rain.",
       "exAr": "حدث فيضان في الصين بعد أسابيع من المطر الغزير."
      }
     ],
     "reading": {
      "title": "Helping hands",
      "paras": [
       {
        "en": "When Aunt Nada and Hadeel finished making lunch for the Masri family, Hadeel offered to take the food to them. She wanted a chance to meet Sameera. Hadeel took the tray and knocked, and the door opened. Hadeel: Hi, I'm Hadeel. Sameera: Oh, hello, you're staying opposite, aren't you? Hadeel: Yes, and your name is Sameera, isn't it? Sameera: That's right. Please come in. Hadeel: Thank you, and look, I've brought you lunch. Aunt Nada made it for you – with a little help from me.",
        "ar": "حين انتهت العمّة نادية وهديل من إعداد الغداء لعائلة المصري عرضت هديل أن تأخذ الطعام إليهم، فقد أرادت فرصة للقاء سميرة. حملت هديل الصينيّة وطرقت الباب فانفتح. هديل: مرحباً، أنا هديل. سميرة: آه، أهلاً، أنتِ تقيمين في البيت المقابل، أليس كذلك؟ هديل: نعم، واسمك سميرة، أليس كذلك؟ سميرة: صحيح، تفضّلي بالدخول. هديل: شكراً، وانظري، لقد أحضرتُ لكِ الغداء. صنعته العمّة نادية لكم، مع قليل من المساعدة منّي."
       },
       {
        "en": "Sameera: That's really kind! Please come through and have tea. I can make you some Arab-style tea – or I can make you some lemon tea. Hadeel: Oh, thank you! I'd love some Arab-style tea, please. Sameera: Excuse me, I'm going to take Mother some food in bed. Then I'll be back. A little later. Hadeel: I hear you've got four little brothers and sisters, and you're looking after all of them, too. Sameera: Well, yes, at the moment. Hadeel: I don't expect you get much free time! Sameera: No, not much! And that reminds me, it's midday and I have to fetch the children from their summer camp. It's a pity because I'm enjoying our chat. Hadeel: Well, we don't have to stop. I suggest we go together, and then we can carry on chatting, can't we? Sameera: Yes, we certainly can.",
        "ar": "سميرة: هذا لطف كبير منكِ! تفضّلي بالدخول واشربي الشاي، يمكنني أن أعدّ لكِ شاياً عربياً أو شاي ليمون. هديل: شكراً! أحبّ الشاي العربي، من فضلك. سميرة: عن إذنك، سآخذ بعض الطعام إلى أمّي في فراشها ثم أعود. بعد قليل. هديل: سمعتُ أنّ لديكِ أربعة إخوة وأخوات صغاراً وأنّكِ تعتنين بهم جميعاً أيضاً. سميرة: نعم، في الوقت الحالي. هديل: لا أتوقّع أن يكون لديكِ وقت فراغ كثير! سميرة: لا، ليس كثيراً! وهذا يذكّرني أنّها الظهيرة وعليّ أن أجلب الأطفال من مخيّمهم الصيفي، وهذا مؤسف لأنّني أستمتع بحديثنا. هديل: لا داعي أن نتوقّف، أقترح أن نذهب معاً ثم نواصل الحديث، أليس كذلك؟ سميرة: نعم، بالتأكيد."
       },
       {
        "en": "Tom (Britain): At the end of the school week, we have a choice. We can do extra work in the library or sports or, like me, we can do voluntary work. We do projects which help the local community, and we recently finished one at a school for young children. It's a new playground which we helped to build. We set up the new play equipment, and the children love it. That feels good, and we had lots of fun, too.",
        "ar": "توم (بريطانيا): في نهاية الأسبوع الدراسي لدينا خيار، فيمكننا أن نقوم بعمل إضافي في المكتبة أو في الرياضة، أو مثلي نقوم بعمل تطوّعي. ننفّذ مشاريع تخدم المجتمع المحلّي، وقد أنهينا مؤخّراً مشروعاً في مدرسة للأطفال الصغار، هو ملعب جديد ساعدنا في بنائه. ركّبنا معدّات اللعب الجديدة والأطفال يحبّونها. هذا شعور جميل وقد استمتعنا كثيراً أيضاً."
       },
       {
        "en": "Rosa (Brazil): On Saturday mornings, I volunteer at the local library. There are various jobs which you can do there. For example, you can take books to the homes of disabled people who can't get to the library. But my favourite is my little reading group. I read stories to young children that I meet every week. They love it, and I really enjoy that. They don't pay me, but I'm allowed to borrow books instead, and that's very nice.",
        "ar": "روزا (البرازيل): في صباح أيّام السبت أتطوّع في المكتبة المحلّية. هناك أعمال متنوّعة يمكن القيام بها، مثل أن تأخذ الكتب إلى بيوت ذوي الإعاقة الذين لا يستطيعون الوصول إلى المكتبة. لكنّ المفضّل لديّ هو مجموعة القراءة الصغيرة، أقرأ قصصاً لأطفال صغار ألتقيهم كلّ أسبوع. إنّهم يحبّون ذلك وأنا أستمتع حقّاً. لا يدفعون لي، لكن يُسمح لي باستعارة الكتب بدلاً من ذلك، وهذا جميل."
       },
       {
        "en": "Hassan (Saudi Arabia): There's always a big natural disaster somewhere in the world. If it isn't an earthquake, it's a flood or a hurricane. I can't go and help, but there's something else that I can do. I belong to an international organization which sends help to people who are in danger. It collects money for things that disaster victims badly need – things like food and medicine. Then we volunteers put everything into boxes ready to send. It's good to give to people who have very little.",
        "ar": "حسّان (السعودية): هناك دائماً كارثة طبيعية كبيرة في مكان ما من العالم، فإن لم تكن زلزالاً فهي فيضان أو إعصار. لا أستطيع الذهاب للمساعدة لكن هناك شيئاً آخر يمكنني فعله. أنتمي إلى منظّمة دولية ترسل المساعدة إلى الناس المعرّضين للخطر. تجمع المال لأشياء يحتاجها ضحايا الكوارث بشدّة كالطعام والدواء، ثم نضع نحن المتطوّعين كلّ شيء في صناديق جاهزة للإرسال. من الجميل أن نعطي من يملكون القليل."
       }
      ],
      "questions": [
       {
        "q": "Why did Hadeel offer to take the food to the Masri family?",
        "o": [
         "She wanted a chance to meet Sameera",
         "She was hungry",
         "Sameera asked her"
        ],
        "a": 0
       },
       {
        "q": "What kind of tea does Hadeel choose?",
        "o": [
         "Lemon tea",
         "Arab-style tea",
         "No tea"
        ],
        "a": 1
       },
       {
        "tf": true,
        "q": "Sameera has four little brothers and sisters."
       },
       {
        "q": "What does Rosa do at the library?",
        "o": [
         "She reads stories to young children",
         "She sells books",
         "She builds playgrounds"
        ],
        "a": 0
       },
       {
        "q": "What does Hassan's organization send to disaster victims?",
        "o": [
         "Food and medicine",
         "Cars",
         "Books"
        ],
        "a": 0
       }
      ]
     },
     "rules": [
      {
       "title": "Direct and indirect objects",
       "titleAr": "المفعول المباشر وغير المباشر",
       "explain": "بعض الأفعال تأخذ مفعولين مثل <b>bring, take, fetch, buy, get, give, make, send, write</b>. الأوّل <b>مباشر</b> (الشيء) والثاني <b>غير مباشر</b> (الشخص). إن جاء الشيء أوّلاً نضع <b>to</b> أو <b>for</b> قبل الشخص: <b>to</b> تدلّ على الاتجاه (took the tray <b>to</b> the family)، و<b>for</b> تدلّ على المساعدة (made lunch <b>for</b> them). وإن قدّمنا الشخص حذفنا to وfor (She took the family the tray).",
       "form": "S + V + شيء + to / for + شخص    ·    S + V + شخص + شيء",
       "examples": [
        {
         "en": "Aunt Nada **made lunch for** the Masri family.",
         "ar": "شيء + for + شخص"
        },
        {
         "en": "She **made the Masri family lunch**.",
         "ar": "شخص + شيء"
        },
        {
         "en": "Hadeel **took the tray to** the Masri family.",
         "ar": "شيء + to + شخص"
        },
        {
         "en": "She **took the Masri family the tray**.",
         "ar": "شخص + شيء"
        }
       ],
       "questions": [
        {
         "q": "Rania bought some chocolates ___ her grandmother.",
         "o": [
          "to",
          "for",
          "at"
         ],
         "a": 1,
         "why": "buy + for"
        },
        {
         "q": "Rania wrote a postcard ___ her grandmother.",
         "o": [
          "for",
          "to",
          "of"
         ],
         "a": 1,
         "why": "write + to"
        },
        {
         "q": "She sent ___ a letter.",
         "o": [
          "to them",
          "them",
          "for them"
         ],
         "a": 1,
         "why": "الشخص أوّلاً بلا to"
        },
        {
         "type": "type",
         "q": "I'm going to give the CD ___ her. (to / for)",
         "a": [
          "to"
         ],
         "why": "give + to"
        },
        {
         "type": "type",
         "q": "Aunt Nada made lunch ___ the neighbours. (to / for)",
         "a": [
          "for"
         ],
         "why": "make + for"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «أحضرتُ لك الغداء»",
         "words": [
          "I",
          "have",
          "brought",
          "you",
          "lunch."
         ]
        }
       ]
      },
      {
       "title": "Defining relative clauses",
       "titleAr": "جمل الصلة المحدِّدة",
       "explain": "تعطينا <b>جملة الصلة</b> معلومة <b>مهمّة</b> عن الاسم الذي قبلها. نستعمل <b>who</b> أو <b>that</b> للأشخاص، و<b>which</b> أو <b>that</b> للأشياء. وقد يكون الضمير <b>فاعلاً</b> (Tom is the volunteer <b>who</b> helped build a playground) أو <b>مفعولاً</b> (a project <b>which</b> his group recently finished). ويمكن حذف ضمير الوصل إن كان مفعولاً.",
       "form": "person + who / that + ...    ·    thing + which / that + ...",
       "examples": [
        {
         "en": "Tom is the volunteer **who** helped to build a playground.",
         "ar": "للأشخاص (فاعل)"
        },
        {
         "en": "We do projects **which** help the local community.",
         "ar": "للأشياء (فاعل)"
        },
        {
         "en": "I read stories to children **that** I meet every week.",
         "ar": "للأشخاص (مفعول)"
        },
        {
         "en": "There is something else **which** I can do.",
         "ar": "للأشياء (مفعول)"
        }
       ],
       "questions": [
        {
         "q": "Rosa is the person ___ reads to a group of children.",
         "o": [
          "which",
          "who",
          "whose"
         ],
         "a": 1,
         "why": "who للأشخاص"
        },
        {
         "q": "He does projects ___ help the local community.",
         "o": [
          "who",
          "which",
          "where"
         ],
         "a": 1,
         "why": "which للأشياء"
        },
        {
         "q": "Tom talks about a project ___ his group recently finished.",
         "o": [
          "who",
          "which",
          "whom"
         ],
         "a": 1,
         "why": "which للأشياء"
        },
        {
         "type": "type",
         "q": "Hadeel is the girl ___ took the tray to the Masri family. (who / which)",
         "a": [
          "who",
          "that"
         ],
         "why": "للأشخاص: who أو that"
        },
        {
         "tf": false,
         "q": "We use «who» for things, for example: a library who has many books.",
         "why": "للأشياء نستعمل which أو that."
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «هي تنتمي إلى منظّمة ترسل المساعدة»",
         "words": [
          "She",
          "belongs",
          "to",
          "an",
          "organization",
          "which",
          "sends",
          "help."
         ]
        }
       ]
      },
      {
       "title": "Word formation · parts of speech",
       "titleAr": "تكوين الكلمات وأنواعها",
       "explain": "من كلمة واحدة نكوّن كلمات أخرى بإضافة نهايات، فتتغيّر <b>نوعها</b> (فعل v، اسم n، صفة adj): <b>volunteer</b> (متطوّع / يتطوّع) ← <b>voluntary</b> (تطوّعي)، <b>choose</b> ← <b>choice</b>، <b>help</b> ← <b>helpful</b>، <b>danger</b> ← <b>dangerous</b>، <b>collect</b> ← <b>collection</b>، <b>feel</b> ← <b>feeling</b>، <b>medicine</b> ← <b>medical</b>، <b>nature</b> ← <b>natural</b>.",
       "form": "verb → noun: -ion / -ing    ·    noun → adjective: -ous / -ful / -al",
       "examples": [
        {
         "en": "Older students do **voluntary** work.",
         "ar": "صفة"
        },
        {
         "en": "They **volunteer** to work for the community.",
         "ar": "فعل"
        },
        {
         "en": "Is it **dangerous** to walk in the woods at night?",
         "ar": "صفة"
        },
        {
         "en": "The biggest **danger** is that you could fall.",
         "ar": "اسم"
        }
       ],
       "questions": [
        {
         "q": "The flood victims badly need ___ help.",
         "o": [
          "medicine",
          "medical",
          "medically"
         ],
         "a": 1,
         "why": "صفة قبل الاسم help"
        },
        {
         "q": "You've got a huge ___ of old clocks!",
         "o": [
          "collect",
          "collection",
          "collecting"
         ],
         "a": 1,
         "why": "اسم بعد a huge"
        },
        {
         "q": "It's ___ to walk in the woods at night.",
         "o": [
          "danger",
          "dangerous",
          "dangerously"
         ],
         "a": 1,
         "why": "صفة بعد is"
        },
        {
         "type": "type",
         "q": "I get a good ___ when I help someone. (feel)",
         "a": [
          "feeling"
         ],
         "why": "اسم من الفعل feel"
        },
        {
         "type": "type",
         "q": "Please ___ me carry these bags. (helpful / help)",
         "a": [
          "help"
         ],
         "why": "فعل بعد me"
        },
        {
         "tf": false,
         "q": "«Voluntary» is a verb.",
         "why": "voluntary صفة، والفعل volunteer."
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"suggest\" means:",
       "o": [
        "يقترح",
        "يطرق",
        "يجلب"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"flood\" means:",
       "o": [
        "زلزال",
        "فيضان",
        "صينيّة"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Hadeel and Sameera go together to fetch the children.",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "tray",
         "صينيّة"
        ],
        [
         "pity",
         "شيء مؤسف"
        ],
        [
         "disaster",
         "كارثة"
        ],
        [
         "disabled",
         "من ذوي الإعاقة"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "Aunt Nada made lunch ___ the Masri family.",
       "o": [
        "for",
        "to",
        "at"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "Rosa is the person ___ reads to young children.",
       "o": [
        "who",
        "which",
        "whose"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "Tom is the volunteer ___ helped to build a playground. (who / which)",
       "a": [
        "who",
        "that"
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "She sent them a letter.",
        "She sent to them a letter.",
        "She sent for them a letter."
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "We",
        "do",
        "projects",
        "which",
        "help",
        "the",
        "local",
        "community."
       ],
       "lv": "hard"
      },
      {
       "q": "What does Hassan's organization do?",
       "o": [
        "It sends help to people in danger",
        "It builds playgrounds",
        "It runs a library"
       ],
       "a": 0,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "9": {
   "title": "حياة البرية في خطر",
   "titleEn": "Wildlife in danger",
   "lessons": [
    {
     "id": "9-1",
     "title": "Wildlife in danger",
     "titleAr": "حياة البرية في خطر",
     "vocab": [
      {
       "en": "go up",
       "ar": "يرتفع",
       "em": "📈",
       "ex": "Your prices keep going up and up!",
       "exAr": "أسعاركم تواصل الارتفاع باستمرار!"
      },
      {
       "en": "come down",
       "ar": "ينخفض",
       "em": "📉",
       "ex": "Will your prices come down?",
       "exAr": "هل ستنخفض أسعاركم؟"
      },
      {
       "en": "population",
       "ar": "عدد السكان / تعداد",
       "em": "👥",
       "ex": "The population of the town is rising.",
       "exAr": "يرتفع عدد سكان البلدة."
      },
      {
       "en": "price",
       "ar": "سعر",
       "em": "💰",
       "ex": "The price of fish is very high now.",
       "exAr": "سعر السمك مرتفع جدّاً الآن."
      },
      {
       "en": "joke",
       "ar": "يمزح",
       "em": "😄",
       "ex": "Twenty-five pounds? You're joking!",
       "exAr": "خمسة وعشرون جنيهاً؟ أنت تمزح!"
      },
      {
       "en": "keep",
       "ar": "يستمرّ / يواصل",
       "em": "➡",
       "ex": "Prices keep going up.",
       "exAr": "الأسعار تواصل الارتفاع."
      },
      {
       "en": "tuna",
       "ar": "سمك التونة",
       "em": "🐟",
       "ex": "How much is the tuna, please?",
       "exAr": "بكم سمك التونة من فضلك؟"
      },
      {
       "en": "cause",
       "ar": "يسبّب / سبب",
       "em": "⚠",
       "ex": "Pollution causes a lot of damage to sea life.",
       "exAr": "يسبّب التلوّث أضراراً كثيرة للحياة البحرية."
      },
      {
       "en": "coast",
       "ar": "ساحل",
       "em": "🏖",
       "ex": "We walked along the path above the coast.",
       "exAr": "مشينا على الطريق المطلّ على الساحل."
      },
      {
       "en": "man-made",
       "ar": "من صنع الإنسان",
       "em": "🏭",
       "ex": "Over-fishing is a man-made disaster.",
       "exAr": "الصيد الجائر كارثة من صنع الإنسان."
      },
      {
       "en": "net",
       "ar": "شبكة",
       "em": "🥅",
       "ex": "Fishermen use huge nets to catch fish.",
       "exAr": "يستعمل الصيّادون شباكاً ضخمة لصيد السمك."
      },
      {
       "en": "destroy",
       "ar": "يدمّر",
       "em": "💥",
       "ex": "Pollution is destroying life in the sea.",
       "exAr": "يدمّر التلوّث الحياة في البحر."
      },
      {
       "en": "disappear",
       "ar": "يختفي",
       "em": "💨",
       "ex": "Many kinds of fish are disappearing from the oceans.",
       "exAr": "تختفي أنواع كثيرة من الأسماك من المحيطات."
      },
      {
       "en": "discover",
       "ar": "يكتشف",
       "em": "🔍",
       "ex": "Scientists are discovering new kinds of life in the deep sea.",
       "exAr": "يكتشف العلماء أنواعاً جديدة من الحياة في أعماق البحر."
      },
      {
       "en": "species",
       "ar": "نوع (حيّ) / فصيلة",
       "em": "🐋",
       "ex": "There are millions of different species in the oceans.",
       "exAr": "هناك ملايين الأنواع المختلفة في المحيطات."
      },
      {
       "en": "require",
       "ar": "يتطلّب / يُلزم",
       "em": "📋",
       "ex": "Some countries require fishing boats to catch fewer fish.",
       "exAr": "تُلزم بعض الدول سفن الصيد بصيد كمّيات أقلّ."
      }
     ],
     "reading": {
      "title": "Will the oceans live or die?",
      "paras": [
       {
        "en": "Fish and many other kinds of life, like coral, are disappearing from the oceans fast. There are sad changes everywhere. Near the coast, they are often caused by pollution. Farther out, the cause is often over-fishing. Fishing boats with huge nets catch and kill everything. We risk a terrible man-made disaster – the death of the oceans.",
        "ar": "تختفي الأسماك وكثير من أشكال الحياة الأخرى، مثل المرجان، من المحيطات بسرعة. هناك تغيّرات محزنة في كلّ مكان. قرب الساحل يكون سببها غالباً التلوّث، وفي المناطق الأبعد يكون السبب غالباً الصيد الجائر؛ فسفن الصيد ذات الشباك الضخمة تصطاد كلّ شيء وتقتله. ونحن نخاطر بكارثة مروّعة من صنع الإنسان: موت المحيطات."
       },
       {
        "en": "But could our recent action to save the whales give us hope? Two centuries ago, whales were already being caught for their oil and meat. By the 1940s, the job was being made easier by modern technology. From the 1950s to the 1980s, they were being caught everywhere and numbers were collapsing. Whole species of whales were quickly being destroyed, and they were not being protected anywhere.",
        "ar": "لكن هل يمنحنا ما فعلناه حديثاً لإنقاذ الحيتان أملاً؟ قبل قرنين كانت الحيتان تُصاد أصلاً من أجل زيتها ولحمها. وبحلول الأربعينيات كانت التكنولوجيا الحديثة تجعل هذا العمل أسهل. ومن الخمسينيات إلى الثمانينيات كانت تُصاد في كلّ مكان وكانت أعدادها تنهار. وكانت فصائل كاملة من الحيتان تُدمَّر بسرعة ولم تكن تُحمى في أيّ مكان."
       },
       {
        "en": "Finally, the world took action. In 1985, almost every country agreed to stop catching whales. This means that whale populations are slowly rising again.",
        "ar": "وأخيراً تحرّك العالم. ففي عام 1985 اتّفقت جميع الدول تقريباً على التوقّف عن صيد الحيتان. وهذا يعني أنّ أعداد الحيتان ترتفع من جديد ببطء."
       },
       {
        "en": "Could the same thing happen with fish and fishing? Sadly, almost certainly not. In Europe, people are required to catch smaller quantities now, but almost everywhere else they go on fishing freely – though it is getting harder. They cannot stop: too many hungry people need to eat.",
        "ar": "هل يمكن أن يحدث الشيء نفسه مع الأسماك والصيد؟ للأسف، شبه مؤكّد أنّ لا. ففي أوروبا يُطلب من الناس الآن صيد كمّيات أقلّ، أمّا في كلّ مكان آخر تقريباً فيواصلون الصيد بحرّية، مع أنّه يزداد صعوبة. إنّهم لا يستطيعون التوقّف، فهناك كثيرون جائعون يحتاجون إلى الطعام."
       },
       {
        "en": "Perhaps the only way to save the oceans is the one that our ancestors discovered long ago: farming. There are already many fish farms, and perhaps there will soon be many more along the world's coasts. People say the fish do not taste as good as wild fish. However, that is still much better than losing all the fish in the world.",
        "ar": "ربّما كانت الطريقة الوحيدة لإنقاذ المحيطات هي التي اكتشفها أجدادنا منذ زمن بعيد: الزراعة. هناك بالفعل مزارع أسماك كثيرة، وربّما يكون هناك قريباً المزيد منها على سواحل العالم. يقول الناس إنّ طعم هذه الأسماك ليس بجودة طعم الأسماك البرّية. ومع ذلك فهذا أفضل بكثير من خسارة كلّ أسماك العالم."
       }
      ],
      "questions": [
       {
        "q": "What often causes sad changes near the coast?",
        "o": [
         "Over-fishing",
         "Pollution",
         "Whales"
        ],
        "a": 1
       },
       {
        "tf": false,
        "q": "Fishing is the only cause of the problem.",
        "why": "Pollution causes damage near the coast; over-fishing farther out."
       },
       {
        "q": "When did almost every country agree to stop catching whales?",
        "o": [
         "In 1940",
         "In 1985",
         "In 1950"
        ],
        "a": 1
       },
       {
        "q": "What is happening to whale populations now?",
        "o": [
         "They are slowly rising",
         "They are collapsing",
         "They are disappearing"
        ],
        "a": 0
       },
       {
        "q": "What may be the only way to save the oceans?",
        "o": [
         "Catching more fish",
         "Fish farms",
         "Eating more whales"
        ],
        "a": 1
       }
      ]
     },
     "rules": [
      {
       "title": "Present continuous passive",
       "titleAr": "المضارع المستمر المبني للمجهول",
       "explain": "نستعمل <b>المضارع المستمر المبني للمجهول</b> عندما نركّز على <b>الشيء الذي يقع عليه الفعل</b> الآن لا على من يفعله (The adult fish are being caught). نكوّنه من <b>am / is / are + being + اسم المفعول</b>، والنفي بـ <b>am / is / are + not + being + اسم المفعول</b>. وإذا كان الفاعل مهمّاً أضفناه بعد <b>by</b>.",
       "form": "am / is / are + being + V3    ·    am / is / are + not + being + V3",
       "examples": [
        {
         "en": "I **am being taught** all this at school.",
         "ar": "أنا أُعلَّم كلّ هذا في المدرسة"
        },
        {
         "en": "Something **is being done** about it.",
         "ar": "يجري عمل شيء الآن"
        },
        {
         "en": "The adult fish **are being caught**.",
         "ar": "تُصاد الأسماك البالغة الآن"
        },
        {
         "en": "Young ones **are not being produced**.",
         "ar": "لا تُنتَج الصغار"
        },
        {
         "en": "Several things **are being done** at the same time.",
         "ar": "أمور كثيرة تُنجَز في الوقت نفسه"
        }
       ],
       "questions": [
        {
         "q": "The adult fish ___ everywhere.",
         "o": [
          "are being caught",
          "is being caught",
          "are catching"
         ],
         "a": 0,
         "why": "الفاعل جمع (fish) والمعنى مبني للمجهول"
        },
        {
         "q": "A new science lab ___ at our school.",
         "o": [
          "is building",
          "is being built",
          "are being built"
         ],
         "a": 1
        },
        {
         "q": "Young ones ___ produced.",
         "o": [
          "aren't being",
          "don't being",
          "not being"
         ],
         "a": 0,
         "why": "النفي: are not being + V3"
        },
        {
         "q": "Different kinds of fish ___ in the kitchen now.",
         "o": [
          "are preparing",
          "is being prepared",
          "are being prepared"
         ],
         "a": 2
        },
        {
         "type": "type",
         "q": "The boxes ___ to the fish market now. (carry)",
         "a": [
          "are being carried"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «أمور كثيرة تُنجَز في الوقت نفسه»",
         "words": [
          "Several",
          "things",
          "are",
          "being",
          "done",
          "at",
          "the",
          "same",
          "time."
         ]
        }
       ]
      },
      {
       "title": "Past continuous passive",
       "titleAr": "الماضي المستمر المبني للمجهول",
       "explain": "نستعمل <b>الماضي المستمر المبني للمجهول</b> للحديث عن عملٍ كان <b>يجري في الماضي</b> ونركّز على ما وقع عليه الفعل (They were being caught everywhere). نكوّنه من <b>was / were + being + اسم المفعول</b>، والنفي بـ <b>was / were + not + being + اسم المفعول</b>.",
       "form": "was / were + being + V3    ·    was / were + not + being + V3",
       "examples": [
        {
         "en": "The job **was being made** easier by modern technology.",
         "ar": "كان العمل يُجعَل أسهل"
        },
        {
         "en": "They **were being caught** everywhere.",
         "ar": "كانت تُصاد في كلّ مكان"
        },
        {
         "en": "They **were not being protected** anywhere.",
         "ar": "لم تكن تُحمى في أيّ مكان"
        },
        {
         "en": "A van full of fish **was being driven** out of the market.",
         "ar": "كانت شاحنة مليئة بالسمك تُقاد خارج السوق"
        }
       ],
       "questions": [
        {
         "q": "Two centuries ago, whales ___ for their oil.",
         "o": [
          "were being caught",
          "was being caught",
          "are being caught"
         ],
         "a": 0
        },
        {
         "q": "The market hall ___ at 10 o'clock yesterday.",
         "o": [
          "is being cleaned",
          "were being cleaned",
          "was being cleaned"
         ],
         "a": 2
        },
        {
         "q": "Whales ___ protected anywhere.",
         "o": [
          "were not being",
          "are not being",
          "was not being"
         ],
         "a": 0
        },
        {
         "q": "The big boxes ___ when we arrived.",
         "o": [
          "were being washed",
          "are being washed",
          "was washing"
         ],
         "a": 0
        },
        {
         "type": "type",
         "q": "A new road ___ through the town a year ago. (construct)",
         "a": [
          "was being constructed"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «كانت تُصاد في كلّ مكان»",
         "words": [
          "They",
          "were",
          "being",
          "caught",
          "everywhere."
         ]
        }
       ]
      },
      {
       "title": "Adverbs in the verb unit",
       "titleAr": "موضع الظروف داخل الفعل",
       "explain": "نضع الظروف مثل <b>often / already / quickly / slowly / still / also / now / finally / almost</b> غالباً <b>داخل وحدة الفعل</b>: بعد الفعل المساعد الأول (is / was / are / were) وقبل بقيّة الفعل (Sad changes are <b>often</b> caused by pollution). وفي المبني للمجهول المستمر نضعها قبل <b>being</b> أو بعده (Whales were <b>already</b> being caught).",
       "form": "is / was + adverb + V3    ·    are / were + adverb + being + V3",
       "examples": [
        {
         "en": "Sad changes are **often** caused by pollution.",
         "ar": "ظرف تكرار"
        },
        {
         "en": "Whales were **already** being caught for their oil.",
         "ar": "ظرف زمن"
        },
        {
         "en": "Whales were **quickly** being destroyed.",
         "ar": "ظرف حال"
        },
        {
         "en": "Their populations are **slowly** rising again.",
         "ar": "ظرف حال"
        }
       ],
       "questions": [
        {
         "q": "Choose the correct sentence.",
         "o": [
          "Sad changes are often caused by pollution.",
          "Sad changes often are caused by pollution.",
          "Sad changes are caused often by pollution."
         ],
         "a": 0
        },
        {
         "q": "Whales were ___ being destroyed.",
         "o": [
          "quickly",
          "quick",
          "quicker"
         ],
         "a": 0,
         "why": "الظرف quickly يصف الفعل"
        },
        {
         "q": "The population is ___ rising.",
         "o": [
          "slow",
          "slowly",
          "slower"
         ],
         "a": 1
        },
        {
         "q": "Where does 'finally' go? Then catching whales was ___ stopped by most countries.",
         "o": [
          "finally",
          "stopped finally",
          "being finally"
         ],
         "a": 0
        },
        {
         "type": "type",
         "q": "Whales are ___ being caught by two or three countries. (still)",
         "a": [
          "still"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات لتكوّن جملة صحيحة",
         "words": [
          "Great",
          "damage",
          "is",
          "now",
          "being",
          "done",
          "to",
          "other",
          "species."
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"species\" means:",
       "o": [
        "نوع (حيّ)",
        "شبكة",
        "ساحل"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"destroy\" means:",
       "o": [
        "يكتشف",
        "يدمّر",
        "يرتفع"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "q": "\"net\" means:",
       "o": [
        "شبكة",
        "سعر",
        "مشروع"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Mrs Qadiri wanted to buy tuna.",
       "lv": "easy"
      },
      {
       "q": "The opposite of \"go up\" is ___.",
       "o": [
        "keep",
        "come down",
        "disappear"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "In 1985, almost every country agreed to stop catching whales.",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "population",
         "عدد السكان"
        ],
        [
         "coast",
         "ساحل"
        ],
        [
         "disappear",
         "يختفي"
        ],
        [
         "discover",
         "يكتشف"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "Near the coast, damage to sea life is often caused by ___.",
       "o": [
        "pollution",
        "whales",
        "tuna"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "Something ___ about it. (is being done)",
       "o": [
        "is doing",
        "is being done",
        "are being done"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "tf": false,
       "q": "In Europe, people are not allowed to catch fish at all.",
       "why": "They are required to catch smaller quantities.",
       "lv": "medium"
      },
      {
       "q": "Why are fish prices going up?",
       "o": [
        "Too many fish are being caught",
        "There are too many fish",
        "Fish are cheaper to catch"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "Complete: Whales ___ everywhere in the 1960s.",
       "o": [
        "were being caught",
        "are being caught",
        "was being caught"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "Their populations are slowly rising again.",
        "Their populations slowly are rising again.",
        "Their populations are rising slowly again."
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "The adult fish ___ caught now. (are being)",
       "a": [
        "are being"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "The old boxes ___ washed at ten o'clock. (were being)",
       "a": [
        "were being"
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "Sad",
        "changes",
        "are",
        "often",
        "caused",
        "by",
        "pollution."
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "They",
        "were",
        "not",
        "being",
        "protected",
        "anywhere."
       ],
       "lv": "hard"
      },
      {
       "q": "What does the writer say could save the oceans?",
       "o": [
        "Fishing more freely",
        "Fish farms",
        "Stopping all pollution at once"
       ],
       "a": 1,
       "lv": "hard"
      },
      {
       "q": "Why can't most people stop fishing?",
       "o": [
        "Because too many hungry people need to eat",
        "Because fish are cheap",
        "Because it is easy"
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "q": "Choose the correct passive sentence.",
       "o": [
        "The job was being made easier by modern technology.",
        "The job was making easier by modern technology.",
        "The job is being made easy by modern technology yesterday."
       ],
       "a": 0,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "10": {
   "title": "حديقة للجميع",
   "titleEn": "A garden for all",
   "lessons": [
    {
     "id": "10-1",
     "title": "A garden for all",
     "titleAr": "حديقة للجميع",
     "vocab": [
      {
       "en": "aim",
       "ar": "يهدف / هدف",
       "em": "🎯",
       "ex": "We're aiming to build a garden for everyone.",
       "exAr": "نهدف إلى بناء حديقة للجميع."
      },
      {
       "en": "middle",
       "ar": "وسط",
       "em": "📍",
       "ex": "The garden will look lovely in the middle of town.",
       "exAr": "ستبدو الحديقة جميلة في وسط البلدة."
      },
      {
       "en": "comment",
       "ar": "يعلّق / تعليق",
       "em": "💬",
       "ex": "Lana and Lisa commented on the waste ground.",
       "exAr": "علّقت لانا وليزا على الأرض المهجورة."
      },
      {
       "en": "notice",
       "ar": "إعلان / يلاحظ",
       "em": "📌",
       "ex": "Look at this notice on the fence.",
       "exAr": "انظري إلى هذا الإعلان على السياج."
      },
      {
       "en": "create",
       "ar": "يُنشئ / يُبدع",
       "em": "🛠",
       "ex": "Would you like to help create a community garden?",
       "exAr": "هل تودّ المساعدة في إنشاء حديقة للمجتمع؟"
      },
      {
       "en": "fence",
       "ar": "سياج",
       "em": "🚧",
       "ex": "We need to build a fence round the garden.",
       "exAr": "نحتاج إلى بناء سياج حول الحديقة."
      },
      {
       "en": "rubbish",
       "ar": "قمامة",
       "em": "🗑",
       "ex": "Look at all the rubbish and broken glass.",
       "exAr": "انظري إلى كلّ هذه القمامة والزجاج المكسور."
      },
      {
       "en": "ashamed (of)",
       "ar": "يخجل (من)",
       "em": "😳",
       "ex": "The people who left the rubbish should be ashamed of themselves.",
       "exAr": "على الذين تركوا القمامة أن يخجلوا من أنفسهم."
      },
      {
       "en": "carpenter",
       "ar": "نجّار",
       "em": "🪚",
       "ex": "We need a carpenter to help repair the fence.",
       "exAr": "نحتاج إلى نجّار ليساعد في إصلاح السياج."
      },
      {
       "en": "clean up",
       "ar": "ينظّف (المكان)",
       "em": "🧹",
       "ex": "I'll help you clean up everything.",
       "exAr": "سأساعدك في تنظيف كلّ شيء."
      },
      {
       "en": "energy",
       "ar": "طاقة / نشاط",
       "em": "⚡",
       "ex": "We have a great team with lots of energy.",
       "exAr": "لدينا فريق رائع يتمتّع بنشاط كبير."
      },
      {
       "en": "gardener",
       "ar": "بستاني",
       "em": "👨‍🌾",
       "ex": "We need a gardener to choose the trees and plants.",
       "exAr": "نحتاج إلى بستاني ليختار الأشجار والنباتات."
      },
      {
       "en": "look forward to",
       "ar": "يتطلّع إلى",
       "em": "🤩",
       "ex": "I'm looking forward to Sunday.",
       "exAr": "أتطلّع إلى يوم الأحد."
      },
      {
       "en": "committee",
       "ar": "لجنة",
       "em": "👥",
       "ex": "I've just joined the Garden Project Committee.",
       "exAr": "انضممتُ للتوّ إلى لجنة مشروع الحديقة."
      },
      {
       "en": "repair",
       "ar": "يصلح",
       "em": "🔧",
       "ex": "We need to repair the old fence.",
       "exAr": "نحتاج إلى إصلاح السياج القديم."
      },
      {
       "en": "secretary",
       "ar": "أمين السرّ / سكرتير",
       "em": "📝",
       "ex": "The secretary takes notes at the meeting.",
       "exAr": "يدوّن أمين السرّ الملاحظات في الاجتماع."
      }
     ],
     "reading": {
      "title": "A garden for all",
      "paras": [
       {
        "en": "One day, Lana and Lisa commented on a piece of waste ground that they always went past on their way to school. Lana: Look at all the rubbish and broken glass. It isn't very nice, is it? Lisa: No, it's horrible! They should do something about it, shouldn't they?",
        "ar": "في أحد الأيام علّقت لانا وليزا على قطعة أرض مهجورة كانتا تمرّان بجانبها دائماً في طريقهما إلى المدرسة. لانا: انظري إلى كلّ هذه القمامة والزجاج المكسور. إنّها ليست جميلة، أليس كذلك؟ ليزا: نعم، إنّها فظيعة! عليهم أن يفعلوا شيئاً حيالها، أليس كذلك؟"
       },
       {
        "en": "Lana: Maybe someone is doing something. Look at this notice on the fence. 'Would you like to help create a community garden here? Then please come and discuss the plans. All are welcome! Community Hall, 8:30 Tuesday, 4th March.' Lisa: That's happening tonight, isn't it? I'd like to go. What about you? Lana: Yes, but we can't go alone, can we? I'll ask Dad to go, too.",
        "ar": "لانا: ربّما هناك من يفعل شيئاً. انظري إلى هذا الإعلان على السياج: «هل تودّ المساعدة في إنشاء حديقة للمجتمع هنا؟ تفضّل بالحضور لمناقشة الخطط. الجميع مرحّب بهم! قاعة المجتمع، الساعة 8:30 من مساء الثلاثاء 4 آذار/مارس». ليزا: هذا يحدث الليلة، أليس كذلك؟ أودّ أن أذهب، وأنتِ؟ لانا: نعم، لكن لا نستطيع الذهاب وحدنا، أليس كذلك؟ سأطلب من أبي أن يذهب معنا."
       },
       {
        "en": "Mr Qadiri was free that evening, so he went to the meeting with the girls. Speaker: We're aiming to build a garden for everyone. For example, we want to make part of it a safe play area for children. Lana: You can imagine the trees and flowers, can't you? Lisa: Yes, it'll look lovely right here in the middle of town, won't it? Mr Qadiri: Yes, it will. It's a good project.",
        "ar": "كان السيد قادري متفرّغاً تلك الأمسية فذهب إلى الاجتماع مع الفتاتين. المتحدّث: نهدف إلى بناء حديقة للجميع. فمثلاً نريد أن نجعل جزءاً منها مكاناً آمناً للعب الأطفال. لانا: تستطيعين أن تتخيّلي الأشجار والأزهار، أليس كذلك؟ ليزا: نعم، ستبدو جميلة هنا في وسط البلدة، أليس كذلك؟ السيد قادري: بلى، ستكون كذلك. إنّه مشروع جيّد."
       },
       {
        "en": "Speaker: Spring is coming, so we're starting this Sunday. Who'd like to join us? Lisa: But we can't start yet, can we? It's still early March, so it's too cold. Mr Qadiri: Oh, but we certainly can start. March is a busy time in the garden. Lana: Come on, Lisa. We can try it, can't we? Let's have a go.",
        "ar": "المتحدّث: الربيع قادم، لذلك سنبدأ يوم الأحد هذا. من يودّ الانضمام إلينا؟ ليزا: لكن لا نستطيع أن نبدأ بعد، أليس كذلك؟ ما زلنا في بداية آذار/مارس والجوّ بارد جدّاً. السيد قادري: بل نستطيع بالتأكيد أن نبدأ، فآذار/مارس وقت مزدحم في الحديقة. لانا: هيّا يا ليزا، نستطيع أن نجرّب، أليس كذلك؟ لنحاول."
       }
      ],
      "questions": [
       {
        "q": "What did the girls go past on their way to school?",
        "o": [
         "A community hall",
         "A piece of waste ground",
         "A fish market"
        ],
        "a": 1
       },
       {
        "q": "What did the notice invite people to do?",
        "o": [
         "Help create a community garden",
         "Sell their old things",
         "Join a football team"
        ],
        "a": 0
       },
       {
        "tf": true,
        "q": "The meeting was on Tuesday at 8:30."
       },
       {
        "q": "Who went to the meeting with the girls?",
        "o": [
         "Their teacher",
         "Mr Qadiri",
         "Jack Hill"
        ],
        "a": 1
       },
       {
        "tf": false,
        "q": "Lisa thought they could start work immediately because it was warm.",
        "why": "She thought it was too cold in early March."
       }
      ]
     },
     "rules": [
      {
       "title": "Tag questions with be and modal verbs",
       "titleAr": "الأسئلة الذيلية مع be والأفعال الناقصة",
       "explain": "نستعمل <b>السؤال الذيلي</b> عندما نظنّ أنّنا نعرف الجواب ونتوقّع أن يوافقنا الآخر. إذا كانت الجملة <b>مثبتة</b> فالذيل <b>منفي</b>، وإذا كانت <b>منفية</b> فالذيل <b>مثبت</b> (It isn't very nice, <b>is it</b>?). ومع <b>is / are / was / were</b> والأفعال الناقصة (can, will, should …) نكرّر <b>الفعل نفسه</b> في الذيل، ثمّ الضمير.",
       "form": "جملة مثبتة + ذيل منفي: It's happening, isn't it?    ·    جملة منفية + ذيل مثبت: It isn't nice, is it?",
       "examples": [
        {
         "en": "That's happening tonight, **isn't it**?",
         "ar": "جملة مثبتة ← ذيل منفي"
        },
        {
         "en": "It isn't very nice, **is it**?",
         "ar": "جملة منفية ← ذيل مثبت"
        },
        {
         "en": "It'll look lovely, **won't it**?",
         "ar": "will ← won't it"
        },
        {
         "en": "We can't go alone, **can we**?",
         "ar": "can't ← can we"
        },
        {
         "en": "They should do something about it, **shouldn't they**?",
         "ar": "should ← shouldn't they"
        }
       ],
       "questions": [
        {
         "q": "That's happening tonight, ___?",
         "o": [
          "isn't it",
          "is it",
          "doesn't it"
         ],
         "a": 0
        },
        {
         "q": "It isn't very nice, ___?",
         "o": [
          "isn't it",
          "is it",
          "does it"
         ],
         "a": 1
        },
        {
         "q": "It'll look lovely, ___?",
         "o": [
          "will it",
          "won't it",
          "doesn't it"
         ],
         "a": 1
        },
        {
         "q": "We can't go alone, ___?",
         "o": [
          "can't we",
          "can we",
          "do we"
         ],
         "a": 1
        },
        {
         "type": "type",
         "q": "They should do something about it, ___ they?",
         "a": [
          "shouldn't"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «ستبدو جميلة، أليس كذلك؟»",
         "words": [
          "It'll",
          "look",
          "lovely,",
          "won't",
          "it?"
         ]
        }
       ]
      },
      {
       "title": "Tag questions with do, does and did",
       "titleAr": "الأسئلة الذيلية مع do وdoes وdid",
       "explain": "مع <b>المضارع البسيط</b> نستعمل <b>do / does</b> في الذيل، ومع <b>الماضي البسيط</b> نستعمل <b>did</b>. والقاعدة نفسها: جملة مثبتة ← ذيل منفي (We need a gardener, <b>don't we</b>?)، وجملة منفية ← ذيل مثبت (We didn't talk about this, <b>did we</b>?). ويكون الضمير في الذيل مطابقاً لفاعل الجملة.",
       "form": "V1 / V(s) ← don't / doesn't    ·    V2 ← didn't    ·    جملة منفية ← do / does / did",
       "examples": [
        {
         "en": "We need a gardener, **don't we**?",
         "ar": "مضارع مثبت ← ذيل منفي"
        },
        {
         "en": "We don't have people with the right skills, **do we**?",
         "ar": "مضارع منفي ← ذيل مثبت"
        },
        {
         "en": "We had an excellent discussion, **didn't we**?",
         "ar": "ماضٍ مثبت ← didn't"
        },
        {
         "en": "We didn't talk about this last night, **did we**?",
         "ar": "ماضٍ منفي ← did"
        },
        {
         "en": "Jack Hill wants to make a request, **doesn't he**?",
         "ar": "فاعل مفرد ← doesn't he"
        }
       ],
       "questions": [
        {
         "q": "We need a gardener, ___?",
         "o": [
          "don't we",
          "do we",
          "aren't we"
         ],
         "a": 0
        },
        {
         "q": "We didn't talk about this last night, ___?",
         "o": [
          "didn't we",
          "did we",
          "do we"
         ],
         "a": 1
        },
        {
         "q": "Rania visits her grandmother every week, ___?",
         "o": [
          "doesn't she",
          "does she",
          "didn't she"
         ],
         "a": 0
        },
        {
         "q": "The twins don't enjoy shopping much, ___?",
         "o": [
          "don't they",
          "do they",
          "does they"
         ],
         "a": 1
        },
        {
         "type": "type",
         "q": "Jana enjoyed the family picnic, ___ she?",
         "a": [
          "didn't"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «لقد أجرينا نقاشاً ممتازاً، أليس كذلك؟»",
         "words": [
          "We",
          "had",
          "an",
          "excellent",
          "discussion,",
          "didn't",
          "we?"
         ]
        }
       ]
      },
      {
       "title": "Expressions with do and make",
       "titleAr": "تعبيرات مع do وmake",
       "explain": "نستعمل <b>do</b> مع الأعمال والمهامّ (do some shopping, do some homework, do some work, do a project, do a request)، ونستعمل <b>make</b> مع ما نصنعه أو ننتجه (make a cake, make a mess, make a phone call, make a request). وبعض التعبيرات يجب حفظها كما هي.",
       "form": "do + some shopping / some homework / some work / a project    ·    make + a cake / a mess / a phone call / a request",
       "examples": [
        {
         "en": "I went to the supermarket and **did some shopping**.",
         "ar": "do ← عمل"
        },
        {
         "en": "In geography we're going to **do a project** on the weather.",
         "ar": "do ← مشروع"
        },
        {
         "en": "My baby brother's **making a mess** with his food.",
         "ar": "make ← فوضى"
        },
        {
         "en": "I'm going to **make a cake** for her birthday.",
         "ar": "make ← صنع"
        },
        {
         "en": "I need to **make a phone call** and get some help.",
         "ar": "make ← مكالمة"
        }
       ],
       "questions": [
        {
         "q": "After dinner, I usually ___ some homework.",
         "o": [
          "do",
          "make",
          "have made"
         ],
         "a": 0
        },
        {
         "q": "My little brother is ___ a mess with his food again.",
         "o": [
          "doing",
          "making",
          "doing a"
         ],
         "a": 1
        },
        {
         "q": "I need to ___ a phone call and get some help.",
         "o": [
          "do",
          "make",
          "take"
         ],
         "a": 1
        },
        {
         "q": "It's Rana's birthday tomorrow, so I'm going to ___ a cake for her.",
         "o": [
          "do",
          "make",
          "does"
         ],
         "a": 1
        },
        {
         "type": "type",
         "q": "We went to the supermarket and ___ some shopping. (do, past)",
         "a": [
          "did"
         ]
        },
        {
         "type": "order",
         "q": "رتّب الكلمات لتكوّن جملة صحيحة",
         "words": [
          "I",
          "have",
          "to",
          "make",
          "a",
          "phone",
          "call",
          "first."
         ]
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"fence\" means:",
       "o": [
        "سياج",
        "قمامة",
        "لجنة"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"gardener\" means:",
       "o": [
        "نجّار",
        "بستاني",
        "أمين سرّ"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "q": "\"rubbish\" means:",
       "o": [
        "طاقة",
        "قمامة",
        "إعلان"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Lana and Lisa saw a notice on the fence.",
       "lv": "easy"
      },
      {
       "q": "\"look forward to\" means:",
       "o": [
        "يتطلّع إلى",
        "ينظّف",
        "يهدف إلى"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "The garden project was going to start on Sunday.",
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "committee",
         "لجنة"
        ],
        [
         "carpenter",
         "نجّار"
        ],
        [
         "repair",
         "يصلح"
        ],
        [
         "ashamed (of)",
         "يخجل (من)"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "It isn't very nice, ___?",
       "o": [
        "isn't it",
        "is it",
        "was it"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "The garden will be ready by June, ___?",
       "o": [
        "won't it",
        "will it",
        "isn't it"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "You live in the middle of town, ___?",
       "o": [
        "don't you",
        "do you",
        "aren't you"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "They didn't need to buy any fruit, ___?",
       "o": [
        "did they",
        "didn't they",
        "do they"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "Why didn't Lisa want to start work at first?",
       "o": [
        "She thought it was too cold",
        "She was busy",
        "She didn't like gardens"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "Choose the correct expression.",
       "o": [
        "make some shopping",
        "do some shopping",
        "make some homework"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "We can't wait any longer, ___ we? (can)",
       "a": [
        "can"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "Fuad doesn't play basketball, ___ he? (does)",
       "a": [
        "does"
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "That's",
        "happening",
        "tonight,",
        "isn't",
        "it?"
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات لتكوّن جملة صحيحة",
       "words": [
        "We",
        "didn't",
        "talk",
        "about",
        "this,",
        "did",
        "we?"
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "We need a gardener, don't we?",
        "We need a gardener, do we?",
        "We need a gardener, aren't we?"
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "q": "Which sentence uses a modal verb correctly in the tag?",
       "o": [
        "It will look lovely, won't it?",
        "It will look lovely, doesn't it?",
        "It will look lovely, isn't it?"
       ],
       "a": 0,
       "lv": "hard"
      },
      {
       "q": "What does Mr Qadiri say about March?",
       "o": [
        "It is a busy time in the garden",
        "It is too cold to work",
        "It is a quiet month"
       ],
       "a": 0,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "11": {
   "title": "كن سعيداً",
   "titleEn": "Be happy!",
   "lessons": [
    {
     "id": "11-1",
     "title": "Be happy!",
     "titleAr": "كن سعيداً",
     "vocab": [
      {
       "en": "be down",
       "ar": "يكون حزيناً / محبَطاً",
       "em": "😞",
       "ex": "I'm feeling down because it has rained all week.",
       "exAr": "أشعر بالإحباط لأنّ المطر هطل طوال الأسبوع."
      },
      {
       "en": "cheer up",
       "ar": "يُسرّي عن نفسه / يبتهج",
       "em": "😊",
       "ex": "Come on! Cheer up!",
       "exAr": "هيّا! ابتهج!"
      },
      {
       "en": "cheerful",
       "ar": "مرح / مبتهج",
       "em": "😄",
       "ex": "How come you're so cheerful?",
       "exAr": "كيف تكونين مبتهجةً هكذا؟"
      },
      {
       "en": "depressed",
       "ar": "مكتئب / محبَط",
       "em": "😔",
       "ex": "I don't feel very happy. I'm depressed!",
       "exAr": "لا أشعر بالسعادة. أنا محبَطة!"
      },
      {
       "en": "how come",
       "ar": "كيف ذلك؟ / لماذا؟",
       "em": "❓",
       "ex": "How come you're home already?",
       "exAr": "كيف عدتَ إلى البيت بهذه السرعة؟"
      },
      {
       "en": "mood",
       "ar": "مزاج",
       "em": "🎭",
       "ex": "I'm suddenly in a much better mood.",
       "exAr": "صار مزاجي فجأةً أفضل بكثير."
      },
      {
       "en": "no one",
       "ar": "لا أحد",
       "em": "🚫",
       "ex": "No one got good results in the test.",
       "exAr": "لم يحصل أحدٌ على نتائج جيّدة في الاختبار."
      },
      {
       "en": "result",
       "ar": "نتيجة",
       "em": "📊",
       "ex": "The results of the medical tests are very good.",
       "exAr": "نتائج الفحوص الطبّية جيّدة جدّاً."
      },
      {
       "en": "do well / badly",
       "ar": "يؤدّي جيّداً / سيّئاً",
       "em": "📝",
       "ex": "I didn't do very well in our French test.",
       "exAr": "لم أؤدِّ جيّداً في اختبار الفرنسية."
      },
      {
       "en": "suddenly",
       "ar": "فجأة",
       "em": "⚡",
       "ex": "And do you know what? I'm suddenly in a much better mood.",
       "exAr": "وهل تعرفين؟ مزاجي فجأةً أفضل بكثير."
      },
      {
       "en": "attention",
       "ar": "انتباه / اهتمام",
       "em": "👀",
       "ex": "Fuad likes to be the centre of attention.",
       "exAr": "فؤاد يحبّ أن يكون محطّ الأنظار."
      },
      {
       "en": "dramatic",
       "ar": "مثير / مبالغ فيه",
       "em": "🎬",
       "ex": "That was a dramatic end to the film.",
       "exAr": "كانت نهاية الفيلم مثيرة جدّاً."
      },
      {
       "en": "explode",
       "ar": "ينفجر",
       "em": "💥",
       "ex": "If I don't do something soon, I'll explode!",
       "exAr": "إن لم أفعل شيئاً قريباً فسأنفجر!"
      },
      {
       "en": "ignore",
       "ar": "يتجاهل",
       "em": "🙈",
       "ex": "They just ignore me.",
       "exAr": "إنّهم يتجاهلونني فحسب."
      },
      {
       "en": "selfish",
       "ar": "أناني",
       "em": "😒",
       "ex": "He only thinks about himself. He's very selfish.",
       "exAr": "إنّه لا يفكّر إلّا في نفسه. إنّه أنانيّ جدّاً."
      },
      {
       "en": "positive / negative",
       "ar": "إيجابي / سلبي",
       "em": "➕",
       "ex": "It is very negative to hide in your room.",
       "exAr": "الاختباء في غرفتك أمرٌ سلبيّ جدّاً."
      }
     ],
     "reading": {
      "title": "Be happy!",
      "paras": [
       {
        "en": "One cold, wet, grey day, Lana and Lisa were talking on their way home from school. Lana: Are you all right, Lisa? You don't look very happy. Lisa: I don't feel very happy, either. I'm depressed! Lana: What's the matter? Lisa: Well, I didn't do very well in our French test this afternoon. Lana: I didn't, either. But listen, no one got good results, and we all did badly. Everyone says the test was too hard. So come on! Cheer up!",
        "ar": "في يومٍ باردٍ ماطرٍ رماديّ كانت لانا وليزا تتحدّثان في طريق العودة من المدرسة إلى البيت. لانا: هل أنتِ بخير يا ليزا؟ لا تبدين سعيدةً جدّاً. ليزا: ولا أشعر بالسعادة أنا أيضاً، أنا محبَطة! لانا: ما الأمر؟ ليزا: حسناً، لم أؤدِّ جيّداً في اختبار الفرنسية بعد ظهر اليوم. لانا: ولا أنا. لكن اسمعي، لم يحصل أحدٌ على نتائج جيّدة وكلّنا أخفقنا. الجميع يقولون إنّ الاختبار كان صعباً جدّاً. فهيّا! ابتهجي!"
       },
       {
        "en": "Lisa: But there's another thing. It's this weather. I don't like it. Lana: Neither do I. But you have to try to keep smiling. Lisa: How come you're so cheerful? Lana: Well, the weather forecast says that spring is almost here, and I love spring. Lisa: Oh, so do I! I can't wait for sunny days and blue skies again. Lana: Neither can I. And listen, if the weather's better on Saturday, I'd like to go and help at the community garden again. What about you?",
        "ar": "ليزا: لكن هناك أمرٌ آخر، إنّه هذا الطقس. لا أحبّه. لانا: ولا أنا. لكن عليكِ أن تحاولي الاستمرار في الابتسام. ليزا: كيف تكونين مبتهجةً هكذا؟ لانا: حسناً، نشرة الطقس تقول إنّ الربيع على وشك القدوم، وأنا أحبّ الربيع. ليزا: آه، وأنا كذلك! لا أطيق الانتظار حتى تعود الأيّام المشمسة والسماء الزرقاء. لانا: ولا أنا. واسمعي، إن كان الطقس أفضل يوم السبت أودّ أن أذهب لأساعد في حديقة المجتمع مرّةً أخرى. وأنتِ؟"
       },
       {
        "en": "Lisa: Good idea! I enjoyed working with everyone last weekend. Lana: I did, too. I'm really happy about our new garden. Lisa: So am I. It'll look lovely in three months from now. And do you know what? I'm suddenly in a much better mood. Lana: Good! Now you sound more like the normal Lisa! Lisa: And I'll tell you the thing that really makes me happy. Lana: Oh? What's that? Lisa: It's having a friend like you – someone who can cheer me up when I'm down.",
        "ar": "ليزا: فكرةٌ رائعة! لقد استمتعتُ بالعمل مع الجميع في نهاية الأسبوع الماضي. لانا: وأنا كذلك. أنا سعيدةٌ جدّاً بحديقتنا الجديدة. ليزا: وأنا أيضاً. ستبدو جميلةً بعد ثلاثة أشهر من الآن. وهل تعرفين؟ صار مزاجي فجأةً أفضل بكثير. لانا: رائع! الآن تبدين أشبه بليزا المعتادة! ليزا: وسأخبركِ بما يسعدني حقّاً. لانا: حقّاً؟ وما هو؟ ليزا: أن يكون لي صديقةٌ مثلك، شخصٌ يستطيع أن يرفع معنويّاتي حين أكون حزينة."
       },
       {
        "en": "Tom writes to the magazine page Help, World! Dear All, I'm the oldest of four, and my parents give all their attention to the younger ones. They just ignore me. I'm feeling very down because of that. I love them, so I don't say anything. I just go to my room alone. But I sometimes want to scream! Would it help if I did something dramatic? If I don't do something soon, I'll explode! Upset",
        "ar": "يكتب توم إلى صفحة «Help, World!» في المجلّة. إلى الجميع: أنا الأكبر بين أربعة إخوة، ووالداي يعطيان كلّ اهتمامهما للأصغر سنّاً، وهما يتجاهلانني تماماً. أشعر بحزنٍ شديد بسبب ذلك. أنا أحبّهما فلا أقول شيئاً، بل أذهب إلى غرفتي وحدي. لكنّني أرغب أحياناً في الصراخ! هل يفيد أن أفعل شيئاً مثيراً؟ إن لم أفعل شيئاً قريباً فسأنفجر! (الموقّع: منزعج)"
       },
       {
        "en": "Carrie (Melbourne, Australia): Dear Upset, As you're the oldest, your parents probably think you can look after yourself. They're just very busy. I don't think they think they're ignoring you. I don't think you should do anything selfish or dramatic since that would just make things worse.",
        "ar": "كاري (ملبورن، أستراليا): عزيزي «منزعج»، بما أنّك الأكبر فربّما يظنّ والداك أنّك تستطيع الاعتناء بنفسك. إنّهما مشغولان جدّاً فحسب، ولا أظنّهما يعتقدان أنّهما يتجاهلانك. ولا أرى أن تفعل شيئاً أنانيّاً أو مثيراً لأنّ ذلك سيزيد الأمور سوءاً."
       },
       {
        "en": "Fuad (Manama, Bahrain): Dear Upset, I really understand your feelings since I've got six small brothers and sisters! But please don't 'explode' as that would just upset everyone. Try my way: talk to your parents. Say, 'I know you love me, but I feel you give me less attention than the other children.' It worked for me, so I'm sure it will for you, too. My parents understood immediately, and they changed completely.",
        "ar": "فؤاد (المنامة، البحرين): عزيزي «منزعج»، أنا أفهم مشاعرك جيّداً لأنّ لديّ ستّة إخوةٍ وأخواتٍ صغار! لكن أرجو ألّا «تنفجر» لأنّ ذلك سيُزعج الجميع. جرّب طريقتي: تحدّث إلى والديك وقل: «أعلم أنّكما تحبّانني، لكنّني أشعر أنّكما تعطيانني اهتماماً أقلّ من الأطفال الآخرين». لقد نجحت معي، فأنا واثق أنّها ستنجح معك أيضاً. فهم والداي فوراً وتغيّرا تماماً."
       },
       {
        "en": "Rosa (Madrid, Spain): Dear Upset, Your parents aren't the whole cause of the problem. You're part of it, too, because it's very negative to hide in your room. Try to be positive instead and help look after the children together. Because of that, they'll love that and you'll do a lot together. Your parents will definitely stop ignoring you!",
        "ar": "روزا (مدريد، إسبانيا): عزيزي «منزعج»، والداك ليسا السبب الوحيد للمشكلة، فأنت جزءٌ منها أيضاً لأنّ الاختباء في غرفتك أمرٌ سلبيّ جدّاً. حاول بدلاً من ذلك أن تكون إيجابيّاً وأن تساعدهما في رعاية الأطفال معاً. وبسبب ذلك سيُسعدهما الأمر وستفعلان أشياء كثيرة معاً. وسيتوقّف والداك بالتأكيد عن تجاهلك!"
       }
      ],
      "questions": [
       {
        "q": "What went wrong for Lisa at school?",
        "o": [
         "She lost her French book",
         "She did badly in a French test",
         "She missed the school bus"
        ],
        "a": 1
       },
       {
        "q": "Why is Lana cheerful?",
        "o": [
         "The weather forecast says spring is almost here",
         "She got a good result in the test",
         "It is the weekend"
        ],
        "a": 0
       },
       {
        "tf": true,
        "q": "Lana also did badly in the French test."
       },
       {
        "q": "What would Lana like to do on Saturday if the weather is better?",
        "o": [
         "Go to the zoo",
         "Play football",
         "Help at the community garden"
        ],
        "a": 2
       },
       {
        "q": "Why does Tom feel down?",
        "o": [
         "He failed an exam",
         "His parents give all their attention to the younger children",
         "He has no friends"
        ],
        "a": 1
       },
       {
        "q": "What does Fuad advise Tom to do?",
        "o": [
         "Scream and explode",
         "Hide in his room",
         "Talk to his parents"
        ],
        "a": 2
       }
      ]
     },
     "rules": [
      {
       "title": "too / either · So / Neither",
       "titleAr": "الموافقة: too وeither وSo وNeither",
       "explain": "نوافق على كلام الآخرين بطريقتين. مع الكلام <b>المثبت</b> نقول <b>…, too</b> أو <b>So + فعل مساعد + فاعل</b> (I love spring. — I do, too. / So do I). ومع الكلام <b>المنفيّ</b> نقول <b>…not, either</b> أو <b>Neither + فعل مساعد + فاعل</b> (I don't like it. — I don't, either. / Neither do I). نستعمل <b>الفعل المساعد نفسه</b>: do / does / did مع المضارع والماضي البسيطين، وam / is / are مع be، وcan مع can، وhave مع المضارع التامّ.",
       "form": "مثبت: S + aux, too   ·   So + aux + S        منفيّ: S + aux + not, either   ·   Neither + aux + S",
       "examples": [
        {
         "en": "A: I enjoyed working. B: I **did**, **too**.",
         "ar": "موافقة مثبتة"
        },
        {
         "en": "A: I love spring. B: **So do** I.",
         "ar": "موافقة مثبتة"
        },
        {
         "en": "A: I didn't do very well. B: I **didn't**, **either**.",
         "ar": "موافقة منفيّة"
        },
        {
         "en": "A: I cannot wait for sunny days. B: **Neither can** I.",
         "ar": "موافقة منفيّة"
        },
        {
         "en": "A: I am really happy. B: **So am** I.",
         "ar": "موافقة مع be"
        }
       ],
       "questions": [
        {
         "q": "A: I love spring.  B: ___",
         "o": [
          "So do I.",
          "So am I.",
          "Neither do I."
         ],
         "a": 0,
         "why": "love: مثبت + do"
        },
        {
         "q": "A: I don't like cold, wet weather.  B: ___",
         "o": [
          "So do I.",
          "Neither do I.",
          "I do, too."
         ],
         "a": 1,
         "why": "منفيّ: Neither"
        },
        {
         "q": "A: I'm really happy about our new garden.  B: So ___ I.",
         "o": [
          "do",
          "have",
          "am"
         ],
         "a": 2,
         "why": "am مع be"
        },
        {
         "type": "type",
         "q": "A: I can't wait for sunny days.  B: Neither ___ I.",
         "a": [
          "can"
         ],
         "why": "الفعل المساعد نفسه: can"
        },
        {
         "type": "type",
         "q": "A: I didn't do very well in the test.  B: I ___, either.",
         "a": [
          "didn't",
          "did not"
         ],
         "why": "منفيّ في الماضي: didn't"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «ولا أنا أستطيع»",
         "words": [
          "Neither",
          "can",
          "I."
         ]
        }
       ]
      },
      {
       "title": "because / since / as · so · Because of that",
       "titleAr": "السبب والنتيجة: because وsince وas وso",
       "explain": "نذكر <b>السبب</b> بـ <b>because</b> أو <b>since</b> أو <b>as</b> (I don't say anything because I love them). ونذكر <b>النتيجة</b> بـ <b>so</b> وهي عكس because (I love them, so I don't say anything). وإذا كان السبب في جملةٍ سابقة نشير إليه بعبارة <b>Because of that</b> أو <b>As a result</b> (I'm feeling very down. Because of that, I stay in my room). يأتي السبب بعد النتيجة مع because، ويجوز أن يأتي أوّلاً مع as وsince.",
       "form": "النتيجة + because / since / as + السبب   ·   السبب, so + النتيجة   ·   السبب. Because of that, + النتيجة",
       "examples": [
        {
         "en": "I don't say anything **because** I love them.",
         "ar": "السبب بعد النتيجة"
        },
        {
         "en": "**As** you're the oldest, your parents think you can look after yourself.",
         "ar": "السبب أوّلاً"
        },
        {
         "en": "I really understand your feelings **since** I've got six!",
         "ar": "سبب"
        },
        {
         "en": "I love them, **so** I don't say anything.",
         "ar": "نتيجة"
        },
        {
         "en": "They just ignore me. I'm feeling very down **because of that**.",
         "ar": "إشارة إلى الجملة السابقة"
        }
       ],
       "questions": [
        {
         "q": "Everyone went indoors ___ it was getting too cold.",
         "o": [
          "because",
          "so",
          "because of that"
         ],
         "a": 0,
         "why": "because يُدخل السبب"
        },
        {
         "q": "It was raining, ___ I took my umbrella.",
         "o": [
          "since",
          "so",
          "as"
         ],
         "a": 1,
         "why": "so يُدخل النتيجة"
        },
        {
         "q": "___ you're the oldest, your parents think you can look after yourself.",
         "o": [
          "So",
          "As",
          "But"
         ],
         "a": 1,
         "why": "As في أوّل الجملة تدلّ على السبب"
        },
        {
         "type": "type",
         "q": "I didn't understand the sentence, ___ I read it again. (because / so)",
         "a": [
          "so"
         ],
         "why": "قراءة الجملة نتيجة وليست سبباً"
        },
        {
         "tf": false,
         "q": "The correct sentence is: I was tired, because I went to bed early.",
         "why": "الصحيح: I was tired, so I went to bed early."
        },
        {
         "q": "I could see dark clouds. ___, I took my umbrella.",
         "o": [
          "Because of that",
          "Because",
          "Since"
         ],
         "a": 0,
         "why": "نشير إلى الجملة السابقة"
        }
       ]
      },
      {
       "title": "Prepositions: at, for, with, about, on, in",
       "titleAr": "حروف الجرّ مع الأفعال والصفات والوقت",
       "explain": "بعض الأفعال والصفات تأتي مع حرف جرٍّ ثابت: <b>do well at</b> (ينجح في)، <b>wait for</b> (ينتظر)، <b>be with</b> (يكون مع)، <b>happy about</b> (سعيد بشأن). ونستعمل <b>on</b> مع الأيّام (on Friday)، و<b>in</b> مع الفترات والأشهر (in six months)، و<b>at</b> مع الساعة.",
       "form": "do well AT · wait FOR · be WITH · happy ABOUT · ON Friday · IN six months",
       "examples": [
        {
         "en": "How well did you do **at** the science test?",
         "ar": "do well at"
        },
        {
         "en": "We have to wait here **for** the bus.",
         "ar": "wait for"
        },
        {
         "en": "I like being **with** other people.",
         "ar": "with"
        },
        {
         "en": "I'm not very happy **about** the plans.",
         "ar": "happy about"
        },
        {
         "en": "What are you going to do **on** Friday?",
         "ar": "on + يوم"
        },
        {
         "en": "Where will we be **in** six months from now?",
         "ar": "in + فترة"
        }
       ],
       "questions": [
        {
         "q": "How well did you do ___ the science test?",
         "o": [
          "at",
          "by",
          "from"
         ],
         "a": 0,
         "why": "do well at"
        },
        {
         "q": "We have to wait here ___ the bus.",
         "o": [
          "by",
          "for",
          "from"
         ],
         "a": 1,
         "why": "wait for"
        },
        {
         "q": "I'm not very happy ___ the plans for the new building.",
         "o": [
          "about",
          "by",
          "in"
         ],
         "a": 0,
         "why": "happy about"
        },
        {
         "q": "What are you going to do ___ Friday?",
         "o": [
          "at",
          "in",
          "on"
         ],
         "a": 2,
         "why": "on + اليوم"
        },
        {
         "type": "type",
         "q": "Where will we be ___ six months from now? (on / in / at)",
         "a": [
          "in"
         ],
         "why": "in + فترة زمنية"
        },
        {
         "tf": true,
         "q": "'I like being with other people.' is correct."
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"cheerful\" means:",
       "o": [
        "مبتهج",
        "أناني",
        "فجأة"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"ignore\" means:",
       "o": [
        "ينفجر",
        "يتجاهل",
        "نتيجة"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Lisa didn't do very well in the French test.",
       "lv": "easy"
      },
      {
       "q": "The opposite of 'positive' is ___.",
       "o": [
        "selfish",
        "negative",
        "cheerful"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "q": "\"mood\" means:",
       "o": [
        "نتيجة",
        "اهتمام",
        "مزاج"
       ],
       "a": 2,
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "attention",
         "انتباه"
        ],
        [
         "selfish",
         "أناني"
        ],
        [
         "explode",
         "ينفجر"
        ],
        [
         "depressed",
         "محبَط"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "A: I love spring.  B: ___",
       "o": [
        "So do I.",
        "So am I.",
        "Neither do I."
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "A: I'm not good at singing.  B: ___",
       "o": [
        "So am I.",
        "Neither am I.",
        "I am, too."
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "I was really tired, ___ I went to bed early.",
       "o": [
        "because",
        "as",
        "so"
       ],
       "a": 2,
       "lv": "medium"
      },
      {
       "q": "Why was Lisa down at the beginning of the dialogue?",
       "o": [
        "Because of the test and the weather",
        "Because of her friend",
        "Because of her homework"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "tf": false,
       "q": "Lana and Lisa will go to the community garden on Monday.",
       "why": "السبت (Saturday) إن كان الطقس أفضل.",
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "A: I enjoyed working there.  B: I ___, too.",
       "a": [
        "did"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "A: I can't swim.  B: Neither ___ I.",
       "a": [
        "can"
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات: «شعرتُ بالحزن بسبب ذلك»",
       "words": [
        "I",
        "was",
        "feeling",
        "down",
        "because",
        "of",
        "that."
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "I love them, because I don't say anything.",
        "I love them, so I don't say anything.",
        "I love them, since so I don't say anything."
       ],
       "a": 1,
       "lv": "hard"
      },
      {
       "q": "What does Fuad advise Tom to do?",
       "o": [
        "Hide in his room",
        "Do something dramatic",
        "Talk to his parents about his feelings"
       ],
       "a": 2,
       "lv": "hard"
      },
      {
       "q": "What does Rosa think about hiding in the room?",
       "o": [
        "It is very positive",
        "It is very negative",
        "It is dramatic and fun"
       ],
       "a": 1,
       "lv": "hard"
      }
     ]
    }
   ]
  },
  "12": {
   "title": "أخبار جيّدة من المستشفى",
   "titleEn": "Good news from the hospital",
   "lessons": [
    {
     "id": "12-1",
     "title": "Good news from the hospital",
     "titleAr": "أخبار جيّدة من المستشفى",
     "vocab": [
      {
       "en": "able to",
       "ar": "قادر على",
       "em": "💪",
       "ex": "She was soon able to get up and walk around.",
       "exAr": "أصبحت قادرةً بعد قليل على النهوض والتجوّل."
      },
      {
       "en": "patient",
       "ar": "مريض (في المستشفى)",
       "em": "🏥",
       "ex": "They need the bed urgently for another patient.",
       "exAr": "يحتاجون السرير بشكلٍ عاجل لمريضٍ آخر."
      },
      {
       "en": "favour",
       "ar": "معروف / خدمة",
       "em": "🤝",
       "ex": "Can I ask a favour?",
       "exAr": "هل يمكنني أن أطلب منكِ معروفاً؟"
      },
      {
       "en": "successful",
       "ar": "ناجح",
       "em": "✅",
       "ex": "Luckily, the operation was successful.",
       "exAr": "لحسن الحظّ كانت العمليّة ناجحة."
      },
      {
       "en": "luckily",
       "ar": "لحسن الحظّ",
       "em": "🍀",
       "ex": "Luckily, it was successful.",
       "exAr": "لحسن الحظّ كانت ناجحة."
      },
      {
       "en": "urgently",
       "ar": "بشكلٍ عاجل",
       "em": "🚨",
       "ex": "They need it urgently for another patient.",
       "exAr": "يحتاجونه بشكلٍ عاجل لمريضٍ آخر."
      },
      {
       "en": "as soon as possible",
       "ar": "في أقرب وقتٍ ممكن",
       "em": "⏱",
       "ex": "They're asking me to take my mum as soon as possible.",
       "exAr": "يطلبون منّي أن آخذ أمّي في أقرب وقتٍ ممكن."
      },
      {
       "en": "around",
       "ar": "في أرجاء / حول",
       "em": "🔄",
       "ex": "She was soon able to get up and walk around.",
       "exAr": "أصبحت قادرةً على النهوض والتجوّل."
      },
      {
       "en": "artificial",
       "ar": "اصطناعي",
       "em": "🦿",
       "ex": "Osama has new artificial legs.",
       "exAr": "لدى أسامة ساقان اصطناعيّتان جديدتان."
      },
      {
       "en": "athlete",
       "ar": "رياضي / لاعب",
       "em": "🏃",
       "ex": "Khaled is an amazing athlete.",
       "exAr": "خالد رياضيّ مذهل."
      },
      {
       "en": "be born",
       "ar": "يُولَد",
       "em": "👶",
       "ex": "The twins were safely born today.",
       "exAr": "وُلد التوأمان اليوم بسلام."
      },
      {
       "en": "experience",
       "ar": "تجربة / خبرة",
       "em": "🌟",
       "ex": "Have you had any experience of sailing before?",
       "exAr": "هل لديك أيّ خبرة في الإبحار من قبل؟"
      },
      {
       "en": "manage (to)",
       "ar": "ينجح في / يتمكّن من",
       "em": "🎯",
       "ex": "Has he managed to build a new life?",
       "exAr": "هل نجح في بناء حياةٍ جديدة؟"
      },
      {
       "en": "nervous",
       "ar": "متوتّر / قلق",
       "em": "😰",
       "ex": "I'm nervous about using this machine.",
       "exAr": "أنا متوتّر من استعمال هذه الآلة."
      },
      {
       "en": "ordinary",
       "ar": "عادي",
       "em": "🙂",
       "ex": "There are so many ordinary people who are so brave.",
       "exAr": "هناك كثيرٌ من الناس العاديّين الشجعان جدّاً."
      },
      {
       "en": "realize",
       "ar": "يدرك",
       "em": "💡",
       "ex": "I realized that I must trust my doctor.",
       "exAr": "أدركتُ أنّ عليّ أن أثق بطبيبي."
      },
      {
       "en": "rely on",
       "ar": "يعتمد على",
       "em": "🤲",
       "ex": "I must rely on God.",
       "exAr": "عليّ أن أعتمد على الله."
      }
     ],
     "reading": {
      "title": "Good news from the hospital",
      "paras": [
       {
        "en": "Sameera's mother had been sick for several weeks when she finally went to hospital for a big stomach operation. Luckily, it was successful, and she was soon able to get up and walk around. Then one day Sameera called Hadeel from the hospital. Sameera: The doctor's saying that my mum can go home. And they're asking when I can take her. Hadeel: That's just fantastic! Sameera: But it's just so sudden! And they're asking how soon they can have my mum's bed. They're saying they need it urgently for another patient by 2:00 pm, and it's 11:00 am now. They're asking me to take my mum as soon as possible.",
        "ar": "كانت والدة سميرة مريضةً منذ عدّة أسابيع حين ذهبت أخيراً إلى المستشفى لإجراء عمليّةٍ كبيرة في المعدة. ولحسن الحظّ نجحت العمليّة، وسرعان ما أصبحت قادرةً على النهوض والتجوّل. وفي أحد الأيّام اتّصلت سميرة بهديل من المستشفى. سميرة: الطبيب يقول إنّ أمّي تستطيع العودة إلى البيت، وهم يسألون متى أستطيع أن آخذها. هديل: هذا رائعٌ حقّاً! سميرة: لكنّه مفاجئٌ جدّاً! وهم يسألون متى يمكنهم الحصول على سرير أمّي. يقولون إنّهم يحتاجونه بشكلٍ عاجل لمريضٍ آخر قبل الساعة الثانية ظهراً، والساعة الآن الحادية عشرة صباحاً. إنّهم يطلبون منّي أن آخذ أمّي في أقرب وقتٍ ممكن."
       },
       {
        "en": "Hadeel: What's the problem? Sameera: I haven't brought her any clothes! Can I ask a favour? Hadeel: Of course. Sameera: Could you get my mum's clothes? They're on her bed. Hadeel: But I was planning to fetch the children from summer camp for you. Sameera: Could Nidal and Rami do that? And please, could they not be late?",
        "ar": "هديل: ما المشكلة؟ سميرة: لم أُحضر لها أيّ ملابس! هل يمكنني أن أطلب منكِ معروفاً؟ هديل: بالطبع. سميرة: هل يمكنكِ أن تجلبي ملابس أمّي؟ إنّها على سريرها. هديل: لكنّني كنتُ أنوي إحضار الأطفال من المخيّم الصيفي لكِ. سميرة: هل يستطيع نضال ورامي فعل ذلك؟ ومن فضلكِ، هل يمكن ألّا يتأخّرا؟"
       },
       {
        "en": "The boys were out, so Hadeel called Nidal. Hadeel: Sameera's mum is coming home today, but she needs my help, and she needs yours, too. She wants me to get her mum's clothes. Nidal: Fine, what does she need us to do? Hadeel: She wants you to fetch the children from summer camp. And she's asking you not to be late. Nidal: We'll go straight there. An hour later, Hadeel reached the hospital with Mrs Masri's things. Mrs Masri: Hello, Hadeel! It's lovely to see you. Hadeel: And it's lovely that you can go home now.",
        "ar": "كان الولدان خارج البيت، فاتّصلت هديل بنضال. هديل: ستعود والدة سميرة إلى البيت اليوم، لكنّها تحتاج إلى مساعدتي وإلى مساعدتك أنت أيضاً. إنّها تريدني أن أجلب ملابس أمّها. نضال: حسناً، ماذا تريدنا أن نفعل؟ هديل: تريدك أن تُحضر الأطفال من المخيّم الصيفي، وتطلب منك ألّا تتأخّر. نضال: سنذهب إلى هناك فوراً. وبعد ساعة وصلت هديل إلى المستشفى ومعها أغراض السيّدة مصري. السيّدة مصري: مرحباً يا هديل! من الجميل أن أراكِ. هديل: ومن الجميل أنّكِ تستطيعين العودة إلى البيت الآن."
       },
       {
        "en": "Hospital stories, by Jenan Rashidi. Today, I'm visiting a large Palestinian hospital to ask patients how their time there has helped them. And I want to find out how they feel about their experiences and about changes in their lives. First, I talk to Mrs Amal Masri. She's leaving after a successful stomach operation, and I ask whether she was nervous before she had it. 'I was,' she explains, 'but then I realized that I must just trust my doctor and rely on God. Now I feel I must use my new life well.'",
        "ar": "قصص من المستشفى، بقلم جنان رشيدي. أزور اليوم مستشفىً فلسطينيّاً كبيراً لأسأل المرضى كيف ساعدتهم إقامتهم فيه، وأريد أن أعرف شعورهم تجاه تجاربهم وتجاه التغيّرات في حياتهم. أتحدّث أوّلاً إلى السيّدة آمال مصري. إنّها تغادر بعد عمليّةٍ ناجحة في المعدة، وأسألها إن كانت متوتّرةً قبل إجرائها. تقول: «كنتُ كذلك، لكنّني أدركتُ بعد ذلك أنّ عليّ أن أثق بطبيبي وأعتمد على الله. والآن أشعر أنّ عليّ أن أحسن استعمال حياتي الجديدة.»"
       },
       {
        "en": "Next, I meet Samar and Anas Rammal. Samar's just become a mother – with twins who were safely born today. I ask if they get worried about the hard work ahead. 'Not really,' she says. 'Right now, we're just very pleased to have two beautiful, healthy babies.'",
        "ar": "بعد ذلك ألتقي سمر وأنس رمّال. لقد أصبحت سمر أمّاً للتوّ بتوأمين وُلدا اليوم بسلام. أسأل إن كانا يقلقان من العمل الشاقّ الذي ينتظرهما. تقول: «لا كثيراً. نحن الآن سعيدان جدّاً بطفلين جميلين وسليمين.»"
       },
       {
        "en": "Finally, I see young Osama Yousifi. He lost his lower legs in an accident, and I ask whether he's managed to build a new life with this disability. 'It was hard at first,' he says, 'because I used to do a lot of sport. Without legs, it seemed I'd lost all that. But,' he continues, 'look at the new artificial legs that they've given me today. With these, I'll be faster than most other athletes. I'm really happy that I can live a normal life again!' It's amazing, isn't it? There are so many ordinary people who are so brave, so strong and so full of hope and love. I'm proud to be a human being!",
        "ar": "وأخيراً أرى الشابّ أسامة يوسفي. لقد فقد ساقيه السفليّتين في حادث، وأسأله إن كان قد نجح في بناء حياةٍ جديدة مع هذه الإعاقة. يقول: «كان الأمر صعباً في البداية لأنّني كنتُ أمارس رياضاتٍ كثيرة. وبلا ساقين بدا أنّني خسرتُ ذلك كلّه. لكن انظر إلى الساقين الاصطناعيّتين الجديدتين اللتين أعطوني إيّاهما اليوم. بهما سأكون أسرع من معظم الرياضيّين الآخرين. أنا سعيدٌ حقّاً لأنّني أستطيع أن أعيش حياةً طبيعيّة من جديد!» أليس هذا مدهشاً؟ هناك كثيرٌ من الناس العاديّين الشجعان الأقوياء المليئين بالأمل والحبّ. أنا فخورةٌ بأنّني إنسان!"
       }
      ],
      "questions": [
       {
        "q": "Why did Sameera's mum have to leave the hospital quickly?",
        "o": [
         "She felt much better",
         "The bed was needed urgently for another patient",
         "She wanted to see her children"
        ],
        "a": 1
       },
       {
        "q": "What does Sameera ask Hadeel to do?",
        "o": [
         "Fetch the children",
         "Call the doctor",
         "Get her mum's clothes"
        ],
        "a": 2
       },
       {
        "tf": true,
        "q": "Nidal and Rami are asked to fetch the children from summer camp."
       },
       {
        "q": "What did Mrs Masri realize before her operation?",
        "o": [
         "She must trust her doctor and rely on God",
         "She must go home",
         "She must stop working"
        ],
        "a": 0
       },
       {
        "tf": false,
        "q": "Samar and Anas are very worried about the hard work ahead.",
        "why": "قالت: Not really."
       },
       {
        "q": "Why is Osama really happy?",
        "o": [
         "He won a race",
         "He has new artificial legs and can live a normal life again",
         "He is leaving the hospital"
        ],
        "a": 1
       }
      ]
     },
     "rules": [
      {
       "title": "Reported statements and requests",
       "titleAr": "الكلام المنقول: الأخبار والطلبات",
       "explain": "عندما ننقل كلام شخصٍ آخر نغيّر غالباً <b>الضمائر</b> (your mother → my mum). في <b>الأخبار</b> نستعمل فعلاً مثل <b>say</b> ويجوز حذف <b>that</b> (They're saying (that) they need it urgently). أمّا <b>الطلبات</b> مثل Could you get my mum's clothes? فيختفي فيها شكل الطلب ونستعمل <b>ask / tell / want / would like + شخص + to + V1</b> (She wants me to get her mum's clothes). وفي الطلب المنفيّ تأتي <b>not</b> قبل to (She is asking you not to be late).",
       "form": "خبر: S + say(s) (that) + جملة    ·    طلب: S + ask / tell / want / would like + someone + (not) to + V1",
       "examples": [
        {
         "en": "Your mother can go. → He's saying (that) **my** mum can go.",
         "ar": "خبر منقول"
        },
        {
         "en": "We need it urgently. → They're saying **they** need it urgently.",
         "ar": "خبر منقول"
        },
        {
         "en": "Could you get my mum's clothes? → She **wants me to get** her mum's clothes.",
         "ar": "طلب منقول"
        },
        {
         "en": "Please could they not be late? → She is **asking you not to be** late.",
         "ar": "طلب منفيّ منقول"
        }
       ],
       "questions": [
        {
         "q": "'Could you get my mum's clothes?' → Sameera wants Hadeel ___ her mum's clothes.",
         "o": [
          "get",
          "to get",
          "getting"
         ],
         "a": 1,
         "why": "want + شخص + to + V1"
        },
        {
         "q": "'Your mother can go.' → He's saying that ___ mother can go.",
         "o": [
          "my",
          "your",
          "his"
         ],
         "a": 0,
         "why": "تتغيّر الضمائر عند النقل"
        },
        {
         "type": "type",
         "q": "'Could they not be late?' → She is asking you ___ to be late.",
         "a": [
          "not"
         ],
         "why": "not تأتي قبل to"
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «إنّها تطلب منك ألّا تتأخّر»",
         "words": [
          "She",
          "is",
          "asking",
          "you",
          "not",
          "to",
          "be",
          "late."
         ]
        },
        {
         "tf": false,
         "q": "The correct sentence is: She wants me getting her mum's clothes.",
         "why": "الصحيح: She wants me to get her mum's clothes."
        },
        {
         "q": "'Take things very slowly at first.' → The doctor wants her ___ things very slowly.",
         "o": [
          "take",
          "to take",
          "taking"
         ],
         "a": 1,
         "why": "want + شخص + to + V1"
        }
       ]
      },
      {
       "title": "Reported questions",
       "titleAr": "الأسئلة المنقولة",
       "explain": "عند نقل <b>السؤال</b> يتغيّر ترتيب الكلمات فيصبح كترتيب <b>الجملة الخبريّة</b> (فاعل ثم فعل) بلا فعل مساعد للسؤال ولا علامة استفهام. مع أسئلة <b>Wh</b> نبقي كلمة السؤال (When can you take her? → They are asking <b>when I can</b> take her). ومع أسئلة <b>Yes / No</b> نستعمل <b>if</b> أو <b>whether</b> (Were you nervous? → I ask <b>if she was</b> nervous). وتستعمل مع الفعل ask أو want to know.",
       "form": "ask / want to know + كلمة Wh + فاعل + فعل    ·    ask / want to know + if / whether + فاعل + فعل",
       "examples": [
        {
         "en": "What has it done to help you? → I ask **what it has done** to help them.",
         "ar": "سؤال Wh منقول"
        },
        {
         "en": "How do you feel? → I want to find out **how they feel**.",
         "ar": "سؤال Wh منقول"
        },
        {
         "en": "Were you nervous before that? → I ask **if she was** nervous before that.",
         "ar": "سؤال Yes / No"
        },
        {
         "en": "Do you get worried? → I ask **whether they get** worried.",
         "ar": "سؤال Yes / No"
        }
       ],
       "questions": [
        {
         "q": "'When can you take her?' → They are asking when I ___ her.",
         "o": [
          "take",
          "can take",
          "can I take"
         ],
         "a": 1,
         "why": "ترتيب الجملة الخبريّة"
        },
        {
         "q": "'Were you nervous?' → I ask ___ she was nervous.",
         "o": [
          "if",
          "that",
          "what"
         ],
         "a": 0,
         "why": "Yes / No: نستعمل if أو whether"
        },
        {
         "q": "'Do you get worried?' → I ask ___ they get worried.",
         "o": [
          "why",
          "whether",
          "that"
         ],
         "a": 1,
         "why": "whether = if"
        },
        {
         "type": "type",
         "q": "'How do you feel now?' → I ask Mrs Masri how she ___ now. (feel)",
         "a": [
          "feels"
         ],
         "why": "ترتيب خبريّ: she feels"
        },
        {
         "tf": false,
         "q": "The correct sentence is: I ask if was she nervous.",
         "why": "الصحيح: I ask if she was nervous."
        },
        {
         "type": "order",
         "q": "رتّب الكلمات: «إنّه يريد أن يعرف إن كنتَ متفرّغاً»",
         "words": [
          "He",
          "wants",
          "to",
          "know",
          "whether",
          "you",
          "are",
          "free."
         ]
        }
       ]
      },
      {
       "title": "Adjectives and adverbs · by",
       "titleAr": "الصفات والظروف (-ly) والحرف by",
       "explain": "<b>الصفة</b> تصف الاسم (a successful operation) أمّا <b>الظرف</b> فيصف الفعل أو الجملة (She spoke successfully). نكوّن الظرف غالباً بإضافة <b>-ly</b> (nervous → nervously، lucky → luckily، possible → possibly، urgent → urgently). وبعض الكلمات لها الشكل نفسه كصفة وظرف مثل <b>hard</b> و<b>fast</b>. أمّا <b>by</b> فلها معانٍ: الفاعل (by Jenan Rashidi)، والطريقة (by bus)، و«قبل» (by 2:00)، و«بجانب» (by the entrance).",
       "form": "صفة + -ly = ظرف    ·    lucky → luckily    ·    hard / fast = الشكل نفسه",
       "examples": [
        {
         "en": "**Luckily**, the operation was successful.",
         "ar": "ظرف في أوّل الجملة"
        },
        {
         "en": "Ali was behaving quite **strangely**.",
         "ar": "ظرف يصف الفعل"
        },
        {
         "en": "The hospital needs the bed **by** 2:00.",
         "ar": "by = قبل"
        },
        {
         "en": "Jenan went to the hospital **by** bus.",
         "ar": "by = وسيلة"
        },
        {
         "en": "Hospital stories, **by** Jenan Rashidi.",
         "ar": "by = كاتب الفعل"
        }
       ],
       "questions": [
        {
         "q": "The adverb of 'lucky' is ___.",
         "o": [
          "luckyly",
          "luckily",
          "lucky"
         ],
         "a": 1,
         "why": "y → ily"
        },
        {
         "q": "Please hold the baby very ___.",
         "o": [
          "gently",
          "gentle",
          "gentlly"
         ],
         "a": 0,
         "why": "gentle → gently"
        },
        {
         "type": "type",
         "q": "The adverb of 'successful' is ___.",
         "a": [
          "successfully"
         ],
         "why": "successful + ly"
        },
        {
         "q": "Ali drives very ___.",
         "o": [
          "fastly",
          "fast",
          "fastily"
         ],
         "a": 1,
         "why": "fast = الشكل نفسه"
        },
        {
         "q": "'The hospital needs the bed by 2:00.' Here 'by' means ___.",
         "o": [
          "near",
          "not later than",
          "how something is done"
         ],
         "a": 1,
         "why": "by = قبل أو عند"
        },
        {
         "tf": true,
         "q": "The adverb of 'final' is 'finally'."
        }
       ]
      }
     ],
     "mastery": [
      {
       "q": "\"patient\" means:",
       "o": [
        "مريض (في المستشفى)",
        "رياضي",
        "معروف"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "q": "\"nervous\" means:",
       "o": [
        "اصطناعي",
        "عادي",
        "متوتّر"
       ],
       "a": 2,
       "lv": "easy"
      },
      {
       "tf": true,
       "q": "Mrs Masri's operation was successful.",
       "lv": "easy"
      },
      {
       "q": "\"luckily\" means:",
       "o": [
        "بشكلٍ عاجل",
        "لحسن الحظّ",
        "في أقرب وقت"
       ],
       "a": 1,
       "lv": "easy"
      },
      {
       "q": "The adverb of 'nervous' is ___.",
       "o": [
        "nervously",
        "nervousy",
        "nervousing"
       ],
       "a": 0,
       "lv": "easy"
      },
      {
       "type": "match",
       "q": "صِل كلّ كلمة بمعناها",
       "pairs": [
        [
         "artificial",
         "اصطناعي"
        ],
        [
         "athlete",
         "رياضي"
        ],
        [
         "realize",
         "يدرك"
        ],
        [
         "rely on",
         "يعتمد على"
        ]
       ],
       "lv": "medium"
      },
      {
       "q": "'Could you get my mum's clothes?' → She wants me ___ her mum's clothes.",
       "o": [
        "get",
        "to get",
        "getting"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "'When can you take her?' → They are asking when I ___ her.",
       "o": [
        "can take",
        "can I take",
        "take can"
       ],
       "a": 0,
       "lv": "medium"
      },
      {
       "q": "'Were you nervous?' → I ask ___ she was nervous.",
       "o": [
        "what",
        "if",
        "that"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "q": "Why did Sameera call Hadeel?",
       "o": [
        "To invite her to a party",
        "To ask for a favour",
        "To say goodbye"
       ],
       "a": 1,
       "lv": "medium"
      },
      {
       "tf": false,
       "q": "Samar and Anas Rammal are worried about the hard work ahead.",
       "why": "قالت سمر: Not really.",
       "lv": "medium"
      },
      {
       "type": "type",
       "q": "'Please could they not be late?' → She's asking them ___ to be late.",
       "a": [
        "not"
       ],
       "lv": "hard"
      },
      {
       "type": "type",
       "q": "The adverb of 'possible' is ___.",
       "a": [
        "possibly"
       ],
       "lv": "hard"
      },
      {
       "type": "order",
       "q": "رتّب الكلمات: «إنّه يريد أن يعرف إن كنتَ متفرّغاً»",
       "words": [
        "He",
        "wants",
        "to",
        "know",
        "whether",
        "you",
        "are",
        "free."
       ],
       "lv": "hard"
      },
      {
       "q": "Choose the correct sentence.",
       "o": [
        "I ask if was she nervous.",
        "I ask if she was nervous.",
        "I ask was she nervous?"
       ],
       "a": 1,
       "lv": "hard"
      },
      {
       "q": "'The hospital needs the bed by 2:00.' What does 'by' mean here?",
       "o": [
        "near",
        "using",
        "not later than"
       ],
       "a": 2,
       "lv": "hard"
      },
      {
       "q": "What does Osama say about his new artificial legs?",
       "o": [
        "They are too heavy",
        "With them he'll be faster than most other athletes",
        "He doesn't need them"
       ],
       "a": 1,
       "lv": "hard"
      }
     ]
    }
   ]
  }
 }
};
