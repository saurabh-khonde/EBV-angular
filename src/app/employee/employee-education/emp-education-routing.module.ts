import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEducationComponent } from './employee-education.component';

const empEduRoutes: Routes = [
  {path:'',component:EmployeeEducationComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empEduRoutes)
  ],
  exports:[RouterModule]
})
export class empEducationModule { }
