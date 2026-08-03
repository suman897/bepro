"use client";

import React from "react";
import Image from "next/image";

interface BrandLogo {
  name: string;
  src: string;
}

const brandLogos: BrandLogo[] = [
  { name: "Acer", src: "/client-logos/acer-logo.png" },
  { name: "Bisleri", src: "/client-logos/bisleri-water.png" },
  { name: "CEAT", src: "/client-logos/ceat-logo.png" },
  { name: "Google", src: "/client-logos/google-logo.png" },
  { name: "Garnier", src: "/client-logos/garnier-logo.png" },
  { name: "Honda", src: "/client-logos/honda-logo.png" },
  { name: "Indian Oil", src: "/client-logos/indian-oil.png" },
  { name: "Isuzu Motors", src: "/client-logos/isuzu-motors.png" },
  { name: "Jack Daniels", src: "/client-logos/jack-daniels.png" },
  { name: "Saint-Gobain", src: "/client-logos/saint-gobain.png" },
  { name: "Xiaomi Mi", src: "/client-logos/mi-xiaomi.png" },
  { name: "Nilkamal", src: "/client-logos/neelkamal-logo.png" },
  { name: "Nissan Motors", src: "/client-logos/nissan-motors-logo.png" },
  { name: "Reliance Jewels", src: "/client-logos/reliance-jewels.png" },
  { name: "Vedika", src: "/client-logos/vedika-logo.png" },
  { name: "Bajaj", src: "/client-logos/bajaj-logo.png" },
  { name: "Bridgestone", src: "/client-logos/bridgestone-logo.png" },
  { name: "Havmor", src: "/client-logos/havmor-logo.png" },
  { name: "Samsung", src: "/client-logos/samsung.png" },
  { name: "Maha Pune Metro", src: "/client-logos/maha-pune-metro-logo.png" },
  { name: "Ola", src: "/client-logos/ola-logo.png" },
  { name: "OnePlus", src: "/client-logos/oneplus-logo.png" },
  { name: "OWND!", src: "/client-logos/ownd-logo.png" },
  { name: "TVS", src: "/client-logos/tvs-logo.png" },
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
