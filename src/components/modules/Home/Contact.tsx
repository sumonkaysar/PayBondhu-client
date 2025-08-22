import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-100 dark:bg-[#0f0f10] py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">Contact Us</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Got questions? We'd love to hear from you!
        </p>
        <form className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
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
