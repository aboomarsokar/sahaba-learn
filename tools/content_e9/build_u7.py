import json
def mc(q,o,a,why=None,lv=None):
    d={"q":q,"o":o,"a":a}
    if why: d["why"]=why
    if lv: d["lv"]=lv
    return d
def tf(q,v,why=None,lv=None):
    d={"tf":v,"q":q}
    if why: d["why"]=why
    if lv: d["lv"]=lv
    return d
def ty(q,a,why=None,lv=None):
    d={"type":"type","q":q,"a":a}
    if why: d["why"]=why
    if lv: d["lv"]=lv
    return d
def od(q,w,lv=None):
    d={"type":"order","q":q,"words":w}
    if lv: d["lv"]=lv
    return d
def V(en,ar,em,ex,exAr): return {"en":en,"ar":ar,"em":em,"ex":ex,"exAr":exAr}

vocab=[
V("grow up","يكبر / ينشأ","🌱","We did everything together while we were growing up.","فعلنا كلّ شيء معاً ونحن نكبر."),
V("in trouble","في مأزق / في ورطة","🆘","Those people on the mountain are in trouble.","أولئك الناس على الجبل في مأزق."),
V("look after","يعتني بـ","🤲","I sometimes look after Grandma when Mum has to go shopping.","أعتني أحياناً بجدّتي حين تضطرّ أمّي إلى التسوّق."),
V("duty","واجب","🎖","It's my duty to go and find them.","من واجبي أن أذهب وأجدهم."),
V("fridge","ثلّاجة","🧊","There are some chicken pieces in the fridge.","هناك بعض قطع الدجاج في الثلّاجة."),
V("piece","قطعة","🧩","I'd like a piece of cheese to put on my bread.","أريد قطعة جبن لأضعها على خبزي."),
V("simple","بسيط / سهل","✅","I'll teach you some simple dishes.","سأعلّمك بعض الأطباق البسيطة."),
V("though","مع ذلك / رغم ذلك","↔","I don't know much about cooking. I should though.","لا أعرف الكثير عن الطبخ، وينبغي أن أعرف مع ذلك."),
V("a bit","قليلاً","🤏","When I'm at home, I sometimes help a bit.","حين أكون في البيت أساعد قليلاً أحياناً."),
V("imagine","يتخيّل","💭","Imagine that your parents have gone out.","تخيّل أنّ والديك خرجا."),
V("pour","يسكب","🫗","Should I pour the soup into the bowls now?","هل أسكب الحساء في الأوعية الآن؟"),
V("stain","بقعة / يلطّخ","🍅","You've stained your new sweater.","لقد لطّخت سترتك الجديدة."),
V("get rid of","يتخلّص من","🧽","Try to get rid of the stain with soap and water.","حاول أن تتخلّص من البقعة بالماء والصابون."),
V("chemical","مادّة كيميائية","🧪","A gentle chemical cleaner may help.","قد تفيد مادّة تنظيف كيميائية لطيفة."),
V("burn","يحرق / يحترق","🔥","Don't burn yourself!","لا تحرق نفسك!"),
V("necessary","ضروري","❗","It isn't usually necessary to use powerful chemicals.","ليس من الضروري عادةً استعمال مواد قويّة."),
]

