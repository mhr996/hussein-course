"use client";

import { motion } from "framer-motion";
import { Star, Quote, DollarSign } from "lucide-react";

const testimonials = [
  {
    name: "ريم أحمد",
    title: "مدربة تربية أسرية",
    location: "السعودية",
    text: "بعد 3 شهور من تطبيق استراتيجية البنتاجون، صارت مبيعاتي أكبر بـ10 مرات. النظام واضح وقابل للتطبيق فعلاً!",
    revenue: "من 3,000 إلى 30,000 دولار شهرياً",
    image: "/testimonial-1.jpg",
  },
  {
    name: "محمد الرفاعي",
    title: "مدرب تطوير ذات",
    location: "الإمارات",
    text: "كنت أشتغل 12 ساعة باليوم وما أحقق إلا 5000 دولار بالشهر. الحين بنفس المتابعين أحقق 25,000 دولار والشغل أقل بكتير!",
    revenue: "من 5,000 إلى 25,000 دولار شهرياً",
    image: "/testimonial-2.jpg",
  },
  {
    name: "فاطمة محمود",
    title: "مدربة صحة ولياقة",
    location: "مصر",
    text: "الاستراتيجية غيرت مفهومي للتسويق بالكامل. أول شهر حققت 15,000 دولار، وهاي أكبر نتيجة في تاريخي!",
    revenue: "من 800 إلى 15,000 دولار شهرياً",
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
            نتائج حقيقية من مدربين حقيقيين
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            اكتشف كيف غيرت استراتيجية البنتاجون حياة المئات من المدربين في
            العالم العربي
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

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
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
            "هذه شهادات حقيقية من مدربين طبقوا الاستراتيجية بنجاح"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
