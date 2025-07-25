package com.example.backendfitshark.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backendfitshark.model.Acitivity;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AcitivityRepo extends JpaRepository<Acitivity, Integer> {

    @Query(value="SELECT max(id) from acitivity", nativeQuery = true)
    int getMaxId();

    //getting all enrties that macthes the id as a list
    @Query(value = "SELECT  * from acitivity where user_id=?1", nativeQuery = true)
    List<Acitivity> findAllAccById(int id);

}
