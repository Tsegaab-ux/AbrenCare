export default function FamilyHero() {
  return (
    <section className="min-h-screen bg-[#1B5E3B] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
          <span className="w-2 h-2 rounded-full bg-[#C8922A] animate-pulse" />
          Now Open — Founding Family Spots
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
          Your parent is
          <br />
          in Addis.
          <br />
          Who is watching
          <br />
          their health?
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-white/70">
          Not their neighbours. Not their relatives.
          Nobody trained. Nobody tracking their blood pressure,
          medication, or early warning signs.
        </p>

        <button className="mt-10 rounded-xl bg-[#C8922A] px-8 py-4 font-semibold text-black hover:scale-105 transition">
          Get Your Parent's Care Plan
        </button>

      </div>
    </section>
  );
}