import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-create-balance',
  templateUrl: 'create.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CreateComponent { }
