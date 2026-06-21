import { useTranslation } from "react-i18next";

export default function FamilyHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-[#1B5E3B] overflow-hidden">

      <div className="absolute inset-0 bg-radial-gradient from-[rgba(200,146,42,0.12)] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 rounded-full text-white/85 text-sm font-medium mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0C96A] animate-pulse" />
              {t("familyHero.badge")}
            </div>

            <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-[66px] font-bold leading-[1.08] tracking-[-2px] text-white mb-6">
              {t("familyHero.titleLine1")}
              <br />
              {t("familyHero.titleLine2")}
              <br />
              <em className="italic text-[#F0C96A] not-italic">
                {t("familyHero.titleAccent")}
              </em>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-[500px] mb-3">
              {t("familyHero.description")}
            </p>

            <p className="text-sm text-white/50 italic mb-9 max-w-[460px]">
              {t("familyHero.subDescription")}
            </p>

            <div className="flex flex-col gap-2.5 max-w-[380px] mb-9">
              <button className="bg-[#C8922A] text-black px-7 py-4 rounded-xl font-bold text-base">
                {t("familyHero.cta")}
              </button>

              <p className="text-center text-xs text-white/35">
                {t("familyHero.note")}
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <div>✓ {t("familyHero.feature1")}</div>
              <div>✓ {t("familyHero.feature2")}</div>
              <div>✓ {t("familyHero.feature3")}</div>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">

            <div className="bg-white/6 border border-white/10 backdrop-blur-sm rounded-2xl p-6">

              <div className="flex items-center gap-2.5 mb-4">

                <div className="w-10 h-10 rounded-full bg-[#C8922A] flex items-center justify-center font-bold text-black">
                  AT
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">
                    {t("familyHero.reportTitle")}
                  </div>

                  <div className="text-[11px] text-white/40">
                    {t("familyHero.reportSubtitle")}
                  </div>
                </div>

                <div className="ml-auto text-[10px] font-semibold text-[#4CAF50]">
                  ● {t("familyHero.live")}
                </div>
              </div>

              <div className="bg-white/8 rounded-xl p-3 mb-3.5">
                🏠 {t("familyHero.visitTitle")}
              </div>

              <div className="flex flex-col gap-2 text-xs text-white/75">
                <div>✓ {t("familyHero.nurse")}</div>
              </div>

            </div>

            <div className="bg-white/6 border border-white/10 rounded-xl p-3 text-white text-xs">
              📱 {t("familyHero.reportSent")}
            </div>

          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8922A] to-transparent" />
    </section>
  );
}