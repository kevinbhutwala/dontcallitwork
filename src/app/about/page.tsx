"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Compass, Eye, Shield } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F1EA]">
      <CustomCursor />
      <Navigation />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        {/* Editorial Studio Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
            <span>Studio Monograph</span>
            <span className="text-white/20">/</span>
            <span>Creative Direction</span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF7F2] font-normal tracking-tight leading-[0.95] max-w-5xl">
            Don’t call it work. <br />
            <span className="italic text-[#E5E3DD]">Call it an experience.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-2xl text-[#9B9890] max-w-3xl font-light leading-relaxed">
            DON’T CALL IT WORK is a creative studio and visual laboratory dedicated to the emotional intersection of architecture, lighting design, raw materiality, and spatial atmosphere.
          </p>
        </div>

        {/* Studio Image & Core Philosophy Banner */}
        <div className="relative h-[450px] sm:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 mb-20">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
            alt="DON'T CALL IT WORK Architectural Interior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.6] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 max-w-2xl">
            <p className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-2">
              FOUNDATIONAL THESIS
            </p>
            <p className="font-serif-editorial text-2xl sm:text-3xl text-[#FAF7F2] italic leading-snug">
              “Architecture gives darkness a form. Lighting gives darkness a voice.”
            </p>
          </div>
        </div>

        {/* 2-Column Editorial Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] block mb-4">
              01 // The Approach
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF7F2] font-normal leading-tight">
              Why We Treat Light as Primary Architecture
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#B5B3AC] font-light leading-relaxed">
            <p>
              In conventional construction, lighting is treated as a finishing trade — fixtures chosen late in the process, placed symmetrically in ceilings to satisfy regulatory foot-candle codes.
            </p>
            <p>
              We believe this produces emotionally detached environments. A room is not merely an enclosure of square footage; it is an emotional sanctuary where the quality of light directly dictates heart rate, biological focus, and inner stillness.
            </p>
            <p>
              By designing the lighting strategy simultaneously with the architectural mass, we integrate recessed grazers directly into structural concrete pours, calibrate window apertures to seasonal solar geometry, and hide luminaires so that only the tactile warmth remains.
            </p>
          </div>
        </div>

        {/* 3 Spatial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-white/10 mb-24">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D89F54]/10 border border-[#D89F54]/30 flex items-center justify-center text-[#D89F54]">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-serif-editorial text-2xl text-[#FAF7F2] font-normal">
              Darkness as Intention
            </h3>
            <p className="text-sm text-[#9B9890] leading-relaxed font-light">
              We shape pools of intentional shadow. Darkness is not empty space; it is the velvet canvas against which textures, materials, and art objects achieve visual dignity.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D89F54]/10 border border-[#D89F54]/30 flex items-center justify-center text-[#D89F54]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif-editorial text-2xl text-[#FAF7F2] font-normal">
              Circadian Modulation
            </h3>
            <p className="text-sm text-[#9B9890] leading-relaxed font-light">
              Spaces must breathe with human biology. From high-focus 5000K daylight down to 2200K tungsten ember warmth, illumination follows natural celestial time.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D89F54]/10 border border-[#D89F54]/30 flex items-center justify-center text-[#D89F54]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif-editorial text-2xl text-[#FAF7F2] font-normal">
              Invisible Engineering
            </h3>
            <p className="text-sm text-[#9B9890] leading-relaxed font-light">
              Visible bulbs break immersion. All our architectural details employ concealed indirect coves, sub-floor linear grazers, and precision glare-cut optics.
            </p>
          </div>
        </div>

        {/* Instagram Visual Journal Connection */}
        <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#121215] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-3">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Living Visual Journal</span>
            </div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF7F2] font-normal mb-3">
              Follow @dontcallitwork
            </h3>
            <p className="text-sm sm:text-base text-[#9B9890] font-light leading-relaxed">
              Explore our ongoing photographic investigations into brutalist concrete, interior nuances, exhibition favorites, and lighting tests documented directly on Instagram.
            </p>
          </div>

          <a
            href="https://www.instagram.com/dontcallitwork/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#FAF7F2] text-[#080808] font-mono-tech text-xs uppercase tracking-widest font-semibold hover:bg-[#D89F54] hover:text-white transition-all flex items-center gap-2 shrink-0 group"
          >
            <span>Visit @dontcallitwork</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
