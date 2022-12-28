import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VacancyDto } from 'src/app/api/enrollment/models';
import { vacancyConfig } from './vacancy.config';

@Component({
  selector: 'app-vacancy-form-view',
  templateUrl: './vacancy-form-view.component.html',
  styleUrls: ['./vacancy-form-view.component.scss'],
})
export class VacancyFormViewComponent implements OnChanges {
  @Output() saveEvent = new EventEmitter<VacancyDto>();
  @Input() model!: VacancyDto;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['model']?.currentValue) {
      console.log(this.model);
    }
  }

  form = new FormGroup({});
  fields = vacancyConfig;

  onSubmit(model: any) {
    this.saveEvent.emit(model);
  }
}
