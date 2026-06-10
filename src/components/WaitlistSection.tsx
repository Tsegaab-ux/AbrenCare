export default function WaitlistSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Join The Waitlist
        </h2>

        <div className="mt-10 space-y-4">

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Your Name"
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Email"
          />

          <button className="w-full rounded-xl bg-[#1B5E3B] p-4 text-white font-semibold">
            Reserve My Spot
          </button>

        </div>

      </div>
    </section>
  );
}