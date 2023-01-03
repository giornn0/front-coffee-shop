import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedService } from './core/services/logged.service';
import { LayoutService } from './layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logged: Observable<boolean>;
  sidenav: Observable<boolean>;
  constructor(
    private loggedService: LoggedService,
    private layoutService: LayoutService
  ) {
    this.logged = this.loggedService.isLogged;
    this.sidenav = this.layoutService.sidenav;
  }
}
