import {
  CreditCardIcon,
  DownloadIcon,
  SendIcon,
  ShieldIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

const features = [
  {
    icon: SendIcon,
    title: "Instant Transfers",
    description: "Send money to anyone, anywhere in seconds with zero delays",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: DownloadIcon,
    title: "Easy Withdrawals",
    description: "Withdraw your funds to your bank account instantly",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: CreditCardIcon,
    title: "Bill Payments",
    description: "Pay all your bills in one place with automated scheduling",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: ShieldIcon,
    title: "Bank-Level Security",
    description: "Your money is protected with military-grade encryption",
    color: "from-green-500 to-green-600",
  },
  {
    icon: ZapIcon,
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise charges ever",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: UsersIcon,
    title: "Multi-User Support",
    description: "Manage multiple accounts and beneficiaries easily",
    color: "from-indigo-500 to-indigo-600",
  },
];
const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need in One Wallet
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience seamless digital payments with features designed for your
            convenience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
