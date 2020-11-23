import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteConfirmationDialogComponent } from './employee-delete-confirmation-dialog.component';

describe('EmployeeDeleteConfirmationDialogComponent', () => {
  let component: EmployeeDeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<EmployeeDeleteConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeleteConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
