import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Loader2 className="animate-spin w-6 h-6" />
    </div>
  );
};

export default Loader;
