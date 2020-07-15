import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { EmpEmploymentServiceService } from './emp-employment-service.service';


@Component({
  selector: 'app-employee-employment',
  templateUrl: './employee-employment.component.html',
  styleUrls: ['./employee-employment.component.scss']
})
export class EmployeeEmploymentComponent implements OnInit {

  employeeDetails : FormGroup;

  

  constructor(private empService : EmpEmploymentServiceService)
  {
    this.employeeDetails = new FormGroup({  
      'CompanyID' : new FormControl(null, Validators.required),  
      'CompanyName' : new FormControl(null, Validators.required), 
      'CompanyAddress' : new FormControl(null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])),  
      'IndustryType' : new FormControl(null, Validators.required), 
      'Designation':new FormControl(null, Validators.required),
      'EmploymentType':new FormControl(null, Validators.required),
      'WorkFrom':new FormControl(null, Validators.required), 
      'WorkTill':new FormControl(null, Validators.required),
      'Salary':new FormControl(null, Validators.required), 
      'SupervisiorName':new FormControl(null, Validators.required),   
      'SupervisiorContactNumber':new FormControl(null, Validators.required), 
      'SupervisiorEmail':new FormControl(null, Validators.compose([Validators.required,Validators.email])),  
      'ReasonForLeaving':new FormControl(null, Validators.required), 
      'EligibleForRehire':new FormControl(null, Validators.required), 
      'AgencyName':new FormControl(null, Validators.required), 

  })
  }

  ngOnInit() {
    
  }
  response;
  onSubmit(data : any)
  {
      console.log(data);

      this.empService.saveEmployeeDetails(data).subscribe(
          res =>{this.response = res ;
              console.log(this.response);
          },
          err =>{this.response = err}
      )
      
  } 

} 
 
