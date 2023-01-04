import { CoffeeType } from 'src/app/constants/enums';
import { Labeled } from 'src/app/constants/formatters';

export interface ProductForSale {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface Product
  extends ProductForSale {
  is_coffee: boolean;
  coffe_type?: CoffeeType;
}
export const coffeTypes: Array<
  Labeled<CoffeeType>
> = [
    {
      label: 'Negro',
      value: CoffeeType.Black,
    },
    {
      label: 'Latte',
      value: CoffeeType.Latte,
    },
  ];