paras=[
("Hadeel and Aunt Nada were talking in the kitchen. Aunt Nada: Tell me, do you ever cook back home? Hadeel: When I'm at home, I sometimes help a bit. But I'm often out because I do various sports and other activities after school. So I don't know very much about cooking. I should though.",
 "كانت هديل وعمّتها نادية تتحدّثان في المطبخ. العمّة نادية: أخبريني، هل تطبخين في بيتكم؟ هديل: حين أكون في البيت أساعد قليلاً أحياناً، لكنّني كثيراً ما أكون خارجه لأنّني أمارس رياضات وأنشطة متنوّعة بعد المدرسة، فلا أعرف الكثير عن الطبخ، وينبغي أن أتعلّم مع ذلك."),
("Aunt Nada: Yes, if you learn to cook, it'll be very useful later, when you grow up. Hadeel: You're right. I need to learn. Nidal knows much more than me! And if I don't learn, it won't be easy to live away from home in future. Aunt Nada: I'll teach you some simple dishes if you like. Hadeel: Great! Aunt Nada: Let's make lunch for our neighbours, the Masri family. Mrs Masri is sick.",
 "العمّة نادية: نعم، إن تعلّمتِ الطبخ فسيكون مفيداً جدّاً لاحقاً حين تكبرين. هديل: معك حقّ، أحتاج إلى أن أتعلّم. نضال يعرف أكثر منّي بكثير! وإن لم أتعلّم فلن يكون سهلاً أن أعيش بعيدة عن البيت مستقبلاً. العمّة نادية: سأعلّمك بعض الأطباق البسيطة إن أحببتِ. هديل: رائع! العمّة نادية: لنُعدّ غداءً لجيراننا عائلة المصري، فالسيدة المصري مريضة."),
("Hadeel: Are they the family opposite? Aunt Nada: Yes. How did you guess? Hadeel: The daughter always looks busy. She goes shopping every day, and I often think maybe her mum isn't well. Aunt Nada: You're right. Her father is in hospital, too, so poor young Sameera is looking after them and the four little ones, too. She's only fourteen, like you. Hadeel: That's very hard. How does she do everything? Aunt Nada: Well, the friends and neighbours are helping, and today it's my turn.",
 "هديل: هل هم العائلة المقابلة لنا؟ العمّة نادية: نعم، كيف خمّنتِ؟ هديل: الابنة تبدو مشغولة دائماً، وتذهب إلى التسوّق كلّ يوم، وكثيراً ما أظنّ أنّ أمّها ربّما ليست بخير. العمّة نادية: معك حقّ. أبوها في المستشفى أيضاً، فالمسكينة الصغيرة سميرة تعتني بهما وبالصغار الأربعة أيضاً، وهي في الرابعة عشرة فقط مثلك. هديل: هذا صعب جدّاً، كيف تفعل كلّ شيء؟ العمّة نادية: الأصدقاء والجيران يساعدون، واليوم جاء دوري."),
("Hadeel: If something like that happens back home, neighbours don't usually help as much. You seem to have a closer community here. Aunt Nada: Perhaps you're right. If someone is in trouble here, we always feel it's our duty to help. Now, … there are some chicken pieces in the fridge. Let's cook them and make some salad.",
 "هديل: إن حدث شيء كهذا في بلدنا فالجيران لا يساعدون عادةً بهذا القدر. يبدو أنّ لديكم مجتمعاً أكثر تقارباً هنا. العمّة نادية: ربّما معك حقّ. إن وقع أحدهم في مأزق هنا فإنّنا نشعر دائماً أنّ من واجبنا أن نساعد. والآن… هناك بعض قطع الدجاج في الثلّاجة، لنطبخها ونُعدّ بعض السلطة."),
]
rq=[
mc("What does Hadeel do when she is at home?",["She cooks every meal","She sometimes helps a bit","She never helps"],1),
mc("Why is Hadeel often out?",["She does sports and other activities after school","She works in a shop","She visits her aunt"],0),
tf("Mr Masri is at home with his family.",False,"He is in hospital."),
mc("How old is Sameera?",["Twelve","Fourteen","Sixteen"],1),
mc("What does Hadeel think about the community here?",["It is closer than back home","It is the same as back home","It is not friendly"],0),
]

