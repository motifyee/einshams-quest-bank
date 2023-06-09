import { v4 as uuid } from 'uuid';
import { multiChoiceQuestion, parseTest } from './data';

const q = `
#multichoice#
#qt#

المسار أو المسلك الذي تمر من خلاله السلع والمنتجات الى المستهلك أو المستخدم النهائي هو
2
وكلاء التصدير
المفهوم العام للقنوات التسويقية في النشاط التصديري
المهام الرئيسية للمصدر في النشاط التصديرية
السعر المرتفع للسلعة


#q#

من المهام الرئيسية للمصدر في النشاط التصديرية
3
عدم التعرف على القنوات التسويقية المختلفة
عدم فحص البدائل الممكنة للقنوات التسويقية لمنتجاته
اختيار القنوات الأكثر ملائمه
عدم دراسة البدائل الممكنة للقنوات التسويقية لمنتجاته


#q#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ومنها
1
تراخيص الإنتاج
وكلاء التصدي
بيوت الاستيراد
تجار الجملة


#q#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق مباشره ومنها
2
تراخيص الإنتاج
الوسطاء التجاريون
عقود الإدارة
حقوق الامتياز


#q#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ومنها
2
المشترين المصنعين
امتلاك الشركات
شركات الاستيراد
الموزعون


#q#

كلما كانت دورة البيع للمنتج بطيئة كان المسلك التسويقي
2
أطول
أقصر
أبطئ
ليس هناك علاقة




#q#

من العوامل المؤثرة على طول أو قصر القناة التسويقية
2
التعرف على القنوات التسويقية المختلفة
قدرة المنتج على البقاء سليما
دراسة البدائل الممكنة للقنوات التسويقية


#q#

هناك بعض العوامل التي تجعل البيع في الأسواق الخارجية يختلف عن البيع في الأسواق المحلية
1
اختلاف الأذواق وأنماط الاستهلاك
عدم اختلاف نظم البيع
اللغة واحده في كل الأسواق
ارتفاع درجة المخاطرة وانخفاض التكاليف التسويقية


#q#

من المهام الرئيسية للمصدر في النشاط التصديرية
1
فحص ودراسة البدائل الممكنة للقنوات التسويقية 
اختيار القناة الأقل حجما
عدم التعرف على القنوات التسويقية المختلفة
ليس مما سبق


#q#

في نموذج قنوات التسويق النمطي يوجد الموزع وهو بدوره يشتري من المصدر ثم يبيع الموزع الى
2
عدد محدود من تجار التجزئة
عدد محدود من تجار الجملة
المستهلك النهائي
المصدر


#q#

في نموذج قنوات التسويق النمطي يوجد تجار التجزئة وهم بدورهم يشت روا من تجار الجملة ثم يبيعوا الى
2
عدد محدود من تجار التجزئة
عدد محدود من تجار الجملة
المستهلك النهائي
المصدر


#q#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق مباشره ومنها
3
عقود التصنيع
عقود الإدارة
تجار الجملة
حقوق الامتياز


#q#

من العوامل المؤثرة على طول أو قصر القناة التسويقية الخدمات المطلوبة للمنتج، فمثلا وجود خدمات ما بعد البيع بدرجة عالية، كان المسلك التسويقي
2
طويل
قصير
لا يتأثر
أبطئ



#q#

من العوامل المؤثرة على طول أو قصر القناة التسويقية المتطلبات والمعاملات الفنية للمنتج، فكلما كانت معقده، كان المسلك التسويقي
2
طويل
قصير
ليس هناك علاقة
أبطئ


#q#

من العوامل المؤثرة على طول أو قصر القناة التسويقية قدره المنتج على البقاء سليما، فكلما كان هناك سرعه تلف للمنتج، كان المسلك التسويقي
1
طويل
قصير
لا يتأثر
أبطئ


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق هو عباره عن اتفاق بين شركتين تقوم إحداها بتنظيم بعض أو كل أنشطه الشركة الأخرى
3
المشروعات المشتركة
حقوق الامتياز
عقود الإدارة
تراخيص الإنتاج


#q#

عقود الإدارة من احدى طرق التسويق للأسواق الخارجية بطريقه غير مباشره بالنسبة للاستثمارات المحددة التي تتطلبها، بانها تحقق عوائد
1
كبيره
صغيره
لا يوجد تأثير
ليس مما سبق


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق هو شخص اعتباري أو طبيعي يقوم باسم المصدر، ونيابة عنه بالسعي لتوزيع السلعة في الأسواق الخارجية
2
الموزع
الوكيل التصديري
تجار الجملة
تجار التجزئة


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق يكون بموجبها يمكن بقدر من السرعة والسهولة دخول الأسواق الخارجية المستهدفة
1
امتلاك الشركات من الخارج
تراخيص الإنتاج
عقود الإدارة
عقود التصنيع





#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق تتميز بتغلبها على العقبات الجمركية ومعوقات التصدير الى السوق الخارجي
4
امتلاك الشركات من الخارج
تراخيص الإنتاج
عقود الإدارة
عقود التصنيع


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره، وتتميز هذه الطريقة بان يقوم المنتج المصدر بتنفيذ البرنامج التصدير ية الخاص به بالكامل
2
التصدير المباشر بواسطة الوسطاء
التصدير المباشر بدون وسطاء
عقود التصنيع
عقود الإدارة


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق فيها تمارس التجارة الخارجية نشاط عامة استيرادا أو تصديرا وقد تقوم بشراء البضائع كعميل مباشر مع المصدر ثم تقوم ببيعها وتوزيعها في الأسواق
3
وكلاء التصدير
تجاره الجملة
شركات الاستيراد
هيئات الشراء الحكومية


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق فيها يقومون بالشراء المباشر من المصدر مثل شركات الاستيراد بدلا من الاعتماد على الشراء من الموزعين أو المستوردين أو الوكلاء
2
شركات الاستيراد
تجار الجملة
متاجر التجزئة
المشترين المصنعين


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ، وإحدى هذه الطرق فيها تتم عمليه إنتاج المنتجات التصديريه وذالك بموجب اتفاق منح ترخيص يحصل بموجبه احد طرفي الاتفاق على الخبرة الفنية والتجارية وحق استخدام الماركة وبراءات الاختراع وذالك في مقابل مبلغ أو نسبه معينه يدفعها للطرف الأخر المانح للترخيص
2
حقوق الامتياز
تراخيص الإنتاج
عقود التصنيع
المشروعات المشتركة


#q#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق الشركات التي تشتري كميات كبيره وبشكل متكرر من السلع قد يفضلون التعامل مباشره مع المصدر وقد يتم ذالك على أساس تعاقدأو بدون تعاقد
4
شركات الاستيراد
عقود التصنيع
متاجر التجزئة
المشترين المصنعين



#q#

من أدوات التمويل السابق للشحن، تحدد الدول التي تقدم هذا النوع مثل دوله المكسيك من التمويل أسعار فائدته بما يتناسب وأسعار الفائدة التي تقدمها الدول الأخرى على مثل هذا النوع من التمويل
3
القروض
الصناديق متجددة الموارد
خطابات الاعتماد المتبادلة
جميع ما سبق


#q#

يتمثل الشكل التقليدي في الخصم التجاري في التمويل الذي يتراوح من ثلاث الى خمس سنوات وهو تمويل
4
قصير الأجل
طويل الأجل
ممتد الأجل
متوسط الأجل


#q#

تتضمن عمليه الخصم التجاري قيامه كطرف ثالث بضمان الأوراق المالية (تجاريه وكمبيالات وسندات إذنيه) بدون أيه قيود
3
المستورد
المخصم
بنك المستورد
القروض


#q#

يعد خصم الكمبيالات التي يضمنها البنك واحده من اهم أدوات التمويل . . . . بعد الشحن
1
قصير الأجل
طويل الأجل
ممتد الأجل
متوسط الأجل


#q#

من أدوات التمويل أثناء وبعد الشحن، تتمثل في قيام الجهة الممولة بتقديم القروض والتسهيلات الائتمانية الى المستوردين
3
الخصم التجاري
الصفقات المتكافئة
ائتمان المشتري الأجنبي
الشراء التبادلي


#q#

وفقا لهذه الأداة تقوم الدولة التي تتمتع بميزه نسبيه وتنافسيه في احدى القطاعات بتشجيع تدفق الاستثمار المحلي والأجنبي الى تلك القطاعات ومن ثم زيادة الصادرات من تلك القطاعات الى الأسواق العالمية
4
التمويل قبل الشحن
التخصيم
التمويل أثناء وبعد الشحن
التمويل الاستثماري للصادرات





#q#

تتمثل في قيام المُصدر بالتامين على تحصيل قيمه صادراته عند استحقاق موعد الائتمان الممنوح أثناء عمليه التصدير
1
تأمين ائتمان للتصدير
ضمان الصادرات
A, B
حفظ الصادرات


#q#

يعد فشل أو رفض المستورد أن يتقيد باي شرط من شروط عقد التصدير إذا كان ذالك المستورد جهة أو مؤسسه حكومية سبق التعامل معها من
2
مخاطر المستورد المغطاة
مخاطر الدولة المستوردة المغطاة
ضمان الصادرات
حفظ الصادرات


#q#

نظرا لما يواجهه مديري التصدير بالأسواق العالمية من صعوبة الحصول على معلومات صحيحه ودقيقه وحديثه عن الشركات الأجنبية، ولتقليل مخاطر عدم السداد من قبل المستوردين الأجانب فيتم طلب
2
تأمين ائتمان للتصدير
ضمان الصادرات
A, B
حفظ الصادرات


#q#

يقوم المصدرون في هذا الشكل من أشكال التمويل بالتعاون فيما بينهم في مجال تسويق صادراتهم مما يسهم في زيادة فرص التصدير لتلك الأسواق
3
تأمين ائتمان للتصدير
ضمان الصادرات
تمويل عمليات تسويق الصادرات
تمويل عمليات البيع


#q#

يعتبر قيام الحكومة بأنشاء مؤسسات متخصصة لتمويل الصادرات دون توفير الموارد المالية الكافية للقيام بهذا الدور
1
من المشكلات التي تؤثر سلبا على الصادرات المصرية
من مميزات الصادرات المصرية
من أدوات التمويل قبل الشحن
من أدوات التمويل أثناء وبعد الشحن


#q#

يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، وتم إنشاؤه بموجب القانون رقم 1983 بغرض تشجيع الصادرات المصرية والمعاونة في قيام قطاع تصديري زراعي وصناعي وتجاري ومصرفي
2
الجهاز المصرفي
البنك المصري لتنميه الصادرات
الشركة المصرية لضمان الصادرات
المؤسسة العربية لضمان الاستثمار





#q#

يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، وقام البنك المصري لتنميه الصادرات بإنشائها لضمان الصادرات بموجب القانون رقم 21 لسنه 1992 ، وذالك من اجل تنفيذ نظام تامين لضمان الصادرات ضد المخاطر التجارية وغير التجارية
3
الجهاز المصرفي
البنك المصري لتنميه الصادرات
الشركة المصرية لضمان الصادرات
المؤسسة العربية لضمان الاستثما ر


#q#

رفض المشتري أو امتناعه عن استلام البضاعة المشحونة رغم قيام المصدر بالوفاء بجميع التزاماته تجاه المشتري من المخاطر المغطاة
1
التجارية
غير التجارية
A, B
المخاطر المغطاة غير التجارية


#q#

تعمل المؤسسة العربية لضمان الاستثمار على توفير خدمات الضمان ضد المخاطر غير التجارية ومن هذه المخاطر المغطاة غير التجارية
2
عدم الغاء سلطات الدولةالمستوردة لترخيص الاستيراد
استيلاء سلطات الدولة المستوردة أو دولة العبور العربي على السلع المشحونة أو حجزها أو مصادرتها
عدم عجز المشتري أو تأخره في سداد المبالغ المستحقة للمصدر
إفلاس المشتري


#q#

يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، هو مؤسسه ماليه عربيه مشتركه تهدف للإسهام في تنميه التجارة العربية وقد أنشئ في عام 1989 ويبلغ راس المال المدفوع 500 مليون دولار أمريكي
3
الجهاز المصرفي
البنك المصري لتنميه الصادرا ت
برنامج تمويل التجارة العربية
المؤسسة العربية لضمان الاستثما


#q#

من أدوات تمويل الصادرات المصرية أثناء وبعد الشحن، تعمل هذه الأداة في قطاعات رئيسيه مثل القطاع الزراعي والغذائي والمجمدات ، الصناعات الدوائية ، الصناعات الهندسية والنسيجية تم التركيز عليها
4
اليات اعاده الخصم
اليه التخصيم
اليه ائتمان المشتري الأجنبي
إدخال خدمه الخصم التجاري للمصدر المصري


#q#

من أدوات تمويل الصادرات المصرية أثناء وبعد الشحن، يساعد على حل مشكله التدفق النقدي التي قد يعاني منها يعض المصدرين المصريين
4
توفير راس المال العامل
برامج الصناديق المتجددة
اليات اعاده الخصم
اليه التخصيم





#q#

قامت وزاره التجارة الخارجية بوضع القواعد ومنها : الخصائص المالية للصفقة ، نوع السلعة التي تغطيها، وأجال التغطية وتكاليفها التي تعمل وفقال
3
اليات اعاده الخصم
اليه التخصيم
اليه ائتمان المشتري الأجنبي
إدخال خدمه الخصم التجاري للمصدر المصري


#q#

تعد سندات التصدير من أدوات التمويل الاستثماري بمصر، حيث يقوم البنك الأهلي بطرح سندات لتمويل الصادرات طويله الأجل من
4
3:1 سنوات
3:1 شهور
10:7 شهور
10:7 سنوات

#q#

من أدوات التمويل الاستثماري بمصر، يتم ذالك من خلال حصول بنك تنميه الصادرات على قروض من بنوك مثل بنك التنمية الأفريقي وكذالك بنك الصادرات الأمريكي الياباني لتمويل الصادرات المصرية
4
اليه التخصيم
الية ائتمان المشتري الأجنبي
سندات التصدير
الحصول على تمويل دولاري طويل الأجل


#q#

تتولى الحكومة تدبير مبالغ لمواجهه جزء من أعباء الشركات لضمان مخاطر الصادرات في دعم أقساط الضمان للدول متوسطه المخاطر لتصبح 1% بدلا من
1
1.5%
2%
1%
0.5%

#q#

من أدوات تامين وضمان الصادرات، حيث تم إعداد وثيقة تقوم بتحمل الدولة لنفقات الاشتراك بهذه الأداة بنسبه تتراوح من 50% الى 75% من التكلفة الكلية في حاله إخفاق المٌصدر في الحصول على تعاقدات فعليه
2
سندات التصدير
ضمان المعارض
ضمان مخاطر الصادرات
اليه التخصيم


#q#

من أدوات تمويل الصادرات المصرية قبل الشحن، ومن امثلتها توقيع وزاره الخارجية بروتوكول التعاون مع البنك الأهلي المصري في أبريل عام 2004
2
توفير راس المال العامل
برامج الصناديق المتجددة
اليات اعاده الخصم
اليات الخصم




#q#

تشير العديد من الدراسات الى انه يمكن النظر الى مفهوم الميزة التنافسية
2
مستويان
مستويات ثلاث
مستويات خمس
مستويات ست


#q#

يمكن النظر الى مفهوم الميزة التنافسية لأكثر من مستوى وهذه المستويات هي
4
الدولة والصناعة فقط
الشركة والدولة فقط
الصناعة والشركة فقط
الدولة والصناعة والشركة


#q#

تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي يرتكز الاهتمام حول انعكاس الميزة التنافسية على الرفاهية العامة للدول
1
الميزة التنافسية على مستوى الدولة
الميزة التنافسية على مستوى الصناعة
الميزة التنافسية على مستوى الشركة
الميزة التنافسية على مستوى الفرد الواحد


#q#

تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي قد تتمتع الدولة بميزه تنافسيه عالميه في صناعه معينه أو في بعض الصناعات
2
الميزة التنافسية على مستوى الدولة
الميزة التنافسية على مستوى الصناعة
الميزة التنافسية على مستوى الشركة
الميزة التنافسية على مستوى الفرد الواحد


#q#

تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي يتم التنافس في السوق العالمي يقوم فيما بين الشركات
3
مستوى الدولة
مستوى الصناعة
الميزة التنافسية على مستوى الشركة
الميزة التنافسية على مستوى الفرد الواحد


#q#

من مؤشرات الميزة التنافسية
4
النصيب السوقي في الصادرات
معدل نمو الصادرات
الطلب المحلي
خفة الحركة والاعتمادية والتعليم


#q#

من محددات الميزة التنافسية
1
راس المال البشري ومواصفات الجودة السلعية
عدم تجهيز البيئة التحتية الملائمة لنشاط التصدير
عدم المقدرة على متابعه متطلبات التصدير
عدم تجهيز المقومات الضرورية لنشاط التصدير


#q#

من محددات الميزة التنافسية
3
خفة الحركة والتشابكات
الاعتمادية والتعليم
الطلب المحلي والمقدرة التكنولوجية
معدل نمو الصادرات والواردات


#q#

هناك مقاييس لقياس درجة التنافسية ومن أمثلتها
1
النصيب السوقي للصادرات
خفة الحركة
الخطوط العامة لمداخل التنافسية في الدول المتقدمة
معدل نمو الواردات


#q#

من مؤشرات الميزة التنافسية وهو يعني قدرة المؤسسات والعاملين على استيعاب المعلومات والتقانات الجديدة
3
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من مؤشرات الميزة التنافسية وهي تعني قدرة المؤسسات على القيام بالتزامات متواصلة وتلبيتها مع مرور الزمن في مواجهة عوامل المخاطرة واللايقين
2
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من مؤشرات الميزة التنافسية وهي تعني مختلف أشكال الارتباط أو التواصل القائم بين الأسواق المحلية والدولية ومصادر المعلومات والتكنولوجيا
4
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من مؤشرات الميزة التنافسية وهي قدرة المؤسسات والعاملين على الاستجابة لمؤشرات السوق كما يعكسها الأداء الاقتصادي والتصديري
1
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من مؤشرات الميزة التنافسية ويشمل على نسبة الأنفاق على الدفاع القومي الى الموازنة الكلية
3
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من مؤشرات الميزة التنافسية ويشمل نسبة عجز الموازنة مقارنة بالناتج المحلي
2
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من مؤشرات الميزة التنافسية ويشمل عدد أجهزه التليفزيون والجرائد اليومية لكل ألف نسمه
4
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من مؤشرات الميزة التنافسية ويشمل متوسط معدل نمو الدخل للفرد ومتوسط معدل نمو الصادرات والواردا ت
1
خفه الحركة
الاعتمادية
التعليم
التشابكات


#q#

من محددات الميزة التنافسية ويقصد به العمالة المدربة الماهرة المتخصصة عالية الكفاءة والكفاءات العالية من العلماء والخبراء والمهندسين والفنيين
1
رأس المال البشري
الطلب المحلي
القدرة التكنولوجية
مواصفات الجودة السلعية


#q#

من المقاييس المستخدمة لقياس درجة التنافسية وهو يعبر عن التغير النسبي بالزيادة أو النقص في كميه أو قيمه الصادرات للدولة عامه
2
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة التنافسية الظاهرة
مؤشر التنافسية الظاهرة لفولراث


#q#

من المقاييس المستخدمة لقياس درجة التنافسية وهو يقاس بنسبه نصيب صادرات الدولة في الأسواق التصديرية
1
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة التنافسية الظاهرة
مؤشر التنافسية الظاهرة لفولراث






#q#

من المقاييس المستخدمة لقياس درجة التنافسية وهو أكثر المقاييس شمولا لكونه يأخذ في الاعتبار كلا من جانبي الصادرات والواردات معا كما يمكن تطبيقه على جانب الصادرات فقط أو الواردات فقط
4
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة التنافسية الظاهرة
مؤشر التنافسية الظاهرة لفولراث


#q#

من المقاييس المستخدمة لقياس درجة التنافسية وهو يقيس الأداء التصديري للسلعة من دوله معينه مقارنه بالأداء التصديري العام للصادرات على مستوى الدولة وأيضا للصادرات من نفس السلعة على مستوى العالم
3
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة النسبيه الظاهرة
مؤشر التنافسية الظاهرة لفولراث


#q#

من الخطوط العامة لمداخل التنافسية في الدول المتقدمة
2
الميزة التنافسية نسبيه
الميزة تنافسيه وليست نسبيه
الميزة القومية تورث
الميزة القومية لا تكتسب


#q#

من محددات الميزة التنافسية وتشتمل على المجموع الكلي للمزايا والخواص للسلعة أو الخدمة وما يقترن بها من عمليات أو معاملات كالتغليق والتعبئة وظروف النقل ومدى المطابقة لمعايير الجودة العالمية أو تلك التي تفرضه الدول المستوردة
1
مواصفات الجودة السلعية
الطلب المحلي
القدرة التكنولوجية
راس المال البشري


#q#

من محددات الميزة التنافسية وهي الوسيلة التي يتم بها تحويل الموارد الى سلع وهي تعد شرطا ضروريا لتأهيل الدولة للمنافسة في الأسواق العالمية
3
مواصفات الجودة السلعية
الطلب المحلي
القدرة التكنولوجية
راس المال البشري


#q#

يقصد به السعر المدفوع أو الوجب دفعه ثمنا لهذا المنتج من قبل المستورد ودون تحميله باي تكاليف أو رسوم أو نفقات تزيد على ما يتحمله عند البيع
2
الإغرا ق
سعر التصدير
الضرر
هامش الإغراق





#q#

يقصد بها سعر المنتج في مجرى التجارة العادي في السوق المحلية لدولة المنشأ أو التصدير
3
الإغراق
سعر التصدير
القيمة العادية
هامش الإغراق


#q#

يجوز لها تقدير القيمة العادية وفقا لتكلفه الإنتاج في دولة المنشأ مضافا اليها مبلغ مناسب من المصروفات البيعية والعمومية والإدارية وهامش ربح مناسب
1
سلطة التحقيق
الشحن البحري
التامين البحري
النقل الداخلي


#q#

CIF يعرف بانه هو مقدار الإغراق كنسبة مئوية من سعر التصدير
4
الإغراق
سعر التصدير
الضرر
هامش الإغراق


#q#

يقصد به انخفاض سعر بيع المنتح المستورد في السوق المحلي عن سعر بيع المنتج المثيل الذي تنتجه الصناعة المحلي على نفس المستوى التجاري
1
الفرق السعري
تخفيض الأسعار
الدعم
منع الأسعار المحلية من الزيادة


#q#

يقصد به انحفاض أسعار بيع المنتج المحلي نتيجة تأثير الواردات التي تباع بأسعار مغرقه( منخفضه)
2
الفرق السعري
تخفيض الأسعار  
منع الأسعار المحلية من الزيادة
الدعم


#q#

يقصد به عدم حدوث الزيادة في الأسعار التي كان من الممكن أن تحدث لولا وجود الواردات المغرقة
3
الفرق السعري
تخفيض الأسعار  
منع الأسعار المحلية من الزيادة
الدعم






#q#

يعرف بانه الأثار السلبية التي تقع على الصناعة المحلية نتيجة للممارسات الغير عادله في التجارة الدولية
3
الإغراق
سعر التصدير
الضرر
هامش الإغراق


#q#

يقسم الضرر الى
2
نوعان
ثلاثة أنواع
خمسه أنواع
نوع واحد


#q#

من أنواع الضرر، وهو يعني أن هناك ضرر وقع بالفعل على الصناعة المحلية
1
ضرر مادي
التهديد بالضرر
الإعاقة المادية
الأرباح


#q#

الضرر المادي، وهو يعني أن هناك ضرر وقع بالفعل على الصناعة المحلية ويتم بحثه من خلال
2
عنصر
ثلاثة عناصر
خمسه عناصر
سبعه عناصر


#q#

يعتبر معدل زيادة كبيره في الواردات المغرقة الى السوق المحلي مما يكشف عن احتمال حدوث زيادة كبيره في الاستيراد من
2
عوامل الضرر المادي
عوامل التهديد بالضرر
عوامل الإعاقة المادية
عوامل الدعم


#q#

من أنواع الضرر، وهي أنها تفسر على أن الواردات المغرقة تمنع قيام أو إنشاء صناعه جديده في الدولة المستوردة
3
ضرر مادي
التهديد بالضرر
الإعاقة المادية
الأرباح


#q#

يعتبر من أنواع الدعم، ويعرف بانه الدعم الذي يجب أن يمتنع الأعضاء كلية عن تقديمه
1
الدعم المحظور
الدعم القابل لاتخاذ إجراء
الدعم غير القابل لاتخاذ إجراء
الدعم المخصص للبيئة


#q#

يعرف بانه أي مساهمه ماليه مباشره أو غير مباشره مقدمه من دولة المنشأ أو من أي هيئة عامه بها من خلال برامج أو خطط وينتج عنها تحقيق فائدة للمنتج أو المصدر
2
الإغراق
الدعم
الضرر
الوقاية


#q#

تعرف بانها إمكانيه فرض تدابير ضد الزيادة غير المبررة في الواردات سوآءا بشكلها المطلق أو النسبي من الإنتاج وتسبب ضرر جسيما بالصناعة المحلية أو تهديد بحدوث ضرر جسيم
4
الإغراق
الدعم
الضرر
الوقاية


#q#

تعرف بانها زيادة مطلقه أو زيادة نسبيه بالنسبة للإنتاج المحلي وهي زيادة حدثت مؤخرا بصورة مفاجئة وكبيره وجوهريه
1
الزيادة غير المبررة
الزيادة المبررة
الضرر الخطير
الإعاقة المادية


#q#

يعرف بانه مستوى اعلى من الضرر المادي في حالات مكافحة الإغراق والإجراءات التعويضية
3
الزيادة غير المبررة
الزيادة المبررة
الضرر الخطير
الإعاقة المادية


#q#

يعرف بان السلع إذا كان سعر تصديرها الى السوق المحلي في بلد الاستيراد اقل من قيمتها العادية في بلد التصدي
1
الإغراق
الدعم
الوقاية
الضرر


#q#

يعرف بانه الأضعاف الكلي الكبير في مركز الصناعة المحلية أو التهديد بوقوعه استنادا على وقائع وليس مجرد ادعاءات أو تكهنات
3
الزيادة غير المبررة
الزيادة المبررة
الضرر الخطير
الضرر البسيط





#q#

من أنواع الدعم المحظو
3
الدعم غير المخصص
الدعم المخصص للبيئة
دعم التصدير
الدعم المخصص للبحوث والتطوير


#q#

من أنواعه الدعم ، وهو الدعم الذي لا يكون محظورا ويسبب ضررا بالصناعة المحلية لعضو أخر من أعضاء منظمه التجارة العالمية
1
الدعم القابل لاتخاذ إجراء
الدعم المحظور
الدعم غير القابل لاتخاذ إجراء
الدعم المخصص للبيئة


#q#

هو الفرق بين القيمة العادية وسعر التصدير
3
الدعم
الوقاية
مقدار الإغراق
هامش الإغراق


#q#

طبقا لاتفاق مكافحة الإغراق يجب إثبات علاقة السببية عن طريق ما يعرف بانه حدوث الضرر تزامن مع زيادة الواردات المغرقة
3
الزيادة غير المبررة
الدعم
بحث التزامن
سعر التصدير


#q#

تعرف بانها زيادة الواردات سوآءا كانت مطلقه أو نسبيه وهي زيادة نسبة الواردات الى الإنتاج أو الاستهلاك
4
تخفيض الأسعار
الفرق السعري
اثر الواردات على أسعار السلع المنتجة في السوق المحلي
أثر الواردات على اقتصاديات الصناعة المحلية بالنسبة لحجم الواردات


`;

const ITQuestions2 = parseTest('تجارة دولية — 2', q);
export default ITQuestions2;
