import Features from "@/AppComponents/AppFeatures/Features";
import Hero from "@/AppComponents/AppHero/Hero";
import Navbar from "@/AppComponents/AppNavbar/Navbar";

export default function Home() {
  return (
    <div className="text-red-300">
     <Navbar/>
     <Hero/>
     <Features/>
      
    </div>
  );
}
