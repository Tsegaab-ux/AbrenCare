import { Link } from "react-router-dom";

export default function ExecutiveCard() {
  return (
    <Link
      to="/executive-health"
      className="block rounded-3xl bg-[#F8F2E7] p-8 border border-[#E7DCCB] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      
      <div className="w-14 h-14 rounded-2xl bg-[#C89B4D] flex items-center justify-center text-white text-2xl">
        +
      </div>

      
      <p className="mt-6 text-xs uppercase tracking-wider text-gray-500 font-medium">
        For Ethiopian leaders
      </p>

      
      <h2 className="mt-3 text-3xl leading-tight font-serif text-[#222]">
        Executive health programme
      </h2>

      
      <p className="mt-4 text-gray-600 leading-7">
        You built an empire. Your heart does not know that.
        Hypertension has no symptoms.
        Kidney disease has no symptoms.
        We monitor everything continuously.
      </p>

      {/* CTA */}
      <div className="mt-8 text-[#C89B4D] font-medium">
        Explore executive health →
      </div>
    </Link>
  );
}