import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDeleteConfirmationDialogComponent } from './department-delete-confirmation-dialog.component';

describe('DepartmentDeleteConfirmationDialogComponent', () => {
  let component: DepartmentDeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<DepartmentDeleteConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDeleteConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
