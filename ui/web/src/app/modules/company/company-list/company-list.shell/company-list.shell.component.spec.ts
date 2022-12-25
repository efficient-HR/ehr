import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListShellComponent } from './company-list.shell.component';

describe('CompanyListShellComponent', () => {
  let component: CompanyListShellComponent;
  let fixture: ComponentFixture<CompanyListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyListShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
