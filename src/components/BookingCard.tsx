import { useTranslation } from "react-i18next";

export default function BookingCard() {
  const { t } = useTranslation();

  const specialties = [
    t("bookingCard.cardiology"),
    t("bookingCard.dermatology"),
    t("bookingCard.pediatrics"),
    t("bookingCard.internalMedicine"),
  ];

  const slots = ["09:00", "10:30", "13:00", "15:00", "16:30", "18:00"];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-lg w-full text-[#0F172A]">

      <p className="uppercase tracking-widest text-xs text-gray-500 mb-5">
        {t("bookingCard.title")}
      </p>

      <div className="grid grid-cols-2 gap-2 mb-5">
        {specialties.map((item) => (
          <button
            key={item}
            className="border border-gray-200 rounded-xl p-3 text-sm text-gray-700 hover:border-blue-600 hover:bg-blue-50 transition"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="bg-slate-100 rounded-xl p-4 flex items-center gap-3 mb-4">

        <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-semibold">
          DR
        </div>

        <div>
          <h4 className="font-semibold text-[#0F172A]">
            Dr. Andersson
          </h4>

          <p className="text-sm text-gray-500">
            {t("bookingCard.internalMedicine")}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {slots.map((slot) => (
          <button
            key={slot}
            className="border border-gray-200 rounded-lg py-2 text-sm text-gray-700 hover:border-blue-700 transition"
          >
            {slot}
          </button>
        ))}
      </div>

      <div className="bg-blue-700 rounded-xl p-4 flex justify-between text-white mb-4">
        <span>{t("bookingCard.fee")}</span>
        <span className="font-bold text-xl">€45</span>
      </div>

      <button className="w-full py-3 rounded-xl bg-[#C8922A] font-bold text-black hover:opacity-90 transition">
        {t("bookingCard.confirm")}
      </button>

    </div>
  );
}