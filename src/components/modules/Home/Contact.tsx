import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Got questions? We'd love to hear from you!
          </p>
        </div>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border bg-gray-300 dark:bg-gray-900"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border bg-gray-300 dark:bg-gray-900"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg border bg-gray-300 dark:bg-gray-900"
          ></textarea>
          <Button className="bg-primary text-white px-6 py-3 rounded-lg shadow">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
