import Navbar from "@/components/mycomponents/Navbar";
import HeroSection from "@/components/mycomponents/Hero";
import ContentSection from "@/components/mycomponents/Content";
import GrowUtilitiesSection from "@/components/mycomponents/feature";
import TeamSection from "@/components/mycomponents/team";
import Footer from "@/components/mycomponents/Footer";
import AnimatedTestimonialsDemo from "@/components/mycomponents/testimonials";
export default function Home() {
  return (
   <>
   
<Navbar/>
   <HeroSection/>
   <ContentSection/>
   <GrowUtilitiesSection/>
   <TeamSection/>
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 overflow-hidden ">
   <AnimatedTestimonialsDemo/>
    </div>

   <Footer/>
   
   </>
  );
}

