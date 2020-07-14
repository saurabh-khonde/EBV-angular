import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-family',
  templateUrl: './employee-family.component.html',
  styleUrls: ['./employee-family.component.scss']
})
export class EmployeeFamilyComponent implements OnInit {

  constructor() { 
  }
 
  ngOnInit(): void {
  }
  regiForm = new FormGroup({  
    'FirstName' : new FormControl(null, Validators.required),  
    'LastName' : new FormControl(null, Validators.required),
    'DateOfBirth': new FormControl(null, Validators.required),
    'Occupation': new FormControl(null, Validators.required),
    'Relation':new FormControl(null, Validators.required),
    'Email':new FormControl(null, Validators.compose([Validators.required,Validators.email])),  
    'MobileNumber':new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10), Validators.maxLength(10)]))

} ) 

onFormSubmit(form:NgForm)  
{  
  console.log(form);  
} 
}





