package com.example.backendfitshark.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backendfitshark.model.Acitivity;

public interface AcitivityRepo extends JpaRepository<Acitivity, Integer> {
}
