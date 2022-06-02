package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repo.RegistrationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    private final RegistrationRepo userRepo;

    @Autowired
    public RegistrationService(RegistrationRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User saveUser(User user)
    {
        return userRepo.save(user);
    }
}