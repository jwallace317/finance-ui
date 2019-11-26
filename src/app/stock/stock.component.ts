import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

    currentStock: string = "NFLX";

  constructor() { }

  ngOnInit() {
  }

  getCurrentStock() {
      return this.currentStock;
  }

  OnSelectedStock(stock: string) {
      this.currentStock = stock;
  }
}
