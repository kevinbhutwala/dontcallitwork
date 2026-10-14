"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, Sliders, Info, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { LightRoom3D } from "@/components/LightRoom3D";

export default function LightRoomPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F1EA]">
      <CustomCursor />
      <Navigation />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        {/* Intro Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#D89F54] hover:text-[#FAF7F2] transition-colors mb-4 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Studio</span>
            </Link>

            <div className="flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Interactive Installation</span>
            </div>

            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal tracking-tight">
              The Light Room
            </h1>
          </div>

          <p className="text-sm md:text-base text-[#9B9890] max-w-md font-light leading-relaxed">
            A real-time WebGL architectural simulation chamber. Drag to orbit the 3D space, calibrate color temperature from 1800K to 6500K, and observe physically calculated shadow falloff.
          </p>
        </div>

        {/* 3D WebGL Simulation Chamber */}
        <div className="mb-16">
          <LightRoom3D isStandalone={true} />
        </div>

        {/* Technical Explanations of the Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#121214]">
            <div className="w-8 h-8 rounded-full bg-[#D89F54]/10 border border-[#D89F54]/30 flex items-center justify-center text-[#D89F54] mb-4">
              <Sliders className="w-4 h-4" />
            </div>
            <h3 className="font-serif-editorial text-xl text-[#FAF7F2] mb-2 font-normal">
              Black-Body Chromaticity
            </h3>
            <p className="text-xs text-[#9B9890] leading-relaxed font-light">
              Our color algorithm converts correlated color temperature (Kelvin) directly into physically accurate CIE 1931 xy coordinates and RGB Planckian locus values.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#121214]">
            <div className="w-8 h-8 rounded-full bg-[#D89F54]/10 border border-[#D89F54]/30 flex items-center justify-center text-[#D89F54] mb-4">
              <Info className="w-4 h-4" />
            </div>
            <h3 className="font-serif-editorial text-xl text-[#FAF7F2] mb-2 font-normal">
              Shadow Penumbra Physics
            </h3>
            <p className="text-xs text-[#9B9890] leading-relaxed font-light">
              PCF (Percentage Closer Filtering) shadow maps calculate soft contact shadows near the plinth base, dispersing into diffuse penumbras at acute raking sun elevations.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#121214]">
            <div className="w-8 h-8 rounded-full bg-[#D89F54]/10 border border-[#D89F54]/30 flex items-center justify-center text-[#D89F54] mb-4">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-serif-editorial text-xl text-[#FAF7F2] mb-2 font-normal">
              Material Bump Scattering
            </h3>
            <p className="text-xs text-[#9B9890] leading-relaxed font-light">
              Walls and floors feature procedural board-formed concrete and travertine bump maps, rendering micro-relief grazing highlights when illumination hits at low angles.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
