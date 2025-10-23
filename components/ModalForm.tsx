"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  Play,
  CheckCircle,
  Shield,
  Check,
} from "lucide-react";
import CountrySelector, { countries, Country } from "./CountrySelector";
import { saveFormSubmission } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find((c) => c.code === "AE") || countries[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const fullPhone = `${selectedCountry.dialCode}${formData.phone}`;
      await saveFormSubmission({ ...formData, phone: fullPhone });
      router.push("/video");
    } catch (err) {
      setError("حدث خطأ في الإرسال، يرجى المحاولة مرة أخرى");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl p-8 w-full max-w-lg shadow-2xl border border-white/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-3 hover:bg-white/80 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-200/50"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-xl opacity-20"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl opacity-20"></div>

            <div className="text-center mb-8 relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Play className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
                احصل على الفيديو الكامل
              </h2>
              <p className="text-slate-600 lg:text-lg">
                أدخل بياناتك للحصول على الوصول الفوري
                <span className="text-emerald-600 font-bold"> مجاناً</span>
              </p>

              {/* Trust Badge */}
              <div className="lg:inline-flex hidden items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mt-4 text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                بيانات آمنة 100%
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-slate-800 mb-3"
                >
                  الاسم الكامل *
                </label>
                <div className="relative">
                  <User className="absolute right-4 top-4 w-5 h-5 text-blue-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg font-medium"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-slate-800 mb-3"
                >
                  البريد الإلكتروني *
                </label>
                <div className="relative">
                  <Mail className="absolute right-4 top-4 w-5 h-5 text-blue-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg font-medium"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-slate-800 mb-3"
                >
                  رقم الهاتف *
                </label>
                <div
                  className="relative flex items-center border-2 border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  dir="ltr"
                >
                  <CountrySelector
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-4 border-0 rounded-l-xl focus:outline-none bg-transparent text-lg font-medium"
                    placeholder="50 123 4567"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-5 px-6 rounded-xl font-bold lg:text-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-xl hover:shadow-2xl"
              >
                <div className="flex items-center justify-center gap-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>أرسل واحصل على الفيديو الكامل</>
                  )}
                </div>
              </button>
            </form>

            <div className="text-center mt-6 space-y-2">
              <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                بياناتك آمنة ومحمية. لن نشاركها مع أي طرف ثالث.
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-600" />
                  <span>لا رسائل مزعجة</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-600" />
                  <span>إلغاء الاشتراك بأي وقت</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
