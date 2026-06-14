import { ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full px-[4%] py-4 bg-[#F8F5F0] flex items-center justify-between shadow-sm">
      
      {/* Logo Section */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-[28px] font-semibold text-[#2B2B2B] tracking-tight">
          Nordic Abrencare
        </h1>
        <p className="text-[10px] uppercase tracking-[3px] text-[#8A8A8A]">
          Healthcare • Ethiopia
        </p>
      </div>

      {/* Center Navigation */}
      <div className="hidden lg:flex items-center gap-10 text-[14px] text-[#2B2B2B] font-medium">
        
        <button className="flex items-center gap-1 hover:text-[#C8922A] transition">
          Family care <ChevronDown size={14} />
        </button>

        <button className="flex items-center gap-1 hover:text-[#C8922A] transition">
          Executive health <ChevronDown size={14} />
        </button>

        <button className="flex items-center gap-1 hover:text-[#C8922A] transition">
          Digital consultation <ChevronDown size={14} />
        </button>

        <button className="hover:text-[#C8922A] transition">
          About us
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#C8922A] text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition">
          Book a consultation
          <span>→</span>
        </button>

        {/* Menu Button */}
        <button className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
          <Menu size={20} className="text-[#2B2B2B]" />
        </button>
      </div>
    </nav>
  );
}