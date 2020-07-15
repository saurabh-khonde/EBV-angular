import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { EmpEmploymentServiceService } from './emp-employment-service.service';


@Component({
  selector: 'app-employee-employment',
  templateUrl: './employee-employment.component.html',
  styleUrls: ['./employee-employment.component.scss']
})
export class EmployeeEmploymentComponent implements OnInit {

  

  
   // To initialize FormGroup  
    regiForm = new FormGroup({  
      'FirstName' : new FormControl(null, Validators.required),  
      'LastName' : new FormControl(null, Validators.required), 
      'Address' : new FormControl(null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])),  
      'DOB' : new FormControl(null, Validators.required), 
      'Gender':new FormControl(null, Validators.required),
      'Blog':new FormControl(null, Validators.required), 
      'Email':new FormControl(null, Validators.compose([Validators.required,Validators.email])),  
      'IsAccepted':new FormControl(null)  
  } ) 
  
  // On Change event of Toggle Button  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  
  
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
 
