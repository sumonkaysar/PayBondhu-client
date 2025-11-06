import { CheckCircleIcon } from "lucide-react";

const benefitsData = [
  "Send money to anyone, anywhere, instantly",
  "Pay bills and recharge mobile in seconds",
  "Request money from friends and family",
  "Track all your transactions in real-time",
  "24/7 customer support when you need it",
  "Multi-layer security for peace of mind",
];

const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-[#0a100f]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-left mb-12">
              Everything <span className="text-primary">You Need</span> in One
              Place
            </h3>
            <div className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
              alt="Mobile app"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
