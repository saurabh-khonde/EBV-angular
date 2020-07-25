import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  email: string;
  password: string;
  
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  login() {
      if (this.email === 'user' && this.password === 'user@123') {
          console.log("Login Succesfully");

            this.route.navigate(['/empHomePage/empWelcome']); 

        }
        else {
          console.log("Login Failed");
        }
  }
}
