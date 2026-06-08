export default function Hero() {
  return (
    <section className="text-center px-5 pt-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#C8922A]/20 bg-[#C8922A]/10 px-4 py-2 text-xs text-[#C8922A]">
        <div className="w-2 h-2 rounded-full bg-[#C8922A] animate-pulse" />
        Now open — founding members across Ethiopia and abroad
      </div>

      <h1 className="mt-8 text-6xl font-bold text-white">
        Nordic standards.
        <br />
        <span className="italic text-[#C8922A]">
          Ethiopian heart.
        </span>
      </h1>

      <p className="max-w-3xl mx-auto mt-6 text-lg text-white/60">
        Nordic Abrencare brings world-class health standards to Ethiopia.
      </p>
    </section>
  );
}