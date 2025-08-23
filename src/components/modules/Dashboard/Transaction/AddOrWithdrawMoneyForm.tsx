import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import { addOrWithdrawMoneyZodSchema } from "@/validations/transaction.validation";
import { motion } from "framer-motion";
import { Loader2, Wallet } from "lucide-react";
import { useState } from "react";
import type z from "zod";

interface IProps {
  onSubmit: (
    data: z.infer<typeof addOrWithdrawMoneyZodSchema>
  ) => Promise<void>;
  isLoading: boolean;
}

const AddOrWithdrawMoneyForm = ({ onSubmit, isLoading }: IProps) => {
  const [amount, setAmount] = useState("");
  const { data } = useUserInfoQuery(null);

  const user = data?.data;
  const role = user?.role;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl w-11/12 mx-auto mt-10"
    >
      <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-gray-700 dark:text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold flex justify-center items-center gap-2">
            <Wallet className="h-8 w-8" />
            {role === "AGENT" ? "Agent Add Money" : "Add Money"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-5">
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/40 dark:border-white/40 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300"
            />
            <Button
              type="submit"
              className="w-full text-lg py-6 rounded-xl bg-gradient-to-br dark:from-white dark:via-white dark:to-white from-blue-500 via-purple-500 to-pink-500 text-white dark:text-pink-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600  dark:hover:from-white/90 dark:hover:via-white/90 dark:hover:to-white/90 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isLoading ? "Processing..." : "Add Money"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AddOrWithdrawMoneyForm;
