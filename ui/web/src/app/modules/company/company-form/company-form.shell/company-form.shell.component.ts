import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { CompanyDto } from 'src/app/api/enrollment/models';
import { CompanyService } from 'src/app/api/enrollment/services';

@Component({
  selector: 'app-company-form.shell',
  templateUrl: './company-form.shell.component.html',
  styleUrls: ['./company-form.shell.component.scss'],
})
export class CompanyFormShellComponent implements OnInit {
  model: CompanyDto;
  constructor(private companyService: CompanyService, private activateRoute: ActivatedRoute) {
    this.model = {
      id: 0,
      name: '',
      location: '',
      about: '',
    };
  }

  async ngOnInit(): Promise<void> {
    let param = await firstValueFrom(this.activateRoute.paramMap);
    if (param?.has('id')) {
      this.model = await lastValueFrom(this.companyService.get({ id: +param.get('id')! }));
    }
  }
  async save($event: CompanyDto) {
    console.log($event);

    await lastValueFrom(this.companyService.save({ body: $event }));
  }
}
