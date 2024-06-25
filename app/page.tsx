import Contact from "@/UI/Contact";
import Services from "@/UI/Services";
import Navbar from "@/components/Navbar";
import Facts from "@/UI/Facts";
import Work from "@/UI/Work";
import Benefits from "@/UI/Benefits";
import Hero from "@/UI/Hero";
import { Reviews } from "@/UI/reviews";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Facts />
      <Work />
      <Benefits />
      <Reviews />
      <Contact />
    </div>
  );
}
