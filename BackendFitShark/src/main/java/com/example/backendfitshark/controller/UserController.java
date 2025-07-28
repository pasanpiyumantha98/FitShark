package com.example.backendfitshark.controller;


import com.example.backendfitshark.dto.UserDto;
import com.example.backendfitshark.repo.UserRepo;
import com.example.backendfitshark.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String Register(@RequestBody UserDto userDto) {
        return userService.regUser(userDto);
    }

    @PostMapping("/login")
    public int Login(@RequestBody UserDto userDto) {
        return userService.logUser(userDto);
    }

    @PostMapping("/update/pass")
    public String updatePass(@RequestBody UserDto userDto) {
       return userService.updatePass(userDto);
    }



}
