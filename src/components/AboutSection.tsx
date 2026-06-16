export default function AboutSection() {
  return (
    <section className="px-[5%] py-24">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="uppercase tracking-[3px] text-sm text-[#B8822E] mb-5 font-medium">
            About Nordic Abrencare
          </p>

          <h2 className="text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F]">
            Where Nordic excellence
            <br />
            meets Ethiopian compassion.
          </h2>

          <p className="text-[#4A4A4A] mt-7 leading-9 text-lg max-w-xl">
            We combine the highest Nordic healthcare standards
            with trust, warmth, and compassionate Ethiopian care —
            delivering a premium healthcare experience for every family.
          </p>

          <button className="mt-10 bg-[#C8922A] hover:bg-[#B07F22] transition text-white px-8 py-4 rounded-xl font-medium shadow-sm">
            Learn more →
          </button>

        </div>

        

      </div>

    </section>
  );
}