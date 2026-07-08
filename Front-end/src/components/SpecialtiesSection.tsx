import { useTranslation } from "react-i18next";

export default function Specialties() {
  const { t } = useTranslation();

  const specialties = [
    {
      title: t("specialties.generalPractice"),
      desc: t("specialties.generalPracticeDesc"),
    },
    {
      title: t("specialties.cardiology"),
      desc: t("specialties.cardiologyDesc"),
    },
    {
      title: t("specialties.paediatrics"),
      desc: t("specialties.paediatricsDesc"),
    },
    {
      title: t("specialties.diabetes"),
      desc: t("specialties.diabetesDesc"),
    },
    {
      title: t("specialties.neurology"),
      desc: t("specialties.neurologyDesc"),
    },
    {
      title: t("specialties.respiratory"),
      desc: t("specialties.respiratoryDesc"),
    },
    {
      title: t("specialties.dermatology"),
      desc: t("specialties.dermatologyDesc"),
    },
    {
      title: t("specialties.mentalHealth"),
      desc: t("specialties.mentalHealthDesc"),
    },
  ];

  return (
    <section
      id="specialties"
      className="relative overflow-hidden py-24 px-6 lg:px-8 bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-[#E3F2FD]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85)_0%,transparent_35%)] pointer-events-none" />

      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#BFDBFE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white rounded-full px-4 py-2 text-xs font-semibold text-[#2563EB] shadow-sm mb-5">
            <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
            {t("specialties.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-[48px] font-bold leading-tight tracking-[-1px] text-[#0F172A]">
            {t("specialties.titleLine1")}
            <br />
            <span className="text-[#3B82F6]">
              {t("specialties.titleLine2")}
            </span>
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {specialties.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/70 bg-white/55 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/75 hover:border-[#93C5FD] hover:shadow-2xl"
            >
              <h3 className="font-['Playfair_Display',serif] text-xl font-semibold text-[#1E293B] mb-4">
                {item.title}
              </h3>

              <div className="w-12 h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#BFDBFE] rounded-full mb-5 transition-all duration-300 group-hover:w-20" />

              <p className="text-[15px] leading-7 text-[#64748B]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}