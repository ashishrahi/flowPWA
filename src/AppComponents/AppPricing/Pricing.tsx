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
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
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
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6" />
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
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-32 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-32 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block sm:inline">
              {" "}Pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Choose the plan that works best for your team with a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards - Responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-purple-500/40 backdrop-blur-sm flex items-center gap-1 sm:gap-2 border border-white/20 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Container with responsive dimensions */}
              <div
                className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl sm:backdrop-blur-2xl border transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl group flex-1 flex flex-col min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-pink-500/15 border-blue-400/40 shadow-xl sm:shadow-2xl shadow-blue-500/25 mt-2 sm:mt-1'
                    : 'bg-white/5 border-white/15 hover:border-white/25 shadow-lg sm:shadow-xl shadow-black/10'
                }`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`} />
                
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl sm:backdrop-blur-3xl rounded-2xl sm:rounded-3xl" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl sm:rounded-3xl" />

                {/* Card Content - Flex column to push button to bottom */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="text-center mb-6 sm:mb-8">
                    {/* Plan Icon */}
                    <div className={`inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
                      plan.popular 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      {plan.icon}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2 sm:mb-3">
                      <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-gray-400 text-sm sm:text-base ml-1 sm:ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">{plan.description}</p>
                  </div>

                  {/* Features List - Flex-grow to take available space */}
                  <div className="flex-1 mb-6 sm:mb-8">
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          <Check className="text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Pushed to bottom */}
                  <button
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border relative overflow-hidden group/btn flex items-center justify-center gap-2 mt-auto text-sm sm:text-base ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-transparent shadow-xl sm:shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50'
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 shadow-lg hover:shadow-white/10'
                    } active:scale-95`}
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
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-400 text-xs sm:text-sm backdrop-blur-sm bg-white/5 rounded-lg py-2 sm:py-3 px-4 sm:px-6 inline-flex items-center gap-2 border border-white/10">
            <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}