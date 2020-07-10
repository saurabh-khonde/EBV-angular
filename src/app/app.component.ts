import { Component } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmpVerify';
  name = 'yogesh';

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
