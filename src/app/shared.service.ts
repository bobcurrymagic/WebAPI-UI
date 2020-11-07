import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';  // Import Observable

@Injectable({
  providedIn: 'root'
})
export class SharedService
{

  //readonly APIURL = "http://localhost:51995/api";  // APIURL
  //readonly photoURL = "http://localhost:51995/Photos/";  // photoURL
  readonly APIURL = "http://webapi-bobcurrymagic.azurewebsites.net/api";  // APIURL
  readonly photoURL = "http://webapi-bobcurrymagic.azurewebsites.net/Photos/";  // photoURL

  //  constructor() { }
  constructor(private http:HttpClient) { }  // DI HttpClient

  // api/Department
  // GET
  getDepartmentList():Observable<any[]>
  {
    return this.http.get<any>(this.APIURL + '/Department');
  }

  // api/Department
  // POST
  addDepartment(val:any)
  {
    return this.http.post(this.APIURL + '/Department', val);
  }

  // api/Department
  // PUT
  updateDepartment(val:any)
  {
    return this.http.put(this.APIURL + '/Department', val);
  }
  
  // api/Department/
  // DELETE
  deleteDepartment(val:any)
  {
    return this.http.delete(this.APIURL + '/Department/' + val.toString());
  }
  
  // api/Employee
  // GET
  getEmployeeList():Observable<any[]>
  {
    return this.http.get<any>(this.APIURL + '/Employee');
  }

  // api/Employee
  // POST
  addEmployee(val:any)
  {
    return this.http.post(this.APIURL + '/Employee', val);
  }

  // api/Employee
  // PUT
  updateEmployee(val:any)
  {
    return this.http.put(this.APIURL + '/Employee', val);
  }

  // api/Employee/
  // DELETE
  deleteEmployee(val:any)
  {
    return this.http.delete(this.APIURL + '/Employee/' + val.toString());
  }

  // api/Employee/SaveFile
  // POST
  uploadPhoto(val:any)
  {
    return this.http.post(this.APIURL + '/Employee/SaveFile',val);
  }

  // api/Department
  // GET
  getAllDepartmentNames():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIURL + '/Employee/GetAllDepartmentNames');
  }

}
