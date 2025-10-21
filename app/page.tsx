"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModalForm from "@/components/ModalForm";
import Benefits from "@/components/Benefits";
import AboutMethod from "@/components/AboutMethod";
import CoachShowcase from "@/components/CoachShowcase";
import Testimonials from "@/components/Testimonials";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
      <div id="method">
        <AboutMethod />
      </div>
      <div id="coach">
        <CoachShowcase />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="steps">
        <Steps onOpenModal={openModal} />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
