import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ExecutiveCard() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.15,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <Link
        to="/executive-health"
        className="
          relative overflow-hidden block rounded-3xl p-8
          bg-gradient-to-br from-white via-[#FFF9F1] to-[#FBEED8]
          border border-[#E7D2A8]
          shadow-[0_8px_30px_rgba(200,146,42,0.10)]
        "
      >

        {/* TOP RIGHT GOLD GLOW */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#D9A441]/20 rounded-full blur-3xl"></div>

        {/* BOTTOM LEFT GOLD GLOW */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#C8922A]/15 rounded-full blur-3xl"></div>

        {/* LEFT ACCENT EDGE */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#E0B15B] to-[#C8922A]"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          {/* ICON */}
          <div className="w-14 h-14 rounded-2xl bg-[#C8922A] flex items-center justify-center text-white text-2xl shadow-md">
            +
          </div>

          {/* LABEL */}
          <p className="mt-6 text-xs uppercase tracking-wider text-[#8A8A8A] font-semibold">
            {t("executiveCard.label")}
          </p>

          {/* TITLE */}
          <h2 className="mt-3 text-3xl leading-tight font-serif text-[#23254B]">
            {t("executiveCard.title")}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[#6E7885] leading-7">
            {t("executiveCard.description")}
          </p>

          {/* CTA */}
          <div className="mt-8 text-[#C8922A] font-semibold hover:text-[#D9A441] transition">
            {t("executiveCard.cta")}
          </div>

        </div>

      </Link>
    </motion.div>
  );
}