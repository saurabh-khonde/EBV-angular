import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  password:string ; cpassword:string;
  IsAccepted:number=0;  

   // To initialize FormGroup   
   regiForm = new FormGroup({  
    'FirstName' : new FormControl(null, Validators.required),  
    'LastName' : new FormControl(null, Validators.required), 
    'DOB' : new FormControl(null, Validators.required), 
    'Gender':new FormControl(null, Validators.required),
    'Mobile' : new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10), Validators.maxLength(10)])),  
    'Email':new FormControl(null, Validators.compose([Validators.required,Validators.email])),  
    'CreatePassword' : new FormControl(null, Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    'IsAccepted':new FormControl(null,Validators.required)  
} ) 


// Executed When Form Is Submitted  
onFormSubmit(form:NgForm)  
{  
  console.log(form);  
}  
}
