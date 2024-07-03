import Link from "next/link";
import CityIcon from "@/components/CityIcon";
import Services from "./Services";
import City from "./City";
import Press from "./Press";
import CityRents from "./CityRents";
import Properties from "./Properties";
export default function Hero() {
  return (
    <div
      className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
      id="#Home"
    >
      {/* dark:bg-white bg-white dark:bg-dot-black/[0.4] bg-dot-black/[0.4] */}
      <section className="relative w-full  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <City />
        <Properties/>
        <Press />
        <div className="relative text-left z-10 max-w-2xl  animate-fade-in mt-10">
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl animate-fade-in-up z-0 py-3">For Landlords</h1>
          <h1 className=" text-black text-xl sm:text-2xl md:text-3xl animate-fade-in-up z-0">
            Rents Paid on Time Everytime!
          </h1>
        </div>
      </section>
      <CityRents/>
      {/* <Services /> */}
    </div>
  );
}
