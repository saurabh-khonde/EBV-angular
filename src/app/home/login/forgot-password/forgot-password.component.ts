import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email: string;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  public onSubmit(){
    console.log("Sent New Password to registered email");
  }
}
    



























    
                      

