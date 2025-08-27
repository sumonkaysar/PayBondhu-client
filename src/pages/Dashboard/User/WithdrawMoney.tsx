import AddOrWithdrawMoneyForm from "@/components/modules/Dashboard/Transaction/AddOrWithdrawMoneyForm";
import { useWithdrawMoneyMutation } from "@/redux/features/transaction/transaction.api";
import type { IErrorResponse } from "@/types";
import type { addOrWithdrawMoneyZodSchema } from "@/validations/transaction.validation";
import { toast } from "sonner";
import type z from "zod";

const WithdrawMoney = () => {
  const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();

  const handleWithdrawMoney = async (
    data: z.infer<typeof addOrWithdrawMoneyZodSchema>
  ) => {
    const toastId = toast.loading("Processing...");
    try {
      const res = await withdrawMoney({
        through: data.through,
        amount: Number(data.amount),
      }).unwrap();
      toast.success(res.message, { id: toastId });
    } catch (err: unknown) {
      const error = err as IErrorResponse;
      toast.error(error.data?.message, { id: toastId });
    }
  };

  return (
    <AddOrWithdrawMoneyForm
      onSubmit={handleWithdrawMoney}
      isLoading={isLoading}
      type="withdraw"
    />
  );
};

export default WithdrawMoney;
