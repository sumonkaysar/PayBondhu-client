import Loader from "@/components/shared/Loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import { useGetMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import { CircleDotIcon, Wallet, XCircle } from "lucide-react";
import { Link } from "react-router";

const WalletPage = () => {
  const { data: userData } = useUserInfoQuery(null);
  const user = userData?.data;

  const { data: myWalletData, isLoading } = useGetMyWalletQuery(null);
  const myWallet = myWalletData?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <Card className="shadow-lg">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Wallet className="w-6 h-6 text-green-500" />
            My Wallet
          </CardTitle>
          <Badge
            variant={myWallet?.isBlocked ? "destructive" : "default"}
            className="text-white"
          >
            {myWallet?.isBlocked ? (
              <>
                <XCircle />
                Blocked
              </>
            ) : (
              <>
                <CircleDotIcon />
                Active
              </>
            )}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Wallet ID</p>
              <p className="font-medium">{myWallet?._id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Owner</p>
              <p className="font-medium">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{user?.phoneNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium">{user?.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Balance</p>
              <p className="font-bold text-xl">৳ {myWallet?.balance}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="default" className="text-white">
              <Link to="/user/add-money">Add Money</Link>
            </Button>
            <Button variant="outline">
              <Link to="/user/withdraw">Withdraw</Link>
            </Button>
            <Button variant="outline">
              <Link to="/user/send-money">Send Money</Link>
            </Button>
            <Button variant="outline">
              <Link to="/user/cash-out">Cash Out</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletPage;
