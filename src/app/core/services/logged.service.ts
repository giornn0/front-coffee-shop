import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginForm } from 'src/app/login/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggedService {
  baseUrl = `${environment.API_URL}/login`;
  #isLogged = new BehaviorSubject(!!localStorage.getItem('token'));
  constructor(private http: HttpClient) { }
  get isLogged(): Observable<boolean> {
    return this.#isLogged.asObservable();
  }

  public login(credentials: LoginForm): Observable<unknown> {
    return this.http.post(this.baseUrl, credentials);
  }
}
