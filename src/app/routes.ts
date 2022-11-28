import { Routes } from '@angular/router';
import { RouteEnum } from './constants/enums';

export const PagesRoutes: Routes = [
  {
    path: RouteEnum.SalesFront,
    loadChildren: () =>
      import('./pages/sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: RouteEnum.ProductsFront,
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
];
