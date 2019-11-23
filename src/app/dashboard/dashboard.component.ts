import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @Output() selectStock = new EventEmitter<string>();

    public stocks: string[] = ["NFLX", "MSFT", "SPOT", "COF", "AMD", "MDB", "GLUU", "ZM"];

    newStock = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  onSelect(stock: string) {
      console.log(stock);
      this.selectStock.emit(stock);
  }

  addNewStock() {
      console.log(this.newStock.value);
      this.selectStock.emit(this.newStock.value);
      this.stocks.push(this.newStock.value);
  }
}
