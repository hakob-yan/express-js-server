import { z } from "zod";

const userSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
  }),
});

export default userSchema;
