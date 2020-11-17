import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ng --version
// ng serve --open
// src/app/app.component.html: Hello World
// src/app/app.module.ts

// ng generate component department
import { DepartmentComponent } from './department/department.component';

// ng generate component department/department-show
import { DepartmentShowComponent } from './department/department-show/department-show.component';

// ng generate component department/department-add-edit
import { DepartmentAddEditComponent } from './department/department-add-edit/department-add-edit.component';

// ng generate component employee
import { EmployeeComponent } from './employee/employee.component';

// ng generate component employee/employee-show
import { EmployeeShowComponent } from './employee/employee-show/employee-show.component';

// ng generate component employee/employee-add-edit
import { EmployeeAddEditComponent } from './employee/employee-add-edit/employee-add-edit.component';

// ng generate service shared
import { SharedService } from './shared.service';
import { DepartmentDeleteConfirmationDialogComponent } from './department/department-delete-confirmation-dialog/department-delete-confirmation-dialog.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component'; // Import SharedService


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DepartmentShowComponent,
    DepartmentAddEditComponent,
    EmployeeComponent,
    EmployeeShowComponent,
    EmployeeAddEditComponent,
    DepartmentDeleteConfirmationDialogComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Import HttpClientModule
    FormsModule,  // Import FormsModule
    ReactiveFormsModule  // Import ReactiveFormsModule
  ],
  providers: [SharedService], // Register SharedService
  bootstrap: [AppComponent]
})
export class AppModule { }
