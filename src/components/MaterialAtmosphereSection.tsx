"use client";

import { useState } from "react";
import Image from "next/image";
import { MATERIALS, MaterialStudy } from "@/data/materials";
import { Eye, Layers, Compass } from "lucide-react";

export function MaterialAtmosphereSection() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialStudy>(MATERIALS[0]);

  return (
    <section id="materials" className="relative py-20 sm:py-28 md:py-36 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8 reveal-on-scroll">
          <div>
            <p className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
              05 // Materiality & Atmosphere
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal tracking-tight">
              Matter Catches Light. <br />
              <span className="italic text-[#E5E3DD]">Light Reveals Matter.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9B9890] max-w-md font-light leading-relaxed">
            Light cannot exist without a surface to resist it. We study the refractive index, porosity, and microscopic relief of honest materials to calibrate shadow gradients.
          </p>
        </div>

        {/* Material Selection Tabs with smooth iOS horizontal swipe */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 sm:mb-10 ios-scroll-x text-xs font-mono-tech reveal-on-scroll delay-100 -mx-4 px-4 sm:mx-0 sm:px-0">
          {MATERIALS.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(mat)}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border transition-all duration-300 whitespace-nowrap flex items-center gap-2 shrink-0 active:scale-95 ${
                selectedMaterial.id === mat.id
                  ? "bg-[#FAF7F2] text-[#080808] font-semibold border-white shadow-lg"
                  : "bg-[#141416] text-[#A3A29E] hover:text-[#FAF7F2] hover:bg-[#1C1C20] border-white/[0.08]"
              }`}
            >
              <span>{mat.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Material Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch rounded-3xl border border-white/10 bg-[#121214] p-4 sm:p-7 md:p-10 reveal-scale delay-200">
          {/* Macro Visual */}
          <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[380px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
            {MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  selectedMaterial.id === mat.id ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            ))}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent pointer-events-none" />

            {/* Macro Badge */}
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-30 px-3 py-1.5 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-[#D89F54] flex items-center gap-1.5">
              <Eye className="w-3 h-3" />
              <span>1:1 MACRO TEXTURE STUDY</span>
            </div>

            {/* Bottom Reflectance Badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-30 p-3 sm:p-4 rounded-xl bg-[#080808]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono-tech">
              <span className="text-[#787774]">Diffuse Reflectance:</span>
              <span className="text-[#FAF7F2] font-semibold">{selectedMaterial.reflectance}</span>
            </div>
          </div>

          {/* Editorial Analysis & Application */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1 sm:py-2">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Tactile Specification</span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-5xl text-[#FAF7F2] font-normal mb-2">
                {selectedMaterial.name}
              </h3>

              <p className="text-sm font-serif-editorial italic text-[#C9A063] mb-6">
                {selectedMaterial.subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#B5B3AC] leading-relaxed mb-8 font-light">
                {selectedMaterial.tactileDescription}
              </p>

              {/* Technical Attributes */}
              <div className="space-y-4 border-t border-b border-white/[0.08] py-6 text-xs font-mono-tech">
                <div>
                  <span className="text-[#787774] block mb-1">Color Temperature Affinity:</span>
                  <span className="text-[#FAF7F2]">{selectedMaterial.colorTempAffinity}</span>
                </div>
                <div>
                  <span className="text-[#787774] block mb-1">Specular Scattering Behavior:</span>
                  <span className="text-[#FAF7F2]">{selectedMaterial.specularBehavior}</span>
                </div>
                <div>
                  <span className="text-[#787774] block mb-1">Surface Micro-Texture:</span>
                  <span className="text-[#FAF7F2]">{selectedMaterial.texture}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-[#787774] mb-2">
                <Compass className="w-3.5 h-3.5 text-[#D89F54]" />
                <span>Architectural Application</span>
              </div>
              <p className="font-serif-editorial text-lg text-[#E5E3DD] italic">
                {selectedMaterial.architecturalApplication}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
