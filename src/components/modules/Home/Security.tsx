import { ShieldCheckIcon } from "lucide-react";

const securitiesData = [
  {
    title: "256-bit Encryption",
    description: "Military-grade encryption protects all your transactions",
  },
  {
    title: "Two-Factor Authentication",
    description: "Extra layer of security for your account",
  },
  {
    title: "24/7 Monitoring",
    description: "Our team watches for suspicious activity around the clock",
  },
];

const Security = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          <span className="text-primary">Your Security</span> Our Priority
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {securitiesData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
