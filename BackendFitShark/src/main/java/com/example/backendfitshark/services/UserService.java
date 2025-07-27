package com.example.backendfitshark.services;

import com.example.backendfitshark.dto.ActivityDto;
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

    //Register User
    public String regUser(UserDto userDto) {

        Integer maxId = userRepo.findMaxId(); // assuming it returns Integer
        int id;

        if (maxId == null) {
            id = 1;
        } else {
            id = maxId + 1;
        }

        userDto.setId(id);

        User user = userRepo.findUserByEmail(userDto.getEmail());

        if(user == null) {
            userRepo.save(modelMapper.map(userDto, User.class));
            return "Done";
        } else
        {
            return "UserIn";
        }
    }

    // Login User
    public String logUser(UserDto userDto) {
        User user = userRepo.findUserByEmail(userDto.getEmail());

        if(user == null) {
            return "NotFound";
        } else if (user.getPassword().equals(userDto.getPassword()))
        {
            return "Success";
        } else {
            return "Error";
        }

    }

    //update user password
    public String updatePass(UserDto  userDto)
    {
            String pass = userDto.getPassword();
            int  id = userDto.getId();
            userRepo.updatePass(pass, id);
            return "Done";
    }



}
