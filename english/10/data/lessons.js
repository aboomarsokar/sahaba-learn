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
  units: {
    1: { title: 'التواصل مع الآخرين', titleEn: 'Making contact' },
    2: { title: 'من هنا إلى هناك', titleEn: 'From here to there' },
    3: { title: 'أنشطة وقت الفراغ', titleEn: 'Free-time activities' },
    4: { title: 'حالة طوارئ!', titleEn: 'Emergency!' },
    5: { title: 'طقسٌ خطِر', titleEn: 'Dangerous weather' },
    6: { title: 'العمل من أجل عالمٍ أفضل', titleEn: 'Working for a better world' },

    /* ================= الوحدة 7 ================= */
    7: { title: 'أخبار سارّة من الأطباء', titleEn: 'Good news from the doctors', lessons: [{
      id: '7-1', title: 'Good news from the doctors', titleAr: 'أخبار سارّة من الأطباء',
      vocab: [
        { en: 'basic', ar: 'أساسي', em: '🩺', ex: 'Everyone needs basic health care.', exAr: 'يحتاج الجميع إلى رعاية صحية أساسية.' },
        { en: 'bend', ar: 'يَنثني / يَثني', em: '🦾', ex: 'The new arm can bend like a real arm.', exAr: 'الذراع الجديدة تنثني مثل الذراع الحقيقية.' },
        { en: 'bionic', ar: 'بيونيّ (عضو صناعي ذكي)', em: '🤖', ex: 'He uses a bionic hand to hold a cup.', exAr: 'يستخدم يداً بيونيّة ليمسك الكوب.' },
        { en: 'brain', ar: 'الدماغ', em: '🧠', ex: 'The brain sends messages to the body.', exAr: 'يرسل الدماغ رسائل إلى الجسم.' },
        { en: 'care', ar: 'رعاية', em: '🤲', ex: 'My grandmother needs special care.', exAr: 'جدّتي تحتاج إلى رعاية خاصّة.' },
        { en: 'college', ar: 'كلّية', em: '🏛️', ex: 'My cousin studies at a medical college.', exAr: 'ابن عمّي يدرس في كلّية الطبّ.' },
        { en: 'connect', ar: 'يَربط / يتّصل', em: '🔌', ex: 'The bionic arm connects with the brain.', exAr: 'الذراع البيونيّة تتّصل بالدماغ.' },
        { en: 'high-tech', ar: 'عالي التقنية', em: '💻', ex: 'Hospitals use high-tech machines.', exAr: 'تستخدم المستشفيات أجهزة عالية التقنية.' },
        { en: 'point out', ar: 'يُشير إلى / يُنبّه إلى', em: '👉', ex: 'The doctor pointed out that health care is better now.', exAr: 'أشار الطبيب إلى أنّ الرعاية الصحية صارت أفضل.' },
        { en: 'ramp', ar: 'منحدر', em: '♿', ex: 'Our school built a ramp for wheelchairs.', exAr: 'بنت مدرستنا منحدراً للكراسي المتحرّكة.' },
        { en: 'wheelchair', ar: 'كرسي متحرّك', em: '🦽', ex: 'He moves around in a wheelchair.', exAr: 'يتنقّل على كرسيٍّ متحرّك.' },
        { en: 'whereas', ar: 'بينما (للمقارنة)', em: '⚖️', ex: 'My brother likes science, whereas I like art.', exAr: 'أخي يحبّ العلوم، بينما أحبّ أنا الفنّ.' },
        { en: 'development', ar: 'تطوّر (develop: يُطوّر)', em: '📈', ex: 'There is fast development in medicine.', exAr: 'هناك تطوّر سريع في الطبّ.' },
        { en: 'discovery', ar: 'اكتشاف (discover: يكتشف)', em: '🔬', ex: 'It was an important discovery.', exAr: 'كان اكتشافاً مهمّاً.' },
        { en: 'invention', ar: 'اختراع (invent: يخترع)', em: '💡', ex: 'The wheelchair was a great invention.', exAr: 'كان الكرسي المتحرّك اختراعاً عظيماً.' }
      ],
      reading: {
        title: 'The Wonders of Modern Medicine',
        paras: [
          { en: 'After Jenan Rashidi wrote about Waleed\'s operation, many readers asked her to write more about medicine. So she went to London to meet Dr Mark Way at a medical college.',
            ar: 'بعد أن كتبت جنان رشيدي عن عملية وليد، طلب منها كثير من القرّاء أن تكتب أكثر عن الطبّ. فذهبت إلى لندن لتقابل الدكتور مارك واي في كلّية طبّية.' },
          { en: 'Dr Way said that medicine was developing very fast. He explained that there were new operations, new medicines and new inventions every year. He also pointed out that basic health care was better around the world, so people were living longer and healthier lives.',
            ar: 'قال الدكتور واي إنّ الطبّ يتطوّر بسرعة كبيرة، وأوضح أنّ هناك عمليات وأدوية واختراعات جديدة كلّ عام. وأشار أيضاً إلى أنّ الرعاية الصحية الأساسية صارت أفضل في العالم، فصار الناس يعيشون حياةً أطول وأكثر صحّة.' },
          { en: 'Then they talked about disabled people. Dr Way said that in the past, they had to accept their problems, whereas now some of them could hear or see again. He added that many new buildings had ramps for people in wheelchairs.',
            ar: 'ثم تحدّثا عن ذوي الإعاقة. قال الدكتور واي إنّهم في الماضي كانوا مضطرّين لتقبّل مشكلاتهم، بينما صار بعضهم اليوم يسمع أو يرى من جديد. وأضاف أنّ كثيراً من المباني الجديدة فيها منحدرات للكراسي المتحرّكة.' },
          { en: 'Finally, Dr Way talked about bionic body parts. He said that if someone lost an arm, doctors could give them a bionic arm. It could bend and turn like a real arm because it connected with the brain. "In the past, disabled people couldn\'t live normal lives," he said, "whereas today more and more of them can."',
            ar: 'وأخيراً تحدّث الدكتور واي عن الأعضاء البيونيّة. قال إنّه إذا فقد شخصٌ ذراعه، يستطيع الأطباء أن يعطوه ذراعاً بيونيّة تنثني وتدور مثل الذراع الحقيقية لأنها تتّصل بالدماغ. وقال: «في الماضي لم يكن ذوو الإعاقة يعيشون حياة طبيعية، بينما اليوم يستطيع ذلك عددٌ متزايد منهم».' }
        ],
        questions: [
          { q: 'Why did Jenan meet Dr Way?', o: ['Because she was ill', 'Because readers wanted to read more about medicine', 'Because she wanted to study at the college'], a: 1, why: 'Many readers asked her to write more about medicine.' },
          { q: 'According to Dr Way, why are people living longer?', o: ['Because basic health care is better', 'Because they work less', 'Because they live in big cities'], a: 0, why: 'Basic health care was better around the world.' },
          { q: 'What do many new buildings have for people in wheelchairs?', o: ['Big windows', 'Ramps', 'Special doors'], a: 1 },
          { tf: true, q: 'A bionic arm can move because it connects with the brain.', why: 'It could bend and turn like a real arm because it connected with the brain.' },
          { q: 'In the passage, "whereas" is used to…', o: ['compare two ideas', 'give a reason', 'show time'], a: 0, why: 'whereas = بينما، للمقارنة بين فكرتين.' }
        ]
      },
      rules: [
        {
          title: 'Reported Speech: Statements', titleAr: 'الكلام المنقول: الجمل الخبرية',
          explain: 'عندما ننقل كلام شخصٍ بفعل نقلٍ في الماضي مثل <b>said / told / explained</b>، يرجع زمن الفعل <b>خطوة إلى الماضي</b>، وتتغيّر الضمائر حسب المعنى. نستخدم <b>said</b> بلا مفعول، و<b>told + شخص</b>. كلمة <b>that</b> يجوز حذفها.',
          form: 'is / are → was / were   ·   is / are + -ing → was / were + -ing   ·   V1 → V2   ·   V2 → had + V3   ·   have / has + V3 → had + V3   ·   will → would   ·   can → could',
          examples: [
            { en: '"Science **is** helping people," he said. → He said that science **was** helping people.', ar: 'is تصبح was' },
            { en: '"It **looks** like a real arm," he said. → He said that it **looked** like a real arm.', ar: 'المضارع البسيط يصبح ماضياً بسيطاً' },
            { en: '"They **accepted** their problems," he said. → He said that they **had accepted** their problems.', ar: 'الماضي البسيط يصبح ماضياً تامّاً' },
            { en: '"It **will** continue," he said. → He said that it **would** continue.', ar: 'will تصبح would' },
            { en: '"It **can** understand," he said. → He said that it **could** understand.', ar: 'can تصبح could' }
          ],
          questions: [
            { q: '"I write for a magazine," Jenan said. → Jenan said that she ___ for a magazine.', o: ['writes', 'wrote', 'has written'], a: 1, why: 'write تصبح wrote (المضارع يصبح ماضياً).' },
            { q: '"Doctors will find new medicines," he said. → He said that doctors ___ find new medicines.', o: ['will', 'would', 'can'], a: 1, why: 'will تصبح would' },
            { q: '"We have started a new project," they said. → They said that they ___ a new project.', o: ['have started', 'had started', 'started'], a: 1, why: 'have + V3 تصبح had + V3' },
            { q: '"I can walk again," Waleed said. → Waleed said that he ___ walk again.', o: ['can', 'could', 'would'], a: 1, why: 'can تصبح could' },
            { q: '"She is working at the hospital," he said. → He said that she ___ at the hospital.', o: ['is working', 'was working', 'works'], a: 1, why: 'is + -ing تصبح was + -ing' },
            { type: 'type', q: '"I can swim," Lina said. → Lina said that she ___ swim.', a: ['could'], why: 'can تصبح could' },
            { type: 'order', q: 'رتّب الكلمات: «قال إنّ الطبّ كان يتطوّر بسرعة»', words: ['He', 'said', 'that', 'medicine', 'was', 'developing', 'fast.'] }
          ]
        },
        {
          title: 'Reported Questions and Requests', titleAr: 'الأسئلة والطلبات المنقولة',
          explain: 'في <b>السؤال المنقول</b> تصير الجملة خبرية: <b>الفاعل ثم الفعل</b>، وتُحذف <b>do / does / did</b> وعلامة الاستفهام. في أسئلة نعم/لا نضيف <b>if</b> أو <b>whether</b>، وفي أسئلة <b>Wh</b> نُبقي أداة السؤال. وفي <b>الطلب المنقول</b> يختفي Can you / Could you، ونستخدم <b>ask / tell / want + شخص + to + الفعل</b>.',
          form: 'Yes/No: ask + if / whether + S + V   ·   Wh-: ask + wh-word + S + V   ·   Request: ask / tell + someone + to + V',
          examples: [
            { en: '"**Are you** free?" Samar asks me. → Samar asks **if I am** free.', ar: 'سؤال نعم/لا: if + فاعل + فعل' },
            { en: '"How **did it go**?" I ask. → I ask how **it went**.', ar: 'تُحذف did ويصير الفعل ماضياً' },
            { en: '"**Could you** look after Deema?" she asks me. → She asks me **to look** after Deema.', ar: 'الطلب: ask + شخص + to + فعل' },
            { en: '"When **does** the hospital **want** you?" → I wonder when the hospital **wants** them.', ar: 'تُحذف does وتعود s إلى الفعل' }
          ],
          questions: [
            { q: '"Are you ready?" Jenan asks. → Jenan asks ___ we are ready.', o: ['that', 'if', 'what'], a: 1, why: 'في سؤال نعم/لا نستخدم if أو whether.' },
            { q: '"Could you help me?" she asks him. → She asks him ___ her.', o: ['help', 'to help', 'helping'], a: 1, why: 'ask + شخص + to + فعل' },
            { q: '"Where do you live?" he asks. → He asks where ___.', o: ['do I live', 'I live', 'I do live'], a: 1, why: 'نحذف do وتصير الجملة خبرية.' },
            { q: '"What time is it?" she asked.', o: ['She asked what time was it.', 'She asked what time it was.', 'She asked what time it was?'], a: 1, why: 'فاعل ثم فعل، بلا علامة استفهام.' },
            { q: '"Please come immediately," the hospital tells Samar. → The hospital tells Samar ___ immediately.', o: ['come', 'to come', 'coming'], a: 1 },
            { type: 'type', q: '"Could you wait for me?" he asked me. → He asked me ___ wait for him.', a: ['to'], why: 'ask + شخص + to + فعل' },
            { type: 'order', q: 'رتّب الكلمات: «سألتني إن كنتُ متفرّغاً»', words: ['She', 'asked', 'me', 'if', 'I', 'was', 'free.'] }
          ]
        }
      ],
      mastery: [
        { lv: 'easy', q: '"wheelchair" means:', o: ['كرسي متحرّك', 'سرير المستشفى', 'منحدر'], a: 0 },
        { lv: 'easy', q: 'The noun of "discover" is:', o: ['discovery', 'discovered', 'discovering'], a: 0 },
        { lv: 'easy', tf: true, q: 'A ramp helps people in wheelchairs enter buildings.' },
        { lv: 'medium', q: 'My sister is good at maths, ___ I am good at languages.', o: ['whereas', 'because', 'so'], a: 0 },
        { lv: 'medium', q: '"I am tired," Ali said. → Ali said that he ___ tired.', o: ['is', 'was', 'were'], a: 1 },
        { lv: 'medium', q: 'She asked me ___ I could help her.', o: ['whether', 'that', 'what'], a: 0 },
        { lv: 'hard', q: '"We will visit the college," they said.', o: ['They said they will visit the college.', 'They said they would visit the college.', 'They said they would visited the college.'], a: 1 },
        { lv: 'hard', q: '"What did the doctor say?" Mum asked.', o: ['Mum asked what the doctor had said.', 'Mum asked what did the doctor say.', 'Mum asked what had the doctor said.'], a: 0, why: 'did تصبح had + V3، والجملة خبرية.' },
        { lv: 'hard', q: '"Can you open the window?" the teacher asked Sami.', o: ['The teacher asked Sami to open the window.', 'The teacher asked Sami can he open the window.', 'The teacher asked Sami opening the window.'], a: 0 },
        { lv: 'medium', type: 'match', q: 'صِل الكلام المباشر بزمنه في الكلام المنقول', pairs: [['is', 'was'], ['will', 'would'], ['can', 'could'], ['have started', 'had started']] },
        { lv: 'hard', type: 'type', q: '"We are visiting the college," they said. → They said that they ___ visiting the college.', a: ['were'] },
        { lv: 'hard', type: 'order', q: 'رتّب الكلمات لتكوّن سؤالاً منقولاً صحيحاً', words: ['Mum', 'asked', 'where', 'I', 'had', 'been.'] },
        { lv: 'hard', q: 'Why can a bionic arm move like a real arm?', o: ['It gets messages from the brain.', 'It has a big battery only.', 'The doctor moves it.'], a: 0 }
      ]
    }] },

    8: { title: 'أيّ طريقٍ في السادسة عشرة؟', titleEn: 'Which way at 16?' },
    9: { title: 'غذاء صحي، جسم صحي', titleEn: 'Healthy eating – healthy body' },
    10: { title: 'الحديث عن عالم الغد', titleEn: "Talking about tomorrow's world" }
  },

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
          { en: 'She **does** her homework after lunch.', ar: 'تحلّ واجبها بعد الغداء. (do تصبح does)' },
          { en: 'Sami **doesn\'t** go to school on Friday.', ar: 'سامي لا يذهب إلى المدرسة يوم الجمعة.' }
        ],
        questions: [
          { q: 'Sami ___ to school every day.', o: ['walk', 'walks', 'walking'], a: 1, why: 'Sami مثل he، فنضيف s: walks' },
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
          { q: 'I ___ eat fast food. (0%)', o: ['always', 'never', 'usually'], a: 1, why: '0% تعني never' }
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
