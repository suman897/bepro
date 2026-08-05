"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Smartphone,
  Eye,
  Gamepad2,
  Activity,
  Radio,
  Camera,
  Database,
  Monitor,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap,
  TrendingUp,
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  description: string;
  metric: string;
  themeColor: string;
  glowColor: string;
  bullets: string[];
}

const techItems: TechItem[] = [
  {
    id: "ar",
    name: "AR Experiences",
    category: "Spatial",
    icon: Eye,
    description: "Web & app-based augmented reality filters, spatial activations, and interactive 3D product try-ons.",
    metric: "3.5x Higher Dwell Time",
    themeColor: "#6C63FF",
    glowColor: "rgba(108, 99, 255, 0.08)",
    bullets: [
      "Web-based zero-app AR try-ons",
      "Real-time face & gesture tracking",
      "Interactive 3D product visualization",
    ],
  },
  {
    id: "vr",
    name: "VR Experiences",
    category: "Spatial",
    icon: Smartphone,
    description: "Fully immersive virtual reality walkthroughs for property, luxury vehicles, and interactive brand metaverses.",
    metric: "98% User Engagement",
    themeColor: "#3DB5FF",
    glowColor: "rgba(61, 181, 255, 0.08)",
    bullets: [
      "Photorealistic 3D environment renders",
      "Multi-user synchronized VR rooms",
      "Spatial audio & haptic feedback",
    ],
  },
  {
    id: "games",
    name: "Interactive Games",
    category: "Gamification",
    icon: Gamepad2,
    description: "Custom touch arcade & motion-controlled interactive games with live leaderboards and instant prize redemption.",
    metric: "10k+ Plays / Event",
    themeColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.08)",
    bullets: [
      "Kinect & touch gesture arcade games",
      "Live event leaderboard integration",
      "Instant coupon & voucher generation",
    ],
  },
  {
    id: "motion",
    name: "Motion Sensors",
    category: "Hardware",
    icon: Activity,
    description: "Depth sensors & LiDAR technology reacting seamlessly to audience footfall, gestures, and body movement.",
    metric: "Instant Footfall Attraction",
    themeColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.08)",
    bullets: [
      "Sub-millimeter LiDAR gesture tracking",
      "Interactive floor & wall projection",
      "Heatmap & crowd density tracking",
    ],
  },
  {
    id: "rfid",
    name: "RFID Integration",
    category: "Hardware",
    icon: Radio,
    description: "Smart RFID wristbands & NFC badges enabling effortless tap-to-engage touchpoints and automatic photo tagging.",
    metric: "100% Seamless Check-in",
    themeColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.08)",
    bullets: [
      "Instant contactless registration",
      "Tap-to-share social media booths",
      "VIP access control & tracking",
    ],
  },
  {
    id: "ai",
    name: "AI Photo Booths",
    category: "AI",
    icon: Camera,
    description: "Generative AI photo background swapping, avatar creation, and instant WhatsApp delivery with brand overlays.",
    metric: "5,000+ Viral Shares",
    themeColor: "#FFB347",
    glowColor: "rgba(255, 179, 71, 0.08)",
    bullets: [
      "Generative AI background transformation",
      "Instant WhatsApp & email dispatch",
      "Custom branded frame watermarking",
    ],
  },
  {
    id: "lead",
    name: "Lead Capture",
    category: "Data",
    icon: Database,
    description: "GDPR-compliant digital registration kiosks with automatic CRM synchronization and real-time analytics dashboard.",
    metric: "Zero Paper Waste",
    themeColor: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.08)",
    bullets: [
      "Offline-first sync for remote venues",
      "Automated lead scoring & CRM export",
      "Real-time footfall & conversion metrics",
    ],
  },
  {
    id: "touch",
    name: "Touch Screens",
    category: "Hardware",
    icon: Monitor,
    description: "Large-format multi-touch kiosks and interactive video walls designed for immersive high-impact brand discovery.",
    metric: "4K Ultra-HD Visuals",
    themeColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.08)",
    bullets: [
      "Industrial-grade 4K multi-touch displays",
      "Custom interactive catalog navigation",
      "Remote CMM content management",
    ],
  },
];

