import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './forgot-password.component'; 

const forgotPasswordRoutes: Routes = [
    {path:'',component:ForgotpasswordComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(forgotPasswordRoutes)
  ],
  exports:[RouterModule]
})
export class ForgotPasswordModule { 
    
} 
 