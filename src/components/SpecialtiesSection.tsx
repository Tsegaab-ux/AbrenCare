const specialties = [
  {
    icon: "❤️",
    title: "Cardiology",
    desc: "Heart health consultations and follow-up care.",
  },
  {
    icon: "🩺",
    title: "Internal Medicine",
    desc: "Comprehensive adult healthcare services.",
  },
  {
    icon: "👶",
    title: "Pediatrics",
    desc: "Expert healthcare for children and adolescents.",
  },
  {
    icon: "🧠",
    title: "Neurology",
    desc: "Brain, nervous system and neurological care.",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-white py-24 px-[5%]">
      <div className="text-center mb-16">
        <span className="px-4 py-2 rounded-full bg-amber-50 text-[#C8922A] text-xs font-semibold uppercase">
          Specialties
        </span>

        <h2 className="font-serif text-5xl mt-6">
          Expert Medical Services
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {specialties.map((item) => (
          <div
            key={item.title}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center hover:border-blue-700 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>

            <h3 className="font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}