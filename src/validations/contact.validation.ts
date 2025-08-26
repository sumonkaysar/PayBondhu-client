import z from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Name is required"
          : "Name must be a string",
    })
    .nonempty("Name can't be blank")
    .min(2, "Name must be at least 2 characters long."),
  email: z.email("Enter a valid email"),
  subject: z
    .string("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  message: z
    .string("Message is required")
    .min(10, "Tell us a bit more (min 10 chars)"),
});
