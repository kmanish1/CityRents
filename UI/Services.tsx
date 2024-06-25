import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <div className="py-10">
      <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6">
        Our services include:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ServiceCard
          icon="/icons8-property-50.png"
          text="We provide end to end property management services in India for Non-Residents. From tenant search, monthly rent collection to repairs and periodic inspections, Housewise manages it all."
          heading="End-to-End Property Management"
        />
        <ServiceCard
          icon="/icons8-property-50.png"
          text="Our rental property management services in India for Non-residents take care of everything from advertising your property, finding the right tenant, and support till tenant move-in."
          heading="Rental Management"
        />
        <ServiceCard
          icon="/icons8-property-50.png"
          text="We provide customized property management services in India for Non-resident Indians."
          heading="Custom Property Management"
        />
      </div>
    </div>
  );
}
