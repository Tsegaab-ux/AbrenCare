import { Link } from "react-router-dom";

export default function ExecutiveCard() {
  return (
    <Link
      to="/executive-health"
      className="group relative overflow-hidden rounded-3xl border border-[#C8922A]/20 bg-gradient-to-br from-[#111111] to-[#1A1A1A] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C8922A]/10 block"
    >
      <div className="p-8">
        
        {/* Card Top */}
        <div className="card-top">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8922A]/30 bg-[#C8922A]/10 px-3 py-1 text-xs text-[#C8922A] backdrop-blur-sm">
            For Ethiopian leaders
          </div>

          <div className="mt-4 text-sm font-medium text-white/50">
            I am an executive and I need to take control of my own health
          </div>

          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#C8922A]">
            Executive health programme
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            You built an empire. Your heart does not know that. Hypertension has no symptoms. 
            Kidney disease has no symptoms. We monitor everything — continuously — so you keep building.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <span className="text-[#C8922A]">✓</span>
              24/7 continuous vital monitoring
            </li>

            <li className="flex items-center gap-3 text-white/80 text-sm">
              <span className="text-[#C8922A]">✓</span>
              Quarterly full blood panel
            </li>

            <li className="flex items-center gap-3 text-white/80 text-sm">
              <span className="text-[#C8922A]">✓</span>
              Annual cardiac screening & full body scan
            </li>

            <li className="flex items-center gap-3 text-white/80 text-sm">
              <span className="text-[#C8922A]">✓</span>
              Your dedicated physician — always available
            </li>
          </ul>
        </div>

        {/* Card Bottom */}
        <div className="mt-8 pt-6 border-t border-[#C8922A]/15">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <div className="text-base font-semibold text-[#C8922A]">
                Book confidential assessment →
              </div>
              <div className="text-xs text-white/30 mt-1">
                Strictly confidential · 10 founding slots remaining
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#C8922A]/20 flex items-center justify-center">
              <span className="text-[#C8922A] text-lg">→</span>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#C8922A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}