"use client";

import { motion } from "framer-motion";
import { Star, Quote, DollarSign } from "lucide-react";

const testimonials = [
  {
    name: "ريم أحمد",
    title: "مستثمرة مبتدئة",
    location: "السعودية",
    text: "الورشة كانت واضحة جدًا. بدأت بخطة بسيطة وبعد شهرين صار عندي أول دخل إيجاري.",
    revenue: "أول دخل إيجاري خلال 60 يوم",
    image: "/testimonial-1.jpg",
  },
  {
    name: "محمد الرفاعي",
    title: "بدأ أول استثماره",
    location: "الإمارات",
    text: "اتبعت الخطوات الثلاث بالضبط—اختيار المشروع صار أسهل بكثير واتخذت القرار بثقة.",
    revenue: "اختار مشروعه الأول بثقة",
    image: "/testimonial-2.jpg",
  },
  {
    name: "فاطمة محمود",
    title: "باحثة عن دخل ثابت",
    location: "مصر",
    text: "فهمت كيف أحمي رأس المال وأبدأ خطوة خطوة. الآن أعرف الطريق للوصول لدخل ثابت.",
    revenue: "خطة واضحة لحماية رأس المال",
    image: "/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            قصص حقيقية لمستثمرين بدؤوا مع الورشة
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            تجارب مختصرة توضّح أثر الخطوات الثلاث على اتخاذ القرار وبداية الدخل
            الإيجاري.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 relative"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-4" />

              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg">
                  <p className="text-sm font-bold text-green-700 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {testimonial.revenue}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg ml-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-600 text-sm">{testimonial.title}</p>
                  <p className="text-slate-500 text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 italic">
            هذه شهادات من مستثمرين طبقوا الخطوات الثلاث بنجاح
          </p>
        </motion.div>
      </div>
    </section>
  );
}
