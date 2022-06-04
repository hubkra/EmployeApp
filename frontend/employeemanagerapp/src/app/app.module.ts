import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
