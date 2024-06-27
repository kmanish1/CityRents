import ServiceCard from "@/components/ServiceCard";

function Choose() {
  return (
    <div id="Services" className="grid grid-cols-1 md:grid-cols-2 content-center py-5 mb-5 bg-white px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex justify-center items-center">
        <img src="/4295033-removebg-preview.png" height={500} width={500}></img>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className=" text-xl md:text-2xl text-black font-semibold text-center">
          Why should you choose us?
        </h3>
        <ul className="list-disc p-8">
          <li>
            <h3 className="font-semibold text-lg">Innovative Technology</h3>
            <p>We leverage the latest cloud-based solutions to enhance operational efficiency and deliver exceptional service.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Security and Compliance</h3>
            <p>Your data is protected with state-of-the-art security measures, ensuring compliance with industry standards and regulations.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Customer Support</h3>
            <p>Our dedicated team provides ongoing support and training to maximize your experience with our platform.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="py-10">
        <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6 ">
          What we provide?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon="/mail.svg"
            text="Our 7-point vetting system guarantees that your property is in capable hands."
            heading="Peace of Mind"
          />
          <ServiceCard
            icon="/mail.svg"
            text="Ensure your rents are delivered on time every time with CityRents' Payment Assurance."
            heading="Timely  Payments"
          />
          <ServiceCard
            icon="/mail.svg"
            text="A dedicated account manager oversees agreements, property management, and maintenance services with personalized attention."
            heading="Tailored Property Care"
          />
          <ServiceCard
            icon="/mail.svg"
            text="Receive real-time updates on your rent payments, approve maintenance tickets according to agreements, monitor utility payments, and more—all conveniently from the comfort of your home."
            heading="Cloud Based Prop Tech"
          />
        </div>
      </div>
      <Choose />
    </div>
  );
}
