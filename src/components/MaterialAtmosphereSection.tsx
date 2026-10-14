"use client";

import { useState } from "react";
import Image from "next/image";
import { MATERIALS, MaterialStudy } from "@/data/materials";
import { Eye, Layers, Compass } from "lucide-react";

export function MaterialAtmosphereSection() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialStudy>(MATERIALS[0]);

  return (
    <section id="materials" className="relative py-28 md:py-36 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
              05 // Materiality & Atmosphere
            </p>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal tracking-tight">
              Matter Catches Light. <br />
              <span className="italic text-[#E5E3DD]">Light Reveals Matter.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9B9890] max-w-md font-light leading-relaxed">
            Light cannot exist without a surface to resist it. We study the refractive index, porosity, and microscopic relief of honest materials to calibrate shadow gradients.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none text-xs font-mono-tech">
          {MATERIALS.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(mat)}
              className={`px-5 py-3 rounded-full border transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                selectedMaterial.id === mat.id
                  ? "bg-[#FAF7F2] text-[#080808] font-semibold border-white shadow-lg"
                  : "bg-[#141416] text-[#A3A29E] hover:text-[#FAF7F2] hover:bg-[#1C1C20] border-white/[0.08]"
              }`}
              data-cursor="INSPECT"
            >
              <span>{mat.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Material Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-white/10 bg-[#121214] p-6 sm:p-10">
          {/* Macro Visual */}
          <div className="lg:col-span-6 relative min-h-[400px] sm:min-h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src={selectedMaterial.image}
              alt={selectedMaterial.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

            {/* Macro Badge */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-[#D89F54] flex items-center gap-1.5">
              <Eye className="w-3 h-3" />
              <span>1:1 MACRO TEXTURE STUDY</span>
            </div>

            {/* Bottom Reflectance Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#080808]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono-tech">
              <span className="text-[#787774]">Diffuse Reflectance:</span>
              <span className="text-[#FAF7F2] font-semibold">{selectedMaterial.reflectance}</span>
            </div>
          </div>

          {/* Editorial Analysis & Application */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
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
