"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Custom easing functions with proper typing
const customEasing = {
  smooth: "0.25, 0.1, 0.25, 1.0",
  bounceOut: "0.68, -0.55, 0.265, 1.55"
} as const;

export default function GSAPProvider() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Global GSAP configurations
    gsap.config({
      nullTargetWarn: false,
    });

    // Register custom easing curves with proper typing
    Object.entries(customEasing).forEach(([name, ease]) => {
      gsap.registerEase(name, gsap.parseEase(ease));
    });

    // Optional: Set global defaults
    gsap.defaults({
      ease: "power2.out",
      duration: 0.8
    });

  }, []);

  return null;
}