import WorkCard from "@/components/WorkCard";

export default function Work() {
  return (
    <div className="pb-5 mb-5 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6 mb-4">
        CityRents – PropTech Revolutionizing Rental Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <WorkCard
          icon="/360 Property Management.png"
          text="CityRents offers a comprehensive Property Management System that guarantees peace of mind when it comes to overseeing your property."
          stats="360 Property Management"
        />
        <WorkCard
          icon="/Maintainence Concerns.png"
          text="CityRents' maintenance team, comprising plumbers, electricians, and carpenters, is always on standby to ensure prompt resolution of issues raised by tenants or owners."
          stats="Maintenance Concerns"
        />
        <WorkCard
          icon="/rental collections green.jpeg"
          text="CityRents handles rental payments, providing peace of mind to both tenants and owners by ensuring payments are made promptly and reliably."
          stats="Rental Collections"
        />
        <WorkCard
          icon="/Maintainence Coordination.png"
          text="Efficiently handle maintenance requests with our intuitive system. Tenants can submit requests online, and property managers can track progress, schedule repairs, and ensure timely resolution."
          stats="Maintenance Coordination"
        />
        <WorkCard
          icon="/Cloud Based Prop Tech.png"
          text="Access your property data anytime, anywhere. Our secure cloud platform centralizes information, from tenant communications to financial records, providing real-time insights and enhancing decision-making."
          stats="Cloud-Based Rental Management"
        />
        <WorkCard
          icon="/tenant.png"
          text="Simplify the tenant screening and leasing process with our automated tools. From application submissions to background checks, we ensure a smooth and compliant onboarding experience."
          stats="Automated Tenant Onboarding"
        />
        <WorkCard
          icon="/investment-management.png"
          text="Track rent payments, generate financial reports, and manage expenses effortlessly. Our integrated systems automate accounting tasks, eliminating manual errors and optimizing cash flow."
          stats="Financial Management"
        />
        <WorkCard
          icon="/Maintainence Coordination.png"
          text="Efficiently handle maintenance requests with our intuitive system. Tenants can submit requests online, and property managers can track progress, schedule repairs, and ensure timely resolution."
          stats="Maintenance Coordination"
        />
      </div>
    </div>
  );
}
