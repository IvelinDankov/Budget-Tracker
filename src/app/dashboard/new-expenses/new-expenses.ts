import { Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Budget } from '../budget.js';
import { Expense } from '../../models/expenses.model.js';

@Component({
  selector: 'app-new-expenses',
  imports: [FormsModule],
  templateUrl: './new-expenses.html',
  styleUrl: './new-expenses.scss',
})
export class NewExpenses {
  private budgetService = inject(Budget);

  closeDialog = output<boolean>();

  onCloseDialog() {
    this.closeDialog.emit(false);
  }

  onAddExpense(form: NgForm) {
    let { amount, category, description } = form.control.value;
    const newExpense: Expense = {
      id: '',
      amount: amount,
      category,
      description,
    };

    this.budgetService.addExpense(newExpense);
  }
}
