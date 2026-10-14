"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [role='button'], .interactive-hover");
        setIsPointer(!!interactive);

        const customData = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        setCursorText(customData || "");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;
    const animateTrailer = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(animateTrailer);
    };

    animationFrameId = requestAnimationFrame(animateTrailer);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Precision Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FAF7F2] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 0.6 : 1})`,
        }}
      />

      {/* Trailing Architectural Focus Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#D89F54]/40 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
          isPointer
            ? "w-14 h-14 bg-[#D89F54]/10 border-[#D89F54] backdrop-blur-[1px]"
            : cursorText
            ? "w-20 h-20 bg-[#080808]/80 border-[#D89F54] backdrop-blur-md"
            : "w-8 h-8"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] uppercase tracking-widest text-[#FAF7F2] font-mono-tech px-1 text-center select-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Subtle Ambient Light Spill that follows cursor */}
      <div
        className="fixed top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(216,159,84,0.18) 0%, rgba(8,8,8,0) 70%)",
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
    </div>
  );
}
