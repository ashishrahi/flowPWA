"use client";

import { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Zap, BarChart3, Link, Eye, Users } from "lucide-react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES_DATA = Object.freeze([
  {
    title: "AI-Backed Marketing Strategy",
    description:
      "We combine human expertise with data intelligence to uncover deep audience insights and craft strategies that drive measurable growth.",
    Icon: Target,
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "High-Impact Content Creation",
    description:
      "From storytelling to SEO — our content is engineered to engage, convert, and build brand loyalty across every channel.",
    Icon: Zap,
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Design That Performs",
    description:
      "Beautiful design meets strategic intent. We create visuals that captivate, clarify, and convert — powered by user insight and creativity.",
    Icon: BarChart3,
    gradient: "from-muted/20 to-accent/20",
  },
  {
    title: "Predictive Campaign Intelligence",
    description:
      "Leverage AI analytics to anticipate trends, optimize budgets, and ensure every campaign performs at its peak.",
    Icon: Link,
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    title: "Omnichannel Marketing Automation",
    description:
      "Automate and personalize your customer journeys across platforms — delivering the right message at the right moment.",
    Icon: Eye,
    gradient: "from-accent/20 to-muted/20",
  },
  {
    title: "Collaborative Brand Ecosystem",
    description:
      "Your team + our experts = unstoppable growth. Seamless communication, shared vision, and unified brand direction.",
    Icon: Users,
    gradient: "from-primary/20 to-secondary/20",
  },
]);

const FeatureCard = React.memo(function FeatureCard({ feature, index, setRef }: any) {
  const { title, description, Icon, gradient } = feature;

  return (
    <motion.div
      ref={(el) => setRef(el, index)}
      className="relative group cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative h-full rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-border bg-card/5 hover:bg-card/10 transition-all duration-500 group-hover:border-muted group-hover:shadow-xl group-hover:shadow-primary/10 overflow-hidden`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
        />
        <div className="absolute inset-0 bg-card/5 backdrop-blur-xl rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div className="relative z-10">
          <motion.div
            className="inline-flex p-4 rounded-2xl mb-6 bg-muted/10 backdrop-blur-sm border border-border group-hover:border-muted transition-colors duration-300"
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
          </motion.div>

          <motion.h3
            className="text-xl font-semibold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors duration-300"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex items-center text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium mr-2">Learn more</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-base">→</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

export default function FeaturesWithRefs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setFeatureRef = (el: HTMLDivElement | null, i: number) => {
    featureRefs.current[i] = el;
  };

  const features = useMemo(() => FEATURES_DATA, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".features-header",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-header",
            start: "top 80%",
          },
        }
      );

      featureRefs.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotationX: 15, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 relative bg-background text-foreground">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="features-header text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Powerful Features for{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-2"
              initial={{ backgroundPosition: "0% 50%" }}
              whileInView={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Modern Sales
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to supercharge your sales process in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} setRef={setFeatureRef} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex backdrop-blur-xl bg-card/10 border border-border rounded-xl px-6 py-3 group cursor-pointer hover:bg-card/20 transition-all duration-300 active:scale-95">
            <span className="text-foreground font-semibold text-base mr-2">
              Explore all features
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
