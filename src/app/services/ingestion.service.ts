import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../model/stock';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class IngestionService {

    private ingestionUrl: string;

  constructor(private http: HttpClient) {
      this.ingestionUrl = 'http://127.0.0.1:8081/ingest/stocks/';
  }

  ingestStocks(symbol: string, func: string, interval: string, size: string) {
      console.log('in ingest stocks method');
      console.log(symbol);
      console.log(func);
      console.log(interval);
      console.log(size);

      this.ingestionUrl = this.ingestionUrl
        + func + '/'
        + symbol + '/'
        + interval + '/'
        + size;
      console.log(this.ingestionUrl);

      this.http.get(this.ingestionUrl);
  }
}
