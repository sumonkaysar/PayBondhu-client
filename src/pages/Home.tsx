import Benefits from "@/components/modules/Home/Benefits";
import Contact from "@/components/modules/Home/Contact";
import CTA from "@/components/modules/Home/CTA";
import FAQ from "@/components/modules/Home/FAQ";
import Features from "@/components/modules/Home/Features";
import Hero from "@/components/modules/Home/Hero";
import Security from "@/components/modules/Home/Security";
import Testimonials from "@/components/modules/Home/Testimonials";
import TransactionSteps from "@/components/modules/Home/TransactionSteps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <TransactionSteps />
      <Testimonials />
      <Benefits />
      <Security />
      <FAQ />
      <Contact />
      <CTA />
    </div>
  );
};

export default Home;
