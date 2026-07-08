import Navbar from "../components/Navbar";
import ConsultationHero from "../components/ConsultationHero";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import SpecialtiesSection from "../components/SpecialtiesSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialsSection from "../components/TestimonialSection";
import VideoSection from "../components/videosection"
import Footer from "../components/Footer";
import WaitlistSection from "../components/waitlistsection2";

export default function ConsultationEthiopia() {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <ConsultationHero />
      <ProblemSection />
      <HowItWorks />
      <SpecialtiesSection />
      <BeforeAfterSection />
      <DoctorsSection />
      <VideoSection/>
      <WaitlistSection />
      <Footer />
    </div>
  );
}