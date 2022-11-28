import { PaymentMethod } from 'src/app/constants/enums';

export interface Sale {
  id: string;
  total: number;
  date: Date;
  payment_method: PaymentMethod;
}

export interface NewSale extends Sale {
  products: Array<ListedProduct>;
}
export type ListedProduct = {
  quantity: number;
  price: number;
  id: string; // product id
};
