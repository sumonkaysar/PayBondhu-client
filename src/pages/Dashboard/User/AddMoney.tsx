import AddOrWithdrawMoneyForm from "@/components/modules/Dashboard/Transaction/AddOrWithdrawMoneyForm";
import { useAddMoneyMutation } from "@/redux/features/transaction/transaction.api";
import { addOrWithdrawMoneyZodSchema } from "@/validations/transaction.validation";
import { toast } from "sonner";
import type z from "zod";

const AddMoney = () => {
  const [addMoney, { isLoading }] = useAddMoneyMutation();

  const handleAddMoney = async (
    data: z.infer<typeof addOrWithdrawMoneyZodSchema>
  ) => {
    const toastId = toast.error("Processing...");
    try {
      const res = await addMoney(data).unwrap();
      toast.success(res.message, { id: toastId });
    } catch (err: any) {
      toast.error(err.data?.message, { id: toastId });
    }
  };

  return (
    <AddOrWithdrawMoneyForm onSubmit={handleAddMoney} isLoading={isLoading} />
  );
};

export default AddMoney;
