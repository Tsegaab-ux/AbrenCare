import { useTranslation } from 'react-i18next';

export default function BeforeAfter() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-[#F7F9FC] py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t('beforeAfter.badge')}
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3.5">
            {t('beforeAfter.titleLine1')}
            <br />
            {t('beforeAfter.titleLine2')}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 max-w-[880px] mx-auto">
          
          {/* Before Column */}
          <div className="bg-white border-[1.5px] border-[#F5C6CB] rounded-2xl p-9">
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C0392B] mb-5">
              ✕ {t('beforeAfter.withoutTitle')}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>{t('beforeAfter.before1')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>{t('beforeAfter.before2')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>{t('beforeAfter.before3')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>{t('beforeAfter.before4')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#555] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#FDEDEC] flex items-center justify-center text-[9px] text-[#C0392B] flex-shrink-0 mt-0.5">✕</div>
                <span>{t('beforeAfter.before5')}</span>
              </div>
            </div>
          </div>
          
          {/* After Column */}
          <div className="bg-[#1565C0] rounded-2xl p-9">
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-5">
              ✓ {t('beforeAfter.withTitle')}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>{t('beforeAfter.after1')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>{t('beforeAfter.after2')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>{t('beforeAfter.after3')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>{t('beforeAfter.after4')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                <span>{t('beforeAfter.after5')}</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}