import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { SpotlightPreview } from './Spotlight';
import { HeroScrollDemo } from './container-scroll-animation';
import { FeaturesSectionDemo } from './cards';
import { InfiniteMovingCardsDemo } from './infinite-moving-cards';
import { GlobeDemo } from './globe';
import TradingViewWidget from './trading-chart';

export default function LandingPage() {
  const splineRef = useRef(null);

  useEffect(() => {
    if (splineRef.current) {
      splineRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <div className='mt-14 h-[28rem] w-auto flex justify-center items-center text-white '>
        <SpotlightPreview />
        <div className='w-2/4 h-full justify-center items-center' ref={splineRef}>
          <Spline scene="https://prod.spline.design/e2k9nU6QUPxhVIb3/scene.splinecode" />
        </div>
      </div>
      <HeroScrollDemo />
      <div className='flex justify-center'>
        <TradingViewWidget />
      </div>
      <div className='mt-[9rem]'>
        <FeaturesSectionDemo />
        <GlobeDemo />
        <InfiniteMovingCardsDemo />
      </div>
      
    </>
  );
}
