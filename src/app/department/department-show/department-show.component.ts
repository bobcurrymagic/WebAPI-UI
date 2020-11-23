import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.css']
})
export class DepartmentShowComponent implements OnInit {

  dataMessage: string;

  constructor(private service:SharedService, private data:DataService) { }

  messageText:string = " ";

  DepartmentList:any=[];

  dialogTitle:string;

  ActivateAddEditDepartmentComponent:boolean=false;
  ActivateDepartmentDeleteConfirmationDialogComponent:boolean=false;

  department:any=
  {
    DepartmentId:0,
    DepartmentName:""
  }

  departmentIDFilter:string="";
  departmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.ActivateAddEditDepartmentComponent=false;
    this.ActivateDepartmentDeleteConfirmationDialogComponent=false;
    this.refreshDepartmentList();

    this.data.currentMessage.subscribe(dataMessage => this.dataMessage = dataMessage)

  }

  newMessage()
  {
    this.data.changeMessage(this.department.DepartmentName);
  }

  refreshDepartmentList()
  {
    this.service.getDepartmentList().subscribe(data=>{ this.DepartmentList=data;this.DepartmentListWithoutFilter=data;})
  }

  filterDepartment()
  {
    var departmentIDFilter = this.departmentIDFilter;
    var departmentNameFilter = this.departmentNameFilter;
    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el){
      return el.DepartmentId.toString().toLowerCase().includes(
        departmentIDFilter.toString().trim().toLowerCase()
      )&&
      el.DepartmentName.toString().toLowerCase().includes(
        departmentNameFilter.toString().trim().toLowerCase()
      )
    });

  }

  sortResult(prop,asc)
  {
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function(a,b){
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
    this.department=
    {
      DepartmentId:0,
      DepartmentName:""
    }
    this.dialogTitle="Add Department";
    this.ActivateAddEditDepartmentComponent=true;
    this.newMessage();
  }

  editClick(item)
  {
    this.department = item;
    this.dialogTitle = "Edit Department";
    this.ActivateAddEditDepartmentComponent=true;
    this.newMessage();
  }

  deleteClick(item){
    this.department = item;
    this.dialogTitle = "Delete Department: " + this.department.DepartmentName;
    this.ActivateDepartmentDeleteConfirmationDialogComponent=true;
  }

  closeClick()
  {
    this.ActivateAddEditDepartmentComponent=false;
    this.refreshDepartmentList();
  }

  closeDepartmentDeleteConfirmationDialogClick()
  {
    this.ActivateDepartmentDeleteConfirmationDialogComponent=false;
    this.refreshDepartmentList();
  }

  addDepartment()
  {
    this.department.DepartmentName = this.dataMessage;

    var val =
    {
      DepartmentId:this.department.DepartmentId,
      DepartmentName:this.department.DepartmentName
    };
    this.service.addDepartment(val).subscribe(res=>{this.refreshDepartmentList();});
    this.ActivateAddEditDepartmentComponent=false;
  }

  addDepartmentContinueAddingMore()
  {
    this.department.DepartmentName = this.dataMessage;

    var val =
    {
      DepartmentId:this.department.DepartmentId,
      DepartmentName:this.department.DepartmentName
    };
    // this.service.addDepartment(val).subscribe(res=>{this.messageText=res.toString();this.refreshDepartmentList();});
    this.service.addDepartment(val).subscribe(res=>{this.refreshDepartmentList();});
  }

  // clearMessage()
  // {
  //   this.messageText=" ";
  // }

  updateDepartment()
  {
    this.department.DepartmentName = this.dataMessage;

    var val =
    {
      DepartmentId:this.department.DepartmentId,
      DepartmentName:this.department.DepartmentName
    };
    this.service.updateDepartment(val).subscribe(res=>{this.refreshDepartmentList();});
    this.ActivateAddEditDepartmentComponent=false;
  }

  deleteDepartment()
  {
    this.service.deleteDepartment(this.department.DepartmentId).subscribe(res=>{this.refreshDepartmentList();});
  }

  cancelAddDepartment()
  {
    this.ActivateAddEditDepartmentComponent=false;
  }

  cancelEditDepartment()
  {
    this.ActivateAddEditDepartmentComponent=false;
  }

}
