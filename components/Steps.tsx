"use client";

import { motion } from "framer-motion";
import { Play, BookOpen, Rocket } from "lucide-react";

const steps = [
  {
    icon: Play,
    number: "01",
    title: "شاهد الفيديو",
    description:
      "استثمر 45 دقيقة في مشاهدة الاستراتيجية الكاملة واكتشف الأسرار الخمسة",
    color: "from-primary to-navy",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "طبق الخريطة",
    description: "ابدأ بتطبيق العناصر الخمسة خطوة بخطوة حسب الدليل المرفق",
    color: "from-emerald-500 to-green-600",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop",
  },
  {
    icon: Rocket,
    number: "03",
    title: "وسّع شغلك",
    description: "شاهد كيف تتضاعف النتائج وتزيد الأرباح مع كل عنصر تطبقه",
    color: "from-gold to-orange-600",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
  },
];

interface StepsProps {
  onOpenModal: () => void;
}

export default function Steps({ onOpenModal }: StepsProps) {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
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
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-navy mb-6">
            كيف تبدأ رحلتك للنجاح؟
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ثلاث خطوات بسيطة تفصلك عن تحقيق دخل 6 أرقام من عملك التدريبي
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-gold opacity-20 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* Card with Image Background */}
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:-translate-y-2">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${step.image}')` }}
                      ></div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-85 mix-blend-multiply`}
                      ></div>

                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-navy mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <button
            onClick={onOpenModal}
            className="group relative bg-gradient-to-r from-blue-700 to-blue-500 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              ابدأ الخطوة الأولى الآن
              <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-slate-500 mt-6 text-base">
            مجاني 100% - بدون التزامات مالية
          </p>
        </motion.div>
      </div>
    </section>
  );
}
