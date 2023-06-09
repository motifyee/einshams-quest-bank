import { v4 as uuid } from 'uuid';
import { multiChoiceQuestion, parseTest } from './data';

export const q = `

#multichoice#
#qt#
عرف . . . . الإرشاد الزراعي بأنه جهاز تعليمي غير مدرسي يتعلم فيه الكبار والشباب بالممارسة لمواجهة احتياجاتهم وتسهيل حل مشكلاتهم
1
كيلس وهيرن
ناب
بيراد فيلد
شانج


#q#
الأهداف التي يمكن عن طريقها الوصول إلى الأهداف العامة فمثلاً هدف رفع الكفاءة الإنتاجية النباتية يتطلب رفع إنتاجية المحاصيل المختلفة
2
الأهداف الأساسية الشاملة
الأهداف التنفيذية
الأهداف العامة
الأهداف التأكيدية


#q#
عبارة عن أهداف محددة تهتم بالنواحي الاقتصادية والاجتماعية والأخلاقية الخاصة بالسكان الريفيين، ولكنها ترتبط بشكل مباشر بالإرشاد الزراعي
3
الأهداف الأساسية الشاملة
الأهداف التنفيذية
الأهداف العامة
الأهداف التأكيدية


#q#
تعتبر خصائص الأهداف الإرشادية كل مما يلي ما عدا
4
واضحة المعالم ومحددة
مشتركة البناء
تتوافق مع نظام المجتمع
كسب ثقه جمهور المسترشدين


#q#
من مبادئ الإرشاد الزراعي كل ما يلي ما عدا
1
تطبيق المبادئ والأسس
وضع الأهداف الإرشادية المناسبة
البدء في العمل مع الزراع
مبدأ لا مركزيه الإدارة


#q#
أحد فروع المعرفة الذي يهتم بتنمية الخبرات والمعارف وقدرات المرأة الريفية هو
1
الاقتصاد المنزلي
علم الاقتصاد الزراعي
علم البيئة
علم الاجتماع الريفي


#q#
يساعد المرشد الزراعي على فهم الجماعات والعوامل التي تؤثر عليها وتدفعها الى العمل الفعال من خلال الطرق الإرشادية
4
علم الاقتصاد الزراعي
الاقتصاد المنزلي
علم البيئة
علم النفس


#q#
هي إرسال رسالة إلى المرسل تفيد استلام رسالته وفهمها
4
الاتصال
المستقبل
قناة الاتصال
التغذية الراجعة


#q#
كل مما يلي من أدوار الإرشاد الزراعي ما عدا
2
المساهمة في تنميه الموارد البشرية
البدء في العمل مع الزراع
توعيه المرأة الريفي ة
نشر وتبني المبتكرات


#q#
	يرتبط الاتصال . . . . باستخدام الأفراد مجموعة من الحركات
3
الاتصال اللفظي
مهارة الاستماع
الاتصال الغير اللفظي
مهارة الاتصال الكتابي


#q#
تعتمد مهارة . . . . علي نقل الرسالة بواسطة استخدام الكلمات مشافهة من قبل المرسل
1
مهارة التحدث
مهارة الاستماع
مهارة القرأه
نبرات الصوت


#q#
يعتمد الاتصال غير اللفظي على
4
مهارة الاتصال الكتابي
مهارة الاستماع
مهارة القرأه
نبرات الصوت




#q#
العوامل المؤثرة في الاتصال هي
4
مهارة التحدث
مهارة الاستماع
مهارة الاتصال الكتابي
الخبرة المشتركة


#q#
يقصد ب . . . . تقارب خبرات المرسل والمستقبل في موضوع الحديث
2
الكفاية اللغوية
الخبرة المشتركة
الكفاية الاتصالية
الضجة والتشويش


#q#
هي الظروف المادية والتقنية المحيطة بالموقف الاتصالي
1
التشويش
الكفاية الاتصالية
الخبرة المشتركة
الكفاية اللغوية


#q#
يقصد ب . . . . الموقف النفسي أو الحالة الشعورية التي يشعر بها كل من المرسل والمستقبل اتجاه بعضها بناء على خبرة سابقة
1
الافتراضات السابقة
الكفاية اللغوية
الخبرة المشتركة
الكفاية الاتصالية


#q#
يُعرف الذكاء . . . . أنه القدرة على معرفة الذات والتواصل معها.
3
الذكاء اللغوي
الذكاء الاجتماعي
الذكاء الذاتي
الذكاء الوجداني


#q#
هي المنطقة التي يعرفها الفرد على ذاته ويعرفها الآخرين عنه 
1
المنطقة المكشوفة
منطقة الأسرار
المنطقة المظلمة
المنطقة العمياء




#q#
من خصائص نمط الشخصية مدعي المعرفة أنه
1
يحتقر الآخرين
يشكوك إلي الآخرين
يقضي زمنا طويلا في التحدث
يفتقد إلي الثقة بالنفس


#q#
من صفات فريق العمل الفعال كل مما يلي ما عدا
4
تبادل المعلومات بين أعضاء الفريق
التمتع بدافعية عالية بالأداء الجاد
المساعدة والدفاع عن أعضاء الفريق
يعاملون الأخرين بتعا ل


#q#
هي ما تستطع بمفردها أن تنتقل وتوصل الرسالة الإرشادية
1
الطريقة الإرشادية
جميع ما سبق
المعينة الإرشادية
غير ذلك


#q#
هي تلك المعينات التي تعتمد على حاسة البصر في نقل، وتوضيح، وتفسير المعلومات، والأفكار.
1
المعينات البصرية
المعينات السمعية والبصرية
المعينات السمعية
غير ذالك


#q#
من طرق الاتصال بالجماعات
1
المسابقات
الملصقات
المتاحف
المعارض


#q#
تعتبر . . . . من طرق الاتصال بالأفراد
1
الزيارات الحقلية
المحاضرة
الندوة
الحلقة الدراسية




#q#
من مكونات الإرشاد الإلكتروني
3
الجانب المادي
الجانب البشري
أ، ب معا
غير ذلك


#q#
كل مما يلي من مواصفات الإرشاد الإلكتروني ما عدا
4
التأهل العالمي والمستمر
يعتمد المرشد علي استخدام التقنيات الحديثة
حصول المزارع علي المعلومات في أي وقت
البنيه التحتية للتنظيمات الإرشادية


#q#
من العوامل المؤثرة على استخدام الإرشاد الإلكتروني
3
رفع كفاءة المرشد 
الشعور بالارتياح لدى المزارع
نوع التكنولوجيا المستخدمة
 الاستفادة من عنصر الوقت


#q#
الإرشاد الإلكتروني أهمية كبيرة تتمثل في
3
يعتمد المرشد على استخدام تقنيات الاتصال الحديثة
يتعلم المزارع عن طريق النشاط الذاتي والممارسة
يكون لها السبق في التنمية
 يسود في الدول المتقدمة


#q#
كل مما يلي من فوائد الإرشاد الإلكتروني ما عدا
4
مساعدة الزراع علي المشاركة
إمكانية الاتصال مع القيادات المحلية
الاستفادة من عنصر الوقت
التأهيل العالي والمستمر للمرشد الزراعي


#q#
يقدم الإرشاد . . . . نوع جديد من الثقافة وهي الثقافة الرقمية
1
الإرشاد الإلكتروني
الإرشاد التقليدي
 أ، ب معا
غير ذلك




#q#
كل مما يلي من عيوب الإرشاد الزراعي الإلكتروني ما عدا
1
التكاليف المادية المنخفضة
يتطلب بنية تحتية اتصاليه
ضياع حقوق النشر والملكية الفكرية
يحتاج لمراقبة المسترشدين أثناء القيام بالأنشطة التعليمية


#q#
هو انتقال المستحدثات الزراعية المناسبة والصالحة للتطبيق في الريف من المراكز البحثية ووصولها للريفيين في وقت زمني محدد
1
الانتشار
التبني
المستحدث
الانتباه


#q#
من صفات الفكرة المستحدثة
2
يتطلب بنية تحتية اتصاليه
انسجام الفكرة مع القيم السائدة
يكون لها السبق في التنمية
يسود في الدول المتقدمة


#q#
هي الدرجة التي يتم فيها تجريب المستحدث على نطاق ضيق
3
الميزة النسبية
انسجام الفكرة مع القيم السائدة
القابلية للتقسيم
درجة تعقيد الفكرة المستحدثة


#q#
هي الدرجة التي تتفوق بها الفكرة المستحدثة عن غيرها عن الأفكار السابقة .
1
الميزة النسبية
انسجام الفكرة مع القيم السائدة
القابلية للتقسيم
درجة تعقيد الفكرة المستحدثة


#q#
ثالث مراحل عملية التبني
4
مرحلة الوعي
مرحلة التجريب
مرحلة الاهتمام
مرحلة التقييم




#q#
مبدأ . . . . يضم جميع جوانب المشروع أو المجتمع أو الأنشطة
2
الواقعية
الشمول
التكامل
ترتيب الأولويات


#q#
مبدأ . . . . يقوم على إعادة ترتيب الحاجات والمشكلات
4
الواقعية
الشمول
التكامل
ترتيب الأولويات


#q#
من مزايا البرنامج الإرشادي المكتوب
4
يراعي اهتمامات المسترشدين
يهيئ الجو لاكتشاف القدرات
تحديد الحاجات والمشكلات
يساعد المؤسسات الاخرى علي تفهم مشكلات المنطقة


#q#
من خصائص البرنامج الإرشادي الجيد
2
يؤدي الى معرفة الاحتياجات التدريبية للعاملين
يهيئ الجو لاكتشاف القدرات
يؤدي الى توحد في الفهم بين كل العاملين والمشتركين
توجيه العاملين على تنفيذ ما ورد به من أهداف وإجراءات


#q#
البيانات . . . . توضح مدى استخدام الزراع للأساليب والأفكار الزراعية الجديدة
2
البيانات الاجتماعية
البيانات التكنولوجية
البيانات الاقتصادية
البيانات التشغيلية


#q#
تقوم . . . . على ترجمة بيانات الوضع الراهن إلى معلومات قابلة الاستعمال والاستفادة منها
1
تحليل الموقف
جمع البيانات
تحديد الحاجات والمشكلات
تحديد الأهداف




#q#
عبارة عن مقارنة بين وضعين هما وضع سابق ووضع راهن ويتم قياس التقدم الحادث في سلوك الزراع وأفكارهم
3
وضع خطة العمل
إعادة النظر في البرنامج
 تقدير مدى التقدم الحادث
 تنفيذ خطة العمل


#q#
هي عبارة عن الخطوة الأخيرة في العمل في البرامج الإرشادية
3
وضع خطة العمل
 تقدير مدي التقدم الحادث
 إعادة النظر في البرنامج
 تنفيذ خطة العمل


#q#
تتضمن خطة العمل تنفيذ البرنامج كل مما يلي ما عدا
4
المشاكل المراد معالجتها
 وصف موجز لنوع العمل
 الأهداف المراد تحقيقها 
تقييم الفرد للأخرين


#q#
يمكن تقسيم التقييم وفقا للوقت إلى
1
التقييم القبلي
تقييم الفرد
التقييم الذاتي
تقييم المجموعة


#q#
التقييم . . . . هو الذي يحدث أثناء تنفيذ وتطبيق البرنامج
1
التقييم البنائي
 التقييم الشخصي
 التقييم الأولي
 التقييم النهائي


#q#
هو ذلك النوع من التقييم الذي يتم فيه تحديد الاحتياجات التعليمية وتحديد المستوي الذي يمكن أن تبدأ منه عملية التعلم
1
التقييم الأولي
التقييم الشخصي
التقييم البنائي
التقييم النهائي




#q#
هو التقييم الذي يهتم بقياس الأهداف العامة
4
التقييم الأولي
التقييم الشخصي
التقييم البنائي
التقييم النهائي


#q#
تشمل خطوات عملية التقييم الإرشادي
1
تحديد المشكلة
تقييم الفرد للأخرين
وصف موجز لنوع العمل
تحديد نقاط الضعف واقتراح التحسينات


#q#
تعتبر . . . . أقل المستويات التعليمية دقة للتقييم الإرشاد ي
1
الملاحظة اليومية العرضية
دراسة الحالة
الملاحظة المنتظمة
الدراسات الإرشادية


#q#
يسمى بالتقييم المتزامن، والتقييم التراكمي اللاحق ، والتقييم التكويني
2
تقييم ذاتي
تقييم نهائي
تقييم قبلي
تقييم مستمر


#q#
 تجمع بين أكثر من نوع واحد من طرق معاملة الرسالة
1
طرق مختلطة
طرق إيضاحيه
طرق كتابيه
طرق كلامية


#q#
كل مما يلي من مجالات التقييم الإرشادي ما عدا
4
تقييم الجهاز الإرشادي 
تقييم تخطيط البرنامج الإرشادي
 تقييم الطرق والوسائل 
تقييم الفرد للأخرين




#q#
يمكن تقسيم التقييم وفقا للقائم بعملية التقييم
1
تقييم ذاتي
 تقييم نهائي
 تقييم قبلي
 تقييم مستمر


#q#
يمكن تقسيم التقييم وفقا للغرض إلي
4
تقييم مستمر 
تقييم قبلي
 تقييم بعدي 
تقييم نهائي او شخصي


#q#
يفضل الاعتماد على مقياس . . . . في حالة قصور ميزانية الإرشاد الزراعي
2
معدل الاتصال 
التكلفة النسبية للتبني 
معدل التبني
 جميع ما سبق


#q#
التحدث بلغة متخصصه لا يتقنها المرسل أو المستقبل
2
الغموض اللغوي
 الغموض التقني
 الغموض الثقافي
 غموض المعني


#q#
كل مما يلي من عوائق وصول المعنى ما عدا
3
الغموض 
عدم الملائمة
 حال المستقبل 
الأحكام المسبقة


#q#
من عوائق وصول المعنى من جانب المرسل
4
الأحكام المسبقة 
الاستدلال الزائف 
التعميم الخاطئ 
الاستطراد




#q#
  يهدف إلى الكشف عن مواطن القوة والضعف أثناء وبعد الأداء
4
تقدير الذات 
تعزيز الذات
 لوم الذات 
نقد الذات


#q#
القدرة على ملاحظة الفروق بين الأشخاص في أمزجتهم وطبائعهم ودوافعهم ومقاصدهم
2
الذكاء العاطفي 
الذكاء الاجتماعي 
الذكاء اللغوي 
الذكاء الذاتي


#q#
القدرة على تنظيم حالة المرء النفسية ومنع الآسي أو الألم من شل القدرة على التفكير ، والقدرة على التعاطف والشعور بالأمل
1
الذكاء العاطفي 
الذكاء الاجتماعي 
الذكاء اللغوي 
الذكاء الذاتي


#q#
معلومات لا يعرفها الفرد عن ذاته ، ولكنها ظاهرة للآخرين
1
المنطقة العمياء
 منطقة الأسرار
 المنطقة المكشوفة 
المنطقة المجهولة


#q#
هي منطقة غير معروفة للفرد ولا للآخرين ، وتمثل جميع أبعاد شخصياتنا
4
المنطقة العمياء 
منطقة الأسرار 
المنطقة المكشوفة 
المنطقة المجهولة


#q#
كل مما يلي من تصنيف نمط الإدراك ما عدا
4
السمعي 
البصري 
الحسي 
الكتابي




#q#
كل مما يلي من تصنيف السلوك التفاعلي ما عدا . . . . 
4
العنيد 
الثرثار 
مدعي المعرفة 
العصبي


#q#
عملية تتم بين طرفين أو أكثر ويتم من خلالها تبادل الآراء والأفكار حول موضوع معين دون وجود عوائق
1
الحوار 
الاتصال 
الاستماع 
الاستعلاء


#q#
يحاول أن يتصيد سلبيات المتحدث من خصائص
2
العنيد 
المتعالي 
مدعي المعرفة 
الباحث عن الأخطاء


`;

const AgriGuiding1 = parseTest('إرشاد زراعي', q);
export default AgriGuiding1;
