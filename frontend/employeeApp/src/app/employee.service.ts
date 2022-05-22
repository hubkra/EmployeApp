import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
}) 
export class EmployeeService  {
    private apiServerUrl= environment.apiBaseUrl;

    constructor(private http : HttpClient){ }


        public  getEmployees(): Observable<Employee[]>{
            return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
        }
    

    public  addEmployees(employee: Employee){
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
    }

    public  updateEmployees(employee: Employee){
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`,employee);
    }

    public  deleteEmployees(employeeId: number){
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
}