"use client";

import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-28 pb-12 md:pt-28 md:pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-slate-900/20"></div>
      </div>

      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="hidden md:block absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-600/30 to-slate-900/30 rounded-full blur-xl animate-float"></div>
      <div
        className="hidden md:block absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white order-2 lg:order-1"
          >
            {/* Stats Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white/90">
                أكثر من 3000 مدرب استفادوا من الاستراتيجية
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-almarai">
              ليش <span className="text-blue-400">97%</span> من المدربين
              <br className="hidden sm:block" />
              ما يوصلوا لــ{" "}
              <span className="text-blue-400 whitespace-nowrap">
                $100,000
              </span>{" "}
              <br className="sm:hidden" />
              بالشهر؟
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 mb-6 sm:mb-8 leading-relaxed font-light font-almarai">
              <span className="font-bold text-amber-400">حسين حوش</span> يكشف لك
              استراتيجية البنتاجون المكونة من{" "}
              <span className="font-bold text-amber-400">5 عناصر</span> لبناء
              قنوات بيع تجيب نتائج حقيقية
            </p>

            {/* CTA Button - Visible only on mobile, moved to below video on desktop */}
            <div className="lg:hidden mb-6">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto group relative bg-gradient-to-r from-blue-600 to-slate-900 hover:from-blue-700 hover:to-slate-800 text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:shadow-blue-600/25 transition-all duration-500 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  شوف الفيديو المجاني
                  <Sparkles className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Feature Badges - Visible only on mobile */}
            <div className="lg:hidden flex flex-wrap justify-center sm:justify-start gap-3 mb-6 text-sm text-white">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>مجاني 100%</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>45 دقيقة فقط</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg">
                <Target className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>نتائج مثبتة</span>
              </div>
            </div>

            {/* Urgency Text - Visible only on mobile */}
            <p className="lg:hidden text-blue-200 text-sm sm:text-base font-medium text-center sm:text-right flex items-center justify-center sm:justify-start gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
              عرض محدود - شاهد الآن قبل انتهاء المهلة
            </p>
          </motion.div>

          {/* Right Column - Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-2 sm:border-4 border-white/10 hover:border-white/20 transition-all duration-500"
              onClick={onOpenModal}
            >
              {/* Video Thumbnail Image */}
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop&q=80"
                  alt="استراتيجية البنتاجون"
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-md border-2 sm:border-4 border-white/40 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:border-white/60 transition-all duration-500"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white mr-1" />
                  </motion.div>
                </div>

                {/* Video Label */}
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <p className="text-white text-sm sm:text-base lg:text-lg font-bold mb-1 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                      <span className="line-clamp-1">
                        شاهد الفيديو التشويقي
                      </span>
                    </p>
                    <p className="text-blue-200 text-xs sm:text-sm line-clamp-1">
                      اكتشف السر الذي غيّر حياة الآلاف من المدربين
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Only - CTA and Badges Below Video */}
            <div className="hidden lg:block mt-8 space-y-6">
              <button
                onClick={onOpenModal}
                className="w-full group relative bg-gradient-to-r from-blue-600 to-slate-900 hover:from-blue-700 hover:to-slate-800 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-600/25 transition-all duration-500 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  شوف الفيديو المجاني
                  <Sparkles className="w-5 h-5" />
                </span>
              </button>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>مجاني 100%</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>45 دقيقة فقط</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>نتائج مثبتة</span>
                </div>
              </div>

              <p className="text-blue-200 text-base font-medium text-center flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                عرض محدود - شاهد الآن قبل انتهاء المهلة
              </p>
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-blue-600/20 rounded-full blur-2xl"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Grid Pattern Overlay - Reduced opacity on mobile */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </section>
  );
}
