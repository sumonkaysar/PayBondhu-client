import Contact from "@/components/modules/Home/Contact";
import FAQ from "@/components/modules/Home/FAQ";
import Features from "@/components/modules/Home/Features";
import Hero from "@/components/modules/Home/Hero";
import TransactionSteps from "@/components/modules/Home/TransactionSteps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <TransactionSteps />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
