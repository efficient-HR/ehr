import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressiveFormComponent } from './component/progressive-form/progressive-form.component';
import { IControl } from '../interfaces/IControl';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorComponent } from './component/validation-error/validation-error.component';

@NgModule({
  declarations: [ProgressiveFormComponent, ValidationErrorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ProgressiveFormComponent],
})
export class ProgressiveFormModule {}
