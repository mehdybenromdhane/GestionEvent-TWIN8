import { z } from 'zod';
 
export const  eventSchema = z.object({
  name: z.string().min(3, 'le nom est requis'),

  description : z.string().startsWith("event", { message: "description Must start with event" }),

  price : z.coerce.number().gt(100,"price must be > 100"),

  nbTickets : z.coerce.number().lt(10, "number of tickets must be < 10"),

  img: z
  .any()

    .refine((file) => file?.length !== 0, "File is required")

  })
