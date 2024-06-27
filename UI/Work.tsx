import WorkCard from "@/components/WorkCard";

export default function Work() {
  return (
    <div className="pb-5 mb-5 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6 mb-4">
        What CityRents Does 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WorkCard
          icon="/mail.svg"
          text="CityRents offers a comprehensive Property Management System that guarantees peace of mind when it comes to overseeing your property."
          stats="360 Property Management"
        />
        <WorkCard
          icon="/mail.svg"
          text="CityRents' maintenance team, comprising plumbers, electricians, and carpenters, is always on standby to ensure prompt resolution of issues raised by tenants or owners."
          stats="Maintenance Concerns"
        />
        <WorkCard
          icon="/mail.svg"
          text="CityRents handles rental payments, providing peace of mind to both tenants and owners by ensuring payments are made promptly and reliably."
          stats="Rental Collections"
        />
      </div>
    </div>
  );
}
