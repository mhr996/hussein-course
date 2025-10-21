"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Clock, CheckCircle, Video } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Get Calendly URL from environment variable
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "YOUR_CALENDLY_LINK_HERE";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-slate-900 p-4 sm:p-6 text-white relative overflow-hidden flex-shrink-0">
          {/* Decorative elements - Hidden on mobile for cleaner look */}
          <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="hidden sm:block absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold leading-tight">
                    احجز استشارتك المجانية
                  </h2>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    مع حسين حوش
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300 flex-shrink-0" />
                <span className="whitespace-nowrap">30 دقيقة</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                <Video className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 flex-shrink-0" />
                <span className="whitespace-nowrap truncate">
                  عبر Zoom أو Google Meet
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 flex-shrink-0" />
                <span className="whitespace-nowrap">مجاني 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Widget - Using iframe for better control */}
        <div className="flex-1 bg-slate-50 min-h-0 h-[500px]">
          <iframe
            src={`${calendlyUrl}?embed_domain=${
              typeof window !== "undefined" ? window.location.hostname : ""
            }&embed_type=Inline&hide_gdpr_banner=1&primary_color=2563eb`}
            width="100%"
            height="500px"
            frameBorder="0"
            title="احجز استشارتك المجانية"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-3 sm:px-6 py-3 sm:py-4 border-t border-slate-200 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2 text-center sm:text-right">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm">
                سيتم إرسال تأكيد الموعد عبر البريد الإلكتروني
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700 transition-colors font-medium text-xs sm:text-sm"
            >
              إلغاء
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
