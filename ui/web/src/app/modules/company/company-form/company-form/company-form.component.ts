import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CompanyDto } from 'src/app/api/enrollment/models';
import { companyConfig } from './company.config';
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnChanges {
  @Output() saveEvent = new EventEmitter<CompanyDto>();
  @Input() model!: CompanyDto;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['model']?.currentValue) {
      console.log(this.model);
    }
  }

  form = new FormGroup({});
  fields = companyConfig;

  onSubmit(model: any) {
    this.saveEvent.emit(model);
  }
}
