import Contact from "@/UI/Contact";
import Choose from "@/UI/Choose";
import Services from "@/UI/Services";
import Navbar from "@/components/Navbar";
import Facts from "@/UI/Facts";
import Work from "@/UI/Work";
import Benefits from "@/UI/Benefits";
import Hero from "@/UI/Hero";
import City from "@/UI/City";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <City />
      <Services />
      <Choose />
      <Facts />
      <Work />
      <Benefits />
      <Contact />
    </div>
  );
}
