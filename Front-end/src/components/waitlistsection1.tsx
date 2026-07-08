import axios from "axios";
import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

export default function WaitlistSection() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    whatsapp: "",
    priority: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!formData.fullName || !formData.email) {
      setErrorMessage(t("waitlist.alert"));
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/waiting-list/", {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.whatsapp,
        notes: `${formData.country ? `Country: ${formData.country}. ` : ""}${
          formData.priority ? `Priority: ${formData.priority}` : ""
        }`,
      });

      setSubmitted(true);
    } catch (error: any) {
      const message =
        error.response?.data?.detail || error.response?.data || error.message;

      setErrorMessage(
        typeof message === "string" ? message : JSON.stringify(message)
      );
    }
  };

  return (
    <section id="waitlist" className="bg-[#F8F4EE] py-22 px-6 lg:px-8">

      <div className="max-w-[580px] mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F2ECE5] border border-[#E7DED3] text-[#7EA98A] px-4 py-1.5 rounded-full text-[11px] font-semibold mb-5">
          ⭐ {t("waitlist.spotsRemaining")}
        </div>

        {/* Title */}
        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-[-1px] text-[#2D241D] mb-3">
          {t("waitlist.titleLine1")}
          <br />
          {t("waitlist.titleLine2")}
        </h2>

        <p className="text-base text-[#6B6B6B] mb-4 leading-relaxed">
          {t("waitlist.subtitle")}
        </p>

        {/* Card */}
        <div className="bg-white border-[1.5px] border-[#E7DED3] rounded-2xl p-9 mt-7 text-left shadow-[0_16px_48px_rgba(0,0,0,0.07)]">

          {/* Progress */}
          <div className="bg-[#F2ECE5] rounded-xl p-2.5 flex items-center gap-3 mb-6 border border-[#E7DED3]">
            <div className="flex-1 h-1.5 bg-[#E7DED3] rounded-full overflow-hidden">
              <div className="h-full w-[28%] bg-gradient-to-r from-[#7EA98A] to-[#6E9E7C] rounded-full"></div>
            </div>
            <div className="text-xs font-semibold text-[#7EA98A] whitespace-nowrap">
              {t("waitlist.spotsLeft")}
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <p className="text-sm text-red-600 mb-4">{errorMessage}</p>
              )}

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">

                <div>
                  <label className="block text-[13px] font-medium text-[#2D241D] mb-1.5">
                    {t("waitlist.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("waitlist.namePlaceholder")}
                    className="w-full px-4 py-3 border-[1.5px] border-[#E7DED3] rounded-xl text-sm bg-white focus:border-[#B88A44] outline-none"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#2D241D] mb-1.5">
                    {t("waitlist.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("waitlist.emailPlaceholder")}
                    className="w-full px-4 py-3 border-[1.5px] border-[#E7DED3] rounded-xl text-sm bg-white focus:border-[#B88A44] outline-none"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
              </div>

              {/* Country + WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">

                <div>
                  <label className="block text-[13px] font-medium text-[#2D241D] mb-1.5">
                    {t("waitlist.country")}
                  </label>
                  <select
                    className="w-full px-4 py-3 border-[1.5px] border-[#E7DED3] rounded-xl text-sm bg-white focus:border-[#B88A44] outline-none"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  >
                    <option value="">{t("waitlist.select")}</option>
                    <option value="Sweden">{t("waitlist.sweden")}</option>
                    <option value="Norway">{t("waitlist.norway")}</option>
                    <option value="UK">{t("waitlist.uk")}</option>
                    <option value="USA">{t("waitlist.usa")}</option>
                    <option value="Canada">{t("waitlist.canada")}</option>
                    <option value="Germany">{t("waitlist.germany")}</option>
                    <option value="Denmark">{t("waitlist.denmark")}</option>
                    <option value="Finland">{t("waitlist.finland")}</option>
                    <option value="UAE">{t("waitlist.uae")}</option>
                    <option value="Australia">{t("waitlist.australia")}</option>
                    <option value="Other">{t("waitlist.other")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#2D241D] mb-1.5">
                    {t("waitlist.whatsapp")}
                  </label>
                  <input
                    type="tel"
                    placeholder="+46 70 123 4567"
                    className="w-full px-4 py-3 border-[1.5px] border-[#E7DED3] rounded-xl text-sm bg-white focus:border-[#B88A44] outline-none"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                  />
                </div>
              </div>

              {/* Priority */}
              <div className="mb-4">
                <label className="block text-[13px] font-medium text-[#2D241D] mb-1.5">
                  {t("waitlist.priority")}
                </label>
                <select
                  className="w-full px-4 py-3 border-[1.5px] border-[#E7DED3] rounded-xl text-sm bg-white focus:border-[#B88A44] outline-none"
                  value={formData.priority}
                  onChange={(e) => handleChange("priority", e.target.value)}
                >
                  <option value="">{t("waitlist.selectOne")}</option>
                  <option value="Option 1">{t("waitlist.option1")}</option>
                  <option value="Option 2">{t("waitlist.option2")}</option>
                  <option value="Option 3">{t("waitlist.option3")}</option>
                  <option value="Option 4">{t("waitlist.option4")}</option>
                </select>
              </div>

              {/* Button */}
                <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7EA98A] to-[#6E9E7C] hover:from-[#6E9E7C] hover:to-[#5A8668] text-white py-4 rounded-xl font-bold text-base hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(110,158,124,0.35)] transition-all duration-300"
                >
                {t("waitlist.button")}
                </button>

              <p className="text-center text-xs text-[#6B6B6B] mt-2.5">
                {t("waitlist.footer")}
              </p>
            </form>
          ) : (
            <div className="bg-[#F2ECE5] rounded-xl p-6 text-center text-[#2D241D] text-sm border border-[#E7DED3]">
              ✓ {t("waitlist.success1")}
              <br /><br />
              {t("waitlist.success2")}
              <br /><br />
              <strong>{t("waitlist.success3")}</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}