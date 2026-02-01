import { Component, output } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside {
  dialog = output<boolean>();
  outcomeDialog = output<boolean>();

  onAddIncome() {
    this.dialog.emit(true);
  }

  onAddExpense() {
    this.outcomeDialog.emit(true);
  }
}
