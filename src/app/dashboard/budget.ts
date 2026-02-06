import { computed, effect, Injectable, signal } from '@angular/core';
import { Income } from '../models/income.model.js';
import { Expense } from '../models/expenses.model.js';

@Injectable({
  providedIn: 'root',
})
export class Budget {
  private incomes = signal<Income[]>([]);
  private expenses = signal<Expense[]>([]);

  constructor() {
    this.loadFromStorage();
    effect(() => this.saveToStorage());
  }

  allExpenses = computed(() => this.expenses());
  allIncomes = computed(() => this.incomes());
  totalExpenses = computed(() => this.allExpenses().reduce((sum, exp) => sum + exp.amount, 0));
  totalIncomes = computed(() => this.allIncomes().reduce((sum, inc) => sum + inc.amount, 0));

  balance = computed(() => this.totalIncomes() - this.totalExpenses());

  allTransactions = computed(() => [...this.incomes(), ...this.expenses()]);

  addIncome(income: Income) {
    const newIncome: Income = {
      id: Math.random().toString(),
      amount: income.amount,
      category: income.category,
      description: income.description,
      date: income.date.slice(0, 10),
    };
    this.incomes.update((allIncomes) => [...allIncomes, newIncome]);
  }

  addExpense(expense: Expense) {
    const newExpense: Expense = {
      id: Math.random().toString(),
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
      date: new Date().toISOString().slice(0, 10),
    };

    this.expenses.update((allExpenses) => [...allExpenses, newExpense]);
  }

  private loadFromStorage() {
    const data = localStorage.getItem('budgetData');
    if (data) {
      const { incomes, expenses } = JSON.parse(data);
      this.incomes.set(incomes || []);
      this.expenses.set(expenses || []);
    }
  }

  private saveToStorage() {
    const data = {
      incomes: this.incomes(),
      expenses: this.expenses(),
    };
    localStorage.setItem('budgetData', JSON.stringify(data));
  }
}
