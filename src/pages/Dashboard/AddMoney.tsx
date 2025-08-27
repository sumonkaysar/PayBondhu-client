import AddOrWithdrawMoneyForm from "@/components/modules/Dashboard/Transaction/AddOrWithdrawMoneyForm";
import { useAddMoneyMutation } from "@/redux/features/transaction/transaction.api";
import type { IErrorResponse } from "@/types";
import { addOrWithdrawMoneyZodSchema } from "@/validations/transaction.validation";
import { toast } from "sonner";
import type z from "zod";

const AddMoney = () => {
  const [addMoney, { isLoading }] = useAddMoneyMutation();

  const handleAddMoney = async (
    data: z.infer<typeof addOrWithdrawMoneyZodSchema>
  ) => {
    const toastId = toast.loading("Processing...");
    try {
      const res = await addMoney({
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
      onSubmit={handleAddMoney}
      isLoading={isLoading}
      type="addMoney"
    />
  );
};

export default AddMoney;
