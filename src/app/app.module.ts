import { BrowserModule } from '@angular/platform-browser';
import { DatabaseService } from './database.service'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
