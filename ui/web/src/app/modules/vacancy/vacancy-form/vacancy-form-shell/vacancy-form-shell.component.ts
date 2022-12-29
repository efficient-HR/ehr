import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { CompanyDto, VacancyDto } from 'src/app/api/enrollment/models';
import { SaveVacancyDto } from 'src/app/api/enrollment/models/save-vacancy-dto';
import { CompanyService, VacancyService } from 'src/app/api/enrollment/services';

@Component({
  selector: 'app-vacancy-form-shell',
  templateUrl: './vacancy-form-shell.component.html',
  styleUrls: ['./vacancy-form-shell.component.scss'],
})
export class VacancyFormShellComponent {
  model: Observable<VacancyDto> | undefined;
  companies: Observable<CompanyDto[]> | undefined;
  constructor(private vacancyService: VacancyService, private companyService: CompanyService, private activateRoute: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    let param = await firstValueFrom(this.activateRoute.paramMap);
    if (param?.has('id')) {
      this.model = this.vacancyService.getById({ id: +param.get('id')! });
    }
    this.companies = this.companyService.all();
  }
  async save($event: SaveVacancyDto) {
    await lastValueFrom(this.vacancyService.save_1({ body: $event }));
  }
}
