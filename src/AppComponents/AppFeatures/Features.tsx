"use client";

import React, { useRef } from "react";
import {
  Target,
  Zap,
  BarChart3,
  Link,
  Eye,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ----------------------------------
   Types
-----------------------------------*/
interface Feature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface FeatureCardProps {
  feature: Feature;
}

/* ----------------------------------
   Data
-----------------------------------*/
const FEATURES_DATA: readonly Feature[] = Object.freeze([
  {
    title: "AI-Backed Marketing Strategy",
    description:
      "We combine human expertise with data intelligence to uncover deep audience insights and craft strategies that drive measurable growth.",
    Icon: Target,
  },
  {
    title: "High-Impact Content Creation",
    description:
      "From storytelling to SEO — our content is engineered to engage, convert, and build brand loyalty across every channel.",
    Icon: Zap,
  },
  {
    title: "Design That Performs",
    description:
      "Beautiful design meets strategic intent. We create visuals that captivate, clarify, and convert — powered by user insight and creativity.",
    Icon: BarChart3,
  },
  {
    title: "Predictive Campaign Intelligence",
    description:
      "Leverage AI analytics to anticipate trends, optimize budgets, and ensure every campaign performs at its peak.",
    Icon: Link,
  },
  {
    title: "Omnichannel Marketing Automation",
    description:
      "Automate and personalize your customer journeys across platforms — delivering the right message at the right moment.",
    Icon: Eye,
  },
  {
    title: "Collaborative Brand Ecosystem",
    description:
      "Your team + our experts = unstoppable growth. Seamless communication, shared vision, and unified brand direction.",
    Icon: Users,
  },
]);

/* ----------------------------------
   Card
-----------------------------------*/
const FeatureCard = React.memo(function FeatureCard({
  feature,
}: FeatureCardProps) {
  const { title, description, Icon } = feature;

  return (
    <div className="relative group cursor-pointer">
      <div className="relative h-full rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-border bg-card/10 hover:bg-card/20 transition-all duration-300 overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex p-4 rounded-2xl mb-6 bg-muted/30 border border-border">
            <Icon className="w-6 h-6 text-foreground" />
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-base">
            {description}
          </p>

          <div className="flex items-center text-foreground mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium mr-2">Learn more</span>
            <span className="text-base">→</span>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ----------------------------------
   Section
-----------------------------------*/
export default function FeaturesWithoutAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 relative bg-background text-foreground"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block mt-2">Modern Sales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to supercharge your sales process in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex backdrop-blur-xl bg-card/10 border border-border rounded-xl px-6 py-3 hover:bg-card/20 transition cursor-pointer">
            <span className="text-foreground font-semibold mr-2">
              Explore all features
            </span>
            <span className="text-muted-foreground">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
