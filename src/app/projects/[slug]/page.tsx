import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Layers, Sliders } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project: Project = PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F1EA]">
      <Navigation />

      {/* Cinematic Full-Bleed Hero */}
      <section className="relative w-full h-[65svh] sm:h-[80vh] min-h-[440px] sm:min-h-[580px] flex items-end pb-10 sm:pb-20 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#D89F54] hover:text-[#FAF7F2] active:scale-95 transition-all mb-4 sm:mb-6 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio Archive</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono-tech mb-3 sm:mb-4">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#080808]/85 border border-white/10 text-[#FAF7F2]">
              {project.category}
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#D89F54]/20 border border-[#D89F54]/40 text-[#D89F54]">
              {project.kelvin}
            </span>
            <span className="text-[#787774]">·</span>
            <span className="text-[#A3A29E]">{project.location}</span>
            <span className="text-[#787774]">·</span>
            <span className="text-[#A3A29E]">{project.year}</span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-6xl md:text-8xl text-[#FAF7F2] font-normal tracking-tight max-w-5xl">
            {project.title}
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-xl text-[#B5B3AC] max-w-3xl font-light">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Main Editorial Content & Specifications */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Architectural Concept & Lighting Strategy */}
          <div className="lg:col-span-8 space-y-12">
            <div className="reveal-on-scroll">
              <p className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-3">
                01 // Architectural Concept
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF7F2] font-normal mb-6">
                Capturing Darkness to Emphasize Mass
              </h2>
              <p className="text-base sm:text-lg text-[#B5B3AC] leading-relaxed font-light mb-6">
                {project.summary}
              </p>
              <p className="text-base sm:text-lg text-[#9B9890] leading-relaxed font-light">
                {project.concept}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 reveal-on-scroll">
              <p className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-3">
                02 // Lighting Choreography
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF7F2] font-normal mb-6">
                Concealed Sources & Circadian Modulation
              </h2>
              <p className="text-base sm:text-lg text-[#B5B3AC] leading-relaxed font-light">
                {project.lightingStrategy}
              </p>
            </div>

            {/* Gallery Images */}
            <div className="pt-8 border-t border-white/10 space-y-8 reveal-on-scroll">
              <p className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-2">
                03 // Spatial Perspectives & Mood Studies
              </p>
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-[#121214] group reveal-scale delay-100"
                >
                  <div className="relative h-[250px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-75" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-[#D89F54]">
                      {img.mood}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex items-center justify-between text-xs font-mono-tech text-[#9B9890]">
                    <span>{img.caption}</span>
                    <span className="text-[#64625D]">Perspective 0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Specification Telemetry Card */}
          <div className="lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-28 p-5 sm:p-8 rounded-3xl border border-white/10 bg-[#121215]">
              <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#D89F54] mb-6">
                <Sliders className="w-3.5 h-3.5" />
                <span>Photometric Dossier</span>
              </div>

              <div className="space-y-4 text-xs font-mono-tech">
                <div className="border-b border-white/[0.08] pb-3">
                  <span className="text-[#787774] block mb-1">Color Temperature (CCT):</span>
                  <span className="text-[#FAF7F2] font-semibold text-sm">{project.kelvin}</span>
                </div>

                <div className="border-b border-white/[0.08] pb-3">
                  <span className="text-[#787774] block mb-1">Illumination Range:</span>
                  <span className="text-[#FAF7F2] font-semibold">{project.luxRange}</span>
                </div>

                <div className="border-b border-white/[0.08] pb-3">
                  <span className="text-[#787774] block mb-1">Primary Luminaire Type:</span>
                  <span className="text-[#FAF7F2] font-medium">{project.photometrics.fixtureType}</span>
                </div>

                <div className="border-b border-white/[0.08] pb-3">
                  <span className="text-[#787774] block mb-1">Optical Beam Angle:</span>
                  <span className="text-[#D89F54] font-semibold">{project.photometrics.beamAngle}</span>
                </div>

                <div className="border-b border-white/[0.08] pb-3">
                  <span className="text-[#787774] block mb-1">Color Rendering Fidelity:</span>
                  <span className="text-[#FAF7F2] font-semibold">{project.photometrics.cri}</span>
                </div>

                <div className="pb-3">
                  <span className="text-[#787774] block mb-1">Concealed Lumen Density:</span>
                  <span className="text-[#FAF7F2] font-semibold">{project.photometrics.lumens}</span>
                </div>
              </div>

              {/* Material Resonance Palette */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-[#787774] mb-3">
                  <Layers className="w-3 h-3 text-[#D89F54]" />
                  <span>Material Matrix</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#1B1B1E] text-[11px] font-mono-tech text-[#D1CFC9] border border-white/[0.06]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Portfolio Navigation Action */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/projects"
                  className="w-full py-3.5 rounded-full bg-[#FAF7F2] text-[#080808] font-mono-tech text-xs uppercase tracking-widest font-semibold hover:bg-[#D89F54] hover:text-white transition-all text-center block"
                >
                  Explore All Curated Spaces
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Next / Previous Project Pagination Bar */}
        <div className="mt-24 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-6 rounded-2xl border border-white/10 bg-[#121214] hover:border-[#D89F54]/40 transition-all group flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#787774] flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Previous Space
              </span>
              <p className="font-serif-editorial text-2xl text-[#FAF7F2] group-hover:text-[#D89F54] transition-colors">
                {prevProject.title}
              </p>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-6 rounded-2xl border border-white/10 bg-[#121214] hover:border-[#D89F54]/40 transition-all group flex items-center justify-between text-right"
          >
            <div className="w-full">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#787774] flex items-center justify-end gap-1 mb-1">
                Next Space
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <p className="font-serif-editorial text-2xl text-[#FAF7F2] group-hover:text-[#D89F54] transition-colors">
                {nextProject.title}
              </p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
