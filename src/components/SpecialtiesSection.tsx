import { useTranslation } from 'react-i18next';

export default function Specialties() {
  const { t } = useTranslation();
  
  const specialties = [
    {
      icon: "🩺",
      title: t('specialties.generalPractice'),
      desc: t('specialties.generalPracticeDesc')
    },
    {
      icon: "❤️",
      title: t('specialties.cardiology'),
      desc: t('specialties.cardiologyDesc')
    },
    {
      icon: "🧒",
      title: t('specialties.paediatrics'),
      desc: t('specialties.paediatricsDesc')
    },
    {
      icon: "🩸",
      title: t('specialties.diabetes'),
      desc: t('specialties.diabetesDesc')
    },
    {
      icon: "🧠",
      title: t('specialties.neurology'),
      desc: t('specialties.neurologyDesc')
    },
    {
      icon: "🫁",
      title: t('specialties.respiratory'),
      desc: t('specialties.respiratoryDesc')
    },
    {
      icon: "🧬",
      title: t('specialties.dermatology'),
      desc: t('specialties.dermatologyDesc')
    },
    {
      icon: "🧘",
      title: t('specialties.mentalHealth'),
      desc: t('specialties.mentalHealthDesc')
    }
  ];

  return (
    <section id="specialties" className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t('specialties.badge')}
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3.5">
            {t('specialties.titleLine1')}
            <br />
            {t('specialties.titleLine2')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="bg-[#F7F9FC] border border-[#DDE3EA] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#1565C0] hover:bg-[#E3F2FD] hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="text-4xl mb-3 block">{item.icon}</div>
              
              <h3 className="font-semibold text-sm text-[#0F0F0F] mb-1.5">
                {item.title}
              </h3>
              
              <p className="text-xs text-[#5C6B7A] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}