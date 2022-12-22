import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { CompanyShellComponent } from './company.shell/company.shell.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

const routes: Routes = [{ path: '', component: CompanyShellComponent, pathMatch: 'full' }];

@NgModule({
  declarations: [CompanyComponent, CompanyShellComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), FormlyModule.forChild()],
})
export class CompanyModule {}
