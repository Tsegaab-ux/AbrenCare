
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="w-full px-[4%] py-5 bg-[#F8F4EE]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#E7DED3]">

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-[#B88A44] text-3xl">✿</span>
          </div>

          <div className="leading-tight">

            <h1 className="text-[34px] font-['Playfair_Display',serif] text-[#2D241D] tracking-tight">
              Nordic Abrencare
            </h1>

            <p className="text-[11px] uppercase tracking-[3px] text-[#8C8177]">
              Healthcare • Ethiopia
            </p>

          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-12 text-[14px] font-medium text-[#4A413A]">

          <Link
            to="/family"
            className="flex items-center gap-1 hover:text-[#B88A44] transition duration-300"
          >
            {t("navbar.family")}
            <ChevronDown size={14} strokeWidth={1.6} />
          </Link>

          <Link
            to="/executive-health"
            className="flex items-center gap-1 hover:text-[#B88A44] transition duration-300"
          >
            {t("navbar.executive")}
            <ChevronDown size={14} strokeWidth={1.6} />
          </Link>

          <Link
            to="/consultation-ethiopia"
            className="flex items-center gap-1 hover:text-[#B88A44] transition duration-300"
          >
            {t("navbar.digital")}
            <ChevronDown size={14} strokeWidth={1.6} />
          </Link>

          

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* LANGUAGE TOGGLER */}
          <div className="hidden md:flex items-center bg-[#F2ECE5] border border-[#E7DED3] rounded-xl p-1 gap-1">

            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                i18n.language === "en"
                  ? "bg-[#B88A44] text-white"
                  : "text-[#8C8177] hover:text-[#2D241D]"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage("am")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                i18n.language === "am"
                  ? "bg-[#B88A44] text-white"
                  : "text-[#8C8177] hover:text-[#2D241D]"
              }`}
            >
              አማ
            </button>

          </div>

          {/* CTA BUTTON */}
          <Link
            to="/consultation"
            className="hidden md:flex items-center justify-center bg-[#B88A44] text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-[#A67A37] transition-all duration-300"
          >
            {t("navbar.book")}
            <span className="ml-3">→</span>
          </Link>

          {/* MENU BUTTON */}
          <button className="w-12 h-12 rounded-xl bg-[#F2ECE5] flex items-center justify-center border border-[#E7DED3] hover:bg-[#ECE3D8] transition">

            <Menu size={22} className="text-[#4A413A]" />

          </button>

        </div>

      </div>
    </nav>
  );
}

