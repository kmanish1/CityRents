import Link from "next/link";
import CityIcon from "@/components/CityIcon";

const data = [
  { name: "Hyderabad", img: "/hyderabad.jpeg" },
  { name: "Banglore", img: "/banglore.jpeg" },
  { name: "Chennai", img: "/chennai.jpeg" },
  { name: "Mumbai", img: "/mumbai.jpeg" },
];

function City() {
  return (
    <div className="flex flex-wrap justify-center py-4 bg-white">
      {data.map((item) => (
        <div className="px-4">
          <CityIcon name={item.name} img={item.img} />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 dark:bg-white bg-black dark:bg-dot-black/[0.2] bg-dot-white/[0.2]" id="#Home">
      <section
        className="relative w-full grid grid-cols-1 place-items-center md:grid-cols-2 gap-4 items-center px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div className="relative order-last md:order-first z-10 text-center max-w-2xl px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className=" text-black text-2xl sm:text-3xl md:text-4xl animate-fade-in-up z-0">
            Rents Paid on Time <span className="font-bold inline-block my-4 text-3xl sm:text-4xl md:text-5xl">EVERYTIME !</span>
          </h1>
          <p className="mt-3 text-md text-gray-700 sm:mt-5 sm:text-xl animate-fade-in-up delay-100">
            At CityRents, we redefine rental management through cutting-edge cloud-based technology. Our platform offers seamless solutions to landlords, tenants, and property managers, ensuring efficiency, transparency, and peace of mind.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center animate-fade-in-up delay-200">
            <Link
              href="#"
              className="flex items-center justify-center"
              prefetch={false}
            >
              <img src="/whatsapp.svg"></img>
            </Link>
            
            <Link
              href="#"
              className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-blue-600 hover:bg-blue-500 text-white md:py-4 md:text-lg md:px-10"
              prefetch={false}
            >
              Explore Features
            </Link>
          </div>
        </div>
        <div className="order-first md:order-last bg-blue">
          <img
            src="/apartment-rent-concept-illustration.png"
            width={700}
            height={700}
          ></img>
        </div>
      </section>
      <City />
    </div>
  );
}
