import { Link } from "react-router-dom";

export default function FamilyCard() {
  return (
    <Link
      to="/family"
      className="block rounded-3xl bg-[#EEF1E8] p-8 border border-[#D9DED1] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#A7B096] flex items-center justify-center text-white text-2xl">
        ⌂
      </div>

      {/* Label */}
      <p className="mt-6 text-xs uppercase tracking-wider text-gray-500 font-medium">
        For diaspora families
      </p>

      {/* Title */}
      <h2 className="mt-3 text-3xl leading-tight font-serif text-[#222]">
        Home care visits & health monitoring
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-7">
        Your parent is not lonely — they are medically invisible.
        We send a vetted caregiver to their home.
        You get a full health report on your phone.
        Every single visit.
      </p>

      {/* CTA */}
      <div className="mt-8 text-[#65715A] font-medium">
        Get your parent’s care plan →
      </div>
    </Link>
  );
}