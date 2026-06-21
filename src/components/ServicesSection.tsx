import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0F0F0F] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        
        <div className="text-center mb-12">
          <div className="inline-block bg-white/8 border border-white/8 text-white/50 text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-4">
            {t("services.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white">
            {t("services.title1")}
            <br />
            {t("services.title2")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">

          
          <div className="rounded-2xl overflow-hidden border border-white/7">

            <div className="bg-gradient-to-br from-[#0D3B25] to-[#1B5E3B] p-9 pb-7">

              <span className="text-3xl mb-4 block">🏠</span>

              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                {t("services.home.title")}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed mb-5">
                {t("services.home.description")}
              </p>

              <ul className="space-y-2.5">

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature1")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature2")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature3")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature4")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature5")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature6")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature7")}
                </li>

                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  ✓ {t("services.home.feature8")}
                </li>

              </ul>
            </div>

            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl">🩺</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {t("services.home.insightTitle")}
                  </div>
                  <p className="text-xs text-white/50">
                    {t("services.home.insight")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="rounded-2xl overflow-hidden border border-white/7">

            <div className="bg-gradient-to-br from-[#1a0f00] to-[#3D2408] p-9 pb-7">

              <span className="text-3xl mb-4 block">📱</span>

              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                {t("services.digital.title")}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed mb-5">
                {t("services.digital.description")}
              </p>

              <ul className="space-y-2.5">

                <li className="text-sm text-white/75">✓ {t("services.digital.feature1")}</li>
                <li className="text-sm text-white/75">✓ {t("services.digital.feature2")}</li>
                <li className="text-sm text-white/75">✓ {t("services.digital.feature3")}</li>
                <li className="text-sm text-white/75">✓ {t("services.digital.feature4")}</li>
                <li className="text-sm text-white/75">✓ {t("services.digital.feature5")}</li>
                <li className="text-sm text-white/75">✓ {t("services.digital.feature6")}</li>

              </ul>
            </div>

            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl">🌍</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {t("services.digital.insightTitle")}
                  </div>
                  <p className="text-xs text-white/50">
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