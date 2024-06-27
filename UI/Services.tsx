import ServiceCard from "@/components/ServiceCard";
import City from "./City";
import WorkCard from "@/components/WorkCard";
function Choose() {
  return (
    <div id="Services" className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 mb-5 bg-white px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <WorkCard
          icon="/4295033-removebg-preview.png"
          text="We leverage the latest cloud-based solutions to enhance operational efficiency and deliver exceptional service."
          stats="Innovative Technology"
        />
        <WorkCard
          icon="/4295033-removebg-preview.png"
          text="Your data is protected with state-of-the-art security measures, ensuring compliance with industry standards and regulations."
          stats="Security and Compliance"
        />
        <WorkCard
          icon="/4295033-removebg-preview.png"
          text="Our dedicated team provides ongoing support and training to maximize your experience with our platform."
          stats="Customer Support"
        />
    </div>
  );
}

export default function Services() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon="/pomind.jpg"
            text="Our 7-point vetting system guarantees that your property is in capable hands."
            heading="Peace of Mind"
          />
          <ServiceCard
            icon="/timelypayments.jpeg"
            text="Ensure your rents are delivered on time every time with CityRents' Payment Assurance."
            heading="Timely  Payments"
          />
          <ServiceCard
            icon="/tailoredPC.jpeg"
            text="A dedicated account manager oversees agreements, property management, and maintenance services with personalized attention."
            heading="Tailored Property Care"
          />
          <ServiceCard
            icon="/cloudbased.jpeg"
            text="Receive real-time updates on your rent payments, approve maintenance tickets according to agreements, monitor utility payments, and more—all conveniently from the comfort of your home."
            heading="Cloud Based Prop Tech"
          />
        </div>
      </div>
      <City/>
      <Choose />
    </div>
  );
}
