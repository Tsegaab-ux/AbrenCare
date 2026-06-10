export default function ExecutiveHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1B5E3B] min-h-screen flex items-center">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C8922A20,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8922A]/30 bg-[#C8922A]/10 px-4 py-2 text-sm text-[#C8922A]">
            Executive Health Membership
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
            Your health is
            <span className="text-[#C8922A]"> your greatest asset.</span>
          </h1>

          <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-2xl">
            Designed for founders, executives, diplomats, and business leaders.
            Comprehensive health monitoring, priority doctor access, annual
            screenings, and concierge medical support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#C8922A] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Apply for Membership
            </button>

            <button className="border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
          <h3 className="text-white text-2xl font-bold">
            Executive Benefits
          </h3>

          <ul className="mt-8 space-y-4">
            {[
              "Annual Comprehensive Screening",
              "Dedicated Health Coordinator",
              "Priority Specialist Referrals",
              "Executive Health Dashboard",
              "Same-Day Doctor Access",
              "Preventive Health Monitoring"
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="w-6 h-6 rounded-full bg-[#C8922A]/20 flex items-center justify-center">
                  <span className="text-[#C8922A]">✓</span>
                </div>

                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}