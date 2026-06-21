import BookingCard from "../components/BookingCard";
import { useTranslation } from "react-i18next";

export default function ConsultationHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0E5FB3] via-[#1565C0] to-[#2B7DD6] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_40%)] pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8922A] to-transparent" />

      <div className="absolute top-20 right-20 w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-[5%] py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white/90 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F0C96A] animate-pulse flex-shrink-0" />
              <span>{t("consultationHero.badge")}</span>
            </div>

            <h1 className="font-['Playfair_Display',serif] text-4xl lg:text-[60px] font-bold leading-[1.1] tracking-[-1.5px] text-white mb-5">
              {t("consultationHero.titleLine1")}
              <br />
              {t("consultationHero.titleLine2")}
              <br />
              <em className="italic text-[#F0C96A] not-italic">
                {t("consultationHero.titleAccent1")}
                <br />
                {t("consultationHero.titleAccent2")}
              </em>
            </h1>

            <p className="text-[17px] text-white/75 leading-relaxed max-w-[480px] mb-2.5">
              {t("consultationHero.description")}
            </p>

            <p className="text-sm text-white/50 mb-9 max-w-[460px] leading-relaxed">
              {t("consultationHero.subDescription")}
            </p>

            <div className="flex flex-col gap-2.5 max-w-[390px] mb-8">
              <button className="w-full bg-[#C8922A] text-black px-7 py-4 rounded-2xl font-bold text-base hover:bg-[#F0C96A] hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(200,146,42,0.35)] transition-all">
                {t("consultationHero.button")}
              </button>

              <div className="text-center text-xs text-white/40">
                {t("consultationHero.note")}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">

              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black">
                  ✓
                </div>
                <span className="text-sm text-white/70">
                  {t("consultationHero.feature1")}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black">
                  ✓
                </div>
                <span className="text-sm text-white/70">
                  {t("consultationHero.feature2")}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black">
                  ✓
                </div>
                <span className="text-sm text-white/70">
                  {t("consultationHero.feature3")}
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-3xl scale-105" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-3 shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
              <BookingCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}