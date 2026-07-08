import { useTranslation } from "react-i18next";

export default function GuaranteeSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F8F5F0] py-20 px-6 lg:px-8">
      <div className="max-w-[720px] mx-auto">
        <div className="rounded-[32px] border border-[#D9DED1] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)] p-10 text-left">

          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-[#2D5016] mb-3">
              {t("guaranteeSection.titleLine1")}
              <br />
              {t("guaranteeSection.titleLine2")}
            </h2>

            <p className="text-[17px] text-[#2D5016] leading-relaxed font-medium">
              {t("guaranteeSection.subtitle")}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {[
              { text: t("guaranteeSection.point1"), strong: t("guaranteeSection.point1Strong") },
              { text: t("guaranteeSection.point2"), strong: t("guaranteeSection.point2Strong") },
              { text: t("guaranteeSection.point3"), strong: t("guaranteeSection.point3Strong") },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 text-[#2D5016] text-sm leading-relaxed font-medium">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#7EA98A] to-[#6E9E7C] flex items-center justify-center text-[10px] text-white flex-shrink-0 mt-1 shadow-sm">
                  ✓
                </div>
                <div>
                  {item.text} <strong className="text-[#1B5E3B] font-bold">{item.strong}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-block bg-gradient-to-r from-[#7EA98A] to-[#6E9E7C] hover:from-[#6E9E7C] hover:to-[#5A8668] text-white px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg">
              {t("guaranteeSection.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}