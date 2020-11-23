import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-delete-confirmation-dialog',
  templateUrl: './employee-delete-confirmation-dialog.component.html',
  styleUrls: ['./employee-delete-confirmation-dialog.component.css']
})
export class EmployeeDeleteConfirmationDialogComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() employee:any;
  EmployeeId:string;
  EmployeeName:string;

  ngOnInit(): void {
    this.EmployeeId = this.employee.EmployeeId;
    this.EmployeeName = this.employee.EmployeeName;
  }

}
