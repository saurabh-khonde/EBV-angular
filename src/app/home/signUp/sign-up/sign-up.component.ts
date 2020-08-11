import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SignUpServiceService } from '../sign-up-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html', 
  styleUrls: ['./sign-up.component.scss'],
  providers :[SignUpServiceService]
})
export class SignUpComponent implements OnInit {

  constructor(private service:SignUpServiceService,private route:Router) { }
 
  ngOnInit(): void {
  }

  password:string ; cpassword:string;
  IsAccepted:number=0;  

   // To initialize FormGroup    
   regiForm = new FormGroup({  
    'firstName' : new FormControl(null, Validators.required),  
    'lastName' : new FormControl(null, Validators.required),  
    'dateOfBirth' : new FormControl(null, Validators.required), 
    'gender':new FormControl(null, Validators.required),
    'mobileNo' : new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10), Validators.maxLength(10)])),  
    userEntity : new FormGroup({
    'emailId':new FormControl(null, Validators.compose([Validators.required,Validators.email])),  
    'password' : new FormControl(null, Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    'IsAccepted':new FormControl(null,Validators.required)
  })
} ) 

message:any
// Executed When Form Is Submitted  
onFormSubmit(form:NgForm)  
{  
  console.log(form);  

  this.service.signUpEmployeeService(form).subscribe(
    (data) => this.message=data
    // error => this.message.error
  )
  console.log(this.message) 

  // this.route.navigate(['/login']); 
}  

}
