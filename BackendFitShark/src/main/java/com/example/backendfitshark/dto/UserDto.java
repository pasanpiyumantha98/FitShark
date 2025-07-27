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
    String firstName;
    String lastName;
    String password;
    String gender;

}
