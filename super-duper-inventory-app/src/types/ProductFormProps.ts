import { ProductFormInputs } from "@/schemas/productSchema";

export interface ProductFormProps {
  initialData?: ProductFormInputs;
  productId?: number;
}