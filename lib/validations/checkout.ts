import { z } from 'zod';

export const checkoutSchema = z.object({
  phone: z.string().min(6),
  address: z.string().min(8),
  notes: z.string().optional(),
  callbackTime: z.string().optional()
});
