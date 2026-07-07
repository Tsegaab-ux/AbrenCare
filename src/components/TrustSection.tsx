import { useTranslation } from "react-i18next";

export default function TrustSection() {
  const { t } = useTranslation();

  const trustItems = [
    t("trust.item1"),
    t("trust.item2"),
    t("trust.item3"),
    t("trust.item4"),
    t("trust.item5"),
  ];

  return (
    <section className="px-[5%] py-12">
      <div className="grid md:grid-cols-5 gap-6 bg-white rounded-3xl border border-[#E8E2D9] p-8">

        {trustItems.map((item, index) => (
          <div key={index}>

            <h3 className="font-semibold text-[#222222]">
              {item}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              {t("trust.subtitle")}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}