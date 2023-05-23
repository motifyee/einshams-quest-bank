import { v4 as uuid } from 'uuid';
import { selectionQuestion } from './data';

export const q = `

هي وسائل وأدوات غير موجودة في المجتمع أو برامج غير موجودة تصلح للمجتمع
1
البرامج الإنشائية
البرامج الإحصائية
البرامج الإصلاحية
البرامج التنفيذية


#
هي الوسائل والأدوات الموجودة الحالية والتي يجرى عليها عمليات الإصلاح
3
البرامج الإنشائية
البرامج الإحصائية
البرامج الإصلاحية
البرامج التنفيذية


#
لتحقيق الرفاهية الاقتصادية والتقدم لابد أن يحتفظ المجتمع بأكبر قدر من المعادن النفسية
1
المذهب الفكري التجارى
الاتجاه الحر
الاتجاه التعاوني
الاتجاه الحر ذو الطابع الاشتراكي



#
سبب المشاكل على الكرة الرضية هي السعي وراء الربح والبيع بسعر التكلفة (إلغاء النقود (
3
المذهب الفكري التجارى
الاتجاه الحر
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكى



#
قطاع الزراعة هو الأساس لتحقيق الرفاهية الاقتصادية، ويجب أن يكون هو القطاع الوحيد المنتج
2

المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكى



#
يرون أن تدخل الدولة في الحياة الاقتصادية يكون خيراً ونادوا بضرورة التدخل الحكومي في الأعمال والشئون الاقتصادية والأشراف على إدارة المشروعات الكبرى وخصوصا التي تميل إلى الاحتكار في مجال النشاط الفردي
4
المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكى



#
تستهدف تقليل الفوارق بين الطبقات وتشمل برامج تستهدف نقل الدخل من الطوائف الأغنى إلى الطوائف الأفقر عن طريق (الزكاه، الضمان الاجتماعي، معاش)
1
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية



#
تضم مجموعة من القواعد تلُزم الأفراد عند ممارستهم النشاط الإنتاجي ( كل فرد له حقوق وعلية واجبات)
2
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية
 



#
هي قصيرة الأجل تحدث تغيرات بسيطة في ميزان المدفوعات أو العمالة أو التوازن النقدي وهي تعديلات جزئية قطاع أو أكثر
3
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية



#
سياسات في المدى القصيرة وتهدف إلى إحداث تغيير جزئي (طبيعي) في التركيب الاجتماعي الموجود في المجتمع
4
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية



#
سياسات طويلة الأجل تهدف لإحداث تعديل كمي أو نوعي في المتغيرات (المقومات) الرئيسية الموجودة في المجتمع، والهدف منها تحقيق الاستقرار الاقتصادي
4
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية


#
السياسة الإصلاحية
1
هو الدخل الذي يأخذ في الاعتبار مستويات الأسعار
الدخل الحقيقي
الدخل النقدي
الدخل التوازني
الدخل القومي







#
هي مجموعة البرامج الإنشائية والإصلاحية التي يجرى تنفيذها في مجال القطاع الزراعي بهدف تحقيق الرفاهية الاقتصادية لسكان القطاع الزراعي
1
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة الاقتصادية الزراعية



#
السيطرة المباشرة على السعر المزرعى للمنتجات المحلية وكذلك فرض ضرائب على صادرات السلع الزراعية
3
السياسة التوزيعية
السياسة التنظيمية
التدخل الحكومي المباشر
التدخل الحكومي غير المباشر



#
استخدام سياسة سعر الصرف للتأثير على الصادرات الزراعية
4
السياسة التوزيعية
السياسة التنظيمية
التدخل الحكومي المباشر
التدخل الحكومي غير المباشر




#
هو تعادل الأنفاق الكلى مع الناتج الكلى
3
الدخل الحقيقي
الدخل النقدي
التوازن
الدخل القومى




#
هو مختلف التوليفات التي تحقق نفس القدر من الإنتاج
3
منحنيات السعر
منحنى المنفعة
منحنى الناتج المتماثل
منحنى الطلب




#
هي عبارة عن دالة في عناصر الإنتاج
1
دالة الإنتاج الزراعى
دالة التكاليف الزراعى
دالة الدخل
دالة السعر



#
هو طريقة كمية لحل مشاكل الوحدة الإنتاجية كاختيار التوليفة المثلى من منتجاتها المعظمة للربح أو المدنية للخسارة(التكاليف)
1
نموذج البرمجة
نموذج النقل
نموذج التوازن
نموذج تحليل المخرجات والمدخلات 





#
عبارة عن جدول للمدخلات وللمخرجات يعتمد على إعطاء وصفا للحسابات القومية الاجتماعية وتسجيلاً كاملاً للمشتريات أو مبيعات مختلف قطاعات الاقتصاد القومي المكونة له
4
نموذج البرمجة
نموذج النقل
نموذج التوازن
نموذج تحليل المخرجات والمدخلات 



#
دور الأسعار الزرعية في القطاع الزراعي
3
توجيه الاستهلاك
توجيه الإنتاج
A, B العباره
اختيار التوليفة المثلى




#
يتوسع الزراع في إنتاج السلع الأكث راربحية بينما يقللون من السلع الأقل أربحية
2
توجيه الاستهلاك
توجيه الإنتا ج
توزيع الدخل
التأثير على الإنتاج الزراعي



#
العمل على زيادة السلع البديلة
1
توجيه الاستهلاك
توجيه الإنتاج
توزيع الدخل
التأثير على الإنتاج الزراعي



#
يؤثر مستوى الأسعار الزراعية على توزيع الدخل القومي بين القطاع الزراعي وغيره من القطاعات
3
توجيه الاستهلاك
توجيه الإنتاج
توزيع الدخل
التأثير على الإنتاج الزراعى



#
تتدخل الدولة لتحديد الأسعار في حالة وجود احتكار لسلعة ما أو خدمة لتحديد السعر وجعل السوق سوق منافسة كاملة
1
التحديد المباشر للأسعار
التحكم في الإنتا ج
السيطرة على توزيع السلع
توجيه الاستهلاك


#
تحديد المساحة الأرضية، والغرض منه هو تحديد الإنتاج من سلعة معينة أو قد يكون في نفس الوقت تدعيم الإنتاج من سلعة أخرى
2
التحديد المباشر للأسعار
التحكم في الإنتاج
السيطرة على توزيع السلع
توجيه الاستهلاك



#
التحكم في مستلزمات الإنتاج مثل الأسمدة – المبيدات – التقاوي
2
التحديد المباشر للأسعار
التحكم في الإنتاج
السيطرة على توزيع السلع
توجيه الاستهلاك



#
من طرقها السيطرة على الصادرات والواردات
3
التحديد المباشر للأسعار
التحكم في الإنتاج
السيطرة على توزيع السلع
توجيه الاستهلاك



#
هو تحقيق الاستقرار الزراعي للمزارع عن طريق تقليل التقلبات التي تحدث للأسعار والدخول المزرعية
1
هدف السياسة السعرية
هدف السياسة النقدية
هدف السياسة التوزيعية
هدف السياسة المالية



#
أهداف تدخل الدولة في السياسة التسويقية الزراعية
1
الحد من تعدد الوسطاء
العمل زيادة التكاليف التسويقية
زيادة عدد الوسطاء
زيادة الفاقد



#
أي التوزيع العادل للناتج المتحصل عليه أي إعطاء كل ذي حق حقه مهما تباين الحقوق
1
الكفاءة التوزيعية
الكفاءة الديناميكية
الكفاءة الاستاتيكيه
الكفاءة



#
الإنتاج المتحصل عليه يعكس تفضيلات أفراد المجتمع بصفى عامة الى جانب أنه يعكس الإمكانيات الفنية المتاحة لاستخدام الموارد
3
الكفاءة التوزيعية
الكفاءة الديناميكية
الكفاءة الاستاتيكيه
الكفاءة




#
ويتصل بها كافة مشاكل توازن الاقتصاد الكلى وإدارته خاصة مشكلتي التضخم وعجز ميزان المدفوعات وتتحقق إذا ماتم التوصل الى نوع من التوازن بين كل من الطلب الكلى والعرض الكلى لاقتصادما
2
الكفاءة التوزيعية
الكفاءة الديناميكية في المدى القصير
الكفاءة الاستاتيكيه
الكفاءة الديناميكية في المدى الطويل



#
ويتصل بها المشاكل التي تعوق سرعة انتقال منحنى الإمكانيات الإنتاجية للمجتمع بمرور الوقت، والذي يتأثر عاملين رئيسيين هما (معدل الاستثمار، وإنتاجية هذا الاستثمار)
4
الكفاءة التوزيعية
الكفاءة الديناميكية في المدى القصير
الكفاءة الاستاتيكيه
الكفاءة الديناميكية في المدى الطويل




#
أسس نجاح السياسة الاقتصادية
2
عدم وجود سلطة تنفيذية
وجود سلطة تنفيذية
إهمال بعض المتغيرات الاقتصادية الكلية
عدم استمرار متابعة تقييم السياسة الاقتصادية



#
أسس نجاح السياسة الاقتصادية
2
عدم وجود سلطة تنفيذية
استمرار متابعة تقييم السياسة الاقتصادية
إهمال بعض المتغيرات الاقتصادية الكلية
عدم استمرار متابعة تقييم السياسة الاقتصادية



#
هو عبارة عن منحنى يوضح مستوى التدخل للدولة في النشاط الاقتصادي لتحقيق الرفاهية الاقتصادية
1
نموذج الرفاهية الأمثل
نموذج الرضا الأمثل
نموذج الطلب
نموذج التوازن



#
وعبارة عن نموذج يحدد المنطقة أو الحدود الخاصة بالإنتاج في ظل القيود الاقتصادية والاجتماعية
2
نموذج الرفاهية الأمثل
نموذج الرضا الأمثل
نموذج الطلب
نموذج التوازن



#
إلغاء نظام التوريد الإجباري وتحرير أسعار وتسويق الحاصلات الزراعية
3
السياسة التوزيعية
السياسة التنظيمية
الإصلاح الاقتصادي
السياسة النوعية



#
إلغاء الدعم على مستلزمات الإنتاج، بهدف الحد من عجز الموازنة العامة ويتم ذلك تدريجيا وفق خطة زمنية
3
السياسة التوزيعية
السياسة التنظيمية
الإصلاح الاقتصادي
السياسة النوعية



#
التحول من التخطيط المركزي (نظام الدورة الزراعية الإلزامية) الى التخطيط التأشيرى (توقعات)
3
السياسة التوزيعية
السياسة التنظيمية
الإصلاح الاقتصادي
السياسة النوعية



#
نظام الدورة الزراعية الإلزامية يوجد في
1
التخطيط المركزى
التخطيط التأشيري
البحث والإرشا د
السياسة النوعية



#
قصر دور البنك الرئيسي للتنمية والائتمان الزراعي تدريجيا على تمويل الأنشطة الزراعية هي أحد مكونات الإصلاح الاقتصادي وهي
4
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
إجراء تعديلات تشريعية تفيد تنظيم العلاقة بين أطراف التعامل في النشاط الزراعي مثل )قانون المالك والمستأجرهي أحد مكونات الإصلاح الاقتصادي وهي
4
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
إصلاح القطاع العام وتنمية القطاع الخاص هي أحد مكونات الإصلاح الاقتصادي وهي
4
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
تشجيع القطاع الخاص على استصلاح وتملك الأراضي والاستزراع وإلغاء القيود في مجال استيراد وتصدير الحاصلات البستانية هي أحد مكونات الإصلاح الاقتصادي وهي
3
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي


#
تحرير سعر الصرف هي أحد مكونات الإصلاح الاقتصادي وهي
3
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
الغاء نظام التوريد الإجباري وتحرير أسعار وتسويق الحاصلات الزراعية هي أحد مكونات الإصلاح الاقتصادي
2
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
من الغاء الدعم على مستلزمات الإنتاج هي أحد مكونات الإصلاح الاقتصادي وهي
2
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
التحول من التخطيط المركزي (نظام الدورة الزراعية الإلزامية) الي التخطيط التاشيري هي أحد مكونات الإصلاح الاقتصادي وهي
2
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
يعتقدون في إصلاح نواحي الخلق استنادا الى العادات والتقاليد والأخلاق التي ينادي بها الدين (الإصلاح الأدنى للمجتمع تمهيدا لإصلاحه اقتصاديا)
4
المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الديني



#
ينادون بإحلال الملكية الاجتماعية محل الملكية الفردية
4
المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاوني
الاتجاه الحر ذو الطابع الاشتراكي ( الماركسي)








#
ينادون بالتدخل الحكومي لأقصى درجات التدخل (المجتمع يستولي على جميع الموارد) 
4
 المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكي ( الماركسي)



#
هي زيادة الدخل الفردي الحقيقي على مر الزمن
1
الرفاهية الاقتصادية
الدخل النقدي
الدخل التوازنى
الدخل القومى



#
تنقسم السياسة الاقتصادية من حيث طبيعة الأداء
1
السياسة التوزيعية
السياسة التشريعية
السياسة الكمية
السياسة النوعية



#
تنقسم السياسة الاقتصادية من حيث طبيعة الأداء
1
السياسة التنظيمية
السياسة التشريعية
السياسة الكمية
السياسة النوعية



#
تنقسم السياسة الاقتصادية من حيث حجم الأداء
4
السياسة التنظيمية
السياسة التشريعية
السياسة التوزيعية
السياسة النوعية



#
تنقسم السياسة الاقتصادية من حيث حجم الأداء
4
السياسة التنظيمية
السياسة التشريعية
السياسة التوزيعية
السياسة الكمية



#
تتعادل قوى الادخار المخطط مع الاستثمار المخطط
1
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة





#
تعادل عرض النقود مع الطلب عليها
2
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة



#
تعادل قوى العرض والطلب على هذه السلعة
4
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة



#
تعادل قوى عرض العمل والطلب عليه
3
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة

 

`;

const AgriPolicy2 = q.split('#').map((q, i): SelectionQuestion => {
    let _answers = q
            .trim()
            .split('\n')
            .filter((a) => a.trim().length > 0),
        questionText = _answers.shift() || 'failed to parse question',
        ans = Number(_answers.shift()?.trim());

    const answers: Answer[] = _answers.map(
        (a, ai): Answer => ({
            id: uuid(),
            text: a,
            correct: ai + 1 === ans,
        })
    );

    return selectionQuestion({ questionText, answers });
});

export default AgriPolicy2;
