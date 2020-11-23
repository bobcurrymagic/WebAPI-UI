import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {

  dataMessage: string;

  constructor(private service:SharedService, private data:DataService) { }

  messageText:string = " ";

  @Input() employee:any;
  EmployeeId:string;
  EmployeeName:string;
  Department:string;
  DateOfJoining:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  DepartmentList:any[];

  ngOnInit(): void {
    // TODO WIP DEBUG NOW
    // this.employee.EmployeeName = this.dataMessage;
    this.data.currentMessage.subscribe(dataMessage => this.dataMessage = dataMessage);
    var messageText = this.dataMessage;
    var message = JSON.parse(messageText);
    this.employee.EmployeeId = message.EmployeeId;
    this.employee.EmployeeName = message.EmployeeName;
    this.employee.Department = message.Department;
    this.employee.DateOfJoining = message.DateOfJoining;
    this.employee.PhotoFileName = message.PhotoFileName;
    // this.employee.Department = "IT";
    // this.employee.DateOfJoining = "2020-11-22";
    // alert('EmployeeId-2: [' + this.employee.EmployeeId + ']');
    // alert('EmployeeName-2: [' + this.employee.EmployeeName + ']');
    // alert('Department-2: [' + this.employee.Department + ']');
    // alert('DateOfJoining-2: [' + this.employee.DateOfJoining + ']');
    // alert('PhotoFileName-2: [' + this.employee.PhotoFileName + ']');
    this.EmployeeId = this.employee.EmployeeId;
    this.EmployeeName = this.employee.EmployeeName;
    this.Department = this.employee.Department;
    this.DateOfJoining = this.employee.DateOfJoining;
    this.PhotoFileName = this.employee.PhotoFileName;
    this.PhotoFilePath = this.service.photoURL + this.PhotoFileName;

    this.loadDepartmentList();
    // alert('Department-3: [' + this.employee.Department + ']');
    // alert('Department-4: [' + this.Department + ']');
  }

  loadDepartmentList()
  {
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentList=data;

      this.EmployeeId = this.employee.EmployeeId;
      this.EmployeeName = this.employee.EmployeeName;
      this.Department = this.employee.Department;
      this.DateOfJoining = this.employee.DateOfJoining;
      this.PhotoFileName = this.employee.PhotoFileName;
      this.PhotoFilePath = this.service.photoURL + this.PhotoFileName;
    });
  }

  newMessage()
  {
    // TODO DEBUG WIP
    // this.data.changeMessage(this.EmployeeName);
    var message = {
      "EmployeeId": this.EmployeeId,
      "EmployeeName": this.EmployeeName,
      "Department": this.Department,
      "DateOfJoining": this.DateOfJoining,
      "PhotoFileName": this.PhotoFileName,
      "PhotoFilePath": this.PhotoFilePath
    }
    var messageText = JSON.stringify(message);
    this.data.changeMessage(messageText);
  }

  // addEmployee()
  // {
  //   var val =
  //   {
  //     EmployeeId:this.EmployeeId,
  //     EmployeeName:this.EmployeeName,
  //     Department:this.Department,
  //     DateOfJoining:this.DateOfJoining,
  //     PhotoFileName:this.PhotoFileName
  //   };
  //   this.service.addEmployee(val).subscribe(res=>{alert(res.toString());});
  // }

  // updateEmployee()
  // {
  //   var val =
  //   {
  //     EmployeeId:this.EmployeeId,
  //     EmployeeName:this.EmployeeName,
  //     Department:this.Department,
  //     DateOfJoining:this.DateOfJoining,
  //     PhotoFileName:this.PhotoFileName
  //   };
  //   this.service.updateEmployee(val).subscribe(res=>{alert(res.toString());});
  // }

  uploadPhoto(event)
  {
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photoURL + this.PhotoFileName;
    })
  }
  clearMessage()
  {
    this.messageText=" ";
  }
}
