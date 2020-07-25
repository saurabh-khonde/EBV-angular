import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import { EmpEmploymentServiceService } from './emp-employment-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-employment',
  templateUrl: './employee-employment.component.html',
  styleUrls: ['./employee-employment.component.scss']
})
export class EmployeeEmploymentComponent implements OnInit{

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
   // To initialize FormGroup  
   regiForm = new FormGroup({  

    'EmpCompanyID' : new FormControl(null, Validators.required),
    'CompanyName': new FormControl(null, Validators.required),
    'CompanyAddress': new FormControl(null, Validators.required),
    'IndustryType': new FormControl(null, Validators.required),
    'Designation':new FormControl(null, Validators.required),
    'EmploymentType':new FormControl(null, Validators.required),
    'WorkFrom':new FormControl(null, Validators.required),
    'WorkTill':new FormControl(null, Validators.required),
    'Salary':new FormControl(null, Validators.required),
    'SupervisiorName':new FormControl(null, Validators.required),
    'SupervisiorContactNumber':new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10), Validators.maxLength(10)])),
    'SupervisiorEmail':new FormControl(null, Validators.compose([Validators.required,Validators.email])),  
    'ReasonForLeaving':new FormControl(null, Validators.required),
    'EligibleForRehire':new FormControl(null, Validators.required),
    'AgencyName':new FormControl(null, Validators.required)
  })
  // On Change event of Toggle Button  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
    this.route.navigate(['/empHomePage/empReference']); 
  }  
  
  }
 