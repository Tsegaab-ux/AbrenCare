import FamilyCard from "./FamilyCard";
import ExecutiveCard from "./ExecutiveCard";
import ConsultationCard from "./Consultationcard";

export default function ServiceCards() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        <FamilyCard />
        <ExecutiveCard />
        <ConsultationCard />
      </div>
    </section>
  );
}