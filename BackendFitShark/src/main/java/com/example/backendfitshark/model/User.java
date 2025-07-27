package com.example.backendfitshark.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    @Id
    int id;

    String email;
    String firstName;
    String lastName;
    String password;
    String gender;


}