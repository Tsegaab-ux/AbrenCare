export default function ServicesSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          Two Services. One Complete Solution.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="rounded-3xl bg-[#1B5E3B] p-8">
            <h3 className="text-3xl font-bold text-white">
              Home Care Visits
            </h3>

            <ul className="mt-6 space-y-4 text-white/80">
              <li>✓ GPS Verified Visits</li>
              <li>✓ Vital Signs Monitoring</li>
              <li>✓ Blood Samples</li>
              <li>✓ Medication Management</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-[#2B1800] p-8">
            <h3 className="text-3xl font-bold text-white">
              Doctor Consultation
            </h3>

            <ul className="mt-6 space-y-4 text-white/80">
              <li>✓ Licensed Ethiopian Doctors</li>
              <li>✓ Video Consultation</li>
              <li>✓ Join From Abroad</li>
              <li>✓ Same-Day Availability</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}