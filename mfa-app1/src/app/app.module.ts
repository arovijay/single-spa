import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { TestComp2Component } from './test-comp2/test-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    TestCompComponent,
    TestComp2Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
