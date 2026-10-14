"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";

export function ClosingSection() {
  return (
    <section className="relative min-h-[750px] flex items-center justify-center overflow-hidden bg-[#080808] border-t border-white/[0.06] select-none">
      {/* Background Cinematic Architectural Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=90"
          alt="Atmospheric architectural sanctuary in deep dusk with warm ember illumination"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.4] contrast-125"
        />
        {/* Soft Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80" />
      </div>

      {/* Warm Ambient Core Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D89F54]/15 blur-[160px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center py-24 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#080808]/70 backdrop-blur-md text-[10px] font-mono-tech tracking-[0.25em] text-[#D89F54] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D89F54]" />
          <span>CLOSING MANIFESTO</span>
        </div>

        <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-[#FAF7F2] font-normal tracking-tight leading-[0.95]">
          Good design is seen. <br />
          <span className="italic text-[#E5E3DD]">Great design is felt.</span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#B5B3AC] max-w-2xl mx-auto font-light leading-relaxed">
          Whether you are planning a private architectural sanctuary, a cultural gallery, or an experimental hospitality atmosphere — let us calibrate the relationship between concrete, shadow, and light.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/projects"
            className="px-8 py-4 rounded-full bg-[#FAF7F2] text-[#080808] font-mono-tech text-xs uppercase tracking-widest font-semibold hover:bg-[#D89F54] hover:text-white transition-all shadow-xl hover:shadow-[#D89F54]/25 flex items-center gap-2 group"
          >
            <span>Explore Portfolio Archive</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href="https://www.instagram.com/dontcallitwork/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-[#D89F54] bg-[#121213]/60 backdrop-blur-md text-[#FAF7F2] font-mono-tech text-xs uppercase tracking-widest hover:bg-[#D89F54]/10 transition-all flex items-center gap-2 group"
            data-cursor="INSTAGRAM"
          >
            <InstagramIcon className="w-4 h-4 text-[#D89F54]" />
            <span>Follow @dontcallitwork</span>
          </a>
        </div>
      </div>
    </section>
  );
}
