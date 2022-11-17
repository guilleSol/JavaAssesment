package com.assesment.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assesment.project.entities.UserData;

@Repository
public interface UserDataRepo extends JpaRepository<UserData, Long>{

}
