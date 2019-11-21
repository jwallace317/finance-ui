import { Component, NgZone } from "@angular/core";
import { DatabaseService } from "./database.service";
import { Stock } from "./model/stock";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

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

        let stocks = [];
        this.database.getStocks()
            .subscribe(data => {
                for (const d of data) {
                    let stock = new Stock(
                        d.symbol,
                        d.timestamp,
                        d.open,
                        d.high,
                        d.low,
                        d.close,
                        d.volume
                    )

                    stocks.push({
                        date: new Date(stock.timestamp),
                        //name: stock.symbol,
                        value: stock.high
                    });
                }
            })
            
        chart.data = stocks;

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{value}"

        series.tooltip.pointerOrientation = "vertical";

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.snapToSeries = series;
        chart.cursor.xAxis = dateAxis;

        //chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarX = new am4core.Scrollbar();

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
