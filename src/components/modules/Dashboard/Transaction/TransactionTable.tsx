/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Role } from "@/consts/user.const";
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
  ArrowUpDown,
  Banknote,
  Coins,
  HandCoins,
  Send,
  Wallet,
} from "lucide-react";
import React, { useState, type FormEventHandler } from "react";

dayjs.extend(advancedFormat);

interface IProps {
  transactions: ITransaction[];
  setQueryParams: React.Dispatch<
    React.SetStateAction<ITransactionsQueryParams>
  >;
  user: IUser;
  queryParams?: ITransactionsQueryParams;
}

const getIcon = (type: TTransactionType) => {
  switch (type) {
    case TransactionType.SEND_MONEY:
      return <Send className="h-5 w-5 text-blue-600 dark:text-blue-500" />;
    case TransactionType.CASH_IN:
      return (
        <HandCoins className="h-5 w-5 text-green-600 dark:text-green-500" />
      );
    case TransactionType.CASH_OUT:
      return <Coins className="h-5 w-5 text-orange-600 dark:text-orange-500" />;
    case TransactionType.ADD_MONEY:
      return (
        <Banknote className="h-5 w-5 text-purple-600 dark:text-purple-500" />
      );
    case TransactionType.WITHDRAW:
      return <Wallet className="h-5 w-5 text-lime-600 dark:text-lime-500" />;
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

const TransactionTable = ({
  transactions,
  setQueryParams,
  user,
  queryParams,
}: IProps) => {
  const [search, setSearch] = useState("");
  const [findID, setFindID] = useState("");

  const handleTabChange = (val: string) => {
    if (val !== "all") {
      setQueryParams(({ _id, ...restQuery }) => ({ ...restQuery, type: val }));
    } else {
      setQueryParams(({ _id, type, ...restQuery }) => {
        return restQuery;
      });
    }
  };

  const handleQuery = (newQuery: Record<string, string>) => {
    setFindID("");
    setQueryParams(({ _id, ...restQuery }) => {
      return { ...restQuery, ...newQuery };
    });
  };

  const handleFindID: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (findID) {
      return setQueryParams({ _id: findID });
    }
    handleQuery({});
  };

  const handleSorting = (val: string) => {
    handleQuery({ sort: val });
  };

  const handleSearching = (val: string) => {
    setSearch(val);
    handleQuery({ searchTerm: val });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto w-11/12 pt-8"
    >
      <Card className="bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 shadow-xl rounded-2xl text-white min-h-[calc(100vh_-350px)] lg:min-h-[calc(100vh_-230px)] w-full">
        <CardHeader className="block lg:flex md:justify-between items-center text-center">
          <CardTitle className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
            {user?.role === Role.ADMIN ? "Transactions" : "My Transactions"}
          </CardTitle>
          <div className="flex flex-col-reverse sm:flex-row gap-3 mt-4 lg:mt-0">
            {user?.role === Role.ADMIN && (
              <form onSubmit={handleFindID}>
                <Input
                  placeholder="Find by ID"
                  className="lg:w-48 text-black dark:text-white bg-white/80 dark:bg-white/10"
                  value={findID}
                  onChange={(e) => setFindID(e.target.value)}
                />
              </form>
            )}
            <Input
              placeholder="Search..."
              className="lg:w-48 text-black dark:text-white bg-white/80 dark:bg-white/10"
              value={search}
              onChange={(e) => handleSearching(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 cursor-pointer"
                  title="Sort"
                >
                  <ArrowUpDown className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => handleSorting("createdAt")}
                  className={
                    queryParams?.sort === "createdAt" ? "bg-emerald-500" : ""
                  }
                >
                  Sort by Date ↑
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleSorting("-createdAt")}
                  className={
                    !queryParams?.sort || queryParams?.sort === "-createdAt"
                      ? "bg-emerald-500"
                      : ""
                  }
                >
                  Sort by Date ↓
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleSorting("amount")}
                  className={
                    queryParams?.sort === "amount" ? "bg-emerald-500" : ""
                  }
                >
                  Sort by Amount ↑
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleSorting("-amount")}
                  className={
                    queryParams?.sort === "-amount" ? "bg-emerald-500" : ""
                  }
                >
                  Sort by Amount ↓
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleSorting("fee")}
                  className={
                    queryParams?.sort === "fee" ? "bg-emerald-500" : ""
                  }
                >
                  Sort by Fee ↑
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleSorting("-fee")}
                  className={
                    queryParams?.sort === "-fee" ? "bg-emerald-500" : ""
                  }
                >
                  Sort by Fee ↓
                </DropdownMenuItem>
                {user?.role !== Role.USER && (
                  <>
                    <DropdownMenuItem
                      onClick={() => handleSorting("commission")}
                      className={
                        queryParams?.sort === "commission"
                          ? "bg-emerald-500"
                          : ""
                      }
                    >
                      Sort by Commission ↑
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleSorting("-commission")}
                      className={
                        queryParams?.sort === "-commission"
                          ? "bg-emerald-500"
                          : ""
                      }
                    >
                      Sort by Commission ↓
                    </DropdownMenuItem>
                  </>
                )}
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
          <div className="mt-6 space-y-4 xl:w-full md:w-[calc(100vw_-_410px)] mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Type</TableHead>
                  <TableHead className="font-bold">Txn ID</TableHead>
                  <TableHead className="font-bold">From</TableHead>
                  <TableHead className="font-bold">To</TableHead>
                  <TableHead className="font-bold">Amount</TableHead>
                  <TableHead className="font-bold">Fee</TableHead>
                  {user.role !== Role.USER && (
                    <TableHead className="font-bold">Commission</TableHead>
                  )}
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
                      {tx._id.slice(0, 4)}...
                      {tx._id.slice(tx._id.length - 3, tx._id.length)}
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
                      ৳ {tx.amount.toFixed(2).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-gray-800 dark:text-gray-300">
                      ৳ {tx.fee}
                    </TableCell>
                    {user.role !== Role.USER && (
                      <TableCell className="text-gray-800 dark:text-gray-300 pl-5">
                        ৳ {tx.commission}
                      </TableCell>
                    )}
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
