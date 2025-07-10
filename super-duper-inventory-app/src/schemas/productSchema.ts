import * as z from 'zod';

export const productSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  price: z.number().min(0.01, 'Price must be greater than 0'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  image: z.string().url('Invalid image URL').min(1, 'Image URL is required'),
  rating: z.object({
    rate: z.number().min(0, 'Rating cannot be less than 0').max(5, 'Rating cannot be greater than 5'),
    count: z.number().int().min(0, 'Count cannot be less than 0'),
  }),
});

export type ProductFormInputs = z.infer<typeof productSchema>;
