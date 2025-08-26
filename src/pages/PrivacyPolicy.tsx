import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10 px-6"
    >
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-4xl font-extrabold flex items-center gap-2">
            <Shield className="h-6 md:h-7 w-6 md:w-7" /> Privacy Policy
          </CardTitle>
          <CardDescription className="text-white/80">
            Your data, protected with care.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 leading-relaxed">
          <h3 className="text-lg md:text-xl font-semibold">
            Information We Collect
          </h3>
          <p>
            Account details, contact info, device data, and transaction metadata
            for security and service operations.
          </p>
          <Separator className="my-2 opacity-50" />
          <h3 className="text-lg md:text-xl font-semibold">How We Use It</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve the service</li>
            <li>Fraud prevention and security monitoring</li>
            <li>Customer support and communication</li>
          </ul>
          <Separator className="my-2 opacity-50" />
          <h3 className="text-lg md:text-xl font-semibold">Your Rights</h3>
          <p>
            You may access, update, or delete certain personal data, subject to
            legal obligations.
          </p>
          <Separator className="my-2 opacity-50" />
          <h3 className="text-lg md:text-xl font-semibold">Data Security</h3>
          <p>
            We employ encryption in transit and at rest, access controls, and
            routine security reviews.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PrivacyPolicy;
