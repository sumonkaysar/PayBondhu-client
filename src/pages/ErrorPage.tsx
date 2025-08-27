import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-6" />
      <h1 className="text-4xl font-bold mb-3 text-red-600">
        Something Went Wrong
      </h1>
      <p className="text-muted-foreground max-w-md mb-6">
        We're sorry, but an unexpected error occurred. Please try again later or
        return to the Home.
      </p>
      <div className="flex gap-4">
        <Button variant="default" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
