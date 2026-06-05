export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow rounded-lg">
          "Great service and caring staff."
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          "Very professional healthcare support."
        </div>
      </div>
    </section>
  );
}