import json
exec(open("/home/user/sahaba-learn/tools/content_e9/build_u7.py").read().split("vocab=[")[0])
vocab=[
V("chance","فرصة","🍀","Hadeel wanted a chance to meet Sameera.","أرادت هديل فرصة للقاء سميرة."),
V("get to know","يتعرّف إلى","🤝","Aunt Nada wanted the girls to get to know each other.","أرادت العمّة نادية أن تتعرّف الفتاتان إلى بعضهما."),
V("knock","يطرق (الباب)","🚪","She knocked and the door opened.","طرقت الباب فانفتح."),
V("tray","صينيّة","🍽","I'll bring everything on a tray.","سأحضر كلّ شيء على صينيّة."),
V("expect","يتوقّع","🤔","I don't expect you get much free time!","لا أتوقّع أن يكون لديك وقت فراغ كثير!"),
V("midday","منتصف النهار / الظهر","🕛","At midday I have to fetch the children from camp.","عند الظهيرة عليّ أن أجلب الأطفال من المخيّم."),
V("fetch","يجلب / يذهب ويحضر","🏃","I have to fetch the children from their summer camp.","عليّ أن أجلب الأطفال من مخيّمهم الصيفي."),
V("pity","شيء مؤسف","😔","It's a pity because I'm enjoying our chat.","هذا مؤسف لأنّني أستمتع بحديثنا."),
V("suggest","يقترح","💡","I suggest we go together.","أقترح أن نذهب معاً."),
V("belong","ينتمي / يكون عضواً","🏷","I belong to an international organization.","أنتمي إلى منظّمة دولية."),
V("organization","منظّمة","🏢","It's a big organization that helps people in trouble.","إنّها منظّمة كبيرة تساعد الناس في المحن."),
V("volunteer","متطوّع / يتطوّع","🙋","Older students all do voluntary work.","طلّاب الصفوف الكبيرة كلّهم يعملون عملاً تطوّعياً."),
V("disabled","من ذوي الإعاقة","♿","I take books to the homes of disabled people.","آخذ الكتب إلى بيوت ذوي الإعاقة."),
V("disaster","كارثة","🌪","There's always a big natural disaster somewhere in the world.","هناك دائماً كارثة طبيعية كبيرة في مكان ما من العالم."),
V("earthquake","زلزال","🌍","Thousands of buildings collapsed in that big earthquake.","انهار آلاف المباني في ذلك الزلزال الكبير."),
V("flood","فيضان","🌊","There was a flood in China after weeks of heavy rain.","حدث فيضان في الصين بعد أسابيع من المطر الغزير."),
]
paras=[
("When Aunt Nada and Hadeel finished making lunch for the Masri family, Hadeel offered to take the food to them. She wanted a chance to meet Sameera. Hadeel took the tray and knocked, and the door opened. Hadeel: Hi, I'm Hadeel. Sameera: Oh, hello, you're staying opposite, aren't you? Hadeel: Yes, and your name is Sameera, isn't it? Sameera: That's right. Please come in. Hadeel: Thank you, and look, I've brought you lunch. Aunt Nada made it for you – with a little help from me.",
 "حين انتهت العمّة نادية وهديل من إعداد الغداء لعائلة المصري عرضت هديل أن تأخذ الطعام إليهم، فقد أرادت فرصة للقاء سميرة. حملت هديل الصينيّة وطرقت الباب فانفتح. هديل: مرحباً، أنا هديل. سميرة: آه، أهلاً، أنتِ تقيمين في البيت المقابل، أليس كذلك؟ هديل: نعم، واسمك سميرة، أليس كذلك؟ سميرة: صحيح، تفضّلي بالدخول. هديل: شكراً، وانظري، لقد أحضرتُ لكِ الغداء. صنعته العمّة نادية لكم، مع قليل من المساعدة منّي."),
("Sameera: That's really kind! Please come through and have tea. I can make you some Arab-style tea – or I can make you some lemon tea. Hadeel: Oh, thank you! I'd love some Arab-style tea, please. Sameera: Excuse me, I'm going to take Mother some food in bed. Then I'll be back. A little later. Hadeel: I hear you've got four little brothers and sisters, and you're looking after all of them, too. Sameera: Well, yes, at the moment. Hadeel: I don't expect you get much free time! Sameera: No, not much! And that reminds me, it's midday and I have to fetch the children from their summer camp. It's a pity because I'm enjoying our chat. Hadeel: Well, we don't have to stop. I suggest we go together, and then we can carry on chatting, can't we? Sameera: Yes, we certainly can.",
 "سميرة: هذا لطف كبير منكِ! تفضّلي بالدخول واشربي الشاي، يمكنني أن أعدّ لكِ شاياً عربياً أو شاي ليمون. هديل: شكراً! أحبّ الشاي العربي، من فضلك. سميرة: عن إذنك، سآخذ بعض الطعام إلى أمّي في فراشها ثم أعود. بعد قليل. هديل: سمعتُ أنّ لديكِ أربعة إخوة وأخوات صغاراً وأنّكِ تعتنين بهم جميعاً أيضاً. سميرة: نعم، في الوقت الحالي. هديل: لا أتوقّع أن يكون لديكِ وقت فراغ كثير! سميرة: لا، ليس كثيراً! وهذا يذكّرني أنّها الظهيرة وعليّ أن أجلب الأطفال من مخيّمهم الصيفي، وهذا مؤسف لأنّني أستمتع بحديثنا. هديل: لا داعي أن نتوقّف، أقترح أن نذهب معاً ثم نواصل الحديث، أليس كذلك؟ سميرة: نعم، بالتأكيد."),
("Tom (Britain): At the end of the school week, we have a choice. We can do extra work in the library or sports or, like me, we can do voluntary work. We do projects which help the local community, and we recently finished one at a school for young children. It's a new playground which we helped to build. We set up the new play equipment, and the children love it. That feels good, and we had lots of fun, too.",
 "توم (بريطانيا): في نهاية الأسبوع الدراسي لدينا خيار، فيمكننا أن نقوم بعمل إضافي في المكتبة أو في الرياضة، أو مثلي نقوم بعمل تطوّعي. ننفّذ مشاريع تخدم المجتمع المحلّي، وقد أنهينا مؤخّراً مشروعاً في مدرسة للأطفال الصغار، هو ملعب جديد ساعدنا في بنائه. ركّبنا معدّات اللعب الجديدة والأطفال يحبّونها. هذا شعور جميل وقد استمتعنا كثيراً أيضاً."),
("Rosa (Brazil): On Saturday mornings, I volunteer at the local library. There are various jobs which you can do there. For example, you can take books to the homes of disabled people who can't get to the library. But my favourite is my little reading group. I read stories to young children that I meet every week. They love it, and I really enjoy that. They don't pay me, but I'm allowed to borrow books instead, and that's very nice.",
 "روزا (البرازيل): في صباح أيّام السبت أتطوّع في المكتبة المحلّية. هناك أعمال متنوّعة يمكن القيام بها، مثل أن تأخذ الكتب إلى بيوت ذوي الإعاقة الذين لا يستطيعون الوصول إلى المكتبة. لكنّ المفضّل لديّ هو مجموعة القراءة الصغيرة، أقرأ قصصاً لأطفال صغار ألتقيهم كلّ أسبوع. إنّهم يحبّون ذلك وأنا أستمتع حقّاً. لا يدفعون لي، لكن يُسمح لي باستعارة الكتب بدلاً من ذلك، وهذا جميل."),
("Hassan (Saudi Arabia): There's always a big natural disaster somewhere in the world. If it isn't an earthquake, it's a flood or a hurricane. I can't go and help, but there's something else that I can do. I belong to an international organization which sends help to people who are in danger. It collects money for things that disaster victims badly need – things like food and medicine. Then we volunteers put everything into boxes ready to send. It's good to give to people who have very little.",
 "حسّان (السعودية): هناك دائماً كارثة طبيعية كبيرة في مكان ما من العالم، فإن لم تكن زلزالاً فهي فيضان أو إعصار. لا أستطيع الذهاب للمساعدة لكن هناك شيئاً آخر يمكنني فعله. أنتمي إلى منظّمة دولية ترسل المساعدة إلى الناس المعرّضين للخطر. تجمع المال لأشياء يحتاجها ضحايا الكوارث بشدّة كالطعام والدواء، ثم نضع نحن المتطوّعين كلّ شيء في صناديق جاهزة للإرسال. من الجميل أن نعطي من يملكون القليل."),
]
rq=[
mc("Why did Hadeel offer to take the food to the Masri family?",["She wanted a chance to meet Sameera","She was hungry","Sameera asked her"],0),
mc("What kind of tea does Hadeel choose?",["Lemon tea","Arab-style tea","No tea"],1),
tf("Sameera has four little brothers and sisters.",True),
mc("What does Rosa do at the library?",["She reads stories to young children","She sells books","She builds playgrounds"],0),
mc("What does Hassan's organization send to disaster victims?",["Food and medicine","Cars","Books"],0),
]
rules=[]
rules.append({
"title":"Direct and indirect objects","titleAr":"المفعول المباشر وغير المباشر",
"explain":"بعض الأفعال تأخذ مفعولين مثل <b>bring, take, fetch, buy, get, give, make, send, write</b>. الأوّل <b>مباشر</b> (الشيء) والثاني <b>غير مباشر</b> (الشخص). إن جاء الشيء أوّلاً نضع <b>to</b> أو <b>for</b> قبل الشخص: <b>to</b> تدلّ على الاتجاه (took the tray <b>to</b> the family)، و<b>for</b> تدلّ على المساعدة (made lunch <b>for</b> them). وإن قدّمنا الشخص حذفنا to وfor (She took the family the tray).",
"form":"S + V + شيء + to / for + شخص    ·    S + V + شخص + شيء",
"examples":[
{"en":"Aunt Nada **made lunch for** the Masri family.","ar":"شيء + for + شخص"},
{"en":"She **made the Masri family lunch**.","ar":"شخص + شيء"},
{"en":"Hadeel **took the tray to** the Masri family.","ar":"شيء + to + شخص"},
{"en":"She **took the Masri family the tray**.","ar":"شخص + شيء"}],
"questions":[
mc("Rania bought some chocolates ___ her grandmother.",["to","for","at"],1,"buy + for"),
mc("Rania wrote a postcard ___ her grandmother.",["for","to","of"],1,"write + to"),
mc("She sent ___ a letter.",["to them","them","for them"],1,"الشخص أوّلاً بلا to"),
ty("I'm going to give the CD ___ her. (to / for)",["to"],"give + to"),
ty("Aunt Nada made lunch ___ the neighbours. (to / for)",["for"],"make + for"),
od("رتّب الكلمات: «أحضرتُ لك الغداء»",["I","have","brought","you","lunch."]),
]})
rules.append({
"title":"Defining relative clauses","titleAr":"جمل الصلة المحدِّدة",
"explain":"تعطينا <b>جملة الصلة</b> معلومة <b>مهمّة</b> عن الاسم الذي قبلها. نستعمل <b>who</b> أو <b>that</b> للأشخاص، و<b>which</b> أو <b>that</b> للأشياء. وقد يكون الضمير <b>فاعلاً</b> (Tom is the volunteer <b>who</b> helped build a playground) أو <b>مفعولاً</b> (a project <b>which</b> his group recently finished). ويمكن حذف ضمير الوصل إن كان مفعولاً.",
"form":"person + who / that + ...    ·    thing + which / that + ...",
"examples":[
{"en":"Tom is the volunteer **who** helped to build a playground.","ar":"للأشخاص (فاعل)"},
{"en":"We do projects **which** help the local community.","ar":"للأشياء (فاعل)"},
{"en":"I read stories to children **that** I meet every week.","ar":"للأشخاص (مفعول)"},
{"en":"There is something else **which** I can do.","ar":"للأشياء (مفعول)"}],
"questions":[
mc("Rosa is the person ___ reads to a group of children.",["which","who","whose"],1,"who للأشخاص"),
mc("He does projects ___ help the local community.",["who","which","where"],1,"which للأشياء"),
mc("Tom talks about a project ___ his group recently finished.",["who","which","whom"],1,"which للأشياء"),
ty("Hadeel is the girl ___ took the tray to the Masri family. (who / which)",["who","that"],"للأشخاص: who أو that"),
tf("We use «who» for things, for example: a library who has many books.",False,"للأشياء نستعمل which أو that."),
od("رتّب الكلمات: «هي تنتمي إلى منظّمة ترسل المساعدة»",["She","belongs","to","an","organization","which","sends","help."]),
]})
rules.append({
"title":"Word formation · parts of speech","titleAr":"تكوين الكلمات وأنواعها",
"explain":"من كلمة واحدة نكوّن كلمات أخرى بإضافة نهايات، فتتغيّر <b>نوعها</b> (فعل v، اسم n، صفة adj): <b>volunteer</b> (متطوّع / يتطوّع) ← <b>voluntary</b> (تطوّعي)، <b>choose</b> ← <b>choice</b>، <b>help</b> ← <b>helpful</b>، <b>danger</b> ← <b>dangerous</b>، <b>collect</b> ← <b>collection</b>، <b>feel</b> ← <b>feeling</b>، <b>medicine</b> ← <b>medical</b>، <b>nature</b> ← <b>natural</b>.",
"form":"verb → noun: -ion / -ing    ·    noun → adjective: -ous / -ful / -al",
"examples":[
{"en":"Older students do **voluntary** work.","ar":"صفة"},
{"en":"They **volunteer** to work for the community.","ar":"فعل"},
{"en":"Is it **dangerous** to walk in the woods at night?","ar":"صفة"},
{"en":"The biggest **danger** is that you could fall.","ar":"اسم"}],
"questions":[
mc("The flood victims badly need ___ help.",["medicine","medical","medically"],1,"صفة قبل الاسم help"),
mc("You've got a huge ___ of old clocks!",["collect","collection","collecting"],1,"اسم بعد a huge"),
mc("It's ___ to walk in the woods at night.",["danger","dangerous","dangerously"],1,"صفة بعد is"),
ty("I get a good ___ when I help someone. (feel)",["feeling"],"اسم من الفعل feel"),
ty("Please ___ me carry these bags. (helpful / help)",["help"],"فعل بعد me"),
tf("«Voluntary» is a verb.",False,"voluntary صفة، والفعل volunteer."),
]})
cards={}
cards["8-1#0"]=[
{"k":"intro","useEn":"Some verbs take {t|two objects}: a direct object (a thing) and an indirect object (a person).","useAr":"بعض الأفعال تأخذ {t|مفعولين}: مباشراً (شيء) وغير مباشر (شخص).","signals":["give","bring","make","send","buy","take"]},
{"k":"pos","label":"Thing first","labelAr":"الشيء أوّلاً","formula":"{s|S} + {v|verb} + {s|thing} + {t|to / for} + {s|person}","examples":[
{"en":"Hadeel {v|took} the tray {t|to} the Masri family.","ar":"أخذت هديل الصينيّة إلى عائلة المصري."},
{"en":"Aunt Nada {v|made} lunch {t|for} the Masri family.","ar":"أعدّت العمّة نادية الغداء لعائلة المصري."}],"tip":"to للاتجاه، for للمساعدة."},
{"k":"pos","label":"Person first","labelAr":"الشخص أوّلاً","formula":"{s|S} + {v|verb} + {s|person} + {s|thing}","examples":[
{"en":"She {v|took} the Masri family the tray.","ar":"أخذت لعائلة المصري الصينيّة."},
{"en":"She {v|made} the Masri family lunch.","ar":"أعدّت لعائلة المصري الغداء."}],"tip":"نحذف to وfor حين نقدّم الشخص."},
{"k":"neg","label":"Negative","labelAr":"النفي","formula":"{s|S} + {n|didn't} + {v|V1} + {s|person} + {s|thing}","examples":[
{"en":"She {n|didn't} {v|write} her grandmother a letter.","ar":"لم تكتب لجدّتها رسالة."}]},
{"k":"q","label":"Question","labelAr":"السؤال","formula":"{t|Did} + {s|S} + {v|V1} + {s|thing} + {t|to} + {s|person}?","examples":[
{"en":"{t|Did} Rania {v|write} a postcard {t|to} her parents?","ar":"هل كتبت رانيا بطاقة بريدية لوالديها؟"}]},
]
cards["8-1#1"]=[
{"k":"intro","useEn":"We use a {t|defining relative clause} to give important information about a person or a thing. We use {t|who / that} for people and {t|which / that} for things.","useAr":"نستعمل {t|جملة الصلة المحدِّدة} لنعطي معلومة مهمّة عن شخص أو شيء، ونستعمل {t|who / that} للأشخاص و{t|which / that} للأشياء.","signals":["who","which","that"]},
{"k":"pos","label":"People · who / that","labelAr":"الأشخاص","formula":"{s|person} + {t|who / that} + {v|verb}","examples":[
{"en":"Tom is the volunteer {t|who} {v|helped} to build a playground.","ar":"توم هو المتطوّع الذي ساعد في بناء ملعب."},
{"en":"Rosa is the person {t|who} {v|reads} to a group of children.","ar":"روزا هي التي تقرأ لمجموعة من الأطفال."}]},
{"k":"pos","label":"Things · which / that","labelAr":"الأشياء","formula":"{s|thing} + {t|which / that} + {v|verb}","examples":[
{"en":"We do projects {t|which} {v|help} the local community.","ar":"ننفّذ مشاريع تخدم المجتمع المحلّي."},
{"en":"Tom talks about a project {t|which} his group {v|finished}.","ar":"يتحدّث توم عن مشروع أنهته مجموعته."}],"tip":"الضمير فاعل أو مفعول."},
{"k":"note","label":"Joining sentences","labelAr":"ربط الجمل","body":"Tom is the volunteer. {t|He} helped to build a playground.\n→ Tom is the volunteer {t|who} helped to build a playground.","examples":[]},
]
cards["8-1#2"]=[
{"k":"intro","useEn":"We can make new words from one word by changing the {t|ending}. The part of speech changes: verb, noun or adjective.","useAr":"نكوّن كلمات جديدة من كلمة واحدة بتغيير {t|النهاية}، فيتغيّر نوعها: فعل أو اسم أو صفة.","signals":["-ion","-ing","-ous","-ful","-al","-ary"]},
{"k":"pos","label":"Verb → noun","labelAr":"فعل ← اسم","formula":"{v|collect} → {t|collection}    ·    {v|feel} → {t|feeling}","examples":[
{"en":"You've got a huge {t|collection} of old clocks.","ar":"لديك مجموعة ضخمة من الساعات القديمة."},
{"en":"I get a really good {t|feeling} when I help someone.","ar":"أشعر شعوراً جيّداً حين أساعد أحداً."}]},
{"k":"pos","label":"Noun → adjective","labelAr":"اسم ← صفة","formula":"{v|danger} → {t|dangerous}    ·    {v|nature} → {t|natural}","examples":[
{"en":"Is it {t|dangerous} to walk in the woods at night?","ar":"هل المشي في الغابة ليلاً خطر؟"},
{"en":"There's always a big {t|natural} disaster somewhere.","ar":"هناك دائماً كارثة طبيعية كبيرة في مكان ما."}]},
{"k":"pos","label":"volunteer · voluntary","labelAr":"متطوّع · تطوّعي","formula":"{v|volunteer} (v / n) → {t|voluntary} (adj)","examples":[
{"en":"Tony does {t|voluntary} work at a school.","ar":"يقوم توني بعمل تطوّعي في مدرسة."}]},
]
mastery=[
mc('"suggest" means:',["يقترح","يطرق","يجلب"],0,lv="easy"),
mc('"flood" means:',["زلزال","فيضان","صينيّة"],1,lv="easy"),
tf("Hadeel and Sameera go together to fetch the children.",True,lv="easy"),
{"type":"match","q":"صِل كلّ كلمة بمعناها","pairs":[["tray","صينيّة"],["pity","شيء مؤسف"],["disaster","كارثة"],["disabled","من ذوي الإعاقة"]],"lv":"medium"},
mc("Aunt Nada made lunch ___ the Masri family.",["for","to","at"],0,lv="medium"),
mc("Rosa is the person ___ reads to young children.",["who","which","whose"],0,lv="medium"),
ty("Tom is the volunteer ___ helped to build a playground. (who / which)",["who","that"],lv="hard"),
mc("Choose the correct sentence.",["She sent them a letter.","She sent to them a letter.","She sent for them a letter."],0,lv="hard"),
od("رتّب الكلمات لتكوّن جملة صحيحة",["We","do","projects","which","help","the","local","community."],lv="hard"),
mc("What does Hassan's organization do?",["It sends help to people in danger","It builds playgrounds","It runs a library"],0,lv="hard"),
]
ws={"readingFrom":8,"sections":[
{"k":"vocab","questions":[
mc("We've ___ three times, but nobody is at home.",["knocked","belonged","fetched"],0),
mc("Thousands of buildings collapsed in the big ___ last year.",["earthquake","tray","midday"],0),
mc("He does ___ work at a school for children with special needs.",["voluntary","dangerous","natural"],0),
mc("I ___ to an international organization.",["belong","suggest","expect"],0),
ty("The noun from 'collect' is ___.",["collection"]),
]},
{"k":"grammar","questions":[
mc("I've brought a gift ___ you.",["for","to","at"],0),
mc("She gave ___ a present.",["me","to me","for me"],0),
mc("The girl ___ lives opposite is called Sameera.",["who","which","what"],0),
ty("It's a project ___ helps the community. (which / who)",["which","that"]),
ty("Rania wrote a postcard ___ her sister. (to / for)",["to"]),
mc("Is it ___ to walk in the woods at night?",["dangerous","danger","dangerously"],0),
]},
{"k":"reading","questions":[
mc("Why did Aunt Nada say yes happily?",["She wanted the girls to get to know each other","She was tired","She didn't like cooking"],0),
tf("Sameera is happy to stop talking to Hadeel.",False,"She says it's a pity because she is enjoying the chat."),
mc("What does Tom's group do at the end of the school week?",["Voluntary projects for the community","Extra sports only","Nothing"],0),
mc("What does Rosa borrow instead of being paid?",["Books","Money","CDs"],0),
]},
]}
summary={"title":"أيادٍ تساعد: كسب الأصدقاء","titleEn":"Helping hands: making friends",
"intro":"يتعلّم الطالب المفعول المباشر وغير المباشر، وجمل الصلة المحدِّدة (who / which / that)، وتكوين الكلمات، ومفردات التطوّع والكوارث، ويكتب فقرة يعبّر فيها عن رأيه.",
"qa":[
{"t":"vocab","q":"What do chance, suggest, expect and pity mean?","qAr":"ما معنى chance وsuggest وexpect وpity؟","a":"A **chance** is an opportunity, to **suggest** is to give an idea, to **expect** is to think that something will happen, and a **pity** is something that makes you sad.","aAr":"**chance** = **فرصة**، **suggest** = **يقترح**، **expect** = **يتوقّع**، **pity** = **شيء مؤسف**.","ex":[["I suggest we go together.","أقترح أن نذهب معاً."],["It's a pity because I'm enjoying our chat.","هذا مؤسف لأنّني أستمتع بحديثنا."]]},
{"t":"vocab","q":"What are fetch, knock, tray and midday?","qAr":"ما معنى fetch وknock وtray وmidday؟","a":"To **fetch** is to go and bring something, to **knock** is to hit a door to ask to come in, a **tray** carries food and drink, and **midday** is twelve o'clock.","aAr":"**fetch** = **يجلب**، **knock** = **يطرق**، **tray** = **صينيّة**، **midday** = **الظهيرة**.","ex":[["I have to fetch the children from their summer camp.","عليّ أن أجلب الأطفال من مخيّمهم الصيفي."]]},
{"t":"vocab","q":"Which words talk about disasters and helping?","qAr":"ما الكلمات المتعلّقة بالكوارث والمساعدة؟","a":"**disaster**, **earthquake**, **flood**, **victim**, **organization**, **volunteer**, **disabled** and **equipment**.","aAr":"**disaster** = كارثة، **earthquake** = زلزال، **flood** = فيضان، **victim** = ضحيّة، **organization** = منظّمة، **volunteer** = متطوّع، **disabled** = ذو إعاقة، **equipment** = معدّات.","ex":[["The flood victims badly need food and medicine.","ضحايا الفيضان في أشدّ الحاجة إلى الطعام والدواء."]]},
{"t":"grammar","q":"What are direct and indirect objects?","qAr":"ما المفعول المباشر وغير المباشر؟","a":"The **direct object** is usually a thing and the **indirect object** is usually a person. We can say ==verb + thing + to / for + person== or ==verb + person + thing==.","aAr":"**المفعول المباشر** غالباً شيء و**غير المباشر** غالباً شخص. نقول ==فعل + شيء + to / for + شخص== أو ==فعل + شخص + شيء==.","ex":[["Aunt Nada made lunch for the Masri family.","أعدّت العمّة نادية الغداء لعائلة المصري."],["She made the Masri family lunch.","أعدّت لعائلة المصري الغداء."]]},
{"t":"grammar","q":"When do we use to and when do we use for?","qAr":"متى نستعمل to ومتى نستعمل for؟","a":"**to** shows direction (give, send, take, write) and **for** shows the idea of helping (make, buy, get, choose).","aAr":"**to** للاتجاه (give وsend وtake وwrite) و**for** لفكرة المساعدة (make وbuy وget وchoose).","ex":[["Hadeel took the tray to the Masri family.","أخذت هديل الصينيّة إلى عائلة المصري."],["I bought some chocolates for my grandmother.","اشتريتُ بعض الشوكولاتة لجدّتي."]]},
{"t":"grammar","q":"What is a defining relative clause?","qAr":"ما جملة الصلة المحدِّدة؟","a":"It gives important information about a person or thing. We use ==who / that== for people and ==which / that== for things.","aAr":"تعطي معلومة مهمّة عن شخص أو شيء. نستعمل ==who / that== للأشخاص و==which / that== للأشياء.","ex":[["Rosa is the person who reads to a group of children.","روزا هي التي تقرأ لمجموعة من الأطفال."],["We do projects which help the local community.","ننفّذ مشاريع تخدم المجتمع المحلّي."]]},
{"t":"grammar","q":"How do we form nouns and adjectives from other words?","qAr":"كيف نكوّن الأسماء والصفات من كلمات أخرى؟","a":"We change the ending: **collect → collection**, **feel → feeling**, **danger → dangerous**, **nature → natural**, **volunteer → voluntary**.","aAr":"نغيّر النهاية: **collect ← collection** و**feel ← feeling** و**danger ← dangerous** و**nature ← natural** و**volunteer ← voluntary**.","ex":[["Tony does voluntary work at a school.","يقوم توني بعمل تطوّعي في مدرسة."]]},
{"t":"reading","q":"Why did Hadeel take the food to the Masri family?","qAr":"لماذا أخذت هديل الطعام إلى عائلة المصري؟","a":"She wanted a chance to meet Sameera, and Aunt Nada was happy because she wanted the two girls to get to know each other.","aAr":"أرادت فرصة للقاء سميرة، وسعدت العمّة نادية لأنّها أرادت أن تتعرّف الفتاتان إلى بعضهما."},
{"t":"reading","q":"What does Hadeel suggest at the end of the conversation?","qAr":"ماذا تقترح هديل في نهاية الحديث؟","a":"She suggests going together to fetch the children from the summer camp, so they can carry on chatting.","aAr":"تقترح أن تذهبا معاً لجلب الأطفال من المخيّم الصيفي كي تواصلا الحديث."},
{"t":"reading","q":"What kinds of help do Tom, Rosa and Hassan give?","qAr":"ما أنواع المساعدة التي يقدّمها توم وروزا وحسّان؟","a":"Tom helps with community projects, like building a playground. Rosa volunteers at the local library. Hassan belongs to an organization that sends help to disaster victims.","aAr":"توم يساعد في مشاريع المجتمع كبناء ملعب، وروزا تتطوّع في المكتبة المحلّية، وحسّان ينتمي إلى منظّمة ترسل المساعدة إلى ضحايا الكوارث."},
{"t":"writing","q":"How do we give opinions in a paragraph?","qAr":"كيف نعبّر عن الرأي في فقرة؟","a":"We use **I believe that…**, **I feel that…**, **I think that…**. To disagree we say **I don't agree** or **I partly agree with you, but…**, and we connect ideas with **but**, **however**, **and**, **also**.","aAr":"نستعمل **I believe that…** و**I feel that…** و**I think that…**. وللاختلاف نقول **I don't agree** أو **I partly agree with you, but…**، ونربط الأفكار بـ **but** و**however** و**and** و**also**.","ex":[["I partly agree with Adnan, but I also think the future is important.","أوافق عدنان جزئياً لكنّني أعتقد أنّ المستقبل مهمّ أيضاً."]]},
{"t":"speaking","q":"What do 'Please come in' and 'Please come through and have tea' show?","qAr":"ماذا تدلّ العبارتان «Please come in» و«Please come through and have tea»؟","a":"We say them to welcome a guest politely into our home.","aAr":"نقولهما لنرحّب بالضيف بلطف في بيتنا.","ex":[["Please come in.","تفضّل بالدخول."],["Please come through and have tea.","تفضّل واشرب الشاي."]]},
]}
lesson={"id":"8-1","title":"Helping hands: making friends","titleAr":"أيادٍ تساعد: كسب الأصدقاء","vocab":vocab,
"reading":{"title":"Helping hands","paras":[{"en":e,"ar":a} for e,a in paras],"questions":rq},
"rules":rules,"mastery":mastery}
out={"n":8,"title":"أيادٍ تساعد: كسب الأصدقاء","titleEn":"Helping hands: making friends","lesson":lesson,"rulecards":cards,"worksheet":ws,"summary":summary}
json.dump(out,open("/home/user/sahaba-learn/tools/content_e9/u8.json","w",encoding="utf-8"),ensure_ascii=False,indent=1)
