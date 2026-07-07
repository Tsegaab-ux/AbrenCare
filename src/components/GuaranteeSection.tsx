import { useTranslation } from "react-i18next";

export default function GuaranteeSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1565C0] py-20 px-[5%]">
      <div className="max-w-[640px] mx-auto text-center">

        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3">
          {t("guaranteeSection.titleLine1")}
          <br />
          {t("guaranteeSection.titleLine2")}
        </h2>

        <p className="text-[17px] text-white/65 mb-8 leading-relaxed">
          {t("guaranteeSection.subtitle")}
        </p>

        <div className="bg-white/10 border border-white/15 rounded-2xl p-7 lg:p-8 text-left mb-7">

          <div className="flex gap-3 text-white text-sm mb-3 leading-relaxed">
            <div className="w-5.5 h-5.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              {t("guaranteeSection.point1")}{" "}
              <strong className="text-[#F0C96A] font-semibold">
                {t("guaranteeSection.point1Strong")}
              </strong>
            </div>
          </div>

          <div className="flex gap-3 text-white text-sm mb-3 leading-relaxed">
            <div className="w-5.5 h-5.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              {t("guaranteeSection.point2")}{" "}
              <strong className="text-[#F0C96A] font-semibold">
                {t("guaranteeSection.point2Strong")}
              </strong>
            </div>
          </div>

          <div className="flex gap-3 text-white text-sm leading-relaxed">
            <div className="w-5.5 h-5.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              {t("guaranteeSection.point3")}{" "}
              <strong className="text-[#F0C96A] font-semibold">
                {t("guaranteeSection.point3Strong")}
              </strong>
            </div>
          </div>

        </div>

        <button className="inline-block bg-white text-[#1565C0] px-8.5 py-3.75 rounded-xl font-bold text-base hover:bg-[#E3F2FD] hover:-translate-y-0.5 transition-all">
          {t("guaranteeSection.button")}
        </button>

      </div>
    </section>
  );
}