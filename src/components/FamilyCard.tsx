import { Link } from "react-router-dom";

export default function FamilyCard() {
  return (
    <Link
      to="/family"
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1B5E3B] to-[#0E3D25] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1B5E3B]/20 block"
    >
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8922A] to-[#C8922A]/40" />
      
      <div className="p-8">
        
        <div className="card-top">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm">
            For diaspora families
          </div>
          
          
          <div className="mt-4 text-sm font-medium text-white/60">
            My elderly parent is in Ethiopia and I live abroad
          </div>
          
          
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            Home care visits &amp; health monitoring
          </h2>
          
          
          <p className="mt-4 text-white/70 leading-relaxed">
            Your parent is not lonely — they are medically invisible. We send a vetted caregiver to their home. 
            You get a full health report on your phone. Every single visit.
          </p>
          
          
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              GPS-verified caregiver visits
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              Vital signs · blood samples · X-ray · MRI
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              Video doctor consultation — join from abroad
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#C8922A]/20 flex items-center justify-center">
                <span className="text-[#C8922A] text-xs">✓</span>
              </div>
              First visit within 48 hours
            </li>
          </ul>
        </div>
        
        
        <div className="card-bottom mt-8 pt-6 border-t border-white/10">
          <div className="card-cta flex items-center justify-between group/cta cursor-pointer">
            <div>
              <div className="text-base font-semibold text-[#C8922A] group-hover/cta:translate-x-1 transition-transform duration-300">
                Join the waitlist →
              </div>
              <div className="text-xs text-white/40 mt-1">
                Pay in USD · EUR · SEK · GBP
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
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}