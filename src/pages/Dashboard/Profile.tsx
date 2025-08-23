import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetUserStatsQuery,
  useUserInfoQuery,
} from "@/redux/features/user/user.api";
import {
  Activity,
  Calendar,
  Pencil,
  Phone,
  ShieldCheck,
  ShieldUser,
  User,
  Wallet,
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const { data: userData } = useUserInfoQuery(null);
  const user = userData?.data;

  const { data: userStatsData } = useGetUserStatsQuery(null);
  const userStats = userStatsData?.data;

  const [formData, setFormData] = useState({
    name: user?.name,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card className="bg-gradient-to-r to-indigo-600 from-purple-600 text-white shadow-xl rounded-2xl">
          <CardContent className="flex items-center gap-6 p-6">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarFallback className="bg-transparent text-2xl font-bold">
                {user?.name
                  ?.split(" ")
                  ?.map((n) => n.charAt(0)?.toUpperCase()) || "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <p className="text-gray-200">{user?.phoneNumber}</p>
              <Badge className="mt-2 bg-green-500 text-white shadow-md px-3 py-1 rounded-lg">
                {user?.role}
              </Badge>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-400 dark:to-blue-700 border border-blue-200 dark:border-blue-500 shadow-sm">
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-blue-700" />
              <p className="text-gray-600 dark:text-foreground">
                Wallet Balance
              </p>
            </div>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-white mt-2">
              ৳{user?.wallet?.balance || 0}
            </h2>
          </Card>
          <Card className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-400 dark:to-green-700 border border-green-200 dark:border-green-500 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-700" />
              <p className="text-gray-600 dark:text-foreground">
                Total Deposits
              </p>
            </div>
            <h2 className="text-2xl font-bold text-green-700 dark:text-white mt-2">
              ৳{userStats?.totalDeposits || 0}
            </h2>
          </Card>
          <Card className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-400 dark:to-red-700 border border-red-200 dark:border-red-500 shadow-sm">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-700" />
              <p className="text-gray-600 dark:text-foreground">
                Total Transactions
              </p>
            </div>
            <h2 className="text-2xl font-bold text-red-700 dark:text-white mt-2">
              {userStats?.totalTransactions || 0}
            </h2>
          </Card>
        </div>
        <Card className="shadow-md rounded-2xl">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-xl">Personal Information</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="flex items-center gap-2">
                  <Pencil className="w-4 h-4" /> Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <Button className="w-full mt-3">Save Changes</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 mt-3">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-500 dark:text-foreground" />
                <p className="text-gray-800 dark:text-gray-400 font-medium">
                  {user?.name || "Not Available"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ShieldUser className="w-5 h-5 text-gray-500 dark:text-foreground" />
                <p className="text-gray-800 dark:text-gray-400 font-medium">
                  {user?.role}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 dark:text-foreground" />
                <p className="text-gray-800 dark:text-gray-400 font-medium">
                  {user?.phoneNumber}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500 dark:text-foreground" />
                <p className="text-gray-800 dark:text-gray-400 font-medium">
                  Joined on{" "}
                  {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
