import { Link } from "react-router-dom";

export default function FamilyCard() {
  return (
    <Link
      to="/family"
      className="bg-[#1B5E3B] rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 transition"
    >
      <div className="p-8">

        <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">
          For diaspora families
        </span>

        <h2 className="text-3xl font-bold text-white mt-5">
          Home Care Visits & Health Monitoring
        </h2>

        <p className="text-white/70 mt-4">
          Your parent is not lonely — they are medically invisible.
        </p>

      </div>
    </Link>
  );
}