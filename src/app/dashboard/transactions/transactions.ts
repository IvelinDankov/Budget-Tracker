import { Component, computed, inject } from '@angular/core';
import { Budget } from '../budget.js';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
  private budgetService = inject(Budget);

  transactions = computed(() => this.budgetService.allTransactions());
}
