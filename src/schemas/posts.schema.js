import { z } from "zod";

const postSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    user_id: z.number().positive("User ID must be a positive integer"),
  }),
});

export default postSchema;
