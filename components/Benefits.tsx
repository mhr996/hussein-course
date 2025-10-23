"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Target,
  Brain,
  DollarSign,
  Rocket,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "خطة بداية بسيطة وواضحة",
    description:
      "كيف تبدأ استثمارك بخطة عملية بدون تعقيد—خطوات واضحة من أول يوم",
    gradient: "from-primary to-navy-light",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
  },
  {
    icon: Target,
    title: "اختيار المشروع الصح",
    description: "القواعد الأساسية لتقييم المشاريع والعوائد والمخاطر بثقة",
    gradient: "from-accent to-success",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    icon: DollarSign,
    title: "حماية المال وتحويله لدخل ثابت",
    description: "آليات حماية رأس المال وتحويله لدخل إيجاري مستقر",
    gradient: "from-gold to-warning",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
  },
];

export default function Benefits() {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(30, 58, 138, 0.15) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-full mb-8 shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="font-bold">الورشة — 10 دقائق</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight font-almarai">
            شو رح تتعلم في الورشة؟
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light font-almarai leading-relaxed">
            ثلاث نقاط عملية جاهزة للتطبيق فوراً: خطة البداية، اختيار المشروع،
            وحماية رأس المال.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden group-hover:-translate-y-2">
                  {/* Image Background */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${benefit.image}')` }}
                    ></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-80 mix-blend-multiply`}
                    ></div>

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy mb-4 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Check Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24"
        >
          <div className="bg-blue-500 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-40"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Rocket className="w-10 h-10 text-yellow-400" />
                ابدأ الآن وشاهد الورشة المجانية
              </h3>
              <p className="text-blue-100 text-xl">
                10 دقائق فقط — بدون إيميل أو انتظار
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
