"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award } from "lucide-react";

export default function ContactForm() {
  const contactItems = [
    {
      label: "EMAIL",
      value: "info@beprobranding.co.in",
      href: "mailto:info@beprobranding.co.in",
      isLink: true,
    },
    {
      label: "PHONE",
      value: "+91 78758 35070",
      href: "tel:+917875835070",
      isLink: true,
    },
    {
      label: "OFFICE",
      value: "Delhi, India",
      href: "#",
      isLink: false,
    },
    {
      label: "WHATSAPP",
      value: "Chat with us →",
      href: "https://wa.me/917875835070?text=Hi%20BEPRO%20Team%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20campaign.",
      isLink: true,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-white select-none"
    >
      {/* Background Faint 3-5% Opacity Animated Mesh Gradient & Depth Circles */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            scale: [0.95, 1.12, 1],
            opacity: [0.35, 0.55, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-[650px] h-[650px] rounded-full bg-radial from-[#6C63FF]/5 via-[#3DB5FF]/4 to-transparent filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col space-y-12 lg:space-y-16">
          {/* Top Headline & CTA Stack (Full Width Flow) */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C63FF]/20 text-[#6C63FF] text-xs font-bold uppercase tracking-widest bg-[#6C63FF]/5">
                <Sparkles className="w-3.5 h-3.5 text-[#6C63FF]" />
                <span>GET IN TOUCH</span>
              </span>
            </motion.div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[62px] font-poppins font-extrabold text-[#111111] tracking-tight leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline"
                >
                  LET&apos;S BUILD YOUR NEXT{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block font-black bg-gradient-to-r from-[#6C63FF] via-[#5851EA] to-[#3DB5FF] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_25px_rgba(108,99,255,0.2)]"
                >
                  EXPERIENCE.
                </motion.span>
              </h2>
            </div>

            {/* White Outlined Button Directly Below Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.55 }}
              className="pt-2"
            >
              <a
                href="https://wa.me/917875835070?text=Hi%20BEPRO%20Team%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20campaign."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-transparent hover:text-white hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3DB5FF] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#6C63FF]/25 hover:-translate-y-1 group"
              >
                <span>Get Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Bottom Section: Trust Statement & Clean Contact Information Strip */}
          <div className="pt-8 space-y-6">
            {/* Small Trust Statement Above Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]"
            >
              <Award className="w-4 h-4 text-[#6C63FF]" />
              <span>Trusted by 100+ brands across 62+ cities.</span>
            </motion.div>

            {/* Clean Information Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-1.5 group cursor-pointer"
                >
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#94A3B8]">
                    {item.label}
                  </p>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="relative inline-block text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#6C63FF] transition-colors duration-300"
                    >
                      <span>{item.value}</span>
                      <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#6C63FF] transition-all duration-300 ease-out" />
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg font-bold text-[#111111]">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
