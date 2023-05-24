import { v4 as uuid } from 'uuid';
import { multiChoiceQuestion, parseTest } from './data';

export const q = `
#multichoice#
#qt#

تمر دورة حياه المشروع ب . . . . 
3
بمرحلتين
بثلاث مراحل
بأربع مراحل
بخمس مراحل



#q#
تعنى المزايا أو الجوانب التي يتمتع بها الفرد ب . . . . 
1
نقاط القوة
نقاط الضعف
الفرص
التهديدات



#q#
تتناول المجالات أول الجوانب التي يتطلب العمل على تقويتها أو استبعادها أو تحديدها ب . . . . 
2
نقاط القوة
نقاط الضعف
الفرص
التهديدات



#q#
تعنى كيفية تحسين الأداء والخصائص والفرص المتاحة لتحقيق ذلك ب . . . . 
3
نقاط القوة
نقاط الضعف
الفرص
التهديدات


#q#
يقصد بها المخاطر التي قد يتعرض لها الفرد ب . . . . 
4
1نقاط القوة
نقاط الضعف
الفرص
التهديدات


#q#
الصورة الذهنية للأثر التنموي المتحقق في الوضع المستقبلي والذي يشمل تغيراً جذريا في حياة السكان المستهدفين
1
الهدف طويل المدى
الأهداف الكلية
الأهداف المباشرة
الأهداف غير المباشرة



#q#
النتائج العامة المنشودة في شكل تغيير في أوضاع الحياة والسكان المستهدفين
2
الهدف طويل المدى
الأهداف الكلية
الأهداف المباشرة
الأهداف غير المباشرة



#q#
تسهم في تحقيق الأهداف الكلية والتي تمثل مخرجات مباشره قابله للقياس لأنشطه المشروع
3
الهدف طويل المدى
الأهداف الكلية
الأهداف المباشرة
الأهداف غير المباشرة



#q#
تتسم الأهداف الذكية ب . . . . صفات
3
ثلاث
أربع
خمس
ست



#q#
النتائج البعيدة المدى والأكثر شمولا والتي تنتج عاده عن جهود تدخلات مختلفة حكومية وغير حكومية
3
مخرجات
عائدات
أثار
الأهداف الكلية



#q#
النتائج التي تنشأ عن مجموعه مخرجات مجتمعه لنفس المشروع أو للمشروع
2
مخرجات
عائدات
أثار
الأهداف الكلية



#q#
النتائج المباشرة لأنشطه المشروع
1
مخرجات
عائدات
أثار
الأهداف الكلية



#q#
يتسم المؤشر الجيد ب . . . . صفات
3
ثلاث
أربع
خمس
ست



#q#
تتم عمليه للتقييم المؤسسة كل . . . . 
1
ثلاث سنوات
أربع سنوات
خمس سنوات
ست سنوات



#q#
عمليه التقييم تتكون من . . . . مراحل رئيسيه
1
ثلاث
أربع
خمس
ست



#q#
يتصف المقيم الخارجي بأنه . . . . 
4
جزء من الهيكل التنظيمي والسلطة في البرنامج
يجد صعوبة في أن يكون موضوعيا
البرنامج مألوف لديه لذا فهو يفهمه ويستطيع أن يفسر السلوك والاتجاهات الشخصية
يستطيع أن يرى البرنامج بنظره جيده



#q#
معيار يقيس مدى ملائمه المشروع للمؤسسات والجمعيات والممولين والفئات المستهدفة، وأن على أداره المشروع في هذا المعيار اختيار الفئات المستهدفة
3
معيار الفاعلية
معيار الكفاءة
معيار الموائمة والارتباط 
معيار الأثر



#q#
لاستغلال الأمثل للموارد المادية والمالية والبشرية لتحقيق المخرجات المخطط لها وذلك بأقل جهد ووقت وتكلفه
2
معيار الفاعلية 
معيار الكفاءة 
معيار الموائمة والارتباط 
معيار الأثر



#q#
يقيس مدى القرب من تحقيق الأهداف
1
معيار الفاعلية 
معيار الكفاءة 
معيار الموائمة والارتباط 
معيار الأثر



#q#
قيس مدى تحقق الهدف العام للمشروع والمنظمة على مستوى الفئات المستهدفة والمجتمع على المدى البعيد
2
معيار الفاعلية 
معيار الأثر
معيار الموائمة والارتباط 
معيار الكفاءة 




#q#
يقيس مدى ديمومة المشروع بعد انتهاءه
2
معيار الفاعلية 
معيار الاستدامة 
معيار الموائمة والارتباط 
معيار الأثر



#q#
إذا كان للبرنامج أهداف طويله المدى فسوف يكون من غير المجدي قياس الأثر بسرعه أي قبل  . . . . 
4
شهر
موسم
سنه
سنتين



#q#
تتضمن الحصول على معلومات مفيدة وفى الوقت المناسب من خلال مراقبه ما يفعله الناس
4
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة



#q#
هي عباره عن توثيق قصه حياه أو تسلسل الأحداث مع مرور الوقت المتعلقة بشخص، أو موق ع، أو أسره، أو مؤسسه
2
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة



#q#
تتم من خلال الحصول على معلومات وجها لوجه من مجموعه فرديه أو صغيره
1
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة


#q#
يتم الحصول على بيانات من عدد كبير من الأشخاص بطريقه منظمه وفقا لأسئلة محدده
3
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة



#q#
تشجع الناس على التفكير النقدي والإبداعي، بدلاً من مجرد إنشاء قائمه بالخيارات أو الإجابات أو الاهتمامات
2
طريقه مجموعات التركيز 
طريقه العصف الذهني 
طريقه تحقيق الأحلام أو الرؤية 
طريقه التغيير الأكثر أهمية



#q#
تستخدم لجمع معلومات عامه، أوضح في التفاصيل وجمع الأراء حول مشكله من مجموعه صغيره من الأشخاص المختارين الذين يمثلون وجهات نظر مختلفة
1
طريقه مجموعات التركيز 
طريقه العصف الذهني 
طريقه تحقيق الأحلام أو الرؤية 
طريقه التغيير الأكثر أهميه



#q#
تساعد أصحاب المصلحة في المشروع على التفكير في مدى ملائمه الأنشطة القائمة على رؤى الناس للتنمية
3
طريقه مجموعات التركيز 
طريقه العصف الذهني 
طريقه تحقيق الأحلام أو الرؤية 
طريقه التغيير الأكثر أهميه



#q#
توفر تمثيل مرئي للمعلومات في سياق جغرافي معيت استنادا إلى تصورات أصحاب المصلحة لأى مشكله
3
نظم تحديد المواقع العالمية
GISطريقه 
طريقه رسم الخرائط
طريقه لتقويمات الموسمية


#q#
تستخدم لاكتشاف وتسجيل البيانات لفترات زمنيه مميزه لإظهار التغيرات الدورية مع مرور الوقت
3
طريقه الروتين اليومي 
طريقه التغيير الأكثر أهمية 
طريقه التقويمات الموسمية 
طريقه الخريطه الاجتماعية



#q#
تستخدم لتقييم الاختلافات الرئيسية في المهام اليومية وكيفية التغلب عليها
1
طريقه الروتين اليومي 
طريقه التغيير الأكثر أهمية 
طريقه التقويمات الموسمية 
طريقه الخرطة الاجتماعية



#q#
تستخدم لتحديد حالات التغييرات الهامة / الحرجة - الإيجابية والسلبية
2
طريقه الروتين اليومي 
طريقه التغيير الأكثر أهمية 
طريقه التقويمات الموسمية 
طريقه الخرطة الاجتماعية


#q#
رسم يتم فيه عرض الأفكار والمعلومات بطريقه تسهل على ذهنك حفظها وتذكرها
1
 طريقه الخرائط الذهنية 
طريقه تحليل المدخلات والمخرجات 
طريقه التقويمات الموسمية 
طريقه مخطط الارتباط المؤسسي



#q#
توضح مدى تفاعل الأفراد، أو المنظمات، أو المشاريع، أو الخدمات مع بعض البعض والأهمية النسبية لكل منهم في القضية التي يجرى تقييمها
2
طريقه الخرائط الذهنية 
طريقه تحليل المدخلات والمخرجات 
طريقه التقويمات الموسمية 
طريقه مخطط الارتباط المؤسسي



#q#
تحليل تفصيلي تساعد الأنظمة في تحليل المدخلات اللازمة لجعل النظام يعمل، وكذلك مخرجاته
2
طريقه الخرائط الذهنية 
طريقه تحليل المدخلات والمخرجات 
طريقه التقويمات الموسمية 
طريقه مخطط الارتباط المؤسسي



#q#
طريقه العصف الذهني من طرق . . . . 
4
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا 
المناقشة للمجموعات



#q#
طريقه نظم تحديد المواقع العالمية من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا 
المناقشة للمجموعات



#q#
طريقه تحليل الاتجاهات التاريخية للموارد الطبيعية المتجددة من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه الخرائط الذهنية من طرق . . . . 
1
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه مجموعات التركيز من طرق . . . . 
4
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه رسم الخرائط من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه التقويمات الموسمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه مخطط الارتباط المؤسسي من طرق . . . . 
1
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه التقويمات الموسمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه الخريطه الاجتماعية من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه الروتين اليومي من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه تحليل المدخلات والمخرجات من
1
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه خريطه الموارد والخدمات والفرص من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه التقويمات الموسمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه التغير الأكثر أهمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
 من طرق . . . . GIS طريقه 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
طريقه تحقيق الأحلام أو الرؤية من طرق . . . . 
4
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#q#
يوضح أهم الأنشطة التي يتم تنفيذها من قبل المؤسسة خلال اليوم وتكون تفصيليه مثل تقارير الأنشطة وتقارير حضور وانصراف الموظفين اليومي، وتكون عاده روتينية لا تحمل مؤشرات
4
تقارير المراقبة والمتابعة 
تقارير خارجيه 
تقارير غير دوريه 
التقرير اليومي


#q#
تكون مرتبطة بخطه موضوعه أو ببرنامج أو مشروع جارى تنفيذه، وعاده ما تتضمن عمليه مقارنه بين ما هو واقع وما كان يجب أن يتم وفقا للخطة أو البرنامج الموضوع، وتوضيح وتقديم تحليل لها وبيان مسبباتها
1
تقارير المراقبة والمتابعة 
تقارير خارجيه 
تقارير غير دوريه 
التقرير اليومي


#q#
تقارير تصدر لحاجه معينه أو بناء على طلب محدد دون وجود ضابط زمني لصدورها، ومثال عليها تقرير حول مشكله إدارية أو ماليه أو فنيه محدد
3
تقارير المراقبة والمتابعة 
تقارير دوريه 
تقارير غير دوريه 
التقرير اليومي



#q#
تهدف إلى الحكم على الكفاءة أو إعطاء درجات أو تقديرات تعبر عن مستوى الأداء خلال فتره التقييم
3
تقارير الأنشطة 
تقارير أوليه 
تقارير تقييم الأداء 
تقارير ماليه ومحاسبيه



#q#
تركز على وضع المؤسسة أو المشروع ماليا من حيث المصروفات والإيرادات والمركز المالي، وتظهرهذه التقارير العجز أو الربح المتحقق
4
تقارير الأنشطة 
تقارير أوليه 
تقارير تقييم الأداء 
تقارير ماليه ومحاسبيه



#q#
يصنف التقرير السنوي ضمن التقارير . . . . 
3
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#q#
تصنف تقارير المراقبة والمتابعة من ضمن تقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث توقيتها



#q#
تصنف التقارير الخارجية من ضمن التقارير . . . . 
2
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#q#
تصنف تقارير تقييم الأداء من ضمن تقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#q#
تصنف تقارير الأنشطة من ضمن تقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#q#
تصنف التقارير النهائية من ضمن التقارير . . . . 
3
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
من حيث توقيتها 
من حيث تكرارها



#q#
تصنف التقارير المالية والمحاسبية من ضمن التقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#q#
تصنف التقارير الداخلية من ضمن التقارير . . . . 
2
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#q#
يصنف التقرير النصفي من ضمن التقارير . . . . 
3
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها

#qg#
#matching#
#qt#

#q#
الرصد
1
عملية مستمرة من جمع وتحليل البيانات ومقارنتها مع ما هو مخطط ومتوقع،لمعرفة مدي كفاءة أداء المشروع أو البرنامج اعتمادا على قياس مؤشرات محددة، ويستمر الرصد طوال فترة تنفيذ المشروع




#q#
التقييم
1
تقدير منهجي موضوعي لتصميم وتنفيذ ونتائج مشروع أو برنامج، ويتم تنفيذه عند نقط زمنية محددة مثل منتصف المدة وختام المشروع




#q#
البيانات الأولية
1
تجمع مباشرة من قبل المؤسسة من خلال المسوحات أو المشاهدة المباشرة والمقابلات




#q#
البيانات الثانوية
1
تستمد من بيانات سبق جمعها من قبل جهة أخري




#q#
المقيم الخارجي
1
شخص قادر علي رؤية البرنامج بنظرة جديدة باعتباره غير مشارك فيه




#q#
المقيم الداخلي
1
شخص من داخل البرنامج أو ممن يعرفون البرنامج جيدا يعرف فعليا اتجاه عمل البرنامج وكذلك أهدافه ومشاكله ونقاط ضعفه




#q#
خريطة للموارد والخدمات والفرص
1
تستخدم للحصول على معلومات عن الموارد والخدمات المتاحة في المجتمع وتشمل الموارد، الخدمات، الأوضاع الاجتماعية، الاقتصادية، السكانية والجغرافية عن المنطقة التي يعيش فيها المجتمع





#q#
الخريطة الاجتماعية
1
تستخدم في جمع وتحليل المعلومات المتعلقة بأفراد المجتمع وهي من الطرق ذات المردود الجيد لأن نتائجها تعتبر مدخل لتوضيح التدرج حسب الثروة، حيث تستخدم للحصول على البيانات المتعلقة بطبيعة المساكن والسكان والمهن التي يمارسها أفراد المجتمع




#q#
التقرير الأسبوعي
1
يوضح أهم الأنشطة التي يتم تنفيذها في المؤسسة خلال الأسبوع وتكون تفصيلية مثل تقارير دوائر وأقسام المؤسسة الإنتاجية




#q#
التقرير الربعي
1
يوجز أنشطة المؤسسة خلال فترة ثلاث شهور ويعكس في طياته الإنجازات والأداء والمعوقات




#q#
تقارير دورية
1
يتم إصدارها بشكل متكرر ضمن فترات زمنية محددة




#q#
تقارير أولية
1
تقارير تقدم عند بدء المشروع أو النشاط أو المهمة وتتضمن معلومات عن الطاقم وخطة ومنهجية العمل




#q#
تقارير مرحلية
1
تقارير تقدم بفترة تنفيذ المشروع وقبل الانتهاء منه وتتضمن معلومات وبيانات فنية ومالية حول الأنشطة المنفذة وخطة العمل والمعيقات التي تواجه عملية التنفيذ




#q#
تقارير نهائية
1
تقارير تقدم بنهاية المشروع وتعرض سردا تفصيليا (ماليا وفنيا) عن الأنشطة المنفذة خلال فترة المشروع




#q#
تقارير الأنشطة
1
يتم التركيز بهذا النوع من التقارير على الأنشطة من حيث عناصرها وآليات تنفيذها والمعيقات في سبيل القيام بها




#q#
المشروع
1
مشكلة أو حاجة معينة يتم تحديدها ضمن إطار منظم وتتضمن الاستثمار الأمثل للموارد في ظل وجود أهداف محددة وندرة في الموارد




#q#
البرنامج
1
يتكون من مجموعة مشاريع مبنية ضمن خطة واضحة المعالم ومشتركة  مع بعضها البعض في (جانب أو أكثر )موضوعيا، مكانيا، سكانيا، تنظيميا




#q#
النشاط
1
جزء من المشروع يتمثل في الإجراءات التي تحقق أهداف المشروع




#q#
دراسة الجدوى
1
تحليل لعناصر المشروعات الاقتصادية لتقرير الاستمرار فيه أو إلغاء الفكرة




#q#
الإطار المنطقي
1
وصف لكيفية استخدام الموارد (المدخلات) من خلال تنفيذ إجراءات وأنشطة للحصول على مجموعه من النتائج




#q#
تحليل المخاطر
1
تحديد كل العوامل التي يمكن أن تنشأ وتعترض المشروع وتؤثر سلبا على تنفيذه ومعدلات نجاحه




#q#
تحليل الوضع القائم
1
تحديد مدي احتياج الفئات المستهدفة للمشروع ومكوناته وأوليات هذه الاحتياجات، وتحديد الاحتياجات ذات الأولوية الأعلى




#q#
المؤشرات
1
متغيرات كمية أو نوعية توفر وسيلة موثقة لقياس الأداء أو الإنجاز

`;

const getImage = (text: string): [boolean, string, string] => {
    let [, a, b] = /^!\[(.*)\]\((.*)\)$/.exec(text) || [];
    return [!!b, a, b];
};
const a = q.split('#q#').map((q, i): MultiChoiceQuestion => {
    let _answers = q
            .trim()
            .split('\n')
            .filter((a) => a.trim().length > 0),
        questionText = _answers.shift() || 'failed to parse question',
        ans = Number(_answers.shift()?.trim()),
        [hasImage, imageAlt, image] = getImage(_answers[0]);
    if (hasImage) _answers.shift();

    const answers: Answer[] = _answers.map(
        (a, ai): Answer => ({
            id: uuid(),
            value: a,
            correct: ai + 1 === ans,
        })
    );

    return multiChoiceQuestion({
        questionText,
        answerGroup: answers,
        image,
        imageAlt,
    });
});

const ProjEval1 = parseTest('تقييم مشروعات — 1', q);
export default ProjEval1;
