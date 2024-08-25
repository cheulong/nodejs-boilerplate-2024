import { z } from "zod";

export const ContactSchema = z.object({
  email: z.string(),
  name: z.string(),
  phone: z.string(),
});
