import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RouteEnum } from 'src/app/constants/enums';
import { environment } from 'src/environments/environment';
import { ApiResponse, Pager, ToCheck } from '../models';

@Injectable({
  providedIn: 'root',
})
export class OdinService<T> {
  baseUrl: string;
  constructor(public http: HttpClient, section: RouteEnum) {
    this.baseUrl = `${environment.API_URL}/${section}`;
  }

  getOneChecked(id: string | number): Observable<ToCheck<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}/${id}`);
  }

  getOne(id: string | number): Observable<T> {
    return this.getOneChecked(id).pipe(map((res) => res.data));
  }
  getList(pager: Pager): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(this.baseUrl, { params: pager });
  }

  createOne<F>(form: F): Observable<ToCheck<T>> {
    return this.http.post<ApiResponse<T>>(this.baseUrl, form);
  }

  updateOne<F>(form: F, id: string | number): Observable<ToCheck<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}/${id}`, form);
  }
}
