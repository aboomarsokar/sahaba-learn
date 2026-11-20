/* بطاقات شرح القواعد: لكلّ قاعدة سلسلة بطاقات (تعريف ← تكوين ← نفي ← سؤال ← ملاحظة).
   المفتاح: <رقم الدرس>#<رقم القاعدة>.   وسوم التلوين: {s|فاعل} {v|فعل} {t|أداة تكوين} {n|أداة نفي} */
window.LEXORA_RULECARDS = {
 "1-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|present continuous} for actions happening now or around now, and the {t|present simple} for actions that happen many times.",
   "useAr": "نستخدم {t|المضارع المستمر} للأفعال التي تحدث الآن أو في هذه الفترة، و{t|المضارع البسيط} للأفعال التي تتكرّر.",
   "signals": [
    "at the moment",
    "now",
    "always",
    "every week",
    "usually",
    "in the evening"
   ]
  },
  {
   "k": "pos",
   "label": "Now · Present Continuous",
   "labelAr": "الآن (المضارع المستمر)",
   "formula": "{s|Subject} + {t|am / is / are} + {v|V-ing}",
   "examples": [
    {
     "en": "Mum {t|is} {v|using} the phone in the kitchen now.",
     "ar": "أمّي تستعمل الهاتف في المطبخ الآن."
    },
    {
     "en": "Sami {t|is} {v|chatting} to his friends online.",
     "ar": "سامي يدردش مع أصدقائه عبر الإنترنت."
    }
   ],
   "tip": "للفعل الذي يحدث الآن أو في هذه الفترة."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|am / is / are} + {n|not} + {v|V-ing}",
   "examples": [
    {
     "en": "Mum {t|is} {n|not} {v|finishing} yet.",
     "ar": "أمّي لم تنتهِ بعد."
    }
   ],
   "tip": "نضيف {n|not} بعد am / is / are."
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Am / Is / Are} + {s|Subject} + {v|V-ing}?",
   "examples": [
    {
     "en": "{t|Are} {s|you} {v|moving} to the next room?",
     "ar": "هل ستنتقلين إلى الغرفة المجاورة؟"
    }
   ]
  },
  {
   "k": "pos",
   "label": "Habits · Present Simple",
   "labelAr": "العادات (المضارع البسيط)",
   "formula": "{s|Subject} + {v|V1 / V(s)} + every week / always …",
   "examples": [
    {
     "en": "They {v|talk} on the phone every week.",
     "ar": "يتحدّثان على الهاتف كلّ أسبوع."
    },
    {
     "en": "Sami always {v|goes} online in the evening.",
     "ar": "سامي يدخل الإنترنت دائماً في المساء."
    }
   ],
   "tip": "مع he / she / it نضيف s أو es."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|don't / doesn't} + {v|V1}",
   "examples": [
    {
     "en": "Sami {t|doesn't} {v|go} online in the morning.",
     "ar": "سامي لا يدخل الإنترنت في الصباح."
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
     "en": "{t|Does} {s|Sami} {v|go} online every evening?",
     "ar": "هل يدخل سامي الإنترنت كلّ مساء؟"
    }
   ]
  }
 ],
 "1-1#1": [
  {
   "k": "intro",
   "useEn": "We use the {t|present simple} for things that always stay the same and for stative verbs like love, like and hate. We use the {t|present continuous} for things that stay the same only for some time.",
   "useAr": "نستخدم {t|المضارع البسيط} للأمور الثابتة دائماً ولأفعال الشعور مثل love وlike وhate، و{t|المضارع المستمر} لما يبقى ثابتاً لفترة فقط.",
   "signals": [
    "always",
    "at the moment",
    "love / like / hate"
   ]
  },
  {
   "k": "pos",
   "label": "Always the same · Present Simple",
   "labelAr": "ثابت دائماً (المضارع البسيط)",
   "formula": "{s|Subject} + {v|V1 / V(s)}",
   "examples": [
    {
     "en": "Grandma {v|lives} in Jenin.",
     "ar": "جدّتي تعيش في جنين."
    },
    {
     "en": "Sami {v|loves} chatting to his friends online.",
     "ar": "سامي يحبّ الدردشة مع أصدقائه."
    }
   ],
   "tip": "love / like / hate لا تأخذ -ing في هذا المعنى."
  },
  {
   "k": "pos",
   "label": "For some time · Present Continuous",
   "labelAr": "لفترة فقط (المضارع المستمر)",
   "formula": "{s|Subject} + {t|am / is / are} + {v|V-ing} + at the moment",
   "examples": [
    {
     "en": "Nadia's family {t|are} {v|living} in London at the moment.",
     "ar": "تعيش عائلة نادية في لندن في هذه الفترة."
    }
   ],
   "tip": "نستعمله حين يكون الوضع مؤقّتاً."
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|live} = دائم    ·    {t|are living} = مؤقّت\n{n|✗} Parents are loving their children.\n{t|✓} Parents love their children.",
   "examples": [
    {
     "en": "Parents {t|love} their children.",
     "ar": "الآباء يحبّون أبناءهم."
    }
   ]
  }
 ],
 "2-1#0": [
  {
   "k": "intro",
   "useEn": "We use look, smell, taste, sound, feel and seem with an {t|adjective} to say how something is. We use {t|like} before a noun to compare.",
   "useAr": "نستعمل look وsmell وtaste وsound وfeel وseem مع {t|صفة} لنصف الشيء، ونستعمل {t|like} قبل الاسم للتشبيه.",
   "signals": [
    "look",
    "smell",
    "taste",
    "sound",
    "feel",
    "seem"
   ]
  },
  {
   "k": "pos",
   "label": "Sense verb + adjective",
   "labelAr": "فعل حاسّة + صفة",
   "formula": "{s|Subject} + {t|look / smell / taste / sound / feel / seem} + {v|adjective}",
   "examples": [
    {
     "en": "The kebabs {t|smell} {v|delicious}.",
     "ar": "رائحة الكباب لذيذة."
    },
    {
     "en": "That drum music {t|sounds} {v|great}.",
     "ar": "موسيقى الطبل تبدو رائعة."
    }
   ],
   "tip": "بعد الفعل صفة وليست ظرفاً."
  },
  {
   "k": "pos",
   "label": "Sense verb + like + noun",
   "labelAr": "فعل حاسّة + like + اسم",
   "formula": "{s|Subject} + {t|looks / sounds / feels} + {t|like} + {v|noun}",
   "examples": [
    {
     "en": "It {t|looks} {t|like} a {v|pizza}.",
     "ar": "يبدو كالبيتزا."
    },
    {
     "en": "That 'oud {t|sounds} {t|like} a {v|guitar}.",
     "ar": "هذا العود يبدو كالغيتار."
    }
   ]
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "{t|✓} The kebabs smell delicious.\n{n|✗} The kebabs are smelling delicious.\nمع he / she / it نضيف s: {t|looks, smells, tastes}.",
   "examples": [
    {
     "en": "You {t|seem} to know a lot about the 'oud.",
     "ar": "يبدو أنّك تعرف الكثير عن العود."
    }
   ]
  }
 ],
 "2-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|can / can't} for ability now and {t|could / couldn't} for ability in the past.",
   "useAr": "نستعمل {t|can / can't} للقدرة الآن، و{t|could / couldn't} للقدرة في الماضي.",
   "signals": [
    "now",
    "at the age of 18",
    "when I was young",
    "last week"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|can / could} + {v|V1}",
   "examples": [
    {
     "en": "I {t|can} {v|make} kebabs.",
     "ar": "أستطيع تحضير الكباب."
    },
    {
     "en": "I {t|could} {v|play} it quite well when I was young.",
     "ar": "كنتُ أعزفه جيّداً حين كنتُ صغيراً."
    }
   ],
   "tip": "لا نضع to بعد can وcould."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {n|can't / couldn't} + {v|V1}",
   "examples": [
    {
     "en": "I {n|can't} {v|cook} a big meal.",
     "ar": "لا أستطيع طبخ وجبة كبيرة."
    },
    {
     "en": "I {n|couldn't} {v|find} time to play.",
     "ar": "لم أستطع إيجاد وقت للعزف."
    }
   ],
   "tip": "can't = cannot، وcouldn't = could not."
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Can / Could} + {s|Subject} + {v|V1}?",
   "examples": [
    {
     "en": "{t|Can} {s|you} {v|cook} Arab food, Nadia?",
     "ar": "هل تستطيعين طبخ الطعام العربي يا نادية؟"
    }
   ]
  }
 ],
 "2-1#2": [
  {
   "k": "intro",
   "useEn": "We use {t|used to} for past habits and situations that are not true now.",
   "useAr": "نستعمل {t|used to} للعادات والحالات الماضية التي لم تعد صحيحة الآن.",
   "signals": [
    "in the past",
    "long ago",
    "before",
    "when I was young"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|used to} + {v|V1}",
   "examples": [
    {
     "en": "People {t|used to} {v|sing} folk songs.",
     "ar": "كان الناس يغنّون الأغاني الشعبية."
    },
    {
     "en": "He {t|used to} {v|text} them.",
     "ar": "كان يرسل لهم رسائل نصية."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {n|didn't} + {t|use to} + {v|V1}",
   "examples": [
    {
     "en": "They {n|did not} {t|use to} {v|play} rock music.",
     "ar": "لم يكونوا يعزفون موسيقى الروك."
    }
   ],
   "tip": "بعد didn't نكتب use to (بلا d)."
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Did} + {s|Subject} + {t|use to} + {v|V1}?",
   "examples": [
    {
     "en": "{t|Did} {s|people} {t|use to} {v|sing} rock songs a thousand years ago?",
     "ar": "هل كان الناس يغنّون أغاني الروك قبل ألف عام؟"
    }
   ]
  }
 ],
 "3-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|present perfect} for things that have happened recently. We use {t|just}, {t|already} and {t|yet} with it.",
   "useAr": "نستعمل {t|المضارع التام} لما حدث حديثاً، ومعه الكلمات {t|just} و{t|already} و{t|yet}.",
   "signals": [
    "just",
    "already",
    "yet",
    "recently"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|have / has} + {t|just / already} + {v|V3}",
   "examples": [
    {
     "en": "I {t|have} {t|just} {v|put} my things in the car.",
     "ar": "وضعتُ أغراضي في السيارة للتوّ."
    },
    {
     "en": "We {t|have} {t|already} {v|eaten} them!",
     "ar": "لقد أكلناها بالفعل!"
    }
   ],
   "tip": "just وalready تأتيان بين have وV3."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|haven't / hasn't} + {v|V3} + {n|yet}",
   "examples": [
    {
     "en": "I {t|haven't} {v|found} my trainers {n|yet}.",
     "ar": "لم أجد حذائي الرياضي بعد."
    }
   ],
   "tip": "yet في آخر الجملة."
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Have / Has} + {s|Subject} + {v|V3} + {n|yet}?",
   "examples": [
    {
     "en": "{t|Has} {s|everyone} {v|put} their things in the car {n|yet}?",
     "ar": "هل وضع الجميع أغراضهم في السيارة بعد؟"
    }
   ]
  }
 ],
 "3-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|ever} in questions and {t|never} in statements to talk about life experience with the present perfect.",
   "useAr": "نستعمل {t|ever} في الأسئلة و{t|never} في الجمل المثبتة للحديث عن الخبرات الحياتية بالمضارع التام.",
   "signals": [
    "ever",
    "never",
    "so far",
    "in my life"
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Have / Has} + {s|Subject} + {t|ever} + {v|V3}?",
   "examples": [
    {
     "en": "{t|Have} {s|you} {t|ever} {v|seen} pictures of it?",
     "ar": "هل رأيتَ صوراً له قطّ؟"
    }
   ],
   "tip": "الإجابة: Yes, I have. / No, I haven't."
  },
  {
   "k": "pos",
   "label": "With never",
   "labelAr": "مع never",
   "formula": "{s|Subject} + {t|have / has} + {n|never} + {v|V3}",
   "examples": [
    {
     "en": "I've {n|never} {v|heard} of Yosemite.",
     "ar": "لم أسمع بيوسمايت قطّ."
    }
   ],
   "tip": "never تعني not ever، فلا نضيف not."
  },
  {
   "k": "note",
   "label": "been to",
   "labelAr": "been to",
   "body": "{t|have been to} = ذهبتُ إلى مكانٍ وعدتُ منه\nHave you ever been there?",
   "examples": [
    {
     "en": "Yes, we have. We went on a school trip last year.",
     "ar": "نعم، ذهبنا في رحلة مدرسية العام الماضي."
    }
   ]
  }
 ],
 "3-1#2": [
  {
   "k": "intro",
   "useEn": "A {t|compound word} is made by joining two words. Its meaning comes from both parts.",
   "useAr": "{t|الكلمة المركّبة} تتكوّن بضمّ كلمتين، ويأتي معناها من الجزأين.",
   "signals": [
    "every …",
    "foot …",
    "home …",
    "in … / out …",
    "some …",
    "water …",
    "wild …"
   ]
  },
  {
   "k": "note",
   "label": "Examples",
   "labelAr": "أمثلة",
   "body": "{v|every} + {t|one} = everyone\n{v|foot} + {t|ball} = football\n{v|home} + {t|work} = homework\n{v|in} + {t|doors} = indoors\n{v|out} + {t|doors} = outdoors\n{v|some} + {t|times} = sometimes\n{v|water} + {t|fall} = waterfall\n{v|wild} + {t|life} = wildlife",
   "examples": [
    {
     "en": "I think football is the most popular game in the world now.",
     "ar": "أظنّ أنّ كرة القدم أشهر لعبة في العالم الآن."
    }
   ]
  }
 ],
 "4-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|present perfect continuous} for actions that started in the past and are still happening, or have just stopped and we can see the result.",
   "useAr": "نستعمل {t|المضارع التام المستمر} للأفعال التي بدأت في الماضي وما زالت مستمرّة أو توقّفت للتوّ وأثرها ظاهر.",
   "signals": [
    "for",
    "since",
    "recently",
    "for several weeks",
    "how long"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{s|Subject} + {t|have / has} + {t|been} + {v|V-ing}",
   "examples": [
    {
     "en": "I {t|have} {t|been} {v|feeling} quite sick for several weeks.",
     "ar": "أشعر بالمرض منذ عدّة أسابيع."
    },
    {
     "en": "He {t|has} {t|been} {v|working} on a project with Mike.",
     "ar": "هو يعمل على مشروع مع مايك."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|haven't / hasn't} + {t|been} + {v|V-ing}",
   "examples": [
    {
     "en": "I {t|haven't} {t|been} {v|playing} well recently.",
     "ar": "لم ألعب جيّداً مؤخّراً."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Have / Has} + {s|Subject} + {t|been} + {v|V-ing}?",
   "examples": [
    {
     "en": "{t|Have} {s|you} {t|been} {v|eating} normally?",
     "ar": "هل كنتَ تأكل بشكل طبيعي؟"
    }
   ],
   "tip": "الإجابة: Yes, I have. / No, I haven't."
  }
 ],
 "4-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|for} with a length of time and {t|since} with a starting point in time.",
   "useAr": "نستعمل {t|for} مع طول المدّة و{t|since} مع نقطة البداية في الزمن.",
   "signals": [
    "for",
    "since",
    "how long"
   ]
  },
  {
   "k": "pos",
   "label": "for + duration",
   "labelAr": "for + مدّة",
   "formula": "{s|Subject} + {t|have / has been} + {v|V-ing} + {t|for} + a period of time",
   "examples": [
    {
     "en": "The players {t|have been} {v|training} {t|for} a week.",
     "ar": "اللاعبون يتدرّبون منذ أسبوع."
    }
   ],
   "tip": "for the past month · for four weeks."
  },
  {
   "k": "pos",
   "label": "since + starting point",
   "labelAr": "since + نقطة بداية",
   "formula": "{s|Subject} + {t|have / has been} + {v|V-ing} + {t|since} + a point in time",
   "examples": [
    {
     "en": "I {t|have been} {v|doing} what it says {t|since} then.",
     "ar": "أنفّذ ما فيه منذ ذلك الحين."
    }
   ],
   "tip": "since yesterday · since my last time here."
  },
  {
   "k": "note",
   "label": "Careful!",
   "labelAr": "انتبه!",
   "body": "{n|✗} The team have been training since three days.\n{t|✓} The team have been training for three days.\n{n|✗} Mum has cooked for two hours now.\n{t|✓} Mum has been cooking for two hours now.",
   "examples": [
    {
     "en": "How long have you been waiting?",
     "ar": "منذ متى وأنت تنتظر؟"
    }
   ]
  }
 ],
 "4-1#2": [
  {
   "k": "intro",
   "useEn": "We use {t|had better} for strong advice, and {t|could} or {t|What about …?} for suggestions.",
   "useAr": "نستعمل {t|had better} للنصيحة القوية، و{t|could} أو {t|What about …?} للاقتراح.",
   "signals": [
    "had better",
    "could",
    "What about"
   ]
  },
  {
   "k": "pos",
   "label": "Advice",
   "labelAr": "النصيحة",
   "formula": "{s|Subject} + {t|had (’d) better} + {v|V1}",
   "examples": [
    {
     "en": "You {t|’d better} {v|read} this book.",
     "ar": "من الأفضل أن تقرأ هذا الكتاب."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative advice",
   "labelAr": "النصيحة المنفيّة",
   "formula": "{s|Subject} + {t|had (’d) better} + {n|not} + {v|V1}",
   "examples": [
    {
     "en": "You {t|had better} {n|not} {v|do} this.",
     "ar": "من الأفضل ألّا تفعل هذا."
    }
   ],
   "tip": "not تأتي بعد better."
  },
  {
   "k": "pos",
   "label": "Suggestions",
   "labelAr": "الاقتراح",
   "formula": "{t|could} + {v|V1}  ·  {t|What about} + {v|V-ing}?",
   "examples": [
    {
     "en": "You {t|could} {v|start} a new sport.",
     "ar": "يمكنك أن تبدأ رياضة جديدة."
    },
    {
     "en": "{t|What about} {v|walking} for an hour?",
     "ar": "ما رأيك أن تمشي ساعة؟"
    }
   ]
  }
 ],
 "5-1#0": [
  {
   "k": "intro",
   "useEn": "{t|Possessive adjectives} (my, your…) come before a noun. {t|Possessive pronouns} (mine, yours…) replace a noun.",
   "useAr": "{t|صفات الملكية} (my, your…) تأتي قبل الاسم، و{t|ضمائر الملكية} (mine, yours…) تقوم مقام الاسم.",
   "signals": [
    "whose",
    "my / mine",
    "her / hers",
    "our / ours"
   ]
  },
  {
   "k": "note",
   "label": "Table",
   "labelAr": "الجدول",
   "body": "{s|I}: {t|my}  →  {v|mine}\n{s|you}: {t|your}  →  {v|yours}\n{s|he}: {t|his}  →  {v|his}\n{s|she}: {t|her}  →  {v|hers}\n{s|we}: {t|our}  →  {v|ours}\n{s|they}: {t|their}  →  {v|theirs}",
   "examples": [
    {
     "en": "Mine is over there by the stairs.",
     "ar": "حقيبتي هناك بجانب الدرج."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Possessive adjective",
   "labelAr": "صفة الملكية",
   "formula": "{t|my / your / his / her / our / their} + {v|noun}",
   "examples": [
    {
     "en": "It's {t|my} favourite game.",
     "ar": "إنّها لعبتي المفضّلة."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Possessive pronoun",
   "labelAr": "ضمير الملكية",
   "formula": "{t|mine / yours / his / hers / ours / theirs} (no noun)",
   "examples": [
    {
     "en": "{t|Ours} will be much better than {t|theirs}.",
     "ar": "فريقنا سيكون أفضل بكثير من فريقهم."
    }
   ],
   "tip": "لا يأتي بعده اسم."
  }
 ],
 "5-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|too} to agree with a positive statement and {t|either} to agree with a negative statement.",
   "useAr": "نستعمل {t|too} للموافقة على جملة مثبتة و{t|either} للموافقة على جملة منفيّة.",
   "signals": [
    "too",
    "either"
   ]
  },
  {
   "k": "pos",
   "label": "Positive → too",
   "labelAr": "مثبت ← too",
   "formula": "{s|Subject} + {t|auxiliary} + , {t|too}",
   "examples": [
    {
     "en": "Adnan {t|has}, {t|too}.",
     "ar": "وعدنان كذلك."
    },
    {
     "en": "I {t|do}, {t|too}.",
     "ar": "وأنا أيضاً."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative → either",
   "labelAr": "منفيّ ← either",
   "formula": "{s|Subject} + {n|auxiliary + n't} + , {t|either}",
   "examples": [
    {
     "en": "Yasmeen {n|can't}, {t|either}.",
     "ar": "وياسمين لا تستطيع أيضاً."
    },
    {
     "en": "I {n|don't}, {t|either}.",
     "ar": "ولا أنا."
    }
   ],
   "tip": "لا نستعمل too بعد جملة منفيّة."
  }
 ],
 "5-1#2": [
  {
   "k": "intro",
   "useEn": "{t|some-} words talk about an unknown thing or person; {t|every-} words talk about all of them. Years are said in two parts.",
   "useAr": "كلمات {t|some-} لشيء أو شخص غير معيّن، وكلمات {t|every-} للجميع، وتُقرأ الأعوام على جزأين.",
   "signals": [
    "something",
    "someone",
    "everything",
    "everyone"
   ]
  },
  {
   "k": "note",
   "label": "Words",
   "labelAr": "الكلمات",
   "body": "{t|some} + thing = something\n{t|some} + one = someone\n{v|every} + thing = everything\n{v|every} + one = everyone\n\nbirth + day = birthday · play + ground = playground\nland + line = landline · ear + ache = earache",
   "examples": [
    {
     "en": "Everyone should keep silent.",
     "ar": "على الجميع أن يلتزموا الصمت."
    }
   ]
  },
  {
   "k": "note",
   "label": "Number dates",
   "labelAr": "التواريخ بالأعداد",
   "body": "2020 = {t|twenty twenty}\n1967 = {t|nineteen sixty-seven}\n1711 = {t|seventeen eleven}\n2019 = {t|twenty nineteen}",
   "examples": [
    {
     "en": "1921 is nineteen twenty-one.",
     "ar": "1921 تُقرأ nineteen twenty-one."
    }
   ]
  }
 ],
 "6-1#0": [
  {
   "k": "intro",
   "useEn": "We use {t|when} + present simple in both parts for things that are always true or happen at any time.",
   "useAr": "نستعمل {t|when} مع المضارع البسيط في الجزأين لأمور صحيحة دائماً أو تحدث في أيّ وقت.",
   "signals": [
    "when",
    "always",
    "often",
    "usually"
   ]
  },
  {
   "k": "pos",
   "label": "Pattern",
   "labelAr": "الصيغة",
   "formula": "{t|When} + {s|S} + {v|present simple}, {s|S} + {v|present simple}",
   "examples": [
    {
     "en": "{t|When} people {v|are} friends, they {v|don't have to} hide their feelings.",
     "ar": "حين يكون الناس أصدقاء لا يجب أن يخفوا مشاعرهم."
    }
   ],
   "tip": "المضارع البسيط في الجزأين."
  },
  {
   "k": "pos",
   "label": "Order of parts",
   "labelAr": "ترتيب الجزأين",
   "formula": "{s|S} + {v|V1} + {t|when} + {s|S} + {v|V1}",
   "examples": [
    {
     "en": "I always want to help {t|when} a friend {v|is} upset.",
     "ar": "أريد دائماً أن أساعد حين يكون الصديق منزعجاً."
    }
   ],
   "tip": "يمكن أن يأتي when أوّلاً أو ثانياً."
  },
  {
   "k": "note",
   "label": "Feelings",
   "labelAr": "المشاعر",
   "body": "embarrassed → they go {t|red}\nscared / worried → they go {t|white}\nsurprised → they say {t|'Really?'}\npleased → they look {t|happy}\nexcited → they {t|shout and jump}",
   "examples": []
  }
 ],
 "6-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|if} + present simple and {t|will} + base verb for possible future situations and their results.",
   "useAr": "نستعمل {t|if} مع المضارع البسيط و{t|will} مع الفعل المجرّد لموقف مستقبلي ممكن ونتيجته.",
   "signals": [
    "if",
    "tomorrow",
    "next week"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{t|If} + {s|S} + {v|V1}, {s|S} + {t|will} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} he {v|is} a real friend, he {t|will} {v|understand}.",
     "ar": "إن كان صديقاً حقيقياً فسيفهم."
    }
   ],
   "tip": "لا نضع will بعد if."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{t|If} + {s|S} + {v|V1}, {s|S} + {n|won't} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} I {v|do} that, I {n|won't} {v|have} a friend.",
     "ar": "إذا فعلتُ ذلك فلن يكون لي صديق."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|What will} + {s|S} + {v|V1} + {t|if} + {s|S} + {v|V1}?",
   "examples": [
    {
     "en": "{t|What will} {s|you} {v|do} {t|if} {s|it} {v|rains}?",
     "ar": "ماذا ستفعل إن أمطرت؟"
    }
   ]
  }
 ],
 "6-1#2": [
  {
   "k": "intro",
   "useEn": "{t|Adjectives} tell us more about nouns. {t|Adverbs} ending in -ly usually tell us more about verbs.",
   "useAr": "{t|الصفات} تصف الأسماء، و{t|الظروف} التي تنتهي بـ -ly تصف الأفعال غالباً.",
   "signals": [
    "-ly",
    "What about"
   ]
  },
  {
   "k": "note",
   "label": "Adjective → adverb",
   "labelAr": "من الصفة إلى الظرف",
   "body": "dangerous → {t|dangerously}\nrecent → {t|recently}\nimmediate → {t|immediately}\nclear → {t|clearly}\ncomplete → {t|completely}",
   "examples": [
    {
     "en": "Othman sings beautifully.",
     "ar": "عثمان يغنّي بجمال."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Suggestion",
   "labelAr": "الاقتراح",
   "formula": "{t|What about} + {v|V-ing}?",
   "examples": [
    {
     "en": "{t|What about} {v|building} a snowman?",
     "ar": "ما رأيك أن نبني رجل ثلج؟"
    }
   ]
  }
 ],
 "7-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|comparative} to compare two things and the {t|superlative} for the highest degree among three or more.",
   "useAr": "نستعمل {t|المقارنة} لشيئين و{t|التفضيل} لأعلى درجة بين ثلاثة أو أكثر.",
   "signals": [
    "than",
    "of all",
    "of them all"
   ]
  },
  {
   "k": "pos",
   "label": "Comparative",
   "labelAr": "المقارنة",
   "formula": "{s|short adj} + {t|er} + {t|than}   ·   {t|more} + {s|long adj} + {t|than}",
   "examples": [
    {
     "en": "The red ones are {t|more} {s|expensive} {t|than} the white ones.",
     "ar": "الحمراء أغلى من البيضاء."
    },
    {
     "en": "They are {s|cheap}{t|er} {t|than} the green ones.",
     "ar": "هي أرخص من الخضراء."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Superlative",
   "labelAr": "التفضيل",
   "formula": "{t|the} + {s|short adj} + {t|est}   ·   {t|the most} + {s|long adj}",
   "examples": [
    {
     "en": "The white trainers are {t|the} {s|cheap}{t|est} of all.",
     "ar": "البيضاء هي الأرخص بينها."
    }
   ]
  },
  {
   "k": "note",
   "label": "Irregular",
   "labelAr": "الشاذّ",
   "body": "{s|good}  →  {t|better}  →  {v|best}\n{s|bad}  →  {t|worse}  →  {v|worst}",
   "examples": [
    {
     "en": "These green ones seem better than them.",
     "ar": "هذه الخضراء تبدو أفضل منها."
    }
   ]
  }
 ],
 "7-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|as … as} when two things are equal and {t|not as … as} when the first is less.",
   "useAr": "نستعمل {t|as … as} حين يتساوى شيئان و{t|not as … as} حين يكون الأوّل أقلّ.",
   "signals": [
    "as … as",
    "not as … as",
    "almost"
   ]
  },
  {
   "k": "pos",
   "label": "Equal",
   "labelAr": "متساويان",
   "formula": "{s|S} + {t|be} + {t|as} + {v|adjective} + {t|as} + {s|object}",
   "examples": [
    {
     "en": "I'm 165 cm and he is almost {t|as} {v|tall} {t|as} me.",
     "ar": "طولي 165 سم وهو شبه بطولي."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Less than",
   "labelAr": "أقلّ من",
   "formula": "{s|S} + {t|be} + {n|not as} + {v|adjective} + {t|as} + {s|object}",
   "examples": [
    {
     "en": "The red ones {t|do} {n|not seem as} {v|strong} {t|as} the green ones.",
     "ar": "الحمراء لا تبدو قويّة مثل الخضراء."
    }
   ]
  }
 ],
 "7-1#2": [
  {
   "k": "intro",
   "useEn": "We make {t|adverbs} from adjectives to describe how an action is done. When we use several adjectives, we put them in order.",
   "useAr": "نصنع {t|الظروف} من الصفات لنصف كيفية حدوث الفعل، وعند وجود عدّة صفات نرتّبها.",
   "signals": [
    "-ly",
    "-ily",
    "-bly"
   ]
  },
  {
   "k": "note",
   "label": "Spelling",
   "labelAr": "الإملاء",
   "body": "regular: proud → {t|proudly}\ny + ily: tidy → {t|tidily}\nble + y: comfortable → {t|comfortably}\nirregular: good → {t|well} · hard → {t|hard} · fast → {t|fast} · bad → {t|badly}",
   "examples": [
    {
     "en": "I can't work comfortably in these heavy boots.",
     "ar": "لا أستطيع العمل براحة بهذه الأحذية الثقيلة."
    }
   ]
  },
  {
   "k": "note",
   "label": "Order of adjectives",
   "labelAr": "ترتيب الصفات",
   "body": "{v|opinion} → {s|size / thickness} → {t|colour} → noun\na {v|nice} {s|thick} {t|green} jacket\na {v|beautiful} {s|long} {t|black} dress",
   "examples": [
    {
     "en": "Ahmed is dressing in his nice thick green jacket.",
     "ar": "أحمد يرتدي سترته الخضراء السميكة الجميلة."
    }
   ]
  }
 ],
 "8-1#0": [
  {
   "k": "intro",
   "useEn": "{t|Countable} nouns can be counted (apples). {t|Uncountable} nouns cannot (olive oil). We use {t|some} and {t|any} with both.",
   "useAr": "{t|المعدودة} يمكن عدّها (apples) و{t|غير المعدودة} لا يمكن (olive oil)، ونستعمل {t|some} و{t|any} مع النوعين.",
   "signals": [
    "some",
    "any",
    "a carton of",
    "a jar of"
   ]
  },
  {
   "k": "pos",
   "label": "Positive",
   "labelAr": "الإثبات",
   "formula": "{t|There is / are} + {t|some} + {v|noun}",
   "examples": [
    {
     "en": "There {t|are} {t|some} {v|olives}.",
     "ar": "يوجد بعض الزيتون."
    },
    {
     "en": "There {t|is} {t|some} {v|tomato paste}.",
     "ar": "يوجد بعض معجون الطماطم."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{t|There isn't / aren't} + {n|any} + {v|noun}",
   "examples": [
    {
     "en": "There {t|aren't} {n|any} {v|tomatoes}.",
     "ar": "لا توجد طماطم."
    },
    {
     "en": "There {t|isn't} {n|any} {v|tomato paste}.",
     "ar": "لا يوجد معجون طماطم."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Is / Are there} + {t|any} + {v|noun}?",
   "examples": [
    {
     "en": "{t|Are there} {t|any} {v|olives}?",
     "ar": "هل يوجد زيتون؟"
    }
   ]
  }
 ],
 "8-1#1": [
  {
   "k": "intro",
   "useEn": "We ask {t|How many} about countable nouns and {t|How much} about uncountable nouns.",
   "useAr": "نسأل بـ {t|How many} عن المعدود وبـ {t|How much} عن غير المعدود.",
   "signals": [
    "How many",
    "How much",
    "many",
    "much"
   ]
  },
  {
   "k": "q",
   "label": "How many",
   "labelAr": "How many",
   "formula": "{t|How many} + {v|plural noun} + {t|are there}?",
   "examples": [
    {
     "en": "{t|How many} {v|olives} {t|are there}?",
     "ar": "كم زيتونة يوجد؟"
    }
   ],
   "tip": "الإجابة: There aren't many."
  },
  {
   "k": "q",
   "label": "How much",
   "labelAr": "How much",
   "formula": "{t|How much} + {v|uncountable noun} + {t|is there}?",
   "examples": [
    {
     "en": "{t|How much} {v|olive oil} {t|is there}?",
     "ar": "كم من زيت الزيتون يوجد؟"
    }
   ],
   "tip": "الإجابة: There isn't much."
  }
 ],
 "8-1#2": [
  {
   "k": "intro",
   "useEn": "We use {t|a / an} for one unknown thing, {t|the} for a known thing, and no article for most countries and general uncountable nouns.",
   "useAr": "نستعمل {t|a / an} لشيء واحد غير معروف، و{t|the} لشيء معروف، وبلا أداة لأغلب الدول وغير المعدود العامّ.",
   "signals": [
    "a / an",
    "the",
    "×"
   ]
  },
  {
   "k": "pos",
   "label": "a / an",
   "labelAr": "a / an",
   "formula": "{t|a / an} + {v|singular countable noun}",
   "examples": [
    {
     "en": "Kuwait is {t|a} desert country.",
     "ar": "الكويت بلد صحراوي."
    }
   ],
   "tip": "an قبل الأصوات المتحرّكة."
  },
  {
   "k": "pos",
   "label": "the",
   "labelAr": "the",
   "formula": "{t|the} + {v|known / unique thing}",
   "examples": [
    {
     "en": "{t|The} climate there is hot and dry.",
     "ar": "المناخ هناك حارّ وجافّ."
    },
    {
     "en": "{t|The} Dead Sea is very salty.",
     "ar": "البحر الميّت مالح جدّاً."
    }
   ]
  },
  {
   "k": "note",
   "label": "No article (×)",
   "labelAr": "بلا أداة",
   "body": "{t|×} Kuwait · {t|×} Palestine · {t|×} bread · {t|×} Italian food",
   "examples": [
    {
     "en": "People use wheat to make bread.",
     "ar": "يستعمل الناس القمح لصنع الخبز."
    }
   ]
  }
 ],
 "9-1#0": [
  {
   "k": "intro",
   "useEn": "We use {t|who}, {t|which} and {t|that} to join two clauses and give important information about a noun.",
   "useAr": "نستعمل {t|who} و{t|which} و{t|that} لربط جملتين وإعطاء معلومة مهمّة عن الاسم.",
   "signals": [
    "who",
    "which",
    "that"
   ]
  },
  {
   "k": "pos",
   "label": "who → people",
   "labelAr": "who للأشخاص",
   "formula": "{s|person} + {t|who} + {v|verb}",
   "examples": [
    {
     "en": "There are a lot of people {t|who} {v|work} in tourism.",
     "ar": "هناك كثيرون يعملون في السياحة."
    }
   ]
  },
  {
   "k": "pos",
   "label": "which → things",
   "labelAr": "which للأشياء",
   "formula": "{s|thing} + {t|which} + {v|verb}",
   "examples": [
    {
     "en": "Jericho is a small city {t|which} {v|stands} in a deep valley.",
     "ar": "أريحا مدينة صغيرة تقع في وادٍ عميق."
    }
   ]
  },
  {
   "k": "pos",
   "label": "that → both",
   "labelAr": "that للاثنين",
   "formula": "{s|person / thing} + {t|that} + {v|verb}",
   "examples": [
    {
     "en": "This is a famous salt lake {t|that} {v|is} 400 metres below sea level.",
     "ar": "هذه بحيرة مالحة مشهورة تنخفض 400 متر تحت سطح البحر."
    },
    {
     "en": "These were the people {t|that} {v|built} the first city.",
     "ar": "هؤلاء هم الذين بنوا المدينة الأولى."
    }
   ]
  }
 ],
 "9-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|pronouns} instead of nouns when everyone knows who or what we are talking about. {t|one / ones} replace a noun from a group.",
   "useAr": "نستعمل {t|الضمائر} بدل الأسماء حين يعرف الجميع المقصود، و{t|one / ones} تحلّ محلّ اسم من مجموعة.",
   "signals": [
    "she / he",
    "her / him",
    "hers / his",
    "the one",
    "the ones"
   ]
  },
  {
   "k": "note",
   "label": "Kinds of pronoun",
   "labelAr": "أنواع الضمائر",
   "body": "{s|Subject}: she, he, it, they\n{v|Object}: her, him, it, them\n{t|Possessive}: hers, his, theirs, mine",
   "examples": [
    {
     "en": "Look. There's Fareeda. You met her at the party yesterday.",
     "ar": "انظر، هذه فريدة. لقد قابلتَها في الحفلة أمس."
    }
   ]
  },
  {
   "k": "pos",
   "label": "one / ones",
   "labelAr": "one / ones",
   "formula": "{t|the one} + {v|prep. phrase}   ·   {t|the ones} + {v|prep. phrase}",
   "examples": [
    {
     "en": "{t|The one} on the left is Mona.",
     "ar": "التي على اليسار هي منى."
    },
    {
     "en": "{t|The ones} on the right are Fatima and Rania.",
     "ar": "اللتان على اليمين هما فاطمة ورانيا."
    }
   ]
  }
 ],
 "9-1#2": [
  {
   "k": "intro",
   "useEn": "We make nouns for people and activities from other words by adding endings.",
   "useAr": "نصنع أسماء الأشخاص والأنشطة من كلمات أخرى بإضافة لواحق.",
   "signals": [
    "-ist",
    "-er",
    "-ing"
   ]
  },
  {
   "k": "note",
   "label": "Noun (person)",
   "labelAr": "اسم الشخص",
   "body": "science → {t|scientist}\ntour → {t|tourist}\nart → {t|artist}\nguitar → {t|guitarist}\ntravel → {t|traveller}\nfarm → {t|farmer}\ncamp → {t|camper}\nwork → {t|worker}",
   "examples": [
    {
     "en": "Fareeda wants to train to be a scientist.",
     "ar": "تريد فريدة أن تتدرّب لتصبح عالِمة."
    }
   ]
  },
  {
   "k": "note",
   "label": "Noun (activity)",
   "labelAr": "اسم النشاط",
   "body": "camp → {t|camping}\ndance → {t|dancing}\nsing → {t|singing}\nswim → {t|swimming}\nteach → {t|teaching}\ntrain → {t|training}",
   "examples": [
    {
     "en": "In Arab culture, singing is very important.",
     "ar": "الغناء مهمّ جدّاً في الثقافة العربية."
    }
   ]
  }
 ],
 "10-1#0": [
  {
   "k": "intro",
   "useEn": "We use {t|would like} to make offers, {t|would love} to accept with enthusiasm, and {t|would prefer} to choose something else.",
   "useAr": "نستعمل {t|would like} لتقديم العروض، و{t|would love} للقبول بحماس، و{t|would prefer} لاختيار شيء آخر.",
   "signals": [
    "would like",
    "would love",
    "would prefer"
   ]
  },
  {
   "k": "q",
   "label": "Offer",
   "labelAr": "العرض",
   "formula": "{t|Would} + {s|you} + {t|like} + {v|noun / to + V1}?",
   "examples": [
    {
     "en": "{t|Would} {s|you} {t|like} {v|another cake}?",
     "ar": "هل تودّ قطعة كعك أخرى؟"
    }
   ]
  },
  {
   "k": "pos",
   "label": "Accept",
   "labelAr": "القبول",
   "formula": "{s|I} + {t|would (’d) love} + {v|noun / to + V1}",
   "examples": [
    {
     "en": "Yes, please. I{t|’d love} {v|another one}!",
     "ar": "نعم من فضلك، أحبّ واحدة أخرى!"
    },
    {
     "en": "I{t|’d love} {t|to} {v|watch} the DVD.",
     "ar": "أحبّ أن أشاهد القرص."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Prefer",
   "labelAr": "التفضيل",
   "formula": "{s|I} + {t|would (’d) prefer} + {v|noun / to + V1}",
   "examples": [
    {
     "en": "Thank you, but I{t|’d prefer} {t|to} {v|play} computer games.",
     "ar": "شكراً لكنّني أفضّل لعب ألعاب الحاسوب."
    }
   ]
  }
 ],
 "10-1#1": [
  {
   "k": "intro",
   "useEn": "Most plural nouns add {t|-s}. Some add {t|-es} or change to {t|-ies}, and some are irregular.",
   "useAr": "أغلب الأسماء تضيف {t|-s} في الجمع، وبعضها {t|-es} أو يتحوّل إلى {t|-ies}، وبعضها شاذّ.",
   "signals": [
    "-s",
    "-es",
    "-ies",
    "-ves"
   ]
  },
  {
   "k": "note",
   "label": "Regular",
   "labelAr": "المنتظم",
   "body": "way → way{t|s}   ·   box → box{t|es}\nglass → glass{t|es}   ·   sandwich → sandwich{t|es}\ncountry → countr{t|ies}   ·   party → part{t|ies}\nboy → boy{t|s}   ·   monkey → monkey{t|s}",
   "examples": [
    {
     "en": "There are hundreds of guests!",
     "ar": "هناك مئات الضيوف!"
    }
   ]
  },
  {
   "k": "note",
   "label": "Irregular",
   "labelAr": "الشاذّ",
   "body": "life → {t|lives}   ·   wife → {t|wives}\nknife → {t|knives}   ·   half → {t|halves}\nshelf → {t|shelves}   ·   wolf → {t|wolves}\nman → {t|men}   ·   woman → {t|women}   ·   child → {t|children}",
   "examples": [
    {
     "en": "All the men, women and children climbed into the boats.",
     "ar": "صعد كلّ الرجال والنساء والأطفال إلى القوارب."
    }
   ]
  }
 ],
 "10-1#2": [
  {
   "k": "intro",
   "useEn": "We use a {t|comma} in lists and between adjectives, a {t|full stop} at the end of a statement, and an {t|apostrophe} for short forms and possession.",
   "useAr": "نستعمل {t|الفاصلة} في القوائم وبين الصفات، و{t|النقطة} في نهاية الجملة الخبرية، و{t|الفاصلة العليا} في الاختصار والملكية.",
   "signals": [
    ",",
    ".",
    "'"
   ]
  },
  {
   "k": "pos",
   "label": "Comma ( , )",
   "labelAr": "الفاصلة",
   "formula": "A{t|,} B {v|and} C{t|.}",
   "examples": [
    {
     "en": "I can see Ahmad{t|,} Ali {v|and} Fuad{t|.}",
     "ar": "أرى أحمد وعليّاً وفؤاداً."
    }
   ],
   "tip": "لا فاصلة قبل and الأخيرة غالباً."
  },
  {
   "k": "pos",
   "label": "Apostrophe ( ' )",
   "labelAr": "الفاصلة العليا",
   "formula": "{s|isn't, it's, I've, let's}  ·  {s|Ahmed's family}",
   "examples": [
    {
     "en": "There {t|isn't} any oil in the jar.",
     "ar": "لا يوجد زيت في البرطمان."
    }
   ],
   "tip": "في الاختصار تحلّ محلّ حرف محذوف."
  }
 ],
 "11-1#0": [
  {
   "k": "intro",
   "useEn": "We use a {t|reporting verb} such as says to tell someone what another person said. We usually change the pronouns.",
   "useAr": "نستعمل {t|فعلاً ناقلاً} مثل says لنخبر شخصاً بما قاله آخر، وغالباً نغيّر الضمائر.",
   "signals": [
    "says",
    "tells",
    "wants to know"
   ]
  },
  {
   "k": "pos",
   "label": "Pattern",
   "labelAr": "الصيغة",
   "formula": "{s|Person} + {t|says} + {v|reported statement}",
   "examples": [
    {
     "en": "She {t|says} {v|she needs to check yours}.",
     "ar": "هي تقول إنّها تحتاج إلى التحقّق من بياناتك."
    }
   ],
   "tip": "المضارع البسيط في الفعل الناقل."
  },
  {
   "k": "note",
   "label": "Pronoun changes",
   "labelAr": "تغيّر الضمائر",
   "body": "{s|I / we}  →  {t|he / she / they}\n{s|my / our}  →  {t|his / her / their}\n{s|you}  →  {t|I / he / she}",
   "examples": [
    {
     "en": "Dad says you need to check my details.",
     "ar": "أبي يقول إنّكِ تحتاجين إلى التحقّق من بياناتي."
    }
   ]
  }
 ],
 "11-1#1": [
  {
   "k": "intro",
   "useEn": "In {t|reported questions} we use a normal statement word order: no do / does / did and no question mark.",
   "useAr": "في {t|الأسئلة المنقولة} نستعمل ترتيب الجملة الخبرية: بلا do / does / did وبلا علامة استفهام.",
   "signals": [
    "asks",
    "wants to know",
    "needs to check"
   ]
  },
  {
   "k": "pos",
   "label": "Pattern",
   "labelAr": "الصيغة",
   "formula": "{s|Person} + {t|asks / wants to know} + {t|wh-word} + {s|subject} + {v|verb}",
   "examples": [
    {
     "en": "Tina {t|wants to know} {t|when} {s|people} {v|started} using family names.",
     "ar": "تينا تريد أن تعرف متى بدأ الناس باستعمال أسماء العائلات."
    }
   ]
  },
  {
   "k": "note",
   "label": "Compare",
   "labelAr": "قارن",
   "body": "{n|Direct:}  When did people start using family names?\n{t|Reported:}  She wants to know when people started using family names.\n\n{n|Direct:}  What does my name mean?\n{t|Reported:}  He asks what his name means.",
   "examples": [
    {
     "en": "Emma asks how our ancestors got their family names.",
     "ar": "إيما تسأل كيف حصل أجدادنا على أسماء عائلاتهم."
    }
   ]
  }
 ],
 "11-1#2": [
  {
   "k": "intro",
   "useEn": "A {t|formal letter} has a clear order: addresses, date, greeting, subject, text and a formal ending.",
   "useAr": "{t|الرسالة الرسمية} لها ترتيب واضح: العناوين والتاريخ والتحيّة والموضوع والنصّ ونهاية رسمية.",
   "signals": [
    "Dear …",
    "Yours truly"
   ]
  },
  {
   "k": "note",
   "label": "Layout",
   "labelAr": "الترتيب",
   "body": "{s|Your address}\n{s|Date}\n{s|Receiver's address}\n{t|Dear Mr and Mrs Jarrett}\n{v|Subject line}\ntext …\n{t|Yours truly}\nname · job",
   "examples": [
    {
     "en": "We hope to hear from you soon.",
     "ar": "نأمل أن نسمع منكم قريباً."
    }
   ]
  }
 ],
 "12-1#0": [
  {
   "k": "intro",
   "useEn": "A {t|phrasal verb} is a verb + a small word (up, down, off, on, over, out) that gives a new meaning.",
   "useAr": "{t|الفعل المركّب} فعل مع كلمة صغيرة (up, down, off, on, over, out) تعطي معنى جديداً.",
   "signals": [
    "up",
    "down",
    "off",
    "over",
    "on",
    "out"
   ]
  },
  {
   "k": "note",
   "label": "Examples",
   "labelAr": "أمثلة",
   "body": "{v|put down} ≠ {v|pick up}\n{v|hurry up} · {v|get up} · {v|tidy up} · {v|sweep up}\n{v|look up} · {v|turn off} · {v|work on}\n{v|take over} · {v|set up} · {v|work out}",
   "examples": [
    {
     "en": "I have to tidy up my room and sweep up round the house.",
     "ar": "عليّ أن أرتّب غرفتي وأكنس حول البيت."
    }
   ]
  }
 ],
 "12-1#1": [
  {
   "k": "intro",
   "useEn": "{t|Linking words} connect ideas in a paragraph and make the order and reason clear.",
   "useAr": "{t|أدوات الربط} تصل الأفكار في الفقرة وتوضّح الترتيب والسبب.",
   "signals": [
    "and",
    "but",
    "so",
    "because",
    "however",
    "therefore"
   ]
  },
  {
   "k": "note",
   "label": "Uses",
   "labelAr": "الاستعمالات",
   "body": "{t|and} = إضافة   ·   {t|or} = اختيار\n{t|but / however / although} = تضادّ\n{t|so / therefore / and so} = نتيجة\n{t|because} = سبب\n{t|in order to} + V1 = غرض\n{t|for example} = مثال",
   "examples": [
    {
     "en": "Because Muslim farmers came from dry climates, they knew how to use water well.",
     "ar": "لأنّ المزارعين المسلمين جاؤوا من مناخات جافّة عرفوا كيف يستعملون الماء جيّداً."
    }
   ]
  }
 ],
 "12-1#2": [
  {
   "k": "intro",
   "useEn": "A {t|topic sentence} gives the main idea of a paragraph. {t|Time expressions} show the order of events.",
   "useAr": "{t|الجملة الرئيسية} تعطي فكرة الفقرة، و{t|عبارات الزمن} تبيّن ترتيب الأحداث.",
   "signals": [
    "First",
    "Then",
    "Soon",
    "Finally"
   ]
  },
  {
   "k": "note",
   "label": "Time expressions",
   "labelAr": "عبارات الزمن",
   "body": "{t|First,} …\n{t|Just two years after that,} …\n{t|In only three years,} …\n{t|Soon,} …\n{t|Then} …\n{t|After five more years,} …\n{t|Next morning,} …",
   "examples": [
    {
     "en": "In only three years, the Muslims were quickly pushing north into the heart of Spain.",
     "ar": "في ثلاث سنوات فقط كان المسلمون يتقدّمون بسرعة شمالاً نحو قلب إسبانيا."
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
