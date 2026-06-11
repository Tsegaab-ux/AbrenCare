export default function BeforeAfter() {
  return (
    <section className="bg-slate-50 py-24 px-[5%]">
      <div className="text-center mb-16">
        <h2 className="font-serif text-5xl">
          Healthcare Reimagined
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-red-200 rounded-3xl p-10">
          <p className="uppercase text-red-600 text-xs font-semibold tracking-widest mb-8">
            Before
          </p>

          <div className="space-y-5 text-slate-600">
            <div>✕ Long waiting times</div>
            <div>✕ Expensive travel abroad</div>
            <div>✕ Limited specialist access</div>
            <div>✕ Fragmented medical records</div>
          </div>
        </div>

        <div className="bg-blue-700 rounded-3xl p-10">
          <p className="uppercase text-white/50 text-xs font-semibold tracking-widest mb-8">
            After
          </p>

          <div className="space-y-5 text-white">
            <div>✓ Fast online consultations</div>
            <div>✓ Nordic medical expertise</div>
            <div>✓ Secure digital healthcare</div>
            <div>✓ Follow-up support included</div>
          </div>
        </div>
      </div>
    </section>
  );
}