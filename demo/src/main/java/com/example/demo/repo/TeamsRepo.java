package com.example.demo.repo;

import com.example.demo.model.Teams;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamsRepo extends JpaRepository<Teams,Long> {
}
