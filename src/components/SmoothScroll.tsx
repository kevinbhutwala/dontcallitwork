"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Detect touch-first / mobile device
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    // Initialize Lenis with refined kinetic physics
    // On iOS and touch devices, preserve 100% native momentum scrolling and ProMotion 120Hz
    const lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: isTouchDevice ? 0 : 1, // Disable touch interception on iOS/mobile to keep native velocity
      infinite: false,
    });

    // Expose lenis instance globally for programmatic scrolling
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // RAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global Smooth Scroll Observer for .reveal-on-scroll elements
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: isTouchDevice ? "0px 0px 50px 0px" : "0px 0px -5% 0px", // triggers seamlessly on mobile
      threshold: isTouchDevice ? 0.05 : 0.1,
    });

    // Observe all present and future reveal elements
    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll:not(.is-visible)");
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-check on DOM mutations
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Intercept in-page hash anchor clicks (#spaces, #materials, etc.) for smooth animated scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element as HTMLElement, { offset: -60, duration: 1.3 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
