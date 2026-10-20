"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, Box, Layers, Zap, Heart } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Solar Observation & Horizon Mapping",
      tagline: "Before placing a single fixture, we track the sun.",
      summary:
        "We study the latitude, seasonal solar azimuth, and natural light penetration. We locate the darkest corners of the site and identify how natural skylight shifts across the concrete walls from morning to twilight.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
      deliverable: "360° Sun-Path Diagram & Equinox Solar Raycast Simulation",
    },
    {
      step: "02",
      title: "Volumetric Shadow Sculpting",
      tagline: "Carving negative space to anchor human emotion.",
      summary:
        "Architecture begins where mass stops. We sculpt architectural voids, ceiling recesses, and wall reveals to ensure that shadow has a structured home. Darkness is never accidental; it is framed with the same precision as a glass opening.",
      icon: Box,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      deliverable: "Volumetric Shadow Gradients & Spatial Depth Schematics",
    },
    {
      step: "03",
      title: "Material Resonance Calibration",
      tagline: "Pairing photon wavelengths with physical texture.",
      summary:
        "Every material possesses a unique light absorption fingerprint. We test custom concrete aggregates against varying color temperatures — testing how 2700K tungsten warms raw travertine while 4000K daylight crisps fluted glass.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
      deliverable: "Material Specular Mapping & 1:1 Physical Mockup Reviews",
    },
    {
      step: "04",
      title: "Concealed Lighting Choreography",
      tagline: "Visible light. Invisible luminaires.",
      summary:
        "Nothing ruins architectural serenity faster than glaring lightbulbs or cluttered ceilings. We engineer hidden sub-floor grazers, micro-linear perimeter reveals, and magnetic recessed optics so that only the illumination is felt, never the hardware.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      deliverable: "Concealed Detail Drawings, Photometric Run Schedules & Glare-Cutoff Plans",
    },
    {
      step: "05",
      title: "The Felt Atmosphere",
      tagline: "Good design is seen. Great design is felt.",
      summary:
        "The final calibration is emotional. We program dynamic warm-dim circadian curves and subtle scene transitions. When a visitor walks into the finished room, they do not think about architecture or lighting; they simply exhale.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      deliverable: "Autonomous Circadian Programming & Post-Occupancy Atmospheric Tuning",
    },
  ];

  return (
    <section id="process" className="relative py-20 sm:py-28 md:py-36 bg-[#0B0B0D] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-20 reveal-on-scroll">
          <p className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
            06 // The Architectural Process
          </p>
          <h2 className="font-serif-editorial text-3xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal tracking-tight">
            From Spatial Concept <br />
            <span className="italic text-[#E5E3DD]">to Living Atmosphere</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#9B9890] max-w-2xl font-light">
            A methodical architectural narrative moving from solar physics and volumetric shadow carving to the calibration of human emotion.
          </p>
        </div>

        {/* Mobile Horizontal Stepper Tabs (Visible only on < lg screens) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 ios-scroll-x text-xs font-mono-tech -mx-4 px-4">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2.5 rounded-full whitespace-nowrap transition-all flex items-center gap-2 shrink-0 active:scale-95 ${
                activeStep === idx
                  ? "bg-[#D89F54] text-[#080808] font-bold shadow-lg shadow-[#D89F54]/15"
                  : "bg-[#141416] text-[#A3A29E] border border-white/[0.06]"
              }`}
            >
              <span>{s.step}.</span>
              <span>{s.title.split("&")[0].split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* 5-Step Narrative Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Desktop Left Column: Progress Timeline Steps */}
          <div className="hidden lg:block lg:col-span-5 space-y-3 reveal-on-scroll delay-100">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer active:scale-[0.99] ${
                    isSelected
                      ? "bg-[#161619] border-[#D89F54] shadow-xl shadow-[#D89F54]/5 translate-x-2"
                      : "bg-[#101012]/50 border-white/[0.06] hover:border-white/20 hover:bg-[#141416]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-tech text-xs tracking-widest text-[#D89F54]">
                      PHASE {s.step}
                    </span>
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isSelected ? "text-[#D89F54]" : "text-[#787774]"
                      }`}
                    />
                  </div>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#FAF7F2] font-normal">
                    {s.title}
                  </h3>
                  <p className="text-xs font-serif-editorial italic text-[#C9A063] mt-1">
                    {s.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column (Primary Stage on Mobile & Desktop): Visual Stage with Details */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 reveal-scale delay-100">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121215] p-4 sm:p-6 md:p-8">
              <div className="relative h-[240px] sm:h-[340px] md:h-[400px] w-full rounded-2xl overflow-hidden mb-5 sm:mb-6 border border-white/10">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                {/* Step Marker Badge */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 px-3 py-1 rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono-tech text-[#FAF7F2]">
                  STAGE {steps[activeStep].step} OF 05
                </div>
              </div>

              {/* Narrative Content */}
              <div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#FAF7F2] font-normal mb-2 sm:mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs font-serif-editorial italic text-[#C9A063] mb-3 sm:mb-4">
                  {steps[activeStep].tagline}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#B5B3AC] leading-relaxed mb-5 sm:mb-6 font-light">
                  {steps[activeStep].summary}
                </p>

                {/* Deliverable Box */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#080808]/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono-tech">
                  <span className="text-[#787774] uppercase tracking-wider shrink-0">
                    Core Output:
                  </span>
                  <span className="text-[#D89F54] font-medium sm:text-right">
                    {steps[activeStep].deliverable}
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
