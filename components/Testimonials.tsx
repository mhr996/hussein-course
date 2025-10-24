"use client";

import { motion } from "framer-motion";
import { Star, Quote, DollarSign } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "محمد الحاج",
    title: "المدير العام لشركة محمد الحاج للوساطة العقارية",
    location: "",
    text: "صراحة من أبدع الناس اللي عرفتهم، شغله في المجال العقاري استثنائي! حسين ما شاء الله عليه عنده معلومات وخبرات قوية، وأساليبه في تسويق المشاريع دايمًا خارج الصندوق وفعّالة بشكل رهيب ومبدع.",
    revenue: "",
    image: "/testimonials/mohammed-haj.webp",
  },
  {
    name: "محمد شانه",
    title: "المدير التنفيذي لشركة Innovation Experts",
    location: "",
    text: "حسين شاب طموح ومجتهد يسعى دائما لاكتساب المعرفة والمهارات الصحيحة وتوظيفها في خدمة متميزة لعملاءه وتقديم الاستشارة الصحيحة للمستثمرين، نتمنى له التوفيق والنجاح.",
    revenue: "",
    image: "/testimonials/mohammed-shaneh.webp",
  },
  {
    name: "ليمونة الصالح",
    title: "إعلامية سورية",
    location: "",
    text: "يسعد أوقاتك استاذ حسين، حابة اتشكرك على تعاملك اللطيف معي والإيضاحات يلي وضحتها لكل استفساراتي حتى لدرجة خلال 24 ساعة فقط قررت سجل على عقار عن طريقك. واليوم أنا كإعلامية بقدر اكتشف الأشخاص المهنيين والصادقين وانت حقيقة منهم.",
    revenue: "",
    image: "/testimonials/limona.webp",
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
            شهادات من شركاء النجاح
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            آراء قادة الأعمال والخبراء في المجال العقاري حول حسين وخبرته
            المتميزة.
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
                {testimonial.revenue && (
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-bold text-green-700 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      {testimonial.revenue}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 min-w-14 rounded-full overflow-hidden ml-3 border-2 border-blue-200 shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={55}
                    height={55}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-600 text-sm">{testimonial.title}</p>
                  {testimonial.location && (
                    <p className="text-slate-500 text-xs">
                      {testimonial.location}
                    </p>
                  )}
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
            شهادات من قادة وخبراء في المجال العقاري
          </p>
        </motion.div>
      </div>
    </section>
  );
}
