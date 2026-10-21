"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis with refined kinetic linear interpolation for smooth and steady scrolling
    const lenis = new Lenis({
      lerp: 0.08, // Buttery smooth linear interpolation for steady, predictable velocity
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
      syncTouch: true, // Smooth and steady on mobile/touch screens
      syncTouchLerp: 0.08,
      autoResize: true,
      smoothWheel: true,
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

    // Global Smooth Scroll Observer for .reveal-on-scroll and .reveal-scale elements
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px 180px 0px", // triggers comfortably before entering viewport
      threshold: 0, // trigger immediately upon intersecting margin
    });

    // Observe all present and future reveal elements
    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-visible), .reveal-scale:not(.is-visible)"
      );
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already within or near the viewport, immediately reveal it
        if (rect.top < window.innerHeight + 250 && rect.bottom > -150) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });
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
          // Ensure target section and all internal reveal items are immediately visible
          element.classList.add("is-visible");
          element.querySelectorAll(".reveal-on-scroll, .reveal-scale").forEach((child) => {
            child.classList.add("is-visible");
          });
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
    // Re-check visibility on page change
    setTimeout(() => {
      document
        .querySelectorAll(".reveal-on-scroll, .reveal-scale")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 250 && rect.bottom > -150) {
            el.classList.add("is-visible");
          }
        });
    }, 100);
  }, [pathname]);

  return null;
}
