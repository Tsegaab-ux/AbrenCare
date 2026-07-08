"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function StatsPill() {
  const { t } = useTranslation();

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

    let ethiopiaStart = 0;
    const ethiopiaInterval = setInterval(() => {
      if (ethiopiaStart < ethiopiaTarget) {
        ethiopiaStart++;
        setEthiopiaCount(ethiopiaStart);
      } else {
        clearInterval(ethiopiaInterval);
      }
    }, 30);

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
    <div className="w-full mt-12 px-6" ref={sectionRef}>
      <div className="rounded-3xl border border-[#C8922A] bg-white shadow-lg px-8 py-6">

        <div className="flex flex-wrap items-center justify-between gap-6">

          {/* Left label */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C8922A]" />
            <span className="text-sm uppercase tracking-wide text-[#C8922A] font-medium">
              {t("stats.label")}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8">

            {/* Ethiopia */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#C8922A]">
                {ethiopiaCount}
              </h3>
              <p className="text-xs text-[#C8922A] mt-1">
                {t("stats.ethiopia")}
              </p>
            </div>

            {/* Arrow */}
            <div className="text-[#C8922A] text-2xl">
              →
            </div>

            {/* Nordic */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#1E8A7A]">
                {nordicCount}
              </h3>
              <p className="text-xs text-[#7B8591] mt-1">
                {t("stats.nordic")}
              </p>
            </div>
          </div>

          {/* Right text */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C8922A]" />
            <span className="text-sm font-semibold text-[#23254B]">
              {t("stats.closing")}
            </span>
          </div>

        </div>

        {/* Bottom progress bar */}
        <div className="mt-6 h-2 bg-[#EEF4F3] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C8922A] transition-all duration-1000"
            style={{
              width: isVisible
                ? `${(ethiopiaCount / nordicTarget) * 100}%`
                : "0%",
            }}
          />
        </div>

      </div>
    </div>
  );
}