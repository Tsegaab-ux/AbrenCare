import { useTranslation } from 'react-i18next';

export default function ProgramSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-[#080808] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t('program.badge')}
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            {t('program.titleLine1')}
            <br />
            {t('program.titleLine2')}
          </h2>
          <p className="text-base text-white/40 max-w-[560px] mx-auto leading-relaxed">
            {t('program.description')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          
          
          <div className="bg-white/3 border border-white/7 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5">
            <div className="bg-gradient-to-br from-[#0D3B25] to-[#1B5E3B] p-8 lg:p-9">
              <span className="text-3xl mb-4 block">🛡️</span>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                {t('program.preventiveTitle')}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                {t('program.preventiveDesc')}
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  {t('program.preventiveItem1')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  {t('program.preventiveItem2')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  {t('program.preventiveItem3')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  {t('program.preventiveItem4')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1B5E3B] flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">✓</div>
                  {t('program.preventiveItem5')}
                </li>
              </ul>
            </div>
            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl flex-shrink-0">📊</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{t('program.preventiveReportTitle')}</div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {t('program.preventiveReportDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="bg-white/3 border border-white/7 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5">
            <div className="bg-gradient-to-br from-[#1a0f00] to-[#3D2408] p-8 lg:p-9">
              <span className="text-3xl mb-4 block">👨‍⚕️</span>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2.5">
                {t('program.conciergeTitle')}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                {t('program.conciergeDesc')}
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  {t('program.conciergeItem1')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  {t('program.conciergeItem2')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  {t('program.conciergeItem3')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  {t('program.conciergeItem4')}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/75">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C8922A] flex items-center justify-center text-[9px] text-[#0F0F0F] flex-shrink-0 mt-0.5">✓</div>
                  {t('program.conciergeItem5')}
                </li>
              </ul>
            </div>
            <div className="bg-white/4 border-t border-white/7 p-6">
              <div className="bg-white/6 rounded-xl p-4 flex gap-3">
                <div className="text-xl flex-shrink-0">🚨</div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{t('program.conciergeEmergencyTitle')}</div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {t('program.conciergeEmergencyDesc')} <strong className="text-white/80">{t('program.conciergeEmergencyStrong')}</strong>
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