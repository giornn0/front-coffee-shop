import { PaymentMethod } from 'src/app/constants/enums';

export interface Sale {
  id: string;
  amount: number;
  date: Date;
  pedidos_ya: boolean;
  payment_method: PaymentMethod;
  balance_id?: string;
}

export interface NewSale extends Sale {
  products: Array<ListedProduct>;
}
export type ListedProduct = {
  quantity: number;
  price: number;
  id: string; // product id
};
