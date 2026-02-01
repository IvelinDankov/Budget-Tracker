import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './aside/aside';
import { NewExpenses } from './dashboard/new-expenses/new-expenses';
import { Header } from './dashboard/header/header';
import { Charts } from './dashboard/charts/charts';
import { Transactions } from './dashboard/transactions/transactions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Aside, NewExpenses, Header, Charts, Transactions],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Budget-Tracker');
}
