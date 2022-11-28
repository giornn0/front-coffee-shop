import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Product, ProductForSale } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ForSaleResolver implements Resolve<Array<ProductForSale>> {
  constructor(private productService: ProductService) {}
  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Array<ProductForSale>> {
    return this.productService.getForSale();
  }
}
@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Product> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Product> {
    const { id } = route.params;
    return this.productService.getOne(id);
  }
}
