import { useTranslation } from "react-i18next";
import { motion, easeOut } from "framer-motion";

export default function Doctors() {
  const { t } = useTranslation();

  const doctors = [
    {
      initials: "HB",
      name: t("doctors.doctor1Name"),
      specialty: t("doctors.doctor1Specialty"),
      experience: t("doctors.doctor1Experience"),
      languages: ["Amharic", "English"],
      tags: [
        t("doctors.tagAmharic"),
        t("doctors.tagLicensed"),
      ],
    },
    {
      initials: "SA",
      name: t("doctors.doctor2Name"),
      specialty: t("doctors.doctor2Specialty"),
      experience: t("doctors.doctor2Experience"),
      languages: ["Amharic", "English"],
      tags: [
        t("doctors.tagAmharic"),
        t("doctors.tagChildrenSpecialist"),
        t("doctors.tagLicensed"),
      ],
    },
    {
      initials: "MT",
      name: t("doctors.doctor3Name"),
      specialty: t("doctors.doctor3Specialty"),
      experience: t("doctors.doctor3Experience"),
      languages: ["Amharic", "English"],
      tags: [
        t("doctors.tagAmharic"),
        t("doctors.tagHeartSpecialist"),
        t("doctors.tagLicensed"),
      ],
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
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
    <section className="relative overflow-hidden py-24 px-6 lg:px-8 bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-[#E3F2FD]">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85)_0%,transparent_35%)] pointer-events-none" />

      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#BFDBFE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white rounded-full px-4 py-2 text-xs font-semibold text-[#2563EB] shadow-sm mb-5">
            <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
            {t("doctors.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-[48px] font-bold leading-tight tracking-[-1px] text-[#0F172A]">
            {t("doctors.titleLine1")}
            <br />
            <span className="text-[#3B82F6]">
              {t("doctors.titleLine2")}
            </span>
          </h2>

          <p className="mt-5 text-[#64748B] text-lg max-w-2xl mx-auto leading-8">
            {t("doctors.description")}
          </p>
        </motion.div>

        {/* Doctor Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="rounded-3xl border border-white/70 bg-white/60 backdrop-blur-xl p-8 shadow-lg hover:bg-white/80 hover:border-[#93C5FD] hover:shadow-2xl transition-all duration-300"
            >
              {/* Initials */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#2563EB] flex items-center justify-center font-['Playfair_Display',serif] text-xl font-bold text-white shadow-lg mb-6">
                {doctor.initials}
              </div>

              {/* Name */}
              <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold text-[#1E293B] mb-2">
                {doctor.name}
              </h3>

              {/* Specialty */}
              <p className="text-[#64748B] mb-5">
                {doctor.specialty}
              </p>

              {/* Experience */}
              <div className="inline-block rounded-full bg-[#DBEAFE] px-3 py-1 text-sm font-medium text-[#2563EB] mb-5">
                {doctor.experience}
              </div>

              {/* Rating */}
              <div className="text-[#FBBF24] text-sm tracking-widest mb-5">
                ★★★★★
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {doctor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-medium text-[#3B82F6] border border-[#DBEAFE]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}