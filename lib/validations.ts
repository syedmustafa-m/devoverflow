import * as z from "zod";

/**
 * Validation schema for the form.
 */

export const QuestionsSchema = z.object({
  title: z.string().min(5, "Title must be minimum 5 characters").max(130),
  explanation: z.string().min(20, "Explanation must be minimum 20 characters"),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
