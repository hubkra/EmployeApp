import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { TeamsComponent } from './teams/teams.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    routingComponents,
    ProjectComponent,
    TeamsComponent
    
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
