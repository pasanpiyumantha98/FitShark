package com.example.backendfitshark.services;

import com.example.backendfitshark.model.User;
import com.example.backendfitshark.dto.UserDto;
import com.example.backendfitshark.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;


    public String regUser(UserDto userDto) {
        userRepo.save(modelMapper.map(userDto, User.class));
        return "Done";
    }

    public String logUser(UserDto userDto) {

        User user = userRepo.findById()
    }



}
