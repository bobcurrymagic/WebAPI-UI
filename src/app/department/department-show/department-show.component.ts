import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.css']
})
export class DepartmentShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];
  
  dialogTitle:string;

  ActivateAddEditDepartmentComponent:boolean=false;

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
    this.department=
    {
      DepartmentId:0,
      DepartmentName:""
    }
    this.dialogTitle="Add Department";
    this.ActivateAddEditDepartmentComponent=true;

  }

  editClick(item)
  {
    this.department = item;
    this.dialogTitle = "Edit Department";
    this.ActivateAddEditDepartmentComponent=true;
  }

  deleteClick(item){
    if(confirm('Are You Sure?')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepartmentList();
      })
    }
  }

  closeClick()
  {
    this.ActivateAddEditDepartmentComponent=false;
    this.refreshDepartmentList();
  }

}
