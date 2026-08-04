"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerNavLinks = [
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#tech" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/bepro-branding/" },
    { name: "Instagram", href: "https://www.instagram.com/bepro_branding?utm_source=qr&igsh=MTE2eXg0bWpubGdtbA==" },
  ];

  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-[#E7ECF3]/80 pt-16 pb-12 relative overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full bg-radial from-[#6C63FF]/5 via-[#3DB5FF]/5 to-transparent filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#E7ECF3]">
          {/* Brand Logo & Tagline (Matches Navbar) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Link href="/" className="flex items-center group">
              <div className="relative w-36 h-10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={getAssetPath("/logo-new-theme.png")}
                  alt="BEPRO Experiential Marketing & BTL Branding Agency Logo"
                  fill
                  sizes="(max-width: 768px) 120px, 150px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <div className="hidden sm:block w-px h-6 bg-[#E7ECF3]" />
            <p className="text-xs font-medium text-[#64748B]">
              Creating Experiences That Build Brands
            </p>
          </div>

          {/* Navigation Links with Navbar-style Hover & Centered Underline Grow */}
          <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {footerNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 font-semibold text-[#64748B] hover:text-[#6C63FF] text-sm tracking-wide rounded-full hover:bg-[#6C63FF]/8 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 transform inline-block group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-[#6C63FF] rounded-full transition-all duration-300 ease-out pointer-events-none" />
              </Link>
            ))}

            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 py-2 font-semibold text-[#64748B] hover:text-[#6C63FF] text-sm tracking-wide rounded-full hover:bg-[#6C63FF]/8 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 transform inline-block group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-[#6C63FF] rounded-full transition-all duration-300 ease-out pointer-events-none" />
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full border border-[#E7ECF3] bg-white flex items-center justify-center text-[#64748B] hover:text-[#6C63FF] hover:border-[#6C63FF] hover:bg-[#6C63FF]/8 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 text-center text-xs text-[#64748B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 BEPRO Branding. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#6C63FF] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#6C63FF] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
