import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup, FormControl } from '@angular/forms';
import { EmpEducationServiceService } from './emp-education-service.service';



@Component({
  selector: 'app-employee-education',
  templateUrl: './employee-education.component.html',
  styleUrls: ['./employee-education.component.scss']
})
export class EmployeeEducationComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private service:EmpEducationServiceService) { }
  title = 'EmpVerify';
   
  
  empEducationForm = new FormGroup({  
    'university' : new FormControl(null, Validators.required),  
    'Stream' : new FormControl(null, Validators.required),
    'CollegeName' : new FormControl(null, Validators.required), 
    'YearOfPassing' : new FormControl(null, Validators.required),  
    'Type':new FormControl(null, Validators.required),
    'Qualification':new FormControl(null, Validators.required), 
    'IsYearGap':new FormControl(null, Validators.required),
    'Percentage' : new FormControl(null, Validators.required), 
    'NoOfYearGap' : new FormControl(null, Validators.required),
    'IsAccepted':new FormControl(null)  
} ) 

message:any
// Executed When Form Is Submitted  
onFormSubmit(form:NgForm)  
{  
  console.log(form);  

  this.service.EmpEducationService(form).subscribe(
    data => this.message=data,
    error => this.message=error
  )

  console.log(this.message)
}  
}
