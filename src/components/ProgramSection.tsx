export default function ProgramSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-white text-5xl font-bold">
          What Is Included?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-[#1B5E3B] rounded-3xl p-8">
            <h3 className="text-white text-3xl font-bold">
              Preventive Care
            </h3>

            <ul className="mt-6 space-y-3 text-white/80">
              <li>✓ Executive Physical Exam</li>
              <li>✓ Lab Testing</li>
              <li>✓ Imaging Coordination</li>
              <li>✓ Health Risk Analysis</li>
            </ul>
          </div>

          <div className="bg-[#2B1800] rounded-3xl p-8">
            <h3 className="text-white text-3xl font-bold">
              Concierge Care
            </h3>

            <ul className="mt-6 space-y-3 text-white/80">
              <li>✓ Dedicated Coordinator</li>
              <li>✓ Fast Specialist Access</li>
              <li>✓ Travel Health Support</li>
              <li>✓ Priority Appointments</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}