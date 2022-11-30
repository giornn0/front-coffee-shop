import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouteEnum } from 'src/app/constants/enums';
import { OdinService } from 'src/app/odin/services/odin.service';
import { Sale } from './sales.model';

@Injectable({
  providedIn: 'root',
})
export class SaleService extends OdinService<Sale> {
  constructor(http: HttpClient) {
    super(http, RouteEnum.SalesApi);
  }
}
