"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-[#9B9890]">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

      {/* Ambient warm glow in bottom corner */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#D89F54]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Massive Typographic Signature */}
        <div className="mb-16">
          <p className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
            Creative Brand & Spatial Laboratory
          </p>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-[#FAF7F2] font-normal leading-[0.9]">
            DON’T CALL IT WORK
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A3A29E] max-w-xl font-light">
            Architecture is not just about structures. Lighting is not just about illumination. Together, they create emotion, atmosphere, and experiences.
          </p>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-y border-white/[0.08] text-sm">
          {/* Col 1: Studio Philosophy */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-4">
              Discipline
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech text-[#787774]">
              <li>Architectural Lighting</li>
              <li>Spatial Atmosphere</li>
              <li>Material Resonance</li>
              <li>Circadian Choreography</li>
              <li>Experiential Interiors</li>
            </ul>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-4">
              Exploration
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <Link href="/projects" className="hover:text-[#FAF7F2] transition-colors">
                  Selected Spaces (Portfolio)
                </Link>
              </li>
              <li>
                <Link href="/light-room" className="hover:text-[#D89F54] transition-colors flex items-center gap-1">
                  <span>The Light Room 3D</span>
                  <span className="text-[9px] bg-[#D89F54]/20 text-[#D89F54] px-1.5 py-0.5 rounded">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/#studies" className="hover:text-[#FAF7F2] transition-colors">
                  Lighting Mood Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FAF7F2] transition-colors">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FAF7F2] transition-colors">
                  Project Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Instagram Spotlight */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-4">
              Instagram Journal
            </h4>
            <p className="text-xs text-[#787774] mb-4 leading-relaxed">
              Daily visual investigations into light, shadow, texture, and architectural details.
            </p>
            <a
              href="https://www.instagram.com/dontcallitwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D89F54]/40 bg-[#D89F54]/10 text-xs font-mono-tech text-[#FAF7F2] hover:bg-[#D89F54]/20 transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#D89F54]" />
              <span>@dontcallitwork</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D89F54]" />
            </a>
          </div>

          {/* Col 4: Studio Coordinates */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-4">
              Coordinates
            </h4>
            <p className="text-xs font-mono-tech text-[#787774] leading-relaxed mb-3">
              Lat 45° 27&apos; 51&quot; N // Lon 9° 11&apos; 22&quot; E
              <br />
              Tungsten Calibration // 2700K Standard
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#A3A29E] hover:text-[#FAF7F2] transition-colors group"
                data-cursor="TOP"
              >
                <span>Return to Zenith</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Respectful Concept Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-[#64625D]">
          <p>
            © {new Date().getFullYear()} DON’T CALL IT WORK. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Curated concept spaces exploring the intersection of light, shadow, and architectural consciousness.
          </p>
        </div>
      </div>
    </footer>
  );
}
