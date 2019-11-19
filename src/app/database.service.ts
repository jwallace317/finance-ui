import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from './stock';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  private databaseUrl: string;

  constructor(private http: HttpClient) {
    this.databaseUrl = 'http://127.0.0.1:8080/stocks/all';
  }

  public getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.databaseUrl);
  }
}
