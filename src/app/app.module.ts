import { BrowserModule } from '@angular/platform-browser';
import { DatabaseService } from './services/database.service'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GraphComponent } from './graph/graph.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
