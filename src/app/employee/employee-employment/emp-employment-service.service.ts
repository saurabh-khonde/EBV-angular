import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpEmploymentServiceService {

  baseUrl = "localhost://8080/api/employeeDetauls/"; 

  constructor(private http : HttpClient) { }

  public saveEmployeeDetails(data)
  {
    return this.http.post(this.baseUrl,data);
  }
}
