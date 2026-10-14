"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { ArrowUpRight, Filter } from "lucide-react";

export function SelectedSpacesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Architecture", "Interior Spaces", "Lighting Design", "Spatial Experiences", "Experiments"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="spaces" className="relative py-28 md:py-36 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header & Editorial Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-on-scroll">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
              <span>03 // Selected Spaces</span>
              <span className="text-white/20">/</span>
              <span className="text-xs bg-[#D89F54]/10 text-[#D89F54] border border-[#D89F54]/30 px-2 py-0.5 rounded-full">
                Concept Studies
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal tracking-tight">
              Spatial Interventions & <br />
              <span className="italic text-[#E5E3DD]">Lighting Choreography</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#9B9890] max-w-md font-light leading-relaxed">
            Exploratory architectural concept projects investigating the dialogue between brutalist mass, natural light apertures, and concealed artificial luminaires.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none text-xs font-mono-tech reveal-on-scroll delay-100">
          <Filter className="w-3.5 h-3.5 text-[#787774] mr-2 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#FAF7F2] text-[#080808] font-semibold shadow-md"
                  : "bg-[#141416] text-[#9B9890] hover:text-[#FAF7F2] hover:bg-[#1E1E22] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          {filteredProjects.map((project: Project, idx: number) => {
            // Asymmetric layout span classes
            const colSpan =
              idx === 0
                ? "lg:col-span-8"
                : idx === 1
                ? "lg:col-span-4"
                : idx === 2
                ? "lg:col-span-4"
                : idx === 3
                ? "lg:col-span-8"
                : "lg:col-span-6";

            const heightClass =
              idx === 0
                ? "h-[450px] sm:h-[540px]"
                : idx === 1
                ? "h-[450px] sm:h-[540px]"
                : "h-[400px] sm:h-[460px]";

            const delayClass = (idx % 3 === 0) ? "delay-100" : (idx % 3 === 1) ? "delay-200" : "delay-300";

            return (
              <div
                key={project.slug}
                className={`${colSpan} group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#121213] flex flex-col justify-end transition-all duration-500 hover:border-[#D89F54]/50 hover:shadow-2xl hover:shadow-[#D89F54]/5 reveal-on-scroll ${delayClass}`}
                data-cursor="VIEW SPACE"
              >
                {/* Background Image Container with Zoom */}
                <div className={`relative w-full ${heightClass} overflow-hidden`}>
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono-tech">
                    <span className="px-2.5 py-1 rounded-full bg-[#080808]/75 backdrop-blur-md border border-white/10 text-[#FAF7F2]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#D89F54]/20 backdrop-blur-md border border-[#D89F54]/40 text-[#D89F54]">
                      {project.kelvin}
                    </span>
                  </div>

                  {/* Bottom Editorial Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-[11px] font-mono-tech text-[#A3A29E] mb-1">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.luxRange}</span>
                    </div>

                    <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-[#FAF7F2] font-normal leading-tight group-hover:text-[#D89F54] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#9B9890] line-clamp-2 font-light">
                      {project.subtitle}
                    </p>

                    {/* Reveal Link Button */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#787774] group-hover:text-[#FAF7F2] transition-colors">
                        Explore Photometrics
                      </span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-1 text-xs font-mono-tech text-[#D89F54] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:border-[#D89F54] bg-[#121213] text-[#FAF7F2] font-mono-tech text-xs uppercase tracking-widest hover:bg-[#D89F54]/10 transition-all group"
            data-cursor="CATALOG"
          >
            <span>View Complete Spatial Portfolio</span>
            <ArrowUpRight className="w-4 h-4 text-[#D89F54] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
