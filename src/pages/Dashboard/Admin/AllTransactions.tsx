import TransactionTable from "@/components/modules/Dashboard/Transaction/TransactionTable";
import Loader from "@/components/shared/Loader";
import PaginationCard from "@/components/shared/PaginationCard";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import type { IErrorResponse, IMeta } from "@/types";
import type {
  ITransaction,
  ITransactionsQueryParams,
} from "@/types/transaction.type";
import type { IUser } from "@/types/user.type";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AllTransactions = () => {
  const [queryParams, setQueryParams] = useState<ITransactionsQueryParams>({
    page: 1,
    limit: 10,
  });

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUserInfoQuery(null);
  const user = userData?.data as IUser;

  const {
    data: transactionsData,
    isLoading: isTransactionLoading,
    refetch,
    isError: isTransactionsError,
    error: transactionsError,
  } = useGetAllTransactionsQuery(queryParams as Record<string, string>);
  const transactions = transactionsData?.data as ITransaction[];
  const transactionMeta = transactionsData?.meta as IMeta;

  useEffect(() => {
    if (isTransactionsError) {
      switch ((transactionsError as IErrorResponse).data.message) {
        case "Invalid MongoDB ObjectId":
          toast.error("Transactions not found");
          break;
      }
    }
  }, [isTransactionsError, transactionsError]);

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  if (isUserLoading || isTransactionLoading) {
    return <Loader />;
  }

  if (isUserError) {
    return <Loader />;
  }

  return (
    <>
      <TransactionTable
        transactions={transactions}
        setQueryParams={setQueryParams}
        user={user}
        queryParams={queryParams}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-11/12"
      >
        <Card className="bg-gradient-to-br  from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 shadow-xl rounded-2xl dark:text-white py-2">
          <CardContent>
            <PaginationCard
              currentPage={transactionMeta?.page}
              totalPages={transactionMeta?.totalPage}
              paginationItemsToDisplay={transactionMeta?.limit}
              setQueryParams={setQueryParams}
            />
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AllTransactions;
