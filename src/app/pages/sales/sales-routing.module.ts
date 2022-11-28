import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForSaleResolver } from '../products/products.resolver';
import { DaySalesComponent } from './views/day-sales/day-sales.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  {
    path: 'caja-dia',
    resolve: {
      products: ForSaleResolver,
    },
    component: DaySalesComponent,
  },
  {
    path: 'lista',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
