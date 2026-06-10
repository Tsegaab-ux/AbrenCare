export default function TestimonialSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold">
          Real Families. Real Results.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="rounded-3xl border p-8">
            <p>
              "Three days after joining, I watched my mother's
              consultation from Stockholm."
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <p>
              "The caregiver caught my father's blood pressure issue."
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <p>
              "I sleep better now than I have in years."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}