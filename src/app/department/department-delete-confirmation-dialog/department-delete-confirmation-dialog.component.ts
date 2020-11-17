import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-department-delete-confirmation-dialog',
  templateUrl: './department-delete-confirmation-dialog.component.html',
  styleUrls: ['./department-delete-confirmation-dialog.component.css']
})
export class DepartmentDeleteConfirmationDialogComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() department:any;
  DepartmentId:string;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentId = this.department.DepartmentId;
    this.DepartmentName = this.department.DepartmentName;
  }

}
