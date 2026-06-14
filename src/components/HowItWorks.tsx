const steps = [
  {
    number: "1",
    title: "Open the app",
    time: "2 minutes",
    description: "Choose your specialty. See available doctors. Pick a time that works for you."
  },
  {
    number: "2",
    title: "Pay in ETB",
    time: "Same day",
    description: "Pay securely by Telebirr, CBE Birr, or bank card. No cash. No travel."
  },
  {
    number: "3",
    title: "Meet your doctor",
    time: "At your time",
    description: "Video, audio, or chat — in Amharic. From anywhere you are. No waiting room."
  },
  {
    number: "4",
    title: "Get your notes",
    time: "After the call",
    description: "Diagnosis, prescription, and follow-up plan sent to your phone within minutes."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F7F9FC] py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[11px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full mb-3.5">
            How it works
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3.5">
            From opening the app
            <br />
            to seeing your doctor — in minutes.
          </h2>
        </div>
        
        <div className="relative grid lg:grid-cols-4 gap-0 mt-11">
          {/* Connecting line */}
          <div className="absolute top-8 left-[12%] right-[12%] h-[1.5px] bg-gradient-to-r from-[#1565C0] to-[rgba(21,101,192,0.15)] z-0 hidden lg:block" />
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative z-10 text-center px-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-white border-2 border-[#1565C0] flex items-center justify-center font-['Playfair_Display',serif] text-xl font-bold text-[#1565C0] mb-4 shadow-[0_4px_16px_rgba(21,101,192,0.12)]">
                {step.number}
              </div>
              
              <div className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2">
                {step.time}
              </div>
              
              <h3 className="font-semibold text-sm text-[#0F0F0F] mb-1.5">
                {step.title}
              </h3>
              
              <p className="text-[13px] text-[#5C6B7A] leading-relaxed max-w-[180px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}