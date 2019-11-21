import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

    currentStock: string;

  constructor() { }

  ngOnInit() {
  }

  OnSelectedStock(stock: string) {
      this.currentStock = stock;
  }
}
