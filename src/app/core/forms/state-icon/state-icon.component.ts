import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatIconModule, CommonModule],
  selector: 'state-icon',
  templateUrl: 'state-icon.component.html',
})
export class StateIconComponent {
  @Input() control: AbstractControl | null = null;
}
