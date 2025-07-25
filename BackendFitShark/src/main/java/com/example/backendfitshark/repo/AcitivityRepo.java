package com.example.backendfitshark.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backendfitshark.model.Acitivity;
import org.springframework.data.jpa.repository.Query;

public interface AcitivityRepo extends JpaRepository<Acitivity, Integer> {

    @Query(value="SELECT max(id) from acitivity", nativeQuery = true)
    int getMaxId();

}
