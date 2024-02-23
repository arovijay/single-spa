import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { TestComp2Component } from './test-comp2/test-comp2.component';

const routes: Routes = [
  { path: 'app1/test', component: TestCompComponent},
  { path: 'app1/test2', component: TestComp2Component},
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
