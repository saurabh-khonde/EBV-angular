import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { EmpRefServiceService } from './emp-ref-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-reference',
  templateUrl: './employee-reference.component.html',
  styleUrls: ['./employee-reference.component.scss']
})
export class EmployeeReferenceComponent implements OnInit {
  
  constructor(private emprefserviceservice:EmpRefServiceService,private route:Router) { }

  ngOnInit(): void {
    
  }


  // To initialize FormGroup  
  regiForm = new FormGroup({  
    'FirstName' : new FormControl(null, Validators.required),  
    'LastName' : new FormControl(null, Validators.required), 
    'Designation' : new FormControl(null,Validators.required),
    'Relation':new FormControl(null, Validators.required),
    'Mobile' : new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10), Validators.maxLength(10)])),
    'Email':new FormControl(null, Validators.compose([Validators.required,Validators.email])),
} ) 


regFormArray = []
addMoreRef(form:NgForm) 
{
  this.regFormArray.push(form);
  this.regiForm.reset();
}

deleteRef(msg)
{
  console.log(msg);
  console.log(this.regFormArray.indexOf(msg));
  this.regFormArray.splice(this.regFormArray.indexOf(msg), 1);
}

onFormSubmit(form:NgForm) 
{
  this.regFormArray.push(form);
  console.log(this.regFormArray);
  this.route.navigate(['/empHomePage/empDoc']); 
}



// message:any
// onFormSubmit(form:NgForm)  
// {  
//   console.log(form);  

//   this.emprefserviceservice.EmpRefServiceService(form).subscribe(
//     data => this.message=data,
//     error => this.message=error
//   )

//   console.log(this.message)
// }  

}

