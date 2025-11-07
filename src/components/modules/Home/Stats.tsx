import {
  DollarSignIcon,
  GlobeIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

const stats = [
  {
    icon: UsersIcon,
    value: "1M+",
    label: "Active Users",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: DollarSignIcon,
    value: "$2B+",
    label: "Transactions Processed",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: GlobeIcon,
    value: "150+",
    label: "Countries Supported",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: TrendingUpIcon,
    value: "99.9%",
    label: "Uptime Guarantee",
    color: "from-green-500 to-green-600",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffffff50] rounded-full mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
