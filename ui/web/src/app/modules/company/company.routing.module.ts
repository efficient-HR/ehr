import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/layout/default-layout/default-layout.component';
import { CompanyFormShellComponent } from './company-form/company-form.shell/company-form.shell.component';
import { CompanyListShellComponent } from './company-list/company-list.shell/company-list.shell.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyListShellComponent,
    pathMatch: 'full',
  },
  { path: 'save', component: CompanyFormShellComponent },
  { path: 'save/:id', component: CompanyFormShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
