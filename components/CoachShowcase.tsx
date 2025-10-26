"use client";

import { motion } from "framer-motion";
import { Users, Award, Star } from "lucide-react";

export default function CoachShowcase() {
  const images = [
    {
      url: "/with-clients/with-client1.jpg",
      alt: "من هولندا إلى دبي قصة نجاح حقيقية!",
    },
    {
      url: "/with-clients/with-client2.webp",
      alt: "حسين حوش مع الإعلامية السورية ليمونة الصالح",
    },
    {
      url: "/with-clients/with-clients.jpg",
      alt: "حسين حوش مع احد عملائه الناجحين",
    },
  ];

  return (
    <section
      id="coach"
      className="relative py-20 lg:py-32 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              تعرّف على المستشار
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-almarai">
            حسين حوش
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-almarai">
            مستشار عقاري معتمد من دائرة الأراضي والأملاك في دبي — ساعد عشرات
            المستثمرين يبدؤوا أول استثمار بثقة وبدون أخطاء مكلفة.
          </p>
        </motion.div>

        {/* Images Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
                    {image.alt}
                  </p>
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-bold text-slate-900">
                    حسين حوش
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"></div>
    </section>
  );
}
