"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Counter({
  target,
  suffix = "+",
  triggerKey = 0,
  className = "text-[#6C63FF]",
}: {
  target: number;
  suffix?: string;
  triggerKey?: number;
  className?: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    // If triggered by card click / tap, recount immediately
    if (triggerKey > 0) {
      setCount(0);
      let start = 0;
      const duration = 1000;
      const steps = 35;
      const increment = target / steps;
      const stepTime = duration / steps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }

    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const duration = 1000;
      const steps = 35;
      const increment = target / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, triggerKey]);

  return (
    <span ref={ref} className={`font-number text-4xl lg:text-5xl font-extrabold ${className}`}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Recount keys for click interactivity
  const [recountKeys, setRecountKeys] = useState<{ [key: string]: number }>({
    campaigns: 0,
    cities: 0,
    clients: 0,
  });

  const handleCardClick = (key: string) => {
    setRecountKeys((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  // Mouse move handler for 3D card tilt & parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    setMousePos({
      x,
      y,
      rawX: e.clientX - rect.left,
      rawY: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, rawX: 0, rawY: 0 });
    setIsHovered(false);
  };

  // Scroll compression & card drift animation
  const { scrollY } = useScroll();
  const topCardDriftY = useTransform(scrollY, [0, 600], [0, -70]);
  const bottomCardDriftY = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen relative flex items-center pt-32 pb-20 overflow-hidden bg-white select-none"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[750px] h-[750px] rounded-full bg-radial from-[#6C63FF]/15 via-[#3DB5FF]/10 to-transparent filter blur-3xl animate-pulse" />
      </div>

      {/* Mouse Spotlight Glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.rawX}px ${mousePos.rawY}px, rgba(108, 99, 255, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* Hero section container */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#6C63FF]/25 backdrop-blur-xl shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6C63FF]" />
            <span className="text-xs font-semibold tracking-wider text-[#6C63FF] uppercase">
              ATL • BTL • Experiential Activations
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
            <span className="block">Creating</span>
            <span className="inline-block bg-gradient-to-r from-[#6C63FF] via-[#818CF8] to-[#3DB5FF] bg-clip-text text-transparent animate-gradient-slow">
              Experiences
            </span>{" "}
            <br />
            <span className="block">That Build Brands</span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg sm:text-xl text-[#64748B] max-w-xl leading-relaxed">
            BEPRO helps brands engage audiences through ATL, BTL, experiential
            activations, custom stall fabrication, and technology-driven marketing solutions.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button */}
            <motion.div whileHover={{ y: -4, scale: 1.03 }} className="relative group">
              <a
                href="https://wa.me/917875835070?text=Hi%20BEPRO%20Team%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20campaign."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-[#6C63FF] hover:bg-[#5851EA] shadow-lg shadow-[#6C63FF]/30 hover:shadow-xl hover:shadow-[#6C63FF]/40 transition-all duration-300"
              >
                <span>Get Proposal</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Secondary Button */}
            <motion.div whileHover={{ y: -4, scale: 1.03 }}>
              <a
                href="#our-work"
                onClick={(e) => {
                  e.preventDefault();
                  const brandsEl = document.getElementById("brands-marquee");
                  const galleryEl = document.getElementById("our-work");
                  if (brandsEl) {
                    const navEl = document.querySelector("header");
                    const navHeight = navEl ? navEl.offsetHeight : 80;
                    const brandsRect = brandsEl.getBoundingClientRect();
                    const brandsTop = brandsRect.top + window.scrollY;
                    const brandsHeight = brandsRect.height;
                    const targetScroll = brandsTop + brandsHeight * 0.5 - navHeight;
                    window.scrollTo({
                      top: Math.max(0, targetScroll),
                      behavior: "smooth",
                    });
                  } else if (galleryEl) {
                    galleryEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0F172A] bg-white hover:bg-slate-50 border border-[#E2E8F0] hover:border-[#6C63FF] transition-all duration-300 shadow-sm"
              >
                Our Work
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column Interactive Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-5 w-full"
        >
          {/* Mobile Layout (< sm): Sleek Horizontal 3-Metric Bar */}
          <div className="sm:hidden w-full pt-6">
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-4 shadow-lg shadow-slate-900/5 grid grid-cols-3 gap-2 text-center divide-x divide-slate-100">
              <div onClick={() => handleCardClick("cities")} className="cursor-pointer px-1">
                <Counter target={62} triggerKey={recountKeys.cities} className="text-[#6C63FF] !text-2xl sm:!text-3xl" />
                <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">Cities</p>
              </div>
              <div onClick={() => handleCardClick("campaigns")} className="cursor-pointer px-1">
                <Counter target={500} triggerKey={recountKeys.campaigns} className="text-[#0F172A] !text-2xl sm:!text-3xl" />
                <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">Campaigns</p>
              </div>
              <div onClick={() => handleCardClick("clients")} className="cursor-pointer px-1">
                <Counter target={100} triggerKey={recountKeys.clients} className="text-[#0F172A] !text-2xl sm:!text-3xl" />
                <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">Clients</p>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Floating Layout (>= sm) */}
          <div className="hidden sm:flex relative h-[460px] sm:h-[520px] w-full items-center justify-center">
            {/* Purple "62+ Cities Covered" card */}
            <div
              onClick={() => handleCardClick("cities")}
              className="absolute top-[36%] left-[0%] min-w-[210px] z-20 cursor-pointer group select-none"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotateX: -mousePos.y * 14,
                  rotateY: mousePos.x * 15,
                }}
                transition={{
                  y: { duration: 5.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                  rotateX: { type: "spring", stiffness: 150, damping: 25 },
                  rotateY: { type: "spring", stiffness: 150, damping: 25 },
                }}
                whileHover={{ scale: 1.1, y: -14, zIndex: 40 }}
                whileTap={{ scale: 0.96 }}
                className="relative bg-gradient-to-br from-[#4F46E5] via-[#5851EA] to-[#6366F1] text-white p-7 sm:p-8 rounded-[32px] shadow-[0_15px_35px_rgba(79,70,229,0.28)] group-hover:shadow-[0_35px_80px_-15px_rgba(79,70,229,0.48),0_15px_25px_-10px_rgba(79,70,229,0.25)] transition-all duration-500 space-y-1 overflow-hidden border border-white/25"
              >
                <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <Counter target={62} triggerKey={recountKeys.cities} className="text-white" />
                  <p className="text-sm font-semibold text-white/90 mt-1">Cities Covered</p>
                </div>
              </motion.div>
            </div>

            {/* Top "500+ Campaigns Executed" card */}
            <motion.div
              style={{ y: topCardDriftY }}
              onClick={() => handleCardClick("campaigns")}
              className="absolute top-[2%] right-[0%] min-w-[210px] cursor-pointer group select-none"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateX: -mousePos.y * 12,
                  rotateY: mousePos.x * 12,
                }}
                transition={{
                  y: { duration: 4.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                  rotateX: { type: "spring", stiffness: 150, damping: 25 },
                  rotateY: { type: "spring", stiffness: 150, damping: 25 },
                }}
                whileHover={{ scale: 1.08, y: -14, zIndex: 30 }}
                whileTap={{ scale: 0.96 }}
                className="relative bg-white/95 backdrop-blur-2xl border border-slate-100 p-7 sm:p-8 rounded-[32px] shadow-[0_15px_35px_rgba(15,23,42,0.08)] group-hover:shadow-[0_30px_60px_-10px_rgba(108,99,255,0.22),0_15px_25px_-10px_rgba(15,23,42,0.06)] transition-all duration-500 space-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer pointer-events-none" />
                <div>
                  <Counter target={500} triggerKey={recountKeys.campaigns} />
                  <p className="text-sm font-semibold text-[#64748B] mt-1 group-hover:text-[#0F172A] transition-colors">
                    Campaigns Executed
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom "100+ Happy Corporate Clients" card */}
            <motion.div
              style={{ y: bottomCardDriftY }}
              onClick={() => handleCardClick("clients")}
              className="absolute bottom-[2%] right-[4%] min-w-[210px] cursor-pointer group select-none"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotateX: -mousePos.y * 12,
                  rotateY: mousePos.x * 12,
                }}
                transition={{
                  y: { duration: 4.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                  rotateX: { type: "spring", stiffness: 150, damping: 25 },
                  rotateY: { type: "spring", stiffness: 150, damping: 25 },
                }}
                whileHover={{ scale: 1.08, y: -14, zIndex: 30 }}
                whileTap={{ scale: 0.96 }}
                className="relative bg-white/95 backdrop-blur-2xl border border-slate-100 p-7 sm:p-8 rounded-[32px] shadow-[0_15px_35px_rgba(15,23,42,0.08)] group-hover:shadow-[0_30px_60px_-10px_rgba(255,179,71,0.3),0_15px_25px_-10px_rgba(15,23,42,0.06)] transition-all duration-500 space-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer pointer-events-none" />
                <div>
                  <Counter target={100} triggerKey={recountKeys.clients} />
                  <p className="text-sm font-semibold text-[#64748B] mt-1 group-hover:text-[#0F172A] transition-colors">
                    Happy Corporate Clients
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
