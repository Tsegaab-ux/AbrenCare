import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-[4%] py-5 bg-[#F8F5F0] flex items-center justify-between border-b border-[#E8E2D9]">

      
      <Link to="/" className="flex items-center gap-3">

        
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="text-[#C8922A] text-3xl">✦</span>
        </div>

        
        <div className="leading-tight">
          <h1 className="text-[30px] font-semibold text-[#1F1F1F] tracking-tight">
            Nordic Abrencare
          </h1>

          <p className="text-[11px] uppercase tracking-[3px] text-[#7C7C7C]">
            Healthcare • Ethiopia
          </p>
        </div>
      </Link>

      
      <div className="hidden lg:flex items-center gap-9 text-[15px] font-medium text-[#2E2E2E]">


        <Link
          to="/family"
          className="flex items-center gap-1 hover:text-[#C8922A] transition"
        >
          Family care
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

        <Link
          to="/executive-health"
          className="flex items-center gap-1 hover:text-[#C8922A] transition"
        >
          Executive health
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

        <Link
          to="/consultation-ethiopia"
          className="flex items-center gap-1 hover:text-[#C8922A] transition"
        >
          Digital consultation
          <ChevronDown size={14} strokeWidth={1.8} />
        </Link>

      </div>

      
      <div className="flex items-center gap-4">

        
        <Link
          to="/consultation"
          className="hidden md:flex items-center justify-center bg-[#C8922A] text-white px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          Book a consultation
        </Link>

        
        <button className="w-12 h-12 rounded-xl bg-[#F2ECE3] border border-[#E5DDD0] flex items-center justify-center hover:bg-[#ECE4D8] transition">
          <Menu size={20} className="text-[#2B2B2B]" />
        </button>

      </div>
    </nav>
  );
}