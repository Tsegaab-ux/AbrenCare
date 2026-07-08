import { useTranslation } from "react-i18next";

export default function ComparisonSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F8F5F0] py-22 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[32px] border border-[#D9DED1] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)] p-8 lg:p-12">

          <div className="text-center mb-12">
            <div className="inline-block bg-[#E8F5EE] text-[#1B5E3B] text-[12px] font-bold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-4">
              {t("comparison.badge")}
            </div>

            <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-[48px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-4">
              {t("comparison.title")}
            </h2>

            <p className="text-[17px] text-[#4B5B4D] max-w-[560px] mx-auto leading-relaxed font-medium">
              {t("comparison.subtitle")}
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-[28px] border border-[#E5E0DA]">
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-[#FAFBF9] border-b border-[#E5E0DA]">
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.07em] text-[#4B5B4D]">
                    {t("comparison.headerEmpty")}
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.07em] text-[#4B5B4D]">
                    <span className="inline-flex items-center gap-1.5 bg-[#FDEDEC] text-[#C0392B] px-3 py-1.5 rounded-full text-[12px] font-bold">
                      ✕ {t("comparison.withoutTitle")}
                    </span>
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.07em] text-[#1B5E3B]">
                    <span className="inline-flex items-center gap-1.5 bg-[#E8F5EE] text-[#1B5E3B] px-3 py-1.5 rounded-full text-[12px] font-bold">
                      ✓ {t("comparison.withTitle")}
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#E5E0DA]">
                  <td className="px-5 py-5 text-[15px] font-bold text-[#0F0F0F] w-[180px]">
                    {t("comparison.row1.title")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#6B6B6B] bg-[#FFFAF9] font-medium">
                    ✕ {t("comparison.row1.without")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#0F0F0F] bg-[#F6FBF8] font-semibold">
                    ✓ {t("comparison.row1.with")}
                  </td>
                </tr>

                <tr className="border-b border-[#E5E0DA]">
                  <td className="px-5 py-5 text-[15px] font-bold text-[#0F0F0F]">
                    {t("comparison.row2.title")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#6B6B6B] bg-[#FFFAF9] font-medium">
                    ✕ {t("comparison.row2.without")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#0F0F0F] bg-[#F6FBF8] font-semibold">
                    ✓ {t("comparison.row2.with")}
                  </td>
                </tr>

                <tr className="border-b border-[#E5E0DA]">
                  <td className="px-5 py-5 text-[15px] font-bold text-[#0F0F0F]">
                    {t("comparison.row3.title")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#6B6B6B] bg-[#FFFAF9] font-medium">
                    ✕ {t("comparison.row3.without")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#0F0F0F] bg-[#F6FBF8] font-semibold">
                    ✓ {t("comparison.row3.with")}
                  </td>
                </tr>

                <tr className="border-b border-[#E5E0DA]">
                  <td className="px-5 py-5 text-[15px] font-bold text-[#0F0F0F]">
                    {t("comparison.row4.title")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#6B6B6B] bg-[#FFFAF9] font-medium">
                    ✕ {t("comparison.row4.without")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#0F0F0F] bg-[#F6FBF8] font-semibold">
                    ✓ {t("comparison.row4.with")}
                  </td>
                </tr>

                <tr className="border-b border-[#E5E0DA]">
                  <td className="px-5 py-5 text-[15px] font-bold text-[#0F0F0F]">
                    {t("comparison.row5.title")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#6B6B6B] bg-[#FFFAF9] font-medium">
                    ✕ {t("comparison.row5.without")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#0F0F0F] bg-[#F6FBF8] font-semibold">
                    ✓ {t("comparison.row5.with")}
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 text-[15px] font-bold text-[#0F0F0F]">
                    {t("comparison.row6.title")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#6B6B6B] bg-[#FFFAF9] font-medium">
                    ✕ {t("comparison.row6.without")}
                  </td>
                  <td className="px-5 py-5 text-[15px] text-[#0F0F0F] bg-[#F6FBF8] font-semibold">
                    ✓ {t("comparison.row6.with")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}