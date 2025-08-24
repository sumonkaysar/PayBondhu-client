import { Role } from "@/consts/user.const";
import z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "Name is required"
            : "Name must be a string",
      })
      .nonempty("Name can't be blank")
      .min(2, "Name must be at least 2 characters long.")
      .max(50, "Name can't be more than 50 characters."),
    phoneNumber: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "Phone number is required"
            : "Phone number must be a string",
      })
      .nonempty("Phone number can't be blank")
      .regex(/^(\+8801[3-9]\d{8}|01[3-9]\d{8})$/, {
        error:
          "Invalid format for Bangladeshi phone number (+8801xxxxxxxxx or 01xxxxxxxxx)",
      }),
    password: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "Password is required"
            : "Password must be a string",
      })
      .nonempty("Password can't be blank")
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, {
        message:
          "Password must include at least 1 uppercase, 1 lowercase, and 1 special character (! @ # $ % ^ & *)",
      }),
    confirmPassword: z.string({
      error: (issue) =>
        issue.input === undefined
          ? "Confirm password is required"
          : "Confirm password must be a string",
    }),
    role: z.enum(Object.values(Role), {
      error: `Role must be one of: ${Object.values(Role).join(", ")}`,
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password do not match",
    path: ["confirmPassword"],
  });

export const updateUserNameSchema = z.object({
  name: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Name is required"
          : "Name must be a string",
    })
    .nonempty("Name can't be blank")
    .min(2, "Name must be at least 2 characters long.")
    .max(50, "Name can't be more than 50 characters."),
});
