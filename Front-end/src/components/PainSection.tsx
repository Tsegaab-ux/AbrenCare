import { useTranslation } from "react-i18next";
import aboutImage from "../images/extra.png";

export default function PainSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden bg-[#0A1610]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutImage})`,
        }}
      />

      {/* Dark Overlay
      <div className="absolute inset-0 bg-[#0A1610]/80" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

     {/* Header */}
      <div className="mb-14">

        <div className="inline-block bg-[#F2ECE5] border border-[#E7DED3] text-[#B88A44] text-[11px] font-semibold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full shadow-lg mb-4">
          {t("pain.badge")}
        </div>

        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[46px] font-bold leading-[1.15] tracking-[-1px] text-black mb-4 drop-shadow-sm">
          {t("pain.title1")}
          <br />
          {t("pain.title2")}
        </h2>

        <p className="text-base text-[#1A1A1A] max-w-[600px] leading-8 font-medium">
          {t("pain.description")}
        </p>

      </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Story 1 */}
          <div className="bg-gradient-to-br from-[#F5F7F5] to-[#E7F0EA] rounded-3xl p-8 border border-[#C9DDD0] transition-all duration-300 hover:from-white hover:to-[#EEF7F1] hover:-translate-y-1 shadow-lg">
            <p className="text-[#1F3A2B] text-[15px] leading-8 font-medium mb-6">
              {t("pain.story1")}
            </p>
            <div className="inline-block bg-[#8FB59B]/15 border border-[#8FB59B]/40 text-[#5A8668] text-[11px] px-3 py-1 rounded-full font-semibold">
              🇸🇪 {t("pain.author1")}
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-gradient-to-br from-[#F5F7F5] to-[#E7F0EA] rounded-3xl p-8 border border-[#C9DDD0] transition-all duration-300 hover:from-white hover:to-[#EEF7F1] hover:-translate-y-1 shadow-lg">
            <p className="text-[#1F3A2B] text-[15px] leading-8 font-medium mb-6">
              {t("pain.story2")}
            </p>
            <div className="inline-block bg-[#8FB59B]/15 border border-[#8FB59B]/40 text-[#5A8668] text-[11px] px-3 py-1 rounded-full font-semibold">
              🇳🇴 {t("pain.author2")}
            </div>
          </div>

          {/* Story 3 */}
          <div className="bg-gradient-to-br from-[#F5F7F5] to-[#E7F0EA] rounded-3xl p-8 border border-[#C9DDD0] transition-all duration-300 hover:from-white hover:to-[#EEF7F1] hover:-translate-y-1 shadow-lg">
            <p className="text-[#1F3A2B] text-[15px] leading-8 font-medium mb-6">
              {t("pain.story3")}
            </p>
            <div className="inline-block bg-[#8FB59B]/15 border border-[#8FB59B]/40 text-[#5A8668] text-[11px] px-3 py-1 rounded-full font-semibold">
              🇬🇧 {t("pain.author3")}
            </div>
          </div>

          {/* Story 4 */}
          <div className="bg-gradient-to-br from-[#F5F7F5] to-[#E7F0EA] rounded-3xl p-8 border border-[#C9DDD0] transition-all duration-300 hover:from-white hover:to-[#EEF7F1] hover:-translate-y-1 shadow-lg">
            <p className="text-[#1F3A2B] text-[15px] leading-8 font-medium mb-6">
              {t("pain.story4")}
            </p>
            <div className="inline-block bg-[#8FB59B]/15 border border-[#8FB59B]/40 text-[#5A8668] text-[11px] px-3 py-1 rounded-full font-semibold">
              🇺🇸 {t("pain.author4")}
            </div>
          </div>

        </div>

        {/* Insight Card */}
        <div className="bg-gradient-to-br from-[#F5F7F5] to-[#E7F0EA] rounded-3xl p-10 border border-[#C9DDD0] shadow-lg">

          <h3 className="font-['Playfair_Display',serif] text-3xl font-bold text-[#234634] mb-5">
            {t("pain.insightTitle")}
          </h3>

          <p className="text-[#496554] leading-8 text-[16px]">
            {t("pain.insight")}
          </p>

        </div>

      </div>

    </section>
  );
}