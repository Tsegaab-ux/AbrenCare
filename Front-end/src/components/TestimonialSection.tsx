import { useTranslation } from "react-i18next";

export default function TestimonialSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F8F4EE] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-block bg-[#F2ECE5] text-[#B88A44] border border-[#E7DED3] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-4">
            {t("testimonialSection.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-[#2D241D]">
            {t("testimonialSection.titleLine1")}
            <br />
            {t("testimonialSection.titleLine2")}
          </h2>

        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid lg:grid-cols-3 gap-4.5">

          {/* CARD 1 */}
          <div className="bg-white border border-[#E7DED3] rounded-2xl p-7 relative shadow-sm">

            <div className="absolute -top-1 right-5 bg-[#B88A44] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-b-lg">
              {t("testimonialSection.featuredTag")}
            </div>

            <p className="text-sm text-[#4A413A] leading-relaxed italic mb-4">
              {t("testimonialSection.story1")}
            </p>

            <div className="text-[13px] font-semibold text-[#2D241D]">
              {t("testimonialSection.story1Name")}
            </div>

            <div className="text-xs text-[#8C8177] mt-0.5">
              {t("testimonialSection.story1Location")}
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#E7DED3] rounded-2xl p-7 shadow-sm">

            <p className="text-sm text-[#4A413A] leading-relaxed italic mb-4">
              {t("testimonialSection.story2")}
            </p>

            <div className="text-[13px] font-semibold text-[#2D241D]">
              {t("testimonialSection.story2Name")}
            </div>

            <div className="text-xs text-[#8C8177] mt-0.5">
              {t("testimonialSection.story2Location")}
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-[#E7DED3] rounded-2xl p-7 shadow-sm">

            <p className="text-sm text-[#4A413A] leading-relaxed italic mb-4">
              {t("testimonialSection.story3")}
            </p>

            <div className="text-[13px] font-semibold text-[#2D241D]">
              {t("testimonialSection.story3Name")}
            </div>

            <div className="text-xs text-[#8C8177] mt-0.5">
              {t("testimonialSection.story3Location")}
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid lg:grid-cols-3 gap-0 mt-9 bg-white border border-[#E7DED3] rounded-2xl overflow-hidden shadow-sm">

          <div className="p-7 text-center border-r border-[#E7DED3]">

            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#B88A44]">
              {t("testimonialSection.stat1Value")}
            </div>

            <div className="text-[13px] text-[#8C8177]">
              {t("testimonialSection.stat1Text")}
            </div>

          </div>

          <div className="p-7 text-center border-r border-[#E7DED3]">

            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#B88A44]">
              {t("testimonialSection.stat2Value")}
            </div>

            <div className="text-[13px] text-[#8C8177]">
              {t("testimonialSection.stat2Text")}
            </div>

          </div>

          <div className="p-7 text-center">

            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#B88A44]">
              {t("testimonialSection.stat3Value")}
            </div>

            <div className="text-[13px] text-[#8C8177]">
              {t("testimonialSection.stat3Text")}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}