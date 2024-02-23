import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { App2test1Component } from './app2test1/app2test1.component';
import { App2test2Component } from './app2test2/app2test2.component';

const routes: Routes = [
  { path: 'app2/test1', component: App2test1Component},
  { path: 'app2/test2', component: App2test2Component},
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
