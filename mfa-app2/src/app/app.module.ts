import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { App2test1Component } from './app2test1/app2test1.component';
import { App2test2Component } from './app2test2/app2test2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    App2test1Component,
    App2test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
