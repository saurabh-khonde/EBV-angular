import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  url = "localhost:8090/api/registerEmp";
  
  constructor(private http: HttpClient) { }

  public signUpEmployeeService(form):Observable<any>
  {
    return this.http.post<any>(this.url,form)
  }
}
 