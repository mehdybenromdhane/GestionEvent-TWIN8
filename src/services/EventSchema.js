import { z } from "zod";

 
export const eventSchema = z.object({
  name: z.string().min(3, 'Le nom est requis'),
});