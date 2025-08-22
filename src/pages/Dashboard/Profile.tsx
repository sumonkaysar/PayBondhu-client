import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetMyTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import { Edit, LogOut, Phone, Shield, User, Wallet } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const { data: userData } = useUserInfoQuery(null);
  const user = userData?.data;

  const { data: transactionsData } = useGetMyTransactionsQuery(null);
  const transactions = transactionsData?.data;

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <Card className="w-full max-w-3xl shadow-xl border rounded-2xl">
        <CardHeader className="flex items-center flex-col gap-2">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`}
            />
            <AvatarFallback className="">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold dark:text-foreground">
            {user?.name}
          </CardTitle>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <Phone className="w-4 h-4" />
            {user?.phoneNumber}
          </p>
          <p className="text-sm text-primary flex items-center gap-1 font-medium">
            <Shield className="w-4 h-4" />
            {user?.role}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-gray-600 font-medium">Full Name</label>
            <div className="flex gap-3 mt-1">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                className="border-gray-900"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleEditToggle}
                className="border-gray-900"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border border-gray-900 rounded-xl bg-gradient-to-tr from-slate-900 to-emerald-900 shadow-sm">
              <div className="flex items-center gap-3">
                <Wallet className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Wallet Balance
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    ৳{user?.wallet?.balance || 0}
                  </h3>
                </div>
              </div>
            </Card>
            <Card className="p-4 border border-gray-900 rounded-xl bg-gradient-to-tr from-slate-900 to-emerald-900 shadow-sm">
              <div className="flex items-center gap-3">
                <User className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Transactions</p>
                  <h3 className="text-xl font-bold text-white">
                    {transactions?.length || 0}
                  </h3>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="flex items-center gap-2 rounded-full px-6 py-2 shadow-md hover:scale-105 transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
