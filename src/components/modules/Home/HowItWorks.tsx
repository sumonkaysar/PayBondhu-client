import {
  CheckCircleIcon,
  CreditCardIcon,
  SendIcon,
  UserPlusIcon,
} from "lucide-react";

const steps = [
  {
    icon: UserPlusIcon,
    title: "Create Account",
    description: "Sign up in minutes with just your email and phone number",
  },
  {
    icon: CreditCardIcon,
    title: "Add Funds",
    description: "Link your bank account or use our agent network to add money",
  },
  {
    icon: SendIcon,
    title: "Start Transacting",
    description: "Send money, pay bills, or shop online instantly",
  },
  {
    icon: CheckCircleIcon,
    title: "Enjoy Freedom",
    description: "Manage all your finances from one secure platform",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with PayBondhu in four simple steps
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 transform -translate-y-1/2"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center font-bold text-emerald-600 border-2 border-emerald-600">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
