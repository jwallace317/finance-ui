import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @Output() selectStock = new EventEmitter<string>();

    public stocks: string[] = ["NFLX", "MSFT", "SPOT", "COF", "AMD", "MDB", "GLUU", "ZM"];

  constructor() { }

  ngOnInit() {
  }

  onSelect(stock: string) {
      console.log(stock);
      this.selectStock.emit(stock);
  }
}
