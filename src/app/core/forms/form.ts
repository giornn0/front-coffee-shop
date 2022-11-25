import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
@Component({
  template: '',
})
export class Form<T> implements OnInit {
  form: FormGroup;
  keys: Array<keyof T> = [];
  constructor() {
    this.form = new FormGroup({} as any);
  }
  getControl(field: keyof T): AbstractControl | null {
    return this.form.get(field.toString());
  }
  ngOnInit(): void {
    this.startBasicForm();
  }
  startBasicForm() {
    this.keys.forEach((key) => {
      this.form.addControl(key.toString(), new FormControl());
    });
  }
}
