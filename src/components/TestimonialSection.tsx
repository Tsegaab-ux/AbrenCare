export default function TestimonialSection() {
  return (
    <section className="bg-[#FAF8F4] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E8F5EE] text-[#1B5E3B] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-4">
            Real families. Real results.
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F]">
            One specific story beats
            <br />
            a thousand statistics.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4.5">
          
          {/* Featured Testimonial */}
          <div className="bg-white border border-[#E5E0DA] rounded-2xl p-7 relative">
            <div className="absolute -top-1 right-5 bg-[#1B5E3B] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-b-lg">
              Most shared
            </div>
            <div className="text-[#C8922A] text-sm tracking-[1px] mb-3.5">
              ★★★★★
            </div>
            <p className="text-sm text-[#0F0F0F] leading-relaxed italic mb-4">
              I had not spoken to my mother's doctor in over a year. Three days after joining, I watched her consultation live from my desk in Stockholm. The doctor spoke to me directly. I cried at my desk.
            </p>
            <div className="text-[13px] font-semibold text-[#0F0F0F]">Hiwot M.</div>
            <div className="text-xs text-[#6B6B6B] mt-0.5">Stockholm, Sweden</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-[#E5E0DA] rounded-2xl p-7">
            <div className="text-[#C8922A] text-sm tracking-[1px] mb-3.5">
              ★★★★★
            </div>
            <p className="text-sm text-[#0F0F0F] leading-relaxed italic mb-4">
              My father's blood pressure had been dangerously high for months. Nobody around him knew. The caregiver caught it on the second visit. We had a doctor consultation the same day. That changed everything.
            </p>
            <div className="text-[13px] font-semibold text-[#0F0F0F]">Saron A.</div>
            <div className="text-xs text-[#6B6B6B] mt-0.5">Oslo, Norway</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-[#E5E0DA] rounded-2xl p-7">
            <div className="text-[#C8922A] text-sm tracking-[1px] mb-3.5">
              ★★★★★
            </div>
            <p className="text-sm text-[#0F0F0F] leading-relaxed italic mb-4">
              I work 70-hour weeks. I cannot manage the details from London. They send me one monthly report. They call me only when something needs my attention. I sleep better now than I have in three years.
            </p>
            <div className="text-[13px] font-semibold text-[#0F0F0F]">Yonas T.</div>
            <div className="text-xs text-[#6B6B6B] mt-0.5">London, UK</div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="grid lg:grid-cols-3 gap-0 mt-9 bg-white border border-[#E5E0DA] rounded-2xl overflow-hidden">
          <div className="p-7 text-center border-r border-[#E5E0DA] last:border-r-0">
            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#1B5E3B] leading-none mb-1.5">
              48h
            </div>
            <div className="text-[13px] text-[#6B6B6B] leading-relaxed">
              First visit after signup — or your first month is free
            </div>
          </div>
          <div className="p-7 text-center border-r border-[#E5E0DA] last:border-r-0">
            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#1B5E3B] leading-none mb-1.5">
              100%
            </div>
            <div className="text-[13px] text-[#6B6B6B] leading-relaxed">
              GPS-verified check-in on every single caregiver visit
            </div>
          </div>
          <div className="p-7 text-center border-r border-[#E5E0DA] last:border-r-0">
            <div className="font-['Playfair_Display',serif] text-[44px] font-bold text-[#1B5E3B] leading-none mb-1.5">
              24/7
            </div>
            <div className="text-[13px] text-[#6B6B6B] leading-relaxed">
              Emergency coordinator physically present in Addis Ababa
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}