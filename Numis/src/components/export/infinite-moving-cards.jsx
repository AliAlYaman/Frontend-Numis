"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The most important rule of trading is to learn to take losses. You don’t have to be a genius to be a successful trader. You just need to know how to limit your losses and let your profits run. The biggest mistake traders make is to hold onto losing positions hoping they will turn around. This behavior leads to bigger losses and eventually, to blowing up your trading account.",
    name: "-Paul Tudor Jones",
    
  },
  {
    quote:
      "The stock market is a game of probabilities. It is not about being right or wrong, but about making more money when you are right than you lose when you are wrong. The more you learn about the market and yourself, the more you realize that successful trading involves understanding your own psychological state and the ability to remain disciplined under pressure.",
    name: "-Jesse Livermore",
  },
  {
    quote: "I am only rich because I know when I’m wrong. I basically have survived by recognizing my mistakes and moving quickly to correct them. It’s not about being right or wrong; it’s about how much you make when you’re right and how much you lose when you’re wrong. My edge comes from the ability to recognize and react to my own mistakes and to the changing market conditions.",
    name: "-George Soros",
  },
  {
    quote:
      "It’s far better to buy a wonderful company at a fair price than a fair company at a wonderful price. Patience and discipline are key to successful investing. When investing, the focus should be on the long-term value of the business and not on short-term market fluctuations. The stock market is designed to transfer money from the Active to the Patient.",
    name: "-Warren Buffett",
  },
  {
    quote:
      "Trading is a business that involves both skill and luck. The key to success is not only understanding the markets but also managing your emotions and having a solid risk management plan. The most successful traders are those who have the discipline to stick to their trading plan and the flexibility to adapt to changing market conditions. Never underestimate the importance of managing your risks and being patient.",
    name: "-Richard Dennis",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-black  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-4">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
