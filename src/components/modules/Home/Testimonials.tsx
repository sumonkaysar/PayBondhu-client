import TestimonialCard from "@/components/shared/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "PayWallet has transformed how I manage my business payments. Fast, reliable, and secure!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    content:
      "I love the instant transfers. No more waiting days for payments to clear!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "Agent Partner",
    content:
      "Being an agent has been a great income source. The platform is easy to use and reliable.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What <span className="text-primary">Our Users</span> Say
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
