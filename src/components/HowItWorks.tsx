const steps = [
  {
    number: "1",
    title: "Choose Specialty",
    time: "1 Minute",
  },
  {
    number: "2",
    title: "Select Doctor",
    time: "2 Minutes",
  },
  {
    number: "3",
    title: "Book Time",
    time: "Instant",
  },
  {
    number: "4",
    title: "Start Consultation",
    time: "Online",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-[5%]">
      <div className="text-center mb-16">
        <h2 className="font-serif text-5xl">
          How It Works
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-blue-700 flex items-center justify-center text-blue-700 font-bold text-xl mb-5">
              {step.number}
            </div>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
              {step.time}
            </span>

            <h3 className="font-semibold mt-4">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}