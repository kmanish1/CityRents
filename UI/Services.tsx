import ServiceCard from "@/components/ServiceCard";

function Choose() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 content-center py-5 mb-5 bg-white px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex justify-center items-center">
        <img src="/4295033-removebg-preview.png" height={500} width={500}></img>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className=" text-xl md:text-2xl text-black font-semibold text-center pb-4">
          Why should you choose us?
        </h3>
        <p className=" text-small p-2 pb-4">
          Housewise is India’s fastest-growing rental property management
          company. We provide transparent, seamless, and trustworthy Property
          Management Solutions including rental property management services in
          India to Non-resident Indians across the globe. From advertising,
          tenant screening, rent collection to repairs, and beyond, Housewise
          provides end-to-end property management services for Non-resident
          Indians across the globe.
        </p>
        <div>
          <button className="text-center rounded bg-blue-500 text-white px-4 py-2 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="py-10">
        <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6 ">
          Our services include:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard
            icon="/mail.svg"
            text="We provide end to end property management services in India for Non-Residents. From tenant search, monthly rent collection to repairs and periodic inspections, Housewise manages it all."
            heading="End-to-End Property Management"
          />
          <ServiceCard
            icon="/mail.svg"
            text="Our rental property management services in India for Non-residents take care of everything from advertising your property, finding the right tenant, and support till tenant move-in."
            heading="Rental Management"
          />
          <ServiceCard
            icon="/mail.svg"
            text="We provide customized property management services in India for Non-resident Indians."
            heading="Custom Property Management"
          />
        </div>
      </div>
      <Choose />
    </div>
  );
}
