import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { CompanyShellComponent } from './company.shell/company.shell.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CompanyShellComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [CompanyComponent, CompanyShellComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CompanyModule {}
