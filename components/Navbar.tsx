"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#tech" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-[#E7ECF3]/80"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Scene 2: Logo fades in at 0.8s with move down 15px & blur transition */}
        <motion.div
          initial={{ opacity: 0, y: -15, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/" className="flex items-center group relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.4, 1], opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
              className="absolute inset-0 bg-[#6C63FF]/30 blur-xl rounded-full pointer-events-none"
            />
            <div className="relative w-44 sm:w-48 h-12 sm:h-14 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={getAssetPath("/logo-new-theme.png")}
                alt="BEPRO Experiential Marketing & BTL Branding Agency Logo"
                fill
                sizes="(max-width: 768px) 180px, 220px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Scene 2: Nav links appear sequentially with 80ms stagger starting at 1.0s */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 1.0 + idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={link.href}
                className="relative px-4 py-2 font-semibold text-[#64748B] hover:text-[#6C63FF] text-sm tracking-wide rounded-full hover:bg-[#6C63FF]/8 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 transform inline-block group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-[#6C63FF] rounded-full transition-all duration-300 ease-out pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Scene 2: CTA Button slides from right with spring easing at 1.3s */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1.3,
          }}
          className="hidden md:flex items-center gap-4"
        >
          <a
            href="https://wa.me/917875835070?text=Hi%20BEPRO%20Team%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20campaign."
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-[2px] rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#6C63FF]/30 hover:shadow-xl hover:shadow-[#6C63FF]/50 inline-block"
          >
            <span
              className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, #6C63FF 0%, #3DB5FF 25%, #EC4899 50%, #FFB347 75%, #6C63FF 100%)",
              }}
            />
            <span className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-[#0F172A] bg-white group-hover:bg-slate-50 transition-colors duration-300 overflow-hidden">
              <span className="absolute inset-0 w-1/2 h-full bg-slate-200/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <Sparkles className="w-4 h-4 text-[#6C63FF] group-hover:rotate-12 transition-transform duration-300" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#6C63FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#0F172A] hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E7ECF3] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-lg text-[#0F172A] hover:text-[#6C63FF] py-2 transition-all duration-300 hover:scale-105 hover:translate-x-2 transform origin-left"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/917875835070?text=Hi%20BEPRO%20Team%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20campaign."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 rounded-full font-bold bg-[#6C63FF] text-white shadow-lg shadow-[#6C63FF]/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
