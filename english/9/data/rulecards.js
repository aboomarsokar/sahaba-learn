/* بطاقات شرح القواعد: لكلّ قاعدة سلسلة بطاقات (تعريف ← تكوين ← نفي ← سؤال ← ملاحظة).
   المفتاح: <رقم الدرس>#<رقم القاعدة>.   وسوم التلوين: {s|فاعل} {v|فعل} {t|أداة تكوين} {n|أداة نفي} */
window.LEXORA_RULECARDS = {
 "1-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|present continuous} for actions happening now or around now, and for {t|near future plans} that are already arranged.",
   "useAr": "نستعمل {t|المضارع المستمر} للأفعال الجارية الآن أو في هذه الفترة، و{t|للخطط القريبة} المرتَّب لها.",
   "signals": [
    "now",
    "at the moment",
    "right now",
    "this year",
    "tomorrow",
    "next week"
   ]
  },
  {
   "k": "pos",
   "label": "Now · around now",
   "labelAr": "الآن أو في هذه الفترة",
   "formula": "{s|Subject} + {t|am / is / are} + {v|V-ing}",
   "examples": [
    {
     "en": "We {t|are} now {v|flying} at 11,500 metres.",
     "ar": "نحن نطير الآن على ارتفاع ١١٥٠٠ متر."
    },
    {
     "en": "This year Hadeel and Nidal {t|are} {v|doing} something different.",
     "ar": "هذا العام تفعل هديل ونضال شيئاً مختلفاً."
    }
   ],
   "tip": "نستعمله لما يحدث الآن أو لفترة مؤقّتة."
  },
  {
   "k": "pos",
   "label": "Future plans",
   "labelAr": "خطط مستقبلية",
   "formula": "{s|Subject} + {t|am / is / are} + {v|V-ing} + {t|future time}",
   "examples": [
    {
     "en": "They {t|are} {v|arriving} very soon.",
     "ar": "سيصلان قريباً جدّاً."
    },
    {
     "en": "We {t|are} {v|staying} with them for four weeks.",
     "ar": "سنبقى معهم أربعة أسابيع."
    }
   ],
   "tip": "لا بدّ من ذكر وقتٍ مستقبلي (tomorrow, next week)."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|am / is / are} + {n|not} + {v|V-ing}",
   "examples": [
    {
     "en": "I {t|'m} {n|not} {v|doing} anything much tomorrow.",
     "ar": "لن أفعل شيئاً يُذكر غداً."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Am / Is / Are} + {s|Subject} + {v|V-ing}?",
   "examples": [
    {
     "en": "{t|What} {t|are} {s|you} {v|doing} this evening?",
     "ar": "ماذا ستفعل هذا المساء؟"
    },
    {
     "en": "{t|Are} {s|you} {v|doing} anything tomorrow evening?",
     "ar": "هل ستفعل شيئاً مساء الغد؟"
    }
   ]
  }
 ],
 "1-1#1": [
  {
   "k": "intro",
   "useEn": "We use the {t|present simple} for regular actions, things that stay the same, and {t|fixed future schedules} such as flights and tours.",
   "useAr": "نستعمل {t|المضارع البسيط} للأفعال المتكرّرة والأمور الثابتة و{t|الجداول المستقبلية الثابتة} كالرحلات والجولات.",
   "signals": [
    "every week",
    "usually",
    "always",
    "at 8:10 tomorrow",
    "on Wednesday"
   ]
  },
  {
   "k": "pos",
   "label": "Regular actions",
   "labelAr": "أفعال متكرّرة",
   "formula": "{s|Subject} + {v|V1 / V(s)} + every week …",
   "examples": [
    {
     "en": "These tours {v|start} from Jerusalem every week.",
     "ar": "تنطلق هذه الجولات من القدس كلّ أسبوع."
    },
    {
     "en": "He {v|spends} many hours in the air every week.",
     "ar": "يقضي ساعات كثيرة في الجوّ كلّ أسبوع."
    }
   ],
   "tip": "مع he / she / it نضيف s أو es."
  },
  {
   "k": "pos",
   "label": "Future schedules",
   "labelAr": "جداول مستقبلية",
   "formula": "{s|Subject} + {v|V1 / V(s)} + {t|time}",
   "examples": [
    {
     "en": "We {v|begin} our walking tour at 10:00.",
     "ar": "نبدأ جولتنا سيراً على الأقدام في العاشرة."
    },
    {
     "en": "The flight {v|leaves} at 8:10 tomorrow morning.",
     "ar": "تقلع الرحلة في الثامنة وعشر دقائق صباح الغد."
    }
   ],
   "tip": "نستعمله لمواعيد ثابتة لا لخطط شخصية."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|don't / doesn't} + {v|V1}",
   "examples": [
    {
     "en": "He {t|doesn't} {v|like} staying away from his family.",
     "ar": "لا يحبّ الابتعاد عن عائلته."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Do / Does} + {s|Subject} + {v|V1}?",
   "examples": [
    {
     "en": "What time {t|does} your flight {v|leave} tomorrow?",
     "ar": "في أيّ ساعة تقلع رحلتك غداً؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Stative verbs",
   "labelAr": "أفعال الحالة",
   "body": "{t|like · love · prefer · want}   مشاعر\n{t|look · seem · sound}   حواس\n{t|know · believe · forget}   فكر\n{t|need · include}   حالات\n{n|✗} He is loving flying.   {t|✓} He loves flying.",
   "examples": [
    {
     "en": "He {t|prefers} the shorter flights.",
     "ar": "يفضّل الرحلات الأقصر."
    }
   ]
  }
 ],
 "1-1#2": [
  {
   "k": "intro",
   "useEn": "We use {t|prepositions of time} to say when, and {t|prepositions of place} to say where.",
   "useAr": "نستعمل {t|حروف الجرّ للزمان} لنقول متى، و{t|حروف الجرّ للمكان} لنقول أين.",
   "signals": [
    "in",
    "on",
    "at",
    "during",
    "for",
    "from … to"
   ]
  },
  {
   "k": "note",
   "label": "Time",
   "labelAr": "الزمان",
   "body": "{t|in} July · in 2015 · in the morning\n{t|on} Saturday · on July 10th\n{t|at} 9:30 · at night\n{t|during} the flight\n{t|for} four weeks\n{t|from … to} July 10th to August 7th",
   "examples": [
    {
     "en": "They arrived {t|at} 9:30 {t|on} the 11th.",
     "ar": "وصلا في التاسعة والنصف يوم الحادي عشر."
    }
   ]
  },
  {
   "k": "note",
   "label": "Place",
   "labelAr": "المكان",
   "body": "{t|at} the airport · at the back\n{t|in} the picture · in her hand\n{t|on} the grass · on page 5\n{t|near} · {t|next to} · {t|outside}",
   "examples": [
    {
     "en": "The flight attendant is standing {t|next to} them.",
     "ar": "المضيفة تقف بجانبهما."
    },
    {
     "en": "Their plane is landing {t|at} the airport.",
     "ar": "طائرتهما تهبط في المطار."
    }
   ]
  }
 ],
 "2-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|present perfect} for actions that are finished but connected to now. With {t|already}, {t|still} and {t|yet} we say if something is done sooner or later than we expected.",
   "useAr": "نستعمل {t|المضارع التام} لأفعال تمّت وترتبط بالحاضر. ومع {t|already} و{t|still} و{t|yet} نبيّن هل تمّ الفعل أبكر أو أبطأ ممّا يُتوقّع.",
   "signals": [
    "already",
    "still",
    "yet",
    "just",
    "so far"
   ]
  },
  {
   "k": "pos",
   "label": "Positive · already",
   "labelAr": "الإثبات مع already",
   "formula": "{s|Subject} + {t|have / has} + {t|already} + {v|V3}",
   "examples": [
    {
     "en": "I {t|have} {t|already} {v|seen} a nice wardrobe.",
     "ar": "رأيتُ بالفعل خزانة جميلة."
    },
    {
     "en": "Mum {t|has} {t|already} {v|chosen} a new carpet.",
     "ar": "اختارت أمّي بالفعل سجّادة جديدة."
    }
   ],
   "tip": "already = أبكر ممّا يتوقّع الناس."
  },
  {
   "k": "neg",
   "label": "Negative · still … not / yet",
   "labelAr": "النفي مع still وyet",
   "formula": "{s|Subject} + {t|still} + {n|haven't / hasn't} + {v|V3}",
   "examples": [
    {
     "en": "We {t|still} {n|haven't} {v|done} the flowers.",
     "ar": "ما زلنا لم نضع الزهور."
    },
    {
     "en": "They {n|haven't} {v|made} any curtains {t|yet}.",
     "ar": "لم يصنعوا أيّ ستائر بعد."
    }
   ],
   "tip": "still = أبطأ ممّا يتوقّع الناس؛ yet تأتي في آخر الجملة."
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Have / Has} + {s|Subject} + {v|V3} + {t|yet}?",
   "examples": [
    {
     "en": "{t|Have} {s|Mrs Qadiri and Lana} {v|made} some new curtains {t|yet}?",
     "ar": "هل صنعت السيدة قادري ولانا ستائر جديدة بعد؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|already} → إثبات\n{t|still … not} / {t|not … yet} → نفي\n{t|yet} → سؤال أو نفي\n{n|✗} I have already seen it yesterday.\n{t|✓} I saw it yesterday.",
   "examples": [
    {
     "en": "Little Tariq {t|has already started} to run.",
     "ar": "بدأ الصغير طارق يركض بالفعل."
    }
   ]
  }
 ],
 "2-1#1": [
  {
   "k": "intro",
   "useEn": "We use the {t|present perfect continuous} to stress that an action has been going on for a long time up to now.",
   "useAr": "نستعمل {t|المضارع التام المستمر} للتأكيد أنّ الفعل استمرّ مدّة طويلة حتى الآن.",
   "signals": [
    "for ages",
    "for hours",
    "for a week",
    "since Monday",
    "all day"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|have / has} + {t|been} + {v|V-ing}",
   "examples": [
    {
     "en": "We {t|have} {t|been} {v|talking} about it for ages.",
     "ar": "نتحدّث عن ذلك منذ زمن طويل."
    },
    {
     "en": "The family {t|have} {t|been} {v|working} hard for the past week.",
     "ar": "تعمل العائلة بجدّ منذ الأسبوع الماضي."
    }
   ],
   "tip": "نذكر المدّة بـ for أو نقطة البداية بـ since."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {n|haven't / hasn't} + {t|been} + {v|V-ing}",
   "examples": [
    {
     "en": "They {n|haven't} {t|been} {v|working} for long.",
     "ar": "لم يعملوا منذ مدّة طويلة."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|How long} + {t|have / has} + {s|Subject} + {t|been} + {v|V-ing}?",
   "examples": [
    {
     "en": "{t|How long} {t|has} {s|Waleed} {t|been} {v|painting} that room?",
     "ar": "منذ متى يدهن وليد تلك الغرفة؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Emphasis",
   "labelAr": "التأكيد",
   "body": "Waleed {t|has been painting} that room for ages, but he {t|still hasn't finished} it.\nHe's {t|only been walking} for a week!",
   "examples": [
    {
     "en": "Muneera has {t|only been learning} for ten weeks.",
     "ar": "منيرة تتعلّم منذ عشرة أسابيع فقط."
    }
   ]
  }
 ],
 "2-1#2": [
  {
   "k": "intro",
   "useEn": "We use the {t|past simple} for actions that finished in the past, and the {t|present perfect} for actions that join the past to the present.",
   "useAr": "نستعمل {t|الماضي البسيط} لأفعال انتهت في الماضي، و{t|المضارع التام} لأفعال تربط الماضي بالحاضر.",
   "signals": [
    "ago",
    "yesterday",
    "last week",
    "long ago",
    "for",
    "since",
    "already"
   ]
  },
  {
   "k": "pos",
   "label": "Past simple",
   "labelAr": "الماضي البسيط",
   "formula": "{s|Subject} + {v|V2} + {t|ago / yesterday / last …}",
   "examples": [
    {
     "en": "The family {v|arrived} in London fifteen months {t|ago}.",
     "ar": "وصلت العائلة إلى لندن قبل خمسة عشر شهراً."
    },
    {
     "en": "Long ago, the Masai {v|began} building their houses in circles.",
     "ar": "منذ زمن بعيد بدأ المَسَاي ببناء بيوتهم دوائر."
    }
   ],
   "tip": "الفعل انتهى تماماً في الماضي."
  },
  {
   "k": "pos",
   "label": "Present perfect",
   "labelAr": "المضارع التام",
   "formula": "{s|Subject} + {t|have / has} + {v|V3} + {t|for / since}",
   "examples": [
    {
     "en": "The family {t|have} {v|lived} in London {t|for} fifteen months.",
     "ar": "تعيش العائلة في لندن منذ خمسة عشر شهراً."
    },
    {
     "en": "One thing {t|has} not {v|changed}.",
     "ar": "هناك أمر واحد لم يتغيّر."
    }
   ],
   "tip": "الفعل يمتدّ إلى الآن أو يؤثّر فيه."
  },
  {
   "k": "note",
   "label": "Compare",
   "labelAr": "قارن",
   "body": "arrived … {t|ago} → past simple\nhave lived … {t|for} → present perfect\nhave lived … {t|since} they arrived\n{n|✗} They have arrived yesterday.\n{t|✓} They arrived yesterday.",
   "examples": [
    {
     "en": "When did he get it? He {t|got} it yesterday morning.",
     "ar": "متى حصل عليها؟ حصل عليها صباح أمس."
    }
   ]
  }
 ],
 "3-1#0": [
  {
   "k": "intro",
   "useEn": "We use {t|-er / -est} or {t|more / most} to compare people and things, and {t|(not) as … as} to say things are equal or not.",
   "useAr": "نستعمل {t|-er / -est} أو {t|more / most} لمقارنة الأشخاص والأشياء، و{t|(not) as … as} للمساواة أو عدمها.",
   "signals": [
    "than",
    "the … -est",
    "as … as",
    "more / most"
   ]
  },
  {
   "k": "pos",
   "label": "Short adjectives",
   "labelAr": "الصفات القصيرة",
   "formula": "{s|Subject} + {v|adj + er} + {t|than}  ·  {t|the} + {v|adj + est}",
   "examples": [
    {
     "en": "Yasser feels {v|sicker} {t|than} Fuad.",
     "ar": "ياسر أشدّ مرضاً من فؤاد."
    },
    {
     "en": "Majed feels {t|the} {v|sickest} of them all.",
     "ar": "ماجد هو الأشدّ مرضاً بينهم جميعاً."
    }
   ],
   "tip": "fit ← fitter ← the fittest (نضاعف الحرف الأخير)."
  },
  {
   "k": "pos",
   "label": "Long adjectives and adverbs",
   "labelAr": "الصفات الطويلة والأحوال",
   "formula": "{t|more / the most} + {v|adj / adv}",
   "examples": [
    {
     "en": "The {t|most} {v|important} match is on Saturday.",
     "ar": "أهمّ مباراة في العام يوم السبت."
    },
    {
     "en": "You should take things {t|more} {v|slowly}.",
     "ar": "عليك أن تأخذ الأمور ببطء أكبر."
    }
   ],
   "tip": "الأحوال التي بلا -ly (fast, hard, well) كالصفات: faster, harder, better."
  },
  {
   "k": "neg",
   "label": "(not) as … as",
   "labelAr": "(not) as … as",
   "formula": "{s|Subject} + {t|(not) as} + {v|adj / adv} + {t|as}",
   "examples": [
    {
     "en": "You're {n|not} {t|as} {v|strong} {t|as} you think.",
     "ar": "لستَ قويّاً كما تظنّ."
    },
    {
     "en": "Reema didn't run {t|as} {v|fast} {t|as} Sameera.",
     "ar": "ريما لم تركض بسرعة سميرة."
    }
   ]
  },
  {
   "k": "note",
   "label": "Irregular",
   "labelAr": "الشاذّ",
   "body": "{v|good / well} → {t|better} → {t|the best}\n{v|bad / badly} → {t|worse} → {t|the worst}",
   "examples": [
    {
     "en": "I am much better than I was.",
     "ar": "أنا أفضل بكثير ممّا كنت."
    }
   ]
  }
 ],
 "3-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|too} when something is {t|more} than we need, and {t|not … enough} when it is {t|less} than we need.",
   "useAr": "نستعمل {t|too} حين يكون الشيء {t|أكثر} من اللازم، و{t|not … enough} حين يكون {t|أقلّ} من اللازم.",
   "signals": [
    "too",
    "enough",
    "for you",
    "to do"
   ]
  },
  {
   "k": "pos",
   "label": "too",
   "labelAr": "too",
   "formula": "{s|Subject} + {t|be} + {t|too} + {v|adj} (+ for … / to …)",
   "examples": [
    {
     "en": "Climbing is {t|too} {v|dangerous} {t|for you}.",
     "ar": "التسلّق خطِر أكثر من اللازم عليك."
    },
    {
     "en": "Your body was {t|too} {v|weak} {t|to do} sports.",
     "ar": "جسمك أضعف من أن يمارس الرياضة."
    }
   ],
   "tip": "too تأتي قبل الصفة."
  },
  {
   "k": "neg",
   "label": "not … enough",
   "labelAr": "not … enough",
   "formula": "{s|Subject} + {n|not} + {v|adj} + {t|enough} (+ to …)",
   "examples": [
    {
     "en": "I was {n|not} {v|fit} {t|enough} {t|to train}.",
     "ar": "لم أكن لائقاً بما يكفي للتدريب."
    },
    {
     "en": "I have {n|not} been {v|active} {t|enough}.",
     "ar": "لم أكن نشيطاً بما يكفي."
    }
   ],
   "tip": "enough تأتي بعد الصفة."
  }
 ],
 "3-1#2": [
  {
   "k": "intro",
   "useEn": "We change the {t|form} of a word to make a noun, an adjective or a verb.",
   "useAr": "نغيّر {t|صيغة} الكلمة لنكوّن اسماً أو صفة أو فعلاً.",
   "signals": [
    "safe → safety",
    "danger → dangerous",
    "health → healthy",
    "act → active"
   ]
  },
  {
   "k": "note",
   "label": "Examples",
   "labelAr": "أمثلة",
   "body": "{v|safe} → {t|safety}\n{v|danger} → {t|dangerous}\n{v|health} → {t|healthy}\n{v|act} → {t|active} → {t|activity}",
   "examples": [
    {
     "en": "For good health you need to eat real food.",
     "ar": "لصحّة جيّدة تحتاج إلى طعام حقيقي."
    },
    {
     "en": "It isn't healthy to eat just fries and sweets.",
     "ar": "ليس صحّياً أن تأكل البطاطا المقلية والحلويات فقط."
    }
   ]
  }
 ],
 "4-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|past continuous} for a {t|long} action in the past, and the {t|past simple} for a {t|short} action that happened during it.",
   "useAr": "نستعمل {t|الماضي المستمرّ} للحدث {t|الطويل} في الماضي، و{t|الماضي البسيط} للحدث {t|القصير} الذي وقع في أثنائه.",
   "signals": [
    "while",
    "when",
    "at that time",
    "all the time"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|was / were} + {v|V-ing}",
   "examples": [
    {
     "en": "Jamie {t|was} {v|taking} the bus to school.",
     "ar": "كان جيمي يركب الحافلة إلى المدرسة."
    },
    {
     "en": "People {t|were} {v|killing} each other all the time.",
     "ar": "كان الناس يقتل بعضهم بعضاً طوال الوقت."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|wasn't / weren't} + {v|V-ing}",
   "examples": [
    {
     "en": "I {t|wasn't} {v|working} on the project.",
     "ar": "لم أكن أعمل على المشروع."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Was / Were} + {s|Subject} + {v|V-ing}?",
   "examples": [
    {
     "en": "{t|Were} {s|you} {v|working} on the new project?",
     "ar": "هل كنتَ تعمل على المشروع الجديد؟"
    }
   ],
   "tip": "What were you doing at eight o'clock last night?"
  },
  {
   "k": "note",
   "label": "while / when",
   "labelAr": "while / when",
   "body": "{t|While} + {v|past continuous}, {v|past simple}\n{v|Past simple} + {t|while} + {v|past continuous}",
   "examples": [
    {
     "en": "While I was looking at some books, I noticed one.",
     "ar": "بينما كنتُ أنظر إلى بعض الكتب لاحظتُ كتاباً."
    }
   ],
   "tip": "فاصلة إذا بدأت الجملة بـ while."
  }
 ],
 "4-1#1": [
  {
   "k": "intro",
   "useEn": "We use the {t|past perfect} to show that one action happened {t|before} another action or time in the past.",
   "useAr": "نستعمل {t|الماضي التامّ} لنبيّن أنّ حدثاً وقع {t|قبل} حدثٍ أو وقتٍ آخر في الماضي.",
   "signals": [
    "after",
    "before",
    "by + time",
    "as soon as"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|had} + {v|V3}",
   "examples": [
    {
     "en": "Most {t|had} {v|died} or left Palestine.",
     "ar": "كان معظمهم قد ماتوا أو غادروا فلسطين."
    },
    {
     "en": "Someone {t|had} {v|brought} it back.",
     "ar": "كان أحدهم قد أعادَه."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|hadn't} + {v|V3}",
   "examples": [
    {
     "en": "The assistant {t|hadn't} {v|lost} the book.",
     "ar": "لم تكن الموظّفة قد أضاعت الكتاب."
    }
   ]
  },
  {
   "k": "note",
   "label": "Two actions",
   "labelAr": "حدثان",
   "body": "{t|After} + {v|past perfect}, {v|past simple}\n{v|Past simple} + {t|after / before} + {v|past perfect}",
   "examples": [
    {
     "en": "After he had brought together large parts of the Muslim World, he turned to Jerusalem.",
     "ar": "بعد أن وحّد أجزاء كبيرة من العالم الإسلامي اتّجه إلى القدس."
    }
   ],
   "tip": "الأسبق: had + V3، الأحدث: الماضي البسيط."
  }
 ],
 "4-1#2": [
  {
   "k": "intro",
   "useEn": "We add {t|-er} to make a word for a {t|person}, and {t|-ly} to make an {t|adverb}.",
   "useAr": "نضيف {t|-er} لنكوّن كلمة تدلّ على {t|شخص}، و{t|-ly} لنكوّن {t|حالاً}.",
   "signals": [
    "believe → believer",
    "crusade → crusader",
    "free → freely"
   ]
  },
  {
   "k": "note",
   "label": "Examples",
   "labelAr": "أمثلة",
   "body": "{v|believe} → {t|believer}\n{v|crusade} → {t|crusader}\n{v|free} → {t|freely}\n{v|fair} → {t|fairly}\n{v|generous} → {t|generously}",
   "examples": [
    {
     "en": "People of both religions could travel there freely.",
     "ar": "استطاع أتباع الديانتين السفر إليها بحرّية."
    }
   ]
  }
 ],
 "5-1#0": [
  {
   "k": "intro",
   "useEn": "We use {t|a lot of} in positive statements. In questions and negative statements we use {t|many} with countable nouns and {t|much} with uncountable nouns. Instead of not many / not much we can say {t|(only) a few} and {t|(only) a little}.",
   "useAr": "نستخدم {t|a lot of} في الجمل المثبتة، و{t|many} مع المعدود و{t|much} مع غير المعدود في النفي والسؤال. وبدل not many / not much نقول {t|(only) a few} و{t|(only) a little}.",
   "signals": [
    "a lot of",
    "many",
    "much",
    "a few",
    "a little",
    "How many / How much"
   ]
  },
  {
   "k": "pos",
   "label": "Countable nouns",
   "labelAr": "الأسماء المعدودة",
   "formula": "{s|Subject} + have + {v|a lot of / (only) a few} + {s|plural noun}",
   "examples": [
    {
     "en": "Let's order {v|a lot of} cakes.",
     "ar": "لنطلب كثيراً من الكعك."
    },
    {
     "en": "There are only {v|a few} customers.",
     "ar": "لا يوجد إلا بضعة زبائن."
    }
   ],
   "tip": "a few تعني «قليل» مع المعدود."
  },
  {
   "k": "pos",
   "label": "Uncountable nouns",
   "labelAr": "الأسماء غير المعدودة",
   "formula": "{s|Subject} + have + {v|a lot of / (only) a little} + {s|uncountable noun}",
   "examples": [
    {
     "en": "Hadeel has {v|a lot of} money.",
     "ar": "لدى هديل نقود كثيرة."
    },
    {
     "en": "I only have {v|a little} money.",
     "ar": "ليس معي إلا قليل من النقود."
    }
   ],
   "tip": "a little تعني «قليل» مع غير المعدود."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|don't / doesn't} + have + {n|many / much} + {s|noun}",
   "examples": [
    {
     "en": "There are {n|not} {v|many} customers.",
     "ar": "لا يوجد زبائن كثيرون."
    },
    {
     "en": "I do {n|not} have {v|much} money.",
     "ar": "ليس معي نقود كثيرة."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|How many} + {s|plural noun} + …?  /  {t|How much} + {s|uncountable noun} + …?",
   "examples": [
    {
     "en": "{t|How many} {s|customers} are there?",
     "ar": "كم زبوناً يوجد؟"
    },
    {
     "en": "{t|How much} {s|money} do you have?",
     "ar": "كم من النقود معك؟"
    }
   ]
  }
 ],
 "5-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|a / an} (or some) when we start talking about something new. We use {t|the} when we refer to the same thing again, when there is only one of that thing, and in many place names.",
   "useAr": "نستخدم {t|a / an} (أو some) عند الحديث عن شيء جديد، و{t|the} عند الإشارة إلى الشيء نفسه مرّة أخرى، أو عندما يوجد منه واحد فقط، وفي كثير من أسماء الأماكن.",
   "signals": [
    "a / an",
    "some",
    "the",
    "only one",
    "place names"
   ]
  },
  {
   "k": "pos",
   "label": "New thing · a / an",
   "labelAr": "شيء جديد",
   "formula": "{t|a / an / some} + {s|noun}",
   "examples": [
    {
     "en": "Istanbul is {t|a} city on two continents.",
     "ar": "إسطنبول مدينة على قارّتين."
    },
    {
     "en": "I'd like {t|a} hat, please.",
     "ar": "أودّ قبّعة من فضلك."
    }
   ],
   "tip": "an قبل الكلمات التي تبدأ بحرف علّة: an exciting city."
  },
  {
   "k": "pos",
   "label": "Same or only one · the",
   "labelAr": "شيء معروف أو وحيد",
   "formula": "{t|the} + {s|noun}",
   "examples": [
    {
     "en": "{t|The} Topkapi Palace was the centre of {t|the} government.",
     "ar": "كان قصر توبكابي مركز الحكومة."
    },
    {
     "en": "I'd like {t|the} large one, please.",
     "ar": "أودّ القبّعة الكبيرة من فضلك."
    }
   ],
   "tip": "نقول: a mosque / the Blue Mosque."
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|a mosque} → {t|the Blue Mosque}\n{t|a palace} → {t|the Topkapi Palace}\n{t|the sun} · {t|the moon} · {t|the Ottoman Empire}",
   "examples": [
    {
     "en": "We saw {t|the} sun rise over {t|the} Bosphorus.",
     "ar": "رأينا الشمس تشرق فوق البوسفور."
    }
   ]
  }
 ],
 "5-1#2": [
  {
   "k": "intro",
   "useEn": "We use prepositions of direction to tell someone the way: {t|across, along, past, through, over, round, into, out of, to}.",
   "useAr": "نستخدم حروف الجرّ لوصف الطريق لشخص ما: {t|across وalong وpast وthrough وover وround وinto وout of وto}.",
   "signals": [
    "Go",
    "Turn left / right",
    "Walk",
    "straight ahead"
   ]
  },
  {
   "k": "pos",
   "label": "Giving directions",
   "labelAr": "إعطاء الاتجاهات",
   "formula": "{v|Go / Walk} + {t|across / along / past / through} + {s|the place}",
   "examples": [
    {
     "en": "{v|Go} {t|across} the road and turn right.",
     "ar": "اعبر الطريق وانعطف يميناً."
    },
    {
     "en": "{v|Go} {t|past} the information centre.",
     "ar": "مرّ بجانب مركز المعلومات."
    },
    {
     "en": "{v|Walk} {t|through} the market.",
     "ar": "امشِ عبر السوق."
    }
   ],
   "tip": "نبدأ الجملة بالفعل لأنّها أمر."
  },
  {
   "k": "q",
   "label": "Asking the way",
   "labelAr": "السؤال عن الطريق",
   "formula": "Could you tell me the way to {s|the place}, please?",
   "examples": [
    {
     "en": "Could you tell me the way to the {s|Blue Mosque}, please?",
     "ar": "هل يمكنك أن تدلّني على الطريق إلى الجامع الأزرق من فضلك؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|across} = من جهة إلى الجهة الأخرى\n{t|along} = على امتداد\n{t|past} = مجاوزاً\n{t|through} = من خلال",
   "examples": [
    {
     "en": "Turn left at the {t|crossroads}.",
     "ar": "انعطف يساراً عند مفترق الطرق."
    }
   ]
  }
 ],
 "6-1#0": [
  {
   "k": "intro",
   "useEn": "In an active sentence, the {t|doer} comes first. In a passive sentence, the {t|thing that receives the action} comes first. We form the present simple passive with {t|am / is / are + past participle}.",
   "useAr": "في الجملة المعلومة يأتي {t|الفاعل} أوّلاً، وفي المبني للمجهول يأتي {t|ما يقع عليه الفعل} أوّلاً. نكوّن المضارع المبني للمجهول من {t|am / is / are + اسم المفعول}.",
   "signals": [
    "every year",
    "every day",
    "usually",
    "is / are + V3"
   ]
  },
  {
   "k": "pos",
   "label": "Active → Passive",
   "labelAr": "من المعلوم إلى المجهول",
   "formula": "{s|Object} + {t|am / is / are} + {v|past participle}",
   "examples": [
    {
     "en": "Experts write books. → Books {t|are} {v|written}.",
     "ar": "الخبراء يكتبون الكتب. ← تُكتَب الكتب."
    },
    {
     "en": "Teachers teach Spanish. → Spanish {t|is} {v|taught}.",
     "ar": "المعلّمون يدرّسون الإسبانية. ← تُدرَّس الإسبانية."
    }
   ],
   "tip": "مفرد: is  ·  جمع: are."
  },
  {
   "k": "pos",
   "label": "More examples",
   "labelAr": "أمثلة أخرى",
   "formula": "{s|Subject} + {t|is / are} + {v|V3}",
   "examples": [
    {
     "en": "All children {t|are} {v|sent} to school at six.",
     "ar": "يُرسَل جميع الأطفال إلى المدرسة في السادسة."
    },
    {
     "en": "Enough books {t|are} {v|produced} for every child.",
     "ar": "يُنتَج عدد كافٍ من الكتب لكلّ طفل."
    }
   ]
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|write} → {v|written}  ·  {t|send} → {v|sent}  ·  {t|teach} → {v|taught}\n{n|✗} Books write for every grade.\n{t|✓} Books are written for every grade.",
   "examples": [
    {
     "en": "A programme {t|is} {v|developed}.",
     "ar": "يُطوَّر برنامج."
    }
   ]
  }
 ],
 "6-1#1": [
  {
   "k": "intro",
   "useEn": "We form the past simple passive with {t|was / were + past participle}. We use {t|was} with singular subjects and {t|were} with plural subjects.",
   "useAr": "نكوّن الماضي المبني للمجهول من {t|was / were + اسم المفعول}: {t|was} مع المفرد و{t|were} مع الجمع.",
   "signals": [
    "in ancient times",
    "years ago",
    "last year",
    "was / were + V3"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "المثبت",
   "formula": "{s|Subject} + {t|was / were} + {v|past participle}",
   "examples": [
    {
     "en": "The cities {t|were} {v|built} with stone.",
     "ar": "بُنيت المدن بالحجر."
    },
    {
     "en": "This stone {t|was} {v|cut} by our ancestors.",
     "ar": "قُطع هذا الحجر على يد أجدادنا."
    }
   ],
   "tip": "المفرد: was  ·  الجمع: were."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|was / were} + {n|not} + {v|past participle}",
   "examples": [
    {
     "en": "Stone {t|was} {n|not} {v|produced} efficiently.",
     "ar": "لم يكن الحجر يُنتَج بكفاءة."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Was / Were} + {s|Subject} + {v|past participle}?",
   "examples": [
    {
     "en": "{t|Was} {s|the book} {v|written} last year?",
     "ar": "هل كُتب الكتاب في العام الماضي؟"
    }
   ]
  }
 ],
 "6-1#2": [
  {
   "k": "intro",
   "useEn": "In a passive sentence we keep {t|by + agent} only when the agent gives useful information. If the agent is not important, we leave it out.",
   "useAr": "في المبني للمجهول نحتفظ بـ {t|by + الفاعل} فقط إذا كان الفاعل معلومة مفيدة، وإلّا فنحذفه.",
   "signals": [
    "by + agent",
    "by hand",
    "by 3:00",
    "by the window"
   ]
  },
  {
   "k": "pos",
   "label": "Keep the agent",
   "labelAr": "نذكر الفاعل",
   "formula": "{s|Passive} + {t|by} + {v|agent}",
   "examples": [
    {
     "en": "This stone was cut {t|by} {v|our ancestors}.",
     "ar": "قُطع هذا الحجر على يد أجدادنا."
    },
    {
     "en": "Palestinian stone is preferred {t|by} {v|architects}.",
     "ar": "يفضّل المهندسون المعماريون الحجر الفلسطيني."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Leave out the agent",
   "labelAr": "نحذف الفاعل",
   "formula": "{s|Passive}  (بلا {n|by + agent})",
   "examples": [
    {
     "en": "Stone {t|was needed} to build towns.",
     "ar": "كان الحجر مطلوباً لبناء المدن."
    }
   ],
   "tip": "نحذفه مع people وthey وsomeone."
  },
  {
   "k": "note",
   "label": "Other meanings of by",
   "labelAr": "معانٍ أخرى لـ by",
   "body": "{t|by hand} = بالطريقة (يدويّاً)\n{t|by 3:00} = قبل الساعة الثالثة\n{t|by the window} = بجانب النافذة",
   "examples": [
    {
     "en": "They used to cut the stone {t|by} hand.",
     "ar": "كانوا يقطعون الحجر يدويّاً."
    }
   ]
  }
 ],
 "7-1#0": [
  {
   "k": "intro",
   "useEn": "We use {t|Type 0} for things that are always true or may happen at any time, and {t|Type 1} for things that may or may not happen in the future.",
   "useAr": "نستعمل {t|النوع الصفري} للأمور الصحيحة دائماً أو التي تحدث في أيّ وقت، و{t|النوع الأول} لأمور قد تحدث في المستقبل أو لا تحدث.",
   "signals": [
    "if",
    "always",
    "usually",
    "will",
    "tomorrow",
    "in future"
   ]
  },
  {
   "k": "pos",
   "label": "Type 0 · any time",
   "labelAr": "النوع الصفري (في أيّ وقت)",
   "formula": "{t|If} + {s|S} + {v|present simple}, {s|S} + {v|present simple}",
   "examples": [
    {
     "en": "{t|If} someone {v|is} in trouble, we always {v|feel} it's our duty to help.",
     "ar": "إن وقع أحدهم في مأزق فنحن نشعر دائماً أنّ من واجبنا أن نساعد."
    },
    {
     "en": "{t|If} the children {v|wake up} late, she {v|calls} them.",
     "ar": "إن استيقظ الأطفال متأخّرين فإنّها توقظهم."
    }
   ],
   "tip": "المضارع البسيط في الجزأين."
  },
  {
   "k": "pos",
   "label": "Type 1 · future",
   "labelAr": "النوع الأول (المستقبل)",
   "formula": "{t|If} + {s|S} + {v|present simple}, {s|S} + {t|will} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} you {v|learn} to cook, it {t|will} {v|be} very useful later.",
     "ar": "إن تعلّمتِ الطبخ فسيكون مفيداً جدّاً لاحقاً."
    },
    {
     "en": "{t|If} she needs more medicine, I {t|will} {v|have} to go to the doctor's.",
     "ar": "إن احتاجت إلى دواء أكثر فسيكون عليّ الذهاب إلى الطبيب."
    }
   ],
   "tip": "جملة if لا تأخذ will، بل مضارعاً بسيطاً."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{t|If} + {s|S} + {n|don't / doesn't} + {v|V1}, {s|S} + {t|won't} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} I {n|don't} learn, it {t|won't} {v|be} easy to live away from home.",
     "ar": "إن لم أتعلّم فلن يكون سهلاً أن أعيش بعيدة عن البيت."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|What will} + {s|S} + {v|V1} + {t|if} + {s|S} + {v|present simple}?",
   "examples": [
    {
     "en": "{t|What will} you {v|do} {t|if} you {v|need} more bread?",
     "ar": "ماذا ستفعل إن احتجتَ إلى خبز أكثر؟"
    }
   ]
  }
 ],
 "7-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|Type 2} for unreal situations that we only imagine, now or in the future.",
   "useAr": "نستعمل {t|النوع الثاني} للمواقف غير الواقعية التي نتخيّلها الآن أو في المستقبل.",
   "signals": [
    "if",
    "would",
    "could",
    "might",
    "imagine"
   ]
  },
  {
   "k": "pos",
   "label": "Pattern",
   "labelAr": "الصيغة",
   "formula": "{t|If} + {s|S} + {v|past simple}, {s|S} + {t|would / could / might} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} the oil {v|started} burning, I {t|would} {v|turn off} the cooker.",
     "ar": "لو بدأ الزيت يحترق لأطفأتُ الموقد."
    },
    {
     "en": "{t|If} you {v|used} a powerful cleaner, this {t|would} {v|remove} the stain.",
     "ar": "لو استعملتَ منظّفاً قويّاً لأزال هذا البقعة."
    }
   ],
   "tip": "الماضي هنا يدلّ على موقف غير حقيقي لا على الماضي."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{t|If} + {s|S} + {n|didn't} + {v|V1}, {s|S} + {t|wouldn't} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} those were my children, I {t|wouldn't} {v|let} them play with knives.",
     "ar": "لو كان هؤلاء أولادي لما تركتُهم يلعبون بالسكاكين."
    },
    {
     "en": "{t|If} that {n|did not} {v|work}, you {t|could} {v|use} a gentle chemical cleaner.",
     "ar": "لو لم ينفع ذلك لاستطعتَ استعمال مادّة تنظيف لطيفة."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|What would} + {s|S} + {v|V1} + {t|if} + {s|S} + {v|past simple}?",
   "examples": [
    {
     "en": "{t|What would} you {v|do} {t|if} a pan of hot oil {v|started} burning?",
     "ar": "ماذا كنتَ ستفعل لو بدأ وعاء الزيت الساخن يحترق؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Order of parts",
   "labelAr": "ترتيب الجزأين",
   "body": "يمكن أن تأتي جملة {t|if} أوّلاً أو ثانياً:\nIf you did that, you {t|might not} remove the stain.\nYou {t|might not} remove the stain if you did that.",
   "examples": []
  }
 ],
 "7-1#2": [
  {
   "k": "intro",
   "useEn": "The verb {t|look} changes its meaning when we add a different word after it.",
   "useAr": "يتغيّر معنى الفعل {t|look} بحسب الكلمة التي تأتي بعده.",
   "signals": [
    "look",
    "look at",
    "look for",
    "look after",
    "look up",
    "look like"
   ]
  },
  {
   "k": "pos",
   "label": "look · look at",
   "labelAr": "يبدو · ينظر إلى",
   "formula": "{s|S} + {v|look} + adjective    ·    {s|S} + {v|look at} + {s|noun}",
   "examples": [
    {
     "en": "You {v|look} smart in that shirt.",
     "ar": "تبدو أنيقاً بهذا القميص."
    },
    {
     "en": "Why are you {v|looking at} that person over there?",
     "ar": "لماذا تنظر إلى ذلك الشخص هناك؟"
    }
   ]
  },
  {
   "k": "pos",
   "label": "look for · look up",
   "labelAr": "يبحث عن · يبحث عن معلومة",
   "formula": "{s|S} + {v|look for} + {s|thing / person}    ·    {s|S} + {v|look up} + {s|information}",
   "examples": [
    {
     "en": "I've been {v|looking for} my phone all day.",
     "ar": "أبحث عن هاتفي طوال اليوم."
    },
    {
     "en": "I'll {v|look up} the name on the guest list.",
     "ar": "سأبحث عن الاسم في قائمة المدعوّين."
    }
   ]
  },
  {
   "k": "pos",
   "label": "look after · look like",
   "labelAr": "يعتني بـ · يشبه",
   "formula": "{s|S} + {v|look after} + {s|noun}    ·    {s|S} + {v|look like} + {s|noun}",
   "examples": [
    {
     "en": "Sameera {v|looks after} her mother and the four little ones.",
     "ar": "سميرة تعتني بأمّها وبالصغار الأربعة."
    },
    {
     "en": "He {v|looks like} an old friend.",
     "ar": "إنّه يشبه صديقاً قديماً."
    }
   ],
   "tip": "look after = يعتني، look like = يشبه."
  }
 ],
 "8-1#0": [
  {
   "k": "intro",
   "useEn": "Some verbs take {t|two objects}: a direct object (a thing) and an indirect object (a person).",
   "useAr": "بعض الأفعال تأخذ {t|مفعولين}: مباشراً (شيء) وغير مباشر (شخص).",
   "signals": [
    "give",
    "bring",
    "make",
    "send",
    "buy",
    "take"
   ]
  },
  {
   "k": "pos",
   "label": "Thing first",
   "labelAr": "الشيء أوّلاً",
   "formula": "{s|S} + {v|verb} + {s|thing} + {t|to / for} + {s|person}",
   "examples": [
    {
     "en": "Hadeel {v|took} the tray {t|to} the Masri family.",
     "ar": "أخذت هديل الصينيّة إلى عائلة المصري."
    },
    {
     "en": "Aunt Nada {v|made} lunch {t|for} the Masri family.",
     "ar": "أعدّت العمّة نادية الغداء لعائلة المصري."
    }
   ],
   "tip": "to للاتجاه، for للمساعدة."
  },
  {
   "k": "pos",
   "label": "Person first",
   "labelAr": "الشخص أوّلاً",
   "formula": "{s|S} + {v|verb} + {s|person} + {s|thing}",
   "examples": [
    {
     "en": "She {v|took} the Masri family the tray.",
     "ar": "أخذت لعائلة المصري الصينيّة."
    },
    {
     "en": "She {v|made} the Masri family lunch.",
     "ar": "أعدّت لعائلة المصري الغداء."
    }
   ],
   "tip": "نحذف to وfor حين نقدّم الشخص."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|S} + {n|didn't} + {v|V1} + {s|person} + {s|thing}",
   "examples": [
    {
     "en": "She {n|didn't} {v|write} her grandmother a letter.",
     "ar": "لم تكتب لجدّتها رسالة."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Did} + {s|S} + {v|V1} + {s|thing} + {t|to} + {s|person}?",
   "examples": [
    {
     "en": "{t|Did} Rania {v|write} a postcard {t|to} her parents?",
     "ar": "هل كتبت رانيا بطاقة بريدية لوالديها؟"
    }
   ]
  }
 ],
 "8-1#1": [
  {
   "k": "intro",
   "useEn": "We use a {t|defining relative clause} to give important information about a person or a thing. We use {t|who / that} for people and {t|which / that} for things.",
   "useAr": "نستعمل {t|جملة الصلة المحدِّدة} لنعطي معلومة مهمّة عن شخص أو شيء، ونستعمل {t|who / that} للأشخاص و{t|which / that} للأشياء.",
   "signals": [
    "who",
    "which",
    "that"
   ]
  },
  {
   "k": "pos",
   "label": "People · who / that",
   "labelAr": "الأشخاص",
   "formula": "{s|person} + {t|who / that} + {v|verb}",
   "examples": [
    {
     "en": "Tom is the volunteer {t|who} {v|helped} to build a playground.",
     "ar": "توم هو المتطوّع الذي ساعد في بناء ملعب."
    },
    {
     "en": "Rosa is the person {t|who} {v|reads} to a group of children.",
     "ar": "روزا هي التي تقرأ لمجموعة من الأطفال."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Things · which / that",
   "labelAr": "الأشياء",
   "formula": "{s|thing} + {t|which / that} + {v|verb}",
   "examples": [
    {
     "en": "We do projects {t|which} {v|help} the local community.",
     "ar": "ننفّذ مشاريع تخدم المجتمع المحلّي."
    },
    {
     "en": "Tom talks about a project {t|which} his group {v|finished}.",
     "ar": "يتحدّث توم عن مشروع أنهته مجموعته."
    }
   ],
   "tip": "الضمير فاعل أو مفعول."
  },
  {
   "k": "note",
   "label": "Joining sentences",
   "labelAr": "ربط الجمل",
   "body": "Tom is the volunteer. {t|He} helped to build a playground.\n→ Tom is the volunteer {t|who} helped to build a playground.",
   "examples": []
  }
 ],
 "8-1#2": [
  {
   "k": "intro",
   "useEn": "We can make new words from one word by changing the {t|ending}. The part of speech changes: verb, noun or adjective.",
   "useAr": "نكوّن كلمات جديدة من كلمة واحدة بتغيير {t|النهاية}، فيتغيّر نوعها: فعل أو اسم أو صفة.",
   "signals": [
    "-ion",
    "-ing",
    "-ous",
    "-ful",
    "-al",
    "-ary"
   ]
  },
  {
   "k": "pos",
   "label": "Verb → noun",
   "labelAr": "فعل ← اسم",
   "formula": "{v|collect} → {t|collection}    ·    {v|feel} → {t|feeling}",
   "examples": [
    {
     "en": "You've got a huge {t|collection} of old clocks.",
     "ar": "لديك مجموعة ضخمة من الساعات القديمة."
    },
    {
     "en": "I get a really good {t|feeling} when I help someone.",
     "ar": "أشعر شعوراً جيّداً حين أساعد أحداً."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Noun → adjective",
   "labelAr": "اسم ← صفة",
   "formula": "{v|danger} → {t|dangerous}    ·    {v|nature} → {t|natural}",
   "examples": [
    {
     "en": "Is it {t|dangerous} to walk in the woods at night?",
     "ar": "هل المشي في الغابة ليلاً خطر؟"
    },
    {
     "en": "There's always a big {t|natural} disaster somewhere.",
     "ar": "هناك دائماً كارثة طبيعية كبيرة في مكان ما."
    }
   ]
  },
  {
   "k": "pos",
   "label": "volunteer · voluntary",
   "labelAr": "متطوّع · تطوّعي",
   "formula": "{v|volunteer} (v / n) → {t|voluntary} (adj)",
   "examples": [
    {
     "en": "Tony does {t|voluntary} work at a school.",
     "ar": "يقوم توني بعمل تطوّعي في مدرسة."
    }
   ]
  }
 ],
 "9-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|present continuous passive} when something is being done now and the thing that receives the action is more important than the doer.",
   "useAr": "نستعمل {t|المضارع المستمر المبني للمجهول} حين يُنجَز شيءٌ الآن ويكون ما يقع عليه الفعل أهمّ ممّن يفعله.",
   "signals": [
    "now",
    "at the moment",
    "being"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|am / is / are} + {t|being} + {v|V3}",
   "examples": [
    {
     "en": "The adult fish {t|are being} {v|caught}.",
     "ar": "تُصاد الأسماك البالغة الآن."
    },
    {
     "en": "Something {t|is being} {v|done}.",
     "ar": "يجري عمل شيء ما الآن."
    }
   ],
   "tip": "الفاعل الحقيقي يُحذف أو يأتي بعد by."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|am / is / are} + {n|not} + {t|being} + {v|V3}",
   "examples": [
    {
     "en": "Young ones {t|are} {n|not} {t|being} {v|produced}.",
     "ar": "لا تُنتَج الصغار."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Am / Is / Are} + {s|Subject} + {t|being} + {v|V3}?",
   "examples": [
    {
     "en": "{t|Are} the fish {t|being} {v|caught}?",
     "ar": "هل تُصاد الأسماك؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Active → Passive",
   "labelAr": "من المعلوم إلى المجهول",
   "body": "active: People {t|are catching} the fish.\npassive: The fish {t|are being caught}.",
   "examples": [
    {
     "en": "They are teaching me all this. → I am being taught all this.",
     "ar": "يعلّمونني هذا ← أُعلَّم هذا."
    }
   ]
  }
 ],
 "9-1#1": [
  {
   "k": "intro",
   "useEn": "We use the {t|past continuous passive} for something that was in progress in the past when we focus on the thing, not the doer.",
   "useAr": "نستعمل {t|الماضي المستمر المبني للمجهول} لعملٍ كان جارياً في الماضي حين نركّز على الشيء لا على الفاعل.",
   "signals": [
    "yesterday",
    "at 10:00",
    "was / were being"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|was / were} + {t|being} + {v|V3}",
   "examples": [
    {
     "en": "They {t|were being} {v|caught} everywhere.",
     "ar": "كانت تُصاد في كلّ مكان."
    },
    {
     "en": "A van {t|was being} {v|driven} out of the market.",
     "ar": "كانت شاحنة تُقاد خارج السوق."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|was / were} + {n|not} + {t|being} + {v|V3}",
   "examples": [
    {
     "en": "They {t|were} {n|not} {t|being} {v|protected} anywhere.",
     "ar": "لم تكن تُحمى في أيّ مكان."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Was / Were} + {s|Subject} + {t|being} + {v|V3}?",
   "examples": [
    {
     "en": "{t|Were} whales {t|being} {v|protected}?",
     "ar": "هل كانت الحيتان تُحمى؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Active → Passive",
   "labelAr": "من المعلوم إلى المجهول",
   "body": "active: Modern technology {t|was making} the job easier.\npassive: The job {t|was being made} easier.",
   "examples": []
  }
 ],
 "9-1#2": [
  {
   "k": "intro",
   "useEn": "Adverbs like {t|often, already, quickly, slowly, still, also, finally, almost} usually go inside the verb unit.",
   "useAr": "الظروف مثل {t|often وalready وquickly وslowly وstill وalso وfinally وalmost} تأتي غالباً داخل وحدة الفعل.",
   "signals": [
    "often",
    "already",
    "quickly",
    "slowly"
   ]
  },
  {
   "k": "pos",
   "label": "Position",
   "labelAr": "الموضع",
   "formula": "{s|Subject} + {t|is / was} + {t|adverb} + {v|V3}",
   "examples": [
    {
     "en": "Sad changes are {t|often} {v|caused} by pollution.",
     "ar": "تُسبَّب التغيّرات المحزنة غالباً بالتلوّث."
    }
   ],
   "tip": "الظرف بعد الفعل المساعد الأول."
  },
  {
   "k": "pos",
   "label": "With being",
   "labelAr": "مع being",
   "formula": "{s|Subject} + {t|were} + {t|adverb} + {t|being} + {v|V3}",
   "examples": [
    {
     "en": "Whales were {t|already} being {v|caught}.",
     "ar": "كانت الحيتان تُصاد أصلاً."
    },
    {
     "en": "Whales were {t|quickly} being {v|destroyed}.",
     "ar": "كانت الحيتان تُدمَّر بسرعة."
    }
   ]
  },
  {
   "k": "note",
   "label": "Common adverbs",
   "labelAr": "ظروف شائعة",
   "body": "often = غالباً\nalready = أصلاً / من قبل\nquickly = بسرعة\nslowly = ببطء\nstill = ما زال\nalso = أيضاً\nnow = الآن",
   "examples": []
  }
 ],
 "10-1#0": [
  {
   "k": "intro",
   "useEn": "We use {t|tag questions} when we think we know the answer and expect the other person to agree.",
   "useAr": "نستعمل {t|الأسئلة الذيلية} حين نظنّ أنّنا نعرف الجواب ونتوقّع موافقة الآخر.",
   "signals": [
    "isn't it?",
    "can we?",
    "won't it?"
   ]
  },
  {
   "k": "pos",
   "label": "Positive sentence",
   "labelAr": "جملة مثبتة",
   "formula": "{s|Positive sentence}, {t|negative tag}?",
   "examples": [
    {
     "en": "That's happening tonight, {t|isn't it}?",
     "ar": "هذا يحدث الليلة، أليس كذلك؟"
    },
    {
     "en": "It'll look lovely, {t|won't it}?",
     "ar": "ستبدو جميلة، أليس كذلك؟"
    }
   ],
   "tip": "مثبت ← ذيل منفي."
  },
  {
   "k": "neg",
   "label": "Negative sentence",
   "labelAr": "جملة منفية",
   "formula": "{s|Negative sentence}, {t|positive tag}?",
   "examples": [
    {
     "en": "It {n|isn't} very nice, {t|is it}?",
     "ar": "إنّها ليست جميلة، أليس كذلك؟"
    },
    {
     "en": "We {n|can't} go alone, {t|can we}?",
     "ar": "لا نستطيع الذهاب وحدنا، أليس كذلك؟"
    }
   ],
   "tip": "منفي ← ذيل مثبت."
  },
  {
   "k": "q",
   "label": "Modal verbs",
   "labelAr": "الأفعال الناقصة",
   "formula": "{s|S} + {v|modal} + {v|V1}, {t|modal (opposite)} + {s|pronoun}?",
   "examples": [
    {
     "en": "They {v|should} do something, {t|shouldn't} {s|they}?",
     "ar": "عليهم أن يفعلوا شيئاً، أليس كذلك؟"
    }
   ],
   "tip": "نكرّر الفعل الناقص نفسه."
  },
  {
   "k": "note",
   "label": "Short answers",
   "labelAr": "الإجابات القصيرة",
   "body": "Yes, it is. / No, it isn't.\nYes, it will. / No, it won't.\nYes, we can. / No, we can't.",
   "examples": []
  }
 ],
 "10-1#1": [
  {
   "k": "intro",
   "useEn": "With the {t|present simple} we use {t|do / does} in the tag, and with the {t|past simple} we use {t|did}.",
   "useAr": "مع {t|المضارع البسيط} نستعمل {t|do / does} في الذيل، ومع {t|الماضي البسيط} نستعمل {t|did}.",
   "signals": [
    "do / does",
    "did",
    "every week"
   ]
  },
  {
   "k": "pos",
   "label": "Positive sentence",
   "labelAr": "جملة مثبتة",
   "formula": "{s|S} + {v|V1 / V(s) / V2}, {t|don't / doesn't / didn't} + {s|pronoun}?",
   "examples": [
    {
     "en": "We need a gardener, {t|don't} {s|we}?",
     "ar": "نحتاج إلى بستاني، أليس كذلك؟"
    },
    {
     "en": "We had an excellent discussion, {t|didn't} {s|we}?",
     "ar": "أجرينا نقاشاً ممتازاً، أليس كذلك؟"
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative sentence",
   "labelAr": "جملة منفية",
   "formula": "{s|S} + {n|don't / doesn't / didn't} + {v|V1}, {t|do / does / did} + {s|pronoun}?",
   "examples": [
    {
     "en": "We {n|didn't} talk about this last night, {t|did} {s|we}?",
     "ar": "لم نتحدّث عن هذا الليلة الماضية، أليس كذلك؟"
    },
    {
     "en": "Fuad {n|doesn't} play basketball, {t|does} {s|he}?",
     "ar": "فؤاد لا يلعب كرة السلّة، أليس كذلك؟"
    }
   ],
   "tip": "الضمير يطابق الفاعل."
  },
  {
   "k": "note",
   "label": "Match the subject",
   "labelAr": "طابق الفاعل",
   "body": "Jack Hill → {t|he}\nthe twins → {t|they}\nRania → {t|she}\nyou → {t|you}",
   "examples": []
  }
 ],
 "10-1#2": [
  {
   "k": "intro",
   "useEn": "Some expressions go with {t|do} and others with {t|make}. We learn them as whole phrases.",
   "useAr": "بعض التعبيرات تأتي مع {t|do} وبعضها مع {t|make}، ونتعلّمها عبارات كاملة.",
   "signals": [
    "do",
    "make"
   ]
  },
  {
   "k": "pos",
   "label": "do + …",
   "labelAr": "do + …",
   "formula": "{t|do} + {v|some shopping / some homework / some work / a project}",
   "examples": [
    {
     "en": "I went to the supermarket and {t|did} {v|some shopping}.",
     "ar": "ذهبتُ إلى السوق وتسوّقتُ."
    },
    {
     "en": "We're going to {t|do} {v|a project} on the weather.",
     "ar": "سنُعدّ مشروعاً عن الطقس."
    }
   ]
  },
  {
   "k": "pos",
   "label": "make + …",
   "labelAr": "make + …",
   "formula": "{t|make} + {v|a cake / a mess / a phone call / a request}",
   "examples": [
    {
     "en": "I'm going to {t|make} {v|a cake} for her.",
     "ar": "سأصنع لها كعكة."
    },
    {
     "en": "He wants to {t|make} {v|a request} on local radio.",
     "ar": "يريد أن يقدّم طلباً عبر الإذاعة المحلية."
    }
   ]
  },
  {
   "k": "note",
   "label": "Opposites in this unit",
   "labelAr": "متضادات الوحدة",
   "body": "badly ↔ {t|well}\nbusy ↔ {t|free}\neastern ↔ {t|western}\nfinish ↔ {t|start}\nproud of ↔ {t|ashamed of}",
   "examples": []
  }
 ],
 "11-1#0": [
  {
   "k": "intro",
   "useEn": "We agree with a positive statement using {t|too} or {t|So + auxiliary + subject}, and with a negative statement using {t|not … either} or {t|Neither + auxiliary + subject}.",
   "useAr": "نوافق على الكلام المثبت بـ {t|too} أو {t|So + فعل مساعد + فاعل}، وعلى المنفيّ بـ {t|not … either} أو {t|Neither + فعل مساعد + فاعل}.",
   "signals": [
    "too",
    "either",
    "So do I",
    "Neither do I"
   ]
  },
  {
   "k": "pos",
   "label": "Positive · too",
   "labelAr": "مثبت (too)",
   "formula": "{s|Subject} + {t|auxiliary}, {v|too}",
   "examples": [
    {
     "en": "A: I enjoyed working. B: I {t|did}, {v|too}.",
     "ar": "وأنا كذلك استمتعتُ."
    },
    {
     "en": "A: I love spring. B: I {t|do}, {v|too}.",
     "ar": "وأنا أحبّ الربيع."
    }
   ],
   "tip": "too تأتي في آخر الجملة."
  },
  {
   "k": "pos",
   "label": "Positive · So",
   "labelAr": "مثبت (So)",
   "formula": "{v|So} + {t|auxiliary} + {s|subject}",
   "examples": [
    {
     "en": "A: I love spring. B: {v|So} {t|do} {s|I}.",
     "ar": "وأنا كذلك."
    },
    {
     "en": "A: I am really happy. B: {v|So} {t|am} {s|I}.",
     "ar": "وأنا أيضاً."
    }
   ],
   "tip": "نقلب الترتيب: الفعل المساعد قبل الفاعل."
  },
  {
   "k": "neg",
   "label": "Negative · not … either",
   "labelAr": "منفيّ (either)",
   "formula": "{s|Subject} + {t|auxiliary} + {n|not}, {v|either}",
   "examples": [
    {
     "en": "A: I didn't do very well. B: I {t|did}{n|n't}, {v|either}.",
     "ar": "وأنا لم أؤدِّ جيّداً أيضاً."
    }
   ],
   "tip": "either تأتي في آخر الجملة."
  },
  {
   "k": "neg",
   "label": "Negative · Neither",
   "labelAr": "منفيّ (Neither)",
   "formula": "{v|Neither} + {t|auxiliary} + {s|subject}",
   "examples": [
    {
     "en": "A: I don't like it. B: {v|Neither} {t|do} {s|I}.",
     "ar": "ولا أنا."
    },
    {
     "en": "A: I cannot wait. B: {v|Neither} {t|can} {s|I}.",
     "ar": "ولا أنا."
    }
   ],
   "tip": "Neither نفسها تحمل النفي، فلا نضيف not."
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "استعمل {t|الفعل المساعد نفسه}:\nlove / like → {t|do / does}   ·   enjoyed → {t|did}\nam / is / are → {t|be}   ·   can → {t|can}   ·   have been → {t|have}",
   "examples": [
    {
     "en": "A: I've been to Amman. B: So {t|have} I.",
     "ar": "وأنا أيضاً."
    }
   ]
  }
 ],
 "11-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|because / since / as} to give the cause, and {t|so} to give the result. When the cause is in the sentence before, we can use {t|Because of that}.",
   "useAr": "نستعمل {t|because / since / as} للسبب، و{t|so} للنتيجة، وعبارة {t|Because of that} حين يكون السبب في الجملة السابقة.",
   "signals": [
    "because",
    "since",
    "as",
    "so",
    "Because of that",
    "As a result"
   ]
  },
  {
   "k": "pos",
   "label": "Cause · because / since / as",
   "labelAr": "السبب",
   "formula": "{s|Result} + {t|because / since / as} + {v|cause}",
   "examples": [
    {
     "en": "I don't say anything {t|because} I love them.",
     "ar": "لا أقول شيئاً لأنّني أحبّهما."
    },
    {
     "en": "I understand your feelings {t|since} I've got six!",
     "ar": "أفهم مشاعرك لأنّ لديّ ستّة."
    }
   ],
   "tip": "يجوز أن يأتي السبب أوّلاً مع as وsince: {t|As} you're the oldest, …"
  },
  {
   "k": "pos",
   "label": "Result · so",
   "labelAr": "النتيجة (so)",
   "formula": "{v|Cause}, {t|so} + {s|result}",
   "examples": [
    {
     "en": "I love them, {t|so} I don't say anything.",
     "ar": "أحبّهما، لذلك لا أقول شيئاً."
    },
    {
     "en": "Mum was using the phone, {t|so} I used my mobile.",
     "ar": "كانت أمّي تستعمل الهاتف، فاستعملتُ هاتفي المحمول."
    }
   ],
   "tip": "so عكس because: تُدخل النتيجة لا السبب."
  },
  {
   "k": "pos",
   "label": "Referring back · Because of that",
   "labelAr": "الإشارة إلى جملة سابقة",
   "formula": "{v|Sentence 1}. {t|Because of that / As a result}, {s|sentence 2}.",
   "examples": [
    {
     "en": "They just ignore me. {t|Because of that}, I'm feeling very down.",
     "ar": "إنّهم يتجاهلونني. وبسبب ذلك أشعر بالحزن."
    },
    {
     "en": "I could see dark clouds. {t|Because of that}, I took my umbrella.",
     "ar": "رأيتُ غيوماً داكنة. وبسبب ذلك أخذتُ مظلّتي."
    }
   ],
   "tip": "نضعها في أوّل الجملة الثانية، وبعدها فاصلة."
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|because} + سبب   ·   {t|so} + نتيجة\n{n|✗} I was tired, because I went to bed.\n{t|✓} I was tired, so I went to bed.",
   "examples": [
    {
     "en": "I was tired, {t|so} I went to bed.",
     "ar": "كنتُ متعباً فذهبتُ إلى النوم."
    }
   ]
  }
 ],
 "11-1#2": [
  {
   "k": "intro",
   "useEn": "Many verbs and adjectives go with a fixed preposition. We also use {t|on} with days, {t|in} with periods of time and {t|at} with clock times.",
   "useAr": "كثيرٌ من الأفعال والصفات يأتي مع حرف جرٍّ ثابت. ونستعمل {t|on} مع الأيّام، و{t|in} مع الفترات الزمنية، و{t|at} مع الساعة.",
   "signals": [
    "at",
    "for",
    "with",
    "about",
    "on",
    "in"
   ]
  },
  {
   "k": "pos",
   "label": "Verb / adjective + preposition",
   "labelAr": "فعل أو صفة + حرف جرّ",
   "formula": "{v|do well} {t|at} · {v|wait} {t|for} · {v|being} {t|with} · {v|happy} {t|about}",
   "examples": [
    {
     "en": "How well did you do {t|at} the science test?",
     "ar": "كيف كان أداؤك في اختبار العلوم؟"
    },
    {
     "en": "We have to wait {t|for} the bus.",
     "ar": "علينا أن ننتظر الحافلة."
    },
    {
     "en": "I'm not very happy {t|about} the plans.",
     "ar": "لستُ سعيداً كثيراً بالخطط."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Time · on / in",
   "labelAr": "الزمن",
   "formula": "{t|on} + {v|day}   ·   {t|in} + {v|period of time}",
   "examples": [
    {
     "en": "What are you going to do {t|on} Friday?",
     "ar": "ماذا ستفعل يوم الجمعة؟"
    },
    {
     "en": "Where will we be {t|in} six months from now?",
     "ar": "أين سنكون بعد ستّة أشهر؟"
    }
   ],
   "tip": "on Friday · in March · at 6:00."
  }
 ],
 "12-1#0": [
  {
   "k": "intro",
   "useEn": "In reported speech we often change the words (your → my). We use {t|say (that)} for statements, and {t|ask / tell / want / would like + someone + to + verb} for requests.",
   "useAr": "في الكلام المنقول نغيّر الضمائر غالباً، ونستعمل {t|say (that)} للأخبار، و{t|ask / tell / want / would like + شخص + to + فعل} للطلبات.",
   "signals": [
    "says that",
    "is saying",
    "asks … to",
    "wants … to",
    "would like … to"
   ]
  },
  {
   "k": "pos",
   "label": "Reported statement",
   "labelAr": "الخبر المنقول",
   "formula": "{s|Subject} + {t|says (that)} + {v|statement}",
   "examples": [
    {
     "en": "He's {t|saying} my mum can go home.",
     "ar": "إنّه يقول إنّ أمّي تستطيع العودة إلى البيت."
    },
    {
     "en": "They're {t|saying} {v|they need it urgently}.",
     "ar": "إنّهم يقولون إنّهم يحتاجونه بشكلٍ عاجل."
    }
   ],
   "tip": "يجوز حذف {t|that} بعد فعل القول."
  },
  {
   "k": "pos",
   "label": "Reported request",
   "labelAr": "الطلب المنقول",
   "formula": "{s|Subject} + {t|asks / tells / wants} + {s|someone} + {t|to} + {v|V1}",
   "examples": [
    {
     "en": "She {t|wants} {s|me} {t|to} {v|get} her mum's clothes.",
     "ar": "إنّها تريدني أن أجلب ملابس أمّها."
    },
    {
     "en": "The doctor is {t|asking} {s|her} {t|to} {v|take} things slowly.",
     "ar": "الطبيب يطلب منها أن تأخذ الأمور ببطء."
    }
   ],
   "tip": "نحذف شكل الطلب Could you …؟ ونستعمل to + V1."
  },
  {
   "k": "neg",
   "label": "Negative request",
   "labelAr": "الطلب المنفيّ",
   "formula": "{s|Subject} + {t|asks} + {s|someone} + {n|not} + {t|to} + {v|V1}",
   "examples": [
    {
     "en": "She is {t|asking} {s|you} {n|not} {t|to} {v|be} late.",
     "ar": "إنّها تطلب منك ألّا تتأخّر."
    },
    {
     "en": "The doctor is asking her {n|not} to {v|try} to do too much.",
     "ar": "الطبيب يطلب منها ألّا تحاول فعل الكثير."
    }
   ],
   "tip": "نضع {n|not} قبل to."
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|want / ask / tell / would like} + شخص + {t|to} + V1\n{n|✗} She wants me getting her clothes.\n{t|✓} She wants me to get her clothes.",
   "examples": [
    {
     "en": "Your mother can go. → He's saying my mum can go.",
     "ar": "الضمير يتغيّر عند النقل."
    }
   ]
  }
 ],
 "12-1#1": [
  {
   "k": "intro",
   "useEn": "When we report a question, the word order changes to {t|statement form}. For Wh questions we keep the {t|Wh-word}. For Yes / No questions we use {t|if} or {t|whether}.",
   "useAr": "عند نقل السؤال يصبح الترتيب كترتيب {t|الجملة الخبريّة}. في أسئلة Wh نبقي {t|كلمة السؤال}، وفي أسئلة Yes / No نستعمل {t|if} أو {t|whether}.",
   "signals": [
    "ask",
    "want to know",
    "find out",
    "if",
    "whether"
   ]
  },
  {
   "k": "pos",
   "label": "Wh questions",
   "labelAr": "أسئلة Wh",
   "formula": "{t|ask / want to know} + {v|Wh-word} + {s|subject} + {v|verb}",
   "examples": [
    {
     "en": "When can you take her? → They are asking {v|when} {s|I} {v|can} take her.",
     "ar": "يسألون متى أستطيع أن آخذها."
    },
    {
     "en": "How do you feel? → I want to find out {v|how} {s|they} {v|feel}.",
     "ar": "أريد أن أعرف كيف يشعرون."
    }
   ],
   "tip": "لا نستعمل do / does / did في السؤال المنقول."
  },
  {
   "k": "pos",
   "label": "Yes / No questions",
   "labelAr": "أسئلة Yes / No",
   "formula": "{t|ask} + {t|if / whether} + {s|subject} + {v|verb}",
   "examples": [
    {
     "en": "Were you nervous? → I ask {t|if} {s|she} {v|was} nervous.",
     "ar": "أسأل إن كانت متوتّرة."
    },
    {
     "en": "Do you get worried? → I ask {t|whether} {s|they} {v|get} worried.",
     "ar": "أسأل إن كانوا يقلقون."
    }
   ],
   "tip": "if و whether بمعنىً واحد."
  },
  {
   "k": "neg",
   "label": "Wrong order",
   "labelAr": "ترتيب خاطئ",
   "formula": "{n|✗} I ask if was she nervous.",
   "examples": [
    {
     "en": "{n|✗} I ask when can I take her.",
     "ar": "خطأ: ترتيب السؤال."
    },
    {
     "en": "{t|✓} I ask when {s|I} {v|can} take her.",
     "ar": "صحيح: ترتيب خبريّ."
    }
   ],
   "tip": "الجملة تنتهي بنقطة لا بعلامة استفهام."
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "السؤال المنقول = {t|ترتيب خبريّ}\nWh → {t|كلمة السؤال} + فاعل + فعل\nYes / No → {t|if / whether} + فاعل + فعل",
   "examples": [
    {
     "en": "Were you nervous? → I ask if she was nervous.",
     "ar": "أنهِ الجملة بنقطة."
    }
   ]
  }
 ],
 "12-1#2": [
  {
   "k": "intro",
   "useEn": "An {t|adjective} describes a noun. An {t|adverb} describes a verb. We often make an adverb by adding {t|-ly} to the adjective.",
   "useAr": "{t|الصفة} تصف الاسم، و{t|الظرف} يصف الفعل، ونكوّنه غالباً بإضافة {t|-ly} إلى الصفة.",
   "signals": [
    "-ly",
    "luckily",
    "successfully",
    "hard / fast",
    "by"
   ]
  },
  {
   "k": "pos",
   "label": "Adjective → Adverb",
   "labelAr": "من الصفة إلى الظرف",
   "formula": "{v|adjective} + {t|-ly}",
   "examples": [
    {
     "en": "nervous → {v|nervous}{t|ly}",
     "ar": "متوتّر ← بتوتّر"
    },
    {
     "en": "successful → {v|successful}{t|ly}",
     "ar": "ناجح ← بنجاح"
    },
    {
     "en": "urgent → {v|urgent}{t|ly}",
     "ar": "عاجل ← بشكلٍ عاجل"
    }
   ],
   "tip": "I promise I'll hold her very gently."
  },
  {
   "k": "pos",
   "label": "Spelling changes",
   "labelAr": "تغيّرات الإملاء",
   "formula": "{v|y} → {t|ily}   ·   {v|-le} → {t|-ly}   ·   {v|-ble} → {t|-bly}",
   "examples": [
    {
     "en": "lucky → {t|luckily}",
     "ar": "لحسن الحظّ"
    },
    {
     "en": "happy → {t|happily}",
     "ar": "بسعادة"
    },
    {
     "en": "gentle → {t|gently}",
     "ar": "بلطف"
    },
    {
     "en": "possible → {t|possibly}",
     "ar": "ربّما / ممكناً"
    }
   ]
  },
  {
   "k": "note",
   "label": "Same form · by",
   "labelAr": "الشكل نفسه والحرف by",
   "body": "{t|hard} = hard   ·   {t|fast} = fast   ·   {t|early / late}\nby = الفاعل · الطريقة · قبل · بجانب",
   "examples": [
    {
     "en": "The hospital needs the bed {t|by} 2:00.",
     "ar": "by = قبل الساعة 2:00."
    },
    {
     "en": "Jenan went to the hospital {t|by} bus.",
     "ar": "by = وسيلة."
    }
   ]
  }
 ]
};

/* معاني الكلمات الدالّة (تظهر في آخر بطاقات كلّ قاعدة) */
window.LEXORA_SIGNALS_AR = {
 "at the moment": "في هذه اللحظة",
 "now": "الآن",
 "always": "دائماً",
 "every week": "كلّ أسبوع",
 "usually": "عادةً",
 "in the evening": "في المساء",
 "love / like / hate": "أحبّ / يعجبني / أكره",
 "look": "يبدو (نظراً)",
 "smell": "رائحته",
 "taste": "طعمه",
 "sound": "يبدو (صوتاً)",
 "feel": "يشعر",
 "seem": "يبدو",
 "at the age of 18": "في سنّ الثامنة عشرة",
 "when I was young": "حين كنتُ صغيراً",
 "last week": "الأسبوع الماضي",
 "in the past": "في الماضي",
 "long ago": "منذ زمن بعيد",
 "before": "من قبل",
 "just": "للتوّ",
 "already": "بالفعل",
 "yet": "بعدُ",
 "recently": "مؤخّراً",
 "ever": "يوماً ما",
 "never": "أبداً",
 "so far": "حتى الآن",
 "in my life": "في حياتي",
 "every …": "every + ...",
 "foot …": "foot + ...",
 "home …": "home + ...",
 "in … / out …": "in / out + ...",
 "some …": "some + ...",
 "water …": "water + ...",
 "wild …": "wild + ...",
 "for": "لمدّة",
 "since": "منذ",
 "for several weeks": "منذ عدّة أسابيع",
 "how long": "منذ متى / كم من الوقت",
 "had better": "من الأفضل أن",
 "could": "يمكن أن",
 "What about": "ما رأيك في",
 "whose": "لمن",
 "my / mine": "ملكي",
 "her / hers": "ملكها",
 "our / ours": "ملكنا",
 "too": "أيضاً (إثبات)",
 "either": "أيضاً (نفي)",
 "something": "شيء ما",
 "someone": "شخص ما",
 "everything": "كلّ شيء",
 "everyone": "الجميع",
 "when": "حين / عندما",
 "often": "غالباً",
 "if": "إذا",
 "tomorrow": "غداً",
 "next week": "الأسبوع القادم",
 "-ly": "ـاً (ظرف)",
 "than": "من",
 "of all": "من بينها كلّها",
 "of them all": "من بينها كلّها",
 "as … as": "مثل",
 "not as … as": "ليس مثل",
 "almost": "تقريباً",
 "-ily": "ـاً (ظرف)",
 "-bly": "ـاً (ظرف)",
 "some": "بعض",
 "any": "أيّ",
 "a carton of": "علبة كرتون من",
 "a jar of": "برطمان من",
 "How many": "كم (معدود)",
 "How much": "كم (غير معدود)",
 "many": "كثير (معدود)",
 "much": "كثير (غير معدود)",
 "a / an": "أداة تنكير",
 "the": "أداة تعريف",
 "×": "بلا أداة",
 "who": "الذي / التي (لعاقل)",
 "which": "الذي / التي (لغير عاقل)",
 "that": "الذي / التي (للاثنين)",
 "she / he": "هي / هو",
 "her / him": "ها / ه (مفعول)",
 "hers / his": "ملكها / ملكه",
 "the one": "الذي (مفرد)",
 "the ones": "الذين (جمع)",
 "-ist": "ـيّ (شخص)",
 "-er": "ـيّ (شخص)",
 "-ing": "ـ (نشاط)",
 "would like": "أودّ / تودّ",
 "would love": "أحبّ جدّاً",
 "would prefer": "أفضّل",
 "-s": "جمع عادي",
 "-es": "جمع بـ es",
 "-ies": "y ← ies",
 "-ves": "f ← ves",
 ",": "فاصلة",
 ".": "نقطة",
 "'": "فاصلة عليا",
 "says": "يقول",
 "tells": "يخبر",
 "wants to know": "يريد أن يعرف",
 "asks": "يسأل",
 "needs to check": "يحتاج إلى التحقّق",
 "Dear …": "عزيزي ...",
 "Yours truly": "المخلص",
 "up": "أعلى / إنهاء",
 "down": "أسفل",
 "off": "إطفاء",
 "over": "فوق / سيطرة",
 "on": "على",
 "out": "خارج / اكتشاف",
 "and": "و",
 "but": "لكن",
 "so": "لذلك",
 "because": "لأنّ",
 "however": "مع ذلك",
 "therefore": "لذلك",
 "First": "أوّلاً",
 "Then": "ثمّ",
 "Soon": "قريباً",
 "Finally": "أخيراً"
};
