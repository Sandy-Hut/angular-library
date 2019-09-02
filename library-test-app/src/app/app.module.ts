import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeepCommonLibModule } from "deep-common-lib"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeepCommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
