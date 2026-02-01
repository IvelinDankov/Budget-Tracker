import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './aside/aside';
import { NewExpenses } from './dashboard/new-expenses/new-expenses';
import { Header } from './dashboard/header/header';
import { Charts } from './dashboard/charts/charts';
import { Transactions } from './dashboard/transactions/transactions';
import { NewIncome } from './dashboard/new-income/new-income';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Aside, NewExpenses, Header, Charts, Transactions, NewIncome],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Budget-Tracker');

  openDialog = false;
  openOutcomeDialog = false;

  onSelectDialog(open: any) {
    this.openDialog = open;
  }
  onSelectOutcomeDialog(open: any) {
    this.openOutcomeDialog = open;
  }

  closeIncomeDialog() {
    this.openDialog = false;
  }

  onCloseDialog() {
    this.openOutcomeDialog = false;
  }
}
