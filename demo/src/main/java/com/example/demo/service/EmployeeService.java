package com.example.demo.service;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {

        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee)
    {
        return employeeRepo.save(employee);

    }

    public List<Employee> findEmployees()
    {
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee)
    {
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(Long id)
    {
        return employeeRepo.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("Uzytkownik o id "+id + " nie został odnaleziony"));
    }
    public void deleteEmployee(Long id){
        employeeRepo.deleteById(id);
    }
}
