package com.example.demo.repo;

import com.example.demo.model.EmployeeDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailsRepo extends JpaRepository<EmployeeDetails, Integer> {
}
