import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsPill from "../components/StatsPill";
import ServiceCards from "../components/ServiceCards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F7F3EE] overflow-x-hidden">
      
      {/* Animated Medical Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        
        <div className="absolute top-20 left-[5%] animate-float-slow opacity-20">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C89A4A" strokeWidth="1.5">
            <path d="M12 4v16M4 12h16" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute top-[30%] right-[8%] animate-float-medium opacity-15">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#D8C8B5" strokeWidth="1.5">
            <path d="M12 4v16M4 12h16" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute bottom-[15%] left-[15%] animate-float-slower opacity-10">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#C89A4A" strokeWidth="1.5">
            <path d="M12 4v16M4 12h16" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute top-[60%] right-[20%] animate-float-medium delay-1000 opacity-15">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#D8C8B5" strokeWidth="1.5">
            <path d="M12 4v16M4 12h16" strokeLinecap="round"/>
          </svg>
        </div>

        
        <div className="absolute top-[15%] left-[20%] animate-pulse-slow opacity-10">
          <svg width="80" height="40" viewBox="0 0 100 30" fill="none" stroke="#C89A4A" strokeWidth="1.5">
            <path d="M0 15 L20 15 L25 5 L30 25 L35 15 L50 15" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="absolute bottom-[25%] right-[10%] animate-pulse-slower opacity-10">
          <svg width="100" height="50" viewBox="0 0 100 30" fill="none" stroke="#D8C8B5" strokeWidth="1.5">
            <path d="M0 15 L20 15 L25 5 L30 25 L35 15 L50 15" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        
        <div className="absolute top-[40%] left-[2%] animate-rotate-slow opacity-10">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#C89A4A" strokeWidth="1.2">
            <path d="M5 8v4a7 7 0 0 0 14 0V8" strokeLinecap="round"/>
            <path d="M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
            <circle cx="19" cy="10" r="2" />
          </svg>
        </div>

        
        <div className="absolute bottom-[40%] right-[3%] animate-float-medium opacity-10">
          <svg width="50" height="25" viewBox="0 0 40 20" fill="none" stroke="#C89A4A" strokeWidth="1.2">
            <rect x="2" y="4" width="36" height="12" rx="6" />
          </svg>
        </div>
        
        <div className="absolute top-[75%] left-[25%] animate-float-slow delay-700 opacity-8">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#D8C8B5" strokeWidth="1.2">
            <rect x="2" y="4" width="36" height="12" rx="6" />
          </svg>
        </div>

        
        <div className="absolute top-[50%] left-[85%] animate-spin-slow opacity-8">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#C89A4A" strokeWidth="1">
            <path d="M12 2v20M12 2c-2 2-4 4-4 8s2 6 4 8M12 2c2 2 4 4 4 8s-2 6-4 8" strokeLinecap="round"/>
            <path d="M6 8h12M6 16h12" />
          </svg>
        </div>

        
        <div className="absolute bottom-[10%] left-[30%] animate-float-slower opacity-8">
          <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#D8C8B5" strokeWidth="1.2">
            <path d="M4 20h16" />
            <path d="M12 4v12" />
            <path d="M8 8h8" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        
        <div className="absolute top-[10%] right-[30%] w-64 h-64 bg-[#C89A4A]/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-[#E6D8C8]/10 rounded-full blur-3xl animate-pulse-glow-delayed" />
        <div className="absolute top-[50%] left-[50%] w-80 h-80 bg-[#C89A4A]/5 rounded-full blur-3xl animate-pulse-glow-slow" />

        
        <div className="absolute top-[25%] left-[35%] w-1 h-1 bg-[#C89A4A]/40 rounded-full animate-particle" />
        <div className="absolute top-[65%] left-[70%] w-1.5 h-1.5 bg-[#D8C8B5]/40 rounded-full animate-particle-delayed" />
        <div className="absolute top-[80%] left-[45%] w-1 h-1 bg-[#C89A4A]/30 rounded-full animate-particle-slow" />
        <div className="absolute top-[15%] left-[75%] w-2 h-2 bg-[#D8C8B5]/30 rounded-full animate-particle" />
        <div className="absolute top-[45%] left-[15%] w-1 h-1 bg-[#C89A4A]/50 rounded-full animate-particle-delayed" />
        <div className="absolute top-[35%] left-[85%] w-1.5 h-1.5 bg-[#D8C8B5]/30 rounded-full animate-particle-slow" />
        <div className="absolute top-[70%] left-[55%] w-1 h-1 bg-[#C89A4A]/40 rounded-full animate-particle" />
        <div className="absolute top-[90%] left-[80%] w-2 h-2 bg-[#D8C8B5]/20 rounded-full animate-particle-delayed" />
      </div>

      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StatsPill />
        <ServiceCards />
        <Footer />
      </div>

      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.08); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes pulse-glow-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes pulse-glow-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.15); }
        }
        @keyframes particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        @keyframes particle-delayed {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-80px) translateX(-40px); opacity: 0; }
        }
        @keyframes particle-slow {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 12s linear infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 8s ease-in-out infinite; }
        .animate-pulse-glow-delayed { animation: pulse-glow-delayed 10s ease-in-out infinite; }
        .animate-pulse-glow-slow { animation: pulse-glow-slow 12s ease-in-out infinite; }
        .animate-particle { animation: particle 8s ease-in-out infinite; }
        .animate-particle-delayed { animation: particle-delayed 10s ease-in-out infinite 2s; }
        .animate-particle-slow { animation: particle-slow 12s ease-in-out infinite 4s; }
        
        .opacity-8 { opacity: 0.08; }
        .opacity-10 { opacity: 0.10; }
        .opacity-15 { opacity: 0.15; }
        .opacity-20 { opacity: 0.20; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
}