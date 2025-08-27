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
import { Role, UserStatus, UserTabs } from "@/consts/user.const";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import type { IMeta } from "@/types";
import type { IUser, IUsersQueryParams } from "@/types/user.type";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { motion } from "framer-motion";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";

dayjs.extend(advancedFormat);

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [queryParams, setQueryParams] = useState<IUsersQueryParams>({
    page: 1,
    limit: 10,
  });
  const {
    data: usersData,
    isLoading,
    refetch,
  } = useGetAllUsersQuery(queryParams);

  const users = usersData?.data as IUser[];
  const userMeta = usersData?.meta as IMeta;

  const handleTabChange = (val: string) => {
    if (val !== "all") {
      setQueryParams(
        (prevQuery) => ({ ...prevQuery, role: val } as IUsersQueryParams)
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
              All Users
            </CardTitle>
            <div className="flex flex-col-reverse sm:flex-row gap-3 mt-4 lg:mt-0">
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
                  <DropdownMenuItem onClick={() => handleSorting("createdAt")}>
                    Sort by Joined ↑
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSorting("-createdAt")}>
                    Sort by Joined ↓
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={handleTabChange}>
              <TabsList className="grid grid-cols-3 w-full">
                {UserTabs.map((tab, i) => (
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
                    <TableHead className="font-bold">Name</TableHead>
                    <TableHead className="font-bold">Phone</TableHead>
                    <TableHead className="font-bold">Role</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                    <TableHead className="font-bold">Joined</TableHead>
                    <TableHead className="fonte-bold text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users?.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {user.name}
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {user.phoneNumber}
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {user.role}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={` ${
                            user.status === UserStatus.BLOCKED ||
                            user.status === UserStatus.DELETED ||
                            user.status === UserStatus.SUSPENDED
                              ? "bg-red-500 dark:bg-red-500/20 text-white dark:text-red-400 "
                              : user.status === UserStatus.ACTIVE
                              ? "bg-green-600 dark:bg-green-500/20 text-white dark:text-green-400"
                              : user.status === UserStatus.PENDING
                              ? "bg-yellow-600 dark:bg-yellow-500/20 text-white dark:text-yellow-400"
                              : "bg-neutral-600 dark:bg-neutral-500/20 text-white dark:text-neutral-400"
                          }`}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {dayjs(user.createdAt).format("Do MMM YYYY")}
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
                            {user.role == Role.AGENT &&
                              (user.status == UserStatus.PENDING ? (
                                <DropdownMenuItem>Approve</DropdownMenuItem>
                              ) : (
                                user.status == UserStatus.ACTIVE && (
                                  <>
                                    <DropdownMenuItem>Suspend</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                  </>
                                )
                              ))}
                            {user.role == Role.USER &&
                              (user.status == UserStatus.ACTIVE ? (
                                <>
                                  <DropdownMenuItem>Block</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </>
                              ) : (
                                user.status == UserStatus.BLOCKED && (
                                  <DropdownMenuItem>Unblock</DropdownMenuItem>
                                )
                              ))}
                            {user.status == UserStatus.DELETED && (
                              <DropdownMenuItem>Undo Delete</DropdownMenuItem>
                            )}
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
              {users?.length === 0 && (
                <p className="text-center text-foreground dark:text-white/70 mt-6">
                  No users found
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
              currentPage={userMeta?.page}
              totalPages={userMeta?.totalPage}
              paginationItemsToDisplay={userMeta?.limit}
              setQueryParams={setQueryParams}
            />
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AllUsers;
