"use client";

import { useRef } from "react";
import { ArrowRight, CalendarClock, Phone } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-muted border border-border mb-6 sm:mb-8">
          <span className="text-foreground text-xs sm:text-sm font-medium">
            Powerful Features for Modern Marketing
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
          <div className="mb-2 sm:mb-4">Revolutionize Your</div>
          <div className="text-foreground">
            Marketing Process
          </div>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Everything you need to craft intelligent strategies, impactful content,
          and high-performing campaigns — all powered by insight and creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
          {/* Primary CTA */}
          <button
            className="bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 w-full sm:w-auto justify-center hover:opacity-90 transition"
          >
            <span className="text-sm sm:text-base">Start Free Trial</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Secondary CTA */}
          <button
            className="border border-border text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 w-full sm:w-auto justify-center bg-accent hover:bg-accent/70 transition"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Book a Consulting Call</span>
            <CalendarClock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border mx-4 sm:mx-0">
          {[
            { value: "98%", label: "Campaign Accuracy Rate" },
            { value: "3.2x", label: "Faster Go-to-Market Execution" },
            { value: "24/7", label: "AI-Powered Marketing Assistance" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
