"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModalForm from "@/components/ModalForm";

// Lazy load components that are below the fold
const Benefits = dynamic(() => import("@/components/Benefits"), {
  loading: () => <div className="min-h-[400px]" />,
});
const AboutMethod = dynamic(() => import("@/components/AboutMethod"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CoachShowcase = dynamic(() => import("@/components/CoachShowcase"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Steps = dynamic(() => import("@/components/Steps"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen">
      <Header onOpenModal={openModal} />
      <div id="hero">
        <Hero onOpenModal={openModal} />
      </div>
      <div id="benefits">
        <Benefits />
      </div>

      <div id="coach">
        <CoachShowcase />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
