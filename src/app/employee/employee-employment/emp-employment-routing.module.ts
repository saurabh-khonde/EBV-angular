import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEmploymentComponent } from './employee-employment.component';
import { Routes, RouterModule } from '@angular/router';

const empEmpRoutes: Routes = [
  {path:'',component:EmployeeEmploymentComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empEmpRoutes)
  ],
  exports:[RouterModule]
})
export class EmpEmploymentModule { }
