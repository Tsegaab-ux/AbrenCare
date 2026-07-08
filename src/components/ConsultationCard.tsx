import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ConsultationCard() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <Link
        to="/consultation-ethiopia"
        className="
          relative overflow-hidden block rounded-3xl p-8
          bg-gradient-to-br from-white via-[#F7FAFD] to-[#EAF2FB]
          border border-[#C9D9EB]
          shadow-[0_8px_30px_rgba(113,136,166,0.10)]
        "
      >

        {/* TOP RIGHT BLUE GLOW */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#8CA7C7]/20 rounded-full blur-3xl"></div>

        {/* BOTTOM LEFT BLUE GLOW */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#7188A6]/15 rounded-full blur-3xl"></div>

        {/* LEFT ACCENT EDGE */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#8CA7C7] to-[#7188A6]"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          {/* ICON (keeping your animation) */}
          <motion.div
            className="w-14 h-14 rounded-2xl bg-[#7188A6] flex items-center justify-center text-white text-2xl shadow-md"
            whileHover={{
              scale: 1.15,
              rotate: 10,
              backgroundColor: "#5F7A9A"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            ☎
          </motion.div>

          {/* LABEL */}
          <p className="mt-6 text-xs uppercase tracking-wider text-[#7B8591] font-semibold">
            {t("consultationCard.label")}
          </p>

          {/* TITLE */}
          <h2 className="mt-3 text-3xl leading-tight font-serif text-[#23254B]">
            {t("consultationCard.title")}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[#6E7885] leading-7">
            {t("consultationCard.description")}
          </p>

          {/* CTA */}
          <div className="mt-8 text-[#7188A6] font-semibold hover:text-[#8CA7C7] transition">
            {t("consultationCard.cta")}
          </div>

        </div>

      </Link>
    </motion.div>
  );
}