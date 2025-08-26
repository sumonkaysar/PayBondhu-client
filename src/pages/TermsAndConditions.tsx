import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Gavel } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-10"
    >
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-4xl font-extrabold flex items-center gap-2">
            <Gavel className="h-6 md:h-7 w-6 md:w-7" /> Terms & Conditions
          </CardTitle>
          <CardDescription className="text-white/80">
            Please read carefully before using the service.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 leading-relaxed">
          <h3 className="text-lg md:text-xl font-semibold">
            1. Acceptance of Terms
          </h3>
          <p>
            By creating an account or using our services, you agree to these
            Terms.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            2. Account & Security
          </h3>
          <p>
            You are responsible for maintaining account security and for all
            activities under your account.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            3. Prohibited Use
          </h3>
          <p>
            No fraudulent, unlawful, or abusive activities. We reserve the right
            to suspend or terminate accounts that violate policies.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">4. Fees</h3>
          <p>
            Fees may apply to certain transactions and are subject to change
            with notice.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            5. Limitation of Liability
          </h3>
          <p>
            We are not liable for indirect or consequential damages to the
            maximum extent permitted by law.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">6. Changes</h3>
          <p>
            We may update these Terms. Continued use constitutes acceptance of
            the updated Terms.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TermsAndConditions;
