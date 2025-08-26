import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactUsMutation } from "@/redux/features/user/user.api";
import { contactSchema } from "@/validations/contact.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const Contact = () => {
  const [contactUs, { isLoading }] = useContactUsMutation();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const toastId = toast.loading("Sending...");
    try {
      const res = await contactUs(data).unwrap();
      if (res.success) {
        toast.success(res.message, { id: toastId });
        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-10"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-primary">
          Contact Us
        </h2>
        <Card className="bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 dark:text-white rounded-2xl shadow-xl mt-8 mb-10">
          <CardHeader>
            <CardTitle className="text-lg md:text-2xl font-extrabold flex items-center gap-2 text-neutral-700 dark:text-foreground">
              <Mail className="h-6 md:h-7 w-6 md:w-7" /> Send Message
            </CardTitle>
            <CardDescription className="text-neutral-600 dark:text-gray-400">
              We usually reply within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="bg-white/90 dark:bg-white/10 text-black dark:text-white"
                              placeholder="Your Name"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="sr-only">
                            Enter your name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="bg-white/90 dark:bg-white/10 text-black dark:text-white"
                              type="email"
                              placeholder="you@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="sr-only">
                            Enter your email
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white/90 dark:bg-white/10 text-black dark:text-white"
                            placeholder="Subject"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="sr-only">
                          Enter subject
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message..."
                            className="resize-none bg-white/90 dark:bg-white/10 text-black dark:text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="sr-only">
                          Enter your message
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    // disabled={isSubmitting}
                    className="text-primary dark:text-white bg-white/90 hover:bg-white/80 dark:bg-primary dark:hover:bg-primary/90 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />{" "}
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Contact;
