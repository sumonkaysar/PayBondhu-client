const TestimonialCard = ({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    content: string;
    avatar: string;
  };
}) => {
  return (
    <div className="card p-6 text-center rounded-xl bg-emerald-600 dark:bg-emerald-950">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="font-semibold text-left">{testimonial.name}</div>
          <div className="text-sm text-gray-400 text-left">
            {testimonial.role}
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-left italic">"{testimonial.content}"</p>
    </div>
  );
};

export default TestimonialCard;
