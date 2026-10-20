"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";

export function Footer() {
  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative bg-[#080808] border-t border-white/[0.08] pt-14 sm:pt-20 overflow-hidden text-[#9B9890]"
      style={{ paddingBottom: "max(2.5rem, calc(env(safe-area-inset-bottom) + 1.5rem))" }}
    >
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

      {/* Ambient warm glow in bottom corner */}
      <div className="absolute -bottom-40 -right-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#D89F54]/10 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Massive Typographic Signature */}
        <div className="mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
            Creative Brand & Spatial Laboratory
          </p>
          <h2 className="font-serif-editorial text-3xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-[#FAF7F2] font-normal leading-[0.9]">
            DON’T CALL IT WORK
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#A3A29E] max-w-xl font-light">
            Architecture is not just about structures. Lighting is not just about illumination. Together, they create emotion, atmosphere, and experiences.
          </p>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-12 border-y border-white/[0.08] text-sm">
          {/* Col 1: Studio Philosophy */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-3 sm:mb-4">
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
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-3 sm:mb-4">
              Exploration
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-tech">
              <li>
                <Link href="/projects" className="hover:text-[#FAF7F2] active:text-[#D89F54] transition-colors py-1 inline-block">
                  Selected Spaces (Portfolio)
                </Link>
              </li>
              <li>
                <Link href="/light-room" className="hover:text-[#D89F54] active:text-[#D89F54] transition-colors inline-flex items-center gap-1.5 py-1">
                  <span>The Light Room 3D</span>
                  <span className="text-[9px] bg-[#D89F54]/20 text-[#D89F54] px-1.5 py-0.5 rounded font-mono-tech">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/#studies" className="hover:text-[#FAF7F2] active:text-[#D89F54] transition-colors py-1 inline-block">
                  Lighting Mood Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FAF7F2] active:text-[#D89F54] transition-colors py-1 inline-block">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#materials" className="hover:text-[#FAF7F2] active:text-[#D89F54] transition-colors py-1 inline-block">
                  Materiality & Atmosphere
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Instagram Spotlight */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-3 sm:mb-4">
              Instagram Journal
            </h4>
            <p className="text-xs text-[#787774] mb-4 leading-relaxed">
              Daily visual investigations into light, shadow, texture, and architectural details.
            </p>
            <a
              href="https://www.instagram.com/dontcallitwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-full border border-[#D89F54]/40 bg-[#D89F54]/10 text-xs font-mono-tech text-[#FAF7F2] hover:bg-[#D89F54]/20 active:scale-95 transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#D89F54]" />
              <span>@dontcallitwork</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D89F54]" />
            </a>
          </div>

          {/* Col 4: Studio Coordinates */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF7F2] mb-3 sm:mb-4">
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
                className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#A3A29E] hover:text-[#FAF7F2] active:scale-95 transition-all group min-h-[40px] py-1"
                aria-label="Return to top of page"
              >
                <span>Return to Zenith</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Respectful Concept Note */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono-tech text-[#64625D]">
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
