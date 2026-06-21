import { useTranslation } from "react-i18next";

export default function WaitlistSection() {
  const { t } = useTranslation();

  return (
    <section id="waitlist" className="bg-white py-22 px-6 lg:px-8">
      <div className="max-w-[580px] mx-auto text-center">

        <div className="inline-flex items-center gap-1.5 bg-[#FEF7E6] border border-[rgba(200,146,42,0.2)] text-[#C8922A] px-4 py-1.5 rounded-full text-[11px] font-semibold mb-5">
          ⭐ {t("waitlist.spotsRemaining")}
        </div>

        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3">
          {t("waitlist.titleLine1")}
          <br />
          {t("waitlist.titleLine2")}
        </h2>

        <p className="text-base text-[#6B6B6B] mb-4 leading-relaxed">
          {t("waitlist.subtitle")}
        </p>

        <div className="bg-[#FAF8F4] border-[1.5px] border-[#E5E0DA] rounded-2xl p-9 mt-7 text-left shadow-[0_16px_48px_rgba(0,0,0,0.07)]">

          <div className="bg-[#E8F5EE] rounded-xl p-2.5 flex items-center gap-3 mb-6 border border-[rgba(27,94,59,0.12)]">
            <div className="flex-1 h-1.5 bg-[rgba(27,94,59,0.15)] rounded-full overflow-hidden">
              <div className="h-full w-[28%] bg-[#1B5E3B] rounded-full"></div>
            </div>
            <div className="text-xs font-semibold text-[#1B5E3B] whitespace-nowrap">
              {t("waitlist.spotsLeft")}
            </div>
          </div>

          <div id="fc">
            <form onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    {t("waitlist.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("waitlist.namePlaceholder")}
                    className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm bg-white"
                    id="fn"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    {t("waitlist.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("waitlist.emailPlaceholder")}
                    className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm bg-white"
                    id="fe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">

                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    {t("waitlist.country")}
                  </label>

                  <select className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm bg-white">
                    <option>{t("waitlist.select")}</option>
                    <option>{t("waitlist.sweden")}</option>
                    <option>{t("waitlist.norway")}</option>
                    <option>{t("waitlist.uk")}</option>
                    <option>{t("waitlist.usa")}</option>
                    <option>{t("waitlist.canada")}</option>
                    <option>{t("waitlist.germany")}</option>
                    <option>{t("waitlist.denmark")}</option>
                    <option>{t("waitlist.finland")}</option>
                    <option>{t("waitlist.uae")}</option>
                    <option>{t("waitlist.australia")}</option>
                    <option>{t("waitlist.other")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    {t("waitlist.whatsapp")}
                  </label>

                  <input
                    type="tel"
                    placeholder="+46 70 123 4567"
                    className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm bg-white"
                  />
                </div>

              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                  {t("waitlist.priority")}
                </label>

                <select className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm bg-white">
                  <option>{t("waitlist.selectOne")}</option>
                  <option>{t("waitlist.option1")}</option>
                  <option>{t("waitlist.option2")}</option>
                  <option>{t("waitlist.option3")}</option>
                  <option>{t("waitlist.option4")}</option>
                </select>
              </div>

              <button
                type="submit"
                onClick={() => {
                  const nameInput = document.getElementById("fn") as HTMLInputElement;
                  const emailInput = document.getElementById("fe") as HTMLInputElement;

                  const name = nameInput ? nameInput.value.trim() : "";
                  const email = emailInput ? emailInput.value.trim() : "";

                  if (!name || !email) {
                    alert(t("waitlist.alert"));
                    return;
                  }

                  const form = document.getElementById("fc");
                  const success = document.getElementById("sm");

                  if (form && success) {
                    form.style.display = "none";
                    success.style.display = "block";
                  }
                }}
                className="w-full bg-[#1B5E3B] text-white py-4 rounded-xl font-bold text-base"
              >
                {t("waitlist.button")}
              </button>

              <p className="text-center text-xs text-[#6B6B6B] mt-2.5">
                {t("waitlist.footer")}
              </p>

            </form>
          </div>

          <div id="sm" className="hidden bg-[#E8F5EE] rounded-xl p-6 text-center text-[#1B5E3B] text-sm">

            ✓ {t("waitlist.success1")}
            <br /><br />
            {t("waitlist.success2")}
            <br /><br />
            <strong>{t("waitlist.success3")}</strong>

          </div>

        </div>

      </div>
    </section>
  );
}