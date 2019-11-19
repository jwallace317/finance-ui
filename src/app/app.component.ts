import { Component, NgZone } from '@angular/core';
import { DatabaseService } from './database.service';
import { Stock } from './stock';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private chart: am4charts.XYChart;

  constructor(private database: DatabaseService, private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let stocks = []
      this.database.getStocks()
        .subscribe(data => {
            for (const d of (data as any)) {
                let stock = new Stock(
                    d.symbol,
                    d.timestamp,
                    d.open,
                    d.high,
                    d.low,
                    d.close,
                    d.volume
                )
                console.log(stock)

                // parse timestamp
                let time_tokens = stock.timestamp.split(/-| |:/)
                for (let i = 0; i < 6; i++) {
                    console.log(time_tokens)
                }

                let year = time_tokens[0]
                let month = time_tokens[1] - 1
                let day = time_tokens[2]
                let hour = time_tokens[3]
                let minute = time_tokens[4]
                let second = time_tokens[5]

                stocks.push({ date: new Date(year, month, day, hour, minute, second), name: stock.symbol, value: stock.open });
            }

            console.log(stocks);
        });

      chart.data = stocks;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
