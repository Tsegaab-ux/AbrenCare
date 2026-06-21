import { useTranslation } from "react-i18next";

export default function ComparisonSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FAF8F4] py-22 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E8F5EE] text-[#1B5E3B] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-4">
            {t("comparison.badge")}
          </div>

          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3.5">
            {t("comparison.title")}
          </h2>

          <p className="text-base text-[#6B6B6B] max-w-[560px] mx-auto leading-relaxed">
            {t("comparison.subtitle")}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="border-b-2 border-[#E5E0DA]">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.07em] text-[#6B6B6B]">
                  {t("comparison.headerEmpty")}
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.07em] text-[#6B6B6B]">
                  <span className="inline-flex items-center gap-1.5 bg-[#FDEDEC] text-[#C0392B] px-3 py-1.5 rounded-full text-[11px]">
                    ✕ {t("comparison.withoutTitle")}
                  </span>
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.07em] text-[#1B5E3B]">
                  <span className="inline-flex items-center gap-1.5 bg-[#E8F5EE] text-[#1B5E3B] px-3 py-1.5 rounded-full text-[11px]">
                    ✓ {t("comparison.withTitle")}
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-[#E5E0DA]">
                <td className="px-4 py-4 text-sm font-semibold text-[#0F0F0F] w-[180px]">
                  {t("comparison.row1.title")}
                </td>
                <td className="px-4 py-4 text-sm text-[#777] bg-[#FFFAF9]">
                  ✕ {t("comparison.row1.without")}
                </td>
                <td className="px-4 py-4 text-sm text-[#0F0F0F] bg-[#F6FBF8] font-medium">
                  ✓ {t("comparison.row1.with")}
                </td>
              </tr>

              <tr className="border-b border-[#E5E0DA]">
                <td className="px-4 py-4 text-sm font-semibold text-[#0F0F0F]">
                  {t("comparison.row2.title")}
                </td>
                <td className="px-4 py-4 text-sm text-[#777] bg-[#FFFAF9]">
                  ✕ {t("comparison.row2.without")}
                </td>
                <td className="px-4 py-4 text-sm text-[#0F0F0F] bg-[#F6FBF8] font-medium">
                  ✓ {t("comparison.row2.with")}
                </td>
              </tr>

              <tr className="border-b border-[#E5E0DA]">
                <td className="px-4 py-4 text-sm font-semibold text-[#0F0F0F]">
                  {t("comparison.row3.title")}
                </td>
                <td className="px-4 py-4 text-sm text-[#777] bg-[#FFFAF9]">
                  ✕ {t("comparison.row3.without")}
                </td>
                <td className="px-4 py-4 text-sm text-[#0F0F0F] bg-[#F6FBF8] font-medium">
                  ✓ {t("comparison.row3.with")}
                </td>
              </tr>

              <tr className="border-b border-[#E5E0DA]">
                <td className="px-4 py-4 text-sm font-semibold text-[#0F0F0F]">
                  {t("comparison.row4.title")}
                </td>
                <td className="px-4 py-4 text-sm text-[#777] bg-[#FFFAF9]">
                  ✕ {t("comparison.row4.without")}
                </td>
                <td className="px-4 py-4 text-sm text-[#0F0F0F] bg-[#F6FBF8] font-medium">
                  ✓ {t("comparison.row4.with")}
                </td>
              </tr>

              <tr className="border-b border-[#E5E0DA]">
                <td className="px-4 py-4 text-sm font-semibold text-[#0F0F0F]">
                  {t("comparison.row5.title")}
                </td>
                <td className="px-4 py-4 text-sm text-[#777] bg-[#FFFAF9]">
                  ✕ {t("comparison.row5.without")}
                </td>
                <td className="px-4 py-4 text-sm text-[#0F0F0F] bg-[#F6FBF8] font-medium">
                  ✓ {t("comparison.row5.with")}
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4 text-sm font-semibold text-[#0F0F0F]">
                  {t("comparison.row6.title")}
                </td>
                <td className="px-4 py-4 text-sm text-[#777] bg-[#FFFAF9]">
                  ✕ {t("comparison.row6.without")}
                </td>
                <td className="px-4 py-4 text-sm text-[#0F0F0F] bg-[#F6FBF8] font-medium">
                  ✓ {t("comparison.row6.with")}
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}