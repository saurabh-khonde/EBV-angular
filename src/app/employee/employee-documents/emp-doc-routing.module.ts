import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDocumentsComponent } from './employee-documents.component';

const empDocRoutes: Routes = [
  {path:'',component:EmployeeDocumentsComponent}
]


@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(empDocRoutes)
  ],
  exports:[RouterModule]
})
export class EmpDocModule { }
