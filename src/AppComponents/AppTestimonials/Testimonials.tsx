"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don’t just take our word for it — here’s what our customers say.
          </p>
        </div>

        {/* Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="border border-border rounded-2xl p-8 md:p-12 text-center bg-card">
            <Quote className="w-6 h-6 mx-auto mb-6 text-muted-foreground" />

            <div className="text-5xl mb-6">
              {testimonials[current].image}
            </div>

            <div className="flex justify-center mb-6">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-foreground fill-current"
                  />
                )
              )}
            </div>

            <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed">
              “{testimonials[current].content}”
            </blockquote>

            <div>
              <p className="font-semibold text-lg text-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[current].position} ·{" "}
                {testimonials[current].company}
              </p>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 border border-border rounded-full p-2 bg-background hover:bg-muted transition"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 border border-border rounded-full p-2 bg-background hover:bg-muted transition"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === current
                    ? "bg-foreground"
                    : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
