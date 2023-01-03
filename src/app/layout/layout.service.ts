import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  #sidenav =
    new BehaviorSubject<boolean>(true);
  #sidenavActive =
    new BehaviorSubject<string>('');
  constructor(route: Router) {
    this.setActiveSidenav(route.url);
  }
  get sidenav(): Observable<boolean> {
    return this.#sidenav.asObservable();
  }
  get sideNavActive(): Observable<string> {
    return this.#sidenavActive.asObservable();
  }
  toggleSidenav(value?: boolean) {
    this.#sidenav.next(
      value || !this.#sidenav.value
    );
  }
  setActiveSidenav(path: string) {
    this.#sidenavActive.next(path);
  }
}
