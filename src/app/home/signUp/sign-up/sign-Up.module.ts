import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component'; 
import { HttpClientModule } from '@angular/common/http';

const empSignUpRoutes: Routes = [
    {path:'',component:SignUpComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empSignUpRoutes),
    HttpClientModule
  ],
  exports:[RouterModule]
})
export class SignUpModule { } 
 