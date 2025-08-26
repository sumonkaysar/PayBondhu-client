import Loader from "@/components/shared/Loader";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePagination } from "@/hooks/use-pagination";
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";
import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";
import { useState } from "react";

export const AllWallets = () => {
  const { data: walletsData, isLoading } = useGetAllWalletsQuery(null);
  const wallets = walletsData?.data;

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage: walletsData?.meta?.page as number,
    totalPages: walletsData?.meta?.totalPage as number,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-11/12 max-w-6xl mx-auto py-6"
    >
      <Card className="bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl text-white">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">All Wallets</CardTitle>
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Search wallets..."
              className="bg-white/80 dark:bg-white/10 text-black dark:text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Select
              defaultValue={itemsPerPage.toString()}
              onValueChange={(val) => setItemsPerPage(Number(val))}
            >
              <SelectTrigger className="w-[90px] bg-white/10">
                <SelectValue placeholder="Rows" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wallets?.map((wallet) => (
                <TableRow key={wallet._id}>
                  <TableCell className="w-fit">{wallet._id}</TableCell>
                  <TableCell>{wallet.user?.name}</TableCell>
                  <TableCell>{wallet.user?.role}</TableCell>
                  <TableCell>{wallet.balance.toLocaleString()}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        wallet.isBlocked
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {wallet.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            {showLeftEllipsis && <span className="px-2">...</span>}
            {pages.map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "secondary"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            {showRightEllipsis && <span className="px-2">...</span>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
