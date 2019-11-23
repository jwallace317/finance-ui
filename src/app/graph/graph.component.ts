import { Component, NgZone, OnInit, Input, OnChanges } from "@angular/core";
import { DatabaseService } from "../services/database.service";
import { Stock } from "../model/stock";
import { Cryptocurrency } from '../model/cryptocurrency';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnChanges {
    @Input() stockSymbol: string;

    stocks: [{ date: Date, open: number, close: number }];

    chart: am4charts.XYChart;

  constructor(private database: DatabaseService, private zone: NgZone) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        // let stocks = [];
        // this.database.getStocks(this.stockSymbol)
        //     .subscribe(data => {
        //         for (const d of data) {
        //             var stock = new Stock(
        //                 d.symbol,
        //                 d.timestamp,
        //                 d.open,
        //                 d.high,
        //                 d.low,
        //                 d.close,
        //                 d.volume
        //             )
        //
        //                 stocks.push({
        //                 date: new Date(stock.timestamp),
        //                 open: stock.open,
        //                 close: stock.close
        //             });
        //         }
        //     })
        //
        // console.log(stocks);
        // chart.data = stocks;

        let cryptos = [];
        this.database.getCryptos(this.stockSymbol).subscribe(data => {
            for (const d of data) {
                var crypto = new Cryptocurrency(
                    d.symbol,
                    d.timestamp,
                    d.open,
                    d.high,
                    d.low,
                    d.close,
                    d.volume,
                    d.marketCap
                )

                cryptos.push({
                    date: new Date(crypto.timestamp),
                    open: crypto.open,
                    close: crypto.close
                });
            }
        })

        console.log(cryptos);
        chart.data = cryptos;

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.openValueY = "open";
        series.dataFields.valueY = "close";
        series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
        series.sequencedInterpolation = true;
        series.fillOpacity = 0.3;
        series.defaultState.transitionDuration = 1000;
        series.tensionX = 0.8;

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "open";
        series2.sequencedInterpolation = true;
        series2.defaultState.transitionDuration = 1500;
        series2.stroke = chart.colors.getIndex(6);
        series2.tensionX = 0.8;

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        chart.scrollbarX = new am4core.Scrollbar();

        this.chart = chart;
    });
  }

  ngOnChanges() {
      console.log('ngChanges fired');
      console.log(this.stockSymbol);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
