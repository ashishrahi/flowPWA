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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Don’t just take our word for it — here’s what our customers say.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96">

            <div className="absolute inset-0 w-full h-full">
              <div className="bg-card text-card-foreground rounded-2xl p-8 md:p-12 shadow-2xl border border-border h-full">
                <div className="text-center h-full flex flex-col justify-center">

                  <div className="text-primary mb-4">
                    <Quote className="w-8 h-8 mx-auto" />
                  </div>

                  <div className="text-6xl mb-6">
                    {testimonials[currentTestimonial].image}
                  </div>

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-accent fill-current"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    “{testimonials[currentTestimonial].content}”
                  </blockquote>

                  <div>
                    <p className="font-semibold text-foreground text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].position} at{" "}
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-card border border-border rounded-full p-3 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-card border border-border rounded-full p-3 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial
                    ? "bg-primary"
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
