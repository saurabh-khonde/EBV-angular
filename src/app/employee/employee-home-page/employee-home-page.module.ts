import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeHomePageComponent } from './employee-home-page.component';
import { EmpWelcomeModule } from '../employee-welcome/emp-welcome-routing.module';
import { EmpEmploymentModule } from '../employee-employment/emp-employment-routing.module';
import { EmpAddressModule } from '../employee-address/emp-address-routing.module';
import { EmpFamilyModule } from '../employee-family/emp-family-routing.module';
import { EmpDocModule } from '../employee-documents/emp-doc-routing.module';
import { EmpReferenceModule } from '../employee-reference/emp-ref-routing.module';
import { empEducationModule } from '../employee-education/emp-education-routing.module';


const empRoutes: Routes = [
  {path:'',component:EmployeeHomePageComponent, children:[
    {path:'empWelcome',loadChildren:'../employee-welcome/emp-welcome-routing.module#EmpWelcomeModule'},
    {path:'empAddress',loadChildren:'../employee-address/emp-address-routing.module#EmpAddressModule'},
    {path:'empDoc',loadChildren:'../employee-documents/emp-doc-routing.module#EmpDocModule'},
    {path:'empEducation',loadChildren:'../employee-education/emp-education-routing.module#empEducationModule'},
    {path:'empFamily',loadChildren:'../employee-family/emp-family-routing.module#EmpFamilyModule'},
    {path:'empReference',loadChildren:'../employee-reference/emp-ref-routing.module#EmpReferenceModule'},
    {path:'empEmp',loadChildren:'../employee-employment/emp-employment-routing.module#EmpEmploymentModule'} 
  ]}

]; 
   
@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, 
    EmpDocModule,
    EmpFamilyModule,
    EmpAddressModule,
    EmpWelcomeModule,
    EmpEmploymentModule,
    EmpReferenceModule,
    empEducationModule,
    RouterModule.forChild(empRoutes)
  ],
  exports:[RouterModule]
})
export class EmployeeHomePageModule { }
  