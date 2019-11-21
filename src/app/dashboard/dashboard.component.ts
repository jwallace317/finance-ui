import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public stocks: string[] = ["NFLX", "MSFT", "SPOT", "COF", "AMD", "MDB", "GLUU", "ZM"];

  constructor() { }

  ngOnInit() {
  }

}
