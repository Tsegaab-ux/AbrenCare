import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function FamilyCard() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <Link
        to="/family"
        className="
          relative overflow-hidden block rounded-3xl p-8
          bg-gradient-to-br from-white via-[#F8FCFB] to-[#EAF7F5]
          border border-[#BFE7E1]
          shadow-[0_8px_30px_rgba(11,107,97,0.08)]
        "
      >

        {/* TOP RIGHT GREEN EDGE */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#2FAE9B]/20 rounded-full blur-3xl"></div>

        {/* BOTTOM LEFT GREEN EDGE */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#0B6B61]/15 rounded-full blur-3xl"></div>

        {/* LEFT BORDER GLOW */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#2FAE9B] to-[#0B6B61]"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <div className="w-14 h-14 rounded-2xl bg-[#0B6B61] flex items-center justify-center text-white text-2xl shadow-md">
            ⌂
          </div>

          <p className="mt-6 text-xs uppercase tracking-wider text-[#7B8591] font-semibold">
            {t("familyCard.label")}
          </p>

          <h2 className="mt-3 text-3xl leading-tight font-serif text-[#23254B]">
            {t("familyCard.title")}
          </h2>

          <p className="mt-4 text-[#6E7885] leading-7">
            {t("familyCard.description")}
          </p>

          <div className="mt-8 text-[#0B6B61] font-semibold hover:text-[#2FAE9B] transition">
            {t("familyCard.cta")}
          </div>

        </div>

      </Link>
    </motion.div>
  );
}