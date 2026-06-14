export default function BenefitsSection() {
  const benefits = [
    {
      icon: "❤️",
      title: "Continuous vital monitoring",
      description: "Wearable device tracks your heart rate, blood pressure, and oxygen 24 hours a day. Your physician receives alerts the moment something changes — before you feel a symptom.",
      tag: "Daily · Always on",
      featured: true
    },
    {
      icon: "🩸",
      title: "Quarterly full blood panel",
      description: "Complete metabolic profile every three months — kidney, liver, glucose, HbA1c, full lipid panel, thyroid, inflammation markers, vitamin deficiencies. A complete picture of what is happening inside.",
      tag: "Every 3 months",
      featured: false
    },
    {
      icon: "🫀",
      title: "Cardiac screening",
      description: "ECG, echocardiogram, and stress test every year. We are looking for what you cannot feel — artery narrowing, irregular rhythm, structural changes that precede a heart attack by months or years.",
      tag: "Annually",
      featured: false
    },
    {
      icon: "🧬",
      title: "Full body imaging",
      description: "Chest X-ray, abdominal ultrasound, and targeted MRI annually. We find what blood tests cannot — tumours at stage 1, organ changes, vascular abnormalities. Caught early. Treated successfully.",
      tag: "Annually",
      featured: false
    },
    {
      icon: "👨‍⚕️",
      title: "Your dedicated physician",
      description: "One doctor. Knows your complete history, your risks, your targets. Calls you with results — you never chase. Available same day when you need them. The physician every leader deserves and never had time to find.",
      tag: "Always available",
      featured: true
    },
    {
      icon: "📊",
      title: "Monthly health intelligence report",
      description: "Every vital trend, blood result, and lifestyle risk score in one clean monthly document. Written for a busy person. Read in five minutes. One page. One clear picture of where you stand.",
      tag: "Monthly",
      featured: false
    }
  ];

  return (
    <section className="bg-[#080808] py-22 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[rgba(200,146,42,0.08)] border border-[rgba(200,146,42,0.2)] text-[#C8922A] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            What is included
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white mb-3.5">
            Your complete health
            <br />
            command centre.
          </h2>
          <p className="text-base text-white/40 max-w-[560px] mx-auto leading-relaxed">
            Six components. We run all of them. You just show up for the tests — we come to you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4.5 mb-7">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white/3 border rounded-2xl p-7 transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5 relative overflow-hidden ${
                benefit.featured 
                  ? 'border-[rgba(200,146,42,0.25)] bg-[rgba(200,146,42,0.04)]' 
                  : 'border-white/7'
              }`}
            >
              {/* Top gradient bar on hover */}
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
        
        {/* Emergency Response Box */}
        <div className="bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.2)] rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row gap-6">
          <div className="text-3xl lg:text-4xl flex-shrink-0 mt-1">🚨</div>
          <div>
            <div className="font-['Playfair_Display',serif] text-xl lg:text-[20px] text-white mb-2 leading-tight">
              Emergency response — included in every plan
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              If monitoring detects a critical event — or you experience any emergency — our medical coordinator activates immediately. We contact your family, coordinate hospital admission, and communicate with your team. You do not manage a medical crisis. We do. <strong className="text-white/85">Response: under 15 minutes, anywhere in Addis Ababa.</strong>
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}