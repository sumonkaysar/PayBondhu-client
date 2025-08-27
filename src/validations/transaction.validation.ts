import { z } from "zod";

const getAmountZodSchema = () =>
  z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Amount is required"
        : typeof issue.input !== "number"
        ? "Amount must be a number"
        : Number(issue.input) < 0
        ? "Amount must be a positive number"
        : "",
  });

const getTransactionZodSchema = (isAgent = false) =>
  z.object({
    receiver: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? `${isAgent ? "Agent" : "Reciever"} phone number is required`
            : `${isAgent ? "Agent" : "Reciever"} phone number must be string`,
      })
      .regex(/^(\+8801[3-9]\d{8}|01[3-9]\d{8})$/, {
        error:
          "Invalid format for Bangladeshi phone number (+8801xxxxxxxxx or 01xxxxxxxxx)",
      }),
    amount: getAmountZodSchema(),
  });

export const addOrWithdrawMoneyZodSchema = z.object({
  through: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Through is required"
        : "Through must be string",
  }),
  amount: getAmountZodSchema(),
});

export const transactionZodSchema = getTransactionZodSchema();

export const sendMoneyZodSchema = getTransactionZodSchema();

export const cashInZodSchema = getTransactionZodSchema();

export const cashOutZodSchema = getTransactionZodSchema(true);
