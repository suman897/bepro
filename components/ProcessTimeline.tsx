"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Brief",
    description: "Understanding brand goals, budget, audience demographics & target metrics.",
  },
  {
    number: 2,
    title: "Planning",
    description: "Location scouting, venue permissions, campaign strategy & logistics timeline.",
  },
  {
    number: 3,
    title: "Design",
    description: "3D stall renders, creative collateral, tech flow diagrams & UI mockups.",
  },
  {
    number: 4,
    title: "Fabrication",
    description: "Precision workshop manufacturing, AV testing & custom hardware assembly.",
  },
  {
    number: 5,
    title: "Execution",
    description: "On-site setup, trained promoter deployment & live event management.",
  },
  {
    number: 6,
    title: "Reporting",
    description: "Lead export, footfall data analysis, ROI audit & post-event video wrap-up.",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(3); // Default to Step 4 active like reference design

  // Track scroll position through the timeline section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  // Desktop horizontal line progress (starts at 8.333%, extends up to 83.333% to last column center)
  const desktopLineWidth = useTransform(scrollYProgress, [0, 1], ["60%", "83.333%"]);

  // Mobile vertical line progress
  const mobileLineHeight = useTransform(scrollYProgress, [0, 1], ["60%", "calc(100% - 72px)"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const calculatedIndex = Math.min(steps.length - 1, Math.floor(v * steps.length));
      if (calculatedIndex > 0) {
        setActiveStepIndex(calculatedIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} id="process" className="py-24 relative overflow-hidden bg-white select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#6C63FF] uppercase bg-[#6C63FF]/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Method</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-[#0F172A]">
            How We Work
          </h2>
          <p className="text-[#64748B] text-lg">
            End-to-end campaign execution engineered for measurable ROI.
          </p>
        </div>

        {/* Timeline Desktop Container */}
        <div className="hidden lg:block relative py-12">
          {/* Track Line connecting center of circle 1 (left 8.333%) to center of circle 6 (right 8.333%) */}
          <div className="absolute top-[76px] left-[8.333%] right-[8.333%] h-1 bg-[#E2E8F0] z-0 rounded-full -translate-y-1/2" />

          {/* Active Animated Glowing Gradient Fill Line */}
          <motion.div
            className="absolute top-[76px] left-[8.333%] h-1 bg-gradient-to-r from-[#6C63FF] via-[#5851EA] to-[#3DB5FF] z-0 rounded-full shadow-[0_0_12px_#3DB5FF] -translate-y-1/2"
            animate={{ width: `${(activeStepIndex / (steps.length - 1)) * 83.333}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isPassed = idx <= activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Circle passing over the line */}
                  <motion.div
                    animate={{
                      scale: isCurrent ? 1.15 : isPassed ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-number text-lg font-bold transition-all duration-500 mb-6 relative z-10 ${
                      isPassed
                        ? "bg-gradient-to-br from-[#6C63FF] via-[#5851EA] to-[#3DB5FF] text-white shadow-[0_0_20px_rgba(108,99,255,0.4)] ring-4 ring-[#6C63FF]/20"
                        : "bg-white text-[#94A3B8] border-2 border-[#E2E8F0] shadow-sm hover:border-[#6C63FF]"
                    }`}
                  >
                    {isPassed && !isCurrent ? (
                      <Check className="w-6 h-6 stroke-[3]" />
                    ) : (
                      step.number
                    )}

                    {/* Active Pulsing Aura */}
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-[#6C63FF]/30 pointer-events-none" />
                    )}
                  </motion.div>

                  {/* Title & Description */}
                  <h3
                    className={`text-lg font-poppins font-bold transition-colors duration-300 ${
                      isPassed ? "text-[#6C63FF]" : "text-[#0F172A]/70"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs mt-2 max-w-[150px] leading-relaxed transition-colors duration-300 ${
                      isPassed ? "text-[#475569]" : "text-[#94A3B8]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4 relative pl-4">
          {/* Vertical Track Base */}
          <div className="absolute top-[36px] bottom-[36px] left-[52px] w-1 bg-[#E2E8F0] z-0 rounded-full -translate-x-1/2" />

          {/* Vertical Active Fill Line */}
          <motion.div
            className="absolute top-[36px] left-[52px] w-1 bg-gradient-to-b from-[#6C63FF] via-[#5851EA] to-[#3DB5FF] z-0 rounded-full shadow-[0_0_12px_#3DB5FF] -translate-x-1/2"
            style={{ height: mobileLineHeight }}
          />

          {steps.map((step, idx) => {
            const isPassed = idx <= activeStepIndex;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative z-10 flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isPassed
                    ? "bg-white border-[#6C63FF]/30 shadow-md shadow-[#6C63FF]/10 ring-1 ring-[#6C63FF]/20"
                    : "bg-white/60 border-[#E2E8F0]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-number text-sm font-bold shrink-0 z-10 transition-colors duration-500 ${
                    isPassed
                      ? "bg-gradient-to-br from-[#6C63FF] to-[#3DB5FF] text-white shadow-md"
                      : "bg-white border border-[#E2E8F0] text-[#94A3B8]"
                  }`}
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    className={`font-poppins font-bold text-base transition-colors ${
                      isPassed ? "text-[#6C63FF]" : "text-[#0F172A]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
