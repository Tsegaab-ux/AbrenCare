"use client";

import { useState, useEffect, useRef } from "react";

export default function StatsPill() {
  const [ethiopiaCount, setEthiopiaCount] = useState(0);
  const [nordicCount, setNordicCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const ethiopiaTarget = 68;
  const nordicTarget = 84;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Count up for Ethiopia
    let ethiopiaStart = 0;
    const ethiopiaInterval = setInterval(() => {
      if (ethiopiaStart < ethiopiaTarget) {
        ethiopiaStart++;
        setEthiopiaCount(ethiopiaStart);
      } else {
        clearInterval(ethiopiaInterval);
      }
    }, 30);

    // Count up for Nordic
    let nordicStart = 0;
    const nordicInterval = setInterval(() => {
      if (nordicStart < nordicTarget) {
        nordicStart++;
        setNordicCount(nordicStart);
      } else {
        clearInterval(nordicInterval);
      }
    }, 25);

    return () => {
      clearInterval(ethiopiaInterval);
      clearInterval(nordicInterval);
    };
  }, [isVisible]);

  return (
    <div className="w-full px-5 mt-12" ref={sectionRef}>
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-white/8 to-white/5 backdrop-blur-sm px-8 py-5 shadow-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_-12px_rgba(200,146,42,0.3)] w-full">
        
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C8922A]/0 via-[#C8922A]/5 to-[#C8922A]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#C8922A]/10 rounded-full blur-2xl animate-pulse group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#80CBC4]/10 rounded-full blur-2xl animate-pulse delay-1000 group-hover:scale-150 transition-transform duration-1000" />
        </div>
        
        <div className="relative flex flex-wrap items-center justify-between gap-6 text-white">
          
          {/* Label - Left with shine effect */}
          <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
            <div className="h-1.5 w-1.5 rounded-full bg-[#C8922A] animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-white/50 uppercase whitespace-nowrap relative">
              Life expectancy gap
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
          </div>

          {/* Stats Container with bounce animation on hover */}
          <div className="flex items-center gap-6 group/stats">
            
            {/* Ethiopia Stat */}
            <div className="text-center transform transition-all duration-300 hover:scale-110">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#EF9F9F] to-[#E57373] bg-clip-text text-transparent">
                  {ethiopiaCount}
                </h3>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EF9F9F]/50 to-transparent rounded-full" />
              </div>
              <p className="mt-1 text-xs font-medium text-white/30 tracking-wide">
                Ethiopia
              </p>
            </div>

            {/* Arrow Indicator with pulse animation */}
            <div className="flex flex-col items-center group-hover/stats:animate-bounce">
              <svg className="w-8 h-8 text-white/30 group-hover:text-[#C8922A]/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="text-[10px] text-white/20 font-mono mt-0.5 group-hover:text-[#C8922A]/40 transition-colors duration-300">GAP</div>
            </div>

            {/* Nordic Stat */}
            <div className="text-center transform transition-all duration-300 hover:scale-110">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#80CBC4] to-[#4DB6AC] bg-clip-text text-transparent">
                  {nordicCount}
                </h3>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#80CBC4]/50 to-transparent rounded-full" />
              </div>
              <p className="mt-1 text-xs font-medium text-white/30 tracking-wide">
                Nordic
              </p>
            </div>

          </div>

          {/* Closing Message with shine effect */}
          <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
            <div className="h-1.5 w-1.5 rounded-full bg-[#C8922A] animate-ping" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#C8922A] animate-pulse absolute" />
            <span className="text-sm font-semibold text-white/80 tracking-wide whitespace-nowrap relative">
              We are closing this gap.
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8922A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
          </div>

        </div>

        {/* Animated Progress bar at bottom showing gap reduction */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#C8922A] to-[#C8922A]/60 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: isVisible ? `${(ethiopiaCount / nordicTarget) * 100}%` : '0%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-animation" />
          </div>
        </div>
        
      </div>

      {/* Add global styles for animations */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer-animation {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}