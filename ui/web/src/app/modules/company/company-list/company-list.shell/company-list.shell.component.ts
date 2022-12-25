import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDto } from 'src/app/api/enrollment/models';
import { CompanyService } from 'src/app/api/enrollment/services';

@Component({
  selector: 'app-company-list.shell',
  templateUrl: './company-list.shell.component.html',
  styleUrls: ['./company-list.shell.component.scss'],
})
export class CompanyListShellComponent implements OnInit {
  companies: Observable<CompanyDto[]>;
  constructor(private companyService: CompanyService) {
    this.companies = this.companyService.all();
  }

  ngOnInit(): void {
    // this.companies = this.companyService.all();
  }
}
