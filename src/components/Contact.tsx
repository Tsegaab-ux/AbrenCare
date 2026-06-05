export default function Contact() {
  return (
    <section className="py-20 px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <form className="flex flex-col gap-4">
        <input className="border p-3 rounded" placeholder="Name" />
        <input className="border p-3 rounded" placeholder="Email" />
        <textarea className="border p-3 rounded" placeholder="Message"></textarea>

        <button className="bg-blue-600 text-white py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}