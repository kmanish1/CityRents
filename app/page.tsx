import Contact from "@/UI/Contact";
import Services from "@/UI/Services";
import Navbar from "@/components/Navbar";
import Facts from "@/UI/Facts";
import Work from "@/UI/Work";
import Benefits from "@/UI/Benefits";
import Hero from "@/UI/Hero";
import { Reviews } from "@/UI/reviews";
import City from "@/UI/City";
import Options from "@/UI/Options";
export default function Home() {
  return (
    <div className="font-centra dark:bg-white bg-white dark:bg-dot-black/[0.4] bg-dot-black/[0.4]">
      <div className="bg-[url('/navbarbgimage.png')] md:bg-contain bg-cover bg-repeat-x mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

        <Navbar/>
        <div className="flex justify-center items-center h-[50vh] flex-wrap mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

          <Options/>
        </div>
      </div>
      <Hero />
      {/* <Services /> */}
      {/* <Facts /> */}
      <Work />
      <Benefits />
      <Reviews />
      <Contact />
    </div>
  );
}
