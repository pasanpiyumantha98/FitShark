package com.example.backendfitshark.controller;


import com.example.backendfitshark.dto.ActivityDto;
import com.example.backendfitshark.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/act")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("/add")
    public String AcitvityRegister(ActivityDto activityDto) {

        return activityService.regActivity(activityDto);
    }



}
