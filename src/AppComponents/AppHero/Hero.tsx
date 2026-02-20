"use client";

import { useRef } from "react";
import { ArrowRight, CalendarClock, Phone } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="min-h-[120vh] flex items-center justify-center pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 bg-[#f9f9f7] text-black"
    >
      <div className="max-w-6xl mx-auto w-full text-center py-20">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-black/10 mb-10 shadow-sm">
          <span className="text-black text-sm font-medium">
            Powerful Features for Modern Marketing
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <div className="mb-4">Revolutionize Your</div>
          <div>Marketing Process</div>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-black/70 mb-14 max-w-3xl mx-auto leading-relaxed">
          Everything you need to craft intelligent strategies, impactful content,
          and high-performing campaigns — all powered by insight and creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
          <button
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 w-full sm:w-auto justify-center hover:bg-black/90 transition-all duration-300"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            className="border border-black text-black px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 w-full sm:w-auto justify-center bg-white hover:bg-black hover:text-white transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Book a Consulting Call</span>
            <CalendarClock className="w-5 h-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-10 border-t border-black/10">
          {[
            { value: "98%", label: "Campaign Accuracy Rate" },
            { value: "3.2x", label: "Faster Go-to-Market Execution" },
            { value: "24/7", label: "AI-Powered Marketing Assistance" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-black/60 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}