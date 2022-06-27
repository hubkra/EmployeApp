package com.example.demo.controller;

import com.example.demo.dto.OrderRequest;
import com.example.demo.model.Project;
import com.example.demo.repo.ProjectRepo;
import com.example.demo.repo.TeamsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {
        @Autowired
        private ProjectRepo projectRepo;
        @Autowired
        private TeamsRepo teamsRepo;

        @PostMapping("/addProject")
        public Project project(@RequestBody OrderRequest request)
        {
            return projectRepo.save(request.getProject());
        }
      @GetMapping("/findAllProject")
        public List<Project> findAllProject(){
            return projectRepo.findAll();
        }

        @PutMapping("/updateProject")
        public Project updateProject(@RequestBody OrderRequest request)
        {
            return projectRepo.save(request.getProject());
        }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable("id") Long id) {
        projectRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
