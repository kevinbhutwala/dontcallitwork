"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles, Sun, Moon } from "lucide-react";

export function HeroSection() {
  const [stage, setStage] = useState(0); // 0: black, 1: slit of light, 2: fully revealed
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [heroBrightness, setHeroBrightness] = useState<"dusk" | "nocturne" | "amber">("amber");

  useEffect(() => {
    // Orchestrated opening sequence:
    // Step 1: 200ms -> Slit of light appears
    const timer1 = setTimeout(() => setStage(1), 200);
    // Step 2: 900ms -> Architecture and typography gradually revealed
    const timer2 = setTimeout(() => setStage(2), 900);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#080808] select-none">
      {/* Background Architectural Image Container with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform scale-105"
        style={{
          transform: `translate3d(${mouseOffset.x * -1}px, ${mouseOffset.y * -1}px, 0)`,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="Atmospheric architectural concrete interior with dramatic warm lighting at dusk"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-all duration-1000 ${
            stage < 2 ? "scale-110 blur-sm" : "scale-100 blur-0"
          } ${
            heroBrightness === "nocturne"
              ? "brightness-[0.45] contrast-125"
              : heroBrightness === "dusk"
              ? "brightness-[0.75] contrast-105"
              : "brightness-[0.65] contrast-115"
          }`}
        />

        {/* Cinematic Vignette & Shadow Falloff */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-[#080808]/70 pointer-events-none" />

        {/* Dynamic Warm Tungsten Light Beam / Spill */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
            stage === 2 ? "opacity-70 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            background:
              heroBrightness === "nocturne"
                ? "radial-gradient(circle, rgba(160, 100, 40, 0.25) 0%, rgba(8, 8, 8, 0) 70%)"
                : heroBrightness === "dusk"
                ? "radial-gradient(circle, rgba(230, 180, 120, 0.35) 0%, rgba(8, 8, 8, 0) 70%)"
                : "radial-gradient(circle, rgba(245, 198, 119, 0.45) 0%, rgba(8, 8, 8, 0) 70%)",
            transform: `translate3d(calc(-50% + ${mouseOffset.x * 2}px), ${mouseOffset.y * 2}px, 0)`,
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-20">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            stage === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Top Architectural Metadata */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8 text-[11px] font-mono-tech tracking-widest text-[#D89F54] uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89F54] animate-pulse" />
              STUDIO MANIFESTO 01
            </span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span className="hidden sm:inline text-[#9B9890]">BETWEEN CONCRETE AND LIGHT</span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span className="text-[#A3A29E]">45.4642° N, 9.1900° E</span>
          </div>

          {/* Main Statement (Editorial Serif) */}
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF7F2] font-normal leading-[1.05] max-w-5xl">
            We don’t design spaces. <br className="hidden sm:block" />
            <span className="italic font-light text-[#E5E3DD]">
              We design how they feel.
            </span>
          </h1>

          {/* Sub-Manifesto */}
          <p className="mt-8 text-base sm:text-xl text-[#B5B3AC] max-w-2xl font-light leading-relaxed">
            Architecture is not just about structure. Lighting is not just about illumination. 
            Together, they choreograph shadow, texture, and emotional consciousness.
          </p>

          {/* Action Callouts & Interactive Mood Controls */}
          <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/#spaces"
              className="px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#080808] font-mono-tech text-xs uppercase tracking-widest font-semibold hover:bg-[#D89F54] hover:text-white transition-all shadow-lg hover:shadow-[#D89F54]/20"
              data-cursor="DISCOVER"
            >
              Explore Spaces
            </Link>

            <Link
              href="/light-room"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-[#D89F54] bg-[#121213]/60 backdrop-blur-md text-[#FAF7F2] font-mono-tech text-xs uppercase tracking-widest hover:bg-[#D89F54]/10 transition-all"
              data-cursor="3D LAB"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D89F54]" />
              <span>Enter The Light Room</span>
            </Link>

            {/* Real-time Hero Lighting Shift Toggle */}
            <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full border border-white/10 bg-[#121213]/80 backdrop-blur-md text-[10px] font-mono-tech text-[#A3A29E]">
              <span className="px-2 text-[#787774] uppercase tracking-wider">Atmosphere:</span>
              <button
                onClick={() => setHeroBrightness("nocturne")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  heroBrightness === "nocturne"
                    ? "bg-white/10 text-[#FAF7F2] font-semibold"
                    : "hover:text-white"
                }`}
                title="Deep Nocturne (2200K)"
              >
                <Moon className="w-3 h-3 inline mr-1" />
                Nocturne
              </button>
              <button
                onClick={() => setHeroBrightness("amber")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  heroBrightness === "amber"
                    ? "bg-[#D89F54]/20 text-[#D89F54] font-semibold"
                    : "hover:text-white"
                }`}
                title="Warm Tungsten (2700K)"
              >
                Tungsten
              </button>
              <button
                onClick={() => setHeroBrightness("dusk")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  heroBrightness === "dusk"
                    ? "bg-white/10 text-[#FAF7F2] font-semibold"
                    : "hover:text-white"
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

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#787774] animate-bounce duration-1000">
        <span>Scroll to enter</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#D89F54]" />
      </div>
    </section>
  );
}
