import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  url = "http://localhost:8082/api/employee/postEmployeeDetails";
  
  constructor(private http: HttpClient) { }

  // public signUpEmployeeService(form):Observable<any>
  // {
  //   return this.http.post<any>(this.url,form)
  // }

  public signUpEmployeeService(form)
  {
    return this.http.post<any>(this.url,form,{responseType:'text' as 'json'})
  }
}
 