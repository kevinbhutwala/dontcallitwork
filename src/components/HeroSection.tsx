"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles, Sun, Moon } from "lucide-react";

export function HeroSection() {
  const [stage, setStage] = useState(1); // 1: slit of light, 2: fully revealed
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [heroBrightness, setHeroBrightness] = useState<"dusk" | "nocturne" | "amber">("amber");

  useEffect(() => {
    // Orchestrated opening sequence:
    const timer = setTimeout(() => setStage(2), 400);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] min-h-[100dvh] h-[100dvh] flex items-center justify-center overflow-hidden bg-[#080808] select-none">
      {/* Background Architectural Image Container */}
      <div
        className="absolute inset-0 will-change-transform scale-105 sm:scale-110 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)`,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="Atmospheric architectural concrete interior with dramatic warm lighting at dusk"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-all duration-1000 ${
            stage < 2 ? "scale-105 blur-sm" : "scale-100 blur-0"
          } ${
            heroBrightness === "nocturne"
              ? "brightness-[0.45] contrast-125"
              : heroBrightness === "dusk"
              ? "brightness-[0.75] contrast-105"
              : "brightness-[0.65] contrast-115"
          }`}
        />

        {/* Cinematic Vignette & Shadow Falloff */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80 pointer-events-none" />

        {/* Dynamic Warm Tungsten Light Beam / Spill */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[700px] sm:h-[700px] rounded-full blur-[90px] sm:blur-[140px] pointer-events-none transition-all duration-1000 ${
            stage === 2 ? "opacity-70 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            background:
              heroBrightness === "nocturne"
                ? "radial-gradient(circle, rgba(160, 100, 40, 0.25) 0%, rgba(8, 8, 8, 0) 70%)"
                : heroBrightness === "dusk"
                ? "radial-gradient(circle, rgba(230, 180, 120, 0.35) 0%, rgba(8, 8, 8, 0) 70%)"
                : "radial-gradient(circle, rgba(245, 198, 119, 0.45) 0%, rgba(8, 8, 8, 0) 70%)",
            transform: `translate3d(calc(-50% + ${mouseOffset.x * 1.2}px), ${mouseOffset.y * 1.2}px, 0)`,
          }}
        />
      </div>

      {/* Opening Animation: Central Slit of Light (Expands Outwards) */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none transition-all duration-1000 ease-in-out ${
          stage === 0
            ? "bg-[#080808] opacity-100"
            : stage === 1
            ? "bg-[#080808] opacity-90"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* The razor-thin vertical line of light */}
        <div
          className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#F5C677] to-transparent transition-all duration-700 ${
            stage === 0 ? "w-0 opacity-0" : stage === 1 ? "w-1 opacity-100 shadow-[0_0_40px_#F5C677]" : "w-full opacity-0"
          }`}
        />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-8 md:px-10 w-full pt-16 sm:pt-20">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            stage === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Top Architectural Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 mb-5 sm:mb-8 text-[10px] sm:text-[11px] font-mono-tech tracking-widest text-[#D89F54] uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89F54] animate-pulse" />
              STUDIO MANIFESTO 01
            </span>
            <span className="hidden sm:inline text-white/30">/</span>
            <span className="hidden sm:inline text-[#C9A063]">BETWEEN CONCRETE AND LIGHT</span>
            <span className="text-white/30">/</span>
            <span className="text-[#FAF7F2]">45.4642° N, 9.1900° E</span>
          </div>

          {/* Main Statement (Editorial Serif) */}
          <h1 className="font-serif-editorial text-[32px] sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF7F2] font-normal leading-[1.08] max-w-5xl drop-shadow-lg">
            We don’t design spaces. <br className="hidden xs:block sm:block" />
            <span className="italic font-light text-[#FAF7F2]">
              We design how they feel.
            </span>
          </h1>

          {/* Sub-Manifesto */}
          <p className="mt-5 sm:mt-8 text-sm sm:text-lg md:text-xl text-[#E8E6DF] max-w-2xl font-light leading-relaxed drop-shadow-md">
            Architecture is not just about structure. Lighting is not just about illumination. 
            Together, they choreograph shadow, texture, and emotional consciousness.
          </p>

          {/* Action Callouts & Interactive Mood Controls */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-5">
            <Link
              href="/#spaces"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FAF7F2] text-[#080808] font-mono-tech text-xs uppercase tracking-widest font-semibold hover:bg-[#D89F54] hover:text-white active:scale-95 transition-all shadow-lg hover:shadow-[#D89F54]/20"
            >
              Explore Spaces
            </Link>

            <Link
              href="/light-room"
              className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-white/20 hover:border-[#D89F54] bg-[#121213]/70 backdrop-blur-md text-[#FAF7F2] font-mono-tech text-xs uppercase tracking-widest hover:bg-[#D89F54]/10 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D89F54]" />
              <span>Enter The Light Room</span>
            </Link>

            {/* Real-time Hero Lighting Shift Toggle - Now fully accessible on mobile! */}
            <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-[#121213]/85 backdrop-blur-md text-[10px] font-mono-tech text-[#A3A29E]">
              <span className="hidden sm:inline px-2 text-[#787774] uppercase tracking-wider">Mood:</span>
              <button
                onClick={() => setHeroBrightness("nocturne")}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all active:scale-95 ${
                  heroBrightness === "nocturne"
                    ? "bg-white/15 text-[#FAF7F2] font-semibold"
                    : "hover:text-white text-[#9B9890]"
                }`}
                title="Deep Nocturne (2200K)"
              >
                <Moon className="w-3 h-3 inline mr-1" />
                Nocturne
              </button>
              <button
                onClick={() => setHeroBrightness("amber")}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all active:scale-95 ${
                  heroBrightness === "amber"
                    ? "bg-[#D89F54]/25 text-[#D89F54] font-semibold"
                    : "hover:text-white text-[#9B9890]"
                }`}
                title="Warm Tungsten (2700K)"
              >
                Tungsten
              </button>
              <button
                onClick={() => setHeroBrightness("dusk")}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all active:scale-95 ${
                  heroBrightness === "dusk"
                    ? "bg-white/15 text-[#FAF7F2] font-semibold"
                    : "hover:text-white text-[#9B9890]"
                }`}
                title="Dusk Ambient (3500K)"
              >
                <Sun className="w-3 h-3 inline mr-1" />
                Dusk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator with Safe Area Bottom Offset */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[9px] sm:text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#787774] animate-bounce duration-1000 pointer-events-none"
        style={{ bottom: "max(1.25rem, calc(env(safe-area-inset-bottom) + 0.5rem))" }}
      >
        <span>Scroll to enter</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#D89F54]" />
      </div>
    </section>
  );
}
