import { Link } from "react-router-dom";

export default function ConsultationCard() {
  return (
    <Link
      to="/consultation-ethiopia"
      className="block rounded-3xl bg-[#EDF3FA] p-8 border border-[#D7E2EE] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      
      <div className="w-14 h-14 rounded-2xl bg-[#7188A6] flex items-center justify-center text-white text-2xl">
        ☎
      </div>

      
      <p className="mt-6 text-xs uppercase tracking-wider text-gray-500 font-medium">
        For Ethiopians in Ethiopia
      </p>

      
      <h2 className="mt-3 text-3xl leading-tight font-serif text-[#222]">
        Digital health consultation
      </h2>

      
      <p className="mt-4 text-gray-600 leading-7">
        A licensed Ethiopian doctor on your phone.
        In Amharic. Within hours.
        No travel.
        No hospital stress.
        Confirm your doctor in 15 minutes.
      </p>

      
      <div className="mt-8 text-[#7188A6] font-medium">
        Book a consultation →
      </div>
    </Link>
  );
}