import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CreditCard, LineChart, Send, Shield, Wallet } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    desc: "Store, manage, and transfer funds securely.",
  },
  {
    icon: Send,
    title: "Instant Transfers",
    desc: "Send money to anyone, anywhere, instantly.",
  },
  {
    icon: CreditCard,
    title: "Cash-In & Cash-Out",
    desc: "Deposit and withdraw funds easily.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    desc: "Top-level encryption to keep your money safe.",
  },
  {
    icon: LineChart,
    title: "Smart Analytics",
    desc: "Track your expenses and manage finances.",
  },
];

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto w-11/12 py-10"
    >
      <Card className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl text-white">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold text-center">
            Features
          </CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-white/10 dark:bg-white/5 text-center p-5 rounded-xl hover:scale-105 transition-transform shadow-md">
                <f.icon className="mx-auto w-12 h-12 text-yellow-300" />
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="text-sm opacity-80 mt-1">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Features;
