import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { VacancyDto } from 'src/app/api/enrollment/models';
import { SaveVacancyDto } from 'src/app/api/enrollment/models/save-vacancy-dto';
import { VacancyService } from 'src/app/api/enrollment/services';

@Component({
  selector: 'app-vacancy-form-shell',
  templateUrl: './vacancy-form-shell.component.html',
  styleUrls: ['./vacancy-form-shell.component.scss'],
})
export class VacancyFormShellComponent {
  model: VacancyDto;
  constructor(private vacancyService: VacancyService, private activateRoute: ActivatedRoute) {
    this.model = {
      id: 0,
      description: '',
      location: '',
      experience: '',
      skill: '',
      title: '',
      company: null,
    };
  }

  async ngOnInit(): Promise<void> {
    let param = await firstValueFrom(this.activateRoute.paramMap);
    if (param?.has('id')) {
      this.model = await lastValueFrom(this.vacancyService.getById({ id: +param.get('id')! }));
    }
  }
  async save($event: SaveVacancyDto) {
    await lastValueFrom(this.vacancyService.save_1({ body: $event }));
  }
}
