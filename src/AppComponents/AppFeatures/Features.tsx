"use client"
import React from 'react'

export default function Features() {
  const features = [
    {
      title: "AI-Powered Lead Scoring",
      description: "Our AI analyzes customer behavior to prioritize high-value leads automatically.",
      icon: "🎯"
    },
    {
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with intelligent automation and personalized messaging.",
      icon: "⚡"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast sales trends and customer behavior with 95% accuracy.",
      icon: "📊"
    },
    {
      title: "CRM Integration",
      description: "Seamlessly connect with your existing CRM and tools.",
      icon: "🔗"
    },
    {
      title: "Real-time Insights",
      description: "Get instant insights into your sales pipeline performance.",
      icon: "👁️"
    },
    {
      title: "Team Collaboration",
      description: "Work together efficiently with shared pipelines and notes.",
      icon: "👥"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Modern Sales
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to supercharge your sales process in one platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
