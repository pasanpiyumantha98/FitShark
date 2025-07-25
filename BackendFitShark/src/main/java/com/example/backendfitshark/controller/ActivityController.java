package com.example.backendfitshark.controller;


import com.example.backendfitshark.dto.ActivityDto;
import com.example.backendfitshark.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/act")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("/add")
    public String AcitvityRegister(@RequestBody ActivityDto activityDto) {

        return activityService.regActivity(activityDto);
    }



}
