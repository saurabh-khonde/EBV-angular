import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component'; 

const empSignUpRoutes: Routes = [
    {path:'',component:SignUpComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empSignUpRoutes)
  ],
  exports:[RouterModule]
})
export class SignUpModule { } 
 