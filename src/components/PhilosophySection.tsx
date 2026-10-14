"use client";

import { useState } from "react";
import Image from "next/image";

export function PhilosophySection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: "01",
      title: "The Silence of Shadow",
      tagline: "Darkness is not an absence. It is an intentional material.",
      description:
        "When modern spaces are universally flooded with flat, utilitarian illumination, architectural depth vanishes. We design with negative space first — shaping pools of intentional darkness so that every beam of light possesses weight, gravity, and intimacy.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
      statistic: "90% of architectural emotion is dictated by where light does NOT touch.",
    },
    {
      num: "02",
      title: "Material Resonance",
      tagline: "Light cannot be seen in a vacuum. It requires mass to exist.",
      description:
        "Photons only reveal themselves when they strike resistance. The raw aggregate of board-formed concrete, the micro-cavities of Roman travertine, the living patinated grain of brass. We select materials solely for how they catch, scatter, and soften illumination.",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
      statistic: "Every millimeter of surface texture alters the Kelvin perception by up to 300K.",
    },
    {
      num: "03",
      title: "Circadian Emotion",
      tagline: "A space should breathe with the biology of its inhabitant.",
      description:
        "Spaces are not static photographs. As the solar zenith descends, the interior must transition from high-focus clarity into low-level warm amber sanctuary. We calibrate every fixture to respect the biological cadence of human rest and awakening.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      statistic: "Warm-dim transitions below 2200K reduce cortisol and deepen spatial presence.",
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D89F54]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-20 reveal-on-scroll">
          <p className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-4">
            02 // The Studio Philosophy
          </p>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF7F2] font-normal tracking-tight leading-[1.05] max-w-4xl">
            A space is never <br />
            <span className="italic text-[#C9A063]">just a space.</span>
          </h2>
          <p className="mt-8 text-lg sm:text-2xl text-[#9B9890] max-w-3xl font-light leading-relaxed">
            Light is not an afterthought added to illuminate walls. Light is the primary sculpting material that defines whether a room feels like a sterile corridor or a sacred sanctuary.
          </p>
        </div>

        {/* 3 Interactive Editorial Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Pillar Selectors */}
          <div className="lg:col-span-6 space-y-6 reveal-on-scroll delay-100">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activePillar === idx
                    ? "bg-[#141416] border-[#D89F54]/40 shadow-xl shadow-[#D89F54]/5"
                    : "bg-[#0E0E10]/50 border-white/[0.06] hover:border-white/20 hover:bg-[#121214]"
                }`}
                data-cursor="EXPAND"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tech text-xs tracking-widest text-[#D89F54]">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-mono-tech uppercase text-[#787774]">
                    Principle {idx + 1} of 3
                  </span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#FAF7F2] font-normal mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm font-serif-editorial italic text-[#C9A063] mb-3">
                  “{pillar.tagline}”
                </p>
                <p className="text-xs sm:text-sm text-[#9B9890] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Immersive Visual & Photometric Metric */}
          <div className="lg:col-span-6 relative reveal-scale delay-200">
            <div className="relative h-[480px] sm:h-[560px] w-full rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src={pillars[activePillar].image}
                alt={pillars[activePillar].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

              {/* Inset Metric Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#080808]/85 backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-mono-tech uppercase tracking-widest text-[#D89F54] mb-1">
                  OBSERVATION & METRIC
                </p>
                <p className="font-serif-editorial text-lg sm:text-xl text-[#FAF7F2] italic">
                  {pillars[activePillar].statistic}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
