import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { LayoutService } from '../layout.service';
import {
  Sidenav,
  Sidenavs,
} from './sidenav.component';

@Component({
  templateUrl:
    'side-item.component.html',
  selector: 'side-item',
})
export class SideItemComponent
  implements OnInit {
  @Input()
  sidenav?: Sidenav;
  subscriptions = new Subscription();
  isOpen = false;
  isActive: Observable<boolean>;
  constructor(
    private router: Router,
    public layoutService: LayoutService
  ) {
    this.isActive =
      layoutService.sideNavActive.pipe(
        map(
          (path) =>
            (this.sidenav?.path &&
              path.includes(
                this.sidenav?.path
              )) as boolean
        )
      );
  }

  checkActiveRoute(
    childs: Sidenavs
  ): boolean {
    return childs.some(
      (child: Sidenav) => {
        return child.children
          ? this.checkActiveRoute(
            child.children
          )
          : child.path ===
          this.router.url;
      }
    );
  }
  toggleChildren(value?: boolean) {
    this.isOpen = value || !this.isOpen;
  }
  ngOnInit(): void {
    if (
      this.sidenav?.children &&
      this.checkActiveRoute(
        this.sidenav.children
      )
    )
      this.toggleChildren(true);

    if (
      this.sidenav?.path &&
      this.router.url.includes(
        this.sidenav.path
      )
    )
      this.layoutService.setActiveSidenav(
        this.sidenav.path
      );
  }
}
