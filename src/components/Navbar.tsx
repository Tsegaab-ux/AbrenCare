export default function Navbar() {
  return (
    <nav className="h-16 px-[5%] flex items-center justify-between border-b border-white/10 bg-[#0A0A0A]">
      <div>
        <h1 className="text-lg font-bold text-white">
          Nordic Abren<span className="text-[#C8922A]">care</span>
        </h1>

        <p className="text-[10px] uppercase tracking-widest text-white/30">
          Ethiopia · Bridging the Health Gap
        </p>
      </div>

      <a
        href="mailto:hello@nordicabrencare.com"
        className="text-sm text-white/40 hover:text-white"
      >
        hello@nordicabrencare.com
      </a>
    </nav>
  );
}