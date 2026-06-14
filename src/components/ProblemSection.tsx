export default function ProblemSection() {
  return (
    <section className="bg-[#141414] py-20 px-[5%]">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block bg-[#FDEDEC] text-[#C0392B] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            The problem
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            Getting healthcare in Ethiopia
            <br />
            should not feel like this.
          </h2>
          
          <p className="text-base text-white/45 max-w-[560px] leading-relaxed">
            These are the words we hear every day from Ethiopians who need a doctor but dread the process.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-3.5 mb-9">
          <div className="bg-white/3 border border-white/6 rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              I took a full day off work to see a doctor. I waited 5 hours. By the time I was seen I had 4 minutes with a doctor who barely looked up from his paper.
            </p>
            <div className="text-xs text-white/30">
              Teacher — Addis Ababa
            </div>
          </div>
          
          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.2)] rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              The nearest specialist to my city is 3 hours away. By the time I travel, pay, and return I have lost two days of income and I am exhausted.
            </p>
            <div className="text-xs text-white/30">
              Small business owner — Hawassa
            </div>
          </div>
          
          <div className="bg-white/3 border border-white/6 rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              My child had a fever at night. The nearest clinic was closed. I had nobody to call. I wish I could reach a doctor from my phone at that moment.
            </p>
            <div className="text-xs text-white/30">
              Mother — Dire Dawa
            </div>
          </div>
          
          <div className="bg-white/3 border border-white/6 rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              My prescription ran out. To renew it I have to take half a day, travel, wait, pay — just for a doctor to tell me to continue the same medication.
            </p>
            <div className="text-xs text-white/30">
              Office worker — Bahir Dar
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid lg:grid-cols-3 gap-3.5">
          <div className="bg-white/4 border border-white/7 rounded-xl p-5 lg:p-6 text-center">
            <div className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-bold text-[#C8922A] mb-1">
              1:10k
            </div>
            <div className="text-xs text-white/40 leading-relaxed">
              Doctor to patient ratio in Ethiopia — one of the lowest in the world
            </div>
          </div>
          
          <div className="bg-white/4 border border-white/7 rounded-xl p-5 lg:p-6 text-center">
            <div className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-bold text-[#C8922A] mb-1">
              4hrs
            </div>
            <div className="text-xs text-white/40 leading-relaxed">
              Average time lost per hospital visit — travel, waiting, and consultation combined
            </div>
          </div>
          
          <div className="bg-white/4 border border-white/7 rounded-xl p-5 lg:p-6 text-center">
            <div className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-bold text-[#C8922A] mb-1">
              30min
            </div>
            <div className="text-xs text-white/40 leading-relaxed">
              Average time from booking to seeing your doctor on Nordic Abrencare
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}