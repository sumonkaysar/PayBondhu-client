import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z.string("Phone number is required"),
  password: z.string("Password is required"),
});

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "Old password is required"
            : "Old password must be a string",
      })
      .nonempty("Old password can't be blank"),
    newPassword: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "New password is required"
            : "New password must be a string",
      })
      .nonempty("New password can't be blank")
      .min(8, { message: "New password must be at least 8 characters long" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, {
        message:
          "New password must include at least 1 uppercase, 1 lowercase, and 1 special character (! @ # $ % ^ & *)",
      }),
    confirmPassword: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "Confirm password is required"
            : "Confirm password must be a string",
      })
      .nonempty("Confirm password can't be blank"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Confirm password do not match",
    path: ["confirmPassword"],
  });
