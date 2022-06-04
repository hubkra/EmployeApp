import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';



const routes: Routes= [
  
   { path:'',component:LoginComponent },
    {path:'employee', component:EmployeeComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, EmployeeComponent]