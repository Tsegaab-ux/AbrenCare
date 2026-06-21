import { useTranslation } from 'react-i18next';

export default function PricingSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-gradient-to-br from-[#0D0900] via-[#080808] to-[#0A0800] py-22 px-6 lg:px-8 border-t border-[rgba(200,146,42,0.1)] border-b border-[rgba(200,146,42,0.1)]">
      <div className="max-w-[640px] mx-auto text-center">
        
        <div className="inline-block bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
          {t('pricing.badge')}
        </div>
        
        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3">
          {t('pricing.titleLine1')}
          <br />
          {t('pricing.titleLine2')}
        </h2>
        
        <p className="text-[17px] text-white/40 mb-9 leading-relaxed">
          {t('pricing.subtitle')}
        </p>
        
        
        <div className="bg-[rgba(200,146,42,0.06)] border border-[rgba(200,146,42,0.15)] rounded-2xl p-7 lg:p-8 text-left mb-7">
          <div className="flex gap-3 text-white/70 text-sm mb-3 leading-relaxed">
            <div className="w-5.5 h-5.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#080808] flex-shrink-0 mt-0.5">✓</div>
            <div>{t('pricing.guarantee1')} <strong className="text-white">{t('pricing.guarantee1Strong')}</strong></div>
          </div>
          
          <div className="flex gap-3 text-white/70 text-sm mb-3 leading-relaxed">
            <div className="w-5.5 h-5.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#080808] flex-shrink-0 mt-0.5">✓</div>
            <div>{t('pricing.guarantee2')} <strong className="text-white">{t('pricing.guarantee2Strong')}</strong></div>
          </div>
          
          <div className="flex gap-3 text-white/70 text-sm mb-3 leading-relaxed">
            <div className="w-5.5 h-5.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#080808] flex-shrink-0 mt-0.5">✓</div>
            <div>{t('pricing.guarantee3')} <strong className="text-white">{t('pricing.guarantee3Strong')}</strong></div>
          </div>
          
          <div className="flex gap-3 text-white/70 text-sm leading-relaxed">
            <div className="w-5.5 h-5.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#080808] flex-shrink-0 mt-0.5">✓</div>
            <div><strong className="text-white">{t('pricing.guarantee4Strong')}</strong> {t('pricing.guarantee4')}</div>
          </div>
        </div>
        
        
        <div className="bg-[rgba(200,146,42,0.04)] border border-[rgba(200,146,42,0.15)] rounded-2xl p-8 lg:p-10 text-center">
          <div className="inline-block bg-[rgba(200,146,42,0.12)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] text-[10px] font-semibold uppercase px-3 py-1 rounded-full mb-4">
            {t('pricing.pricingBadge')}
          </div>
          
          <h3 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-bold text-[#C8922A] mb-2">
            $99
            <span className="text-xl text-white/40 font-['DM_Sans']">/{t('pricing.perMonth')}</span>
          </h3>
          
          <p className="text-sm text-white/45 mb-6">
            {t('pricing.pricingNote')}
          </p>
          
          <div className="space-y-3">
            <button className="w-full bg-[#C8922A] text-[#080808] py-4 rounded-xl font-bold text-base hover:bg-[#F0C96A] hover:-translate-y-0.5 transition-all">
              {t('pricing.cta')}
            </button>
            
            <p className="text-[11px] text-white/25 flex items-center justify-center gap-1.5">
              🔒 {t('pricing.ctaNote')}
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.1)] flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <div className="w-3.5 h-3.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[7px] text-[#080808]">✓</div>
              {t('pricing.feature1')}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <div className="w-3.5 h-3.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[7px] text-[#080808]">✓</div>
              {t('pricing.feature2')}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <div className="w-3.5 h-3.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[7px] text-[#080808]">✓</div>
              {t('pricing.feature3')}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}