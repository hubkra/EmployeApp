package com.example.demo;

import com.example.demo.model.Employee;
import com.example.demo.repo.EmployeeRepo;
import com.example.demo.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/employee")
public class EmployeeResouce {
    private final EmployeeService employeeService;

    public EmployeeResouce(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees ()
    {
        List<Employee> employees = employeeService.findEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById (@PathVariable("id") Long id)
    {
        Employee employee = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee)
    {
        Employee newEmployee = employeeService.addEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
        Employee updateEmployee = employeeService.addEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id)
        {
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>(HttpStatus.OK);
    }
}