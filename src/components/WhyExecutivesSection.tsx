export default function WhyExecutivesSection() {
  return (
    <section className="bg-[#101010] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.2)] text-[#EF9F9F] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            The data you need to see
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            Not from poverty.
            <br />
            From being too busy to notice.
          </h2>
          <p className="text-base text-white/40 max-w-[560px] leading-relaxed">
            Ethiopia's most productive people are dying in their 50s and early 60s. Not because they lacked money or access. Because nobody was watching.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-4 mb-9">
          {/* Card 1 - Hot */}
          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.25)] rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">❤️</span>
            <div className="font-bold text-sm text-white mb-2">Cardiovascular disease — #1 cause of death in Addis Ababa</div>
            <p className="text-sm text-white/50 leading-relaxed">
              <strong className="text-white/85">24% of all adult deaths</strong> in Addis Ababa. Most had no prior diagnosis. They were working. They were leading. They were completely unaware.
            </p>
          </div>
          
          {/* Card 2 - Hot */}
          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.25)] rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">🩸</span>
            <div className="font-bold text-sm text-white mb-2">Hypertension — no symptoms until it is too late</div>
            <p className="text-sm text-white/50 leading-relaxed">
              The majority of Ethiopian leaders with <strong className="text-white/85">dangerously high blood pressure do not know they have it.</strong> No symptoms. No check. No warning. The disease progresses invisibly for years.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white/3 border border-white/7 rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">🧠</span>
            <div className="font-bold text-sm text-white mb-2">Stroke strikes at peak career age</div>
            <p className="text-sm text-white/50 leading-relaxed">
              Unlike Western countries, stroke in Ethiopia most commonly hits people in their <strong className="text-white/85">50s and early 60s.</strong> The most productive years. Years that a monitoring programme could have protected.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white/3 border border-white/7 rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">⏰</span>
            <div className="font-bold text-sm text-white mb-2">Stress is the silent accelerator</div>
            <p className="text-sm text-white/50 leading-relaxed">
              Carrying an organisation, a ministry, or a government under pressure is a <strong className="text-white/85">chronic physiological stressor.</strong> Unmanaged, it accelerates hypertension, heart disease, and kidney failure — silently and steadily.
            </p>
          </div>
        </div>
        
        {/* Bottom Insight Box */}
        <div className="bg-[rgba(200,146,42,0.06)] border border-[rgba(200,146,42,0.2)] rounded-2xl p-8 flex flex-col lg:flex-row gap-6">
          <div className="text-4xl flex-shrink-0 mt-1">📊</div>
          <div>
            <div className="font-['Playfair_Display',serif] text-xl lg:text-[22px] text-white mb-2.5 leading-tight">
              The 16-year gap that does not have to exist
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              Life expectancy in Ethiopia: <strong className="text-white">68 years.</strong> In the Nordic region: <strong className="text-white">84 years.</strong> That gap is not genetic. It is not inevitable. It is the direct result of proactive, continuous, data-driven health management. The same management we now bring to Ethiopia's leaders. <strong className="text-white">The gap closes when someone is finally watching.</strong>
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}