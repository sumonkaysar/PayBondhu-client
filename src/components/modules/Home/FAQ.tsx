import FAQCard from "@/components/shared/FAQCard";
import { faqs } from "@/consts/home.const";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-16 md:py-24  bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the answers of the questions that users frequently asked
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQCard key={index} que={faq.q} ans={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
