import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-department-add-edit',
  templateUrl: './department-add-edit.component.html',
  styleUrls: ['./department-add-edit.component.css']
})
export class DepartmentAddEditComponent implements OnInit {

  dataMessage: string;

  constructor(private service:SharedService, private data:DataService) { }

  messageText:string = " ";

  @Input() department:any;
  DepartmentId:string;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentId = this.department.DepartmentId;
    this.DepartmentName = this.department.DepartmentName;

    this.data.currentMessage.subscribe(dataMessage => this.dataMessage = dataMessage);
  }

  newMessage()
  {
    this.data.changeMessage(this.DepartmentName);
  }

  // addDepartment()
  // {
  //   var val =
  //   {
  //     DepartmentId:this.DepartmentId,
  //     DepartmentName:this.DepartmentName
  //   };
  //   this.service.addDepartment(val).subscribe(res=>{this.messageText=res.toString();});
  // }

  // updateDepartment()
  // {
  //   var val =
  //   {
  //     DepartmentId:this.DepartmentId,
  //     DepartmentName:this.DepartmentName
  //   };
  //   this.service.updateDepartment(val).subscribe(res=>{this.messageText=res.toString();});
  // }

  clearMessage()
  {
    this.messageText=" ";
  }
}
