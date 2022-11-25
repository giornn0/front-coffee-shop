import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedService {
  #isLogged = new BehaviorSubject(!!localStorage.getItem('token'));
  constructor() { }
  get isLogged(): Observable<boolean> {
    return this.#isLogged.asObservable();
  }
}
