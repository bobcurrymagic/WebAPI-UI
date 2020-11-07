import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-show',
  templateUrl: './employee-show.component.html',
  styleUrls: ['./employee-show.component.css']
})
export class EmployeeShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  dialogTitle:string;

  ActivateAddEditEmployeeComponent:boolean=false;

  employee:any;

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  refreshEmployeeList()
  {
    this.service.getEmployeeList().subscribe(data=>{ this.EmployeeList=data;})
  }

  addClick()
  {
    this.employee=
    {
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.dialogTitle="Add Employee";
    this.ActivateAddEditEmployeeComponent=true;

  }

  editClick(item)
  {
    this.employee = item;
    this.dialogTitle = "Edit Employee";
    this.ActivateAddEditEmployeeComponent=true;
  }

  deleteClick(item){
    if(confirm('Are You Sure?')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmployeeList();
      })
    }
  }

  closeClick()
  {
    this.ActivateAddEditEmployeeComponent=false;
    this.refreshEmployeeList();
  }

}
