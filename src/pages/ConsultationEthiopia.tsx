import ConsultationNavbar from "../components/ConsultationNavbar";
import ConsultationHero from "../components/ConsultationHero";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import SpecialtiesSection from "../components/SpecialtiesSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialsSection from "../components/TestimonialSection";
import GuaranteeSection from "../components/GuaranteeSection";
import ConsultationBookingForm from "../components/ConsultationBookingForm";
import ConsultationFooter from "../components/ConsultationFooter";

export default function ConsultationEthiopia() {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <ConsultationNavbar />
      <ConsultationHero />
      <ProblemSection />
      <HowItWorks />
      <SpecialtiesSection />
      <BeforeAfterSection />
      <DoctorsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <ConsultationBookingForm />
      <ConsultationFooter />
    </div>
  );
}