
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (

    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12 py-8 text-white">

        <div className="max-w-7xl mx-auto w-full">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
                <span className="w-2 h-2 bg-[#0B6B61] rounded-full"></span>
                {t("hero.badge")}
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl leading-tight font-serif mb-6">
                {t("hero.title")}
                <br />
                <span className="italic text-[#C8922A]">
                  {t("hero.titleAccent")}
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg text-white/90 leading-8 mb-8 max-w-xl">
                {t("hero.description")}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-5 mb-10 text-sm">

                <div className="flex gap-3">
                  <div className="text-[#C8922A]">◉</div>
                  <div>
                    <p className="font-medium">{t("hero.feature1Title")}</p>
                    <p className="text-white/70">{t("hero.feature1Desc")}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-[#C8922A]">◉</div>
                  <div>
                    <p className="font-medium">{t("hero.feature2Title")}</p>
                    <p className="text-white/70">{t("hero.feature2Desc")}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-[#C8922A]">◉</div>
                  <div>
                    <p className="font-medium">{t("hero.feature3Title")}</p>
                    <p className="text-white/70">{t("hero.feature3Desc")}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-[#C8922A]">◉</div>
                  <div>
                    <p className="font-medium">{t("hero.feature4Title")}</p>
                    <p className="text-white/70">{t("hero.feature4Desc")}</p>
                  </div>
                </div>

              </div>

              {/* Button */}
              <button className="bg-[#C8922A] text-white px-8 py-4 rounded-xl hover:bg-[#1E8A7A] transition">
                {t("hero.button")}
              </button>

            </div>

            {/* RIGHT SIDE TESTIMONIAL */}
            <div className="flex justify-end">

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-md">

                <p className="mb-3">
                  {t("hero.testimonial")}
                </p>

                <p className="text-sm text-white/70">
                  {t("hero.author")}
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

