"use client";

import React, { useRef } from "react";
import { useFeatures } from "@/hooks/useFeatures/useFeatures";
import type { IFeature } from "@/types/IFeatures";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

/* ----------------------------------
   Types
-----------------------------------*/
interface FeatureCardProps {
  feature: IFeature;
}

/* ----------------------------------
   Rounded Card with Animation & Shadow
-----------------------------------*/
const FeatureCard = React.memo(function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description } = feature;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group cursor-pointer shadow-lg hover:shadow-2xl rounded-3xl"
    >
      <div className="relative h-full rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-border bg-card/10 hover:bg-card/20 transition-all duration-300 overflow-hidden">
        <div className="relative z-10">
          {/* Global Icon */}
          <div className="inline-flex p-4 rounded-full mb-6 bg-muted/30 border border-border shadow">
            <Zap className="w-6 h-6 text-foreground" />
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>

          <p className="text-muted-foreground leading-relaxed text-base">
            {description}
          </p>

          <div className="flex items-center text-foreground mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium mr-2">Learn more</span>
            <span className="text-base">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* ----------------------------------
   Features Section
-----------------------------------*/
export default function FeaturesWithRoundedCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // React Query - fetch features from API
  const { data, isLoading, isError } = useFeatures(1, 6);

  return (
    <section ref={sectionRef} id="features" className="py-20 relative bg-background text-foreground">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-neutral-900 dark:text-neutral-100">
              Powerful Features for
            </span>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-300">
              Modern Sales
            </span>
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Everything you need to supercharge your sales process in one platform.
          </p>
        </div>

        {isLoading && (
          <p className="text-center text-muted-foreground">Loading features...</p>
        )}

        {isError && (
          <p className="text-center text-red-500">Failed to load features</p>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data.map((feature) => (
              <FeatureCard key={feature._id} feature={feature} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <div className="inline-flex backdrop-blur-xl bg-card/10 border border-border rounded-3xl px-6 py-3 hover:bg-card/20 transition cursor-pointer shadow">
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