"use client";

import React from "react";
import Image from "next/image";

interface BrandLogo {
  name: string;
  src: string;
}

const brandLogos: BrandLogo[] = [
  { name: "Acer", src: "/Client Logos/ACER logo.png" },
  { name: "Bisleri", src: "/Client Logos/Bisleri-water-all-ad-600x600.png" },
  { name: "CEAT", src: "/Client Logos/CEAT logo.png" },
  { name: "Google", src: "/Client Logos/Google logo.png" },
  { name: "Garnier", src: "/Client Logos/Garnier logo.png" },
  { name: "Honda", src: "/Client Logos/Honda logo.png" },
  { name: "Indian Oil", src: "/Client Logos/Indian Oil.png" },
  { name: "Isuzu Motors", src: "/Client Logos/Isuzu Motors.png" },
  { name: "Jack Daniels", src: "/Client Logos/Jack Daniels.png" },
  { name: "Saint-Gobain", src: "/Client Logos/Logo-Saint-Gobain.png" },
  { name: "Xiaomi Mi", src: "/Client Logos/MI Xiaomi.png" },
  { name: "Nilkamal", src: "/Client Logos/Neelkamal logo.png" },
  { name: "Nissan Motors", src: "/Client Logos/Nissan motors logo.png" },
  { name: "Reliance Jewels", src: "/Client Logos/Reliance Jewels.png" },
  { name: "Vedika", src: "/Client Logos/vedika logo.png" },
  { name: "Bajaj", src: "/Client Logos/bajaj logo.png" },
  { name: "Bridgestone", src: "/Client Logos/bridgestone logo.png" },
  { name: "Havmor", src: "/Client Logos/havmour logo.png" },
  { name: "Samsung", src: "/Client Logos/samsung.png" },
  { name: "Maha Pune Metro", src: "/Client Logos/maha pune metro logo.png" },
  { name: "Ola", src: "/Client Logos/ola logo.png" },
  { name: "OnePlus", src: "/Client Logos/oneplus logo.png" },
  { name: "OWND!", src: "/Client Logos/ownd!.png" },
  { name: "TVS", src: "/Client Logos/tvs logo.png" },
];

export default function BrandsMarquee() {
  return (
    <section id="brands-marquee" className="w-full py-12 sm:py-16 border-y border-[#E7ECF3] bg-white/50 backdrop-blur-md overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
          Trusted by 100+ Companies & Brands
        </p>
      </div>

      <div className="flex overflow-hidden relative w-full mask-gradient">
        {/* Continuous Infinite Marquee */}
        <div className="animate-marquee py-2 sm:py-4 flex items-center gap-6 sm:gap-16 whitespace-nowrap">
          {brandLogos.concat(brandLogos).map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="group relative h-14 w-32 sm:h-24 sm:w-60 flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300 shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.src}
                  alt={`${brand.name} Logo`}
                  fill
                  sizes="(max-width: 768px) 192px, 240px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
