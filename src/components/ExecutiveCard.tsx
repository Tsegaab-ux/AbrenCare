import { Link } from "react-router-dom";

export default function ExecutiveCard() {
  return (
    <Link
      to="/executive"
      className="bg-[#111111] rounded-3xl border border-[#C8922A]/20 overflow-hidden hover:-translate-y-2 transition"
    >
      <div className="p-8">

        <span className="bg-[#C8922A]/20 text-[#C8922A] px-3 py-1 rounded-full text-xs">
          For Ethiopian Leaders
        </span>

        <h2 className="text-3xl font-bold text-[#F0C96A] mt-5">
          Executive Health Programme
        </h2>

        <p className="text-white/70 mt-4">
          Continuous monitoring for leaders and executives.
        </p>

      </div>
    </Link>
  );
}