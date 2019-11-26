import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @Output() selectStock = new EventEmitter<string>();

    public stocks: string[] = ["NFLX", "MSFT", "SPOT", "COF", "TSLA"];

    newStock = new FormControl('');

    deleteStock = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  onSelect(stock: string) {
      console.log('onSelect(): ' + stock);
      this.selectStock.emit(stock);
  }

  onAddNewStock() {
      console.log(this.newStock.value);
      this.selectStock.emit(this.newStock.value);
      this.stocks.push(this.newStock.value);
      this.newStock.setValue("");
  }

  onDeleteStock() {
      console.log(this.deleteStock.value);
      var index = this.stocks.indexOf(this.deleteStock.value);
      if (index > -1) {
          this.stocks.splice(index, 1);
          this.deleteStock.setValue("");
      }
  }
}
