export default function ConsultationNavbar() {
  return (
    <nav className="sticky top-0 z-50 h-16 flex items-center justify-between px-[5%] bg-slate-50/95 backdrop-blur-md border-b border-slate-200">
      <div>
        <h2 className="font-serif text-lg font-bold text-blue-700">
          Nordic <span className="text-[#C8922A]">Abrencare</span>
        </h2>
        <p className="text-[9px] uppercase tracking-widest text-gray-400">
          Digital Healthcare
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#specialties"
          className="px-4 py-2 rounded-full border border-slate-300 text-xs text-gray-600 hover:text-black"
        >
          Services
        </a>

        <button className="px-5 py-2 rounded-full bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}