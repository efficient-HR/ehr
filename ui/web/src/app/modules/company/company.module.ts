import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CompanyListShellComponent } from './company-list/company-list.shell/company-list.shell.component';
import { CompanyListComponent } from './company-list/company-list/company-list.component';
import { CompanyFormShellComponent } from './company-form/company-form.shell/company-form.shell.component';
import { CompanyFormComponent } from './company-form/company-form/company-form.component';
import { CompanyRoutingModule } from './company.routing.module';

@NgModule({
  declarations: [CompanyListComponent, CompanyListShellComponent, CompanyFormComponent, CompanyFormShellComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CompanyRoutingModule, FormlyModule.forChild()],
})
export class CompanyModule {}
