import { Component, Input } from '@angular/core';
import { VacancyDto } from 'src/app/api/enrollment/models';

@Component({
  selector: 'app-vacancy-list-view',
  templateUrl: './vacancy-list-view.component.html',
  styleUrls: ['./vacancy-list-view.component.scss'],
})
export class VacancyListViewComponent {
  @Input() vacancies: VacancyDto[] | null | undefined;
}
