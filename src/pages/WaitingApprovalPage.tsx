import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router";

const WaitingApprovalPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <Clock className="w-24 h-24 text-blue-500 mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold mb-3 text-blue-600">
        Waiting for Approval
      </h1>
      <p className="text-muted-foreground max-w-md mb-6">
        Your account has been created successfully, but you can’t access the
        dashboard yet. Please wait until an admin approves your account.
      </p>
      <div className="flex gap-4">
        <Button variant="default" onClick={() => navigate("/")}>
          Go to Home
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Refresh Status
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-6">
        If you think this is taking too long, please contact support.
      </p>
    </div>
  );
};

export default WaitingApprovalPage;
