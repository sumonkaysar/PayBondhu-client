import { Button } from "@/components/ui/button";
import { LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <LockKeyhole className="w-20 h-20 text-yellow-500 mb-6" />
      <h1 className="text-4xl font-bold mb-3 text-yellow-600">
        Unauthorized Access
      </h1>
      <p className="text-muted-foreground max-w-md mb-6">
        You don't have permission to view this page. Please log in with an
        authorized account or return home.
      </p>
      <div className="flex gap-4">
        <Button variant="default" onClick={() => navigate("/login")}>
          Go to Login
        </Button>
        <Button variant="outline" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
