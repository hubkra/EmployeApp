package com.example.demo.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Set;


@Entity
public class EmployeeDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;


    private String street;
    private String city;
    private String secondname;

    public EmployeeDetails() {
    }

    public EmployeeDetails(int id, String street, String city, String secondname) {
        this.id = id;
        this.street = street;
        this.city = city;
        this.secondname = secondname;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSecondname() {
        return secondname;
    }

    public void setSecondname(String secondname) {
        this.secondname = secondname;
    }
}
