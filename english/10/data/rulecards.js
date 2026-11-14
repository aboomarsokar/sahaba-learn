/* بطاقات شرح القواعد: لكلّ قاعدة سلسلة بطاقات (تعريف ← تكوين ← نفي ← سؤال ← ملاحظة).
   المفتاح: <رقم الدرس>#<رقم القاعدة>.   وسوم التلوين: {s|فاعل} {v|فعل} {t|أداة تكوين} {n|أداة نفي} */
window.LEXORA_RULECARDS = {
 "1-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|present continuous} for personal plans that are already arranged, and the {t|present simple} for fixed schedules and timetables.",
   "useAr": "نستخدم {t|المضارع المستمر} للخطط الشخصية المرتّبة مسبقاً، و{t|المضارع البسيط} للجداول والمواعيد الثابتة.",
   "signals": [
    "next month",
    "tomorrow",
    "on Monday",
    "at 8:30",
    "next Saturday"
   ]
  },
  {
   "k": "pos",
   "label": "Plans · Present Continuous",
   "labelAr": "الخطط الشخصية (المضارع المستمر)",
   "formula": "{s|Subject} + {t|am / is / are} + {v|V-ing} + future time",
   "examples": [
    {
     "en": "He {t|is} {v|joining} your dad's project next month.",
     "ar": "سينضمّ إلى مشروع أبيك الشهر القادم."
    },
    {
     "en": "Dad {t|is} {v|flying} next Saturday.",
     "ar": "أبي سيسافر السبت القادم."
    }
   ],
   "tip": "للخطة الشخصية التي رُتّبت فعلاً ونعرف موعدها."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|am / is / are} + {n|not} + {v|V-ing}",
   "examples": [
    {
     "en": "We {t|are} {n|not} {v|travelling} to Nablus tomorrow.",
     "ar": "لن نسافر إلى نابلس غداً."
    }
   ],
   "tip": "نضيف {n|not} بعد am / is / are."
  },
  {
   "k": "pos",
   "label": "Schedules · Present Simple",
   "labelAr": "الجداول الثابتة (المضارع البسيط)",
   "formula": "{s|Subject} + {v|V1 / V(s)} + fixed time",
   "examples": [
    {
     "en": "His flight {v|departs} at 8:30 am.",
     "ar": "تغادر رحلته في 8:30 صباحاً."
    },
    {
     "en": "The winter holidays {v|start} on 23rd December.",
     "ar": "تبدأ عطلة الشتاء في 23 كانون الأول."
    }
   ],
   "tip": "مع he / she / it نضيف s إلى الفعل."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|don't / doesn't} + {v|V1}",
   "examples": [
    {
     "en": "The bus {t|doesn't} {v|leave} before 7:00.",
     "ar": "لا تغادر الحافلة قبل السابعة."
    }
   ]
  }
 ],
 "1-1#1": [
  {
   "k": "intro",
   "useEn": "We use {t|going to} for plans and for things we can see are about to happen. We use {t|will} for predictions, quick decisions, offers and promises.",
   "useAr": "نستخدم {t|going to} للخطط والنوايا ولما نرى دليله أمامنا، ونستخدم {t|will} للتوقّعات والقرارات السريعة والعروض والوعود.",
   "signals": [
    "I think",
    "probably",
    "I'm sure",
    "Look!",
    "I promise"
   ]
  },
  {
   "k": "pos",
   "label": "going to",
   "labelAr": "going to",
   "formula": "{s|Subject} + {t|am / is / are going to} + {v|V1}",
   "examples": [
    {
     "en": "I {t|am going to} {v|interview} him tomorrow.",
     "ar": "سأجري معه مقابلة غداً."
    },
    {
     "en": "Look at those clouds! It {t|is going to} {v|rain}.",
     "ar": "انظر إلى هذه الغيوم! ستُمطر."
    }
   ],
   "tip": "للخطة، أو لشيءٍ نرى دليله الآن."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|am / is / are} + {n|not} + {t|going to} + {v|V1}",
   "examples": [
    {
     "en": "I {t|am} {n|not} {t|going to} {v|miss} the train.",
     "ar": "لن أفوّت القطار."
    }
   ]
  },
  {
   "k": "pos",
   "label": "will",
   "labelAr": "will",
   "formula": "{s|Subject} + {t|will} + {v|V1}",
   "examples": [
    {
     "en": "I'm sure you {t|will} {v|like} Jericho.",
     "ar": "أنا متأكد أنك ستحبّ أريحا."
    },
    {
     "en": "I{t|'ll} {v|carry} your bag if you like.",
     "ar": "سأحمل حقيبتك إن أحببت."
    }
   ],
   "tip": "للتوقّع، وللقرار اللحظي، وللعرض والوعد."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|will} + {n|not} {t|(won't)} + {v|V1}",
   "examples": [
    {
     "en": "Don't worry. I {t|will} {n|not} {v|forget}.",
     "ar": "لا تقلق، لن أنسى."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Will} + {s|Subject} + {v|V1}?",
   "examples": [
    {
     "en": "{t|Will} {s|you} {v|call} me tomorrow?",
     "ar": "هل ستتّصل بي غداً؟"
    }
   ]
  }
 ],
 "2-1#0": [
  {
   "k": "intro",
   "useEn": "{t|Present perfect}: a past action with a result now (with just, already, yet, so far). {t|Present perfect continuous}: an action that started in the past and is still going on (with for / since).",
   "useAr": "{t|المضارع التام}: حدث ماضٍ له أثر الآن (مع just و already و yet و so far). {t|المضارع التام المستمر}: حدث بدأ في الماضي وما زال مستمرّاً (مع for و since).",
   "signals": [
    "just",
    "already",
    "yet",
    "so far",
    "for",
    "since"
   ]
  },
  {
   "k": "pos",
   "label": "Present Perfect",
   "labelAr": "المضارع التام",
   "formula": "{s|Subject} + {t|have / has} + {v|V3}",
   "examples": [
    {
     "en": "The girls {t|have} just {v|set} off.",
     "ar": "انطلقت الفتيات للتوّ."
    },
    {
     "en": "We {t|have} already {v|found} one clue.",
     "ar": "وجدنا دليلاً واحداً فعلاً."
    }
   ],
   "tip": "مع he / she / it نستخدم has."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|have / has} + {n|not} + {v|V3}",
   "examples": [
    {
     "en": "We {t|have} {n|not} {v|found} another clue yet.",
     "ar": "لم نجد دليلاً آخر بعد."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Have / Has} + {s|Subject} + {v|V3}?",
   "examples": [
    {
     "en": "{t|Have} {s|you} {v|finished} yet?",
     "ar": "هل أنهيتَ بعد؟"
    }
   ]
  },
  {
   "k": "pos",
   "label": "Present Perfect Continuous",
   "labelAr": "المضارع التام المستمر",
   "formula": "{s|Subject} + {t|have / has been} + {v|V-ing} + {t|for / since}",
   "examples": [
    {
     "en": "We {t|have been} {v|running} {t|for} ages.",
     "ar": "نحن نركض منذ وقتٍ طويل."
    },
    {
     "en": "Lana {t|has been} {v|playing} the piano {t|since} she was five.",
     "ar": "تعزف لانا على البيانو منذ كانت في الخامسة."
    }
   ],
   "tip": "for + مدّة (for ages)،  since + نقطة بداية (since 2010)."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|haven't / hasn't been} + {v|V-ing}",
   "examples": [
    {
     "en": "It {t|hasn't been} {v|raining} for weeks.",
     "ar": "لم تُمطر منذ أسابيع."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "How long + {t|have / has} + {s|Subject} + {t|been} + {v|V-ing}?",
   "examples": [
    {
     "en": "How long {t|have} {s|you} {t|been} {v|waiting}?",
     "ar": "منذ متى وأنت تنتظر؟"
    }
   ]
  }
 ],
 "2-1#1": [
  {
   "k": "intro",
   "useEn": "Use the {t|past simple} for a finished action at a definite time. Use the {t|present perfect} when the past is connected to now, without a definite time.",
   "useAr": "نستخدم {t|الماضي البسيط} لحدثٍ انتهى في وقتٍ محدّد، ونستخدم {t|المضارع التام} حين يرتبط الماضي بالحاضر دون وقتٍ محدّد.",
   "signals": [
    "yesterday",
    "ago",
    "in 2004",
    "last week",
    "so far",
    "recently",
    "ever"
   ]
  },
  {
   "k": "pos",
   "label": "Past Simple",
   "labelAr": "الماضي البسيط",
   "formula": "{s|Subject} + {v|V2} + definite time",
   "examples": [
    {
     "en": "A ship {v|found} them at 6:30 am.",
     "ar": "وجدتهم سفينة في السادسة والنصف."
    },
    {
     "en": "They {v|left} Canada 40 days {t|ago}.",
     "ar": "غادروا كندا قبل 40 يوماً."
    }
   ],
   "tip": "الوقت المحدّد: yesterday / ago / in 2004 / at 6:30."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|didn't} + {v|V1}",
   "examples": [
    {
     "en": "They {t|didn't} {v|reach} land that night.",
     "ar": "لم يصلوا إلى اليابسة تلك الليلة."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Present Perfect",
   "labelAr": "المضارع التام",
   "formula": "{s|Subject} + {t|have / has} + {v|V3} + so far / recently / ever",
   "examples": [
    {
     "en": "GPS {t|has} {v|saved} many lives.",
     "ar": "أنقذ GPS أرواحاً كثيرة."
    },
    {
     "en": "How far {t|have} you {v|travelled} {t|so far}?",
     "ar": "كم قطعتَ من مسافة حتى الآن؟"
    }
   ],
   "tip": "بلا وقتٍ محدّد، والمهمّ هو الأثر الآن."
  },
  {
   "k": "note",
   "label": "Careful!",
   "labelAr": "انتبه!",
   "body": "✗ I {n|have seen} him yesterday.\n✓ I {t|saw} him yesterday.\n\nلا نستخدم المضارع التام مع وقتٍ محدّد مثل yesterday.",
   "examples": []
  }
 ],
 "3-1#0": [
  {
   "k": "intro",
   "useEn": "{t|may / might} show possibility. {t|can} shows ability or permission. {t|Could you…?} is a polite request. {t|Shall I…?} is an offer.",
   "useAr": "{t|may / might} للاحتمال، و{t|can} للقدرة أو الإذن، و{t|Could you…?} لطلبٍ مهذّب، و{t|Shall I…?} لعرض المساعدة.",
   "signals": [
    "maybe",
    "perhaps",
    "please",
    "if you like"
   ]
  },
  {
   "k": "pos",
   "label": "Possibility",
   "labelAr": "الاحتمال",
   "formula": "{s|Subject} + {t|may / might} + {v|V1}",
   "examples": [
    {
     "en": "We {t|may} {v|hurt} ourselves.",
     "ar": "قد نؤذي أنفسنا."
    },
    {
     "en": "It {t|might} {v|be} in the living room.",
     "ar": "ربما يكون في غرفة الجلوس."
    }
   ],
   "tip": "بعد الفعل الناقص يأتي الفعل بلا to وبلا s."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|may / might} + {n|not} + {v|V1}",
   "examples": [
    {
     "en": "You {t|might} {n|not} {v|know} about rugby.",
     "ar": "ربما لا تعرف شيئاً عن الرغبي."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Ability / Permission",
   "labelAr": "القدرة والإذن",
   "formula": "{s|Subject} + {t|can} + {v|V1}",
   "examples": [
    {
     "en": "You {t|can} {v|carry} the ball in rugby.",
     "ar": "يُسمح لك بحمل الكرة في الرغبي."
    },
    {
     "en": "I {t|can} {v|swim}.",
     "ar": "أستطيع السباحة."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|can't / cannot} + {v|V1}",
   "examples": [
    {
     "en": "We {t|can't} easily {v|leave} the city.",
     "ar": "لا نستطيع مغادرة المدينة بسهولة."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Requests and offers",
   "labelAr": "الطلب والعرض",
   "formula": "{t|Could} {s|you} {v|V1}…?   ·   {t|Shall} {s|I} {v|V1}…?   ·   {s|I} {t|could} {v|V1}…",
   "examples": [
    {
     "en": "{t|Could} {s|you} {v|send} me some photos?",
     "ar": "هل يمكنك أن ترسل لي بعض الصور؟  (طلب)"
    },
    {
     "en": "{t|Shall} {s|I} {v|email} you some photos?",
     "ar": "هل أرسل لك بعض الصور بالبريد؟  (عرض)"
    },
    {
     "en": "{s|I} {t|could} {v|email} you some photos.",
     "ar": "يمكنني أن أرسل لك بعض الصور.  (اقتراح)"
    }
   ]
  }
 ],
 "3-1#1": [
  {
   "k": "intro",
   "useEn": "{t|should} gives advice. {t|must} and {t|have to} show necessity. {t|mustn't} means it is forbidden. {t|don't have to} means it is not necessary.",
   "useAr": "{t|should} للنصيحة، و{t|must} و{t|have to} للضرورة، و{t|mustn't} تعني «ممنوع»، و{t|don't have to} تعني «غير ضروري».",
   "signals": [
    "it's a good idea",
    "it's necessary",
    "it's forbidden"
   ]
  },
  {
   "k": "pos",
   "label": "Advice and necessity",
   "labelAr": "النصيحة والضرورة",
   "formula": "{s|Subject} + {t|should / must / have to / need to} + {v|V1}",
   "examples": [
    {
     "en": "You {t|should} {v|see} it. It's great!",
     "ar": "يجب أن تشاهده، إنه رائع!"
    },
    {
     "en": "We {t|have to} {v|do} our homework.",
     "ar": "علينا أن نحلّ واجباتنا."
    }
   ],
   "tip": "must: شعورك أنت.   have to: أمرٌ يفرضه غيرك."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|shouldn't / mustn't} + {v|V1}   ·   {s|Subject} + {t|don't have to / don't need to} + {v|V1}",
   "examples": [
    {
     "en": "You {t|mustn't} {v|use} that path. It's dangerous!",
     "ar": "يُمنع أن تستخدم ذلك الممرّ، إنه خطير!"
    },
    {
     "en": "You {t|don't have to} {v|kick} the ball.",
     "ar": "لا يلزمك أن تركل الكرة."
    }
   ],
   "tip": "{n|mustn't} = ممنوع.   {n|don't have to} = غير ضروري (مسموح لكن ليس واجباً)."
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Do / Does} + {s|Subject} + {t|have to} + {v|V1}?",
   "examples": [
    {
     "en": "{t|Do} {s|all students} {t|have to} {v|wear} a uniform?",
     "ar": "هل على كلّ الطلاب ارتداء الزيّ المدرسي؟"
    }
   ]
  }
 ],
 "3-1#2": [
  {
   "k": "intro",
   "useEn": "{t|could} and {t|was / were able to} show past ability. {t|had to} shows past necessity.",
   "useAr": "{t|could} و{t|was / were able to} للقدرة في الماضي، و{t|had to} للضرورة في الماضي.",
   "signals": [
    "yesterday",
    "last year",
    "when I was five"
   ]
  },
  {
   "k": "pos",
   "label": "Past ability",
   "labelAr": "القدرة في الماضي",
   "formula": "{s|Subject} + {t|could / was able to} + {v|V1}",
   "examples": [
    {
     "en": "At five, Ann {t|could} {v|make} biscuits.",
     "ar": "في الخامسة كانت آن تستطيع صنع البسكويت."
    },
    {
     "en": "That weekend, Joe {t|was able to} {v|build} a new bike.",
     "ar": "في ذلك الأسبوع استطاع جو بناء دراجة جديدة."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|couldn't / wasn't able to} + {v|V1}",
   "examples": [
    {
     "en": "She {t|could not} {v|do} everything on her own.",
     "ar": "لم تكن تستطيع فعل كلّ شيء وحدها."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Past necessity",
   "labelAr": "الضرورة في الماضي",
   "formula": "{s|Subject} + {t|had to} + {v|V1}",
   "examples": [
    {
     "en": "At 14, Joe {t|had to} {v|build} his own bike.",
     "ar": "في الرابعة عشرة اضطرّ جو إلى بناء دراجته بنفسه."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|didn't have to} + {v|V1}",
   "examples": [
    {
     "en": "He {t|didn't have to} {v|pay} anything.",
     "ar": "لم يكن عليه أن يدفع شيئاً."
    }
   ],
   "tip": "{n|didn't have to} = لم يكن ضرورياً."
  }
 ],
 "4-1#0": [
  {
   "k": "intro",
   "useEn": "Adjectives describe nouns. An {t|-ing} adjective describes the thing; an {t|-ed} adjective describes how we feel.",
   "useAr": "الصفة تصف الاسم. الصفة المنتهية بـ {t|-ing} تصف الشيء نفسه، والمنتهية بـ {t|-ed} تصف شعورنا نحن.",
   "signals": [
    "thick",
    "exhausted",
    "amazing",
    "bored"
   ]
  },
  {
   "k": "pos",
   "label": "Before a noun",
   "labelAr": "قبل الاسم",
   "formula": "{t|adjective} + {t|adjective} + {s|noun}",
   "examples": [
    {
     "en": "We move into the {t|thick, black} {s|smoke}.",
     "ar": "ندخل في الدخان الأسود الكثيف."
    }
   ],
   "tip": "الصفتان قبل الاسم تُفصل بينهما فاصلة."
  },
  {
   "k": "pos",
   "label": "After be / feel / seem",
   "labelAr": "بعد الأفعال الرابطة",
   "formula": "{s|Subject} + {t|be / feel / seem / look} + {v|adjective} + {t|and} + {v|adjective}",
   "examples": [
    {
     "en": "We {t|are} {v|dirty} {t|and} {v|exhausted}.",
     "ar": "نحن متّسخون ومرهقون."
    },
    {
     "en": "You {t|seem} {v|very happy}!",
     "ar": "تبدو سعيداً جداً!"
    }
   ],
   "tip": "الصفتان بعد الفعل الرابط نربطهما بـ and."
  },
  {
   "k": "pos",
   "label": "-ing or -ed?",
   "labelAr": "الفرق بين -ing و -ed",
   "formula": "{v|-ing}  =  الشيء نفسه مثير / مملّ      {v|-ed}  =  أنا أشعر بالحماس / بالملل",
   "examples": [
    {
     "en": "It was an {v|exciting} race.",
     "ar": "كان سباقاً مثيراً."
    },
    {
     "en": "I was {v|excited} about the race.",
     "ar": "كنتُ متحمّساً للسباق."
    }
   ]
  }
 ],
 "4-1#1": [
  {
   "k": "intro",
   "useEn": "Adverbs tell us more about verbs. We usually make them by adding {t|-ly} to an adjective.",
   "useAr": "الظرف يصف الفعل، ونصوغه غالباً بإضافة {t|-ly} إلى الصفة.",
   "signals": [
    "quickly",
    "luckily",
    "really",
    "fast",
    "well"
   ]
  },
  {
   "k": "pos",
   "label": "Forming adverbs",
   "labelAr": "تكوين الظرف",
   "formula": "{t|adjective} + {t|-ly}      quick → {v|quickly}      lucky → {v|luckily}",
   "examples": [
    {
     "en": "She shut the door {v|quickly}.",
     "ar": "أغلقت الباب بسرعة."
    },
    {
     "en": "{v|Luckily}, some neighbours heard her.",
     "ar": "لحسن الحظّ سمعها بعض الجيران."
    }
   ],
   "tip": "الصفة المنتهية بـ y تصير ily."
  },
  {
   "k": "pos",
   "label": "Irregular adverbs",
   "labelAr": "ظروف شاذّة",
   "formula": "{t|fast → fast}   ·   {t|hard → hard}   ·   {t|early → early}   ·   {t|good → well}",
   "examples": [
    {
     "en": "Smoke was coming in {v|fast}.",
     "ar": "كان الدخان يدخل بسرعة."
    },
    {
     "en": "He plays {v|well}.",
     "ar": "هو يلعب جيداً."
    }
   ],
   "tip": "هذه لا تأخذ -ly."
  },
  {
   "k": "pos",
   "label": "Position",
   "labelAr": "مكان الظرف في الجملة",
   "formula": "{s|Subject} + {v|verb} + {t|adverb}      ·      {s|Subject} + {t|adverb} + {v|verb}      ·      {t|Adverb,} + sentence",
   "examples": [
    {
     "en": "Paramedics and neighbours watched {t|silently}.",
     "ar": "شاهد المسعفون والجيران بصمت."
    },
    {
     "en": "Helen {t|desperately} {v|needed} another way out.",
     "ar": "احتاجت هيلين بشدّة إلى مخرجٍ آخر."
    }
   ],
   "tip": "قبل الفعل للتوكيد، وفي أوّل الجملة مع فاصلة."
  }
 ],
 "5-1#0": [
  {
   "k": "intro",
   "useEn": "We compare things with {t|comparatives} (-er / more … than) and {t|superlatives} (the -est / the most).",
   "useAr": "نقارن بين الأشياء بصيغة {t|المقارنة} (-er أو more … than) وبصيغة {t|التفضيل} (the -est أو the most).",
   "signals": [
    "than",
    "the",
    "more",
    "most"
   ]
  },
  {
   "k": "pos",
   "label": "Short adjectives",
   "labelAr": "الصفات القصيرة",
   "formula": "{t|adj + -er} + than      ·      the {t|adj + -est}",
   "examples": [
    {
     "en": "The ice is melting {t|faster} than before.",
     "ar": "يذوب الجليد أسرع من قبل."
    },
    {
     "en": "These are {t|the highest} mountains.",
     "ar": "هذه أعلى الجبال."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Long adjectives",
   "labelAr": "الصفات الطويلة",
   "formula": "{t|more} + adjective + than      ·      the {t|most} + adjective",
   "examples": [
    {
     "en": "It has been {t|more} exciting {t|than} usual.",
     "ar": "كان أكثر إثارةً من المعتاد."
    },
    {
     "en": "These are {t|the most} dramatic mountains.",
     "ar": "هذه أكثر الجبال إثارةً."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Adverbs",
   "labelAr": "الظروف",
   "formula": "{t|more / most} + adverb (more quickly)      ·      fast, hard, long → {t|-er / -est}",
   "examples": [
    {
     "en": "Temperatures are rising {t|more quickly} than normal.",
     "ar": "ترتفع الحرارة أسرع من المعتاد."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Irregular",
   "labelAr": "الصيغ الشاذّة",
   "formula": "{t|good / well → better → the best}      ·      {t|bad → worse → the worst}",
   "examples": [
    {
     "en": "The systems work {t|better} than in the past.",
     "ar": "تعمل الأنظمة أفضل من الماضي."
    },
    {
     "en": "It was {t|the worst} storm in history.",
     "ar": "كانت أسوأ عاصفة في التاريخ."
    }
   ]
  }
 ],
 "5-1#1": [
  {
   "k": "intro",
   "useEn": "{t|as … as} says two things are equal. {t|so … that} and {t|such … that} give a result.",
   "useAr": "{t|as … as} تعني التساوي، و{t|so … that} و{t|such … that} تعطيان السبب ونتيجته.",
   "signals": [
    "as … as",
    "not as … as",
    "so",
    "such",
    "that"
   ]
  },
  {
   "k": "pos",
   "label": "as … as",
   "labelAr": "المساواة",
   "formula": "{t|as} + adjective / adverb + {t|as}",
   "examples": [
    {
     "en": "Wind speeds are {t|as} high {t|as} 120 kph.",
     "ar": "تبلغ سرعة الريح 120 كم/س."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|is / are} + {n|not as} + adjective + {t|as}",
   "examples": [
    {
     "en": "The storm is {n|not as} violent {t|as} other storms.",
     "ar": "هذه العاصفة ليست بعنف العواصف الأخرى."
    }
   ],
   "tip": "تعني: أقلّ من."
  },
  {
   "k": "pos",
   "label": "so … that",
   "labelAr": "so … that",
   "formula": "{t|so} + adjective / adverb + {t|that} + result",
   "examples": [
    {
     "en": "Hurricanes are {t|so} dangerous {t|that} scientists watch them closely.",
     "ar": "الأعاصير خطيرة جداً لدرجة أنّ العلماء يراقبونها عن كثب."
    }
   ]
  },
  {
   "k": "pos",
   "label": "such … that",
   "labelAr": "such … that",
   "formula": "{t|such (a / an)} + adjective + noun + {t|that} + result",
   "examples": [
    {
     "en": "It was {t|such a} disaster {t|that} 500,000 people died.",
     "ar": "كانت كارثةً إلى حدّ أنّ 500 ألف شخص ماتوا."
    }
   ]
  }
 ],
 "6-1#0": [
  {
   "k": "intro",
   "useEn": "The {t|past continuous} describes a longer action in progress in the past. The {t|past simple} describes a short action that interrupted it.",
   "useAr": "{t|الماضي المستمر} لحدثٍ طويل كان جارياً في الماضي، و{t|الماضي البسيط} لحدثٍ قصير قطعه.",
   "signals": [
    "while",
    "when",
    "at that moment"
   ]
  },
  {
   "k": "pos",
   "label": "Past Continuous",
   "labelAr": "الماضي المستمر",
   "formula": "{s|Subject} + {t|was / were} + {v|V-ing}",
   "examples": [
    {
     "en": "I {t|was} {v|walking} home.",
     "ar": "كنتُ أمشي إلى البيت."
    },
    {
     "en": "They {t|were} {v|watching} TV.",
     "ar": "كانوا يشاهدون التلفاز."
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
     "en": "We {t|weren't} {v|sleeping} at midnight.",
     "ar": "لم نكن نائمين عند منتصف الليل."
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
     "en": "{t|Were} {s|you} {v|studying} when I called?",
     "ar": "هل كنتَ تدرس حين اتّصلت؟"
    }
   ]
  },
  {
   "k": "pos",
   "label": "With the Past Simple",
   "labelAr": "مع الماضي البسيط",
   "formula": "{t|While} + {s|S} + {t|was / were} {v|V-ing}, {s|S} + {v|V2}      ·      {s|S} + {t|was / were} {v|V-ing} + {t|when} + {s|S} + {v|V2}",
   "examples": [
    {
     "en": "{t|While} I {t|was} {v|walking}, it {v|started} to rain.",
     "ar": "بينما كنتُ أمشي بدأ المطر."
    },
    {
     "en": "They {t|were} {v|watching} TV {t|when} the lights {v|went} out.",
     "ar": "كانوا يشاهدون التلفاز حين انطفأت الأضواء."
    }
   ],
   "tip": "الطويل بالمستمر، والقصير بالبسيط."
  }
 ],
 "6-1#1": [
  {
   "k": "intro",
   "useEn": "The {t|past perfect} shows an action that happened {t|before} another action in the past.",
   "useAr": "{t|الماضي التام} لحدثٍ وقع {t|قبل} حدثٍ آخر في الماضي.",
   "signals": [
    "before",
    "by the time",
    "after",
    "when",
    "already"
   ]
  },
  {
   "k": "pos",
   "label": "Past Perfect",
   "labelAr": "الماضي التام",
   "formula": "{s|Subject} + {t|had} + {v|V3}",
   "examples": [
    {
     "en": "When they returned, their village {t|had} {v|disappeared}.",
     "ar": "حين عادوا كانت قريتهم قد اختفت."
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
     "en": "He was glad that people {t|hadn't} {v|forgotten} him.",
     "ar": "كان مسروراً لأنّ الناس لم ينسوه."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Had} + {s|Subject} + {v|V3}?",
   "examples": [
    {
     "en": "{t|Had} {s|the film} {v|started} before you arrived?",
     "ar": "هل كان الفيلم قد بدأ قبل أن تصل؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "Order of events",
   "labelAr": "ترتيب الأحداث",
   "body": "{t|had + V3}  =  الحدث الأقدم\n{v|V2}  =  الحدث الأحدث",
   "examples": [
    {
     "en": "By the time she {v|left} school, she {t|had} {v|written} many poems.",
     "ar": "حين غادرت المدرسة كانت قد كتبت قصائد كثيرة."
    }
   ]
  }
 ],
 "7-1#0": [
  {
   "k": "intro",
   "useEn": "In {t|reported speech} we tell someone what another person said. When the reporting verb is in the past, the tense moves {t|one step back}.",
   "useAr": "في {t|الكلام المنقول} نروي ما قاله شخصٌ آخر. وحين يكون فعل النقل ماضياً يرجع الزمن {t|خطوة إلى الماضي}.",
   "signals": [
    "said (that)",
    "told (someone)",
    "explained",
    "added"
   ]
  },
  {
   "k": "note",
   "label": "Tense changes",
   "labelAr": "كيف يتغيّر الزمن؟",
   "body": "{s|is / are}   →   {t|was / were}\n{s|V1 (looks)}   →   {t|V2 (looked)}\n{s|V2 (accepted)}   →   {t|had + V3}\n{s|have / has + V3}   →   {t|had + V3}\n{s|will}   →   {t|would}\n{s|can}   →   {t|could}",
   "examples": []
  },
  {
   "k": "pos",
   "label": "Statements",
   "labelAr": "الجمل الخبرية",
   "formula": "{s|Subject} + {t|said (that)} + {s|S} + {v|back-shifted verb}",
   "examples": [
    {
     "en": "“Science {t|is} {v|helping} people,” he said. → He said that science {t|was} {v|helping} people.",
     "ar": "is تصبح was"
    },
    {
     "en": "“It {t|will} continue,” he said. → He said that it {t|would} continue.",
     "ar": "will تصبح would"
    },
    {
     "en": "“It {t|can} understand,” he said. → He said that it {t|could} understand.",
     "ar": "can تصبح could"
    }
   ],
   "tip": "اضغط «حوّلها» لترى الجملة بعد النقل."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Subject} + {t|said (that)} + {s|S} + {n|didn't / wasn't / couldn't} + {v|…}",
   "examples": [
    {
     "en": "“I {t|don't} {v|drink} coffee,” she said. → She said that she {n|didn't} {v|drink} coffee.",
     "ar": "don't تصبح didn't"
    }
   ]
  }
 ],
 "7-1#1": [
  {
   "k": "intro",
   "useEn": "In {t|reported questions} the word order becomes like a statement and we drop do / does / did. In {t|reported requests} we use ask / tell + someone + to + verb.",
   "useAr": "في {t|الأسئلة المنقولة} تصير الجملة خبرية ونحذف do / does / did. وفي {t|الطلبات المنقولة} نستخدم ask / tell + شخص + to + فعل.",
   "signals": [
    "asked",
    "wondered",
    "told",
    "if / whether"
   ]
  },
  {
   "k": "pos",
   "label": "Yes / No questions",
   "labelAr": "أسئلة نعم / لا",
   "formula": "{t|asked} + {t|if / whether} + {s|S} + {v|V}",
   "examples": [
    {
     "en": "“{t|Are} you free?” Samar asks me. → Samar asks {t|if} I {t|am} free.",
     "ar": "تحوّل السؤال إلى جملة خبرية"
    }
   ],
   "tip": "أسئلة نعم / لا نربطها بـ if أو whether."
  },
  {
   "k": "pos",
   "label": "Wh- questions",
   "labelAr": "أسئلة Wh",
   "formula": "{t|asked} + {t|wh-word} + {s|S} + {v|V}",
   "examples": [
    {
     "en": "“How {t|did} it {v|go}?” I ask. → I ask how it {v|went}.",
     "ar": "حذفنا did وصار الفعل ماضياً"
    },
    {
     "en": "“When {t|does} the hospital {v|want} you?” → I wonder when the hospital {v|wants} them.",
     "ar": "حذفنا does وعادت s"
    }
   ],
   "tip": "نُبقي أداة السؤال، ونحذف do / does / did."
  },
  {
   "k": "pos",
   "label": "Requests",
   "labelAr": "الطلبات",
   "formula": "{t|asked / told} + {s|someone} + {t|to} + {v|V1}",
   "examples": [
    {
     "en": "“{t|Could} you look after Deema?” she asks me. → She asks me {t|to} {v|look} after Deema.",
     "ar": "اختفت Could you وجاءت to"
    }
   ],
   "tip": "الطلب المهذّب يتحوّل إلى ask + شخص + to + فعل."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{t|told} + {s|someone} + {n|not to} + {v|V1}",
   "examples": [
    {
     "en": "“Don't make so much noise!” → My dad told me {n|not to} {v|make} so much noise.",
     "ar": "الأمر المنفي: not to + فعل"
    }
   ]
  }
 ],
 "8-1#0": [
  {
   "k": "intro",
   "useEn": "{t|Conditional type 2} talks about unreal or unlikely situations in the present or future: “what would happen if…”.",
   "useAr": "{t|الشرط من النوع الثاني} لمواقف غير حقيقية أو بعيدة الاحتمال في الحاضر أو المستقبل: «ماذا لو…».",
   "signals": [
    "if",
    "would",
    "imagine",
    "if I were you"
   ]
  },
  {
   "k": "pos",
   "label": "Structure",
   "labelAr": "التكوين",
   "formula": "{t|If} + {s|S} + {v|V2},   {s|S} + {t|would} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} I {v|lived} in Germany, things {t|would} {v|be} different.",
     "ar": "لو عشتُ في ألمانيا لكانت الأمور مختلفة."
    },
    {
     "en": "{t|If} I {t|were} you, I {t|would} {v|choose} sciences.",
     "ar": "لو كنتُ مكانك لاخترتُ العلوم."
    }
   ],
   "tip": "مع be نستخدم were مع كلّ الضمائر."
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{t|If} + {s|S} + {n|didn't} + {v|V1},   {s|S} + {n|wouldn't} + {v|V1}",
   "examples": [
    {
     "en": "{t|If} you {n|didn't} {v|study}, you {n|wouldn't} {v|pass}.",
     "ar": "لو لم تدرس لما نجحت."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|What would} + {s|S} + {v|V1} + {t|if} + {s|S} + {v|V2}?",
   "examples": [
    {
     "en": "{t|What would} you {v|do} {t|if} you {v|won} a prize?",
     "ar": "ماذا كنتَ ستفعل لو فزتَ بجائزة؟"
    }
   ]
  },
  {
   "k": "note",
   "label": "For comparison: Type 1",
   "labelAr": "للمقارنة: النوع الأول",
   "body": "{t|If} + {s|present},   {s|S} + {t|will} + {v|V1}\nللأمور المحتملة فعلاً.",
   "examples": [
    {
     "en": "{t|If} you {v|choose} well, you {t|will} {v|find} the right career.",
     "ar": "إذا أحسنتَ الاختيار فستجد المهنة المناسبة."
    }
   ]
  }
 ],
 "8-1#1": [
  {
   "k": "intro",
   "useEn": "{t|Conditional type 3} talks about the {t|past} and imagines a different result, so it is impossible now.",
   "useAr": "{t|الشرط من النوع الثالث} عن {t|الماضي}، نتخيّل نتيجةً مختلفة، فهو مستحيل الآن.",
   "signals": [
    "if … had",
    "would have",
    "what if",
    "regret"
   ]
  },
  {
   "k": "pos",
   "label": "Structure",
   "labelAr": "التكوين",
   "formula": "{t|If} + {s|S} + {t|had} + {v|V3},   {s|S} + {t|would have} + {v|V3}",
   "examples": [
    {
     "en": "{t|If} you {t|had} {v|been} born in 1700, you {t|would have} {v|had} no education.",
     "ar": "لو وُلدتَ عام 1700 لما نلتَ تعليماً."
    },
    {
     "en": "{t|If} she {t|had} {v|studied}, she {t|would have} {v|passed}.",
     "ar": "لو درست لنجحت."
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{t|If} + {s|S} + {n|hadn't} + {v|V3},   {s|S} + {n|wouldn't have} + {v|V3}",
   "examples": [
    {
     "en": "{t|If} I {n|hadn't} {v|missed} the bus, I {n|wouldn't have} {v|been} late.",
     "ar": "لو لم تفتني الحافلة لما تأخّرت."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|What would} + {s|S} + {t|have} + {v|V3} + {t|if} + {s|S} + {t|had} + {v|V3}?",
   "examples": [
    {
     "en": "{t|What would} you {t|have} {v|done} {t|if} you {t|had} {v|lived} in 1900?",
     "ar": "ماذا كنتَ ستفعل لو عشتَ عام 1900؟"
    }
   ]
  }
 ],
 "9-1#0": [
  {
   "k": "intro",
   "useEn": "{t|a / an} introduce something new. {t|some} is for plural and uncountable nouns. {t|the} is for something already known. We use {t|no article} for general statements.",
   "useAr": "{t|a / an} لشيءٍ جديد، و{t|some} للجمع وغير المعدود، و{t|the} لشيءٍ معروف أو سبق ذكره، و{t|بلا أداة} في الكلام العام.",
   "signals": [
    "a / an",
    "some",
    "the",
    "—"
   ]
  },
  {
   "k": "pos",
   "label": "a / an",
   "labelAr": "a / an",
   "formula": "{t|a} + consonant sound      ·      {t|an} + vowel sound      (singular, countable)",
   "examples": [
    {
     "en": "I'd like {t|a} burger.",
     "ar": "أريد برغر."
    },
    {
     "en": "We need {t|an} hour to finish.",
     "ar": "نحتاج إلى ساعة لننهي. (hour تبدأ بصوت متحرّك)"
    }
   ],
   "tip": "المهمّ هو الصوت لا الحرف."
  },
  {
   "k": "pos",
   "label": "some",
   "labelAr": "some",
   "formula": "{t|some} + plural / uncountable noun",
   "examples": [
    {
     "en": "I'd like {t|some} fries.",
     "ar": "أريد بعض البطاطا المقلية."
    },
    {
     "en": "Can I have {t|some} water?",
     "ar": "هل يمكنني الحصول على بعض الماء؟"
    }
   ]
  },
  {
   "k": "pos",
   "label": "the",
   "labelAr": "the",
   "formula": "{t|the} + known thing / second mention",
   "examples": [
    {
     "en": "I bought {t|a} melon. {t|The} melon was sweet.",
     "ar": "اشتريتُ شمّامة. وكانت الشمّامة حلوة."
    }
   ],
   "tip": "المرة الأولى a، والثانية the."
  },
  {
   "k": "pos",
   "label": "No article",
   "labelAr": "بلا أداة",
   "formula": "{t|no article} + plural / uncountable (general meaning)",
   "examples": [
    {
     "en": "{t|—} Cars need fuel.",
     "ar": "السيارات تحتاج إلى وقود."
    },
    {
     "en": "{t|—} Food gives us nutrients.",
     "ar": "الطعام يعطينا عناصر غذائية."
    }
   ]
  }
 ],
 "9-1#1": [
  {
   "k": "intro",
   "useEn": "{t|Defining relative clauses} give necessary information about a noun. Use {t|who / that} for people and {t|which / that} for things.",
   "useAr": "{t|جمل الوصل المحدِّدة} تعطي معلومة ضرورية عن الاسم: {t|who / that} للأشخاص، و{t|which / that} للأشياء.",
   "signals": [
    "who",
    "which",
    "that"
   ]
  },
  {
   "k": "pos",
   "label": "For people",
   "labelAr": "للأشخاص",
   "formula": "{s|person} + {t|who / that} + {v|verb…}",
   "examples": [
    {
     "en": "Carrie is a girl {t|who} {v|doesn't eat} breakfast.",
     "ar": "كاري فتاة لا تتناول الفطور."
    },
    {
     "en": "Tim Dinsdale was an engineer {t|who} {v|gave up} his career.",
     "ar": "كان تيم دينسديل مهندساً ترك مهنته."
    }
   ]
  },
  {
   "k": "pos",
   "label": "For things",
   "labelAr": "للأشياء",
   "formula": "{s|thing} + {t|which / that} + {v|verb…}",
   "examples": [
    {
     "en": "Junk food is food {t|which} {v|contains} lots of fat.",
     "ar": "الوجبات السريعة طعام يحتوي على دهون كثيرة."
    },
    {
     "en": "He filmed an object {t|that} {v|looked} real.",
     "ar": "صوّر جسماً بدا حقيقياً."
    }
   ]
  },
  {
   "k": "pos",
   "label": "When it is the object",
   "labelAr": "حين تكون مفعولاً به",
   "formula": "{s|thing} + {t|which / that} + {s|S} + {v|V}",
   "examples": [
    {
     "en": "The oldest report {t|which} {s|we} {v|have} goes back 1,500 years.",
     "ar": "أقدم تقرير لدينا يعود إلى 1500 سنة."
    }
   ],
   "tip": "حين تكون الكلمة مفعولاً به يمكن حذفها."
  },
  {
   "k": "note",
   "label": "Remember",
   "labelAr": "تذكّر",
   "body": "لا فاصلة قبل جملة الوصل المحدِّدة.\n{t|that} تصلح للأشخاص والأشياء.",
   "examples": []
  }
 ],
 "10-1#0": [
  {
   "k": "intro",
   "useEn": "We use the {t|passive} when the action is more important than who does it: {t|be} + {t|past participle}.",
   "useAr": "نستخدم {t|المبني للمجهول} حين يهمّنا الحدث أكثر من فاعله: {t|be} + {t|التصريف الثالث}.",
   "signals": [
    "by + agent",
    "is / are",
    "was / were"
   ]
  },
  {
   "k": "pos",
   "label": "Present",
   "labelAr": "المضارع",
   "formula": "{s|Object} + {t|am / is / are} + {v|V3}",
   "examples": [
    {
     "en": "English {t|is} {v|spoken} all over the world.",
     "ar": "تُتحدَّث الإنجليزية في كلّ العالم."
    }
   ],
   "tip": "المفعول به يصير فاعلاً."
  },
  {
   "k": "pos",
   "label": "Present Continuous",
   "labelAr": "المضارع المستمر",
   "formula": "{s|Object} + {t|am / is / are being} + {v|V3}",
   "examples": [
    {
     "en": "Scientists are developing crops. → Crops {t|are being} {v|developed}.",
     "ar": "للحدث الجاري الآن"
    }
   ],
   "tip": "اضغط «حوّلها» لترى الجملة بالمبني للمجهول."
  },
  {
   "k": "pos",
   "label": "Past",
   "labelAr": "الماضي",
   "formula": "{s|Object} + {t|was / were} + {v|V3}",
   "examples": [
    {
     "en": "People set up the UN in 1945. → The UN {t|was} {v|set up} in 1945.",
     "ar": "الماضي: was / were + V3"
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Object} + {t|isn't / aren't / wasn't / weren't} + {v|V3}",
   "examples": [
    {
     "en": "The window {t|wasn't} {v|broken}.",
     "ar": "لم تُكسَر النافذة."
    }
   ]
  },
  {
   "k": "q",
   "label": "Question",
   "labelAr": "السؤال",
   "formula": "{t|Is / Are / Was / Were} + {s|Object} + {v|V3}?",
   "examples": [
    {
     "en": "{t|Was} {s|the letter} {v|written} by Ahmad?",
     "ar": "هل كُتبت الرسالة بيد أحمد؟"
    }
   ]
  }
 ],
 "10-1#1": [
  {
   "k": "intro",
   "useEn": "The passive also works in the {t|perfect} (have been + V3) and the {t|future} (will be + V3 / going to be + V3).",
   "useAr": "يأتي المبني للمجهول أيضاً في {t|التام} (have been + V3) وفي {t|المستقبل} (will be + V3 أو going to be + V3).",
   "signals": [
    "has been",
    "have been",
    "will be",
    "going to be"
   ]
  },
  {
   "k": "pos",
   "label": "Perfect",
   "labelAr": "التام",
   "formula": "{s|Object} + {t|have / has been} + {v|V3}",
   "examples": [
    {
     "en": "They have avoided another world war. → Another world war {t|has been} {v|avoided}.",
     "ar": "المضارع التام للمجهول"
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Object} + {t|haven't / hasn't been} + {v|V3}",
   "examples": [
    {
     "en": "The problem {t|hasn't been} {v|solved}.",
     "ar": "لم تُحَلّ المشكلة بعد."
    }
   ]
  },
  {
   "k": "pos",
   "label": "Future",
   "labelAr": "المستقبل",
   "formula": "{s|Object} + {t|will be} + {v|V3}      ·      {s|Object} + {t|is / are going to be} + {v|V3}",
   "examples": [
    {
     "en": "It will force millions to leave. → Millions {t|will be} {v|forced} to leave.",
     "ar": "المستقبل بـ will be"
    },
    {
     "en": "What {t|is going to be} {v|done} about it?",
     "ar": "المستقبل بـ going to be"
    }
   ]
  },
  {
   "k": "neg",
   "label": "Negative",
   "labelAr": "النفي",
   "formula": "{s|Object} + {t|won't be} + {v|V3}",
   "examples": [
    {
     "en": "The old bridge {t|won't be} {v|repaired}.",
     "ar": "لن يُصلَّح الجسر القديم."
    }
   ]
  }
 ]
};
