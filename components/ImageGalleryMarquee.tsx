"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MapPin } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface GalleryItem {
  title: string;
  location: string;
  src: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Bisleri Experience Zone",
    location: "Bangalore",
    src: "/image-gallery/bepro-bisleri-blr-1.jpg",
  },
  {
    title: "Samsung Mega Pavilion",
    location: "Delhi NCR",
    src: "/image-gallery/bepro-samsung-delhi-1.jpg",
  },
  {
    title: "Isuzu Motors Mobile Roadshow",
    location: "South Hub",
    src: "/image-gallery/bepro-isuzu-roadshow-south.jpeg",
  },
  {
    title: "Bisleri Hydration Station",
    location: "Bangalore",
    src: "/image-gallery/bepro-bisleri-blr.jpg",
  },
  {
    title: "OnePlus Launch Event",
    location: "Pune",
    src: "/image-gallery/bepro-oneplus-activation-pune.jpeg",
  },
  {
    title: "Garnier Experiential Activation",
    location: "Mall Hub",
    src: "/image-gallery/bepro-garnier-activation.jpeg",
  },
  {
    title: "Bisleri Selling Kiosk",
    location: "Gujarat",
    src: "/image-gallery/bepro-bisleri-gujrat.jpeg",
  },
  {
    title: "Xiaomi Mi Flagship",
    location: "Mumbai",
    src: "/image-gallery/bepro-mi-mumbai.jpeg",
  },
  {
    title: "Nissan Motors Roadshow",
    location: "Multi-City",
    src: "/image-gallery/bepro-nissan-roadshow.jpeg",
  },
  {
    title: "Bisleri Origin Launch",
    location: "National",
    src: "/image-gallery/bepro-bisleri-origin.jpg",
  },
  {
    title: "Toyota Brand Experience",
    location: "Mumbai",
    src: "/image-gallery/bepro-toyota-brand-activation-mumbai.jpeg",
  },
  {
    title: "TVS Mobility & Racing Drive",
    location: "Pan India",
    src: "/image-gallery/bepro-tvs-activation.jpeg",
  },
  {
    title: "OWND! Mascot Activity",
    location: "Metro Hub",
    src: "/image-gallery/bepro-ownd-activation.jpeg",
  },
  {
    title: "Transit Bus Branding",
    location: "South Region",
    src: "/image-gallery/bepro-bus-branding-south.jpeg",
  },
  {
    title: "Vedica Water MotoGP Event",
    location: "Buddh Circuit",
    src: "/image-gallery/bepro-vedica-motogp.jpeg",
  },
  {
    title: "Custom Wall Branding",
    location: "Urban Centers",
    src: "/image-gallery/bepro-wall-painting.jpeg",
  },
  {
    title: "Outdoor Promotion Campaign",
    location: "Highways & Outlets",
    src: "/image-gallery/bepro-water-tank-promotion.jpeg",
  },
];

export default function ImageGalleryMarquee() {
  return (
    <section id="our-work" className="w-full py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E7ECF3] overflow-hidden select-none">
      {/* Section Header (Editorial Magazine Composition) */}
      <div className="max-w-7xl mx-auto px-6 mb-14 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Pill Badge & Large 2-Line Headline */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C63FF]/20 text-[#6C63FF] text-xs font-bold uppercase tracking-widest bg-[#6C63FF]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#6C63FF]" />
              <span>On grounds executions</span>
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
              <span className="block">REAL-WORLD</span>
              <span className="block text-[#6C63FF]">CAMPAIGN GALLERY</span>
            </h2>
          </div>

          {/* Right Column: Vertically Centered Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed border-l-2 border-[#6C63FF]/30 pl-6 py-1">
              A curated glimpse into our live brand setups, custom fabrications, and multi-city BTL activations executed across India.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Ticker (Reverse Direction) */}
      <div className="flex overflow-hidden relative w-full mask-gradient">
        <div className="animate-marquee-reverse py-2 flex items-center gap-6 sm:gap-8 whitespace-nowrap">
          {galleryItems.concat(galleryItems).map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="relative h-60 w-80 sm:h-72 sm:w-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shrink-0 group bg-slate-100"
            >
              <Image
                src={getAssetPath(item.src)}
                alt={`${item.title} - BEPRO Live BTL Activation & Fabrication Execution in ${item.location}`}
                fill
                sizes="(max-width: 768px) 320px, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Dark Gradient Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#3DB5FF] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#3DB5FF]" />
                  {item.location}
                </span>
                <h3 className="text-base sm:text-lg font-poppins font-bold text-white tracking-tight drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