export default function TechStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const selectedTech = techItems[currentIndex];

  // Auto-carousel loop (3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techItems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % techItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + techItems.length) % techItems.length);
  };

  return (
    <section
      id="tech"
      className="py-24 relative overflow-hidden bg-white select-none"
    >
      {/* Soft Ambient Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center transition-colors duration-1000">
        <motion.div
          key={selectedTech.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[700px] h-[700px] rounded-full filter blur-3xl"
          style={{
            background: `radial-gradient(circle, ${selectedTech.glowColor} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header (Center Aligned Minimal Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Technology Differentiator</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-[#111827] tracking-tight">
            Marketing Meets Technology
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto leading-relaxed">
            We combine physical activations with interactive hardware & AI software to capture actionable leads.
          </p>
        </div>

        {/* Tighter Grid: Left Vertical Nav + Right Enlarged Glassmorphism Showcase Card */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Vertical Navigation with Light Active Styling */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
            {techItems.map((tech, idx) => {
              const isSelected = currentIndex === idx;
              const Icon = tech.icon;

              return (
                <button
                  key={tech.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl flex items-center justify-between transition-all duration-300 relative group ${
                    isSelected
                      ? "bg-[#6C63FF]/10 border border-[#6C63FF]/25 text-[#6C63FF] shadow-sm scale-[1.02]"
                      : "bg-white/80 border border-[#E6ECF5] text-[#64748B] hover:bg-[#F8FAFF] hover:text-[#111827] shadow-xs"
                  }`}
                >
                  {/* Active Vertical Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeVerticalIndicator"
                      className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#6C63FF] rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5 relative z-10">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? "bg-[#6C63FF] text-white shadow-md shadow-[#6C63FF]/20"
                          : "bg-slate-100 text-[#64748B] group-hover:bg-[#6C63FF]/10 group-hover:text-[#6C63FF]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`font-poppins font-bold text-sm sm:text-base tracking-tight ${
                        isSelected ? "text-[#6C63FF]" : "text-[#111827]"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md transition-colors ${
                      isSelected
                        ? "bg-[#6C63FF]/15 text-[#6C63FF]"
                        : "bg-slate-100 text-[#94A3B8] group-hover:text-[#64748B]"
                    }`}
                  >
                    {tech.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Light Premium Glassmorphism Showcase Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech.id}
                initial={{ opacity: 0, x: 30, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF]/70 to-[#F5F2FF]/60 backdrop-blur-2xl border border-[#E6ECF5] rounded-[32px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(108,99,255,0.06)] relative overflow-hidden flex flex-col justify-between h-full space-y-6"
              >
                {/* Top Bar: Category Badge + Linear Progress Index */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6ECF5]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shadow-[#6C63FF]/20"
                      style={{ backgroundColor: selectedTech.themeColor }}
                    >
                      {React.createElement(selectedTech.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: selectedTech.themeColor }}
                      >
                        {selectedTech.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#111827] mt-1">
                        {selectedTech.name}
                      </h3>
                    </div>
                  </div>

                  {/* Linear Style Index Indicator & Prev/Next */}
                  <div className="flex items-center gap-4">
                    <span className="font-number font-bold text-xs sm:text-sm text-[#94A3B8]">
                      0{currentIndex + 1} <span className="text-[#CBD5E1]">/</span> 08
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePrev}
                        className="w-8 h-8 rounded-full border border-[#E6ECF5] bg-white flex items-center justify-center text-[#64748B] hover:text-[#111827] hover:border-[#6C63FF] transition-colors shadow-xs"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-8 h-8 rounded-full border border-[#E6ECF5] bg-white flex items-center justify-center text-[#64748B] hover:text-[#111827] hover:border-[#6C63FF] transition-colors shadow-xs"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Visual Mockup Panel (Light Glassmorphism Aesthetic) */}
                <div className="w-full h-44 sm:h-52 rounded-2xl bg-white/90 backdrop-blur-xl p-6 flex flex-col justify-between relative overflow-hidden border border-[#E6ECF5] shadow-sm group">
                  {/* Subtle Light Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

                  {/* Top Header Bar */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#6C63FF]/8 text-[#6C63FF] border border-[#6C63FF]/15 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#6C63FF]" /> BEPRO TECH CORE
                    </span>
                  </div>

                  {/* Graphic Visual Representation */}
                  <div className="relative z-10 flex items-center justify-between my-auto">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-[#64748B]">Interactive Status</p>
                      <p className="text-lg font-bold text-[#111827] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        {selectedTech.name} Active
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                      {React.createElement(selectedTech.icon, { className: "w-7 h-7" })}
                    </div>
                  </div>

                  {/* Light Accent Progress Bar */}
                  <div className="w-full bg-[#E6ECF5] h-1.5 rounded-full overflow-hidden relative z-10">
                    <motion.div
                      key={selectedTech.id}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3.5, ease: "linear" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: selectedTech.themeColor }}
                    />
                  </div>
                </div>

                {/* Description & Feature Bullets */}
                <div className="space-y-4">
                  <p className="text-[#64748B] text-base leading-relaxed">
                    {selectedTech.description}
                  </p>

                  {/* 3 Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {selectedTech.bullets.map((bullet, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white/90 border border-[#E6ECF5] flex items-start gap-2 text-xs font-semibold text-[#334155] shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#6C63FF] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlighted Impact Metric (Light Glass Card) */}
                <div className="p-4 rounded-2xl bg-white/95 border border-[#E6ECF5] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 text-[#6C63FF] flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                        Proven Performance Metric
                      </p>
                      <p className="font-poppins font-extrabold text-sm sm:text-base text-[#111827]">
                        {selectedTech.metric}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#6C63FF] text-white shadow-sm shadow-[#6C63FF]/20">
                    Verified ROI
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
