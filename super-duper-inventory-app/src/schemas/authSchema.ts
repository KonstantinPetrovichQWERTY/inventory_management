import * as z from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must be longer than 6 symbols'),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
