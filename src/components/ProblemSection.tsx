import { useTranslation } from 'react-i18next';

export default function ProblemSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-[#141414] py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.2)] text-[#EF9F9F] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t('problemSection.badge')}
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            {t('problemSection.titleLine1')}
            <br />
            {t('problemSection.titleLine2')}
          </h2>
          
          <p className="text-base text-white/45 max-w-[560px] leading-relaxed">
            {t('problemSection.description')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-3.5 mb-9">
          <div className="bg-white/3 border border-white/6 rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              "{t('problemSection.story1')}"
            </p>
            <div className="text-xs text-white/30">
              {t('problemSection.story1Author')}
            </div>
          </div>
          
          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.2)] rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              "{t('problemSection.story2')}"
            </p>
            <div className="text-xs text-white/30">
              {t('problemSection.story2Author')}
            </div>
          </div>
          
          <div className="bg-white/3 border border-white/6 rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              "{t('problemSection.story3')}"
            </p>
            <div className="text-xs text-white/30">
              {t('problemSection.story3Author')}
            </div>
          </div>
          
          <div className="bg-white/3 border border-white/6 rounded-2xl p-6 lg:p-7">
            <p className="text-sm text-white/75 leading-relaxed italic mb-3">
              "{t('problemSection.story4')}"
            </p>
            <div className="text-xs text-white/30">
              {t('problemSection.story4Author')}
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid lg:grid-cols-3 gap-3.5">
          <div className="bg-white/4 border border-white/7 rounded-xl p-5 lg:p-6 text-center">
            <div className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-bold text-[#C8922A] mb-1">
              {t('problemSection.stat1Value')}
            </div>
            <div className="text-xs text-white/40 leading-relaxed">
              {t('problemSection.stat1Label')}
            </div>
          </div>
          
          <div className="bg-white/4 border border-white/7 rounded-xl p-5 lg:p-6 text-center">
            <div className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-bold text-[#C8922A] mb-1">
              {t('problemSection.stat2Value')}
            </div>
            <div className="text-xs text-white/40 leading-relaxed">
              {t('problemSection.stat2Label')}
            </div>
          </div>
          
          <div className="bg-white/4 border border-white/7 rounded-xl p-5 lg:p-6 text-center">
            <div className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-bold text-[#C8922A] mb-1">
              {t('problemSection.stat3Value')}
            </div>
            <div className="text-xs text-white/40 leading-relaxed">
              {t('problemSection.stat3Label')}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}