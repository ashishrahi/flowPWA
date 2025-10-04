"use client"
import React from 'react'
import { Check, Star, CreditCard, Zap, Crown, Users } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 1000 leads",
        "Basic AI scoring",
        "Email support",
        "CRM integration",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-gray-500/10 to-gray-400/10",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Everything growing teams need",
      features: [
        "Up to 5000 leads",
        "Advanced AI scoring",
        "Priority support",
        "Advanced analytics",
        "Custom workflows",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-blue-500/20 via-purple-500/15 to-pink-500/20",
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited leads",
        "Custom AI models",
        "24/7 dedicated support",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-indigo-500/15 to-purple-500/15",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for your team with a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards - Equal height and width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/40 backdrop-blur-sm flex items-center gap-2 border border-white/20 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current " />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Container with equal dimensions */}
              <div
                className={`relative rounded-3xl p-8 backdrop-blur-2xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl group flex-1 flex flex-col min-h-[600px] ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-pink-500/15 border-blue-400/40 shadow-2xl shadow-blue-500/25 mt-1'
                    : 'bg-white/5 border-white/15 hover:border-white/25 shadow-xl shadow-black/10'
                }`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-3xl" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl" />

                {/* Card Content - Flex column to push button to bottom */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="text-center mb-8">
                    {/* Plan Icon */}
                    <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                      plan.popular 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      {plan.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features List - Flex-grow to take available space */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          <Check className="text-green-400 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 w-5 h-5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Pushed to bottom */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border relative overflow-hidden group/btn flex items-center justify-center gap-2 mt-auto ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-transparent shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50'
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 shadow-lg hover:shadow-white/10'
                    }`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm backdrop-blur-sm bg-white/5 rounded-lg py-3 px-6 inline-flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}