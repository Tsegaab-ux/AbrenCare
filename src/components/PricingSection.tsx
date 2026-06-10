export default function PricingSection() {
  return (
    <section className="py-24 bg-[#1B5E3B]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl p-10 text-center">

          <h2 className="text-5xl font-bold">
            Founding Membership
          </h2>

          <div className="mt-6 text-6xl font-bold text-[#1B5E3B]">
            $99
            <span className="text-xl text-gray-500">
              /month
            </span>
          </div>

          <p className="mt-6 text-gray-600">
            Limited founding member pricing.
          </p>

          <button className="mt-8 bg-[#1B5E3B] text-white px-8 py-4 rounded-xl font-semibold">
            Reserve My Spot
          </button>

        </div>

      </div>
    </section>
  );
}