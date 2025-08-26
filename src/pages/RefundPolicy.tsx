import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const RefundPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-10"
    >
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-4xl font-extrabold flex items-center gap-2">
            <RotateCcw className="h-6 md:h-7 w-6 md:w-7" /> Refund Policy
          </CardTitle>
          <CardDescription className="text-white/80">
            Understand when and how refunds are issued.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 leading-relaxed">
          <h3 className="text-lg md:text-xl font-semibold">Eligibility</h3>
          <p>
            Refunds may be issued for duplicate charges, unauthorized
            transactions, or service errors. You must report refund requests
            within 14 days of the transaction date.
          </p>
          <Separator className="my-2 opacity-50" />
          <h3 className="text-lg md:text-xl font-semibold">Process</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Submit a request via the Contact page with your Transaction ID.
            </li>
            <li>Our team investigates within 3–5 business days.</li>
            <li>
              Approved refunds are processed to the original payment method.
            </li>
          </ul>
          <Separator className="my-2 opacity-50" />
          <h3 className="text-lg md:text-xl font-semibold">Exclusions</h3>
          <p>
            We cannot refund completed transactions resulting from user error
            (e.g., incorrect recipient) unless local laws require otherwise.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RefundPolicy;
