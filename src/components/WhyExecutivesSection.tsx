import { useTranslation } from 'react-i18next';

export default function WhyExecutivesSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-[#101010] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.2)] text-[#EF9F9F] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t('whyExecutives.badge')}
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            {t('whyExecutives.titleLine1')}
            <br />
            {t('whyExecutives.titleLine2')}
          </h2>
          <p className="text-base text-white/40 max-w-[560px] leading-relaxed">
            {t('whyExecutives.description')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-4 mb-9">
          
          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.25)] rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">❤️</span>
            <div className="font-bold text-sm text-white mb-2">{t('whyExecutives.card1Title')}</div>
            <p className="text-sm text-white/50 leading-relaxed">
              <strong className="text-white/85">{t('whyExecutives.card1Strong')}</strong> {t('whyExecutives.card1Text')}
            </p>
          </div>
          
          
          <div className="bg-[rgba(192,57,43,0.05)] border border-[rgba(192,57,43,0.25)] rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">🩸</span>
            <div className="font-bold text-sm text-white mb-2">{t('whyExecutives.card2Title')}</div>
            <p className="text-sm text-white/50 leading-relaxed">
              {t('whyExecutives.card2Text')} <strong className="text-white/85">{t('whyExecutives.card2Strong')}</strong> {t('whyExecutives.card2Text2')}
            </p>
          </div>
          
          
          <div className="bg-white/3 border border-white/7 rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">🧠</span>
            <div className="font-bold text-sm text-white mb-2">{t('whyExecutives.card3Title')}</div>
            <p className="text-sm text-white/50 leading-relaxed">
              {t('whyExecutives.card3Text')} <strong className="text-white/85">{t('whyExecutives.card3Strong')}</strong> {t('whyExecutives.card3Text2')}
            </p>
          </div>
          
          
          <div className="bg-white/3 border border-white/7 rounded-2xl p-7">
            <span className="text-3xl mb-3.5 block">⏰</span>
            <div className="font-bold text-sm text-white mb-2">{t('whyExecutives.card4Title')}</div>
            <p className="text-sm text-white/50 leading-relaxed">
              {t('whyExecutives.card4Text')} <strong className="text-white/85">{t('whyExecutives.card4Strong')}</strong> {t('whyExecutives.card4Text2')}
            </p>
          </div>
        </div>
        
        
        <div className="bg-[rgba(200,146,42,0.06)] border border-[rgba(200,146,42,0.2)] rounded-2xl p-8 flex flex-col lg:flex-row gap-6">
          <div className="text-4xl flex-shrink-0 mt-1">📊</div>
          <div>
            <div className="font-['Playfair_Display',serif] text-xl lg:text-[22px] text-white mb-2.5 leading-tight">
              {t('whyExecutives.insightTitle')}
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              {t('whyExecutives.insightText')}
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}