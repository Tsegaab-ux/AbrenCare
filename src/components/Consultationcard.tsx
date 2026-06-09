import { Link } from "react-router-dom";

export default function ConsultationCard() {
  return (
    <Link
      to="/consultation"
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1565C0] to-[#0E4A8F] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1565C0]/20 block"
    >
      <div className="p-8">
        {/* Card Top */}
        <div className="card-top">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm">
            For Ethiopians in Ethiopia
          </div>
          
          {/* Who */}
          <div className="mt-4 text-sm font-medium text-white/60">
            I need to see a doctor today — without the hospital queue
          </div>
          
          {/* Title */}
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            Digital health consultation
          </h2>
          
          {/* Description */}
          <p className="mt-4 text-white/70 leading-relaxed">
            A licensed Ethiopian doctor on your phone. In Amharic. Within hours. No travel. 
            No 4-hour wait. No hospital stress. Book now — we confirm your doctor in 15 minutes.
          </p>
          
          {/* Features List */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              Licensed Ethiopian doctors &amp; nurses
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              Video · audio · chat — in Amharic
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              8 specialties available same day
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              Pay in ETB — Telebirr or CBE Birr
            </li>
          </ul>
        </div>
        
        {/* Card Bottom */}
        <div className="card-bottom mt-8 pt-6 border-t border-white/10">
          <div className="card-cta flex items-center justify-between group/cta cursor-pointer">
            <div>
              <div className="text-base font-semibold text-white group-hover/cta:translate-x-1 transition-transform duration-300">
                Book a consultation →
              </div>
              <div className="text-xs text-white/40 mt-1">
                Pay in ETB · Confirmed in 15 minutes
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/cta:bg-white transition-all duration-300 group-hover/cta:translate-x-1">
              <span className="text-white text-lg group-hover/cta:text-[#1565C0] transition-colors duration-300">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}