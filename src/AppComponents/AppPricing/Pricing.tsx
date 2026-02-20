"use client";

import React from "react";
import { Check, Star, CreditCard, Zap, Crown, Users } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description:
        "Perfect for small businesses or startups looking to build their marketing foundation.",
      features: [
        "Brand strategy consultation (1 per month)",
        "8 social media posts per month",
        "1 campaign setup",
        "Basic analytics & reporting",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
      icon: <Zap className="w-6 h-6" />,
    },
    {
      name: "Growth",
      price: "$2,499",
      period: "per month",
      description:
        "Everything growing brands need to attract, engage, and convert.",
      features: [
        "Comprehensive marketing strategy",
        "15 social media posts per month",
        "2 performance campaigns",
        "Content creation",
        "Advanced analytics",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: <Crown className="w-6 h-6" />,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description:
        "Tailored marketing solutions with dedicated support and execution.",
      features: [
        "End-to-end strategy & execution",
        "Unlimited campaigns",
        "Advanced automation",
        "Custom creative production",
        "Dedicated account manager",
        "24/7 support",
      ],
      cta: "Contact Sales",
      popular: false,
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Simple, Transparent Pricing
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border rounded-2xl p-8 flex flex-col ${plan.popular
                  ? "border-foreground"
                  : "border-border"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Most Popular
                </span>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex p-3 border border-border rounded-xl mb-4">
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2 text-sm">
                      /{plan.period}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 mr-3 mt-1 text-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold border transition ${plan.popular
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:bg-muted"
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-lg px-5 py-3">
            <CreditCard className="w-4 h-4" />
            14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
