import { motion, easeOut } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function VideoStorySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">

              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/family2.mp4" type="video/mp4" />
              </video>

            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              {t("story.badge")}
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
              {t("story.title")}
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              {t("story.description")}
            </p>

            <div className="space-y-5">

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1565C0] text-white flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {t("story.feature1")}
                  </h4>
                  <p className="text-gray-600">
                    {t("story.feature1Desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1565C0] text-white flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {t("story.feature2")}
                  </h4>
                  <p className="text-gray-600">
                    {t("story.feature2Desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1565C0] text-white flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {t("story.feature3")}
                  </h4>
                  <p className="text-gray-600">
                    {t("story.feature3Desc")}
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}