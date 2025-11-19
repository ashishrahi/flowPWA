"use client";

import { useRef } from "react";
import {
  Target,
  Zap,
  BarChart3,
  Link,
  Eye,
  Users,
} from "lucide-react";
import React from "react";

const FEATURES_DATA = Object.freeze([
  {
    title: "AI-Backed Marketing Strategy",
    description:
      "We combine human expertise with data intelligence to uncover deep audience insights and craft strategies that drive measurable growth.",
    Icon: Target,
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "High-Impact Content Creation",
    description:
      "From storytelling to SEO — our content is engineered to engage, convert, and build brand loyalty across every channel.",
    Icon: Zap,
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Design That Performs",
    description:
      "Beautiful design meets strategic intent. We create visuals that captivate, clarify, and convert — powered by user insight and creativity.",
    Icon: BarChart3,
    gradient: "from-muted/20 to-accent/20",
  },
  {
    title: "Predictive Campaign Intelligence",
    description:
      "Leverage AI analytics to anticipate trends, optimize budgets, and ensure every campaign performs at its peak.",
    Icon: Link,
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    title: "Omnichannel Marketing Automation",
    description:
      "Automate and personalize your customer journeys across platforms — delivering the right message at the right moment.",
    Icon: Eye,
    gradient: "from-accent/20 to-muted/20",
  },
  {
    title: "Collaborative Brand Ecosystem",
    description:
      "Your team + our experts = unstoppable growth. Seamless communication, shared vision, and unified brand direction.",
    Icon: Users,
    gradient: "from-primary/20 to-secondary/20",
  },
]);

const FeatureCard = React.memo(function FeatureCard({ feature }: any) {
  const { title, description, Icon, gradient } = feature;

  return (
    <div className="relative group cursor-pointer">
      <div
        className={`relative h-full rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-border bg-card/5 hover:bg-card/10 transition-all duration-300 overflow-hidden`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
        />

        <div className="relative z-10">
          <div className="inline-flex p-4 rounded-2xl mb-6 bg-muted/10 backdrop-blur-sm border border-border transition-colors duration-300">
            <div className="text-foreground">
              <Icon className="w-6 h-6" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-base">
            {description}
          </p>

          <div className="flex items-center text-primary mt-4 opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium mr-2">Learn more</span>
            <span className="text-base">→</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function FeaturesWithoutAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="features" className="py-20 relative bg-background text-foreground">
      {/* Soft Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="features-header text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-2">
              Modern Sales
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to supercharge your sales process in one platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-12">
          <div className="inline-flex backdrop-blur-xl bg-card/10 border border-border rounded-xl px-6 py-3 transition-all duration-300 cursor-pointer hover:bg-card/20">
            <span className="text-foreground font-semibold text-base mr-2">
              Explore all features
            </span>
            <span className="text-primary">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
