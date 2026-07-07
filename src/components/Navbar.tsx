import { ChevronDown, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full px-[4%] py-5 bg-[#F8F5F0]/90 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between border-b border-[#E8E2D9]">

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
          className="flex items-center gap-1 hover:text-[#C8922A] transition-all duration-300"
        >
          {t("navbar.family")}
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

        <Link
          to="/executive-health"
          className="flex items-center gap-1 hover:text-[#C8922A] transition-all duration-300"
        >
          {t("navbar.executive")}
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

        <Link
          to="/consultation-ethiopia"
          className="flex items-center gap-1 hover:text-[#C8922A] transition-all duration-300"
        >
          {t("navbar.digital")}
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Language Toggle */}
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
          className="hidden md:flex items-center justify-center bg-[#C8922A] text-white px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
        >
          {t("navbar.book")}
        </Link>

        {/* User Dropdown */}
        <div ref={dropdownRef} className="relative">

          {/* User Icon */}
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-12 h-12 rounded-full bg-[#C8922A] text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <User size={18} />
          </button>

          {/* Animated Dropdown */}
          <div
            className={`absolute right-0 mt-3 w-56 bg-white rounded-2xl border border-[#E8E2D9] shadow-2xl overflow-hidden z-50 origin-top-right transition-all duration-300 ease-out ${
              openDropdown
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
            }`}
          >

            <Link
              to="/Login"
              className="block px-5 py-3 text-sm text-[#2B2B2B] hover:bg-[#FAF7F2] hover:pl-6 transition-all duration-200"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="block px-5 py-3 text-sm text-[#2B2B2B] hover:bg-[#FAF7F2] hover:pl-6 transition-all duration-200"
            >
              Sign Up
            </Link>

            <hr className="border-[#EFE8DD]" />

            <button className="w-full text-left px-5 py-3 text-sm text-red-500 hover:bg-[#FAF7F2] hover:pl-6 transition-all duration-200">
              Logout
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}