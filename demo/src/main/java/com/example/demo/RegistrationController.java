package com.example.demo;

import com.example.demo.service.RegistrationService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {


    @Autowired
    private RegistrationService service;
    public User registerUser(@RequestBody User user){
        User userObj =null;
       userObj= service.saveUser(user);
       return userObj;

    }
}
