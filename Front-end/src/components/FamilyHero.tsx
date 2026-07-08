import { useTranslation } from "react-i18next";

export default function FamilyHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/family1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SECTION */}
          <div className="text-white space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-[#E7F0EA]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FB59B] animate-pulse" />
              {t("familyHero.badge")}
            </div>

            {/* Heading */}
            <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-[66px] font-extrabold leading-[1.05] tracking-[-2px] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
              {t("familyHero.titleLine1")}
              <br />
              {t("familyHero.titleLine2")}
              <br />
              <span className="text-[#8FB59B]">
                {t("familyHero.titleAccent")}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg leading-8 text-[#F5F7F5] max-w-[520px] font-medium">
              {t("familyHero.description")}
            </p>

            {/* Sub Description */}
            <p className="text-base italic text-[#E7F0EA] max-w-[470px] leading-7">
              {t("familyHero.subDescription")}
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 max-w-[400px]">

              <button
                className="
                  bg-gradient-to-r
                  from-[#7EA98A]
                  to-[#6E9E7C]
                  hover:from-[#6E9E7C]
                  hover:to-[#5A8668]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                {t("familyHero.cta")}
              </button>

              <p className="text-sm text-[#E7F0EA] text-center">
                {t("familyHero.note")}
              </p>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="text-white space-y-7">

            <div>
              <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-3">
                {t("familyHero.reportTitle")}
              </h2>

              <p className="text-base text-[#E7F0EA] leading-7">
                {t("familyHero.reportSubtitle")}
              </p>
            </div>

            <div className="flex items-center gap-3 text-base font-medium text-[#F5F7F5]">
              <span className="text-[#8FB59B] text-lg">🏠</span>
              {t("familyHero.visitTitle")}
            </div>

            <div className="flex items-center gap-3 text-base font-medium text-[#F5F7F5]">
              <span className="text-[#8FB59B] text-lg">✓</span>
              {t("familyHero.nurse")}
            </div>

            <div className="flex items-center gap-3 text-base font-medium text-[#F5F7F5]">
              <span className="text-[#8FB59B] text-lg">●</span>
              {t("familyHero.live")}
            </div>

            <div className="flex items-center gap-3 text-base font-medium text-[#F5F7F5]">
              <span className="text-[#8FB59B] text-lg">📱</span>
              {t("familyHero.reportSent")}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}