import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  pwdform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
  });

  public onSubmit(form:NgForm){
    console.log(form);
  }
}
    



























    
                      

