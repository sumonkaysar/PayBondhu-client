import Contact from "@/components/modules/Home/Contact";
import CTA from "@/components/modules/Home/CTA";
import FAQ from "@/components/modules/Home/FAQ";
import Features from "@/components/modules/Home/Features";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import Security from "@/components/modules/Home/Security";
import Stats from "@/components/modules/Home/Stats";
import Testimonials from "@/components/modules/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </div>
  );
};

export default Home;
