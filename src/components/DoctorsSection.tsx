import { useTranslation } from 'react-i18next';

export default function Doctors() {
  const { t } = useTranslation();
  
  const doctors = [
    {
      initials: "HB",
      name: t('doctors.doctor1Name'),
      specialty: t('doctors.doctor1Specialty'),
      experience: t('doctors.doctor1Experience'),
      languages: ["Amharic", "English"],
      tags: [t('doctors.tagAmharic'), t('doctors.tagLicensed')]
    },
    {
      initials: "SA",
      name: t('doctors.doctor2Name'),
      specialty: t('doctors.doctor2Specialty'),
      experience: t('doctors.doctor2Experience'),
      languages: ["Amharic", "English"],
      tags: [t('doctors.tagAmharic'), t('doctors.tagChildrenSpecialist'), t('doctors.tagLicensed')],
      bgColor: "#7B1FA2"
    },
    {
      initials: "MT",
      name: t('doctors.doctor3Name'),
      specialty: t('doctors.doctor3Specialty'),
      experience: t('doctors.doctor3Experience'),
      languages: ["Amharic", "English"],
      tags: [t('doctors.tagAmharic'), t('doctors.tagHeartSpecialist'), t('doctors.tagLicensed')],
      bgColor: "#00695C"
    }
  ];

  return (
    <section className="bg-[#1A1A1A] py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-white/8 border border-white/8 text-white/50 text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            {t('doctors.badge')}
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            {t('doctors.titleLine1')}
            <br />
            {t('doctors.titleLine2')}
          </h2>
          
          <p className="text-base text-white/40 max-w-[560px] mx-auto leading-relaxed">
            {t('doctors.description')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4.5">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white/4 border border-white/7 rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:bg-white/7 hover:-translate-y-0.5"
            >
              <div 
                className="w-13 h-13 rounded-full flex items-center justify-center font-['Playfair_Display',serif] text-lg font-bold text-white mb-3.5"
                style={{ 
                  backgroundColor: doctor.bgColor || "#1565C0"
                }}
              >
                {doctor.initials}
              </div>
              
              <h3 className="font-semibold text-sm text-white mb-1">
                {doctor.name}
              </h3>
              
              <p className="text-xs text-white/40 mb-2.5">
                {doctor.specialty}
              </p>
              
              <div className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[rgba(21,101,192,0.2)] text-[#90CAF9] mb-2.5">
                {doctor.experience}
              </div>
              
              <div className="text-[#C8922A] text-xs tracking-[1px] mb-2">
                ★★★★★
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {doctor.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-lg bg-white/6 text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}