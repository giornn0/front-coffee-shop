import {
  Component,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
export type FormState = {
  validators?: Array<ValidatorFn>;
  value?: any;
};
export type FormDetail<T> = {
  [key in keyof T]?: FormState;
};
export type FormSign<T> = {
  [jey in keyof T]: FormControl;
};
export interface StartForm {
  startForm?: () => void;
}
@Component({
  template: '',
})
export class Form<T>
  implements OnInit, StartForm {
  form: FormGroup;
  formDetails: FormDetail<T> = {};
  keys: Array<keyof T> = [];
  constructor() {
    this.form = new FormGroup(
      {} as FormSign<T>
    );
  }
  getControl(
    field: keyof T
  ): AbstractControl | null {
    return this.form.get(
      field.toString()
    );
  }
  setValidator(
    field: keyof T,
    validators: Array<ValidatorFn>
  ) {
    this.getControl(
      field
    )?.setValidators(validators);
  }
  setValue(field: keyof T, value: any) {
    this.getControl(field)?.setValue(
      value
    );
  }

  ngOnInit(): void {
    this.startBasicForm();
    this.startForm();
  }
  startBasicForm() {
    this.keys.forEach((key) => {
      this.form.addControl(
        key.toString(),
        new FormControl(null)
      );
    });
  }
  startForm() {
    if (this.formDetails)
      Object.entries<FormState>(
        this.formDetails as {}
      ).forEach(
        ([
          key,
          { value, validators },
        ]) => {
          if (validators)
            this.setValidator(
              key as keyof T,
              validators
            );
          if (value)
            this.setValue(
              key as keyof T,
              value
            );
        }
      );
    this.form.updateValueAndValidity();
  }
}
