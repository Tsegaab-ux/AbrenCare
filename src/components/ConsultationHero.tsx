import BookingCard from "../components/BookingCard";

export default function ConsultationHero() {
  return (
    <section className="relative min-h-screen bg-[#1565C0] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,255,255,0.06)_0%,transparent_55%)] pointer-events-none" />
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8922A] to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-[5%] py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F0C96A] animate-pulse flex-shrink-0" />
              <span>Now available across Ethiopia</span>
            </div>
            
            <h1 className="font-['Playfair_Display',serif] text-4xl lg:text-[60px] font-bold leading-[1.1] tracking-[-1.5px] text-white mb-5">
              See a licensed doctor
              <br />
              from your phone.
              <br />
              <em className="italic text-[#F0C96A] not-italic">No travel.<br />No queue.</em>
            </h1>
            
            <p className="text-[17px] text-white/70 leading-relaxed max-w-[480px] mb-2.5">
              A licensed Ethiopian doctor on video, audio, or chat — in Amharic — within hours. From your home, your office, or anywhere you are in Ethiopia.
            </p>
            
            <p className="text-sm text-white/45 mb-9 max-w-[460px] leading-relaxed">
              No hospital queue. No 4-hour wait. No travel across the city. Just open the app and your doctor is there.
            </p>
            
            <div className="flex flex-col gap-2.5 max-w-[380px] mb-8">
              <button className="w-full bg-[#C8922A] text-black px-7 py-4 rounded-xl font-bold text-base hover:bg-[#F0C96A] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(200,146,42,0.4)] transition-all">
                Book a consultation now
              </button>
              
              <div className="text-center text-xs text-white/35">
                Consultation in Amharic · Pay in ETB · No hospital needed
              </div>
            </div>
            
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-1.5 text-sm text-white/50">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                <span>Licensed Ethiopian doctors</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/50">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                <span>Consultation in Amharic</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/50">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                <span>Available same day</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Booking Card */}
          <div>
            <BookingCard />
          </div>
          
        </div>
      </div>
    </section>
  );
}