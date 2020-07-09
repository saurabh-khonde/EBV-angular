import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './home/login/login/login.component';
import { LogoutComponent } from './home/login/logout/logout.component';
import { SignUpComponent } from './home/signUp/sign-up/sign-up.component';
import { EmployeeEducationComponent } from './employee/employee-education/employee-education.component';
import { EmployeeReferenceComponent } from './employee/employee-reference/employee-reference.component';
import { EmployeeEmploymentComponent } from './employee/employee-employment/employee-employment.component';
import { EmployeeDocumentsComponent } from './employee/employee-documents/employee-documents.component';
import { Pipe1Pipe } from './shared/pipes/pipe1.pipe';
import { Pipe2Pipe } from './shared/pipes/pipe2.pipe';
import { EmployeeAddressComponent } from './employee/employee-address/employee-address.component';
import { EmployeeFamilyComponent } from './employee/employee-family/employee-family.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    EmployeeAddressComponent,
    EmployeeFamilyComponent,
    EmployeeEducationComponent,
    EmployeeReferenceComponent,
    EmployeeEmploymentComponent,
    EmployeeDocumentsComponent,
    Pipe1Pipe,
    Pipe2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
