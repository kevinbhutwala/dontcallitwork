"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Filter, Grid, List, Search } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const categories = ["All", "Architecture", "Interior Spaces", "Lighting Design", "Spatial Experiences", "Experiments"];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.kelvin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F1EA]">
      <Navigation />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="mb-16 reveal-on-scroll">
          <div className="flex items-center gap-3 text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
            <span>Portfolio Archive</span>
            <span className="text-white/20">/</span>
            <span className="text-xs bg-[#D89F54]/10 text-[#D89F54] border border-[#D89F54]/30 px-2 py-0.5 rounded-full">
              Concept Explorations
            </span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-[#FAF7F2] font-normal tracking-tight">
            Selected Spaces
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#9B9890] max-w-3xl font-light leading-relaxed">
            A curated portfolio of architectural interiors, lighting choreographies, and spatial investigations exploring the sensory threshold between concrete mass and illumination.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08] mb-12 reveal-on-scroll delay-100">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none text-xs font-mono-tech">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#FAF7F2] text-[#080808] font-semibold"
                    : "bg-[#141416] text-[#A3A29E] hover:text-[#FAF7F2] border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & View Switcher */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#787774]" />
              <input
                type="text"
                placeholder="Search material, Kelvin, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121214] border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs font-mono-tech text-[#FAF7F2] placeholder-[#64625D] focus:outline-none focus:border-[#D89F54]"
              />
            </div>

            <div className="flex items-center p-1 rounded-full border border-white/10 bg-[#121214]">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "grid" ? "bg-white/15 text-[#FAF7F2]" : "text-[#787774]"
                }`}
                title="Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "table" ? "bg-white/15 text-[#FAF7F2]" : "text-[#787774]"
                }`}
                title="Index Table View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono-tech text-[#787774] mb-8">
          Showing {filteredProjects.length} of {PROJECTS.length} Architectural Concept Studies
        </div>

        {/* View Mode 1: Asymmetric Grid */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project, idx: number) => {
              const delayClass = (idx % 3 === 0) ? "delay-100" : (idx % 3 === 1) ? "delay-200" : "delay-300";
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#121213] flex flex-col justify-end transition-all duration-500 hover:border-[#D89F54]/50 reveal-on-scroll ${delayClass}`}
                >
                <div className="relative w-full h-[380px] overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono-tech">
                    <span className="px-2.5 py-1 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[#FAF7F2]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#D89F54]/20 backdrop-blur-md border border-[#D89F54]/40 text-[#D89F54]">
                      {project.kelvin}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#A3A29E] mb-1">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    <h2 className="font-serif-editorial text-2xl text-[#FAF7F2] font-normal leading-tight group-hover:text-[#D89F54] transition-colors">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-xs text-[#9B9890] line-clamp-2 font-light">
                      {project.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#D89F54]">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        )}

        {/* View Mode 2: Minimalist Photometric Index Table */}
        {viewMode === "table" && (
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#101012]">
            <table className="w-full text-left border-collapse text-xs font-mono-tech">
              <thead>
                <tr className="border-b border-white/10 bg-[#141418] text-[#787774] uppercase text-[10px] tracking-wider">
                  <th className="py-4 px-6">Project Title</th>
                  <th className="py-4 px-6 hidden sm:table-cell">Typology</th>
                  <th className="py-4 px-6 hidden md:table-cell">Location</th>
                  <th className="py-4 px-6">CCT (Kelvin)</th>
                  <th className="py-4 px-6 hidden lg:table-cell">Lux Range</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {filteredProjects.map((project: Project) => (
                  <tr
                    key={project.slug}
                    className="hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="py-4 px-6 font-serif-editorial text-base text-[#FAF7F2] group-hover:text-[#D89F54] transition-colors">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </td>
                    <td className="py-4 px-6 text-[#A3A29E] hidden sm:table-cell">
                      {project.category}
                    </td>
                    <td className="py-4 px-6 text-[#A3A29E] hidden md:table-cell">
                      {project.location}
                    </td>
                    <td className="py-4 px-6 text-[#D89F54]">
                      {project.kelvin}
                    </td>
                    <td className="py-4 px-6 text-[#A3A29E] hidden lg:table-cell">
                      {project.luxRange}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-[#FAF7F2] hover:text-[#D89F54] transition-colors"
                      >
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
