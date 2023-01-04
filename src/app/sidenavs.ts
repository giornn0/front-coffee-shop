import { RouteEnum } from './constants/enums';
import { Sidenavs } from './layout/sidenav/sidenav.component';

export const sidenavs: Sidenavs = [
  {
    label: 'Productos',
    icon: '',
    children: [
      {
        label: 'Listado',
        path: `${RouteEnum.ProductsFront}/lista`,
      },
      {
        label: 'Agregar',
        path: `${RouteEnum.ProductsFront}/crear`,
      },
    ],
  },
  {
    label: 'Ventas',
    icon: '',
    children: [
      {
        label: 'Listado',
        path: `${RouteEnum.SalesFront}/lista`,
      },
      {
        label: 'Cargar Venta',
        path: `${RouteEnum.SalesFront}/caja-dia`,
      },
    ],
  },
];
