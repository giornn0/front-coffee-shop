import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RouteEnum } from 'src/app/constants/enums';
import { ApiResponse } from 'src/app/odin/models';
import { OdinService } from 'src/app/odin/services/odin.service';
import { Product, ProductForSale } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends OdinService<Product> {
  constructor(http: HttpClient) {
    super(http, RouteEnum.ProductsApi);
  }

  getForSale(): Observable<Array<ProductForSale>> {
    return this.http
      .get<ApiResponse<Array<ProductForSale>>>(`${this.baseUrl}/for-sale`)
      .pipe(map((res) => res.data));
  }
}
