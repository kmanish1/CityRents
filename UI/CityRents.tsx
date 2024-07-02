import React from "react";

const CityRents: React.FC = () => {
  return (
    // <div className="p-8">
    //   <div className="flex items-center justify-around flex-wrap text-black">
    //     <div className='md:border-4 md:w-32 md:h-32 md:border-black md:m-10 md:mr-28'>
    //         <div className="w-32 h-32 border-4 border-black flex mb-6 items-center transform md:-rotate-45 justify-center">
    //             <span className="text-xl font-bold md:rotate-45">CityRents</span>
    //         </div>
    //     </div>
    //     <div className="flex flex-col space-y-4 ml-8">
    //       {features.map((feature, index) => (
    //         <FeatureCard key={index} {...feature} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-wrap justify-center items-center p-4 -z-10">
      <img src="./city.jpg" width={900}></img>
    </div>
  );
};

interface FeatureProps {
  color: string;
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({
  color,
  icon,
  title,
  description,
}) => {
  return (
    <div
      className={`${color} rounded-full border-2  p-6 flex items-start max-w-md`}
    >
      <div className="flex-shrink-0 mr-4">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const features: FeatureProps[] = [
  {
    color: "bg-purple-500",
    icon: "/Peaceof Mind.png",
    title: "Peace of mind",
    description:
      "Our 7-point vetting system guarantees that your property is in capable hands.",
  },
  {
    color: "bg-yellow-300",
    icon: "/timely payments latest.jpeg",
    title: "Timely Payments",
    description:
      "Ensure your rents are delivered on time every time with CityRents' Payment Assurance.",
  },
  {
    color: "bg-green-500",
    icon: "/property-insurance.png",
    title: "Tailored Property Care",
    description:
      "A dedicated account manager oversees agreements, property management, and maintenance services with personalized attention.",
  },
  {
    color: "bg-sky-400",
    icon: "/Cloud Based Prop Tech.png",
    title: "Cloud Based Prop Tech",
    description:
      "Receive real-time updates on your rent payments, approve maintenance tickets according to agreements, monitor utility payments, and more—all conveniently from the comfort of your home.",
  },
];

export default CityRents;
