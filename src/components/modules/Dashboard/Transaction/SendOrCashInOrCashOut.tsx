import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TransactionType } from "@/consts/transaction.const";
import type { TTransactionType } from "@/types/transaction.type";
import type { transactionZodSchema } from "@/validations/transaction.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Coins, HandCoins, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import type z from "zod";
import type { ZodObject } from "zod";

interface IProps {
  onSubmit: (data: z.infer<typeof transactionZodSchema>) => Promise<void>;
  isLoading: boolean;
  type: TTransactionType;
  zodSchema: ZodObject;
}

const SendOrCashInOrCashOut = ({
  onSubmit,
  isLoading,
  type,
  zodSchema,
}: IProps) => {
  const form = useForm<z.infer<typeof transactionZodSchema>>({
    resolver: zodResolver(zodSchema as typeof transactionZodSchema),
    defaultValues: {
      receiver: "",
      amount: 0,
    },
  });

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
            {type === TransactionType.SEND_MONEY ? (
              <>
                <Send className="h-7 w-7" /> Send Money
              </>
            ) : type === TransactionType.CASH_IN ? (
              <>
                <HandCoins className="h-7 w-7" /> Cash In
              </>
            ) : (
              <>
                <Coins className="h-7 w-7" /> Cash Out
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="receiver"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {type === TransactionType.CASH_OUT ? "Agent" : "Receiver"}{" "}
                      Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 01xxxxxxxxx"
                        {...field}
                        className="border-black/20 dark:border-white/20 placeholder:text-foreground/70"
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter{" "}
                      {type === TransactionType.CASH_OUT ? "Agent" : "Receiver"}{" "}
                      Number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ex: 1000"
                        {...field}
                        min={0}
                        className="border-black/20 dark:border-white/20 placeholder:text-foreground/70"
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter amount.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full text-lg py-6 rounded-xl bg-gradient-to-br dark:from-white dark:via-white dark:to-white from-indigo-500 via-purple-500 to-pink-500 text-white dark:text-pink-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 dark:hover:from-white/90 dark:hover:via-white/90 dark:hover:to-white/90 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {isLoading
                  ? "Processing..."
                  : type === TransactionType.SEND_MONEY
                  ? "Send Money"
                  : type === TransactionType.CASH_IN
                  ? "Cash In"
                  : "Cash Out"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SendOrCashInOrCashOut;
