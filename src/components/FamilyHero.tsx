export default function FamilyHero() {
  return (
    <section className="relative min-h-screen bg-[#1B5E3B] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-[rgba(200,146,42,0.12)] via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 rounded-full text-white/85 text-sm font-medium mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0C96A] animate-pulse" />
              Now open — founding family spots
            </div>
            
            <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-[66px] font-bold leading-[1.08] tracking-[-2px] text-white mb-6">
              Your parent is
              <br />
              in Addis.
              <br />
              Who is <em className="italic text-[#F0C96A] not-italic">watching
              <br />
              their health?</em>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-[500px] mb-3">
              Not their neighbours. Not their relatives. <strong className="text-white font-semibold">Nobody trained.</strong> Nobody tracking their blood pressure, their medication, their early warning signs. That is what we do.
            </p>
            
            <p className="text-sm text-white/50 italic mb-9 max-w-[460px]">
              A vetted caregiver visits. A licensed doctor consults. You get a full report — every single visit — before your next meeting. From wherever you are in the world.
            </p>
            
            <div className="flex flex-col gap-2.5 max-w-[380px] mb-9">
              <button className="bg-[#C8922A] text-black px-7 py-4 rounded-xl font-bold text-base hover:bg-[#F0C96A] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(200,146,42,0.4)] transition-all">
                Get your parent's care plan — we call in 24 hrs
              </button>
              <p className="text-center text-xs text-white/35">
                No payment now · No contract · Cancel any time
              </p>
            </div>
            
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black">✓</div>
                First visit within 48 hours
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black">✓</div>
                GPS-verified every visit
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black">✓</div>
                Full refund if not satisfied
              </div>
            </div>
          </div>
          
          {/* Right Column - Report Card */}
          <div className="flex flex-col gap-3.5">
            <div className="bg-white/6 border border-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C8922A] flex items-center justify-center font-['Playfair_Display',serif] text-sm text-black font-bold">
                  AT
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Ato Tadesse · Addis Ababa, Age 74</div>
                  <div className="text-[11px] text-white/40">Active care plan · Home visit today</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-[#4CAF50]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  Live
                </div>
              </div>
              
              <div className="bg-white/8 rounded-xl p-3 flex items-center gap-2.5 mb-3.5">
                <span className="text-base flex-shrink-0">🏠</span>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Home care visit in progress</div>
                  <div className="text-[10px] text-white/45">Nurse Meron Girma · GPS verified ✓</div>
                </div>
                <div className="text-[11px] text-[#F0C96A] font-semibold">10:02 AM</div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-white/75">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  Vital signs: BP 128/82 · HR 76 · O₂ 97%
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-lg bg-[rgba(76,175,80,0.15)] text-[#81C784] font-medium">Good</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/75">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  Blood sample taken — sent to lab ✓
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-lg bg-[rgba(76,175,80,0.15)] text-[#81C784] font-medium">Done</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/75">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  Medication confirmed and administered ✓
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-lg bg-[rgba(76,175,80,0.15)] text-[#81C784] font-medium">Done</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/75">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
                  X-ray scheduled — ankle swelling flagged
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-lg bg-[rgba(255,152,0,0.15)] text-[#FFB74D] font-medium">Alert</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/6 border border-[rgba(76,175,80,0.25)] backdrop-blur-sm rounded-xl p-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[rgba(76,175,80,0.15)] flex items-center justify-center text-sm flex-shrink-0">📱</div>
              <div>
                <div className="text-[11px] font-semibold text-white">Visit report sent to your phone</div>
                <div className="text-[10px] text-white/40">Full report delivered · 10:47 AM · Stockholm time</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8922A] to-transparent" />
    </section>
  );
}