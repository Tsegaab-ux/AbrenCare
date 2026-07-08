import { useTranslation } from "react-i18next";
import bgImage from "../images/pricin.png"; // add your background image

export default function PricingSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div className="inline-block bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] text-[11px] font-semibold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-4">
            {t("pricing.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[50px] font-bold text-white leading-[1.15] mb-4">
            {t("pricing.titleLine1")}
            <br />
            <span className="text-[#C8922A] italic">
              {t("pricing.titleLine2")}
            </span>
          </h2>

          <p className="text-white/60 max-w-[650px] mx-auto leading-8">
            {t("pricing.subtitle")}
          </p>

        </div>

        {/* LEFT GUARANTEE PANEL - Full width */}
        <div className="backdrop-blur-xl bg-white/8 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

          <h3 className="font-['Playfair_Display',serif] text-2xl text-white mb-7">
            What You Receive
          </h3>

          <div className="space-y-5">

            <div className="flex gap-4 text-white/75">
              <div className="w-6 h-6 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs flex-shrink-0">
                ✓
              </div>
              <div>
                {t("pricing.guarantee1")}{" "}
                <strong className="text-white">
                  {t("pricing.guarantee1Strong")}
                </strong>
              </div>
            </div>

            <div className="flex gap-4 text-white/75">
              <div className="w-6 h-6 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs flex-shrink-0">
                ✓
              </div>
              <div>
                {t("pricing.guarantee2")}{" "}
                <strong className="text-white">
                  {t("pricing.guarantee2Strong")}
                </strong>
              </div>
            </div>

            <div className="flex gap-4 text-white/75">
              <div className="w-6 h-6 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs flex-shrink-0">
                ✓
              </div>
              <div>
                {t("pricing.guarantee3")}{" "}
                <strong className="text-white">
                  {t("pricing.guarantee3Strong")}
                </strong>
              </div>
            </div>

            <div className="flex gap-4 text-white/75">
              <div className="w-6 h-6 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs flex-shrink-0">
                ✓
              </div>
              <div>
                <strong className="text-white">
                  {t("pricing.guarantee4Strong")}
                </strong>{" "}
                {t("pricing.guarantee4")}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}