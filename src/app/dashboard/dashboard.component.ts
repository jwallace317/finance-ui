import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms'
import { IngestionService } from '../services/ingestion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @Output() selectStock = new EventEmitter<string>();

    public stocks: string[] = ["NFLX", "MSFT", "SPOT", "COF", "AMD", "MDB", "GLUU", "ZM"];

    newStock = new FormControl('');

  constructor(private ingestion: IngestionService) { }

  ngOnInit() {
  }

  onSelect(stock: string) {
      console.log(stock);
      this.selectStock.emit(stock);
  }

  addNewStock() {
      console.log(this.newStock.value);
      this.ingestion.ingestStocks(this.newStock.value, 'TIME_SERIES_INTRADAY', '1min', 'compact');


  }
}
