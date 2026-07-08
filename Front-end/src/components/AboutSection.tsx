import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import aboutImage from "../../src/images/about.png"

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="px-[5%] py-24 overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <p className="uppercase tracking-[3px] text-sm text-[#B8822E] mb-5 font-medium">
            {t("about.label")}
          </p>

          <h2 className="text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F]">
            {t("about.title1")}
            <br />
            {t("about.title2")}
          </h2>

          <p className="text-[#4A4A4A] mt-7 leading-9 text-lg max-w-xl">
            {t("about.description")}
          </p>

          <button className="mt-10 bg-[#C8922A] hover:bg-[#B07F22] transition text-white px-8 py-4 rounded-xl font-medium shadow-sm">
            {t("about.button")}
          </button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src={aboutImage}   
            alt="About section image"
            className="rounded-3xl shadow-xl w-full max-w-[500px] object-cover h-[500px]"
          />
        </motion.div>

      </div>

    </section>
  );
}