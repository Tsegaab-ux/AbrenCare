export default function ServicesSection() {
  return (
    <section className="bg-[#0F0F0F] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-white/8 border border-white/8 text-white/50 text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-4">
            What we do
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white">
            Two services. One complete solution.
            <br />
            Managed entirely by us.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          
          {/* Home Care Visits Card */}
          <div className="rounded-2xl overflow-hidden border border-white/7">
            <div className="bg-gradient-to-br from-[#0D3B25] to-[#1B5E3B] p-9 pb-7">
              <span className="text-3xl mb-4 block">🏠</span>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                Home care visits
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                A vetted, trained caregiver visits your parent in Addis Ababa according to your plan. <strong className="text-white">You see every visit live.</strong> You get the full report before your next meeting.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Background-checked caregiver — approved before first visit
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  GPS check-in and check-out — every single visit
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Vital signs monitored — blood pressure, heart rate, oxygen, temperature
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Blood samples taken and sent to lab — results to your phone
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  X-ray and MRI arranged and coordinated — we handle everything
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Medication confirmed and administered every visit
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  Full written health report sent to your phone after every visit
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  24/7 emergency coordinator physically present in Addis Ababa
                </li>
              </ul>
            </div>
            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl flex-shrink-0">🩺</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">Proactive health monitoring — not just care</div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    We do not wait for something to go wrong. Vital signs, blood samples, X-ray, and MRI are tracked continuously. <strong className="text-white/80">Problems are caught before they become emergencies.</strong> That is the Nordic standard we bring to Addis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Consultation Card */}
          <div className="rounded-2xl overflow-hidden border border-white/7">
            <div className="bg-gradient-to-br from-[#1a0f00] to-[#3D2408] p-9 pb-7">
              <span className="text-3xl mb-4 block">📱</span>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                Digital health consultation
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                A licensed Ethiopian doctor meets your parent by video call. <strong className="text-white">You join from anywhere in the world.</strong> Same day. No travel. No waiting room. Notes sent to your phone within minutes.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Licensed Ethiopian doctors and nurses
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Video, audio, or chat — you choose
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  You join the call from Stockholm, London, or Dubai
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Consultation notes to your phone — instantly
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  Same-day availability — no waiting weeks for appointments
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  All in Amharic — you follow in English
                </li>
              </ul>
            </div>
            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl flex-shrink-0">🌍</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">You are in the room — from anywhere</div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    You are in Stockholm. Your parent is in Addis. The doctor speaks to both of you at the same time. You ask questions. You hear the diagnosis. <strong className="text-white/80">You are there — without being there.</strong>
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