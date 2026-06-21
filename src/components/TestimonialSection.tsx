import { useTranslation } from "react-i18next";

export default function TestimonialSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FAF8F4] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-block bg-[#E8F5EE] text-[#1B5E3B] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-4">
            {t("testimonialSection.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F]">
            {t("testimonialSection.titleLine1")}
            <br />
            {t("testimonialSection.titleLine2")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4.5">

          {/* Featured */}
          <div className="bg-white border border-[#E5E0DA] rounded-2xl p-7 relative">
            <div className="absolute -top-1 right-5 bg-[#1B5E3B] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-b-lg">
              {t("testimonialSection.featuredTag")}
            </div>

            <p className="text-sm text-[#0F0F0F] leading-relaxed italic mb-4">
              {t("testimonialSection.story1")}
            </p>

            <div className="text-[13px] font-semibold text-[#0F0F0F]">
              {t("testimonialSection.story1Name")}
            </div>
            <div className="text-xs text-[#6B6B6B] mt-0.5">
              {t("testimonialSection.story1Location")}
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white border border-[#E5E0DA] rounded-2xl p-7">
            <p className="text-sm text-[#0F0F0F] leading-relaxed italic mb-4">
              {t("testimonialSection.story2")}
            </p>
            <div className="text-[13px] font-semibold text-[#0F0F0F]">
              {t("testimonialSection.story2Name")}
            </div>
            <div className="text-xs text-[#6B6B6B] mt-0.5">
              {t("testimonialSection.story2Location")}
            </div>
          </div>

          {/* 3 */}
          <div className="bg-white border border-[#E5E0DA] rounded-2xl p-7">
            <p className="text-sm text-[#0F0F0F] leading-relaxed italic mb-4">
              {t("testimonialSection.story3")}
            </p>
            <div className="text-[13px] font-semibold text-[#0F0F0F]">
              {t("testimonialSection.story3Name")}
            </div>
            <div className="text-xs text-[#6B6B6B] mt-0.5">
              {t("testimonialSection.story3Location")}
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid lg:grid-cols-3 gap-0 mt-9 bg-white border border-[#E5E0DA] rounded-2xl overflow-hidden">

          <div className="p-7 text-center border-r border-[#E5E0DA]">
            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#1B5E3B]">
              {t("testimonialSection.stat1Value")}
            </div>
            <div className="text-[13px] text-[#6B6B6B]">
              {t("testimonialSection.stat1Text")}
            </div>
          </div>

          <div className="p-7 text-center border-r border-[#E5E0DA]">
            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#1B5E3B]">
              {t("testimonialSection.stat2Value")}
            </div>
            <div className="text-[13px] text-[#6B6B6B]">
              {t("testimonialSection.stat2Text")}
            </div>
          </div>

          <div className="p-7 text-center">
            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#1B5E3B]">
              {t("testimonialSection.stat3Value")}
            </div>
            <div className="text-[13px] text-[#6B6B6B]">
              {t("testimonialSection.stat3Text")}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}