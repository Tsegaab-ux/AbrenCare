import { useTranslation } from "react-i18next";
import { motion, easeOut } from "framer-motion";
import backgroundImage from "../images/digital1.png";

export default function ProblemSection() {
  const { t } = useTranslation();

  // stagger animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // child item animation
  const item = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <div className="inline-block bg-[rgba(192,57,43,0.10)] border border-[rgba(192,57,43,0.25)] text-[#EFB2B2] text-[11px] font-semibold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-4">
            {t("problemSection.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[46px] font-bold leading-[1.15] tracking-[-1px] text-white mb-4">
            {t("problemSection.titleLine1")}
            <br />
            {t("problemSection.titleLine2")}
          </h2>

          <p className="text-base text-white/70 max-w-[560px] leading-relaxed">
            {t("problemSection.description")}
          </p>
        </motion.div>

        {/* STORY CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.20 }}
          className="grid lg:grid-cols-2 gap-6 mb-10"
        >

          {/* CARD 1 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/10 shadow-xl"
          >
            <p className="text-sm text-white/85 leading-7 italic mb-4">
              "{t("problemSection.story1")}"
            </p>

            <div className="text-xs text-white/50">
              {t("problemSection.story1Author")}
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="backdrop-blur-xl bg-[rgba(192,57,43,0.12)] rounded-3xl p-8 border border-[rgba(192,57,43,0.20)] shadow-xl"
          >
            <p className="text-sm text-white/85 leading-7 italic mb-4">
              "{t("problemSection.story2")}"
            </p>

            <div className="text-xs text-white/50">
              {t("problemSection.story2Author")}
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/10 shadow-xl"
          >
            <p className="text-sm text-white/85 leading-7 italic mb-4">
              "{t("problemSection.story3")}"
            </p>

            <div className="text-xs text-white/50">
              {t("problemSection.story3Author")}
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/10 shadow-xl"
          >
            <p className="text-sm text-white/85 leading-7 italic mb-4">
              "{t("problemSection.story4")}"
            </p>

            <div className="text-xs text-white/50">
              {t("problemSection.story4Author")}
            </div>
          </motion.div>

        </motion.div>

        {/* STATS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-6"
        >

          {/* STAT 1 */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-7 text-center shadow-xl"
          >
            <div className="font-['Playfair_Display',serif] text-5xl font-bold text-[#C8922A] mb-2">
              {t("problemSection.stat1Value")}
            </div>

            <div className="text-sm text-white/60">
              {t("problemSection.stat1Label")}
            </div>
          </motion.div>

          {/* STAT 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-7 text-center shadow-xl"
          >
            <div className="font-['Playfair_Display',serif] text-5xl font-bold text-[#C8922A] mb-2">
              {t("problemSection.stat2Value")}
            </div>

            <div className="text-sm text-white/60">
              {t("problemSection.stat2Label")}
            </div>
          </motion.div>

          {/* STAT 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-7 text-center shadow-xl"
          >
            <div className="font-['Playfair_Display',serif] text-5xl font-bold text-[#C8922A] mb-2">
              {t("problemSection.stat3Value")}
            </div>

            <div className="text-sm text-white/60">
              {t("problemSection.stat3Label")}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}