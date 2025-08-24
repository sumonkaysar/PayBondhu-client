import SendOrCashInOrCashOut from "@/components/modules/Dashboard/Transaction/SendOrCashInOrCashOut";
import { TransactionType } from "@/consts/transaction.const";
import { useCashOutMutation } from "@/redux/features/transaction/transaction.api";
import type { IErrorResponse } from "@/types";
import type { TTransactionType } from "@/types/transaction.type";
import { cashOutZodSchema } from "@/validations/transaction.validation";
import { toast } from "sonner";
import type z from "zod";

const CashOut = () => {
  const [cashOut, { isLoading }] = useCashOutMutation();

  const handleCashOut = async (data: z.infer<typeof cashOutZodSchema>) => {
    const toastId = toast.error("Processing...");

    try {
      const res = await cashOut(data).unwrap();
      toast.success(res.message);
    } catch (err: unknown) {
      const error = err as IErrorResponse;
      toast.error(error.data?.message, { id: toastId });
    }
  };

  return (
    <SendOrCashInOrCashOut
      onSubmit={handleCashOut}
      isLoading={isLoading}
      type={TransactionType.CASH_OUT as TTransactionType}
      zodSchema={cashOutZodSchema}
    />
  );
};

export default CashOut;
