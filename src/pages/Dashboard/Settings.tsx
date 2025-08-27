"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PasswordInput from "@/components/ui/passwordInput";
import useGuideTour from "@/hooks/useGuideTour";
import { useChangePasswordMutation } from "@/redux/features/auth/auth.api";
import { changePasswordSchema } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const Settings = () => {
  const { restartTour } = useGuideTour();
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof changePasswordSchema>) => {
    const toastId = toast.loading("Changing...");
    try {
      const res = await changePassword(data).unwrap();

      if (res.success) {
        console.log(res.data);
        toast.success(res.message, { id: toastId });
        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId });
      console.error(error);
    }
  };

  const handleRestartTour = () => {
    restartTour();
    toast.success("Guided tour will start next time!");
  };

  return (
    <div className="max-w-2xl w-full mx-auto py-8 px-4 space-y-8">
      <Card className="bg-gradient-to-br  from-green-100 via-emerald-200 to-teal-300 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 shadow-xl rounded-2xl dark:text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl className="border-gray-400">
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter your old password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl className="border-gray-400">
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter a new password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl className="border-gray-400">
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Confirm your new password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white cursor-pointer"
              >
                {isLoading ? "Updating..." : "Update Password"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br  from-green-100 via-emerald-200 to-teal-300 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 shadow-xl rounded-2xl dark:text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Guided Tour</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to restart the guided tour and see the onboarding steps again?
          </p>
          <Button
            onClick={handleRestartTour}
            variant="default"
            className="text-white  cursor-pointer"
          >
            Restart Guided Tour
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default Settings;
