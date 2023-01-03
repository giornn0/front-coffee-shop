import { Component } from '@angular/core';
import { sidenavs } from 'src/app/sidenavs';
export interface Sidenav {
  icon?: string;
  label: string;
  path?: string;
  children?: Sidenavs;
}

export type Sidenavs = Array<Sidenav>;
@Component({
  selector: 'app-sidenav',
  templateUrl:
    './sidenav.component.html',
  styleUrls: [
    './sidenav.component.scss',
  ],
})
export class SidenavComponent {
  sidenavs?: Sidenavs = sidenavs;
}
