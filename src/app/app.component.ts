import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finance-ui';

  stocks: any = [];

  constructor(private database: DatabaseService) {}

  getStocks() {
      this.database.getStocks()
        .subscribe(data => {
            for (const d of (data as any)) {
                this.stocks.push({
                    symbol: d.symbol,
                    timestamp: d.timestamp,
                    open: d.open,
                    high: d.high,
                    low: d.low,
                    close: d.close,
                    volume: d.volume
                });
            }

            console.log(this.stocks);
        });
  }
}
