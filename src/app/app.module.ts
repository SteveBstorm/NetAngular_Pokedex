import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { InputdetailsComponent } from './components/inputdetails/inputdetails.component';
import { ExternaldetailsComponent } from './components/externaldetails/externaldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputdetailsComponent,
    ExternaldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
