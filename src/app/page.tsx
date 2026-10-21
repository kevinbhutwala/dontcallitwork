"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { SelectedSpacesSection } from "@/components/SelectedSpacesSection";
import { LightStudiesSection } from "@/components/LightStudiesSection";
import { MaterialAtmosphereSection } from "@/components/MaterialAtmosphereSection";
import { ProcessSection } from "@/components/ProcessSection";
import { LightRoom3D } from "@/components/LightRoom3D";
import { ClosingSection } from "@/components/ClosingSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F4F1EA]">
      {/* Floating Header Navigation */}
      <Navigation />

      {/* 01. Cinematic Opening Hero */}
      <HeroSection />

      {/* 02. The Studio Philosophy */}
      <PhilosophySection />

      {/* 03. Selected Spaces Gallery */}
      <SelectedSpacesSection />

      {/* 04. Interactive Light Studies */}
      <LightStudiesSection />

      {/* 05. Signature Interactive Feature: The Light Room 3D */}
      <section className="relative py-20 sm:py-28 md:py-36 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6 reveal-on-scroll">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-2 sm:mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Signature Interactive Installation</span>
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal tracking-tight">
                The Light Room <br />
                <span className="italic text-[#E5E3DD]">Interactive 3D Chamber</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2.5 sm:gap-3">
              <p className="text-sm text-[#9B9890] max-w-sm font-light leading-relaxed">
                A real-time WebGL architectural simulation. Drag to orbit the chamber, alter the Kelvin temperature, and observe physically calculated shadows.
              </p>
              <Link
                href="/light-room"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#D89F54] hover:text-[#FAF7F2] active:scale-95 transition-all py-1"
              >
                <span>Launch Fullscreen Simulator</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Three.js WebGL Chamber */}
          <div className="reveal-on-scroll delay-100">
            <LightRoom3D isStandalone={false} />
          </div>
        </div>
      </section>

      {/* 06. Material & Atmosphere */}
      <MaterialAtmosphereSection />

      {/* 07. The Architectural Process */}
      <ProcessSection />

      {/* 08. Closing Statement */}
      <ClosingSection />

      {/* 09. Footer */}
      <Footer />
    </div>
  );
}
