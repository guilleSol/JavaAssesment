package com.assesment.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assesment.project.entities.UserData;
import com.assesment.project.repo.UserDataRepo;

@Service
public class UserDataService {

	@Autowired
	UserDataRepo repo;

	public UserDataService() {

	}

	public Optional<UserData> getUserDataById(Long id) {
		return repo.findById(id);
	}

	public void addUserData(UserData user) {
		repo.save(user);
	}

}
