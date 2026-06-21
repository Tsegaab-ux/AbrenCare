import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="px-[5%] py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="uppercase tracking-[3px] text-sm text-[#B8822E] mb-5 font-medium">
            {t("about.label")}
          </p>

          <h2 className="text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F]">
            {t("about.title1")}
            <br />
            {t("about.title2")}
          </h2>

          <p className="text-[#4A4A4A] mt-7 leading-9 text-lg max-w-xl">
            {t("about.description")}
          </p>

          <button className="mt-10 bg-[#C8922A] hover:bg-[#B07F22] transition text-white px-8 py-4 rounded-xl font-medium shadow-sm">
            {t("about.button")}
          </button>

        </div>

      </div>
    </section>
  );
}