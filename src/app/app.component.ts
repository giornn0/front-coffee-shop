import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedService } from './core/services/logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logged: Observable<boolean>;
  constructor(private loggedService: LoggedService) {
    this.logged = this.loggedService.isLogged;
  }
}
