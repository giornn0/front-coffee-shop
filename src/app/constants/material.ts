import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

export const materialFieldForm = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  // MatDatepickerModule,
];

export const materialDatePicker = [MatDatepickerModule, MatNativeDateModule];
export const materialDatePicketProvider = [MatDatepickerModule];

export const materialForms = [
  ...materialFieldForm,
  MatIconModule,
  MatCardModule,
];

export const materialLayout = [MatToolbarModule];