rules=[]
rules.append({
"title":"Type 0 and Type 1 conditionals","titleAr":"الشرط من النوع الصفري والنوع الأول",
"explain":"نستعمل <b>النوع الصفري (Type 0)</b> لأمور صحيحة دائماً أو قد تحدث في أيّ وقت: <b>If + مضارع بسيط، مضارع بسيط</b> (If someone is in trouble here, we always feel it's our duty to help). ونستعمل <b>النوع الأول (Type 1)</b> لأمور قد تحدث أو لا تحدث في المستقبل: <b>If + مضارع بسيط، will + فعل</b> (If you learn to cook, it will be very useful later). فجملة if لا تأخذ will أبداً.",
"form":"Type 0: If + present simple, present simple    ·    Type 1: If + present simple, will + V1",
"examples":[
{"en":"If someone is in trouble here, we always **feel** it's our duty to help.","ar":"النوع الصفري"},
{"en":"If something like that happens back home, neighbours **don't** usually help as much.","ar":"النوع الصفري"},
{"en":"If you learn to cook, it **will be** very useful later.","ar":"النوع الأول"},
{"en":"If I don't learn, it **won't be** easy to live away from home.","ar":"النوع الأول (نفي)"}],
"questions":[
mc("If it is a summer camp day, she always ___ them all there.",["will take","takes","is taking"],1,"Type 0: مضارع بسيط في الجزأين"),
mc("If she needs more medicine today, I ___ to go to the doctor's.",["have","will have","had"],1,"Type 1: will + V1"),
mc("If the children's rooms are untidy, she ___ everything away tidily.",["puts","would put","will putting"],0,"Type 0"),
ty("If we ___ more fruit, I'll go to the market. (need)",["need"],"جملة if بالمضارع البسيط"),
ty("If she doesn't need more medicine, I ___ to the doctor's. (not / go)",["won't go","will not go"],"Type 1 منفي"),
od("رتّب الكلمات: «إن تعلّمتِ الطبخ فسيكون ذلك مفيداً»",["If","you","learn","to","cook,","it","will","be","useful."]),
]})
rules.append({
"title":"Type 2 conditionals","titleAr":"الشرط من النوع الثاني",
"explain":"نستعمل <b>النوع الثاني (Type 2)</b> للمواقف <b>غير الواقعية</b> التي نتخيّلها الآن أو في المستقبل: <b>If + ماضٍ بسيط، would / could / might + فعل</b> (If the oil started burning, I would turn off the cooker). الفعل في جملة if يكون ماضياً بسيطاً لكنّه لا يدلّ على الماضي هنا، ويمكن أن تأتي جملة if في أوّل الجملة أو في آخرها، وقد يكون الجزءان مثبتين أو منفيّين.",
"form":"If + past simple, would / could / might + V1",
"examples":[
{"en":"If the oil **started** burning, I **would turn off** the cooker.","ar":"موقف متخيَّل"},
{"en":"If you **used** a powerful chemical cleaner, this **would remove** the stain.","ar":"موقف متخيَّل"},
{"en":"If that **did not work**, you **could use** a gentle cleaner.","ar":"جملة if منفيّة"},
{"en":"You **might not remove** the stain completely if you did that.","ar":"جملة if في آخر الجملة"}],
"questions":[
mc("If I burned my hand, I ___ it under cold running water.",["will hold","would hold","hold"],1,"Type 2: would + V1"),
mc("If you lost your purse in town, you ___ go back and look for it.",["could","can","are"],0,"could + V1 في Type 2"),
mc("If those were my children, I ___ let them play with knives.",["won't","wouldn't","don't"],1,"Type 2 منفي: wouldn't"),
ty("If a neighbour ___ sick, I would call a doctor. (become)",["became"],"ماضٍ بسيط في جملة if"),
ty("If I saw a small child on a busy road, I ___ him. (help)",["would help","'d help"],"would + V1"),
tf("The sentence «If I will see a fire, I would call the fire brigade» is correct.",False,"الصحيح: If I saw a fire, I would call the fire brigade."),
]})
rules.append({
"title":"Forms of look","titleAr":"استعمالات الفعل look",
"explain":"يتغيّر معنى الفعل <b>look</b> بتغيّر الكلمة التي بعده: <b>look</b> (يبدو)، <b>look at</b> (ينظر إلى)، <b>look for</b> (يبحث عن)، <b>look after</b> (يعتني بـ)، <b>look up</b> (يبحث عن معلومة في كتاب أو قائمة أو الإنترنت)، <b>look like</b> (يشبه). وتأتي <b>Look!</b> وحدها لنلفت انتباه أحدهم.",
"form":"look + (at / for / after / up / like)",
"examples":[
{"en":"You **look** smart in that shirt.","ar":"يبدو"},
{"en":"Why are you **looking at** that person?","ar":"ينظر إلى"},
{"en":"I've been **looking for** my phone all day.","ar":"يبحث عن"},
{"en":"You should **look after** your things more carefully.","ar":"يعتني بـ"},
{"en":"I'll **look up** the name on the guest list.","ar":"يبحث عن معلومة"},
{"en":"He **looks like** an old friend.","ar":"يشبه"}],
"questions":[
mc("I can't find my keys. I'm ___ them.",["looking for","looking after","looking like"],0,"look for = يبحث عن"),
mc("Sameera ___ her little brothers and sisters.",["looks up","looks after","looks at"],1,"look after = يعتني بـ"),
mc("He ___ an old friend of mine.",["looks like","looks for","looks up"],0,"look like = يشبه"),
ty("I don't know the word. I'll ___ it ___ on the internet. (look)",["look up"],"look up = يبحث عن معلومة"),
mc("___! It's over there by the TV.",["Look","Looks","Looking"],0,"Look! لفت الانتباه"),
tf("«Look after» means «try to find».",False,"look after = يعتني بـ، أمّا try to find فهي look for."),
]})

