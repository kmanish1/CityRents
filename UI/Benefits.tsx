import BenefitCard from "@/components/BenefitCard";
export default function Benefits() {
  return (

    <div className="bg-white px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-xl md:text-3xl text-black font-semibold text-center pb-6 mb-4">
        CityRents – PropTech Revolutionizing Rental Management 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <BenefitCard
          icon="/mail.svg"
          text="Access your property data anytime, anywhere. Our secure cloud platform centralizes information, from tenant communications to financial records, providing real-time insights and enhancing decision-making."
          stats="Cloud-Based Rental Management"
        />
        <BenefitCard
          icon="/mail.svg"
          text="Simplify the tenant screening and leasing process with our automated tools. From application submissions to background checks, we ensure a smooth and compliant onboarding experience."
          stats="Automated Tenant Onboarding"
        />
        <BenefitCard
          icon="/mail.svg"
          text="Track rent payments, generate financial reports, and manage expenses effortlessly. Our integrated systems automate accounting tasks, eliminating manual errors and optimizing cash flow."
          stats="Financial Management"
        />
        <BenefitCard
          icon="/mail.svg"
          text="Efficiently handle maintenance requests with our intuitive system. Tenants can submit requests online, and property managers can track progress, schedule repairs, and ensure timely resolution."
          stats="Maintenance Coordination"
        />
        <BenefitCard
          icon="/mail.svg"
          text="Foster transparent communication between landlords, tenants, and property managers. Our platform facilitates messages, notifications, and updates in real-time, enhancing tenant satisfaction and landlord oversight."
          stats="Communication Hub"
        />
      </div>
    </div>
  );
}
