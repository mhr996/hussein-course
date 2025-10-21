"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "هل الاستراتيجية مناسبة لجميع المجالات التدريبية؟",
    answer:
      "نعم، استراتيجية البنتاجون تم تصميمها لتعمل مع جميع المجالات التدريبية - من التطوير الشخصي إلى الصحة واللياقة، من التربية الأسرية إلى ريادة الأعمال. المبادئ الخمسة قابلة للتطبيق في أي مجال.",
  },
  {
    question: "كم من الوقت أحتاج لرؤية النتائج؟",
    answer:
      "معظم المدربين الذين طبقوا الاستراتيجية شاهدوا نتائج ملموسة خلال 30-90 يوم من التطبيق. لكن النتائج تعتمد على مدى التزامك بتطبيق العناصر الخمسة بالطريقة الصحيحة.",
  },
  {
    question: "هل أحتاج خبرة تقنية أو رأس مال كبير؟",
    answer:
      "لا، الاستراتيجية مصممة لتعمل مع الموارد المتاحة لديك. لا تحتاج خبرة تقنية معقدة أو استثمار مالي ضخم. يمكنك البدء بالأدوات المجانية والتدرج في التطوير.",
  },
  {
    question: "ماذا لو كنت مدرب مبتدئ؟",
    answer:
      "هذا مثالي! الاستراتيجية مصممة خصيصاً لمساعدة المدربين على بناء أعمالهم من الصفر. ستتعلم كيف تتجنب الأخطاء الشائعة وتبدأ بالطريقة الصحيحة من البداية.",
  },
  {
    question: "هل هناك ضمان على النتائج؟",
    answer:
      "النتائج تختلف من شخص لآخر حسب مستوى التطبيق والالتزام. نحن نقدم استراتيجية مجربة ومثبتة، لكن نجاحك يعتمد على تطبيقك الفعلي للمحتوى المقدم.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-navy mb-6">
            أسئلة شائعة
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            إجابات على أكثر الأسئلة التي يطرحها المدربون قبل البدء
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-right hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-slate-900 flex-1">
                  {faq.question}
                </span>
                <div className="mr-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-slate-100 pt-4">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-200"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            إخلاء مسؤولية
          </h3>
          <p className="text-slate-600 text-sm">
            النتائج تختلف من شخص لآخر حسب مستوى التطبيق والالتزام. هذه المعلومات
            للتعليم وليس ضماناً للنتيجة. جميع الشهادات حقيقية لكن النتائج
            الفردية قد تختلف.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
