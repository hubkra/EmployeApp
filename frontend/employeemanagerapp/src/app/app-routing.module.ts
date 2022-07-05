import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes= [
  
   { path:'',component:LoginComponent },
    {path:'employee', component:EmployeeComponent},
    {path:'registration', component:RegistrationComponent}
    
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, EmployeeComponent]