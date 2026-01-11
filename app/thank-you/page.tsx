"use client";

import { motion } from "framer-motion";
import { CheckCircle, Gift, ArrowRight, Home, PartyPopper } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-green-200">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
              <PartyPopper className="w-8 h-8 text-blue-600" />
              شكراً لانضمامك!
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              تم تسجيلك بنجاح وسيتم توجيهك قريباً للمحتوى الحصري
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl mb-8 border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">
                ماذا يحدث الآن؟
              </h2>
            </div>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>تم حفظ بياناتك بأمان في نظامنا</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>ستصلك رسالة تأكيد على بريدك الإلكتروني</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>ستحصل على الهدايا المذكورة</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="space-y-4"
          >
            <Link
              href="/video"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              شاهد الفيديو الكامل الآن
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              العودة للصفحة الرئيسية
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 pt-6 border-t border-slate-200"
          >
            <p className="text-sm text-slate-500">
              إذا لم تستلم رسالة التأكيد خلال 5 دقائق، تأكد من صندوق الرسائل
              المزعجة
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-200/30 rounded-full blur-xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-xl -z-10"></div>
      </motion.div>
    </div>
  );
}
