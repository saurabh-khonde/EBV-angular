import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeWelcomeComponent } from './employee-welcome.component';

const empWclRoutes: Routes = [
  {path:'',component:EmployeeWelcomeComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empWclRoutes)
  ],
  exports:[RouterModule]
})
export class EmpWelcomeModule { }
