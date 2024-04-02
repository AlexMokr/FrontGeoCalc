import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasePagesModule} from "../pages/base-pages/base-pages.module";
import {CalculatorModule} from "../pages/calculator/calculator.module";

const routes: Routes = [
  { path: 'calculator', loadChildren: () => import("../pages/calculator/calculator.module").then(m => m.CalculatorModule) },
  { path: '**', loadChildren: () => import("../pages/base-pages/base-pages.module").then(m => m.BasePagesModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BasePagesModule,
    CalculatorModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
