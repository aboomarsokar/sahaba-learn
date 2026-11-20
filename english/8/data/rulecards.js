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
 "love / like / hate": "أحبّ / يعجبني / أكره"
};
