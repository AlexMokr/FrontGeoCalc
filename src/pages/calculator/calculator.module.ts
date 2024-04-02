import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InfoProjectPageComponent} from "../base-pages/info-project-page/info-project-page.component";
import {DataPageComponent} from "../base-pages/data-page/data-page.component";
import {ServicePageComponent} from "../base-pages/service-page/service-page.component";
import {ResearchesPageComponent} from "../base-pages/researches-page/researches-page.component";
import {AnalyticsPageComponent} from "../base-pages/analytics-page/analytics-page.component";
import {NewsPageComponent} from "../base-pages/news-page/news-page.component";
import {EventsPageComponent} from "../base-pages/events-page/events-page.component";
import {AccountPageComponent} from "../base-pages/account-page/account-page.component";
import { PersonFormComponent } from './person-form/person-form.component';
import { CalculateListComponent } from './calculate-list/calculate-list.component';

const routers: Routes = [
  { path: '', component: CalculateListComponent },
  { path: 'list', component: CalculateListComponent },
  { path: 'form', component: PersonFormComponent },
]

@NgModule({
  declarations: [
    PersonFormComponent,
    CalculateListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class CalculatorModule { }
