import Loader from "@/components/shared/Loader";
import PaginationCard from "@/components/shared/PaginationCard";
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
import { WalletTabs } from "@/consts/wallet.const";
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";
import type { IMeta } from "@/types";
import type { IWallet, IWalletsQueryParams } from "@/types/wallet.type";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { motion } from "framer-motion";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";

dayjs.extend(advancedFormat);

const AllWallets = () => {
  const [search, setSearch] = useState("");
  const [findID, setFindID] = useState("");
  const [queryParams, setQueryParams] = useState<IWalletsQueryParams>({
    page: 1,
    limit: 10,
  });
  const {
    data: walletsData,
    isLoading,
    refetch,
  } = useGetAllWalletsQuery(queryParams);

  const wallets = walletsData?.data as IWallet[];
  const walletMeta = walletsData?.meta as IMeta;

  const handleTabChange = (val: string) => {
    if (val !== "all") {
      setQueryParams(
        (prevQuery) => ({ ...prevQuery, role: val } as IWalletsQueryParams)
      );
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setQueryParams(({ role, ...restQuery }) => restQuery);
    }
  };

  const handleSorting = (val: string) => {
    handleQuery({ sort: val });
  };

  const handleSearching = (val: string) => {
    setSearch(val);
    handleQuery({ searchTerm: val });
  };

  const handleQuery = (newQuery: Record<string, string>) => {
    setFindID("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setQueryParams(({ _id, ...restQuery }) => {
      return { ...restQuery, ...newQuery };
    });
  };

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto w-11/12 pt-8"
      >
        <Card className="bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 shadow-xl rounded-2xl text-white min-h-[calc(100vh_-350px)] lg:min-h-[calc(100vh_-230px)] w-full">
          <CardHeader className="block lg:flex md:justify-between items-center text-center">
            <CardTitle className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
              All Wallets
            </CardTitle>
            <div className="flex flex-col-reverse sm:flex-row gap-3 mt-4 lg:mt-0">
              <Input
                placeholder="Find by ID"
                className="lg:w-48 text-black dark:text-white bg-white/80 dark:bg-white/10"
                value={findID}
                onChange={(e) => setFindID(e.target.value)}
                onBlur={(e) => setQueryParams({ _id: e.target.value })}
              />
              <Input
                placeholder="Search by owner name"
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
                  <DropdownMenuItem onClick={() => handleSorting("createdAt")}>
                    Sort by Date ↑
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSorting("-createdAt")}>
                    Sort by Date ↓
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSorting("balance")}>
                    Sort by Balance ↑
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSorting("-balance")}>
                    Sort by Balance ↓
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={handleTabChange}>
              <TabsList className="grid grid-cols-3 w-full">
                {WalletTabs.map((tab, i) => (
                  <TabsTrigger key={i} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div className="mt-6 space-y-4 lg:w-full md:w-[calc(100vw_-_410px)] mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">ID</TableHead>
                    <TableHead className="font-bold">Owner</TableHead>
                    <TableHead className="font-bold">Role</TableHead>
                    <TableHead className="font-bold">Balance</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                    <TableHead className="font-bold">Created</TableHead>
                    <TableHead className="fonte-bold text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {wallets?.map((wallet) => (
                    <TableRow key={wallet._id}>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {wallet._id}
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {wallet.user?.name}
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {wallet.user?.role}
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        ৳ {wallet.balance.toFixed(2).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={` ${
                            wallet.isBlocked
                              ? "bg-red-500 dark:bg-red-500/20 text-white dark:text-red-400 "
                              : "bg-green-600 dark:bg-green-500/20 text-white dark:text-green-400"
                          }`}
                        >
                          {wallet.isBlocked ? "Blocked" : "Active"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {dayjs(wallet.createdAt).format("Do MMM YYYY")}
                      </TableCell>
                      <TableCell className="text-right w-10">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 text-gray-800 dark:text-gray-300"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500">
                              Block
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {wallets?.length === 0 && (
                <p className="text-center text-foreground dark:text-white/70 mt-6">
                  No wallets found
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-11/12"
      >
        <Card className="bg-gradient-to-br  from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 shadow-xl rounded-2xl dark:text-white py-2">
          <CardContent>
            <PaginationCard
              currentPage={walletMeta?.page}
              totalPages={walletMeta?.totalPage}
              paginationItemsToDisplay={walletMeta?.limit}
              setQueryParams={setQueryParams}
            />
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AllWallets;
