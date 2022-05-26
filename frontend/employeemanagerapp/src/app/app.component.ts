import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees?: Employee[];
  title: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(employee:Employee, mode: string): void {
    const container = document.getElementById('main-cont');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add')
    {
      button.setAttribute('data-toggle','#addEmployeeModal');
    }
    if (mode === 'edit')
    {
      button.setAttribute('data-toggle','#updateEmployeeModal');
    }
    if (mode === 'delete')
    {
      button.setAttribute('data-toggle','#deleteEmployeeModal');
    }

    container?.appendChild(button);
    button.click();
  }

}
