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
      className="container mx-auto py-10 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-primary">
          FAQs
        </h2>
        <Card className="bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 dark:text-white rounded-2xl shadow-xl mt-8 mb-10 mx-0">
          <CardHeader>
            <CardTitle className="text-lg md:text-2xl font-extrabold flex items-center gap-2 text-neutral-700 dark:text-foreground">
              <HelpCircle className="h-6 md:h-7 w-6 md:w-7" /> Frequently Asked
              Questions
            </CardTitle>
            <CardDescription className="text-neutral-600 dark:text-gray-400">
              Quick answers to common questions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>
                  How do I cash in or cash out?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 dark:text-gray-400">
                  Go to the Wallet section and choose <b>Cash In</b> to deposit
                  or <b>Cash Out</b> to withdraw. Follow on-screen steps.
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
                  Approved refunds are usually processed within 5-10 business
                  days, depending on your payment method.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default FAQ;
