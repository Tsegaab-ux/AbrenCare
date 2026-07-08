import { useTranslation } from "react-i18next";
import { motion, easeOut } from "framer-motion";

export default function BeforeAfter() {
  const { t } = useTranslation();

  const before = [
    t("beforeAfter.before1"),
    t("beforeAfter.before2"),
    t("beforeAfter.before3"),
    t("beforeAfter.before4"),
    t("beforeAfter.before5"),
  ];

  const after = [
    t("beforeAfter.after1"),
    t("beforeAfter.after2"),
    t("beforeAfter.after3"),
    t("beforeAfter.after4"),
    t("beforeAfter.after5"),
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="bg-[#F7F9FC] py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t("beforeAfter.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3.5">
            {t("beforeAfter.titleLine1")}
            <br />
            {t("beforeAfter.titleLine2")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 max-w-[880px] mx-auto">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easeOut }}
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
            className="bg-white border-[1.5px] border-[#F5C6CB] rounded-2xl p-9 shadow-sm"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C0392B] mb-5">
              ✕ {t("beforeAfter.withoutTitle")}
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col gap-3"
            >
              {before.map((text, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">
                    ✕
                  </div>

                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easeOut }}
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
            className="bg-[#1565C0] rounded-2xl p-9 shadow-xl"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-5">
              ✓ {t("beforeAfter.withTitle")}
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col gap-3"
            >
              {after.map((text, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed"
                >
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">
                    ✓
                  </div>

                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}