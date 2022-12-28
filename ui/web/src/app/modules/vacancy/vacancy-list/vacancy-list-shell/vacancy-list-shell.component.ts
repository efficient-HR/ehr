import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VacancyDto } from 'src/app/api/enrollment/models';
import { VacancyService } from 'src/app/api/enrollment/services';

@Component({
  selector: 'app-vacancy-list-shell',
  templateUrl: './vacancy-list-shell.component.html',
  styleUrls: ['./vacancy-list-shell.component.scss'],
})
export class VacancyListShellComponent {
  vacancies: Observable<VacancyDto[]>;
  constructor(private vacancyService: VacancyService) {
    this.vacancies = this.vacancyService.all_1();
  }
}
