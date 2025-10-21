"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Zap,
  Users,
  TrendingUp,
  Star,
  Award,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

const strategies = [
  {
    icon: Shield,
    title: "العنصر الأول: الحماية",
    description: "بناء نظام دفاعي قوي ضد المنافسة وحماية مكانتك في السوق",
    color: "from-primary to-navy-light",
    number: "01",
  },
  {
    icon: Target,
    title: "العنصر الثاني: الاستهداف",
    description: "تحديد العميل المثالي بدقة وفهم احتياجاته العميقة",
    color: "from-accent to-success",
    number: "02",
  },
  {
    icon: Zap,
    title: "العنصر الثالث: التسريع",
    description: "أتمتة العمليات وتسريع دورة المبيعات للحصول على نتائج أسرع",
    color: "from-gold to-warning",
    number: "03",
  },
  {
    icon: Users,
    title: "العنصر الرابع: التوسع",
    description: "استراتيجيات قابلة للتطوير لزيادة قاعدة العملاء والوصول",
    color: "from-navy to-primary",
    number: "04",
  },
  {
    icon: TrendingUp,
    title: "العنصر الخامس: النمو",
    description: "تحسين مستمر وزيادة الأرباح مع الحفاظ على جودة الخدمة",
    color: "from-navy-lighter to-accent",
    number: "05",
  },
];

export default function AboutMethod() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gold/30 to-warning/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full mb-8 font-bold shadow-xl">
            <Award className="w-5 h-5" />
            <span>الاستراتيجية الأكثر فعالية</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            استراتيجية البنتاجون
          </h2>
          <p className="text-2xl md:text-3xl text-blue-200 max-w-4xl mx-auto mb-6 font-light">
            الخريطة السرية المكونة من{" "}
            <span className="font-bold text-yellow-300">5 عناصر</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mx-auto rounded-full mb-8"></div>

          {/* Pentagon Visual */}
          <div className="relative w-48 h-48 mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-glow opacity-30"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">البنتاجون</span>
            </div>
          </div>
        </motion.div>

        {/* Pentagon Strategy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-2">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-lg shadow-xl">
                    {strategy.number}
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${strategy.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${strategy.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
                      {strategy.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {strategy.description}
                    </p>

                    {/* Stars Rating */}
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="text-sm text-blue-300 mr-2">
                        مثبت النجاح
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Pentagon Works */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 2px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4">
                <Target className="w-10 h-10 text-yellow-400" />
                لماذا استراتيجية البنتاجون فعالة؟
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                تم تطوير هذه الاستراتيجية بعد دراسة أكثر من{" "}
                <span className="font-bold text-yellow-300">
                  1000 مدرب ناجح
                </span>{" "}
                وتحليل ما يميز الـ
                <span className="font-bold text-yellow-300">3%</span> الذين
                يحققون نجاحاً استثنائياً
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">
                    97%
                  </div>
                  <div className="text-sm">معدل النجاح</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">
                    45
                  </div>
                  <div className="text-sm">يوم للنتائج</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">
                    3000+
                  </div>
                  <div className="text-sm">مدرب استفاد</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  مجربة ومثبتة النتائج
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  قابلة للتطبيق فوراً
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  مناسبة لجميع المجالات
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
