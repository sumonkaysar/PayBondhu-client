import SendOrCashInOrCashOut from "@/components/modules/Dashboard/Transaction/SendOrCashInOrCashOut";
import { TransactionType } from "@/consts/transaction.const";
import { useSendMoneyMutation } from "@/redux/features/transaction/transaction.api";
import type { IErrorResponse } from "@/types";
import type { TTransactionType } from "@/types/transaction.type";
import { sendMoneyZodSchema } from "@/validations/transaction.validation";
import { toast } from "sonner";
import type z from "zod";

const SendMoney = () => {
  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const handleSend = async (data: z.infer<typeof sendMoneyZodSchema>) => {
    const toastId = toast.error("Processing...");

    try {
      const res = await sendMoney(data).unwrap();
      toast.success(res.message);
    } catch (err: unknown) {
      const error = err as IErrorResponse;
      toast.error(error.data?.message, { id: toastId });
    }
  };

  return (
    <SendOrCashInOrCashOut
      onSubmit={handleSend}
      isLoading={isLoading}
      type={TransactionType.SEND_MONEY as TTransactionType}
      zodSchema={sendMoneyZodSchema}
    />
  );
};

export default SendMoney;
