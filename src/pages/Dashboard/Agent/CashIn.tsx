import SendOrCashInOrCashOut from "@/components/modules/Dashboard/Transaction/SendOrCashInOrCashOut";
import { TransactionType } from "@/consts/transaction.type";
import { useCashInMutation } from "@/redux/features/transaction/transaction.api";
import type { IErrorResponse } from "@/types";
import type { TTransactionType } from "@/types/transaction.type";
import { cashInZodSchema } from "@/validations/transaction.validation";
import { toast } from "sonner";
import type z from "zod";

const CashIn = () => {
  const [cashIn, { isLoading }] = useCashInMutation();

  const handleCashIn = async (data: z.infer<typeof cashInZodSchema>) => {
    const toastId = toast.error("Processing...");

    try {
      const res = await cashIn(data).unwrap();
      toast.success(res.message);
    } catch (err: unknown) {
      const error = err as IErrorResponse;
      toast.error(error.data?.message, { id: toastId });
    }
  };

  return (
    <SendOrCashInOrCashOut
      onSubmit={handleCashIn}
      isLoading={isLoading}
      type={TransactionType.CASH_IN as TTransactionType}
      zodSchema={cashInZodSchema}
    />
  );
};

export default CashIn;
