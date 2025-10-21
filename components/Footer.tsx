"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src="/logo.webp"
                    alt="حسين حوش"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">حسين حوش</h3>
                  <p className="text-sm text-slate-400">
                    استراتيجية البنتاجون للمدربين
                  </p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                نساعد المدربين والخبراء في العالم العربي على بناء أعمال تدريبية
                مربحة ومستدامة باستخدام استراتيجية البنتاجون المثبتة علمياً.
              </p>

              {/* Social Media */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-11 h-11 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-blue-500"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-11 h-11 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-pink-500"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-11 h-11 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-blue-600"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-11 h-11 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-red-500"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                تواصل معنا
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@pentagon.com"
                  className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">
                      البريد الإلكتروني
                    </div>
                    <div className="font-medium">info@pentagon.com</div>
                  </div>
                </a>
                <a
                  href="tel:+971501234567"
                  className="flex items-start gap-3 text-slate-300 hover:text-green-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">
                      رقم الهاتف
                    </div>
                    <div className="font-medium" dir="ltr">
                      +971 50 123 4567
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">الموقع</div>
                    <div className="font-medium">
                      دبي، الإمارات العربية المتحدة
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                روابط سريعة
              </h4>
              <div className="space-y-3">
                <a
                  href="#hero"
                  className="block text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 duration-200"
                >
                  الصفحة الرئيسية
                </a>
                <a
                  href="#method"
                  className="block text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 duration-200"
                >
                  عن الاستراتيجية
                </a>
                <a
                  href="#testimonials"
                  className="block text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 duration-200"
                >
                  قصص النجاح
                </a>
                <a
                  href="#faq"
                  className="block text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 duration-200"
                >
                  الأسئلة الشائعة
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 duration-200"
                >
                  سياسة الخصوصية
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 duration-200"
                >
                  شروط الخدمة
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">3000+</div>
              <div className="text-sm text-slate-400">مدرب استفاد</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">97%</div>
              <div className="text-sm text-slate-400">معدل النجاح</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">45</div>
              <div className="text-sm text-slate-400">يوم للنتائج</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                $100K
              </div>
              <div className="text-sm text-slate-400">الهدف الشهري</div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
