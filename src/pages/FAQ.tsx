import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto w-11/12 py-10"
    >
      <Card className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold flex items-center gap-2">
            <HelpCircle className="h-7 w-7" /> FAQs
          </CardTitle>
          <CardDescription className="text-white/80">
            Quick answers to common questions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How do I cash in or cash out?</AccordionTrigger>
              <AccordionContent>
                Go to the Wallet section and choose <b>Cash In</b> to deposit or{" "}
                <b>Cash Out</b> to withdraw. Follow on-screen steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Are my transactions secure?</AccordionTrigger>
              <AccordionContent>
                Yes. We use bank-grade encryption, device fingerprinting, and
                fraud monitoring to protect your funds and data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What are the fees?</AccordionTrigger>
              <AccordionContent>
                Fees vary by transaction type. See the Pricing page for the
                latest fee schedule and subscription tiers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>How long do refunds take?</AccordionTrigger>
              <AccordionContent>
                Approved refunds are usually processed within 5–10 business
                days, depending on your payment method.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FAQ;
