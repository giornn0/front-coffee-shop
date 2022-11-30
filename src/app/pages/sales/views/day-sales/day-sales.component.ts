import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { PaymentMethod } from 'src/app/constants/enums';
import { paymentsFormatter } from 'src/app/constants/formatters';
import { ProductForSale } from 'src/app/pages/products/products.model';

@Component({
  selector: 'app-day-sales',
  templateUrl: './day-sales.component.html',
  styleUrls: ['./day-sales.component.scss'],
})
export class DaySalesComponent implements OnInit {
  productsForSale?: Array<ProductForSale>;
  productsForSaleFiltered?: Observable<Array<ProductForSale>>;
  showProducts = true;
  paymentMethods = paymentsFormatter;
  filter = new FormControl('');

  constructor(private activatedRouter: ActivatedRoute) { }

  form = new FormGroup({
    date: new FormControl(new Date(), [Validators.required]),
    payment_method: new FormControl(PaymentMethod.Cash, [Validators.required]),
    amount: new FormControl(0, [Validators.required, Validators.min(0.1)]),
    pedidos_ya: new FormControl(false),
    products: new FormArray([]),
  });

  ngOnInit(): void {
    this.activatedRouter.data.subscribe((data) => {
      const { products } = data;
      this.productsForSale = products;
      this.productsForSaleFiltered = this.filter.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const toSearch = (value || '').toUpperCase();
          return this.productsForSale!.filter(
            (prod) =>
              prod.name.toUpperCase().includes(toSearch) ||
              prod.code.toUpperCase().includes(toSearch)
          );
        })
      );
    });

    this.products.valueChanges.subscribe((_) => {
      const value = this.products.getRawValue().reduce((prev, curr) => {
        const amount: number = curr.price * curr.quantity;
        return prev + amount;
      }, 0);
      this.amount?.setValue(value);
    });
  }

  get products(): FormArray {
    return this.form.get('products') as FormArray;
  }
  get amount() {
    return this.form.get('amount');
  }

  addProduct(form: FormGroup) {
    this.products.insert(0, form);
  }
  removeProduct(productId: string) {
    const indexControl = this.products
      .getRawValue()
      .findIndex((form) => form.id == productId);
    this.products.removeAt(indexControl);
  }
  toggleProdList() {
    this.showProducts = !this.showProducts;
  }
}
