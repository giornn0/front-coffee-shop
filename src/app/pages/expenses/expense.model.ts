import { ExpenseOption, PaymentMethod } from 'src/app/constants/enums';

export interface ExpenseForm {
  payment_method: PaymentMethod;
  subject: ExpenseOption;
  description?: string;
  amount: number;
}

export interface Expense extends ExpenseForm {
  id: string;
  balance_id?: string;
  user_id: number;
}
