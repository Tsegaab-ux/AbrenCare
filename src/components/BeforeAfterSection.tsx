export default function BeforeAfter() {
  return (
    <section className="bg-[#F7F9FC] py-20 px-[5%]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            Before &amp; after
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3.5">
            What seeing a doctor looks like
            <br />
            before and after Abrencare.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 max-w-[880px] mx-auto">
          
          {/* Before Column */}
          <div className="bg-white border-[1.5px] border-[#F5C6CB] rounded-2xl p-9">
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C0392B] mb-5">
              ✕ Without Abrencare
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>Wake up early. Travel across the city. Wait 3 to 5 hours in a queue.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>Lose a full day of work or school just to see a doctor</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>Travel cost plus consultation fee — expensive and exhausting</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>5 minutes with an overworked doctor who barely knows your history</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>Outside Addis — no specialist available. Travel hours for basic care.</span>
              </div>
            </div>
          </div>
          
          {/* After Column */}
          <div className="bg-[#1565C0] rounded-2xl p-9">
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-5">
              ✓ With Abrencare
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>Open the app. Choose a doctor. Book a time. Done in 2 minutes.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>See your doctor from home, office, or anywhere — no travel needed</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>Pay in ETB by Telebirr, CBE Birr, or bank card — quick and secure</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>30-minute dedicated consultation — in Amharic — doctor knows your file</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>Specialists available nationwide — Addis, Hawassa, Dire Dawa, anywhere</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}