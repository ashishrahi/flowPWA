"use client"
import React from 'react'
import { Check, Star, CreditCard, Zap, Crown, Users } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses or startups looking to build their marketing foundation",
      features: [
        "Brand strategy consultation (1 per month)",
        "8 social media posts per month",
        "1 campaign (email or paid ads) setup",
        "Basic analytics & reporting",
        "Email support"
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-muted/10 to-muted/5",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
    },
    {
      name: "Growth (Most Popular)",
      price: "$2,499",
      period: "per month",
      description: "Everything growing brands need to attract, engage, and convert - powered by intelligent strategy and creative execution",
      features: [
        "Comprehensive marketing strategy",
        "15 social media posts per month",
        "2 performance campaigns (Google, Meta, or LinkedIn)",
        "Content creation (blogs, emails, creatives)",
        "Advanced analytics & optimization",
        "Priority support",
        "Monthly"
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-primary/20 via-secondary/15 to-accent/20",
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "Custom Pricing for brands seeking tailored, full-scale marketing solutions and dedicated support",
      features: [
        "End-to-end marketing strategy & management",
        "Unlimited campaigns & platforms",
        "Advanced automation & audience segmentation",
        "Custom creative production (video, design, web)",
        "Dedicated account manager & creative director",
        "24/7 support & performance insights"
      ],
      cta: "Contact Marketing",
      popular: false,
      gradient: "from-secondary/15 to-accent/15",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 relative bg-background text-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-32 w-60 h-60 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-32 w-60 h-60 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your team with a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent text-background px-4 py-2 rounded-full text-sm font-semibold shadow-md flex items-center gap-2 border border-border/20 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative rounded-3xl p-8 backdrop-blur-2xl border transition-all duration-500 hover:scale-105 group flex flex-col min-h-[550px] ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 shadow-xl'
                    : 'bg-card border-border/30 hover:border-border/50 shadow-md'
                }`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-40 rounded-3xl`} />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                      plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted/10 text-muted-foreground'
                    }`}>
                      {plan.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground text-base ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors">
                          <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 border flex items-center justify-center gap-2 text-base active:scale-95 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-background border-transparent shadow-lg'
                        : 'bg-muted hover:bg-muted/80 text-foreground border-border shadow'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm backdrop-blur-sm bg-card/50 rounded-lg py-3 px-6 inline-flex items-center gap-2 border border-border/20">
            <CreditCard className="w-4 h-4" />
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
