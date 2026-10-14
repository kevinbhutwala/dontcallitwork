"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Sunset, Flame, Focus, Moon, Sliders } from "lucide-react";

interface LightMood {
  id: string;
  name: string;
  kelvin: number;
  kelvinLabel: string;
  lux: string;
  contrastRatio: string;
  colorHex: string;
  icon: typeof Sun;
  image: string;
  description: string;
  architecturalEffect: string;
  emotionalResonance: string;
}

export function LightStudiesSection() {
  const moods: LightMood[] = [
    {
      id: "daylight",
      name: "Daylight Zenith",
      kelvin: 5500,
      kelvinLabel: "5500K Cool Skylight",
      lux: "450 — 800 Lux",
      contrastRatio: "1:4 Soft Diffuse",
      colorHex: "#E0ECFF",
      icon: Sun,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
      description:
        "High-angle natural daylight streaming through ceiling apertures, revealing board-formed concrete textures with clinical honesty.",
      architecturalEffect: "Volumetric expansion; ceiling feels weightless and elevated.",
      emotionalResonance: "Awakened clarity, objective contemplation, serene focus.",
    },
    {
      id: "golden-hour",
      name: "Golden Hour Raking",
      kelvin: 3200,
      kelvinLabel: "3200K Amber Sunbeam",
      lux: "180 — 320 Lux",
      contrastRatio: "1:18 High Contrast",
      colorHex: "#FFB366",
      icon: Sunset,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
      description:
        "Low-angle horizontal sunbeams grazing across raw mineral aggregate, casting razor-sharp elongated shadows across the floorboards.",
      architecturalEffect: "Horizontal compression; shadows create secondary floor geometry.",
      emotionalResonance: "Nostalgic transition, heightened temporal awareness, sacred warmth.",
    },
    {
      id: "warm-ambient",
      name: "Warm Ambient Envelope",
      kelvin: 2700,
      kelvinLabel: "2700K Tungsten Cove",
      lux: "80 — 140 Lux",
      contrastRatio: "1:8 Soft Gradient",
      colorHex: "#F5C677",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
      description:
        "Concealed cove lighting concealed within ceiling perimeter pockets, bouncing soft indirect tungsten wash downward without visible sources.",
      architecturalEffect: "Boundary blurring; walls recede into a soft luminous haze.",
      emotionalResonance: "Deep domestic safety, tactile cocooning, lowered heart rate.",
    },
    {
      id: "directional-chiaroscuro",
      name: "Dramatic Chiaroscuro",
      kelvin: 3000,
      kelvinLabel: "3000K Focused Beam",
      lux: "30 — 350 Lux (Narrow)",
      contrastRatio: "1:40 Extreme Contrast",
      colorHex: "#FFE4B5",
      icon: Focus,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
      description:
        "A single calibrated 10° pinpoint luminaire punching through velvety obsidian shadow to spotlight a monolithic stone pedestal.",
      architecturalEffect: "Theatrical isolation; darkness becomes the dominant architecture.",
      emotionalResonance: "Intense gravity, reverence, museum-like stillness.",
    },
    {
      id: "minimal-nocturne",
      name: "Minimal Nocturne",
      kelvin: 2000,
      kelvinLabel: "2000K Sub-Floor Ember",
      lux: "8 — 35 Lux",
      contrastRatio: "1:12 Low-Horizon Glow",
      colorHex: "#FF8C42",
      icon: Moon,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
      description:
        "Micro-aperture step washers positioned just 150mm above the floor plane, washing the ground in embers while the upper room sleeps in darkness.",
      architecturalEffect: "Ceiling plane dissolves completely into infinite void.",
      emotionalResonance: "Nocturnal intimacy, quiet sensory recovery, meditative presence.",
    },
  ];

  const [activeMood, setActiveMood] = useState<LightMood>(moods[2]); // Default to Warm Ambient

  return (
    <section id="studies" className="relative py-28 md:py-36 bg-[#0B0B0D] border-t border-white/[0.06] overflow-hidden">
      {/* Dynamic Kelvin-reactive ambient background glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none transition-all duration-1000 opacity-20"
        style={{ backgroundColor: activeMood.colorHex }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
            04 // Interactive Light Studies
          </p>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal tracking-tight">
            One Space. <br />
            <span className="italic text-[#E5E3DD]">Five Lighting Atmospheres.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#9B9890] max-w-2xl font-light">
            Toggle between calibrated lighting moods below to observe how the exact same architectural geometry transforms in perceived volume, texture, and emotional temperature.
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {moods.map((m) => {
            const Icon = m.icon;
            const isSelected = activeMood.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMood(m)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-28 ${
                  isSelected
                    ? "bg-[#18181C] border-[#D89F54] shadow-lg shadow-[#D89F54]/10"
                    : "bg-[#121214]/60 border-white/[0.06] hover:border-white/20 hover:bg-[#161619]"
                }`}
                data-cursor="SWITCH LIGHT"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isSelected ? "text-[#D89F54]" : "text-[#787774]"
                    }`}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/20"
                    style={{ backgroundColor: m.colorHex }}
                  />
                </div>
                <div>
                  <p className="font-serif-editorial text-base text-[#FAF7F2] font-medium leading-snug">
                    {m.name}
                  </p>
                  <p className="text-[10px] font-mono-tech text-[#787774] mt-0.5">
                    {m.kelvinLabel.split(" ")[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Box: Image + Photometric Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-white/10 bg-[#121215] overflow-hidden p-6 sm:p-8">
          {/* Left: Dynamic Visual with smooth transition */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] rounded-2xl overflow-hidden border border-white/[0.08]">
            <Image
              src={activeMood.image}
              alt={activeMood.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-opacity duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70" />

            {/* Live Kelvin & Lux Badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono-tech">
              <span className="px-3 py-1.5 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[#FAF7F2] flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeMood.colorHex }}
                />
                {activeMood.kelvinLabel}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[#A3A29E]">
                {activeMood.lux}
              </span>
            </div>
          </div>

          {/* Right: Architectural & Photometric Telemetry Analysis */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-3">
                <Sliders className="w-3.5 h-3.5" />
                <span>Photometric Breakdown</span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF7F2] font-normal mb-4">
                {activeMood.name}
              </h3>

              <p className="text-sm text-[#B5B3AC] leading-relaxed mb-6 font-light">
                {activeMood.description}
              </p>

              {/* Data Table */}
              <div className="space-y-4 border-t border-b border-white/[0.08] py-5 text-xs font-mono-tech">
                <div className="flex justify-between items-center">
                  <span className="text-[#787774]">Color Temp (CCT):</span>
                  <span className="text-[#FAF7F2] font-semibold">{activeMood.kelvin} Kelvin</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#787774]">Average Illumination:</span>
                  <span className="text-[#FAF7F2] font-semibold">{activeMood.lux}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#787774]">Shadow Contrast Ratio:</span>
                  <span className="text-[#D89F54] font-semibold">{activeMood.contrastRatio}</span>
                </div>
              </div>

              {/* Spatial & Psychological Impact */}
              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-[10px] font-mono-tech uppercase tracking-widest text-[#787774] mb-1">
                    Spatial Volumetric Perception
                  </p>
                  <p className="font-serif-editorial text-base text-[#FAF7F2] italic">
                    {activeMood.architecturalEffect}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-[10px] font-mono-tech uppercase tracking-widest text-[#787774] mb-1">
                    Emotional Resonance
                  </p>
                  <p className="font-serif-editorial text-base text-[#C9A063] italic">
                    {activeMood.emotionalResonance}
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="mt-8 text-[11px] font-mono-tech text-[#64625D]">
              Calibrated in accordance with CIBSE and IESNA atmospheric hospitality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
