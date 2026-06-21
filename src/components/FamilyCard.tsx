import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FamilyCard() {
  const { t } = useTranslation();

  return (
    <Link
      to="/family"
      className="block rounded-3xl bg-[#EEF1E8] p-8 border border-[#D9DED1] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      
      <div className="w-14 h-14 rounded-2xl bg-[#A7B096] flex items-center justify-center text-white text-2xl">
        ⌂
      </div>

      
      <p className="mt-6 text-xs uppercase tracking-wider text-gray-500 font-medium">
        {t("familyCard.label")}
      </p>

      
      <h2 className="mt-3 text-3xl leading-tight font-serif text-[#222]">
        {t("familyCard.title")}
      </h2>

      
      <p className="mt-4 text-gray-600 leading-7">
        {t("familyCard.description")}
      </p>

      
      <div className="mt-8 text-[#65715A] font-medium">
        {t("familyCard.cta")}
      </div>
    </Link>
  );
}