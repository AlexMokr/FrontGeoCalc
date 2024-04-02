import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoProjectPageComponent } from './info-project-page/info-project-page.component';
import { DataPageComponent } from './data-page/data-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ResearchesPageComponent } from './researches-page/researches-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { DataBasePageComponent } from './data-base-page/data-base-page.component';
import {RouterModule, Routes} from "@angular/router";

const routers: Routes = [
  { path: '',             component: InfoProjectPageComponent },
  { path: 'info-project', component: InfoProjectPageComponent },
  { path: 'data',         component: DataPageComponent },
  { path: 'service',      component: ServicePageComponent },
  { path: 'researches',   component: ResearchesPageComponent },
  { path: 'analytics',    component: AnalyticsPageComponent },
  { path: 'news',         component: NewsPageComponent },
  { path: 'events',       component: EventsPageComponent },
  { path: 'account',      component: AccountPageComponent },
  { path: 'data_base',    component: DataPageComponent },
]

@NgModule({
  declarations: [
    InfoProjectPageComponent,
    DataPageComponent,
    ServicePageComponent,
    ResearchesPageComponent,
    AnalyticsPageComponent,
    NewsPageComponent,
    EventsPageComponent,
    AccountPageComponent,
    DataBasePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class BasePagesModule { }
