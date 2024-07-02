import Contact from "@/UI/Contact";
import Services from "@/UI/Services";
import Navbar from "@/components/Navbar";
import Facts from "@/UI/Facts";
import Work from "@/UI/Work";
import Benefits from "@/UI/Benefits";
import Hero from "@/UI/Hero";
import { Reviews } from "@/UI/reviews";
import Options from "@/UI/Options";
import CityRents from "@/UI/CityRents";
export default function Home() {
  return (
    <div className="font-centra dark:bg-white bg-white dark:bg-dot-black/[0.4] bg-dot-black/[0.4]">
      <div className="md:bg-contain bg-cover bg-repeat-x mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <Navbar />
        <h1 className="text-black text-2xl mt-32 mb-5 sm:text-3xl md:text-4xl py-6 font-bold animate-fade-in-up z-0 text-center">
          Search for Managed Properties
        </h1>
        <div className="max-w-4xl mx-auto">
          <Options />
        </div>
      </div>
      <Hero />

      {/* <Services /> */}
      {/* <Facts /> */}
      <Work />
      {/* <Benefits /> */}
      <Reviews />
      <Contact />
    </div>
  );
}
