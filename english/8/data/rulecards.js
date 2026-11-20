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
 "What about": "ما رأيك في"
};
