import { useTranslation } from "react-i18next";

export default function PainSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#161616] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <div className="inline-block bg-[#FDEDEC] text-[#C0392B] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t("pain.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            {t("pain.title1")}
            <br />
            {t("pain.title2")}
          </h2>

          <p className="text-base text-white/45 max-w-[540px] leading-relaxed">
            {t("pain.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-3.5">

          <div className="bg-white/3 border border-white/6 rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              {t("pain.story1")}
            </p>
            <div className="text-xs text-white/30">
              🇸🇪 {t("pain.author1")}
            </div>
          </div>

          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.25)] rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              {t("pain.story2")}
            </p>
            <div className="text-xs text-white/30">
              🇳🇴 {t("pain.author2")}
            </div>
          </div>

          <div className="bg-white/3 border border-white/6 rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              {t("pain.story3")}
            </p>
            <div className="text-xs text-white/30">
              🇬🇧 {t("pain.author3")}
            </div>
          </div>

          <div className="bg-white/3 border border-white/6 rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              {t("pain.story4")}
            </p>
            <div className="text-xs text-white/30">
              🇺🇸 {t("pain.author4")}
            </div>
          </div>

        </div>

        <div className="mt-10 bg-[rgba(192,57,43,0.07)] border border-[rgba(192,57,43,0.15)] rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row gap-5">
          <div className="text-3xl flex-shrink-0">💡</div>

          <div>
            <div className="font-['Playfair_Display',serif] text-xl text-white mb-2 leading-tight">
              {t("pain.insightTitle")}
            </div>

            <p className="text-sm text-white/55 leading-relaxed">
              {t("pain.insight")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}