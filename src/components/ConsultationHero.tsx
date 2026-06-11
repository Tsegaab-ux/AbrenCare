import BookingCard from "../components/BookingCard";

export default function ConsultationHero() {
  return (
    <section className="bg-blue-700 min-h-screen px-[5%] py-20 grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F0C96A] animate-pulse"></span>
          Digital Consultation Available
        </div>

        <h1 className="font-serif text-white text-5xl lg:text-7xl font-bold leading-tight">
          Nordic Healthcare
          <br />
          For <span className="text-[#F0C96A]">Ethiopia</span>
        </h1>

        <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
          Speak with experienced specialists through secure online consultations.
        </p>

        <div className="mt-10 max-w-md">
          <button className="w-full py-4 rounded-xl bg-[#C8922A] text-black font-bold hover:bg-[#F0C96A] transition">
            Book Your Consultation
          </button>

          <p className="text-center text-white/40 text-sm mt-3">
            Secure • Private • Professional
          </p>
        </div>

        <div className="flex flex-wrap gap-5 mt-8">
          <div className="text-white/60 text-sm">✓ Nordic Specialists</div>
          <div className="text-white/60 text-sm">✓ Video Consultations</div>
          <div className="text-white/60 text-sm">✓ Fast Appointments</div>
        </div>
      </div>

      <BookingCard />
    </section>
  );
}