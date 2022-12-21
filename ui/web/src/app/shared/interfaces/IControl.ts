import { AsyncValidator, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface IControl {
  name: string;
  type: string;
  label: string;
  value?: any;
  validators?: ValidatorFn[];
}
