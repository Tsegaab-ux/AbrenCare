export default function ExecutiveHero() {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-[rgba(200,146,42,0.06)] via-transparent to-transparent pointer-events-none" />
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8922A] to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="fi v">
            <div className="inline-flex items-center gap-2 bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922A] animate-pulse" />
              Executive Health Programme — strictly confidential
            </div>
            
            <h1 className="font-['Playfair_Display',serif] text-4xl lg:text-[66px] font-bold leading-[1.08] tracking-[-2px] text-white mb-2.5">
              Ethiopia's most
              <br />
              successful people
              <br />
              are dying <em className="italic text-[#C8922A] not-italic">too early.</em>
            </h1>
            
            {/* Stat Box */}
            <div className="inline-flex items-center gap-2.5 bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.2)] rounded-xl px-4 py-2.5 mb-6">
              <span className="text-lg">⚠️</span>
              <div className="text-[13px] text-[#EF9F9F] leading-relaxed">
                <strong className="text-white text-sm block">Cardiovascular disease kills 24% of Ethiopian adults.</strong>
                Most had no symptoms. They felt completely fine — right up until they did not.
              </div>
            </div>
            
            <p className="text-lg text-white/45 leading-relaxed max-w-[500px] mb-3">
              Hypertension. Kidney disease. Early heart failure. <strong className="text-white font-semibold">All silent. All preventable. None monitored.</strong> We fix that — continuously, proactively, and completely confidentially.
            </p>
            
            <p className="text-sm text-white/35 mb-9 max-w-[460px] leading-relaxed">
              We monitor your vitals daily. Run your blood panel quarterly. Scan annually. Your dedicated physician calls you with results. You focus on leading. We protect the person doing it.
            </p>
            
            <div className="flex flex-col gap-2.5 max-w-[400px] mb-9">
              <button className="bg-[#C8922A] text-black px-7 py-4 rounded-xl font-bold text-base hover:bg-[#F0C96A] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(200,146,42,0.35)] transition-all">
                Book your confidential health assessment
              </button>
              
              <button className="bg-transparent text-white/50 px-7 py-3.5 rounded-xl font-medium text-sm border border-white/12 hover:text-white hover:border-white/25 transition-all">
                See the data first ↓
              </button>
              
              <div className="text-center text-[11px] text-white/20 flex items-center justify-center gap-1.5">
                🔒 Strictly confidential · No commitment · Results within 72 hours
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5 text-sm text-white/35">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                We come to you — your office or home
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/35">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                Nordic-standard protocols
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/35">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                Your dedicated physician
              </div>
            </div>
          </div>
          
          {/* Right Column - Live Monitor Dashboard */}
          <div className="fi v">
            <div className="bg-[#161616] border border-white/12 rounded-2xl p-6 relative overflow-hidden">
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8922A] to-transparent" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <div className="text-[11px] text-white/35 uppercase tracking-[0.1em]">Live health monitoring dashboard</div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#4CAF50]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  Monitoring active
                </div>
              </div>
              
              {/* Alert Banner */}
              <div className="bg-[rgba(192,57,43,0.1)] border border-[rgba(192,57,43,0.25)] rounded-xl p-3.5 flex gap-3 items-start mb-4">
                <div className="text-lg flex-shrink-0">🚨</div>
                <div>
                  <div className="text-xs font-semibold text-[#EF9F9F] mb-0.5">Blood pressure alert — physician notified</div>
                  <div className="text-[11px] text-white/40 leading-relaxed">Sustained elevation detected over 72 hours. Dr. Bekele has been alerted. Consultation scheduled for today 14:00.</div>
                </div>
              </div>
              
              {/* Vital Signs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* BP - Alert */}
                <div className="bg-[rgba(192,57,43,0.06)] border border-[rgba(192,57,43,0.3)] rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">Blood pressure</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(192,57,43,0.2)] text-[#EF9F9F]">High</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    158<span className="text-[11px] text-white/30 font-['DM_Sans']">/96 mmHg</span>
                  </div>
                  <div className="text-[10px] text-white/25">↑ Rising — 3 consecutive days</div>
                </div>
                
                {/* Heart Rate - Warning */}
                <div className="bg-[rgba(255,152,0,0.04)] border border-[rgba(255,152,0,0.2)] rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">Heart rate</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(255,152,0,0.15)] text-[#FFB74D]">Elevated</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    91<span className="text-[11px] text-white/30 font-['DM_Sans']"> bpm</span>
                  </div>
                  <div className="text-[10px] text-white/25">↑ Above baseline</div>
                </div>
                
                {/* Oxygen - Normal */}
                <div className="bg-white/4 border border-white/7 rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">Oxygen sat.</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(76,175,80,0.15)] text-[#81C784]">Normal</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    97<span className="text-[11px] text-white/30 font-['DM_Sans']"> %</span>
                  </div>
                  <div className="text-[10px] text-white/25">→ Stable</div>
                </div>
                
                {/* Glucose - Warning */}
                <div className="bg-[rgba(255,152,0,0.04)] border border-[rgba(255,152,0,0.2)] rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">Blood glucose</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(255,152,0,0.15)] text-[#FFB74D]">Watch</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    7.4<span className="text-[11px] text-white/30 font-['DM_Sans']"> mmol/L</span>
                  </div>
                  <div className="text-[10px] text-white/25">↑ Slightly above target</div>
                </div>
              </div>
              
              {/* Blood Panel Row */}
              <div className="bg-white/3 rounded-xl p-3">
                <div className="text-[10px] text-white/30 uppercase tracking-[0.07em] mb-2">Last quarterly blood panel — 14 days ago</div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    Kidney function — normal
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    Liver enzymes — normal
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9800]" />
                    LDL cholesterol — borderline
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F44336]" />
                    HbA1c — elevated — action needed
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}