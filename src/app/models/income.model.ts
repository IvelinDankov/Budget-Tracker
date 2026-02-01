export type Type = 'salary' | 'freelance' | 'bonus' | 'investment';

export interface Income {
  id: string;
  amount: number;
  type: Type;
  description: string;
}

/
