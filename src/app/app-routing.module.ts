import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'signup', loadChildren:'./home/signUp/sign-up/sign-Up.module#SignUpModule'},
  {path:'login', loadChildren:'./home/login/login/login.module#emploginModule'}, 
  {path:'empHomePage', loadChildren:'./employee/employee-home-page/employee-home-page.module#EmployeeHomePageModule'},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
