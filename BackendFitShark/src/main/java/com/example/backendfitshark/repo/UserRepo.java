package com.example.backendfitshark.repo;

import com.example.backendfitshark.dto.UserDto;
import com.example.backendfitshark.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface UserRepo extends JpaRepository<User, Integer> {

    @Query(value= "SELECT * FROM User WHERE email =?1", nativeQuery = true)
    User findUserByEmail(String email);

    @Query(value= "SELECT * FROM User WHERE id =?1", nativeQuery = true)
    List<User> findUserById(int id);

    @Query(value="SELECT MAX(id) FROM User", nativeQuery = true)
    Integer findMaxId();

    @Modifying
    @Query(value="UPDATE User SET password=?1 WHERE id=?2", nativeQuery = true)
    void updatePass(String newPass, int id);

}
