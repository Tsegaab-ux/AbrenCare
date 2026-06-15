import FamilyCard from "./FamilyCard";
import ExecutiveCard from "./ExecutiveCard";
import ConsultationCard from "./ConsultationCard";

export default function ServiceCards() {
  return (
    <section className="w-full px-12 lg:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <FamilyCard />
        <ExecutiveCard />
        <ConsultationCard />
      </div>
    </section>
  );
}