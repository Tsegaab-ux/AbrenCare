export default function ProgramSection() {
  return (
    <section className="bg-[#080808] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            What is included
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            Your complete health
            <br />
            command centre.
          </h2>
          <p className="text-base text-white/40 max-w-[560px] mx-auto leading-relaxed">
            Two service categories. We run all of them. You just show up for the tests — we come to you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Preventive Care Card */}
          <div className="bg-white/3 border border-white/7 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5">
            <div className="bg-gradient-to-br from-[#0D3B25] to-[#1B5E3B] p-8 lg:p-9">
              <span className="text-3xl mb-4 block">🛡️</span>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                Preventive Care
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                Catch problems before they become emergencies. Our preventive programme runs continuously in the background — you never have to think about it.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Executive Physical Exam — complete head-to-toe assessment annually
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Full Lab Testing — blood, urine, biomarkers every quarter
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Imaging Coordination — X-ray, ultrasound, MRI arranged for you
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Health Risk Analysis — personalised risk score with action plan
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Continuous vital monitoring — 24/7/365
                </li>
              </ul>
            </div>
            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl flex-shrink-0">📊</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">Quarterly health intelligence report</div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Every vital trend, blood result, and risk score in one clean document. Read in five minutes. Know exactly where you stand.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Concierge Care Card */}
          <div className="bg-white/3 border border-white/7 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5">
            <div className="bg-gradient-to-br from-[#1a0f00] to-[#3D2408] p-8 lg:p-9">
              <span className="text-3xl mb-4 block">👨‍⚕️</span>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                Concierge Care
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                Healthcare that works around your schedule — not the other way around. We handle everything. You just show up.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Dedicated Health Coordinator — one person who knows your case
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Fast Specialist Access — appointments within 48 hours
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Travel Health Support — pre-trip prep and remote care
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Priority Appointments — same-day when you need them
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Your dedicated physician — calls you with results, you never chase
                </li>
              </ul>
            </div>
            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl flex-shrink-0">🚨</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">24/7 emergency response</div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    If monitoring detects a critical event, our medical coordinator activates immediately. <strong className="text-white/80">Response: under 15 minutes, anywhere in Addis Ababa.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}