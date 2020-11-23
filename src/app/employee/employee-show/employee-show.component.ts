import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-employee-show',
  templateUrl: './employee-show.component.html',
  styleUrls: ['./employee-show.component.css']
})
export class EmployeeShowComponent implements OnInit {

  dataMessage: string;

  constructor(private service:SharedService, private data:DataService) { }

  messageText:string = " ";

  EmployeeList:any=[];

  dialogTitle:string;

  ActivateAddEditEmployeeComponent:boolean=false;
  ActivateEmployeeDeleteConfirmationDialogComponent:boolean=false;

  employee:any=
  {
    EmployeeId:0,
    EmployeeName:"",
    Department:"",
    DateOfJoining:"",
    PhotoFileName:"anonymous.png"
  }

  employeeIDFilter:string="";
  employeeNameFilter:string="";
  departmentNameFilter:string="";
  dateOfJoiningFilter:string="";
  EmployeeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.ActivateAddEditEmployeeComponent=false;
    this.ActivateEmployeeDeleteConfirmationDialogComponent=false;
    this.refreshEmployeeList();

    this.data.currentMessage.subscribe(dataMessage => this.dataMessage = dataMessage)

  }

  newMessage()
  {
    // TODO DEBUG WIP
    // this.data.changeMessage(this.employee.EmployeeName);
    var message = {
      "EmployeeId": this.employee.EmployeeId,
      "EmployeeName": this.employee.EmployeeName,
      "Department": this.employee.Department,
      "DateOfJoining": this.employee.DateOfJoining,
      "PhotoFileName": this.employee.PhotoFileName,
      "PhotoFilePath": this.employee.PhotoFilePath
    }
    var messageText = JSON.stringify(message);
    // TODO WIP DEBUG
    // alert('messageText: [' + messageText + ']');
    this.data.changeMessage(messageText);
  }

  refreshEmployeeList()
  {
    this.service.getEmployeeList().subscribe(data=>{ this.EmployeeList=data;this.EmployeeListWithoutFilter=data;})
  }

  filterEmployee()
  {
    var employeeIDFilter = this.employeeIDFilter;
    var employeeNameFilter = this.employeeNameFilter;
    var departmentNameFilter = this.departmentNameFilter;
    var dateOfJoiningFilter = this.dateOfJoiningFilter;
    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
      return el.EmployeeId.toString().toLowerCase().includes(
        employeeIDFilter.toString().trim().toLowerCase()
      )&&
      el.EmployeeName.toString().toLowerCase().includes(
        employeeNameFilter.toString().trim().toLowerCase()
      )&&
      el.Department.toString().toLowerCase().includes(
        departmentNameFilter.toString().trim().toLowerCase()
      )&&
      el.DateOfJoining.toString().toLowerCase().includes(
        dateOfJoiningFilter.toString().trim().toLowerCase()
      )

    });

  }

  sortResult(prop,asc)
  {
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a,b){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }
      else
      {
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
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
    this.newMessage();
  }

  editClick(item)
  {
    this.employee = item;
    // TODO WIP DEBUG
    // alert('EmployeeId: [' + this.employee.EmployeeId + ']');
    // alert('EmployeeName: [' + this.employee.EmployeeName + ']');
    // alert('Department: [' + this.employee.Department + ']');
    // alert('DateOfJoining: [' + this.employee.DateOfJoining + ']');
    // alert('PhotoFileName: [' + this.employee.PhotoFileName + ']');
    this.dialogTitle = "Edit Employee";
    this.ActivateAddEditEmployeeComponent=true;
    this.newMessage();
  }

  deleteClick(item){
    this.employee = item;
    this.dialogTitle = "Delete Employee: " + this.employee.EmployeeName;
    this.ActivateEmployeeDeleteConfirmationDialogComponent=true;
  }

  closeClick()
  {
    this.ActivateAddEditEmployeeComponent=false;
    this.refreshEmployeeList();
  }

  closeEmployeeDeleteConfirmationDialogClick()
  {
    this.ActivateEmployeeDeleteConfirmationDialogComponent=false;
    this.refreshEmployeeList();
  }

  addEmployee()
  {
    // TODO WIP DEBUG
    // this.employee.EmployeeName = this.dataMessage;
    var messageText = this.dataMessage;
    var message = JSON.parse(messageText);
    this.employee.EmployeeId = message.EmployeeId;
    this.employee.EmployeeName = message.EmployeeName;
    this.employee.Department = message.Department;
    this.employee.DateOfJoining = message.DateOfJoining;
    this.employee.PhotoFileName = message.PhotoFileName;
    // this.employee.Department = "IT";
    // this.employee.DateOfJoining = "2020-11-22";
    // alert('EmployeeId: [' + this.employee.EmployeeId + ']');
    // alert('EmployeeName: [' + this.employee.EmployeeName + ']');
    // alert('Department: [' + this.employee.Department + ']');
    // alert('DateOfJoining: [' + this.employee.DateOfJoining + ']');
    // alert('PhotoFileName: [' + this.employee.PhotoFileName + ']');
    
    var val =
    {
      EmployeeId:this.employee.EmployeeId,
      EmployeeName:this.employee.EmployeeName,
      Department:this.employee.Department,
      DateOfJoining:this.employee.DateOfJoining,
      PhotoFileName:this.employee.PhotoFileName
    };
    this.service.addEmployee(val).subscribe(res=>{this.refreshEmployeeList();});
    this.ActivateAddEditEmployeeComponent=false;
  }

  addEmployeeContinueAddingMore()
  {
    // TODO WIP DEBUG
    // this.employee.EmployeeName = this.dataMessage;
    var messageText = this.dataMessage;
    var message = JSON.parse(messageText);
    this.employee.EmployeeId = message.EmployeeId;
    this.employee.EmployeeName = message.EmployeeName;
    this.employee.Department = message.Department;
    this.employee.DateOfJoining = message.DateOfJoining;
    this.employee.PhotoFileName = message.PhotoFileName;

    var val =
    {
      EmployeeId:this.employee.EmployeeId,
      EmployeeName:this.employee.EmployeeName,
      Department:this.employee.Department,
      DateOfJoining:this.employee.DateOfJoining,
      PhotoFileName:this.employee.PhotoFileName
    };
    // this.service.addEmployee(val).subscribe(res=>{this.messageText=res.toString();this.refreshEmployeeList();});
    this.service.addEmployee(val).subscribe(res=>{this.refreshEmployeeList();});
  }

  // clearMessage()
  // {
  //   this.messageText=" ";
  // }

  updateEmployee()
  {
    // TODO WIP DEBUG
    // this.employee.EmployeeName = this.dataMessage;
    var messageText = this.dataMessage;
    var message = JSON.parse(messageText);
    this.employee.EmployeeId = message.EmployeeId;
    this.employee.EmployeeName = message.EmployeeName;
    this.employee.Department = message.Department;
    this.employee.DateOfJoining = message.DateOfJoining;
    this.employee.PhotoFileName = message.PhotoFileName;

    var val =
    {
      EmployeeId:this.employee.EmployeeId,
      EmployeeName:this.employee.EmployeeName,
      Department:this.employee.Department,
      DateOfJoining:this.employee.DateOfJoining,
      PhotoFileName:this.employee.PhotoFileName
    };
    this.service.updateEmployee(val).subscribe(res=>{this.refreshEmployeeList();});
    this.ActivateAddEditEmployeeComponent=false;
  }

  deleteEmployee()
  {
    this.service.deleteEmployee(this.employee.EmployeeId).subscribe(res=>{this.refreshEmployeeList();});
  }

  cancelAddEmployee()
  {
    this.ActivateAddEditEmployeeComponent=false;
  }

  cancelEditEmployee()
  {
    this.ActivateAddEditEmployeeComponent=false;
  }

}
