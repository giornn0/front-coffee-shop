import { Expense } from '../expenses/expense.model';
import { Sale } from '../sales/sales.model';

export interface BalanceForm {
  start_amount: number;
}

export interface Balance extends BalanceForm {
  id: string;
  date: Date;
  user_id: number;
  close_amount: number;
  sales?: Array<Sale>;
  expenses?: Array<Expense>;
  current_value: number;
}
