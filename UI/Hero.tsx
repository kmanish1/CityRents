import Link from "next/link";
import CityIcon from "@/components/CityIcon";

const data = [
  { name: "Hyderabad", img: "/hyderabad.jpeg" },
  { name: "Banglore", img: "/banglore.jpeg" },
  { name: "Chennai", img: "/chennai.jpeg" },
  { name: "Mumbai", img: "/mumbai.jpeg" },
  { name: "Hyderabad", img: "/hyderabad.jpeg" },
  { name: "Banglore", img: "/banglore.jpeg" },
  { name: "Chennai", img: "/chennai.jpeg" },
  { name: "Mumbai", img: "/mumbai.jpeg" },
  { name: "Hyderabad", img: "/hyderabad.jpeg" },
  { name: "Banglore", img: "/banglore.jpeg" },
  { name: "Chennai", img: "/chennai.jpeg" },
  { name: "Banglore", img: "/banglore.jpeg" },
  { name: "Chennai", img: "/chennai.jpeg" }
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
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" id="#Home">
      <section
        className="relative w-full grid grid-cols-1 place-items-center md:grid-cols-2 gap-4 items-center px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div className="relative order-last md:order-first z-10 text-center max-w-2xl px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl animate-fade-in-up">
            Feeling Uncertain About Renting Out Your Property in India?
          </h1>
          <p className="mt-3 text-md text-gray-700 sm:mt-5 sm:text-xl animate-fade-in-up delay-100">
            We can help. Sign up with Housewise and avail the best rental
            property management services in India.
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
              className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
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
