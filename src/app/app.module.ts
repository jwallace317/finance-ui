import { BrowserModule } from '@angular/platform-browser';
import { DatabaseService } from './services/database.service'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GraphComponent } from './graph/graph.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { StockComponent } from './stock/stock.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { ForexComponent } from './forex/forex.component';
import { IngestionComponent } from './ingestion/ingestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphComponent,
    DashboardComponent,
    AboutComponent,
    StockComponent,
    CryptocurrencyComponent,
    ForexComponent,
    IngestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
