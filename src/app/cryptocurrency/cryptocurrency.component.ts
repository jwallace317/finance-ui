import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

    public crypto: string = 'BTC';

  constructor() { }

  ngOnInit() {
  }

  getCurrentCrypto() {
      return this.crypto;
  }

}
