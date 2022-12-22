import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CompanyDto } from 'src/app/api/enrollment/models';
import { companyControls } from './company.control';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  @Output() saveEvent = new EventEmitter<CompanyDto>();
  controls = companyControls;
  constructor() {}

  // onSubmit($event: any) {
  //   this.saveEvent.emit($event);
  // }

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
