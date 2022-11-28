import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { LoginForm, LoginResponse, User } from 'src/app/login/login.model';
import { ApiResponse } from 'src/app/odin/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggedService {
  baseUrl = `${environment.API_URL}/login`;
  #isLogged = new BehaviorSubject(!!localStorage.getItem('token'));
  #user = new Subject<User>();
  constructor(private http: HttpClient) {}
  get isLogged(): Observable<boolean> {
    return this.#isLogged.asObservable();
  }

  get user(): Observable<User> {
    return this.#user.asObservable();
  }

  public login(credentials: LoginForm): Observable<LoginResponse> {
    return this.http
      .post<ApiResponse<LoginResponse>>(this.baseUrl, credentials)
      .pipe(
        map((res) => {
          this.#user.next(res.data.user);
          localStorage.setItem('token', res.data.token);
          this.#isLogged.next(true);
          return res.data;
        })
      );
  }
}
