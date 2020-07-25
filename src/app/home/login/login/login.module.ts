import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


const emploginRoutes: Routes = [
    {path:'',component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, RouterModule.forChild(emploginRoutes)
  ],
  exports:[RouterModule]
})
export class emploginModule { } 
 