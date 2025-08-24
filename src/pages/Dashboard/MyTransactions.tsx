import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  Download,
  HandCoins,
  Send,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const transactions = [
  { id: 1, type: "send", amount: 2500, date: "2025-08-20", status: "success" },
  {
    id: 2,
    type: "cashin",
    amount: 5000,
    date: "2025-08-18",
    status: "success",
  },
  {
    id: 3,
    type: "cashout",
    amount: 1500,
    date: "2025-08-17",
    status: "failed",
  },
  {
    id: 4,
    type: "withdraw",
    amount: 3000,
    date: "2025-08-16",
    status: "pending",
  },
];

const MyTransactions = () => {
  const [filter, setFilter] = useState("all");
  const [sortAsc, setSortAsc] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions
    .filter((t) => (filter === "all" ? true : t.type === filter))
    .filter((t) => t.id.toString().includes(search))
    .sort((a, b) => (sortAsc ? a.amount - b.amount : b.amount - a.amount));

  const getIcon = (type: string) => {
    switch (type) {
      case "send":
        return <Send className="h-5 w-5 text-blue-500" />;
      case "cashin":
        return <Wallet className="h-5 w-5 text-green-500" />;
      case "cashout":
        return <HandCoins className="h-5 w-5 text-orange-500" />;
      case "withdraw":
        return <Download className="h-5 w-5 text-purple-500" />;
      default:
        return <Send className="h-5 w-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto w-11/12 py-8"
    >
      <Card className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl text-white">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-3xl font-extrabold">
            My Transactions
          </CardTitle>
          <div className="flex gap-3">
            <Input
              placeholder="Search by ID..."
              className="w-48 text-black dark:text-white bg-white/80 dark:bg-white/10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30"
                >
                  {sortAsc ? (
                    <ArrowUpAZ className="h-5 w-5" />
                  ) : (
                    <ArrowDownAZ className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortAsc(true)}>
                  Sort by Amount ↑
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortAsc(false)}>
                  Sort by Amount ↓
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="all" onValueChange={(v) => setFilter(v)}>
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="send">Send</TabsTrigger>
              <TabsTrigger value="cashin">Cash In</TabsTrigger>
              <TabsTrigger value="cashout">Cash Out</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mt-6 space-y-4">
            {filteredTransactions.map((tx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between bg-white/20 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-md hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-4">
                  {getIcon(tx.type)}
                  <div>
                    <p className="font-semibold capitalize">{tx.type}</p>
                    <p className="text-xs opacity-80">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">৳ {tx.amount.toLocaleString()}</p>
                  <p
                    className={`text-xs ${
                      tx.status === "success"
                        ? "text-green-400"
                        : tx.status === "pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {tx.status}
                  </p>
                </div>
              </motion.div>
            ))}

            {filteredTransactions.length === 0 && (
              <p className="text-center text-white/70 mt-6">
                No transactions found
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MyTransactions;
