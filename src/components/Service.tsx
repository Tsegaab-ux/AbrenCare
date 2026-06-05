export default function Services() {
  return (
    <section className="py-20 bg-gray-50 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow rounded-lg">Home Care</div>
        <div className="p-6 bg-white shadow rounded-lg">Nursing Support</div>
        <div className="p-6 bg-white shadow rounded-lg">Medical Assistance</div>
      </div>
    </section>
  );
}