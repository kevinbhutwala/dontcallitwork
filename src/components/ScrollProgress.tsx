"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = (val: number) => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.max(0, Math.min(1, val))})`;
      }
    };

    let checkInterval: NodeJS.Timeout | null = null;

    const setupListener = () => {
      const lenis = (window as unknown as { lenis?: Lenis }).lenis;
      if (lenis) {
        lenis.on("scroll", (e: { progress: number }) => {
          updateProgress(e.progress);
        });
        return true;
      }
      return false;
    };

    if (!setupListener()) {
      // Fallback while lenis initializes
      const handleWindowScroll = () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        if (total > 0) {
          updateProgress(window.scrollY / total);
        }
      };
      window.addEventListener("scroll", handleWindowScroll, { passive: true });
      handleWindowScroll();

      checkInterval = setInterval(() => {
        if (setupListener()) {
          window.removeEventListener("scroll", handleWindowScroll);
          if (checkInterval) clearInterval(checkInterval);
        }
      }, 200);

      return () => {
        window.removeEventListener("scroll", handleWindowScroll);
        if (checkInterval) clearInterval(checkInterval);
      };
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-[#D89F54] via-[#F5C677] to-[#FAF7F2] origin-left will-change-transform shadow-[0_0_12px_rgba(216,159,84,0.6)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
