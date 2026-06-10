export default function BenefitsSection() {
  const benefits = [
    "Annual Health Assessment",
    "Cardiovascular Screening",
    "Cancer Risk Screening",
    "Nutrition Planning",
    "Mental Wellness Review",
    "Lifestyle Coaching"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Membership Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-3xl border p-8 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">
                {benefit}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}