import { useTranslation } from "react-i18next";
import { ShieldCheck, HeartPulse, Globe, Users, Award } from "lucide-react";

export default function TrustSection() {
  const { t } = useTranslation();

  const trustItems = [
    {
      title: t("trust.item1"),
      icon: <ShieldCheck size={20} className="text-[#0B6B61]" />
    },
    {
      title: t("trust.item2"),
      icon: <HeartPulse size={20} className="text-[#C8922A]" />
    },
    {
      title: t("trust.item3"),
      icon: <Globe size={20} className="text-[#7188A6]" />
    },
    {
      title: t("trust.item4"),
      icon: <Users size={20} className="text-[#0B6B61]" />
    },
    {
      title: t("trust.item5"),
      icon: <Award size={20} className="text-[#C8922A]" />
    },
  ];

  return (
    <section className="px-[5%] py-6">

      <div className="grid md:grid-cols-5 gap-4 bg-white rounded-3xl border border-[#DCE5E4] p-4 shadow-sm">

        {trustItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-3 rounded-2xl hover:bg-[#F8FCFB] transition duration-300"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#F4FAF9] flex items-center justify-center shadow-sm">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-[#23254B] leading-5 text-sm">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-xs text-[#7B8591] leading-5">
              {t("trust.subtitle")}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}