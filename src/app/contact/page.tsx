"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Send, Mail, MapPin, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    typology: "Private Residence",
    scale: "250 — 600 m²",
    atmosphere: "Tungsten Warmth (2700K)",
    timeline: "3 — 6 Months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F1EA]">
      <CustomCursor />
      <Navigation />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-3">
            <span>Project Inquiries</span>
            <span className="text-white/20">/</span>
            <span>Spatial Commission</span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-[#FAF7F2] font-normal tracking-tight">
            Initiate a Spatial Dialogue
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#9B9890] max-w-2xl font-light leading-relaxed">
            We collaborate with discerning homeowners, visionary architects, and luxury hospitality brands worldwide to choreograph light, material resonance, and emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#121215]">
              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#D89F54]/10 border border-[#D89F54] flex items-center justify-center text-[#D89F54] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF7F2]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm sm:text-base text-[#9B9890] max-w-md mx-auto font-light leading-relaxed">
                    Thank you, {formData.name}. Our studio will review your project parameters and contact you within 48 hours to discuss spatial feasibility and photometric choreography.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono-tech text-[#FAF7F2] hover:bg-white/10 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#A3A29E] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#FAF7F2] placeholder-[#64625D] focus:outline-none focus:border-[#D89F54] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#A3A29E] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@studio.com"
                        className="w-full bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#FAF7F2] placeholder-[#64625D] focus:outline-none focus:border-[#D89F54] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Location & Typology */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#A3A29E] mb-2">
                        Project Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Zurich, Switzerland"
                        className="w-full bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#FAF7F2] placeholder-[#64625D] focus:outline-none focus:border-[#D89F54] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#A3A29E] mb-2">
                        Spatial Typology
                      </label>
                      <select
                        value={formData.typology}
                        onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                        className="w-full bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D89F54] transition-colors"
                      >
                        <option value="Private Residence">Private Residence / Sanctuary</option>
                        <option value="Hospitality Environment">Boutique Hotel / Hospitality</option>
                        <option value="Gallery / Cultural">Gallery / Exhibition Space</option>
                        <option value="Commercial / Creative HQ">Creative Studio / Office</option>
                        <option value="Lighting Masterplan">Full Architectural Lighting Masterplan</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Desired Atmosphere & Scale */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#A3A29E] mb-2">
                        Primary Lighting Atmosphere
                      </label>
                      <select
                        value={formData.atmosphere}
                        onChange={(e) => setFormData({ ...formData, atmosphere: e.target.value })}
                        className="w-full bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D89F54] transition-colors"
                      >
                        <option value="Tungsten Warmth (2700K)">Tungsten Warmth (2700K Soft Glow)</option>
                        <option value="Dramatic Chiaroscuro (3000K)">Dramatic Chiaroscuro (Narrow Beam Spotlights)</option>
                        <option value="Nocturne Ember (< 2200K)">Nocturne Ember (Sub-Floor Low-Level Glow)</option>
                        <option value="Circadian Tunable (2200K - 5500K)">Circadian Tunable (Dynamic Biological Curve)</option>
                        <option value="Solar Aperture Wash">Natural Sunlight & Skylight Calibration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#A3A29E] mb-2">
                        Estimated Spatial Scale
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D89F54] transition-colors"
                      >
                        <option value="Under 250 m²">Under 250 m² (Intimate Space)</option>
                        <option value="250 — 600 m²">250 — 600 m² (Villa / Restaurant)</option>
                        <option value="600 — 1500 m²">600 — 1500 m² (Substantial Estate)</option>
                        <option value="Above 1500 m²">Above 1500 m² (Campus / Cultural Facility)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#A3A29E] mb-2">
                      Project Vision & Architectural Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the materials (concrete, travertine, timber), intended emotional atmosphere, or specific architectural challenges..."
                      className="w-full bg-[#0C0C0E] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#FAF7F2] placeholder-[#64625D] focus:outline-none focus:border-[#D89F54] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#FAF7F2] text-[#080808] font-mono-tech text-xs uppercase tracking-widest font-semibold hover:bg-[#D89F54] hover:text-white transition-all shadow-xl hover:shadow-[#D89F54]/25 flex items-center justify-center gap-2 disabled:opacity-50"
                    data-cursor="TRANSMIT"
                  >
                    {isSubmitting ? (
                      <span>Calibrating Transmission...</span>
                    ) : (
                      <>
                        <span>Transmit Spatial Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Studio Coordinates & Instagram */}
          <div className="lg:col-span-4 space-y-8">
            {/* Direct Instagram Connection */}
            <div className="p-8 rounded-3xl border border-white/10 bg-[#121215]">
              <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-[#D89F54] mb-4">
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Visual Journal</span>
              </div>
              <h3 className="font-serif-editorial text-2xl text-[#FAF7F2] mb-3">
                @dontcallitwork
              </h3>
              <p className="text-xs text-[#9B9890] leading-relaxed mb-6 font-light">
                Follow our daily explorations into architectural lighting details, raw textures, and spatial experiments.
              </p>
              <a
                href="https://www.instagram.com/dontcallitwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D89F54]/40 bg-[#D89F54]/10 text-xs font-mono-tech text-[#FAF7F2] hover:bg-[#D89F54]/20 transition-all"
              >
                <span>Direct Instagram Link</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D89F54]" />
              </a>
            </div>

            {/* Studio Coordinates */}
            <div className="p-8 rounded-3xl border border-white/10 bg-[#121215] space-y-6 text-xs font-mono-tech">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D89F54] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#787774] block mb-0.5">Location & Coordinates</span>
                  <span className="text-[#FAF7F2]">45.4642° N, 9.1900° E · International Practice</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D89F54] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#787774] block mb-0.5">Direct Correspondence</span>
                  <a
                    href="mailto:inquire@dontcallitwork.com"
                    className="text-[#FAF7F2] hover:text-[#D89F54] transition-colors"
                  >
                    inquire@dontcallitwork.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D89F54] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#787774] block mb-0.5">Lighting Standard</span>
                  <span className="text-[#FAF7F2]">Tungsten 2700K · 98+ CRI Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
