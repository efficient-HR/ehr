import { Validators } from '@angular/forms';
import { ControlType } from 'src/app/shared/constants/control-type';
import { IControl } from 'src/app/shared/interfaces/IControl';

export const companyControls: IControl[] = [
  {
    name: 'name',
    label: 'Name',
    type: ControlType.TEXT,
    validators: [Validators.required],
  },
  {
    name: 'about',
    label: 'About',
    type: ControlType.TEXT,
  },
  {
    name: 'location',
    label: 'Location',
    type: ControlType.TEXT,
    validators: [Validators.minLength(2), Validators.required, Validators.email],
  },
];
