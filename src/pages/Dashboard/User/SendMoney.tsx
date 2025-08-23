import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSendMoneyMutation } from "@/redux/features/transaction/transaction.api";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SendMoney = () => {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!receiver || !amount || Number(amount) <= 0) {
      toast.error("Please enter valid details");
      return;
    }

    try {
      const res = await sendMoney({
        receiver,
        amount: Number(amount),
      }).unwrap();
      toast.success(res.message || "Money sent successfully!");
      setReceiver("");
      setAmount("");
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to send money");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl w-11/12 mx-auto mt-10"
    >
      <Card className="shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 dark:from-pink-800 dark:via-purple-800 dark:to-indigo-800 text-gray-700 dark:text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-2">
            <Send className="h-7 w-7" /> Send Money
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSend} className="space-y-5">
            <Input
              type="text"
              placeholder="Receiver's Email / Phone"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/40 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300"
            />
            <Input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/40 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300"
            />
            <Button
              type="submit"
              className="w-full text-lg py-6 rounded-xl bg-gradient-to-br dark:from-white dark:via-white dark:to-white from-indigo-500 via-purple-500 to-pink-500 text-white dark:text-pink-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 dark:hover:from-white/90 dark:hover:via-white/90 dark:hover:to-white/90 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isLoading ? "Processing..." : "Send Money"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SendMoney;
