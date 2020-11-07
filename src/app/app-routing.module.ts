import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';  // EmployeeComponent
import { DepartmentComponent } from './department/department.component';  // DepartmentComponent

const routes: Routes =
[
  {
    path: 'employee', component: EmployeeComponent  // EmployeeComponent
  },
  {
    path: 'department', component: DepartmentComponent  // DepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
