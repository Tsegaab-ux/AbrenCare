export default function ComparisonSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          The Difference Abrencare Makes
        </h2>

        <div className="mt-12 overflow-hidden rounded-3xl border">

          <div className="grid grid-cols-3 bg-gray-100 p-6 font-semibold">
            <div>Category</div>
            <div>Without Abrencare</div>
            <div>With Abrencare</div>
          </div>

          <div className="grid grid-cols-3 p-6 border-t">
            <div>Health Monitoring</div>
            <div>Occasional checkups</div>
            <div>Continuous tracking</div>
          </div>

          <div className="grid grid-cols-3 p-6 border-t">
            <div>Medication</div>
            <div>Hope they take it</div>
            <div>Verified every visit</div>
          </div>

        </div>

      </div>
    </section>
  );
}