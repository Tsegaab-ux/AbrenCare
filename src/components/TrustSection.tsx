const trustItems: string[] = [
  "Confidential",
  "Secure & trusted",
  "Global standards",
  "Human & warm",
  "Available 24/7",
];

export default function TrustSection() {
  return (
    <section className="px-[5%] py-12">
      <div className="grid md:grid-cols-5 gap-6 bg-white rounded-3xl border border-[#E8E2D9] p-8">

        {trustItems.map((item, index) => (
          <div key={index}>

            <h3 className="font-semibold text-[#222222]">
              {item}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Premium healthcare support
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}