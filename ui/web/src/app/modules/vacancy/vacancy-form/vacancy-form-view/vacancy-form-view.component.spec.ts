import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyFormViewComponent } from './vacancy-form-view.component';

describe('VacancyFormViewComponent', () => {
  let component: VacancyFormViewComponent;
  let fixture: ComponentFixture<VacancyFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyFormViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
