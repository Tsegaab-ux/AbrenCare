import FamilyHero from "../components/FamilyHero";
import PainSection from "../components/PainSection";
import ComparisonSection from "../components/ComparisonSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import GuaranteeSection from "../components/GuaranteeSection";
import WaitlistSection from "../components/WaitlistSection";

export default function Family() {
  return (
    <div className="bg-[#0A0A0A]">
      <FamilyHero />
      <PainSection />
      <ComparisonSection />
      <ServicesSection />
      <TestimonialSection />
      <GuaranteeSection />
      <WaitlistSection />
    </div>
  );
}