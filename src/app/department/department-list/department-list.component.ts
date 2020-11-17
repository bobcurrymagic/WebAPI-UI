import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];
  
  dialogTitle:string;

  ActivateDepartmentDeleteConfirmationDialogComponent:boolean=false;

  department:any;

  departmentIDFilter:string="";
  departmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepartmentList();
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
    // TODO REMOVE
    // this.department=
    // {
    //   DepartmentId:0,
    //   DepartmentName:""
    // }
    // this.dialogTitle="Add Department";
    // this.ActivateAddEditDepartmentComponent=true;
    // TODO IMPLEMENT
  }

  editClick(item)
  {
    // TODO REMOVE
    // this.department = item;
    // this.dialogTitle = "Edit Department";
    // this.ActivateAddEditDepartmentComponent=true;
    // TODO IMPLEMENT
  }

  deleteClick(item){
    // TODO REMOVE
    // this.department = item;
    // this.dialogTitle = "Delete Department";
    // this.ActivateDepartmentDeleteConfirmationDialogComponent=true;
    // TODO IMPLEMENT WIP
    this.department = item;
    this.dialogTitle = "Delete Department";
    this.ActivateDepartmentDeleteConfirmationDialogComponent=true;
  }

  // TODO REMOVE
  // closeClick()
  // {
  //   this.ActivateAddEditDepartmentComponent=false;
  //   this.refreshDepartmentList();
  // }

  closeDepartmentDeleteConfirmationDialogClick()
  {
  // TODO REMOVE
  // this.ActivateDepartmentDeleteConfirmationDialogComponent=false;
  // this.refreshDepartmentList();
  // TODO IMPLEMENT WIP
  this.ActivateDepartmentDeleteConfirmationDialogComponent=false;
  }

  deleteDepartment()
  {
    this.service.deleteDepartment(this.department.DepartmentId).subscribe(res=>{this.refreshDepartmentList();});
    // alert("hello1");
    // this.refreshDepartmentList();
    // alert("hello2");
  }

  closeDepartmentDeleteConfirmationDialog()
  {
    // TODO IMPLEMENT WIP
    
  }

}
