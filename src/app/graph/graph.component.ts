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

        chart.dataSource.url = 'http://127.0.0.1:8080/stocks/' + this.stockSymbol + '/sorted';
        chart.dataSource.parser = new am4core.JSONParser();
        chart.dataSource.parser.options.dateFields = ['timestamp'];
        chart.dataSource.parser.options.dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';
        chart.dataSource.parser.options.numberFields = ['open', 'close'];
        chart.dataSource.load();

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.title.text = 'Date (Eastern Standard Time)';
        dateAxis.title.fontWeight = 'bold';
        dateAxis.renderer.minGridDistance = 60;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = 'USD ($)';
        valueAxis.title.fontWeight = "bold";
        valueAxis.tooltip.disabled = true;

        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "timestamp";
        series.dataFields.openValueY = "open";
        series.dataFields.valueY = "close";
        series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
        series.sequencedInterpolation = true;
        series.fillOpacity = 0.3;
        series.defaultState.transitionDuration = 1000;
        series.tensionX = 0.8;

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.dateX = "timestamp";
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
      this.chart.dataSource.url = 'http://127.0.0.1:8080/stocks/' + this.stockSymbol + '/sorted';
      this.chart.dataSource.load();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
