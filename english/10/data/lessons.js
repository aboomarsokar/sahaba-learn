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
  units: {},

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
          { en: 'She **does** her homework after lunch.', ar: 'تحلّ واجبها بعد الغداء. (do ← does)' },
          { en: 'Sami **doesn\'t** go to school on Friday.', ar: 'سامي لا يذهب إلى المدرسة يوم الجمعة.' }
        ],
        questions: [
          { q: 'Sami ___ to school every day.', o: ['walk', 'walks', 'walking'], a: 1, why: 'Sami = he ← نضيف s: walks' },
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
          { q: 'I ___ eat fast food. (0%)', o: ['always', 'never', 'usually'], a: 1, why: '0% = never' }
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
