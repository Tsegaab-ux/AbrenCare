import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F8F5F0] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-block bg-[#E8F5EE] text-[#1B5E3B] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-4">
            {t("services.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F]">
            {t("services.title1")}
            <br />
            {t("services.title2")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">

          <div className="rounded-2xl overflow-hidden border border-[#D9DED1]">

            <div className="bg-[#EEF1E8] p-9 pb-7">

              <span className="text-3xl mb-4 block">🏠</span>

              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#0F0F0F] mb-2.5">
                {t("services.home.title")}
              </h3>

              <p className="text-sm text-[#4B5B4D] leading-relaxed mb-5">
                {t("services.home.description")}
              </p>

              <ul className="space-y-2.5">

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature1")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature2")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature3")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature4")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature5")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature6")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature7")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-[#4B5B4D]">
                  ✓ {t("services.home.feature8")}
                </li>

              </ul>
            </div>

            <div className="bg-[#F5F7F1] border-t border-[#D9DED1] p-6">
              <div className="bg-white rounded-xl p-4 flex gap-3 border border-[#D9DED1]">
                <div className="text-xl">🩺</div>
                <div>
                  <div className="text-sm font-semibold text-[#0F0F0F] mb-1">
                    {t("services.home.insightTitle")}
                  </div>
                  <p className="text-xs text-[#6B6B6B]">
                    {t("services.home.insight")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#D9DED1]">

            <div className="bg-[#EEF1E8] p-9 pb-7">

              <span className="text-3xl mb-4 block">📱</span>

              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#0F0F0F] mb-2.5">
                {t("services.digital.title")}
              </h3>

              <p className="text-sm text-[#4B5B4D] leading-relaxed mb-5">
                {t("services.digital.description")}
              </p>

              <ul className="space-y-2.5">

                <li className="text-sm text-[#4B5B4D]">✓ {t("services.digital.feature1")}</li>
                <li className="text-sm text-[#4B5B4D]">✓ {t("services.digital.feature2")}</li>
                <li className="text-sm text-[#4B5B4D]">✓ {t("services.digital.feature3")}</li>
                <li className="text-sm text-[#4B5B4D]">✓ {t("services.digital.feature4")}</li>
                <li className="text-sm text-[#4B5B4D]">✓ {t("services.digital.feature5")}</li>
                <li className="text-sm text-[#4B5B4D]">✓ {t("services.digital.feature6")}</li>

              </ul>
            </div>

            <div className="bg-[#F5F7F1] border-t border-[#D9DED1] p-6">
              <div className="bg-white rounded-xl p-4 flex gap-3 border border-[#D9DED1]">
                <div className="text-xl">🌍</div>
                <div>
                  <div className="text-sm font-semibold text-[#0F0F0F] mb-1">
                    {t("services.digital.insightTitle")}
                  </div>
                  <p className="text-xs text-[#6B6B6B]">
                    {t("services.digital.insight")}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}