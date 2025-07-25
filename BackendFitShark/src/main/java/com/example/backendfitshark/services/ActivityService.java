package com.example.backendfitshark.services;

import com.example.backendfitshark.dto.ActivityDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.backendfitshark.repo.AcitivityRepo;
import com.example.backendfitshark.model.Acitivity;

@Service
@Transactional
public class ActivityService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AcitivityRepo activityRepo;

    // Register Acitvity
    public String regActivity(ActivityDto activityDto) {

        int id = activityRepo.getMaxId() +1;
        activityDto.setId(id);
        activityRepo.save(modelMapper.map(activityDto, Acitivity.class));
        return "success";
    }

    // Get Acitivities
    public ActivityDto getActivity(int id) {

    }

}
