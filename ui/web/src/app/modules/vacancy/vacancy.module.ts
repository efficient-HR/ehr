import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListViewComponent } from './vacancy-list/vacancy-list-view/vacancy-list-view.component';
import { VacancyListShellComponent } from './vacancy-list/vacancy-list-shell/vacancy-list-shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { VacancyRoutingModule } from './vacancy.routing.module';
import { VacancyFormViewComponent } from './vacancy-form/vacancy-form-view/vacancy-form-view.component';
import { VacancyFormShellComponent } from './vacancy-form/vacancy-form-shell/vacancy-form-shell.component';

@NgModule({
  declarations: [VacancyListViewComponent, VacancyListShellComponent, VacancyFormViewComponent, VacancyFormShellComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VacancyRoutingModule, FormlyModule.forChild()],
})
export class VacancyModule {}
