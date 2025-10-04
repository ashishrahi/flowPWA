"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Target, Zap, BarChart3, Link, Eye, Users } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Lead Scoring",
    description: "Our AI analyzes customer behavior to prioritize high-value leads automatically.",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Automated Follow-ups",
    description: "Never miss a follow-up with intelligent automation and personalized messaging.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Predictive Analytics",
    description: "Forecast sales trends and customer behavior with 95% accuracy.",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "CRM Integration",
    description: "Seamlessly connect with your existing CRM and tools.",
    icon: <Link className="w-6 h-6" />,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Real-time Insights",
    description: "Get instant insights into your sales pipeline performance.",
    icon: <Eye className="w-6 h-6" />,
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Team Collaboration",
    description: "Work together efficiently with shared pipelines and notes.",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-cyan-500/20 to-blue-500/20"
  }
];

export default function FeaturesWithRefs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  const setFeatureRef = (element: HTMLDivElement | null, index: number) => {
    featureRefs.current[index] = element;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(".features-header",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-header",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate each feature card individually with refs
      featureRefs.current.forEach((card: HTMLDivElement | null, index: number) => {
        if (!card) return;

        // Entrance animation
        gsap.fromTo(card,
          { 
            y: 100, 
            opacity: 0,
            rotationX: 15,
            scale: 0.9
          },
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
              toggleActions: "play none none reverse"
            }
          }
        );

        // Hover animations
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            rotationY: 3,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            rotationY: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup
        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 relative">
      {/* Background Elements for Glass Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="features-header text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Powerful Features for
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block"
              initial={{ backgroundPosition: "0% 50%" }}
              whileInView={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Modern Sales
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Everything you need to supercharge your sales process in one platform.
          </motion.p>
        </motion.div>

        {/* Glassy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => setFeatureRef(el, index)}
              className="relative group cursor-pointer perspective-1000"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glass Card Container */}
              <div className="relative h-full rounded-3xl p-8 backdrop-blur-2xl border border-white/15 bg-white/3 hover:bg-white/5 transition-all duration-500 group-hover:border-white/25 group-hover:shadow-2xl group-hover:shadow-blue-500/10 overflow-hidden">
                
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-3xl" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div 
                    className="inline-flex p-4 rounded-2xl mb-6 bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-white/30 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Learn More Arrow */}
                  <motion.div 
                    className="flex items-center text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="text-lg">→</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex backdrop-blur-2xl bg-white/5 border border-white/15 rounded-2xl px-8 py-4 group cursor-pointer hover:bg-white/10 hover:border-white/25 transition-all duration-300">
            <span className="text-white font-semibold mr-3">Explore all features</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-400"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}