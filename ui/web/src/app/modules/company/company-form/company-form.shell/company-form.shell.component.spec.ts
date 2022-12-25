import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFormShellComponent } from './company-form.shell.component';

describe('CompanyFormShellComponent', () => {
  let component: CompanyFormShellComponent;
  let fixture: ComponentFixture<CompanyFormShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyFormShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyFormShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
