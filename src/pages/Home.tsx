import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsPill from "../components/StatsPill";
import ServiceCards from "../components/ServiceCards";
import TrustSection from "../components/TrustSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] overflow-x-hidden text-[#222222]">

      {/* Background soft luxury glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#D9B26F]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#EFE7DC] rounded-full blur-3xl" />

        <div className="absolute top-[40%] left-[35%] w-[300px] h-[300px] bg-[#C8922A]/5 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">

        <Navbar />
        <Hero />
        <StatsPill />
        <ServiceCards />
        <TrustSection />
        <AboutSection />
        <Footer />

      </div>
    </div>
  );
}