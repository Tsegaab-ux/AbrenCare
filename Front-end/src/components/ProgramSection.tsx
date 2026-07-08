import { useTranslation } from "react-i18next";
import bgImage from "../images/program.png";

export default function ProgramSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div className="inline-block bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.25)] text-[#C8922A] text-[11px] font-semibold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-4">
            {t("program.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[46px] font-bold leading-[1.15] tracking-[-1px] text-white mb-4">
            {t("program.titleLine1")}
            <br />
            <span className="text-[#C8922A] italic">
              {t("program.titleLine2")}
            </span>
          </h2>

          <p className="text-base text-white/60 max-w-[560px] mx-auto leading-relaxed">
            {t("program.description")}
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* PREVENTIVE CARD (UPDATED TO MATCH RIGHT CARD STYLE) */}
          <div className="backdrop-blur-xl bg-white/8 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.015] transition duration-300">

            {/* TOP (NOW MATCHES RIGHT CARD COLOR SYSTEM) */}
            <div className="p-9 bg-gradient-to-br from-[#2B1800]/80 to-[#4D2C09]/80">

              <span className="text-4xl block mb-5"></span>

              <h3 className="font-['Playfair_Display',serif] text-3xl text-white mb-3">
                {t("program.preventiveTitle")}
              </h3>

              <p className="text-white/60 leading-7 mb-6 text-sm">
                {t("program.preventiveDesc")}
              </p>

              <ul className="space-y-3">

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.preventiveItem1")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.preventiveItem2")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.preventiveItem3")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.preventiveItem4")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.preventiveItem5")}
                </li>

              </ul>

            </div>

            {/* FOOTER */}
            <div className="p-6 border-t border-white/10 bg-black/10">

              <div className="bg-white/5 rounded-2xl p-4 flex gap-4">

                <div className="text-2xl"></div>

                <div>
                  <div className="text-white font-medium mb-1">
                    {t("program.preventiveReportTitle")}
                  </div>

                  <p className="text-white/50 text-sm">
                    {t("program.preventiveReportDesc")}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* CONCIERGE CARD (UNCHANGED - REFERENCE STYLE) */}
          <div className="backdrop-blur-xl bg-white/8 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.015] transition duration-300">

            {/* TOP */}
            <div className="p-9 bg-gradient-to-br from-[#2B1800]/80 to-[#4D2C09]/80">

              <span className="text-4xl block mb-5"></span>

              <h3 className="font-['Playfair_Display',serif] text-3xl text-white mb-3">
                {t("program.conciergeTitle")}
              </h3>

              <p className="text-white/60 leading-7 mb-6 text-sm">
                {t("program.conciergeDesc")}
              </p>

              <ul className="space-y-3">

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.conciergeItem1")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.conciergeItem2")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.conciergeItem3")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.conciergeItem4")}
                </li>

                <li className="flex gap-3 text-white/75 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#C8922A] text-black flex items-center justify-center text-xs">✓</div>
                  {t("program.conciergeItem5")}
                </li>

              </ul>

            </div>

            {/* FOOTER */}
            <div className="p-6 border-t border-white/10 bg-black/10">

              <div className="bg-white/5 rounded-2xl p-4 flex gap-4">

                <div className="text-2xl"></div>

                <div>
                  <div className="text-white font-medium mb-1">
                    {t("program.conciergeEmergencyTitle")}
                  </div>

                  <p className="text-white/50 text-sm">
                    {t("program.conciergeEmergencyDesc")}{" "}
                    <strong className="text-white/80">
                      {t("program.conciergeEmergencyStrong")}
                    </strong>
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}