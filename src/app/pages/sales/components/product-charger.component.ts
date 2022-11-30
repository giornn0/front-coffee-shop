import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { ProductForSale } from 'src/app/pages/products/products.model';

@Component({
  selector: 'app-product-charger',
  templateUrl: 'product-charger.component.html',
  styleUrls: ['product-charger.component.scss'],
})
export class ProductChargerComponent {
  form?: FormGroup;
  openPanel = false;
  quantity = 0;
  @Input() product?: ProductForSale;
  @Output() charged = new EventEmitter<FormGroup>();
  @Output() removed = new EventEmitter();
  constructor() { }
  choiceUpdate() {
    if (!this.form) this.form = this.newForm();
    else {
      timer(100).subscribe((_) => {
        this.form = undefined;
        this.removed.emit();
      });
    }
  }
  newForm(): FormGroup {
    const form = new FormGroup({
      quantity: new FormControl(this.quantity || 1, [
        Validators.required,
        Validators.min(1),
      ]),
      id: new FormControl({ value: this.product?.id, disabled: true }, [
        Validators.required,
      ]),
      price: new FormControl({ value: this.product?.price, disabled: true }, [
        Validators.required,
      ]),
    });
    form
      .get('quantity')
      ?.valueChanges.subscribe((value) => (this.quantity = Number(value!)));
    this.charged.emit(form);
    return form;
  }
  get quantityControl() {
    return this.form?.get('quantity');
  }
  get subTotal(): number {
    return (this.quantityControl?.value || 1) * (this.product?.price || 1);
  }
  get hasQuantity(): boolean {
    return this.quantityControl?.value > 0;
  }
  updateQuantity(add: number) {
    if (add < 0 && this.quantityControl?.value === 1) return;
    this.quantityControl?.setValue(this.quantityControl.value + add);
  }
}
