import ExecutiveHero from "../components/ExecutiveHero";
import WhyExecutivesSection from "../components/WhyExecutivesSection";
import BenefitsSection from "../components/BenefitsSection";
import ProgramSection from "../components/ProgramSection";
import TestimonialSection from "../components/TestimonialSection";
import PricingSection from "../components/PricingSection";
import WaitlistSection from "../components/WaitlistSection";
import Navbar from "../components/Navbar";

export default function ExecutiveHealth() {
  return (
    <div className="bg-[#0A0A0A]">
      <Navbar/>
      <ExecutiveHero />
      <WhyExecutivesSection />
      <BenefitsSection />
      <ProgramSection />
      <TestimonialSection />
      <PricingSection />
      <WaitlistSection />
    </div>
  );
}