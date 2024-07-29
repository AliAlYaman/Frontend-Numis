import React, { useEffect, useState } from "react";
import { Spotlight } from "../ui/Spotlight";
import { cn } from "../../lib/utils";

export function SpotlightPreview() {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  return (
    <div
      className={`h-full w-1/2 rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden`}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div
        className={cn(
          "p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 transform transition-transform duration-1000",
          slideIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        )}
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Numis <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Unlock Your Trading Potential with Numis! Numis executes trades at
        lightning speed, analyzes vast data, and offers real-time 
        predictions and news scraping. Stay ahead and make profitable decisions effortlessly.
        </p>
      </div>
    </div>
  );
}
