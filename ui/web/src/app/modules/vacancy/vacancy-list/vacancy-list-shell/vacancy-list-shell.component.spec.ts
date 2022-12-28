import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyListShellComponent } from './vacancy-list-shell.component';

describe('VacancyListShellComponent', () => {
  let component: VacancyListShellComponent;
  let fixture: ComponentFixture<VacancyListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyListShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VacancyListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
