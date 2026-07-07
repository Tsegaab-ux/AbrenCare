export default function BookingForm() {
  return (
    <section className="bg-white py-24 px-[5%]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="font-serif text-5xl">
            Request Consultation
          </h2>
        </div>

        <form className="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              placeholder="First Name"
              className="border rounded-xl px-4 py-3"
            />

            <input
              placeholder="Last Name"
              className="border rounded-xl px-4 py-3"
            />
          </div>

          <input
            placeholder="Email"
            className="border rounded-xl px-4 py-3 w-full mb-4"
          />

          <input
            placeholder="Phone Number"
            className="border rounded-xl px-4 py-3 w-full mb-4"
          />

          <select className="border rounded-xl px-4 py-3 w-full mb-4">
            <option>Select Specialty</option>
          </select>

          <button className="w-full py-4 rounded-xl bg-blue-700 text-white font-bold">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}