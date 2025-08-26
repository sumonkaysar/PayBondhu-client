import {
  Banknote,
  CreditCard,
  LineChart,
  Send,
  Shield,
  Wallet,
} from "lucide-react";

export const features = [
  {
    icon: Wallet,
    iconColor: "text-indigo-600",
    title: "Digital Wallet",
    desc: "Store, manage, and transfer funds securely.",
  },
  {
    icon: Send,
    iconColor: "text-pink-600",
    title: "Instant Transfers",
    desc: "Send money to anyone, anywhere, instantly.",
  },
  {
    icon: CreditCard,
    iconColor: "text-blue-600",
    title: "Add-Money & Withdraw",
    desc: "Deposit and withdraw funds easily.",
  },
  {
    icon: Banknote,
    iconColor: "text-green-600",
    title: "Cash-In & Cash-Out",
    desc: "Deposit and withdraw funds via Agent.",
  },
  {
    icon: Shield,
    iconColor: "text-orange-600",
    title: "Secure Platform",
    desc: "Top-level encryption to keep your money safe.",
  },
  {
    icon: LineChart,
    iconColor: "text-violet-600",
    title: "Smart Analytics",
    desc: "Track your expenses and manage finances.",
  },
];
