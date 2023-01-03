import { Sidenavs } from './layout/sidenav/sidenav.component';

export const sidenavs: Sidenavs = [
  {
    label: 'Productos',
    icon: '',
    children: [
      {
        label: 'Listado',
        path: 'productos/lista',
      },
      {
        label: 'Agregar',
        path: 'productos/crear',
      },
    ],
  },
];
