import FAQCard from "@/components/shared/FAQCard";
import { faqs } from "@/consts/home.const";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQCard key={index} que={faq.q} ans={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
