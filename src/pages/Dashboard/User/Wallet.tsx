import DashboardLoader from "@/components/shared/DasboardLoader/DashboardLoader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionStatus, TransactionType } from "@/consts/transaction.const";
import { useGetMyTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import {
  useGetUserStatsQuery,
  useUserInfoQuery,
} from "@/redux/features/user/user.api";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  History,
  Send,
  Wallet,
} from "lucide-react";
import { Link } from "react-router";

export default function WalletPage() {
  const { data: userData, isLoading: isUserLoading } = useUserInfoQuery(null);
  const user = userData?.data;

  const { data: userStatsData, isLoading: isUserStatsLoading } =
    useGetUserStatsQuery(null);
  const userStats = userStatsData?.data;

  const { data: transactionsData, isLoading: isTransactionsLoading } =
    useGetMyTransactionsQuery({ limit: 5 });
  const transactions = transactionsData?.data || [];

  if (isUserLoading || isUserStatsLoading || isTransactionsLoading) {
    return <DashboardLoader />;
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card
          className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl rounded-2xl"
          id="dashboard-stats"
        >
          <CardHeader>
            <CardTitle className="text-lg md:text-2xl flex items-center gap-2">
              <Wallet className="w-7 h-7" />
              My Wallet
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>
              <p className="md:text-lg text-gray-200">Available Balance</p>
              <h1 className="text-2xl md:text-4xl font-bold mt-1">
                ৳{user?.wallet?.balance || 0}
              </h1>
            </div>
            <Avatar className="w-20 h-20 border-4 border-white shadow-md">
              <AvatarFallback className="bg-transparent text-2xl font-bold">
                {user?.name
                  ?.split(" ")
                  ?.map((n) => n.charAt(0)?.toUpperCase()) || "U"}
              </AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>
        <div className="grid sm:grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="h-24 shadow-md border hover:scale-105 transition-all rounded-xl p-0"
          >
            <Link
              to="/user/add-money"
              className="h-full w-full flex flex-col gap-2 justify-center items-center text-center"
            >
              <ArrowDownCircle className="w-7 h-7 text-green-500" />
              Deposit Money
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-24 shadow-md border hover:scale-105 transition-all rounded-xl p-0"
          >
            <Link
              to="/user/withdraw-money"
              className="h-full w-full flex flex-col gap-2 justify-center items-center text-center"
            >
              <ArrowUpCircle className="w-7 h-7 text-red-500" />
              Withdraw Money
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-24 shadow-md border hover:scale-105 transition-all rounded-xl p-0"
          >
            <Link
              to="/user/send-money"
              className="h-full w-full flex flex-col gap-2 justify-center items-center text-center"
            >
              <Send className="w-7 h-7 text-blue-500" />
              Send Money
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-center sm:text-left">
          <Card className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-400 dark:to-green-700 border border-green-200 dark:border-green-500 shadow-sm p-8 sm:p-5 gap-2 sm:gap-6">
            <p className="text-gray-500 dark:text-foreground">Total Deposits</p>
            <h2 className="text-lg md:text-2xl font-bold text-green-700 dark:text-white">
              ৳{userStats?.totalDeposits || 0}
            </h2>
          </Card>
          <Card className="rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-400 dark:to-red-700 border border-red-200 dark:border-red-500 shadow-sm p-8 sm:p-5 gap-2 sm:gap-6">
            <p className="text-gray-500 dark:text-foreground">
              Total Withdrawals
            </p>
            <h2 className="text-lg md:text-2xl font-bold text-red-700 dark:text-white">
              ৳{userStats?.totalWithdrawals || 0}
            </h2>
          </Card>
          <Card className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-400 dark:to-blue-700 border border-blue-200 dark:border-blue-500 shadow-sm p-8 sm:p-5 gap-2 sm:gap-6">
            <p className="text-gray-500 dark:text-foreground">Total Sent</p>
            <h2 className="text-lg md:text-2xl font-bold text-blue-700 dark:text-white">
              {userStats?.totalTransactions || 0}
            </h2>
          </Card>
        </div>
        <Card className="shadow-md rounded-2xl min-w-[300px]">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <History className="w-5 h-5 text-gray-600" />
              Recent Transactions
            </CardTitle>
            <Button variant="link" className="text-blue-600 text-sm">
              <Link to={`/${user?.role.toLowerCase()}/my-transactions`}>
                View All
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {transactions?.length > 0 ? (
              <div className="divide-y">
                {transactions.map((txn) => (
                  <div
                    key={txn._id}
                    className="grid grid-cols-2 sm:grid-cols-[1fr_1fr_100px] items-center py-3"
                  >
                    <div>
                      <p className="font-medium text-gray-800 dark:text-foreground">
                        {txn.type}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(txn.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right sm:text-left">
                      <p
                        className={`font-semibold ${
                          txn.type === TransactionType.ADD_MONEY ||
                          txn.type === TransactionType.CASH_IN
                            ? "text-green-600 dark:text-green-500"
                            : txn.type === TransactionType.WITHDRAW ||
                              txn.type === TransactionType.CASH_OUT ||
                              txn.type === TransactionType.SEND_MONEY
                            ? "text-red-600 dark:text-red-500"
                            : "text-blue-600 dark:text-blue-500"
                        }`}
                      >
                        {txn.type === TransactionType.ADD_MONEY ||
                        txn.type === TransactionType.CASH_IN
                          ? "+"
                          : "-"}
                        ৳{txn.amount}
                      </p>
                    </div>
                    <div>
                      <Badge
                        className="text-white"
                        variant={
                          txn.status === TransactionStatus.COMPLETED
                            ? "default"
                            : txn.status === TransactionStatus.PENDING
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {txn.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-6">
                No recent transactions
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
