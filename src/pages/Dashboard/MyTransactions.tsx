import TransactionTable from "@/components/modules/Dashboard/Transaction/TransactionTable";
import Loader from "@/components/shared/Loader";
import { useGetMyTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import type {
  ITransaction,
  ITransactionsQueryParams,
} from "@/types/transaction.type";
import type { IUser } from "@/types/user.type";
import { useEffect, useState } from "react";

const MyTransactions = () => {
  const [queryParams, setQueryParams] = useState<ITransactionsQueryParams>({
    page: 1,
    limit: 10,
  });

  const { data: userData, isLoading: isUserLoading } = useUserInfoQuery(null);
  const user = userData?.data as IUser;

  const {
    data: transactionsData,
    isLoading: isTransactionLoading,
    refetch,
  } = useGetMyTransactionsQuery(queryParams as Record<string, string>);
  const transactions = transactionsData?.data as ITransaction[];

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  if (isUserLoading || isTransactionLoading) {
    return <Loader />;
  }

  return (
    <TransactionTable
      transactions={transactions}
      setQueryParams={setQueryParams}
      user={user}
    />
  );
};

export default MyTransactions;
