import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside {
  dialog = output<boolean>();

  onAddIncome() {
    this.dialog.emit(true);
  }
}
