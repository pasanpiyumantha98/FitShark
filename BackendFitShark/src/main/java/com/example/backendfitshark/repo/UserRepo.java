package com.example.backendfitshark.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backendfitshark.model.User;
public interface UserRepo extends JpaRepository<User, Integer> {
}
