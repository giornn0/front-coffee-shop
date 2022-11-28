import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './views/list/list.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
