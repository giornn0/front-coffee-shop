import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './products.resolver';
import { FormComponent } from './views/form/form.component';
import { ListComponent } from './views/list/list.component';

export const ProductRoutes: Routes = [
  {
    path: 'lista',
    component: ListComponent,
  },
  {
    path: 'crear',
    component: FormComponent,
  },
  {
    path: ':id/editar',
    resolve: {
      product: ProductResolver,
    },
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ProductRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
