import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { DaySalesComponent } from './views/day-sales/day-sales.component';
import { ListComponent } from './views/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { ProductChargerComponent } from './components/product-charger.component';
import {
  materialFieldForm,
  materialDatePicker,
  materialDatePicketProvider,
} from 'src/app/constants/material';

@NgModule({
  declarations: [DaySalesComponent, ListComponent, ProductChargerComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonModule,
    ...materialFieldForm,
    ...materialDatePicker,
  ],
  providers: [...materialDatePicketProvider],
})
export class SalesModule { }
