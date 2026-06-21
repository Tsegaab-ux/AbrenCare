import { useTranslation } from 'react-i18next';

export default function BenefitsSection() {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: "❤️",
      title: t('benefits.card1Title'),
      description: t('benefits.card1Desc'),
      tag: t('benefits.card1Tag'),
      featured: true
    },
    {
      icon: "🩸",
      title: t('benefits.card2Title'),
      description: t('benefits.card2Desc'),
      tag: t('benefits.card2Tag'),
      featured: false
    },
    {
      icon: "🫀",
      title: t('benefits.card3Title'),
      description: t('benefits.card3Desc'),
      tag: t('benefits.card3Tag'),
      featured: false
    },
    {
      icon: "🧬",
      title: t('benefits.card4Title'),
      description: t('benefits.card4Desc'),
      tag: t('benefits.card4Tag'),
      featured: false
    },
    {
      icon: "👨‍⚕️",
      title: t('benefits.card5Title'),
      description: t('benefits.card5Desc'),
      tag: t('benefits.card5Tag'),
      featured: true
    },
    {
      icon: "📊",
      title: t('benefits.card6Title'),
      description: t('benefits.card6Desc'),
      tag: t('benefits.card6Tag'),
      featured: false
    }
  ];

  return (
    <section className="bg-[#080808] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t('benefits.badge')}
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            {t('benefits.titleLine1')}
            <br />
            {t('benefits.titleLine2')}
          </h2>
          <p className="text-base text-white/40 max-w-[560px] mx-auto leading-relaxed">
            {t('benefits.description')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4.5 mb-7">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white/3 border rounded-2xl p-7 transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5 relative overflow-hidden group ${
                benefit.featured 
                  ? 'border-[rgba(200,146,42,0.25)] bg-[rgba(200,146,42,0.04)]' 
                  : 'border-white/7'
              }`}
            >
              
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8922A] to-transparent transition-opacity duration-300 ${
                benefit.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
              
              <span className="text-3xl mb-3.5 block">{benefit.icon}</span>
              <h3 className="font-['Playfair_Display',serif] text-[17px] font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-[13px] text-white/45 leading-relaxed mb-3.5">
                {benefit.description}
              </p>
              <div className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[rgba(200,146,42,0.12)] text-[#C8922A] border border-[rgba(200,146,42,0.15)]">
                {benefit.tag}
              </div>
            </div>
          ))}
        </div>
        
        
        <div className="bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.2)] rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row gap-6">
          <div className="text-3xl lg:text-4xl flex-shrink-0 mt-1">🚨</div>
          <div>
            <div className="font-['Playfair_Display',serif] text-xl lg:text-[20px] text-white mb-2 leading-tight">
              {t('benefits.emergencyTitle')}
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              {t('benefits.emergencyDesc')} <strong className="text-white/85">{t('benefits.emergencyStrong')}</strong>
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}