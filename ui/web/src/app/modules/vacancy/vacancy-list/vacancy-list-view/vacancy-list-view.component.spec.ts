import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyListViewComponent } from './vacancy-list-view.component';

describe('VacancyListViewComponent', () => {
  let component: VacancyListViewComponent;
  let fixture: ComponentFixture<VacancyListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyListViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VacancyListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
