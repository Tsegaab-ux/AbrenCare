export default function Newsletter() {
  return (
    <section className="px-[5%] py-12">

      <div className="bg-[#0F2236] rounded-3xl px-10 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-3xl text-white">
            Stay informed.
          </h2>

          <p className="text-gray-300 mt-2">
            Get health tips, service updates and peace of mind.
          </p>
        </div>

        <div className="flex gap-4">

          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 rounded-xl w-80 outline-none"
          />

          <button className="bg-[#C8922A] text-white px-6 rounded-xl">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}