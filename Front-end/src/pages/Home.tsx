
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsPill from "../components/StatsPill";
import ServiceCards from "../components/ServiceCards";
import TrustSection from "../components/TrustSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-[#23254B]">

      {/* Optional background glow for sections BELOW hero */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#0B6B61]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#EEF4F3] rounded-full blur-3xl" />

        <div className="absolute top-[40%] left-[35%] w-[300px] h-[300px] bg-[#2FAE9B]/10 rounded-full blur-3xl" />

      </div>

      {/* HERO FULL WIDTH */}
      <div className="relative z-10">
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

