export type ExpenseType = '';

export interface Expense {
  id: string;
  amount: number;
  type: ExpenseType;
  description: string;
}
