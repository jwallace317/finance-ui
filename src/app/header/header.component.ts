import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() tabSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onStockTabSelect() {
      this.tabSelect.emit("stock");
  }

  onCryptoTabSelect() {
      this.tabSelect.emit("cryptocurrency");
  }

  onForexTabSelect() {
      this.tabSelect.emit("forex");
  }

  onIngestionTabSelect() {
      this.tabSelect.emit("ingestion")
  }
}
