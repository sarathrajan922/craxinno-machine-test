
import { z } from "zod";


export const userInfoSchema = z.object({
    email: z.string().email({ message: "An email is required!" }),
    mobile: z
      .string()
      .min(10, { message: "Mobile number must be at least 10 digits long" }).max(10, {message:"Mobile number should be 10 digits only"})
      .refine((value) => /^\d+$/.test(value), {
        message: "Mobile number must contain only digits",
      }),
    conformPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .refine((value) => /[A-Z]/.test(value) && /\d/.test(value), {
        message:
          "Password must contain at least one uppercase letter and one number",
      }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .refine((value) => /[A-Z]/.test(value) && /\d/.test(value), {
        message:
          "Password must contain at least one uppercase letter and one number",
      }),
  });
