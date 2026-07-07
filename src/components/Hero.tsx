import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F7F4EF] min-h-screen px-6 md:px-12 py-8 text-[#1E1E1E]">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Hero Top */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm mb-8">
              <span className="w-2 h-2 bg-[#C89B4D] rounded-full"></span>
              {t("hero.badge")}
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl leading-tight font-serif mb-6">
              {t("hero.title")}
              <br />
              <span className="italic text-[#C89B4D]">
                {t("hero.titleAccent")}
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-8 mb-8 max-w-xl">
              {t("hero.description")}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-5 mb-10 text-sm">

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">{t("hero.feature1Title")}</p>
                  <p className="text-gray-500">{t("hero.feature1Desc")}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">{t("hero.feature2Title")}</p>
                  <p className="text-gray-500">{t("hero.feature2Desc")}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">{t("hero.feature3Title")}</p>
                  <p className="text-gray-500">{t("hero.feature3Desc")}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">{t("hero.feature4Title")}</p>
                  <p className="text-gray-500">{t("hero.feature4Desc")}</p>
                </div>
              </div>

            </div>

            {/* Button */}
            <button className="bg-[#C89B4D] text-white px-8 py-4 rounded-xl hover:opacity-90 transition">
              {t("hero.button")}
            </button>

          </div>

          {/* Right Side */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600"
              alt="Luxury Clinic"
              className="rounded-3xl h-[650px] w-full object-cover"
            />

            {/* Floating Testimonial */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl">

              <p className="text-gray-700 mb-3">
                {t("hero.testimonial")}
              </p>

              <p className="text-sm text-gray-500">
                {t("hero.author")}
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}