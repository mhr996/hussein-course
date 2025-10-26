"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Star, ArrowRight, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import ThankYouVideoPopup from "@/components/ThankYouVideoPopup";

// Configuration - Easy to change
const CONFIG = {
  YOUTUBE_VIDEO_ID: "D1cmKrU09jU", // Replace with actual video ID
  VIDEO_TITLE:
    "10 دقائق تكفي لتتعلم كيف تحقق دخل ثابت من الاستثمار العقاري في دبي!",
};

export default function VideoPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [showThankYouVideo, setShowThankYouVideo] = useState(false);

  const handleBookAppointment = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
    // Show thank you video popup after closing Calendly
    setShowThankYouVideo(true);
  };

  const closeThankYouVideo = () => {
    setShowThankYouVideo(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Video */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              تم تسجيلك بنجاح - استمتع بالمشاهدة
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight px-2">
              {CONFIG.VIDEO_TITLE}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-2">
              حتى لو أول مرة بتفكر تستثمر، الورشة هتوريك الخطوات العملية لبداية
              استثمارك بأمان وثقة.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black mb-6 sm:mb-8"
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${CONFIG.YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="الورشة العقارية"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Direct CTA Button Under Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <button
              onClick={handleBookAppointment}
              className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl md:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              احجز استشارتك المجانية فوراً
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-slate-600 text-sm sm:text-base text-center mt-3 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              استشارة مجانية 30 دقيقة - مكالمة مباشرة مع حسين
            </p>
          </motion.div>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm text-center border border-slate-200">
              <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-1">
                10 دقائق
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                مدة الفيديو
              </div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm text-center border border-slate-200">
              <div className="text-lg sm:text-2xl font-bold text-green-600 mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                محتوى مجاني
              </div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm text-center border border-slate-200">
              <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1">
                3 خطوات
              </div>
              <div className="text-xs sm:text-sm text-slate-600">خطة عملية</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-green-600 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl text-white text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              جاهز تبدأ؟
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto">
              بعد مشاهدة الفيديو، حدد الوقت اللي بناسبك لتبدأ رحلتك الاستثمارية
              معي خطوة بخطوة.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0" />
                <span>تحليل مجاني لوضعك الحالي</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0" />
                <span>خطة عمل مخصصة</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0" />
                <span>إجابات على جميع أسئلتك</span>
              </div>
            </div>

            <button
              onClick={handleBookAppointment}
              className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
            >
              <Calendar className="w-5 h-5" />
              احجز مكالمتك المجانية معي الآن
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-blue-200 text-xs sm:text-sm mt-3 sm:mt-4 flex items-center justify-center gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              استشارة هاتفية 30 دقيقة - مجانية بالكامل
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              شو رح تتعلم في الورشة
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              نقاط عملية واضحة قابلة للتطبيق فوراً
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                number: "01",
                title: "خطة البداية",
                points: [
                  "خطة بسيطة وواضحة للبدء",
                  "خطوات أولى بدون تعقيد",
                  "مؤشرات نجاح مبكرة",
                ],
              },
              {
                number: "02",
                title: "اختيار المشروع",
                points: [
                  "القواعد الأساسية للاختيار الصح",
                  "كيف تقيّم العوائد والمخاطر",
                  "أخطاء شائعة يجب تجنبها",
                ],
              },
              {
                number: "03",
                title: "حماية رأس المال",
                points: [
                  "تحويل الأموال لدخل ثابت",
                  "تقليل المخاطر",
                  "نصائح عملية قبل الشراء",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                    {item.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm sm:text-base text-slate-600"
                    >
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />

      {/* Thank You Video Popup */}
      <ThankYouVideoPopup
        isOpen={showThankYouVideo}
        onClose={closeThankYouVideo}
      />
    </div>
  );
}
