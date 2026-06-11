export default function ProblemSection() {
  return (
    <section className="bg-[#141414] py-24 px-[5%]">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-xs uppercase font-semibold">
          Challenges
        </span>

        <h2 className="text-white font-serif text-5xl mt-6">
          Accessing Specialists Shouldn't Be Difficult
        </h2>

        <p className="text-white/50 mt-5">
          Many patients face delays, travel costs, and limited specialist
          availability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-white/70 italic">
            “I had to wait months for an appointment.”
          </p>
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-8">
          <p className="text-white/70 italic">
            “Traveling abroad for healthcare was too expensive.”
          </p>
        </div>
      </div>
    </section>
  );
}