/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productCode: string;
  category: string;
  tags?: string[];
  releaseDate: string;
  price: number;
  contactDetails: string;
  phoneNumber: number;
  description: string;
  imageUrl: string;
}

export interface ProductResolved {
  product: Product;
  error?: any;
}
