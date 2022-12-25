import { Component, Input } from '@angular/core';
import { CompanyDto } from 'src/app/api/enrollment/models';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  @Input() companies: CompanyDto[] | null | undefined;
}