def rc(**k): return k
cards={}
cards["7-1#0"]=[
{"k":"intro","useEn":"We use {t|Type 0} for things that are always true or may happen at any time, and {t|Type 1} for things that may or may not happen in the future.","useAr":"نستعمل {t|النوع الصفري} للأمور الصحيحة دائماً أو التي تحدث في أيّ وقت، و{t|النوع الأول} لأمور قد تحدث في المستقبل أو لا تحدث.","signals":["if","always","usually","will","tomorrow","in future"]},
{"k":"pos","label":"Type 0 · any time","labelAr":"النوع الصفري (في أيّ وقت)","formula":"{t|If} + {s|S} + {v|present simple}, {s|S} + {v|present simple}","examples":[
{"en":"{t|If} someone {v|is} in trouble, we always {v|feel} it's our duty to help.","ar":"إن وقع أحدهم في مأزق فنحن نشعر دائماً أنّ من واجبنا أن نساعد."},
{"en":"{t|If} the children {v|wake up} late, she {v|calls} them.","ar":"إن استيقظ الأطفال متأخّرين فإنّها توقظهم."}],"tip":"المضارع البسيط في الجزأين."},
{"k":"pos","label":"Type 1 · future","labelAr":"النوع الأول (المستقبل)","formula":"{t|If} + {s|S} + {v|present simple}, {s|S} + {t|will} + {v|V1}","examples":[
{"en":"{t|If} you {v|learn} to cook, it {t|will} {v|be} very useful later.","ar":"إن تعلّمتِ الطبخ فسيكون مفيداً جدّاً لاحقاً."},
{"en":"{t|If} she needs more medicine, I {t|will} {v|have} to go to the doctor's.","ar":"إن احتاجت إلى دواء أكثر فسيكون عليّ الذهاب إلى الطبيب."}],"tip":"جملة if لا تأخذ will، بل مضارعاً بسيطاً."},
{"k":"neg","label":"Negative","labelAr":"النفي","formula":"{t|If} + {s|S} + {n|don't / doesn't} + {v|V1}, {s|S} + {t|won't} + {v|V1}","examples":[
{"en":"{t|If} I {n|don't} learn, it {t|won't} {v|be} easy to live away from home.","ar":"إن لم أتعلّم فلن يكون سهلاً أن أعيش بعيدة عن البيت."}]},
{"k":"q","label":"Question","labelAr":"السؤال","formula":"{t|What will} + {s|S} + {v|V1} + {t|if} + {s|S} + {v|present simple}?","examples":[
{"en":"{t|What will} you {v|do} {t|if} you {v|need} more bread?","ar":"ماذا ستفعل إن احتجتَ إلى خبز أكثر؟"}]},
]
cards["7-1#1"]=[
{"k":"intro","useEn":"We use {t|Type 2} for unreal situations that we only imagine, now or in the future.","useAr":"نستعمل {t|النوع الثاني} للمواقف غير الواقعية التي نتخيّلها الآن أو في المستقبل.","signals":["if","would","could","might","imagine"]},
{"k":"pos","label":"Pattern","labelAr":"الصيغة","formula":"{t|If} + {s|S} + {v|past simple}, {s|S} + {t|would / could / might} + {v|V1}","examples":[
{"en":"{t|If} the oil {v|started} burning, I {t|would} {v|turn off} the cooker.","ar":"لو بدأ الزيت يحترق لأطفأتُ الموقد."},
{"en":"{t|If} you {v|used} a powerful cleaner, this {t|would} {v|remove} the stain.","ar":"لو استعملتَ منظّفاً قويّاً لأزال هذا البقعة."}],"tip":"الماضي هنا يدلّ على موقف غير حقيقي لا على الماضي."},
{"k":"neg","label":"Negative","labelAr":"النفي","formula":"{t|If} + {s|S} + {n|didn't} + {v|V1}, {s|S} + {t|wouldn't} + {v|V1}","examples":[
{"en":"{t|If} those were my children, I {t|wouldn't} {v|let} them play with knives.","ar":"لو كان هؤلاء أولادي لما تركتُهم يلعبون بالسكاكين."},
{"en":"{t|If} that {n|did not} {v|work}, you {t|could} {v|use} a gentle chemical cleaner.","ar":"لو لم ينفع ذلك لاستطعتَ استعمال مادّة تنظيف لطيفة."}]},
{"k":"q","label":"Question","labelAr":"السؤال","formula":"{t|What would} + {s|S} + {v|V1} + {t|if} + {s|S} + {v|past simple}?","examples":[
{"en":"{t|What would} you {v|do} {t|if} a pan of hot oil {v|started} burning?","ar":"ماذا كنتَ ستفعل لو بدأ وعاء الزيت الساخن يحترق؟"}]},
{"k":"note","label":"Order of parts","labelAr":"ترتيب الجزأين","body":"يمكن أن تأتي جملة {t|if} أوّلاً أو ثانياً:\nIf you did that, you {t|might not} remove the stain.\nYou {t|might not} remove the stain if you did that.","examples":[]},
]
cards["7-1#2"]=[
{"k":"intro","useEn":"The verb {t|look} changes its meaning when we add a different word after it.","useAr":"يتغيّر معنى الفعل {t|look} بحسب الكلمة التي تأتي بعده.","signals":["look","look at","look for","look after","look up","look like"]},
{"k":"pos","label":"look · look at","labelAr":"يبدو · ينظر إلى","formula":"{s|S} + {v|look} + adjective    ·    {s|S} + {v|look at} + {s|noun}","examples":[
{"en":"You {v|look} smart in that shirt.","ar":"تبدو أنيقاً بهذا القميص."},
{"en":"Why are you {v|looking at} that person over there?","ar":"لماذا تنظر إلى ذلك الشخص هناك؟"}]},
{"k":"pos","label":"look for · look up","labelAr":"يبحث عن · يبحث عن معلومة","formula":"{s|S} + {v|look for} + {s|thing / person}    ·    {s|S} + {v|look up} + {s|information}","examples":[
{"en":"I've been {v|looking for} my phone all day.","ar":"أبحث عن هاتفي طوال اليوم."},
{"en":"I'll {v|look up} the name on the guest list.","ar":"سأبحث عن الاسم في قائمة المدعوّين."}]},
{"k":"pos","label":"look after · look like","labelAr":"يعتني بـ · يشبه","formula":"{s|S} + {v|look after} + {s|noun}    ·    {s|S} + {v|look like} + {s|noun}","examples":[
{"en":"Sameera {v|looks after} her mother and the four little ones.","ar":"سميرة تعتني بأمّها وبالصغار الأربعة."},
{"en":"He {v|looks like} an old friend.","ar":"إنّه يشبه صديقاً قديماً."}],"tip":"look after = يعتني، look like = يشبه."},
]

