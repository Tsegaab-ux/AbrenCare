export default function ConsultationNavbar() {
  return (
    <nav className="sticky top-0 z-50 h-[66px] flex items-center justify-between px-[5%] bg-[#F7F9FC]/97 backdrop-blur-md border-b border-[#DDE3EA]">
      <div className="flex flex-col gap-[1px]">
        <h2 className="font-['Playfair_Display',serif] text-[17px] font-bold text-[#1565C0]">
          Nordic <span className="text-[#C8922A]">Abrencare</span>
        </h2>
        <p className="text-[9px] uppercase tracking-[0.12em] text-gray-400">
          Digital Consultation · Ethiopia
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <a
          href="#specialties"
          className="text-xs text-[#5C6B7A] no-underline px-3.5 py-1.5 rounded-full border border-[#DDE3EA] hover:border-[#0F0F0F] hover:text-[#0F0F0F] transition-colors"
        >
          Family care abroad →
        </a>

        <a
          href="#executive"
          className="text-xs text-[#5C6B7A] no-underline px-3.5 py-1.5 rounded-full border border-[#DDE3EA] hover:border-[#0F0F0F] hover:text-[#0F0F0F] transition-colors"
        >
          Executive health →
        </a>

        <button className="text-[13px] font-semibold text-white bg-[#1565C0] px-5 py-2.25 rounded-[30px] hover:bg-[#1976D2] transition-colors">
          Book a consultation
        </button>
      </div>
    </nav>
  );
}