import { Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Budget } from '../budget.js';
import { Income } from '../../models/income.model.js';

@Component({
  selector: 'app-new-income',
  imports: [FormsModule],
  templateUrl: './new-income.html',
  styleUrl: './new-income.scss',
})
export class NewIncome {
  private budgetService = inject(Budget);
  closeDialog = output<void>();

  onCancel(event?: Event) {
    event?.stopPropagation();
    this.closeDialog.emit();
  }

  onSelectDialog(dialog: any) {
    dialog = this.closeDialog;
  }

  onSaveIncome(form: NgForm) {
    let { amount, category, description } = form.form.controls;

    const newIncome: Income = {
      id: '',
      amount: amount.value,
      category: category.value,
      description: description.value,
    };

    this.budgetService.addIncome(newIncome);
    this.closeDialog.emit();
  }
}
