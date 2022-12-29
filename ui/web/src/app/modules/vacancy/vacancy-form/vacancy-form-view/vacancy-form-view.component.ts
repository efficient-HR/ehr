import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CompanyDto, VacancyDto } from 'src/app/api/enrollment/models';
import { vacancyConfig } from './vacancy.config';

@Component({
  selector: 'app-vacancy-form-view',
  templateUrl: './vacancy-form-view.component.html',
  styleUrls: ['./vacancy-form-view.component.scss'],
})
export class VacancyFormViewComponent implements OnChanges {
  @Output() saveEvent = new EventEmitter<VacancyDto>();
  @Input() model: VacancyDto | null | undefined;
  @Input() companies: CompanyDto[] | null | undefined;

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  constructor() {
    this.fields = vacancyConfig;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['model']?.currentValue) {
      console.log(this.model);
    }

    if (changes?.['companies']?.currentValue) {
      this.setCompanies();
    }
  }

  private setCompanies() {
    this.fields.forEach((f) => {
      if (f.key == 'company.id') {
        if (f.props) {
          f.props.options = this.companies?.map((y) => {
            return {
              value: y.id,
              label: y.name,
            };
          });
        }
      }
    });
  }

  onSubmit(model: any) {
    this.saveEvent.emit(model);
  }
}
