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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addOrWithdrawMoneyZodSchema } from "@/validations/transaction.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Banknote, Loader2, Wallet } from "lucide-react";
import { useForm } from "react-hook-form";
import type z from "zod";

interface IProps {
  onSubmit: (
    data: z.infer<typeof addOrWithdrawMoneyZodSchema>
  ) => Promise<void>;
  isLoading: boolean;
  type: string;
}

const AddOrWithdrawMoneyForm = ({ onSubmit, isLoading, type }: IProps) => {
  const form = useForm<z.infer<typeof addOrWithdrawMoneyZodSchema>>({
    resolver: zodResolver(addOrWithdrawMoneyZodSchema),
    defaultValues: {
      amount: 0,
      through: "",
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl w-11/12 mx-auto mt-10"
    >
      <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 dark:from-rose-950 dark:via-violet-950 dark:to-indigo-950 text-gray-700 dark:text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold flex justify-center items-center gap-2">
            {type === "addMoney" ? (
              <>
                <Banknote className="h-8 w-8" />
                Add Money
              </>
            ) : (
              <>
                <Wallet className="h-8 w-8" />
                Withdraw
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
              <FormField
                control={form.control}
                name="through"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {type === "addMoney"
                        ? "From Where (Through)"
                        : "Where To (Through)"}
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-black/20 dark:border-white/20 placeholder:text-foreground/70 w-full">
                          <SelectValue
                            placeholder={
                              type === "addMoney"
                                ? "Select where from add money."
                                : "Select where to withdraw money."
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Bank">Bank</SelectItem>
                        {type === "addMoney" && (
                          <SelectItem value="Card">Card</SelectItem>
                        )}
                        <SelectItem value="bKash">bKash</SelectItem>
                        <SelectItem value="Nagad">Nagad</SelectItem>
                        <SelectItem value="Rocket">Rocket</SelectItem>
                        <SelectItem value="Other MFS">Other MFS</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription className="sr-only">
                      {type === "addMoney"
                        ? "Select where from you want to add money."
                        : "Select where to you want to withdraw money."}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full text-lg py-6 rounded-xl bg-gradient-to-bl from-rose-500 via-violet-500 to-indigo-500 text-white hover:from-rose-600 hover:via-violet-600 hover:to-indigo-600 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {isLoading ? "Processing..." : "Add Money"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AddOrWithdrawMoneyForm;
