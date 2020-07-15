import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpRefServiceService {

  url = "localhost:8090/api/registerEmp";

   constructor(private http: HttpClient) { }

   public EmpRefServiceService(form):Observable<any> 
   {
    return this.http.post<any>(this.url,form)
   }
}
