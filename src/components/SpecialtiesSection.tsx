const specialties = [
  {
    icon: "🩺",
    title: "General practice",
    desc: "Fever, infections, chronic conditions, prescriptions, check-ups"
  },
  {
    icon: "❤️",
    title: "Cardiology",
    desc: "Heart health, blood pressure, chest pain, hypertension management"
  },
  {
    icon: "🧒",
    title: "Paediatrics",
    desc: "Children's health, fever, growth, vaccinations, developmental concerns"
  },
  {
    icon: "🩸",
    title: "Diabetes & endocrinology",
    desc: "Diabetes management, blood sugar, thyroid, hormonal conditions"
  },
  {
    icon: "🧠",
    title: "Neurology",
    desc: "Headaches, migraines, dizziness, nerve pain, sleep disorders"
  },
  {
    icon: "🫁",
    title: "Respiratory",
    desc: "Asthma, breathing difficulties, chest infections, allergies"
  },
  {
    icon: "🧬",
    title: "Dermatology",
    desc: "Skin conditions, rashes, infections, hair loss, acne"
  },
  {
    icon: "🧘",
    title: "Mental health",
    desc: "Anxiety, depression, stress, counselling — private and confidential"
  }
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-white py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            Specialties available
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3.5">
            Whatever you need.
            <br />
            We have a doctor for it.
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