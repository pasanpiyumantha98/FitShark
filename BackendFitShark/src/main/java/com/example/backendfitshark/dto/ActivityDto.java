package com.example.backendfitshark.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDto {
    int id;
    int user_id;
    String activity_id;
    int hours;
    int minutes;
}
