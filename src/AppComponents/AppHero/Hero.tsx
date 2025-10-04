"use client"
import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
          <span className="text-blue-400 text-sm font-medium">
            AI-Powered Sales Platform
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Revolutionize Your
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}Sales Process
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Hyperflow uses advanced AI to automate your sales workflow, 
          predict customer behavior, and boost your conversion rates like never before.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3.2x</div>
            <div className="text-gray-400">Faster Sales Cycle</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">AI Assistance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
