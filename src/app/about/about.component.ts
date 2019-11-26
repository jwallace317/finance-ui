import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { StockDetails } from '../model/stockDetails';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    @Input() stockSymbol: string;

    public chiefExecutiveOfficer: string = "not available";

    public numberOfEmployees: string = "not available";

    public headquarters: string = "not available";

    public dateFounded: string = "not available";

    public marketCap: string = "not available";

    public priceEarningsRatio: string = "not available";

    public dividendYield: string = "not available";

    public averageVolume: string = "not available";

    public todayHigh: string = "not available";

    public todayLow: string = "not available";

    public openPrice: string = "not available";

    public volume: string = "not available";

    public yearHigh: string = "not available";

    public yearLow: string = "not available";

  constructor(private database: DatabaseService) {
      console.log('from about component stock: ' + this.stockSymbol);
  }

  ngOnInit() { }

  ngOnChanges() {
      this.database.getStockDetails(this.stockSymbol)
        .subscribe(data => {
            for (const d of data) {
                var details = new StockDetails(
                    d.symbol,
                    d.chiefExecutiveOfficer,
                    d.numberOfEmployees,
                    d.headquarters,
                    d.dateFounded,
                    d.marketCap,
                    d.priceEarningsRatio,
                    d.dividendYield,
                    d.averageVolume,
                    d.todayHigh,
                    d.todayLow,
                    d.openPrice,
                    d.volume,
                    d.yearHigh,
                    d.yearLow
                );

                this.chiefExecutiveOfficer = details.chiefExecutiveOfficer;
                this.numberOfEmployees = details.numberOfEmployees;
                this.headquarters = details.headquarters;
                this.dateFounded = details.dateFounded;
                this.marketCap = details.marketCap;
                this.priceEarningsRatio = details.priceEarningsRatio;
                this.dividendYield = details.dividendYield;
                this.averageVolume = details.averageVolume;
                this.todayHigh = details.todayHigh;
                this.todayLow = details.todayLow;
                this.openPrice = details.openPrice;
                this.volume = details.volume;
                this.yearHigh = details.yearHigh;
                this.yearLow = details.yearLow;
            }
        });
  }

}
