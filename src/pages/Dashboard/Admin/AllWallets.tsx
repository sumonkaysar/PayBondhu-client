import Loader from "@/components/shared/Loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import {
  useGetAllWalletsQuery,
  useUpdateWalletBlockStatusMutation,
} from "@/redux/features/wallet/wallet.api";
import { Ban, CheckCircle } from "lucide-react";

const AllWallets = () => {
  const { data: userData } = useUserInfoQuery(null);
  const role = userData?.data?.role;

  const { data: allWallets, isLoading: allWalletsLoading } =
    useGetAllWalletsQuery({ page: 1, limit: 10 }, { skip: role !== "ADMIN" });

  const [updateWalletStatus] = useUpdateWalletBlockStatusMutation();

  const handleBlockToggle = async (walletId: string, isBlocked: boolean) => {
    await updateWalletStatus({ walletId, data: { isBlocked: !isBlocked } });
  };

  if (allWalletsLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>All Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Owner</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allWallets?.data?.map((wallet: any) => (
                <TableRow key={wallet._id}>
                  <TableCell>{wallet.owner?.name}</TableCell>
                  <TableCell>{wallet.owner?.phoneNumber}</TableCell>
                  <TableCell>{wallet.owner?.role}</TableCell>
                  <TableCell>৳ {wallet.balance}</TableCell>
                  <TableCell>
                    <Badge
                      variant={wallet?.isBlocked ? "destructive" : "default"}
                      className="text-white"
                    >
                      {wallet.isBlocked ? "Blocked" : "Active"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant={wallet.isBlocked ? "default" : "destructive"}
                      size="sm"
                      onClick={() =>
                        handleBlockToggle(wallet._id, wallet.isBlocked)
                      }
                    >
                      {wallet.isBlocked ? (
                        <CheckCircle className="w-4 h-4 mr-1" />
                      ) : (
                        <Ban className="w-4 h-4 mr-1" />
                      )}
                      {wallet.isBlocked ? "Unblock" : "Block"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AllWallets;
