import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFamilyComponent } from './employee-family.component';

const empFamilyRoutes: Routes = [
  {path:'',component:EmployeeFamilyComponent}
]


@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empFamilyRoutes)
  ],
  exports:[RouterModule]
})
export class EmpFamilyModule { }
