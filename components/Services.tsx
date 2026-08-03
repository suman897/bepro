"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Megaphone,
  Gift,
  Building2,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  details: string[];
  gradientBg: string;
  iconColor: string;
}

const services: ServiceItem[] = [
  {
    id: "btl",
    icon: Zap,
    title: "BTL Activations",
    shortDesc: "Direct consumer engagement strategies tailored for maximum impact.",
    details: [
      "On-ground mall & transit hub activations",
      "Interactive product sampling & trials",
      "Targeted consumer touchpoint engagements",
      "Real-time feedback & data collection",
    ],
    gradientBg: "bg-[#EEF7FF]",
    iconColor: "text-[#3DB5FF]",
  },
  {
    id: "atl",
    icon: Megaphone,
    title: "ATL Campaigns",
    shortDesc: "Mass media marketing to build brand awareness across regions.",
    details: [
      "High-impact outdoor & billboard advertising",
      "Print, radio & broadcasting integration",
      "Regional & multi-city brand rollouts",
      "Omnichannel media planning & strategy",
    ],
    gradientBg: "bg-[#F3ECFF]",
    iconColor: "text-[#6C63FF]",
  },
  {
    id: "promotions",
    icon: Gift,
    title: "Brand Promotions",
    shortDesc: "Strategic promotions that drive instant customer conversion.",
    details: [
      "Seasonal & festive promotional drives",
      "Retail store & hypermarket takeovers",
      "Interactive contest & reward mechanics",
      "Sales staff training & brand ambassador deployment",
    ],
    gradientBg: "bg-[#FFF5E9]",
    iconColor: "text-[#FFB347]",
  },
  {
    id: "fabrication",
    icon: Building2,
    title: "Stall Fabrication",
    shortDesc: "Premium custom setups for exhibitions and corporate events.",
    details: [
      "3D architecture design & spatial engineering",
      "Custom timber, metal & modular fabrication",
      "Lighting, sound & AV display integration",
      "Turnkey installation & dismantle services",
    ],
    gradientBg: "bg-[#E9FFEC]",
    iconColor: "text-[#10B981]",
  },
  {
    id: "tech-marketing",
    icon: Cpu,
    title: "Tech Marketing",
    shortDesc: "Innovative digital experiences blending physical and virtual worlds.",
    details: [
      "Custom AR/VR immersive brand booths",
      "Touchscreen & motion-sensor gamification",
      "AI-powered interactive photobooths",
      "RFID lead generation & instant analytics",
    ],
    gradientBg: "bg-[#EEF7FF]",
    iconColor: "text-[#3DB5FF]",
  },
  {
    id: "experiential",
    icon: Sparkles,
    title: "Experiential Events",
    shortDesc: "Memorable events designed to build emotional brand connections.",
    details: [
      "Product launches & press conferences",
      "VIP corporate summits & galas",
      "Immersive brand pop-ups & installations",
      "End-to-end event production & management",
    ],
    gradientBg: "bg-[#F3ECFF]",
    iconColor: "text-[#6C63FF]",
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#6C63FF] uppercase bg-[#6C63FF]/10 px-4 py-1.5 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-[#0F172A]">
            Our Services
          </h2>
          <p className="text-[#64748B] text-lg">
            End-to-end execution for ambitious brands that want to stand out and convert.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveCard(isSelected ? null : item.id)}
                className={`glass-card p-6 sm:p-7 cursor-pointer relative group flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? "ring-2 ring-[#6C63FF] shadow-2xl bg-white scale-[1.02]"
                    : "bg-white/90 hover:bg-white hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Card Header: Icon & Title */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl ${item.gradientBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#0F172A] group-hover:text-[#6C63FF] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] group-hover:bg-[#6C63FF] group-hover:text-white transition-colors shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isSelected ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Dropdown Content: Short Description, Capabilities, and CTA */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pt-4 space-y-4"
                      >
                        {/* Short Description */}
                        <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                          {item.shortDesc}
                        </p>

                        {/* Collapsible Dropdown Feature Checklist */}
                        <ul className="space-y-2">
                          {item.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs font-medium text-[#334155] p-2 rounded-lg bg-slate-50 border border-slate-100"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#6C63FF] shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Card Action Link: Know More -> WhatsApp */}
                        <div className="pt-3 border-t border-[#E7ECF3]">
                          <a
                            href={`https://wa.me/917875835070?text=${encodeURIComponent(
                              `Hi BEPRO Team, I would like to know more about ${item.title}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-between w-full text-xs font-bold text-[#6C63FF] hover:text-[#5851EA] group-hover:translate-x-1 transition-transform"
                          >
                            <span>Know More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
