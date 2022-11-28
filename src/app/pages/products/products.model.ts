import { CoffeeType } from 'src/app/constants/enums';

export interface ProductForSale {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface Product extends ProductForSale {
  is_coffee: boolean;
  coffe_type?: CoffeeType;
}
