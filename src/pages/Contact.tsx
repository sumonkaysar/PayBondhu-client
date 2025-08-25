import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Tell us a bit more (min 10 chars)"),
});

type ContactValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactValues) {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact submission", values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto w-11/12 py-10"
    >
      <Card className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold flex items-center gap-2">
            <Mail className="h-7 w-7" /> Contact Us
          </CardTitle>
          <CardDescription className="text-white/80">
            We usually reply within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className="bg-white/90 dark:bg-white/10 text-black dark:text-white"
                />
                {errors.name && (
                  <p className="text-sm text-red-200 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="you@example.com"
                  type="email"
                  {...register("email")}
                  className="bg-white/90 dark:bg-white/10 text-black dark:text-white"
                />
                {errors.email && (
                  <p className="text-sm text-red-200 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Input
                placeholder="Subject"
                {...register("subject")}
                className="bg-white/90 dark:bg-white/10 text-black dark:text-white"
              />
              {errors.subject && (
                <p className="text-sm text-red-200 mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <Textarea
                placeholder="Write your message..."
                rows={6}
                {...register("message")}
                className="bg-white/90 dark:bg-white/10 text-black dark:text-white"
              />
              {errors.message && (
                <p className="text-sm text-red-200 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white/20 hover:bg-white/30 dark:bg-primary dark:hover:bg-primary/90 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 mr-2" />{" "}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitted && (
                <span className="inline-flex items-center text-sm text-green-200">
                  <CheckCircle2 className="h-4 w-4 mr-1" /> Sent! We'll get back
                  to you.
                </span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Contact;
