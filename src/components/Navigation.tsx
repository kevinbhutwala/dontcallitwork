"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { AudioToggle } from "./AudioToggle";
import { InstagramIcon } from "./InstagramIcon";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.06]"
            : "py-6 bg-gradient-to-b from-[#080808]/90 via-[#080808]/50 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Signature */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            data-cursor="HOME"
          >
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D89F54] opacity-50"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D89F54]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono-tech text-sm md:text-base font-semibold tracking-wider text-[#FAF7F2] group-hover:text-[#D89F54] transition-colors">
                DON’T CALL IT WORK
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#787774] font-mono-tech hidden sm:block">
                Spatial & Lighting Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono-tech uppercase tracking-widest text-[#9B9890]">
            <Link
              href="/#spaces"
              className={`hover:text-[#FAF7F2] transition-colors ${
                pathname === "/projects" ? "text-[#D89F54]" : ""
              }`}
            >
              Spaces
            </Link>
            <Link
              href="/#studies"
              className="hover:text-[#FAF7F2] transition-colors"
            >
              Light Studies
            </Link>
            <Link
              href="/light-room"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#D89F54]/30 bg-[#D89F54]/10 text-[#FAF7F2] hover:bg-[#D89F54]/20 transition-all ${
                pathname === "/light-room" ? "ring-1 ring-[#D89F54]" : ""
              }`}
              data-cursor="3D ROOM"
            >
              <Sparkles className="w-3 h-3 text-[#D89F54]" />
              <span>The Light Room</span>
            </Link>
            <Link
              href="/#materials"
              className="hover:text-[#FAF7F2] transition-colors"
            >
              Materiality
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#FAF7F2] transition-colors ${
                pathname === "/about" ? "text-[#FAF7F2]" : ""
              }`}
            >
              Philosophy
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#FAF7F2] transition-colors ${
                pathname === "/contact" ? "text-[#FAF7F2]" : ""
              }`}
            >
              Inquire
            </Link>
          </nav>

          {/* Right Action Icons & Direct Instagram Link */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <AudioToggle />

            {/* Direct Instagram Connection */}
            <a
              href="https://www.instagram.com/dontcallitwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#D89F54]/40 bg-[#121213]/60 backdrop-blur-md text-[11px] font-mono-tech tracking-wider text-[#FAF7F2] hover:text-[#D89F54] transition-all"
              title="Follow @dontcallitwork on Instagram"
              data-cursor="INSTA"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">@dontcallitwork</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            {/* Fullscreen Menu Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full border border-white/10 hover:border-white/30 bg-[#121213]/80 text-[#FAF7F2] transition-colors lg:hidden"
              aria-label="Toggle navigation menu"
              data-cursor="MENU"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Architectural Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-[#080808]/95 backdrop-blur-2xl transition-all duration-700 flex flex-col justify-between p-8 md:p-16 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="pt-20">
          <p className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#D89F54] mb-8">
            Spatial Navigation // Index
          </p>
          <div className="flex flex-col gap-5">
            {[
              { href: "/", label: "01. The Experience" },
              { href: "/projects", label: "02. Selected Spaces" },
              { href: "/light-room", label: "03. The Light Room 3D" },
              { href: "/#studies", label: "04. Light Studies" },
              { href: "/#materials", label: "05. Material Atmosphere" },
              { href: "/#process", label: "06. Architectural Process" },
              { href: "/about", label: "07. Philosophy & Studio" },
              { href: "/contact", label: "08. Project Inquiries" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif-editorial text-2xl sm:text-3xl text-[#E5E3DD] hover:text-[#D89F54] transition-colors tracking-tight flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#D89F54] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Meta */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tech text-[#787774]">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dontcallitwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF7F2] hover:text-[#D89F54] flex items-center gap-1.5 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>instagram.com/dontcallitwork</span>
            </a>
          </div>
          <span className="text-[10px] tracking-widest uppercase">
            DON’T CALL IT WORK © 2025
          </span>
        </div>
      </div>
    </>
  );
}
