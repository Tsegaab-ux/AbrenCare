import { useTranslation } from "react-i18next";
import heroImage from "../images/digital.png";

export default function ConsultationHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Blue Overlay
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2340]/80 via-[#1D4E89]/50 to-[#BFDFFF]/25" /> */}

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18)_0%,transparent_40%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#60A5FA] to-transparent" />
      <div className="absolute top-20 right-20 w-[420px] h-[420px] bg-white/10 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-[5%] py-20 lg:py-28">

        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7">
            <div className="w-1.5 h-1.5 rounded-full bg-[#93C5FD] animate-pulse" />
            <span>{t("consultationHero.badge")}</span>
          </div>

          {/* Title */}
          <h1 className="font-['Playfair_Display',serif] text-4xl lg:text-[60px] font-bold leading-[1.1] tracking-[-1.5px] text-white mb-5 drop-shadow-lg">
            {t("consultationHero.titleLine1")}
            <br />
            {t("consultationHero.titleLine2")}
            <br />
            <span className="text-[#BFDBFE]">
              {t("consultationHero.titleAccent1")}
              <br />
              {t("consultationHero.titleAccent2")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-[17px] text-white/90 leading-relaxed max-w-[480px] mb-2.5">
            {t("consultationHero.description")}
          </p>

          <p className="text-sm text-white/75 mb-9 max-w-[460px] leading-relaxed">
            {t("consultationHero.subDescription")}
          </p>

          {/* Button */}
          <div className="flex flex-col gap-2.5 max-w-[390px] mb-8">
            <button className="w-full bg-[#60A5FA] text-white px-7 py-4 rounded-2xl font-bold text-base hover:bg-[#3B82F6] hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(96,165,250,0.35)] transition-all duration-300">
              {t("consultationHero.button")}
            </button>

            <div className="text-center text-xs text-white/60">
              {t("consultationHero.note")}
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4">

            <div className="flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl">
              <div className="w-4 h-4 rounded-full bg-[#60A5FA] flex items-center justify-center text-[8px] text-white">
                ✓
              </div>
              <span className="text-sm text-white/90">
                {t("consultationHero.feature1")}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl">
              <div className="w-4 h-4 rounded-full bg-[#60A5FA] flex items-center justify-center text-[8px] text-white">
                ✓
              </div>
              <span className="text-sm text-white/90">
                {t("consultationHero.feature2")}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl">
              <div className="w-4 h-4 rounded-full bg-[#60A5FA] flex items-center justify-center text-[8px] text-white">
                ✓
              </div>
              <span className="text-sm text-white/90">
                {t("consultationHero.feature3")}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}