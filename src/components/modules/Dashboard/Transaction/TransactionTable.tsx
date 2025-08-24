import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TransactionStatus,
  TransactionTabs,
  TransactionType,
} from "@/consts/transaction.const";
import type {
  ITransaction,
  ITransactionsQueryParams,
  TTransactionStatus,
  TTransactionType,
} from "@/types/transaction.type";
import type { IUser } from "@/types/user.type";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { motion } from "framer-motion";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  Download,
  HandCoins,
  Send,
  Wallet,
} from "lucide-react";
import React, { useState } from "react";

dayjs.extend(advancedFormat);

interface IProps {
  transactions: ITransaction[];
  setQueryParams: React.Dispatch<
    React.SetStateAction<ITransactionsQueryParams>
  >;
  user: IUser;
}

const getIcon = (type: TTransactionType) => {
  switch (type) {
    case TransactionType.SEND_MONEY:
      return <Send className="h-5 w-5 text-blue-600 dark:text-blue-500" />;
    case TransactionType.CASH_IN:
      return <Wallet className="h-5 w-5 text-green-600 dark:text-green-500" />;
    case TransactionType.CASH_OUT:
      return (
        <HandCoins className="h-5 w-5 text-orange-600 dark:text-orange-500" />
      );
    case TransactionType.ADD_MONEY:
      return (
        <Download className="h-5 w-5 text-purple-600 dark:text-purple-500" />
      );
    case TransactionType.WITHDRAW:
      return (
        <Download className="h-5 w-5 text-purple-600 dark:text-purple-500" />
      );
    default:
      return <Send className="h-5 w-5" />;
  }
};

const getStatusBadge = (status: TTransactionStatus) => {
  switch (status) {
    case TransactionStatus.PENDING:
      return (
        <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
          {status}
        </Badge>
      );
    case TransactionStatus.COMPLETED:
      return (
        <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
          {status}
        </Badge>
      );
    case TransactionStatus.REVERSED:
      return (
        <Badge className="bg-red-500/20 text-red-700 dark:text-red-300">
          {status}
        </Badge>
      );
    default:
      return <Badge className="bg-gray-300 text-gray-800">{status}</Badge>;
  }
};

const TransactionTable = ({ transactions, setQueryParams, user }: IProps) => {
  const [sortAsc, setSortAsc] = useState(false);
  const [search, setSearch] = useState("");

  const handleTabChange = (val: string) => {
    if (val !== "all") {
      setQueryParams((prevQuery) => ({ ...prevQuery, type: val }));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setQueryParams(({ type, ...restQuery }) => {
        return restQuery;
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto w-11/12 py-8"
    >
      <Card className="bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl text-white">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
            My Transactions
          </CardTitle>
          <div className="flex gap-3">
            <Input
              placeholder="Search by ID..."
              className="w-48 text-black dark:text-white bg-white/80 dark:bg-white/10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30"
                >
                  {sortAsc ? (
                    <ArrowUpAZ className="h-5 w-5" />
                  ) : (
                    <ArrowDownAZ className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortAsc(true)}>
                  Sort by Amount ↑
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortAsc(false)}>
                  Sort by Amount ↓
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={handleTabChange}>
            <TabsList className="grid grid-cols-6 w-full">
              {TransactionTabs.map((tab, i) => (
                <React.Fragment key={i}>
                  {tab.requiredRoles.includes(user?.role as string) && (
                    <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
                  )}
                </React.Fragment>
              ))}
            </TabsList>
          </Tabs>
          <div className="mt-6 space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Type</TableHead>
                  <TableHead className="font-bold">From</TableHead>
                  <TableHead className="font-bold">To</TableHead>
                  <TableHead className="font-bold">Amount</TableHead>
                  <TableHead className="font-bold">Fee</TableHead>
                  <TableHead className="font-bold">Commission</TableHead>
                  <TableHead className="font-bold">Date</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions?.map((tx) => (
                  <TableRow key={tx?._id}>
                    <TableCell className="flex items-center gap-5 text-gray-800 dark:text-gray-300">
                      {getIcon(tx.type)}

                      <p className="font-semibold capitalize mb-1">{tx.type}</p>
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      {tx.type === TransactionType.ADD_MONEY
                        ? tx.through
                        : tx.sender.phoneNumber}
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      {tx.type === TransactionType.WITHDRAW
                        ? tx.through
                        : tx.receiver.phoneNumber}
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      <p className="font-bold">
                        ৳ {tx.amount.toLocaleString()}
                      </p>
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      fee
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      Commission
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      {dayjs(tx.createdAt).format("Do MMM YYYY")}
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      {getStatusBadge(tx.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {transactions?.length === 0 && (
              <p className="text-center text-foreground dark:text-white/70 mt-6">
                No transactions found
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TransactionTable;