mastery=[
mc('"duty" means:',["واجب","ثلّاجة","قطعة"],0,lv="easy"),
mc('"fridge" means:',["ثلّاجة","موقد","بقعة"],0,lv="easy"),
tf("Sameera is fourteen years old.",True,lv="easy"),
{"type":"match","q":"صِل كلّ كلمة بمعناها","pairs":[["pour","يسكب"],["stain","بقعة"],["necessary","ضروري"],["burn","يحرق"]],"lv":"medium"},
mc("If it ___ cold tomorrow, we will eat something hot.",["is","will be","was"],0,lv="medium"),
mc("If I burned my hand, I ___ it under cold water.",["would hold","will hold","hold"],0,lv="medium"),
ty("If she needs more bread, she ___ to the baker's. (go)",["will go","'ll go"],lv="hard"),
mc("Choose the correct sentence.",["If I had a million dollars, I would travel the world.","If I would have a million dollars, I will travel the world.","If I have a million dollars, I would travelled the world."],0,lv="hard"),
od("رتّب الكلمات لتكوّن جملة صحيحة",["I","would","turn","off","the","cooker","if","the","oil","started","burning."],lv="hard"),
mc("Why does Hadeel need to learn to cook?",["It won't be easy to live away from home if she doesn't learn","Nidal asked her to cook","Her mum is sick"],0,lv="hard"),
]
# order puzzle uses duplicate word 'the' - fine

