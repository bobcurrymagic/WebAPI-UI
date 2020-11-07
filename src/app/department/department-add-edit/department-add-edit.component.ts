import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-department-add-edit',
  templateUrl: './department-add-edit.component.html',
  styleUrls: ['./department-add-edit.component.css']
})
export class DepartmentAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() department:any;
  DepartmentId:string;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentId = this.department.DepartmentId;
    this.DepartmentName = this.department.DepartmentName;
  }

  addDepartment()
  {
    var val =
    {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    };
    this.service.addDepartment(val).subscribe(res=>{alert(res.toString());});
  }

  updateDepartment()
  {
    var val =
    {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    };
    this.service.updateDepartment(val).subscribe(res=>{alert(res.toString());});
  }

}
