import { Component, EventEmitter, Output } from '@angular/core';
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

  onSubmit($event: any) {
    this.saveEvent.emit($event);
  }
}
