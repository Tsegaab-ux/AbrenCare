export default function PainSection() {
  return (
    <section className="bg-[#161616] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block bg-[#FDEDEC] text-[#C0392B] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            The real problem
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            Your parent is not lonely.
            <br />
            They are medically invisible.
          </h2>
          <p className="text-base text-white/45 max-w-[540px] leading-relaxed">
            Ethiopia's elderly are surrounded by love. But love does not catch a rising blood pressure. Love does not follow up on a doctor's prescription. Love does not send you a weekly health report. These are the words we hear every day from diaspora families.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-3.5">
          <div className="bg-white/3 border border-white/6 rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              I call every day and they say they are fine. Then I find out they have not taken their medication in two weeks because they ran out and did not want to worry me.
            </p>
            <div className="text-xs text-white/30 flex items-center gap-1.5">
              🇸🇪 Ethiopian family — Stockholm
            </div>
          </div>
          
          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.25)] rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              My father had a mild stroke. The relatives around him did not recognise the signs. If a trained caregiver had been there that morning, it could have been caught before it became a stroke.
            </p>
            <div className="text-xs text-white/30 flex items-center gap-1.5">
              🇳🇴 Ethiopian family — Oslo
            </div>
          </div>
          
          <div className="bg-white/3 border border-white/6 rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              My mother sees a doctor maybe once a year — if we remember to book it and she is willing to travel. Nobody is tracking anything in between. That terrifies me.
            </p>
            <div className="text-xs text-white/30 flex items-center gap-1.5">
              🇬🇧 Ethiopian family — London
            </div>
          </div>
          
          <div className="bg-white/3 border border-white/6 rounded-2xl p-7">
            <p className="text-white/80 text-sm leading-relaxed italic mb-3">
              I work 60-hour weeks. I cannot manage the details from here. I need someone I completely trust to handle my parents' health — and tell me only when it matters.
            </p>
            <div className="text-xs text-white/30 flex items-center gap-1.5">
              🇺🇸 Ethiopian family — Washington DC
            </div>
          </div>
        </div>
        
        <div className="mt-10 bg-[rgba(192,57,43,0.07)] border border-[rgba(192,57,43,0.15)] rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row gap-5">
          <div className="text-3xl flex-shrink-0">💡</div>
          <div>
            <div className="font-['Playfair_Display',serif] text-xl text-white mb-2 leading-tight">
              The insight that changes everything
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              The problem is not that your parent is alone — they have family around them. The problem is that <strong className="text-white font-semibold">nobody in that family is trained to notice</strong> that their blood pressure has been dangerously high for six months. Nobody is following up on last week's doctor visit. Nobody is sending you a health update. That invisible gap between love and medical care — <strong className="text-white font-semibold">that is exactly what Nordic Abrencare fills.</strong>
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}