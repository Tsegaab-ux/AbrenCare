const doctors = [
  {
    initials: "EA",
    name: "Dr. Erik Andersson",
    specialty: "Internal Medicine",
    experience: "15+ Years",
  },
  {
    initials: "LS",
    name: "Dr. Lina Svensson",
    specialty: "Cardiology",
    experience: "12+ Years",
  },
  {
    initials: "MJ",
    name: "Dr. Maria Johansson",
    specialty: "Pediatrics",
    experience: "18+ Years",
  },
];

export default function Doctors() {
  return (
    <section className="bg-[#1A1A1A] py-24 px-[5%]">
      <div className="text-center mb-16">
        <span className="bg-white/5 border border-white/10 text-white/60 px-4 py-2 rounded-full text-xs uppercase">
          Nordic Specialists
        </span>

        <h2 className="font-serif text-white text-5xl mt-6">
          Meet Our Doctors
        </h2>

        <p className="text-white/50 mt-4">
          Experienced healthcare professionals from Scandinavia.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
          >
            <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold mb-5">
              {doctor.initials}
            </div>

            <h3 className="text-white font-semibold text-lg">
              {doctor.name}
            </h3>

            <p className="text-white/40 text-sm mt-1">
              {doctor.specialty}
            </p>

            <div className="inline-block mt-4 px-3 py-1 rounded-full bg-blue-700/20 text-blue-300 text-xs">
              {doctor.experience}
            </div>

            <div className="text-amber-400 mt-4">
              ★★★★★
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}