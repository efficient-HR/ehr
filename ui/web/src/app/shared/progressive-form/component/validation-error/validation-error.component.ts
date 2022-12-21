import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss'],
})
export class ValidationErrorComponent {
  @Input() control!: any;
}