ws={"readingFrom":7,"sections":[
{"k":"vocab","questions":[
mc("Could you get the milk from the ___?",["fridge","duty","stain"],0),
mc("A hot ___ of oil can start a big fire.",["pan","piece","duty"],0) if False else mc("Don't ___ yourself when you take the hot pan from the cooker.",["burn","pour","imagine"],0),
mc("It's my ___ to help people who are in trouble.",["duty","fridge","material"],0),
mc("I'd like a ___ of cheese, please.",["stain","piece","chemical"],1),
ty("The opposite of 'safe' is ___.",["dangerous"]),
]},
{"k":"grammar","questions":[
mc("If it rains tomorrow, we ___ at home.",["will stay","stayed","would stayed"],0),
mc("If I ___ rich, I would buy a big house.",["am","were","will be"],1),
mc("If you don't learn, it ___ easy to live alone.",["won't be","wouldn't being","isn't"],0),
ty("If the oil started burning, I ___ the cooker. (turn off)",["would turn off","'d turn off"]),
ty("If people are in trouble, we always ___ to help. (try)",["try"]),
mc("I'm ___ my phone. Have you seen it?",["looking for","looking after","looking like"],0),
]},
{"k":"reading","questions":[
mc("What will Aunt Nada teach Hadeel?",["Some simple dishes","Some English words","How to sew"],0),
tf("Mrs Masri is well, but her husband is sick.",False,"Mrs Masri is sick and her husband is in hospital."),
mc("Who is looking after the four little ones?",["Sameera","Hadeel","Aunt Nada"],0),
mc("What are in the fridge?",["Some chicken pieces","Some fish","Some salad"],0),
]},
]}

