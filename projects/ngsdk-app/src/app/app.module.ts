import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgsdkLibModule } from 'ngsdk-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgsdkLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
