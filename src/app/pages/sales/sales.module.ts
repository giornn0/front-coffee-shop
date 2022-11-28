import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { DaySalesComponent } from './views/day-sales/day-sales.component';
import { ListComponent } from './views/list/list.component';


@NgModule({
  declarations: [
    DaySalesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