summary={"title":"ماذا لو؟","titleEn":"What if?",
"intro":"يتعلّم الطالب جمل الشرط من النوع الصفري والأول والثاني، واستعمالات الفعل look، ومفردات المطبخ والسلامة المنزلية، ويكتب تقريراً يقترح فيه مشروعاً لمجتمعه.",
"qa":[
{"t":"vocab","q":"What do these words mean: duty, fridge, grow up, in trouble?","qAr":"ما معنى الكلمات: duty وfridge وgrow up وin trouble؟","a":"**duty** is something you must do, a **fridge** keeps food cold, to **grow up** is to become an adult, and to be **in trouble** is to have a problem.","aAr":"**duty** = **واجب**، **fridge** = **ثلّاجة**، **grow up** = **يكبر**، **in trouble** = **في مأزق**.","ex":[["It's our duty to help.","من واجبنا أن نساعد."],["There are some chicken pieces in the fridge.","هناك قطع دجاج في الثلّاجة."]]},
{"t":"vocab","q":"What do pour, stain, burn and get rid of mean?","qAr":"ما معنى pour وstain وburn وget rid of؟","a":"To **pour** is to make a liquid flow out, a **stain** is a dirty mark, to **burn** is to hurt or damage with fire or heat, and to **get rid of** something is to remove it.","aAr":"**pour** = **يسكب**، **stain** = **بقعة**، **burn** = **يحرق**، **get rid of** = **يتخلّص من**.","ex":[["Try to get rid of the stain with cold water and soap.","حاول أن تتخلّص من البقعة بالماء البارد والصابون."]]},
{"t":"vocab","q":"What are the opposites of enemy, safe, turn on and wrong?","qAr":"ما أضداد: enemy وsafe وturn on وwrong؟","a":"The opposite of **enemy** is **friend**, of **safe** is **dangerous**, of **turn on** is **turn off**, and of **wrong** is **right**.","aAr":"ضدّ **enemy** هو **friend**، وضدّ **safe** هو **dangerous**، وضدّ **turn on** هو **turn off**، وضدّ **wrong** هو **right**.","ex":[["It is too dangerous for children to go out on the road.","من الخطر جدّاً أن يخرج الأطفال إلى الطريق."]]},
{"t":"grammar","q":"What are Type 0 and Type 1 conditionals?","qAr":"ما الشرط من النوع الصفري والأول؟","a":"**Type 0** is for things that may happen at any time: ==If + present simple, present simple==. **Type 1** is for things that may happen in the future: ==If + present simple, will + V1==.","aAr":"**النوع الصفري** لأمور تحدث في أيّ وقت: ==If + مضارع بسيط، مضارع بسيط==. **النوع الأول** لأمور قد تحدث مستقبلاً: ==If + مضارع بسيط، will + فعل==.","ex":[["If someone is in trouble, we always help.","إن وقع أحدهم في مأزق فنحن نساعده دائماً."],["If you learn to cook, it will be useful.","إن تعلّمتِ الطبخ فسيكون مفيداً."]]},
{"t":"grammar","q":"What is a Type 2 conditional?","qAr":"ما الشرط من النوع الثاني؟","a":"We use ==If + past simple, would + V1== for unreal situations that we imagine. The **if** part can come first or second.","aAr":"نستعمل ==If + ماضٍ بسيط، would + فعل== للمواقف غير الواقعية التي نتخيّلها، ويمكن أن تأتي جملة **if** أوّلاً أو ثانياً.","ex":[["If the oil started burning, I would turn off the cooker.","لو بدأ الزيت يحترق لأطفأتُ الموقد."]]},
{"t":"grammar","q":"Can we say 'If I will see him, I will tell him'?","qAr":"هل نقول «If I will see him, I will tell him»؟","a":"No. After **if** we use the present simple in Type 1: ==If I see him, I will tell him==.","aAr":"لا. بعد **if** نستعمل المضارع البسيط في النوع الأول: ==If I see him, I will tell him==.","ex":[["If I see him, I will tell him.","إن رأيتُه فسأخبره."]]},
{"t":"grammar","q":"What are the different meanings of look?","qAr":"ما معاني look المختلفة؟","a":"**look** = seem, **look at** = turn your eyes to, **look for** = try to find, **look after** = take care of, **look up** = find information, **look like** = be similar to.","aAr":"**look** = يبدو، **look at** = ينظر إلى، **look for** = يبحث عن، **look after** = يعتني بـ، **look up** = يبحث عن معلومة، **look like** = يشبه.","ex":[["I'll look up the name on the guest list.","سأبحث عن الاسم في قائمة المدعوّين."]]},
{"t":"reading","q":"Why does Hadeel want to learn to cook?","qAr":"لماذا تريد هديل أن تتعلّم الطبخ؟","a":"Because it will be useful later when she grows up, and it won't be easy to live away from home if she can't cook.","aAr":"لأنّ ذلك سيفيدها لاحقاً حين تكبر، ولن يكون سهلاً أن تعيش بعيدة عن البيت إن لم تُجِد الطبخ."},
{"t":"reading","q":"Who is Sameera and what problem does her family have?","qAr":"من هي سميرة وما مشكلة عائلتها؟","a":"Sameera is a fourteen-year-old neighbour. Her mother is sick and her father is in hospital, so she looks after them and four little children.","aAr":"سميرة جارة في الرابعة عشرة، أمّها مريضة وأبوها في المستشفى، فهي تعتني بهما وبأربعة أطفال صغار."},
{"t":"reading","q":"What would you do if a pan of hot oil started burning?","qAr":"ماذا تفعل لو بدأ وعاء من الزيت الساخن يحترق؟","a":"I would turn off the cooker and cover the pan. This stops air from reaching the oil, so the fire stops. Water on hot oil makes a huge dangerous fire.","aAr":"أُطفئ الموقد وأغطّي الوعاء، فهذا يمنع الهواء من الوصول إلى الزيت فتنطفئ النار، أمّا الماء على الزيت الساخن فيسبّب حريقاً كبيراً خطيراً."},
{"t":"writing","q":"How do we write a report to City Hall?","qAr":"كيف نكتب تقريراً إلى البلدية؟","a":"We write an introduction with the date and the meeting, then a topic sentence (We think that … would do a lot for our area), then points with First of all, Secondly and Finally.","aAr":"نكتب مقدّمة فيها التاريخ والاجتماع، ثم جملة موضوع، ثم نقاطاً نبدؤها بـ First of all وSecondly وFinally.","ex":[["If we spent the money on a new sports centre, we could play more football.","لو أنفقنا المال على مركز رياضي جديد لاستطعنا لعب كرة قدم أكثر."]]},
{"t":"speaking","q":"What does 'If you like, …' mean?","qAr":"ماذا تعني العبارة «If you like, …»؟","a":"We say **If you like, …** to offer something politely, for example: I'll teach you some simple dishes if you like.","aAr":"نقول **If you like, …** لنعرض شيئاً بلطف، مثل: سأعلّمك بعض الأطباق البسيطة إن أحببتِ.","ex":[["I'll teach you some simple dishes if you like.","سأعلّمك بعض الأطباق البسيطة إن أحببتِ."]]},
]}

lesson={"id":"7-1","title":"What if?","titleAr":"ماذا لو؟","vocab":vocab,
"reading":{"title":"What if?","paras":[{"en":e,"ar":a} for e,a in paras],"questions":rq},
"rules":rules,"mastery":mastery}
out={"n":7,"title":"ماذا لو؟","titleEn":"What if?","lesson":lesson,"rulecards":cards,"worksheet":ws,"summary":summary}
json.dump(out,open("/home/user/sahaba-learn/tools/content_e9/u7.json","w",encoding="utf-8"),ensure_ascii=False,indent=1)
