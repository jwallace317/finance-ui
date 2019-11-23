import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../model/stock';
import { Cryptocurrency } from '../model/cryptocurrency';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  private databaseUrl: string;

  constructor(private http: HttpClient) {
    this.databaseUrl = 'http://127.0.0.1:8080/stocks';
  }

  public getStocks(symbol: string): Observable<Stock[]> {
      this.databaseUrl = 'http://127.0.0.1:8080/stocks/' + symbol + '/sorted';
      console.log(this.databaseUrl);
    return this.http.get<Stock[]>(this.databaseUrl);
  }

  public getCryptos(symbol: string): Observable<Cryptocurrency[]> {
      this.databaseUrl = 'http://127.0.0.1:8080/cryptos/' + symbol;
      console.log(this.databaseUrl);
      return this.http.get<Cryptocurrency[]>(this.databaseUrl);
  }

  public ingestStocks(symbol: string, functionStr: string, interval: string, outputSize: string) {
      console.log('in ingest stocks method');
      console.log(symbol);
      console.log(functionStr);
      console.log(interval);
      console.log(outputSize);
      this.databaseUrl = 'http://127.0.0.1:8081/ingest/stocks/'
        + functionStr + '/'
        + symbol + '/'
        + interval + '/'
        + outputSize;

        console.log(this.databaseUrl);

        this.http.get(this.databaseUrl);
  }
}
