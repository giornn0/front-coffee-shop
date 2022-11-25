import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const hasToken = !!localStorage.getItem('token');
    const isLogin = route.url[0].path === 'login';
    if (!hasToken && !isLogin) {
      this.router.navigate(['login']);
      return false;
    }
    if (hasToken && isLogin) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
