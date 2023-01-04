import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './views/list/list.component';
import { FormComponent } from './views/form/form.component';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { materialForms } from 'src/app/constants/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...materialForms,
    MatCheckboxModule,
  ],
})
export class ProductsModule { }
