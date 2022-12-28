import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacancyFormShellComponent } from './vacancy-form/vacancy-form-shell/vacancy-form-shell.component';
import { VacancyListShellComponent } from './vacancy-list/vacancy-list-shell/vacancy-list-shell.component';

const routes: Routes = [
  {
    path: '',
    component: VacancyListShellComponent,
    pathMatch: 'full',
  },
  { path: 'save', component: VacancyFormShellComponent },
  { path: 'save/:id', component: VacancyFormShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacancyRoutingModule {}
