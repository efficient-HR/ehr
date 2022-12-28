import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyFormShellComponent } from './vacancy-form-shell.component';

describe('VacancyFormShellComponent', () => {
  let component: VacancyFormShellComponent;
  let fixture: ComponentFixture<VacancyFormShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyFormShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyFormShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
