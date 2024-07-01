import Link from "next/link";
import CityIcon from "@/components/CityIcon";
import Services from "./Services";
import City from "./City";
import Press from "./Press";
export default function Hero() {
  return (
    <div
      className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
      id="#Home"
    >
      {/* dark:bg-white bg-white dark:bg-dot-black/[0.4] bg-dot-black/[0.4] */}
      <section className="relative w-full  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <City />
        <Press />
        <div className="relative text-left z-10 max-w-2xl  animate-fade-in mt-10">
          <h1 className=" text-black text-2xl sm:text-3xl md:text-4xl animate-fade-in-up z-0">
            Rents Paid on Time Everytime!
          </h1>
          {/* <span className="text-3xl sm:text-4xl md:text-5xl">Everytime!</span> */}
          {/* <h1 className="font-bold inline-block my-4 text-3xl sm:text-4xl md:text-5xl">EVERYTIME !</h1> */}
          {/* <p className="mt-3 text-md text-gray-700 sm:mt-5 sm:text-xl animate-fade-in-up delay-100">
            At CityRents, we redefine rental management through cutting-edge cloud-based technology. Our platform offers seamless solutions to landlords, tenants, and property managers, ensuring efficiency, transparency, and peace of mind.
          </p> */}
          <div className="mt-5 sm:mt-8 animate-fade-in-up delay-200">
            {/* <Link
              href="#"
              className="flex items-center justify-center"
              prefetch={false}
            >
              <img src="/whatsapp.svg"></img>
            </Link> */}

            <Link
              href="#"
              className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-blue-600 hover:bg-blue-500 text-white md:py-4 md:text-lg md:px-10"
              prefetch={false}
            >
              Know More{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="ml-2"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        {/* <div className="order-first md:order-last bg-blue">
          <img
            src="/apartment-rent-concept-illustration.png"
            width={700}
            height={700}
          ></img>
        </div> */}
      </section>
      <Services />
    </div>
  );
}
