package com.example.backendfitshark.repo;

import com.example.backendfitshark.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


public interface UserRepo extends JpaRepository<User, Integer> {

    @Query(value= "SELECT * FROM User WHERE email =?1", nativeQuery = true)
    User findUserByEmail(String email);

    @Query(value="SELECT MAX(id) FROM User", nativeQuery = true)
    int findMaxId();

    @Modifying
    @Query(value="UPDATE User SET password=?1 WHERE id=?2", nativeQuery = true)
    void updatePass(String newPass, int id);

}
