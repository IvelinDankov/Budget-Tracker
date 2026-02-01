export type Category =
  | 'food'
  | 'transport'
  | 'shopping'
  | 'bills'
  | 'entertiment'
  | 'phone'
  | 'electricity'
  | 'others';

export interface Expense {
  id: string;
  amount: number;
  category: Category;
  description: string;
}

/* 
  <option value="">Choose...</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="entertainment">Entertainment</option>
          <option value="entertainment">Other</option>
*/
