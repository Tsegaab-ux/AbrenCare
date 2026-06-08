import { Link } from "react-router-dom";

export default function ConsultationCard() {
  return (
    <Link
      to="/consultation"
      className="bg-[#1565C0] rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 transition"
    >
      <div className="p-8">

        <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">
          For Ethiopians in Ethiopia
        </span>

        <h2 className="text-3xl font-bold text-white mt-5">
          Digital Health Consultation
        </h2>

        <p className="text-white/70 mt-4">
          Licensed Ethiopian doctors on your phone.
        </p>

      </div>
    </Link>
  );
}