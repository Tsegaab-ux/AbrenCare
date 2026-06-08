import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsPill from "../components/StatsPill";
import ServiceCards from "../components/ServiceCards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <StatsPill />
      <ServiceCards />
      <Footer />
    </div>
  );
}