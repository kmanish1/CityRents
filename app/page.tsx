import Contact from "@/UI/Contact";
import Services from "@/UI/Services";
import Navbar from "@/components/Navbar";
import Facts from "@/UI/Facts";
import Work from "@/UI/Work";
import Benefits from "@/UI/Benefits";
import Hero from "@/UI/Hero";
import { Reviews } from "@/UI/reviews";
import City from "@/UI/City";
export default function Home() {
  return (
    <div className="font-centra dark:bg-white bg-white dark:bg-dot-black/[0.4] bg-dot-black/[0.4]">
      <Navbar />
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
