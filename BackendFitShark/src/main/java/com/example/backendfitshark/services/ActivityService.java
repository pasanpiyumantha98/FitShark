package com.example.backendfitshark.services;

import com.example.backendfitshark.dto.ActivityDto;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.backendfitshark.repo.AcitivityRepo;
import com.example.backendfitshark.model.Acitivity;

import java.util.List;

@Service
@Transactional
public class ActivityService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AcitivityRepo activityRepo;

    // Register Acitvity
    public String regActivity(ActivityDto activityDto) {

        Integer maxid = activityRepo.getMaxId();
        int id;
        if (maxid == null) {
            id=0;
        } else{
            id=maxid;
        }


        id = id +1;
        activityDto.setId(id);
        activityRepo.save(modelMapper.map(activityDto, Acitivity.class));
        return "success";
    }

    // Get Acitivities
    public List<ActivityDto> getActivity(int id) {

       List<Acitivity> acitivityList = activityRepo.findAllAccById(id);
        return modelMapper.map(acitivityList,  new TypeToken<List<ActivityDto>>() {}.getType());

    }

}
