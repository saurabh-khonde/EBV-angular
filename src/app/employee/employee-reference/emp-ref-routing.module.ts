import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeReferenceComponent } from './employee-reference.component';
import { Routes, RouterModule } from '@angular/router';

const empRefRoutes: Routes = [
  {path:'',component:EmployeeReferenceComponent}
]


@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empRefRoutes)
  ],
  exports:[RouterModule]
})
export class EmpReferenceModule { }
