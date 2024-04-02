import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppBlockModule} from "../components/app-block/app-block.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBlockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
