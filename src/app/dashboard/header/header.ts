import { Component, computed, inject } from '@angular/core';
import { Budget } from '../budget.js';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private budgetService = inject(Budget);

  totalBalance = computed(() => this.budgetService.balance());
  totalIncome = computed(() => this.budgetService.totalIncomes());
  totalSavings = computed(() => this.budgetService);
  totalExpenses = computed(() => this.budgetService.totalExpenses());
}
