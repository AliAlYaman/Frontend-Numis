"use client";
import React from "react";
import {
  IconAdjustmentsBolt,
  IconCircleDashedLetterA,
  IconCircleDashedLetterS,
  IconCircleDashedLetterT,
  IconCloud,
  IconCurrencyDollar,
  IconDropletHeart,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconNews,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { DocumentChartBarIcon } from "@heroicons/react/20/solid";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for Everyone",
      description:
        "Built for who want to change their lives for those who are dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. Affordable, Reasonable, and Worth it.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Speed",
      description: "Our trades are executed fast which makes them compatible with real-time market changes.",
      icon: <IconCircleDashedLetterS />,
    },
    {
        title: "Accuracy",
        description:
          "If you don't like EveryAI, we will convince you to like us. With an accuracy of 80% winning trades.",
        icon: <IconCircleDashedLetterA />,
      },
      {
        title: "News",
        description: "Discover the latest of changes of our fast driven world.",
        icon: <IconNews />,
      },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. At least our AI Agents are.",
      icon: <IconHelp />,
    },
    
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-5xl mx-auto mt-40">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={`flex justify-center  flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 ${
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800"
      } ${index < 4 && "lg:border-b dark:border-neutral-800"}`}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-400 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-white dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
