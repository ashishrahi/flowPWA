"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for hero section
      const tl = gsap.timeline();

      // Animate badge
      tl.fromTo(".hero-badge",
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // Animate title with character splitting
      tl.fromTo(".char",
        { 
          y: 100, 
          opacity: 0,
          rotationX: 90 
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out"
        },
        "-=0.5"
      );

      // Animate subtitle
      tl.fromTo(subtitleRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.3"
      );

      // Animate CTA buttons with stagger
      tl.fromTo(".cta-button",
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "-=0.2"
      );

      // Animate stats
      tl.fromTo(".stat-item",
        { y: 50, opacity: 0, scale: 0.5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.2"
      );

      // Continuous floating animation for badge
      gsap.to(".hero-badge", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="char inline-block"
        whileHover={{ 
          y: -5,
          color: "#60A5FA",
          transition: { duration: 0.2 }
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Badge */}
        <motion.div
          className="hero-badge inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 sm:mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="text-blue-400 text-xs sm:text-sm font-medium"
          >
            AI-Powered Sales Platform
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight"
        >
          <div className="mb-2 sm:mb-4">{splitText("Revolutionize Your")}</div>
          <motion.div
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            {splitText("Sales Process")}
          </motion.div>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          Hyperflow uses advanced AI to automate your sales workflow, 
          predict customer behavior, and boost your conversion rates like never before.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <motion.button 
            className="cta-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 group w-full sm:w-auto justify-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
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
            className="cta-button border border-gray-600 hover:border-gray-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 group backdrop-blur-sm w-full sm:w-auto justify-center"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">View Demo</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10 mx-4 sm:mx-0"
        >
          {[
            { value: "98%", label: "Accuracy Rate" },
            { value: "3.2x", label: "Faster Sales Cycle" },
            { value: "24/7", label: "AI Assistance" }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-item text-center group cursor-pointer p-4 sm:p-0"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"
                whileHover={{ color: "#60A5FA" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}