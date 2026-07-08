import { useTranslation } from "react-i18next";

export default function ExecutiveHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/excuitive.mp4" type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-[rgba(200,146,42,0.06)] via-transparent to-transparent pointer-events-none" />

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8922A] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-32">

        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8922A] animate-pulse" />
            {t("executiveHero.badge")}
          </div>

          {/* Title */}
          <h1 className="font-['Playfair_Display',serif] text-4xl lg:text-[66px] font-bold leading-[1.08] tracking-[-2px] text-white mb-4">
            {t("executiveHero.titleLine1")}
            <br />
            {t("executiveHero.titleLine2")}
            <br />
            <em className="italic text-[#C8922A] not-italic">
              {t("executiveHero.titleAccent")}
            </em>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/60 leading-relaxed max-w-[520px] mb-4">
            {t("executiveHero.description")}
          </p>

          <p className="text-sm text-white/40 mb-8 max-w-[460px] leading-relaxed">
            {t("executiveHero.subDescription")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 max-w-[360px]">
            <button className="bg-[#C8922A] text-black px-7 py-4 rounded-xl font-bold text-base hover:bg-[#F0C96A] transition-all">
              {t("executiveHero.cta")}
            </button>

            <button className="bg-transparent text-white/60 px-7 py-3.5 rounded-xl font-medium text-sm border border-white/20 hover:text-white hover:border-white/40 transition-all">
              {t("executiveHero.secondaryCta")}
            </button>

            <div className="text-center text-[11px] text-white/30">
              🔒 {t("executiveHero.note")}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}