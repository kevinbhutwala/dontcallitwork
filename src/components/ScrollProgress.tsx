"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll <= 0) {
        setProgress(0);
        return;
      }
      const current = Math.min(100, Math.max(0, (scrollTop / totalScroll) * 100));
      setProgress(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#D89F54] via-[#F5C677] to-[#FAF7F2] transition-[width] duration-150 ease-out will-change-[width] shadow-[0_0_12px_rgba(216,159,84,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
