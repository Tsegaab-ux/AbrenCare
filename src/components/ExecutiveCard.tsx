import { Link } from "react-router-dom";

export default function ExecutiveCard() {
  return (
    <Link
      to="/executive"
      className="group relative overflow-hidden rounded-3xl border border-[#C8922A]/20 bg-gradient-to-br from-[#111111] to-[#1A1A1A] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C8922A]/10 block"
    >
      <div className="p-8">
        {/* Card Top */}
        <div className="card-top">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8922A]/30 bg-[#C8922A]/10 px-3 py-1 text-xs text-[#C8922A] backdrop-blur-sm">
            For Ethiopian leaders
          </div>
          
          {/* Who */}
          <div className="mt-4 text-sm font-medium text-white/50">
            I am an executive and I need to take control of my own health
          </div>
          
          {/* Title */}
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#C8922A]">
            Executive health programme
          </h2>
          
          {/* Description */}
          <p className="mt-4 text-white/70 leading-relaxed">
            You built an empire. Your heart does not know that. Hypertension has no symptoms. 
            Kidney disease has no symptoms. We monitor everything — continuously — so you keep building.
          </p>
          
          {/* Features List */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              24/7 continuous vital monitoring
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              Quarterly full blood panel
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              Annual cardiac screening &amp; full body scan
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              Your dedicated physician — always available
            </li>
          </ul>
        </div>
        
        {/* Card Bottom */}
        <div className="card-bottom mt-8 pt-6 border-t border-[#C8922A]/15">
          <div className="card-cta flex items-center justify-between group/cta cursor-pointer">
            <div>
              <div className="text-base font-semibold text-[#C8922A] group-hover/cta:translate-x-1 transition-transform duration-300">
                Book confidential assessment →
              </div>
              <div className="text-xs text-white/30 mt-1">
                Strictly confidential · 10 founding slots remaining
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#C8922A]/20 flex items-center justify-center group-hover/cta:bg-[#C8922A] transition-all duration-300 group-hover/cta:translate-x-1">
              <span className="text-[#C8922A] text-lg group-hover/cta:text-white transition-colors duration-300">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#C8922A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}