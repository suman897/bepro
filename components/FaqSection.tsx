"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-1",
    category: "ACTIVATIONS",
    question: "What does BEPRO specialize in?",
    answer:
      "BEPRO specializes in BTL activations, experiential marketing, custom exhibition stall fabrication, and tech-driven marketing solutions that turn audience attention into measurable brand growth.",
  },
  {
    id: "faq-2",
    category: "REACH & CITIES",
    question: "Which cities in India does BEPRO operate in?",
    answer:
      "BEPRO executes nationwide campaigns across India, with primary execution hubs in Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, Ahmedabad, Kolkata, and Chennai.",
  },
  {
    id: "faq-3",
    category: "TIMELINES",
    question: "How long does a typical BEPRO project take?",
    answer:
      "Setup timelines range from 48 hours for rapid pop-ups and mall activations to 2-3 weeks for large-scale custom exhibition stall fabrication and multi-city roadshows.",
  },
  {
    id: "faq-4",
    category: "TECH MARKETING",
    question: "Can BEPRO integrate technology into physical setups?",
    answer:
      "Yes! BEPRO embeds cutting-edge brand tech including AI photobooths, AR/VR product demos, touchscreen gamification, and RFID lead capture systems into physical event spaces.",
  },
  {
    id: "faq-5",
    category: "ONBOARDING",
    question: "What is required to get started with BEPRO?",
    answer:
      "To get started, clients simply share campaign goals, target locations, estimated budget, and timeline. The BEPRO team prepares a customized proposal and 3D concept layout within 24-48 hours.",
  },
  {
    id: "faq-6",
    category: "QUALITY & METRICS",
    question: "How does BEPRO ensure execution quality?",
    answer:
      "BEPRO provides turnkey end-to-end management with dedicated on-ground supervisors, stringent fabrication quality checks, real-time footfall tracking, and post-campaign performance reporting.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E7ECF3] relative overflow-hidden select-none"
    >
      {/* Background Soft Purple/Blue Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[500px] rounded-full bg-radial from-[#6C63FF]/10 via-[#3DB5FF]/5 to-transparent filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 space-y-6 pt-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#6C63FF] uppercase tracking-widest bg-[#6C63FF]/8 px-3.5 py-1.5 rounded-full border border-[#6C63FF]/20">
              <span className="w-2 h-2 rounded-full bg-[#6C63FF] inline-block animate-ping" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
              QUESTIONS ABOUT <br />
              <span className="bg-gradient-to-r from-[#6C63FF] via-[#818CF8] to-[#3DB5FF] bg-clip-text text-transparent">
                BEPRO ACTIVATIONS
              </span>
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-lg">
              Explore quick answers regarding BEPRO BTL activations, custom stall fabrication, and tech marketing solutions.
            </p>
          </div>

          {/* Right Column: Accordion Items matching reference image */}
          <div className="lg:col-span-7 divide-y divide-slate-200/90 border-t border-b border-slate-200/90">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-6 transition-colors duration-200">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-poppins font-bold text-[#0F172A] group-hover:text-[#6C63FF] transition-colors">
                      {faq.question}
                    </span>
                    <span className="shrink-0 p-1 text-slate-400 group-hover:text-[#6C63FF] transition-colors">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-base text-[#64748B] leading-relaxed pt-3 pr-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
