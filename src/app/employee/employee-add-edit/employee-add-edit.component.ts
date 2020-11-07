import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() employee:any;
  EmployeeId:string;
  EmployeeName:string;
  Department:string;
  DateOfJoining:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  DepartmentList:any[];

  ngOnInit(): void {
    this.loadDepartmentList();
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

  addEmployee()
  {
    var val =
    {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
    };
    this.service.addEmployee(val).subscribe(res=>{alert(res.toString());});
  }

  updateEmployee()
  {
    var val =
    {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
    };
    this.service.updateEmployee(val).subscribe(res=>{alert(res.toString());});
  }

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
}
