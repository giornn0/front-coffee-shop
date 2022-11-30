import { PaymentMethod } from './enums';

export interface Labeled<T> {
  label: string;
  value: T;
}

export const paymentsFormatter: Array<Labeled<PaymentMethod>> = [
  { label: 'Efectivo', value: PaymentMethod.Cash },
  { label: 'Tarjeta de débito', value: PaymentMethod.DebitCard },
  { label: 'Tarjeta de crédito', value: PaymentMethod.CreditCard },
  { label: 'Mercado pago', value: PaymentMethod.MercadoPago },
];
