import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="w-full px-[4%] py-5 bg-[#F8F5F0] flex items-center justify-between border-b border-[#E8E2D9]">

      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="text-[#C8922A] text-3xl">✦</span>
        </div>

        <div className="leading-tight">
          <h1 className="text-[30px] font-semibold text-[#1F1F1F] tracking-tight">
            Nordic Abrencare
          </h1>

          <p className="text-[11px] uppercase tracking-[3px] text-[#7C7C7C]">
            {t("navbar.subtitle")}
          </p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-9 text-[15px] font-medium text-[#2E2E2E]">

        <Link
          to="/family"
          className="flex items-center gap-1 hover:text-[#C8922A] transition"
        >
          {t("navbar.family")}
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

        <Link
          to="/executive-health"
          className="flex items-center gap-1 hover:text-[#C8922A] transition"
        >
          {t("navbar.executive")}
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

        <Link
          to="/consultation-ethiopia"
          className="flex items-center gap-1 hover:text-[#C8922A] transition"
        >
          {t("navbar.digital")}
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Premium Language Toggle */}
        <div className="hidden md:flex items-center bg-[#F2ECE3] border border-[#E5DDD0] rounded-xl p-1 shadow-sm gap-1">

          <button
            onClick={() => changeLanguage("en")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              i18n.language === "en"
                ? "bg-[#C8922A] text-white shadow-md scale-105"
                : "text-[#777] hover:text-[#111]"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => changeLanguage("am")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              i18n.language === "am"
                ? "bg-[#C8922A] text-white shadow-md scale-105"
                : "text-[#777] hover:text-[#111]"
            }`}
          >
            አማ
          </button>

        </div>

        {/* CTA Button */}
        <Link
          to="/consultation"
          className="hidden md:flex items-center justify-center bg-[#C8922A] text-white px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          {t("navbar.book")}
        </Link>

        {/* Mobile Menu */}
        <button className="w-12 h-12 rounded-xl bg-[#F2ECE3] border border-[#E5DDD0] flex items-center justify-center hover:bg-[#ECE4D8] transition">
          <Menu size={20} className="text-[#2B2B2B]" />
        </button>

      </div>
    </nav>
  );
}