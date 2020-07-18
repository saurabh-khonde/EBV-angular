import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpEmploymentServiceService {

  baseUrl="http://localhost:6545/api/";


  constructor(private http : HttpClient)
  {

  }

  public saveEmployeeDetails(employeeDetails)
  {
      return this.http.post(this.baseUrl,employeeDetails);
  }
}
