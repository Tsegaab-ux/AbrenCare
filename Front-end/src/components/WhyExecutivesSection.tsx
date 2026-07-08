import { useTranslation } from "react-i18next";
import aboutImage from "../images/executive.png";

export default function WhyExecutivesSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${aboutImage})`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">

          <div className="inline-block bg-[#F2ECE5] border border-[#E7DED3] text-[#B88A44] text-[11px] font-semibold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-4">
            {t("whyExecutives.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[46px] font-bold leading-[1.15] tracking-[-1px] text-[#1E2A24] mb-4">
            {t("whyExecutives.titleLine1")}
            <br />
            {t("whyExecutives.titleLine2")}
          </h2>

          <p className="text-base text-[#5B665F] max-w-[580px] leading-relaxed">
            {t("whyExecutives.description")}
          </p>

        </div>

        {/* CARD GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* CARD 1 */}
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#D9E5D6] shadow-xl hover:scale-[1.02] transition duration-300">

            <div className="inline-block bg-[#F2ECE5] text-[#B88A44] border border-[#E7DED3] text-[11px] px-3 py-1 rounded-full mb-6">
              Priority
            </div>

            <div className="text-[#1F2A24] text-xl font-semibold mb-3">
              {t("whyExecutives.card1Title")}
            </div>

            <p className="text-[#56635B] leading-7 text-sm">
              <strong className="text-[#B88A44]">
                {t("whyExecutives.card1Strong")}
              </strong>{" "}
              {t("whyExecutives.card1Text")}
            </p>

            <button className="mt-8 bg-[#B88A44] hover:bg-[#A67A37] text-white px-6 py-3 rounded-full text-sm transition-all duration-300">
              Learn More →
            </button>

          </div>

          {/* CARD 2 */}
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#D9E5D6] shadow-xl hover:scale-[1.02] transition duration-300">

            <div className="inline-block bg-[#F2ECE5] text-[#B88A44] border border-[#E7DED3] text-[11px] px-3 py-1 rounded-full mb-6">
              New
            </div>

            <div className="text-[#1F2A24] text-xl font-semibold mb-3">
              {t("whyExecutives.card2Title")}
            </div>

            <p className="text-[#56635B] leading-7 text-sm">
              {t("whyExecutives.card2Text")}{" "}
              <strong className="text-[#B88A44]">
                {t("whyExecutives.card2Strong")}
              </strong>{" "}
              {t("whyExecutives.card2Text2")}
            </p>

            <button className="mt-8 bg-[#B88A44] hover:bg-[#A67A37] text-white px-6 py-3 rounded-full text-sm transition-all duration-300">
              Learn More →
            </button>

          </div>

          {/* CARD 3 */}
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#D9E5D6] shadow-xl hover:scale-[1.02] transition duration-300">

            <div className="inline-block bg-[#F2ECE5] text-[#B88A44] border border-[#E7DED3] text-[11px] px-3 py-1 rounded-full mb-6">
              Focus
            </div>

            <div className="text-[#1F2A24] text-xl font-semibold mb-3">
              {t("whyExecutives.card3Title")}
            </div>

            <p className="text-[#56635B] leading-7 text-sm">
              {t("whyExecutives.card3Text")}{" "}
              <strong className="text-[#B88A44]">
                {t("whyExecutives.card3Strong")}
              </strong>{" "}
              {t("whyExecutives.card3Text2")}
            </p>

            <button className="mt-8 bg-[#B88A44] hover:bg-[#A67A37] text-white px-6 py-3 rounded-full text-sm transition-all duration-300">
              Learn More →
            </button>

          </div>

          {/* CARD 4 */}
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#D9E5D6] shadow-xl hover:scale-[1.02] transition duration-300">

            <div className="inline-block bg-[#F2ECE5] text-[#B88A44] border border-[#E7DED3] text-[11px] px-3 py-1 rounded-full mb-6">
              Restore
            </div>

            <div className="text-[#1F2A24] text-xl font-semibold mb-3">
              {t("whyExecutives.card4Title")}
            </div>

            <p className="text-[#56635B] leading-7 text-sm">
              {t("whyExecutives.card4Text")}{" "}
              <strong className="text-[#B88A44]">
                {t("whyExecutives.card4Strong")}
              </strong>{" "}
              {t("whyExecutives.card4Text2")}
            </p>

            <button className="mt-8 bg-[#B88A44] hover:bg-[#A67A37] text-white px-6 py-3 rounded-full text-sm transition-all duration-300">
              Learn More →
            </button>

          </div>

        </div>

        {/* BOTTOM INSIGHT */}
        <div className="backdrop-blur-xl bg-white/85 rounded-3xl p-8 border border-[#D9E5D6] shadow-xl">

          <div className="flex gap-5 items-start">

            <div>

              <div className="font-['Playfair_Display',serif] text-2xl text-[#1E2A24] mb-3">
                {t("whyExecutives.insightTitle")}
              </div>

              <p className="text-[#56635B] leading-8">
                {t("whyExecutives.insightText")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}