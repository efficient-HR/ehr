import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CompanyDto } from 'src/app/api/enrollment/models';
import { CompanyService } from 'src/app/api/enrollment/services';

@Component({
  selector: 'app-company.shell',
  templateUrl: './company.shell.component.html',
  styleUrls: ['./company.shell.component.scss'],
})
export class CompanyShellComponent {
  constructor(private companyService: CompanyService) {}
  async save($event: CompanyDto) {
    console.log($event);

    await lastValueFrom(this.companyService.create({ body: $event }));
  }
}
