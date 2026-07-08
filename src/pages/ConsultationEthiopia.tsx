import Navbar from "../components/Navbar";
import ConsultationHero from "../components/ConsultationHero";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import SpecialtiesSection from "../components/SpecialtiesSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialsSection from "../components/TestimonialSection";
import GuaranteeSection from "../components/GuaranteeSection";
import Footer from "../components/Footer";
import WaitlistSection from "../components/WaitlistSection";
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
      <TestimonialsSection />
      <GuaranteeSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}