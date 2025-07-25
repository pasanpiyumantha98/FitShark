package com.example.backendfitshark.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Acitivity {

    @Id
    int id;

    int user_id;
    int activity_id;
    int hours;
    int minutes;



}
