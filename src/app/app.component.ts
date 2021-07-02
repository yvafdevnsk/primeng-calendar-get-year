import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: Date;
  year: string;

  constructor() {
    let initialDate = new Date();
    initialDate.setFullYear(2021);
    initialDate.setMonth(11);
    initialDate.setDate(31);
    this.value = initialDate;
    this.year = "";
  }

  onSelect(value: Date): void {
    this.year = value.getFullYear().toString();
  }
}
