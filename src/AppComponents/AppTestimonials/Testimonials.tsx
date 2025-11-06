"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Sales Director",
    company: "TechCorp Inc.",
    image: "👩‍💼",
    content:
      "Hyperflow has transformed our sales process. Our conversion rates increased by 45% in just 3 months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "StartupXYZ",
    image: "👨‍💼",
    content:
      "The AI-powered lead scoring is incredibly accurate. We're closing deals faster than ever before.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Manager",
    company: "GrowthLabs",
    image: "👩‍🎨",
    content:
      "Integration was seamless and the support team is fantastic. Highly recommended for any sales team!",
    rating: 5,
  },
] as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? -45 : 45,
  }),
};

const transitionConfig = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
};

export default function Testimonials() {
  const [[currentTestimonial, direction], setCurrentTestimonial] = useState([
    0, 0,
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => [(prev[0] + 1) % testimonials.length, 1]);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => [
      (prev[0] - 1 + testimonials.length) % testimonials.length,
      -1,
    ]);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial((prev) => [index, index > prev[0] ? 1 : -1]);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-section",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="testimonial-section py-20 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our
            <motion.span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              whileInView={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {" "}
              Clients Say
            </motion.span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Don’t just take our word for it — here’s what our customers have to
            say about their experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 perspective-1000">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transitionConfig}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-card text-card-foreground rounded-2xl p-8 md:p-12 shadow-2xl border border-border h-full transform-style-preserve-3d">
                  <div className="text-center h-full flex flex-col justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="text-primary mb-4"
                    >
                      <Quote className="w-8 h-8 mx-auto" />
                    </motion.div>

                    <motion.div
                      className="text-6xl mb-6"
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {testimonials[currentTestimonial].image}
                    </motion.div>

                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: 0.5 + i * 0.1,
                              type: "spring",
                            }}
                          >
                            <Star className="w-6 h-6 text-accent fill-current" />
                          </motion.div>
                        )
                      )}
                    </motion.div>

                    <motion.blockquote
                      className="text-xl text-muted-foreground mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      “{testimonials[currentTestimonial].content}”
                    </motion.blockquote>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="font-semibold text-foreground text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].position} at{" "}
                        {testimonials[currentTestimonial].company}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-card border border-border rounded-full p-3 shadow-lg backdrop-blur-sm"
            whileHover={{
              scale: 1.1,
              backgroundColor: "hsl(var(--primary) / 0.1)",
              borderColor: "hsl(var(--primary) / 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-card border border-border rounded-full p-3 shadow-lg backdrop-blur-sm"
            whileHover={{
              scale: 1.1,
              backgroundColor: "hsl(var(--primary) / 0.1)",
              borderColor: "hsl(var(--primary) / 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </motion.button>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center space-x-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "bg-primary"
                    : "bg-muted-foreground/40"
                }`}
                whileHover={{ scale: 1.5 }}
                animate={{
                  scale: index === currentTestimonial ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
