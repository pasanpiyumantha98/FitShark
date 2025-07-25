package com.example.backendfitshark.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    int id;

    String email;
    String name;
    int age;
    String password;
    String gender;
    int phone;
}
