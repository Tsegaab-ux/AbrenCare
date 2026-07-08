import FamilyHero from "../components/FamilyHero";
import PainSection from "../components/PainSection";
import ComparisonSection from "../components/ComparisonSection";
import ServicesSection from "../components/ServicesSection";
import GuaranteeSection from "../components/GuaranteeSection";
import WaitlistSection from "../components/waitlistsection1";
import Navbar from "../components/Navbar";

export default function Family() {
  return (
    <div className="bg-[#0A0A0A]">
      <Navbar />
      <FamilyHero />
      <PainSection />
      <ComparisonSection />
      <ServicesSection />
      <GuaranteeSection />
      <WaitlistSection />
    </div>
  );
}