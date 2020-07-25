import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddressComponent } from './employee-address.component';

const empAddressRoutes: Routes = [
  {path:'',component:EmployeeAddressComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empAddressRoutes)
  ],
  exports:[RouterModule]
})
export class EmpAddressModule { }
