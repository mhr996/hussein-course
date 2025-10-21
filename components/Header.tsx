"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = [
        "hero",
        "benefits",
        "method",
        "coach",
        "testimonials",
        "steps",
        "faq",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "الرئيسية" },
    { id: "benefits", label: "الفوائد" },
    { id: "method", label: "الاستراتيجية" },
    { id: "coach", label: "المدرب" },
    { id: "testimonials", label: "قصص النجاح" },
    { id: "steps", label: "الخطوات" },
    { id: "faq", label: "الأسئلة الشائعة" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src="/logo.webp"
                alt="حسين حوش"
                className={`w-full h-full object-contain transition-all duration-300 ${
                  isScrolled ? "invert" : ""
                }`}
              />
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                حسين حوش
              </h1>
              <p
                className={`text-xs ${
                  isScrolled ? "text-slate-600" : "text-blue-200"
                }`}
              >
                استراتيجية البنتاجون
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/20"
                    : isScrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isScrolled ? "bg-blue-600" : "bg-white"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal}
            className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
              isScrolled
                ? "bg-gradient-to-r from-blue-600 to-slate-900 text-white hover:shadow-xl"
                : "bg-white text-slate-900 hover:shadow-2xl"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            شاهد الآن
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-200 shadow-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-right px-4 py-3 rounded-lg font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={onOpenModal}
                className="w-full bg-gradient-to-r from-blue-600 to-slate-900 text-white px-6 py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                شاهد الفيديو المجاني
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
