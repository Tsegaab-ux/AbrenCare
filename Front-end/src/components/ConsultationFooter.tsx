export default function ConsultationFooter() {
  return (
    <footer className="bg-[#141414] border-t border-white/10 px-[5%] py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <h2 className="font-serif text-white text-xl font-bold">
          Nordic <span className="text-[#C8922A]">Abrencare</span>
        </h2>

        <div className="flex gap-4">
          <a href="#" className="text-white/40 hover:text-white">
            Privacy
          </a>

          <a href="#" className="text-white/40 hover:text-white">
            Terms
          </a>

          <a href="#" className="text-white/40 hover:text-white">
            Contact
          </a>
        </div>

        <p className="text-white/30 text-sm">
          © 2026 Nordic Abrencare
        </p>
      </div>
    </footer>
  );
}