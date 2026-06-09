export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?w=1920&q=80"
        >
          <source 
            src="https://player.vimeo.com/external/434045467.sd.mp4?s=20c5748c3a0f2a73c89d4cb4f1a836a4b6d39bd0&profile_id=164" 
            type="video/mp4" 
          />
          <img 
            src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?w=1920&q=80" 
            alt="Nurse checking elderly patient's vital signs at home"
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C8922A]/20 bg-[#C8922A]/10 px-4 py-2 text-xs text-[#C8922A]">
          <div className="w-2 h-2 rounded-full bg-[#C8922A] animate-pulse" />
          Now open — founding members across Ethiopia and abroad
        </div>

        <h1 className="mt-8 text-6xl font-bold text-white">
          Nordic standards.
          <br />
          <span className="italic text-[#C8922A]">
            Ethiopian heart.
          </span>
        </h1>

        
        <p className="max-w-3xl mx-auto mt-6 text-lg text-white/60">
          Nordic Abrencare brings world-class health standards to Ethiopia.
        </p>

        
        <p className="max-w-3xl mx-auto mt-4 text-base text-white/50">
          Professional home care services delivered with compassion and excellence.
        </p>
      </div>
    </section>
  );
}