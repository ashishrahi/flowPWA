"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, CalendarClock, Phone } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Split text into individual characters for animation
  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="char inline-block"
        whileHover={{
          y: -5,
          color: "var(--color-primary)",
          transition: { duration: 0.2 },
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const select = gsap.utils.selector(heroRef);

      const tl = gsap.timeline();

      // Badge animation
      tl.fromTo(
        select(".hero-badge"),
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // Heading characters
      tl.fromTo(
        select(".char"),
        { y: 100, opacity: 0, rotationX: 90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Subheading
      tl.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.3"
      );

      // CTA buttons
      tl.fromTo(
        select(".cta-button"),
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

      // Stats items
      tl.fromTo(
        select(".stat-item"),
        { y: 50, opacity: 0, scale: 0.5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Hero badge floating effect
      gsap.to(select(".hero-badge"), {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Badge */}
        <motion.div
          className="hero-badge inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary text-xs sm:text-sm font-medium">
            Powerful Features for Modern Marketing
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
          <div className="mb-2 sm:mb-4">{splitText("Revolutionize Your")}</div>
          <motion.div
            className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {splitText("Marketing Process")}
          </motion.div>
        </h1>

        {/* Subheading */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          Everything you need to craft intelligent strategies, impactful content,
          and high-performing campaigns — all powered by insight and creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
          <motion.button
            className="cta-button bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 group w-full sm:w-auto justify-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -10px var(--color-primary)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm sm:text-base">Start Free Trial</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.button>

          <motion.button
            className="cta-button border border-border hover:border-ring text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 group backdrop-blur-sm w-full sm:w-auto justify-center bg-accent/10 hover:bg-accent/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Book a Consulting Call</span>
            <CalendarClock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border mx-4 sm:mx-0">
          {[
            { value: "98%", label: "Campaign Accuracy Rate" },
            { value: "3.2x", label: "Faster Go-to-Market Execution" },
            { value: "24/7", label: "AI-Powered Marketing Assistance" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-item text-center group cursor-pointer p-4 sm:p-0"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2"
                whileHover={{ color: "var(--color-primary)" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
