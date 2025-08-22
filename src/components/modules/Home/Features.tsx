import FeatureCard from "@/components/shared/FeatureCard";
import { features } from "@/consts/home.const";

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Why Choose <span className="text-primary">PayBondhu</span>?
        </h3>
        <div className="grid gap-8 md:gap-y-16 md:grid-cols-3">
          {features.map(({ Icon, title, desc }, index) => (
            <FeatureCard
              key={index}
              icon={<Icon size={28} />}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
