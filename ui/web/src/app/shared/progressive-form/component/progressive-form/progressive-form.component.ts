import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IControl } from 'src/app/shared/interfaces/IControl';

@Component({
  selector: 'app-progressive-form',
  templateUrl: './progressive-form.component.html',
  styleUrls: ['./progressive-form.component.scss'],
})
export class ProgressiveFormComponent implements OnChanges {
  @Input() controls: IControl[] | undefined;

  @Output() onSubmit = new EventEmitter<any>();

  form: FormGroup = this.formBuilder.group({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  createForm() {
    this.controls?.forEach((control) => {
      this.form.addControl(control.name, new FormControl(control.value, control.validators));
    });
  }
}
