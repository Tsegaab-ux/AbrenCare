import { useTranslation } from 'react-i18next';

export default function ExecutiveHero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-[rgba(200,146,42,0.06)] via-transparent to-transparent pointer-events-none" />
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8922A] to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="fi v">
            <div className="inline-flex items-center gap-2 bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922A] animate-pulse" />
              {t('executiveHero.badge')}
            </div>
            
            <h1 className="font-['Playfair_Display',serif] text-4xl lg:text-[66px] font-bold leading-[1.08] tracking-[-2px] text-white mb-2.5">
              {t('executiveHero.titleLine1')}
              <br />
              {t('executiveHero.titleLine2')}
              <br />
              <em className="italic text-[#C8922A] not-italic">{t('executiveHero.titleAccent')}</em>
            </h1>
            
            {/* Stat Box */}
            <div className="inline-flex items-center gap-2.5 bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.2)] rounded-xl px-4 py-2.5 mb-6">
              <span className="text-lg">⚠️</span>
              <div className="text-[13px] text-[#EF9F9F] leading-relaxed">
                <strong className="text-white text-sm block">{t('executiveHero.statTitle')}</strong>
                {t('executiveHero.statDescription')}
              </div>
            </div>
            
            <p className="text-lg text-white/45 leading-relaxed max-w-[500px] mb-3">
              {t('executiveHero.description')}
            </p>
            
            <p className="text-sm text-white/35 mb-9 max-w-[460px] leading-relaxed">
              {t('executiveHero.subDescription')}
            </p>
            
            <div className="flex flex-col gap-2.5 max-w-[400px] mb-9">
              <button className="bg-[#C8922A] text-black px-7 py-4 rounded-xl font-bold text-base hover:bg-[#F0C96A] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(200,146,42,0.35)] transition-all">
                {t('executiveHero.cta')}
              </button>
              
              <button className="bg-transparent text-white/50 px-7 py-3.5 rounded-xl font-medium text-sm border border-white/12 hover:text-white hover:border-white/25 transition-all">
                {t('executiveHero.secondaryCta')}
              </button>
              
              <div className="text-center text-[11px] text-white/20 flex items-center justify-center gap-1.5">
                🔒 {t('executiveHero.note')}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5 text-sm text-white/35">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                {t('executiveHero.feature1')}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/35">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                {t('executiveHero.feature2')}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/35">
                <div className="w-4 h-4 rounded-full bg-[#C8922A] flex items-center justify-center text-[8px] text-black flex-shrink-0">✓</div>
                {t('executiveHero.feature3')}
              </div>
            </div>
          </div>
          
          {/* Right Column - Live Monitor Dashboard */}
          <div className="fi v">
            <div className="bg-[#161616] border border-white/12 rounded-2xl p-6 relative overflow-hidden">
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8922A] to-transparent" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <div className="text-[11px] text-white/35 uppercase tracking-[0.1em]">{t('executiveHero.dashboardHeader')}</div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#4CAF50]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  {t('executiveHero.monitoringStatus')}
                </div>
              </div>
              
              {/* Alert Banner */}
              <div className="bg-[rgba(192,57,43,0.1)] border border-[rgba(192,57,43,0.25)] rounded-xl p-3.5 flex gap-3 items-start mb-4">
                <div className="text-lg flex-shrink-0">🚨</div>
                <div>
                  <div className="text-xs font-semibold text-[#EF9F9F] mb-0.5">{t('executiveHero.alertTitle')}</div>
                  <div className="text-[11px] text-white/40 leading-relaxed">{t('executiveHero.alertDescription')}</div>
                </div>
              </div>
              
              {/* Vital Signs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* BP - Alert */}
                <div className="bg-[rgba(192,57,43,0.06)] border border-[rgba(192,57,43,0.3)] rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">{t('executiveHero.bpLabel')}</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(192,57,43,0.2)] text-[#EF9F9F]">{t('executiveHero.bpStatus')}</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    158<span className="text-[11px] text-white/30 font-['DM_Sans']">/96 mmHg</span>
                  </div>
                  <div className="text-[10px] text-white/25">{t('executiveHero.bpTrend')}</div>
                </div>
                
                {/* Heart Rate - Warning */}
                <div className="bg-[rgba(255,152,0,0.04)] border border-[rgba(255,152,0,0.2)] rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">{t('executiveHero.hrLabel')}</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(255,152,0,0.15)] text-[#FFB74D]">{t('executiveHero.hrStatus')}</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    91<span className="text-[11px] text-white/30 font-['DM_Sans']"> bpm</span>
                  </div>
                  <div className="text-[10px] text-white/25">{t('executiveHero.hrTrend')}</div>
                </div>
                
                {/* Oxygen - Normal */}
                <div className="bg-white/4 border border-white/7 rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">{t('executiveHero.oxygenLabel')}</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(76,175,80,0.15)] text-[#81C784]">{t('executiveHero.oxygenStatus')}</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    97<span className="text-[11px] text-white/30 font-['DM_Sans']"> %</span>
                  </div>
                  <div className="text-[10px] text-white/25">{t('executiveHero.oxygenTrend')}</div>
                </div>
                
                {/* Glucose - Warning */}
                <div className="bg-[rgba(255,152,0,0.04)] border border-[rgba(255,152,0,0.2)] rounded-xl p-3.5">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.07em]">{t('executiveHero.glucoseLabel')}</div>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[rgba(255,152,0,0.15)] text-[#FFB74D]">{t('executiveHero.glucoseStatus')}</span>
                  </div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-none mb-0.5">
                    7.4<span className="text-[11px] text-white/30 font-['DM_Sans']"> mmol/L</span>
                  </div>
                  <div className="text-[10px] text-white/25">{t('executiveHero.glucoseTrend')}</div>
                </div>
              </div>
              
              {/* Blood Panel Row */}
              <div className="bg-white/3 rounded-xl p-3">
                <div className="text-[10px] text-white/30 uppercase tracking-[0.07em] mb-2">{t('executiveHero.panelLabel')}</div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    {t('executiveHero.panelKidney')}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                    {t('executiveHero.panelLiver')}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9800]" />
                    {t('executiveHero.panelLDL')}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F44336]" />
                    {t('executiveHero.panelHbA1c')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}