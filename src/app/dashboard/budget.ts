import { computed, Injectable, signal } from '@angular/core';
import { Income } from '../models/income.model.js';
import { Expense } from '../models/expenses.model.js';

@Injectable({
  providedIn: 'root',
})
export class Budget {
  private incomes = signal<Income[]>([]);
  private expenses = signal<Expense[]>([]);

  allExpenses = computed(() => this.expenses());
  allIncomes = computed(() => this.incomes());
  totalExpenses = computed(() => this.allExpenses().reduce((sum, exp) => sum + exp.amount, 0));
  totalIncomes = computed(() => this.allIncomes().reduce((sum, inc) => sum + inc.amount, 0));

  balance = computed(() => this.totalIncomes() - this.totalExpenses());

  addIncome(income: Income) {
    const newIncome: Income = {
      id: Math.random().toString(),
      amount: income.amount,
      category: income.category,
      description: income.description,
    };
    this.incomes.update((allIncomes) => [...allIncomes, newIncome]);
  }

  addExpense(expense: Expense) {
    const newExpense: Expense = {
      id: Math.random().toString(),
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
    };

    this.expenses.update((allExpenses) => [...allExpenses, newExpense]);
  }
}
