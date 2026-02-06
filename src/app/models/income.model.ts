export type Category = 'salary' | 'freelance' | 'bonus' | 'investment';

export interface Income {
  id: string;
  amount: number;
  category: Category;
  description: string;
  date: string;
}
