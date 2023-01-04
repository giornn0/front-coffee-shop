import { Component } from '@angular/core';
import {
  AbstractControl,
  Validators,
} from '@angular/forms';
import { randomDigits } from 'src/app/constants/utils';
import {
  Form,
  FormDetail,
} from 'src/app/core/forms/form';
import {
  coffeTypes,
  Product,
} from '../../products.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends Form<Product> {
  override formDetails: FormDetail<Product> =
    {
      name: {
        validators: [
          Validators.required,
        ],
      },

      code: {
        validators: [
          Validators.required,
          Validators.pattern(/\w{8}/),
        ],
        value: randomDigits(),
      },
      price: {
        validators: [
          Validators.required,
          Validators.min(0.1),
        ],
      },
    };
  override keys: (keyof Product)[] = [
    'id',
    'name',
    'code',
    'price',
    'is_coffee',
    'coffe_type',
  ];
  coffeTypes = coffeTypes;
  get is_coffee(): AbstractControl | null {
    return this.getControl('is_coffee');
  }
}
